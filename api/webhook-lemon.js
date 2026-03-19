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

/**
 * Plantilla email premium tevsys — licencia Essential.
 * Editable: copy, tono, estructura. Mantener variables: {{licenseKey}}, {{INSTALACION_URL}}.
 */
function buildEmailHtml(licenseKey) {
  const INSTALACION_URL = "https://www.tevsys.io/instalacion";
  const ACCENT = "#f5b041"; // Amarillo tevsys
  const BORDER = "#e8e8e8";

  return (
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px; margin:0 auto; font-family:Segoe UI,Helvetica,Arial,sans-serif; font-size:15px; line-height:1.5; color:#333;">' +
    "<tr><td style='padding:32px 24px;'>" +
    // Header
    "<p style='margin:0 0 8px 0; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:#888;'>tevsys</p>" +
    "<p style='margin:0 0 24px 0; font-size:12px; color:#999;'>Where precision meets the edge</p>" +
    // Saludo
    "<p style='margin:0 0 20px 0;'>Bienvenido a tevsys Essential.</p>" +
    "<p style='margin:0 0 24px 0;'>Has dado el paso. Tu protección automatizada está lista. Aquí tienes tu clave de licencia:</p>" +
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
    "<p style='margin:0 0 12px 0; font-weight:600; color:#222;'>Cómo activarla en MT5:</p>" +
    "<ol style='margin:0 0 24px 0; padding-left:20px;'>" +
    "<li style='margin-bottom:6px;'>Abre MetaTrader 5 y carga tevsys en el gráfico.</li>" +
    "<li style='margin-bottom:6px;'>Pulsa <strong>F7</strong> (o Herramientas → Opciones → Expert Advisors).</li>" +
    "<li>Pega la clave en el campo <strong>License Key</strong> del EA.</li>" +
    "</ol>" +
    // CTA
    "<p style='margin:0 0 8px 0;'>¿Primera vez con tevsys? Guía paso a paso:</p>" +
    "<p style='margin:0 0 24px 0;'><a href='" +
    INSTALACION_URL +
    "' style='color:" +
    ACCENT +
    "; font-weight:600; text-decoration:none;'>tevsys.io/instalacion</a></p>" +
    // Cierre
    "<p style='margin:0 0 4px 0;'>Cualquier duda, aquí estamos: <a href='mailto:info@tevsys.io' style='color:" +
    ACCENT +
    ";'>info@tevsys.io</a></p>" +
    "<p style='margin:0; font-size:13px; color:#777;'>— Gabi · tevsys</p>" +
    "</td></tr></table>"
  );
}

async function enviarEmail(resend, to, licenseKey) {
  const from = process.env.RESEND_FROM || "tevsys <onboarding@resend.dev>";

  const { data, error } = await resend.emails.send({
    from: from,
    to: [to],
    subject: "tevsys Essential — Tu licencia está lista",
    html: buildEmailHtml(licenseKey),
  });

  if (error) throw new Error("Resend: " + JSON.stringify(error));
  return data;
}
