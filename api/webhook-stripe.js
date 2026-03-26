/**
 * Webhook Stripe — tevsys MVP
 * Procesa eventos de facturación y licencias Essential.
 * Variables:
 * - STRIPE_WEBHOOK_SECRET
 * - STRIPE_PRICE_ID_MONTHLY
 * - STRIPE_PRICE_ID_YEARLY
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
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });

  const signature = req.headers["stripe-signature"];
  // Validación robusta: si en Vercel quedó un STRIPE_WEBHOOK_SECRET_V2 viejo,
  // podemos quedarnos bloqueados aunque STRIPE_WEBHOOK_SECRET esté correcto.
  // Probamos ambas candidatas.
  const secretCandidates = [process.env.STRIPE_WEBHOOK_SECRET_V2, process.env.STRIPE_WEBHOOK_SECRET]
    .map((s) => (typeof s === "string" ? s.trim() : ""))
    .filter(Boolean);

  if (!verifyStripeSignature(rawBody, signature, secretCandidates)) {
    console.error("[webhook-stripe] Firma inválida");
    return res.status(401).json({ error: "Invalid signature" });
  }

  const rawBodyStr = rawBody.toString("utf8");
  let event;
  try {
    event = JSON.parse(rawBodyStr);
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  try {
    const eventType = event?.type;
    const object = event?.data?.object || {};

    // No romper si llegan eventos no usados por ahora.
    const supported = new Set([
      "invoice.paid",
      "invoice.payment_failed",
      "charge.refunded",
      "customer.subscription.updated",
      "customer.subscription.deleted",
      "checkout.session.completed",
    ]);
    if (!supported.has(eventType)) {
      return res.status(200).json({ ok: true, skipped: "event " + String(eventType) });
    }

    if (eventType === "invoice.paid") {
      return await handleInvoicePaid(object, res);
    }

    if (eventType === "invoice.payment_failed") {
      return await handleInvoicePaymentFailed(object, res);
    }

    if (eventType === "charge.refunded") {
      return await handleChargeRefunded(object, res);
    }

    if (eventType === "customer.subscription.updated" || eventType === "customer.subscription.deleted") {
      return await handleSubscriptionUpdate(eventType, object, res);
    }

    if (eventType === "checkout.session.completed") {
      // Se guarda trazabilidad pero la licencia se emite al confirmar invoice.paid.
      return await handleCheckoutCompleted(object, res);
    }

    return res.status(200).json({ ok: true, skipped: "event " + String(eventType) });
  } catch (err) {
    console.error("[webhook-stripe] Error interno:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

async function handleInvoicePaid(invoice, res) {
  const priceId = extractInvoicePriceId(invoice);
  const variant = resolveVariantByPriceId(priceId);
  if (!variant) {
    return res.status(400).json({
      error: "Unknown price_id",
      received_price_id: priceId || null,
      hint: "Configura STRIPE_PRICE_ID_MONTHLY / STRIPE_PRICE_ID_YEARLY",
    });
  }

  const email = invoice?.customer_email || invoice?.account_name || null;
  if (!email) {
    return res.status(400).json({
      error: "Missing customer email",
      hint: "Stripe invoice.paid sin customer_email",
    });
  }

  const invoiceId = String(invoice?.id || "");
  const subscriptionId = invoice?.subscription ? String(invoice.subscription) : null;
  const paymentId = String(invoice?.payment_intent || invoice?.charge || invoiceId);

  const gross = toMoney(invoice?.amount_paid);
  const tax = toMoney(invoice?.tax);
  const net = gross != null && tax != null ? round2(gross - tax) : null;
  const currency = (invoice?.currency || "eur").toUpperCase();
  const paidAt = fromEpoch(invoice?.status_transitions?.paid_at) || new Date().toISOString();

  const esAnual = variant === "anual";
  const licenseSource = subscriptionId || invoiceId;
  const licenseKey = generarClaveDesdeString(licenseSource, esAnual);
  const expiresAt = calcularExpira(esAnual);

  const { saveLicense } = require("../lib/licenses");
  const saveResult = await saveLicense(licenseKey, {
    email,
    tier: "essential",
    variant,
    orderId: invoiceId,
    provider: "stripe",
    providerPriceId: priceId || null,
    expiresAt,
  });

  if (saveResult === "error") {
    return res.status(500).json({
      error: "Database save failed (licenses)",
      hint: "Clave generada pero no guardada. No se envió email.",
    });
  }

  const { upsertSaleRecord } = require("../lib/salesLedger");
  const ledgerResult = await upsertSaleRecord(invoiceId, {
    provider: "stripe",
    paymentId,
    invoiceId,
    invoiceUrl: invoice?.hosted_invoice_url || null,
    customerEmail: email,
    customerName: invoice?.customer_name || null,
    country: invoice?.customer_address?.country || null,
    taxId: null,
    plan: variant === "anual" ? "essential_anual" : "essential_mensual",
    amountGross: gross,
    taxAmount: tax,
    amountNet: net,
    currency,
    status: "paid",
    paidAt,
    refundedAt: null,
    licenseKey,
    stripeSubscriptionId: subscriptionId,
    stripePriceId: priceId || null,
  });
  if (ledgerResult === "error") {
    return res.status(500).json({ error: "Database save failed (sales ledger)" });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const { Resend } = require("resend");
      const resend = new Resend(resendKey);
      await enviarEmail(resend, email, licenseKey);
    } catch (err) {
      console.error("[webhook-stripe] Error enviando email:", err);
      return res.status(500).json({
        error: "Email send failed",
        license_key: licenseKey,
      });
    }
  }

  return res.status(200).json({
    ok: true,
    provider: "stripe",
    event: "invoice.paid",
    variant,
    license_key: licenseKey,
    email,
  });
}

async function handleInvoicePaymentFailed(invoice, res) {
  const invoiceId = String(invoice?.id || "");
  if (!invoiceId) {
    return res.status(200).json({ ok: true, skipped: "invoice.payment_failed without id" });
  }
  const { upsertSaleRecord } = require("../lib/salesLedger");
  await upsertSaleRecord(invoiceId, {
    provider: "stripe",
    status: "failed",
    paymentId: String(invoice?.payment_intent || invoice?.charge || ""),
    invoiceId,
    customerEmail: invoice?.customer_email || null,
    invoiceUrl: invoice?.hosted_invoice_url || null,
    currency: (invoice?.currency || "eur").toUpperCase(),
    amountGross: toMoney(invoice?.amount_due),
  });
  return res.status(200).json({ ok: true, provider: "stripe", event: "invoice.payment_failed" });
}

async function handleChargeRefunded(charge, res) {
  const paymentId = String(charge?.payment_intent || charge?.id || "");
  if (!paymentId) {
    return res.status(200).json({ ok: true, skipped: "charge.refunded without id" });
  }
  const { upsertSaleRecord } = require("../lib/salesLedger");
  await upsertSaleRecord(paymentId, {
    provider: "stripe",
    status: "refunded",
    paymentId,
    refundedAt: new Date().toISOString(),
    amountGross: toMoney(charge?.amount),
    amountNet: toMoney(charge?.amount_captured),
    currency: (charge?.currency || "eur").toUpperCase(),
  });
  return res.status(200).json({ ok: true, provider: "stripe", event: "charge.refunded" });
}

async function handleSubscriptionUpdate(eventType, subscription, res) {
  const subscriptionId = String(subscription?.id || "");
  if (!subscriptionId) {
    return res.status(200).json({ ok: true, skipped: eventType + " without id" });
  }
  const status = eventType === "customer.subscription.deleted" ? "canceled" : String(subscription?.status || "updated");
  const { upsertSaleRecord } = require("../lib/salesLedger");
  await upsertSaleRecord(subscriptionId, {
    provider: "stripe",
    stripeSubscriptionId: subscriptionId,
    status,
    customerEmail: subscription?.customer_email || null,
    updatedByEvent: eventType,
  });
  return res.status(200).json({ ok: true, provider: "stripe", event: eventType });
}

async function handleCheckoutCompleted(session, res) {
  const recordId = String(session?.id || "");
  if (!recordId) {
    return res.status(200).json({ ok: true, skipped: "checkout.session.completed without id" });
  }
  const { upsertSaleRecord } = require("../lib/salesLedger");
  await upsertSaleRecord(recordId, {
    provider: "stripe",
    status: session?.payment_status || "completed",
    checkoutSessionId: recordId,
    paymentId: String(session?.payment_intent || ""),
    customerEmail: session?.customer_details?.email || null,
    amountGross: toMoney(session?.amount_total),
    currency: (session?.currency || "eur").toUpperCase(),
    paidAt: new Date().toISOString(),
  });
  return res.status(200).json({ ok: true, provider: "stripe", event: "checkout.session.completed" });
}

function resolveVariantByPriceId(priceId) {
  const monthlyId = process.env.STRIPE_PRICE_ID_MONTHLY;
  const yearlyId = process.env.STRIPE_PRICE_ID_YEARLY;
  if (priceId && yearlyId && priceId === yearlyId) return "anual";
  if (priceId && monthlyId && priceId === monthlyId) return "mensual";
  return null;
}

function extractInvoicePriceId(invoice) {
  return invoice?.lines?.data?.[0]?.price?.id || null;
}

function verifyStripeSignature(rawBodyBuf, signatureHeader, secretCandidates) {
  if (!rawBodyBuf || !Buffer.isBuffer(rawBodyBuf) || !signatureHeader || !Array.isArray(secretCandidates) || secretCandidates.length === 0) {
    return false;
  }
  const parsed = parseStripeSignatureHeader(signatureHeader);
  if (!parsed.t || parsed.v1.length === 0) return false;

  // Stripe: compute HMAC-SHA256 on `${t}.${payload}` where payload is the raw request body (bytes).
  const signedPart = Buffer.from(String(parsed.t) + ".", "utf8");

  return secretCandidates.some((secret) => {
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(signedPart);
    hmac.update(rawBodyBuf);
    const expectedHex = hmac.digest("hex");

    return parsed.v1.some((candidate) => {
      const a = Buffer.from(expectedHex, "utf8");
      const b = Buffer.from(String(candidate), "utf8");
      if (a.length !== b.length) return false;
      return crypto.timingSafeEqual(a, b);
    });
  });
}

function parseStripeSignatureHeader(header) {
  const out = { t: null, v1: [] };
  const parts = String(header)
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  for (const p of parts) {
    const idx = p.indexOf("=");
    if (idx < 0) continue;
    const k = p.slice(0, idx).trim();
    const v = p.slice(idx + 1).trim();
    if (k === "t") out.t = v;
    if (k === "v1") out.v1.push(v);
  }
  return out;
}

// safeCompare eliminado: ya no se usa en verificación Stripe

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

function toMoney(amountMinorUnits) {
  if (amountMinorUnits === null || amountMinorUnits === undefined) return null;
  const n = Number(amountMinorUnits);
  if (Number.isNaN(n)) return null;
  return round2(n / 100);
}

function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

function fromEpoch(seconds) {
  if (!seconds) return null;
  const n = Number(seconds);
  if (Number.isNaN(n) || n <= 0) return null;
  return new Date(n * 1000).toISOString();
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

