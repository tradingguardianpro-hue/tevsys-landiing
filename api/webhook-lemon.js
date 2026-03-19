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

async function enviarEmail(resend, to, licenseKey) {
  const INSTALACION_URL = "https://www.tevsys.io/instalacion";
  const from = process.env.RESEND_FROM || "tevsys <onboarding@resend.dev>";

  const { data, error } = await resend.emails.send({
    from: from,
    to: [to],
    subject: "tevsys Essential — Tu licencia",
    html:
      "<p>Gracias por tu compra de tevsys Essential.</p>" +
      "<p><strong>Tu clave de licencia:</strong></p>" +
      '<p style="font-size:1.2em; font-family:monospace; background:#f4f4f4; padding:12px; border-radius:6px;">' +
      licenseKey +
      "</p>" +
      "<p><strong>Cómo usarla:</strong></p>" +
      "<ol><li>Abre MetaTrader 5</li>" +
      "<li>Pulsa <strong>F7</strong> (o Herramientas → Options → Expert Advisors)</li>" +
      "<li>Pega la clave en el campo License Key del EA tevsys</li></ol>" +
      '<p>Instalación: <a href="' +
      INSTALACION_URL +
      '">' +
      INSTALACION_URL +
      "</a></p>" +
      "<p>Cualquier duda: info@tevsys.io</p>" +
      "<p>— Gabi, tevsys</p>",
  });

  if (error) throw new Error("Resend: " + JSON.stringify(error));
  return data;
}
