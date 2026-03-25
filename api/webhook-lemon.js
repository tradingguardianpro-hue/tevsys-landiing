/**
 * Webhook Lemon Squeezy — tevsys MVP
 * Recibe order_created → genera clave ESEMEN/ESEANU → envía email
 * Variables de entorno: LEMON_WEBHOOK_SECRET, RESEND_API_KEY
 */

const crypto = require("node:crypto");

// Sin body parser para tener raw body y validar firma
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

  const signature = req.headers["x-signature"];
  const eventName = req.headers["x-event-name"];
  const secret = process.env.LEMON_WEBHOOK_SECRET;

  if (!verifySignature(rawBody, signature, secret)) {
    console.error("[webhook-lemon] Firma inválida");
    return res.status(401).json({ error: "Invalid signature" });
  }

  if (eventName !== "order_created") {
    return res.status(200).json({ ok: true, skipped: "event " + eventName });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const attrs = payload?.data?.attributes;
  if (!attrs) {
    return res.status(400).json({ error: "Missing data.attributes" });
  }

  const email = attrs.user_email;
  const orderNumber = attrs.order_number;
  const firstItem = attrs.first_order_item;
  const variantName = (firstItem && firstItem.variant_name) || "";

  if (!email || !orderNumber) {
    return res.status(400).json({ error: "Missing user_email or order_number" });
  }

  const esAnual = esVarianteAnual(variantName);
  const licenseKey = generarClave(orderNumber, esAnual);

  const expiresAt = calcularExpira(esAnual);
  const { saveLicense } = require("../lib/licenses");
  const saveResult = await saveLicense(licenseKey, {
    email,
    tier: "essential",
    variant: esAnual ? "anual" : "mensual",
    orderId: String(orderNumber),
    expiresAt,
  });
  if (saveResult === "error") {
    console.error("[webhook-lemon] BD falló. No enviamos email para evitar clave fantasma.");
    return res.status(500).json({
      error: "Database save failed",
      hint: "Clave generada pero no guardada. Revisa UPSTASH_REDIS_*. No se envió email al cliente.",
    });
  }
  if (saveResult === "skipped") {
    console.warn("[webhook-lemon] BD no configurada. Enviamos email pero la clave NO está persistida.");
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const { Resend } = require("resend");
      const resend = new Resend(resendKey);
      await enviarEmail(resend, email, licenseKey);
    } catch (err) {
      console.error("[webhook-lemon] Error enviando email:", err);
      return res.status(500).json({
        error: "Email send failed",
        license_key: licenseKey,
        hint: "Clave generada pero email falló. Envía manualmente.",
      });
    }
  } else {
    console.log(
      "[webhook-lemon] RESEND_API_KEY no configurado. Clave: " +
        licenseKey +
        " -> " +
        email
    );
  }

  return res.status(200).json({
    ok: true,
    license_key: licenseKey,
    email: email,
    variant: esAnual ? "anual" : "mensual",
  });
};

function verifySignature(rawBody, signature, secret) {
  if (!secret || !signature) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(rawBody).digest("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(digest, "utf8"),
      Buffer.from(signature, "utf8")
    );
  } catch {
    return false;
  }
}

function esVarianteAnual(variantName) {
  if (!variantName || typeof variantName !== "string") return false;
  const v = variantName.toLowerCase();
  return (
    v.indexOf("anual") >= 0 ||
    v.indexOf("annual") >= 0 ||
    v.indexOf("año") >= 0 ||
    v.indexOf("year") >= 0 ||
    v.indexOf("390") >= 0
  );
}

function generarClave(orderNumber, esAnual) {
  const prefix = esAnual ? "ESEANU" : "ESEMEN";
  const num = String(orderNumber).padStart(4, "0").slice(-4);
  return prefix + num;
}

function calcularExpira(esAnual) {
  const d = new Date();
  d.setMonth(d.getMonth() + (esAnual ? 12 : 1));
  return d.toISOString().slice(0, 10);
}

/**
 * Plantilla email premium tevsys — licencia Essential.
 * Editable: copy, tono, estructura. Mantener variables: {{licenseKey}}, {{INSTALACION_URL}}.
 */
