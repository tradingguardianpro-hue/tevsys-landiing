/**
 * Persistencia de licencias tevsys — Upstash Redis
 * Variables: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
 */

const PREFIX = "tevsys:license:";

/**
 * Guarda una licencia en Redis.
 * @param {string} licenseKey - Clave (ej. ESEMEN1234)
 * @param {object} data - { email, tier, variant, orderId, expiresAt }
 * @returns {Promise<boolean>} true si se guardó
 */
/**
 * @returns {"saved"|"skipped"|"error"} saved=ok, skipped=BD no configurada, error=fallo real
 */
async function saveLicense(licenseKey, data) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    console.warn("[licenses] UPSTASH_REDIS_* no configurados. No se persiste.");
    return "skipped";
  }

  const { Redis } = require("@upstash/redis");
  const redis = new Redis({ url, token });

  const key = PREFIX + licenseKey;
  const value = JSON.stringify({
    ...data,
    createdAt: new Date().toISOString(),
  });

  try {
    await redis.set(key, value);
    return "saved";
  } catch (err) {
    console.error("[licenses] Error guardando:", err);
    return "error";
  }
}

/**
 * Obtiene una licencia por clave.
 * @param {string} licenseKey
 * @returns {Promise<object|null>} Datos o null
 */
async function getLicense(licenseKey) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const { Redis } = require("@upstash/redis");
  const redis = new Redis({ url, token });

  try {
    const raw = await redis.get(PREFIX + licenseKey);
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (err) {
    console.error("[licenses] Error leyendo:", err);
    return null;
  }
}

module.exports = { saveLicense, getLicense };
