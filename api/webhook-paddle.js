/**
 * Webhook Paddle — tevsys MVP
 * Recibe transaction.paid → genera clave ESEMEN/ESEANU → guarda en BD → envía email
 * Variables de entorno:
 * - PADDLE_WEBHOOK_SECRET
 * - PADDLE_API_KEY (opcional, para resolver email por customer_id)
 * - PADDLE_PRICE_ID_MONTHLY
 * - PADDLE_PRICE_ID_YEARLY
 * - RESEND_API_KEY
 * - RESEND_FROM
 * - TEVSYS_DOWNLOAD_EX5_URL (opcional)
 */

const crypto = require("node:crypto");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const rawBody = await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });

  const signature = req.headers["paddle-signature"];
  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!verifyPaddleSignature(rawBody, signature, secret)) {
    console.error("[webhook-paddle] Firma inválida");
    return res.status(401).json({ error: "Invalid signature" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const eventType = payload?.event_type;
  const data = payload?.data || {};

  if (eventType !== "transaction.paid") {
    return res.status(200).json({ ok: true, skipped: "event " + String(eventType) });
  }

  const priceId = extractPriceId(data);
  const monthlyId = process.env.PADDLE_PRICE_ID_MONTHLY;
  const yearlyId = process.env.PADDLE_PRICE_ID_YEARLY;

  const variant = resolveVariant(priceId, monthlyId, yearlyId);
  if (!variant) {
    console.error("[webhook-paddle] price_id no reconocido:", priceId);
    return res.status(400).json({
      error: "Unknown price_id",
      received_price_id: priceId || null,
      hint: "Configura PADDLE_PRICE_ID_MONTHLY / PADDLE_PRICE_ID_YEARLY",
    });
  }

  let email = extractEmail(data);
  if (!email && data?.customer_id) {
    email = await fetchCustomerEmail(data.customer_id, process.env.PADDLE_API_KEY);
  }
  if (!email) {
    return res.status(400).json({
      error: "Missing customer email",
      hint: "No viene en payload y no se pudo resolver con customer_id + PADDLE_API_KEY",
    });
  }

  const orderId = String(data?.id || data?.transaction_id || data?.subscription_id || Date.now());
  const esAnual = variant === "anual";
  const licenseKey = generarClaveDesdeString(orderId, esAnual);
  const expiresAt = calcularExpira(esAnual);

  const { saveLicense } = require("../lib/licenses");
  const saveResult = await saveLicense(licenseKey, {
    email,
    tier: "essential",
    variant,
    orderId,
    provider: "paddle",
    providerPriceId: priceId || null,
    expiresAt,
  });

  if (saveResult === "error") {
    console.error("[webhook-paddle] BD falló. No enviamos email para evitar clave fantasma.");
    return res.status(500).json({
      error: "Database save failed",
      hint: "Clave generada pero no guardada. Revisa UPSTASH_REDIS_*. No se envió email.",
    });
  }

  if (saveResult === "skipped") {
    console.warn("[webhook-paddle] BD no configurada. Enviamos email sin persistencia.");
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const { Resend } = require("resend");
      const resend = new Resend(resendKey);
      await enviarEmail(resend, email, licenseKey);
    } catch (err) {
      console.error("[webhook-paddle] Error enviando email:", err);
      return res.status(500).json({
        error: "Email send failed",
        license_key: licenseKey,
      });
    }
  }

  return res.status(200).json({
    ok: true,
    provider: "paddle",
    event: eventType,
    license_key: licenseKey,
    email,
    variant,
  });
};

function verifyPaddleSignature(rawBody, signatureHeader, secret) {
  if (!secret || !signatureHeader) return false;
  const parsed = parseSignatureHeader(signatureHeader);
  if (!parsed.ts || !parsed.h1 || parsed.h1.length === 0) return false;

  const signedPayload = `${parsed.ts}:${rawBody}`;
  const digest = crypto.createHmac("sha256", secret).update(signedPayload).digest("hex");

  return parsed.h1.some((candidate) => safeCompareHex(digest, candidate));
}

function parseSignatureHeader(header) {
  const out = { ts: null, h1: [] };
  const parts = String(header)
    .split(";")
    .map((p) => p.trim())
    .filter(Boolean);
  for (const p of parts) {
    const idx = p.indexOf("=");
    if (idx < 0) continue;
    const k = p.slice(0, idx).trim();
    const v = p.slice(idx + 1).trim();
    if (k === "ts") out.ts = v;
    if (k === "h1") out.h1.push(v);
  }
  return out;
}

function safeCompareHex(a, b) {
  try {
    const ba = Buffer.from(String(a), "utf8");
    const bb = Buffer.from(String(b), "utf8");
    if (ba.length !== bb.length) return false;
    return crypto.timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}

function extractPriceId(data) {
  return (
    data?.items?.[0]?.price?.id ||
    data?.items?.[0]?.price_id ||
    data?.details?.line_items?.[0]?.price_id ||
    data?.details?.line_items?.[0]?.price?.id ||
    null
  );
}

function resolveVariant(priceId, monthlyId, yearlyId) {
  if (priceId && yearlyId && priceId === yearlyId) return "anual";
  if (priceId && monthlyId && priceId === monthlyId) return "mensual";
  return null;
}

function extractEmail(data) {
  return (
    data?.customer?.email ||
    data?.email ||
    data?.billing_details?.email ||
    data?.custom_data?.email ||
    null
  );
}

async function fetchCustomerEmail(customerId, apiKey) {
  if (!customerId || !apiKey) return null;
  try {
    const resp = await fetch(`https://api.paddle.com/customers/${encodeURIComponent(customerId)}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) return null;
    const json = await resp.json();
    return json?.data?.email || null;
  } catch {
    return null;
  }
}

function generarClaveDesdeString(sourceId, esAnual) {
  const prefix = esAnual ? "ESEANU" : "ESEMEN";
  const hash = crypto.createHash("sha256").update(String(sourceId)).digest("hex");
  const n = parseInt(hash.slice(0, 8), 16) % 10000;
  const suffix = String(n).padStart(4, "0");
  return prefix + suffix;
}

function calcularExpira(esAnual) {
  const d = new Date();
  d.setMonth(d.getMonth() + (esAnual ? 12 : 1));
  return d.toISOString().slice(0, 10);
}

function buildEmailHtml(licenseKey, downloadUrl) {
  const INSTALACION_URL = "https://www.tevsys.io/instalacion";
  const ACCENT = "#f5b041";
  const tieneLinkDescarga = typeof downloadUrl === "string" && downloadUrl.trim() !== "";

  return (
    "<table role='presentation' cellpadding='0' cellspacing='0' border='0' width='100%' style='max-width:560px; margin:0 auto; font-family:Segoe UI,Helvetica,Arial,sans-serif; font-size:15px; line-height:1.5; color:#333;'>" +
    "<tr><td style='padding:32px 24px;'>" +
    "<p style='margin:0 0 8px 0; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:#888;'>tevsys</p>" +
    "<p style='margin:0 0 24px 0;'>Tu licencia está lista.</p>" +
    "<p style='margin:0 0 16px 0;'>Clave de activación:</p>" +
    "<p style='margin:0 0 20px 0; font-size:20px; font-weight:600; font-family:Consolas,Monaco,monospace; letter-spacing:2px;'>" +
    licenseKey +
    "</p>" +
    (tieneLinkDescarga
      ? "<p style='margin:0 0 12px 0;'>Descarga: <a href='" +
        downloadUrl +
        "' style='color:" +
        ACCENT +
        "; font-weight:600; text-decoration:none;'>tevsys (.ex5)</a></p>"
      : "") +
    "<p style='margin:0 0 12px 0;'>Guía de instalación: <a href='" +
    INSTALACION_URL +
    "' style='color:" +
    ACCENT +
    "; font-weight:600; text-decoration:none;'>" +
    INSTALACION_URL +
    "</a></p>" +
    "<p style='margin:0;'>Soporte: <a href='mailto:info@tevsys.io' style='color:" +
    ACCENT +
    "; font-weight:600; text-decoration:none;'>info@tevsys.io</a></p>" +
    "</td></tr></table>"
  );
}

async function enviarEmail(resend, to, licenseKey) {
  const from = process.env.RESEND_FROM || "tevsys <onboarding@resend.dev>";
  const downloadUrl = process.env.TEVSYS_DOWNLOAD_EX5_URL || "";
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject: "tevsys Essential — Tu licencia está lista",
    html: buildEmailHtml(licenseKey, downloadUrl),
  });
  if (error) {
    throw new Error("Resend: " + JSON.stringify(error));
  }
  return data;
}
