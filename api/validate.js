/**
 * API de validación de licencias — tevsys
 * GET /api/validate?key=ESEMEN1234
 * Responde: { valid, tier?, expiresAt?, reason? }
 * Usado por el EA para comprobar si la licencia es válida y no ha expirado.
 */

const { getLicense } = require("../lib/licenses");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const key = (req.query.key || "").trim().toUpperCase();
  if (!key) {
    return res.status(400).json({
      valid: false,
      reason: "missing_key",
    });
  }

  // Validar formato básico: 10 caracteres alfanuméricos
  if (!/^[A-Z0-9]{10}$/.test(key)) {
    return res.status(200).json({
      valid: false,
      reason: "invalid_format",
    });
  }

  try {
    const license = await getLicense(key);
    if (!license) {
      return res.status(200).json({
        valid: false,
        reason: "not_found",
      });
    }

    const expiresAt = license.expiresAt;
    const now = new Date();
    const expiryDate = expiresAt ? new Date(expiresAt) : null;

    if (expiryDate && expiryDate < now) {
      return res.status(200).json({
        valid: false,
        reason: "expired",
        expiresAt: license.expiresAt,
      });
    }

    return res.status(200).json({
      valid: true,
      tier: license.tier || inferTierFromKey(key),
      expiresAt: license.expiresAt,
    });
  } catch (err) {
    console.error("[validate] Error:", err);
    return res.status(500).json({
      valid: false,
      reason: "error",
    });
  }
};

/**
 * Fallback: derivar tier del prefijo de la clave si la BD no lo tiene
 */
function inferTierFromKey(key) {
  const prefix = key.substring(0, 3);
  const map = {
    ESE: "essential",
    ADV: "advanced",
    PRO: "pro",
    PR2: "pro_multi_2",
    PR3: "pro_multi_3",
    ELI: "elite",
  };
  return map[prefix] || "unknown";
}
