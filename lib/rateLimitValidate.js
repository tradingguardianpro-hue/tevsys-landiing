/**
 * Rate limiting para GET /api/validate — fallos de validación.
 * Usa el mismo Redis Upstash que licencias (UPSTASH_REDIS_*).
 *
 * Límites por defecto (ajustables por env):
 * - Por IP: máx. VALIDATE_RL_IP_MAX fallos por ventana de 1 minuto
 * - Por clave: máx. VALIDATE_RL_KEY_MAX fallos por ventana de 1 hora
 *
 * Si Redis no está configurado: no bloquea (fail-open) para no cortar validación en entornos sin BD.
 */

const { Redis } = require("@upstash/redis");

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.length) {
    return xff.split(",")[0].trim();
  }
  const real = req.headers["x-real-ip"];
  if (typeof real === "string" && real.length) return real.trim();
  return "unknown";
}

function readLimits() {
  const ipMax = Math.max(1, parseInt(process.env.VALIDATE_RL_IP_MAX || "10", 10) || 10);
  const keyMax = Math.max(1, parseInt(process.env.VALIDATE_RL_KEY_MAX || "3", 10) || 3);
  return { ipMax, keyMax };
}

/**
 * Registra un intento fallido y devuelve si hay que bloquear con 429.
 * @param {string} ip
 * @param {string|null} keyBucket - clave normalizada (máx. 64 chars). Si `null`, solo cuenta fallos por IP (p.ej. key ausente).
 */
async function recordValidationFailure(ip, keyBucket) {
  const redis = getRedis();
  if (!redis) {
    return { blocked: false, redisUnavailable: true };
  }

  const { ipMax, keyMax } = readLimits();
  const minute = Math.floor(Date.now() / 60000);
  const hour = Math.floor(Date.now() / 3600000);

  const ipRedisKey = `rl:v1:vf:ip:${minute}:${ip}`;

  const ipCount = await redis.incr(ipRedisKey);
  if (ipCount === 1) await redis.expire(ipRedisKey, 120);

  if (ipCount > ipMax) {
    return { blocked: true, scope: "ip", retryAfterSeconds: 60 };
  }

  if (keyBucket != null) {
    const safeKey = String(keyBucket).slice(0, 64);
    const keyRedisKey = `rl:v1:vf:key:${hour}:${safeKey}`;
    const keyCount = await redis.incr(keyRedisKey);
    if (keyCount === 1) await redis.expire(keyRedisKey, 7200);
    if (keyCount > keyMax) {
      return { blocked: true, scope: "key", retryAfterSeconds: 3600 };
    }
  }

  return { blocked: false };
}

module.exports = {
  getClientIp,
  recordValidationFailure,
};
