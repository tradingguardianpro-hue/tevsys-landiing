/**
 * API de validación de licencias — tevsys
 * GET /api/validate?key=ESEMEN1234
 * Responde: { valid, tier?, expiresAt?, reason?, message? }
 * Rate limit (fallos): por IP (ventana 1 min) y por clave (ventana 1 h) — Redis Upstash.
 */

const { getLicense } = require("../lib/licenses");
const { getClientIp, recordValidationFailure } = require("../lib/rateLimitValidate");

function normalizeKey(raw) {
  return String(raw || "")
    .replace(/[\s-]/g, "")
    .toUpperCase();
}

function json429(res, retryAfterSeconds, scope) {
  const body = {
    valid: false,
    reason: "rate_limited",
    message: "Demasiados intentos. Espera unos minutos.",
    retryAfterSeconds,
    scope: scope || "ip",
  };
  res.setHeader("Retry-After", String(retryAfterSeconds));
  return res.status(429).json(body);
}

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const rawQuery = req.query.key;
  const raw = rawQuery != null ? String(rawQuery) : "";

  if (!raw.trim()) {
    const rl = await recordValidationFailure(ip, null);
    if (rl.blocked) {
      return json429(res, rl.retryAfterSeconds || 60, rl.scope);
    }
    return res.status(400).json({
      valid: false,
      reason: "missing_key",
    });
  }

  const key = normalizeKey(raw);

  // Validar formato: 10 caracteres alfanuméricos
  if (!/^[A-Z0-9]{10}$/.test(key)) {
    const rl = await recordValidationFailure(ip, key.length <= 64 ? key : key.slice(0, 64));
    if (rl.blocked) {
      return json429(res, rl.retryAfterSeconds || 60, rl.scope);
    }
    return res.status(200).json({
      valid: false,
      reason: "invalid_format",
    });
  }

  try {
    const license = await getLicense(key);
    if (!license) {
      const rl = await recordValidationFailure(ip, key);
      if (rl.blocked) {
        return json429(res, rl.retryAfterSeconds || 60, rl.scope);
      }
      return res.status(200).json({
        valid: false,
        reason: "not_found",
      });
    }

    const expiresAt = license.expiresAt;
    const now = new Date();
    const expiryDate = expiresAt ? new Date(expiresAt) : null;

    if (expiryDate && expiryDate < now) {
      const rl = await recordValidationFailure(ip, key);
      if (rl.blocked) {
        return json429(res, rl.retryAfterSeconds || 60, rl.scope);
      }
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