function buildEmailHtml(licenseKey, downloadUrl) {
  const INSTALACION_URL = "https://www.tevsys.io/instalacion";
  const ACCENT = "#f5b041"; // Amarillo tevsys
  const BORDER = "#e8e8e8";
  const tieneLinkDescarga = typeof downloadUrl === "string" && downloadUrl.trim() !== "";

  return (
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px; margin:0 auto; font-family:Segoe UI,Helvetica,Arial,sans-serif; font-size:15px; line-height:1.5; color:#333;">' +
    "<tr><td style='padding:32px 24px;'>" +
    // Header
    "<p style='margin:0 0 8px 0; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:#888;'>tevsys</p>" +
    "<p style='margin:0 0 24px 0; font-size:12px; color:#999;'>Where precision meets the edge</p>" +
    // Saludo
    "<p style='margin:0 0 20px 0;'>Bienvenido a tevsys Essential.</p>" +
    "<p style='margin:0 0 24px 0;'>Has dado el paso. Ahora la disciplina no se negocia. Se ejecuta. Gestión y protección automatizadas.</p>" +
    // Contexto descarga (mismo flujo para quien ya tenia demo y quien compra directo)
    "<p style='margin:0 0 10px 0; font-weight:600; color:#222;'>Antes de activar tu clave:</p>" +
    "<p style='margin:0 0 10px 0;'>Si ya tienes tevsys instalado por la demo, puedes usar ese mismo archivo.</p>" +
    (tieneLinkDescarga
      ? "<p style='margin:0 0 24px 0;'>Si no lo tienes aun, descargalo aqui: <a href='" +
        downloadUrl +
        "' style='color:" +
        ACCENT +
        "; font-weight:600; text-decoration:none;'>Descargar tevsys (.ex5)</a>.</p>"
      : "<p style='margin:0 0 24px 0;'>Si no lo tienes aun, escríbenos a <a href='mailto:info@tevsys.io' style='color:" +
        ACCENT +
        "; font-weight:600; text-decoration:none;'>info@tevsys.io</a> y te enviamos el enlace de descarga.</p>") +
    "<p style='margin:0 0 24px 0;'>Aquí tienes tu clave de licencia:</p>" +
    // Clave
    "<table role='presentation' cellpadding='0' cellspacing='0' border='0' style='width:100%; margin:0 0 24px 0; border:1px solid " +
    BORDER +
    "; border-left:4px solid " +
    ACCENT +
    "; border-radius:6px; background:#fafafa;'>" +
    "<tr><td style='padding:16px 20px;'>" +
    "<p style='margin:0 0 4px 0; font-size:11px; color:#666;'>Tu clave (10 caracteres)</p>" +
    "<p style='margin:0; font-size:20px; font-weight:600; font-family:Consolas,Monaco,monospace; letter-spacing:2px; color:#111;'>" +
    licenseKey +
    "</p>" +
    "</td></tr></table>" +
    // Instrucciones
    "<p style='margin:0 0 12px 0; font-weight:600; color:#222;'>Cómo activarla en MT5 (solo la primera vez):</p>" +
    "<ol style='margin:0 0 24px 0; padding-left:20px;'>" +
    "<li style='margin-bottom:6px;'>Abre MetaTrader 5. Ve a <strong>Herramientas → Opciones → Asesores Expertos</strong>.</li>" +
    "<li style='margin-bottom:6px;'>Activa <strong>Permitir comercio algorítmico</strong>.</li>" +
    "<li style='margin-bottom:6px;'>Activa <strong>Permitir WebRequest</strong> y añade <code>https://tevsys.io</code> en la lista de URLs.</li>" +
    "<li style='margin-bottom:6px;'>Carga tevsys en el gráfico. Pulsa <strong>F7</strong> y pega la clave en <strong>License Key</strong>.</li>" +
    "</ol>" +
    // CTA
    "<p style='margin:0 0 8px 0;'>¿Primera vez con tevsys? Guía paso a paso:</p>" +
    "<p style='margin:0 0 24px 0;'><a href='" +
    INSTALACION_URL +
    "' style='color:" +
    ACCENT +
    "; font-weight:600; text-decoration:none;'>tevsys.io/instalacion</a></p>" +
    // Cierre (copy acordado: cercanía + expectativa de respuesta sin acción inmediata)
    "<p style='margin:0 0 8px 0;'>Aquí estamos para lo que necesites:</p>" +
    "<p style='margin:0 0 8px 0;'><a href='mailto:info@tevsys.io' style='color:" +
    ACCENT +
    "; font-weight:600; text-decoration:none;'>info@tevsys.io</a></p>" +
    "<p style='margin:0 0 16px 0;'>Te leemos y te respondemos en cuanto podamos.</p>" +
    "<p style='margin:0; font-size:13px; color:#777;'>— Gabi · tevsys</p>" +
    "</td></tr></table>"
  );
}

async function enviarEmail(resend, to, licenseKey) {
  // Dominio verificado: info@tevsys.io. Si no está RESEND_FROM, fallback a onboarding (solo pruebas).
  const from = process.env.RESEND_FROM || "tevsys <onboarding@resend.dev>";
  // Opcional: enlace único de descarga del .ex5 para compradores sin demo previa.
  const downloadUrl = process.env.TEVSYS_DOWNLOAD_EX5_URL || "";

  const { data, error } = await resend.emails.send({
    from: from,
    to: [to],
    subject: "tevsys Essential — Tu licencia está lista",
    html: buildEmailHtml(licenseKey, downloadUrl),
  });

  if (error) {
    console.error("[webhook-lemon] Resend error detail:", JSON.stringify(error));
    throw new Error("Resend: " + JSON.stringify(error));
  }
  return data;
}
