/**
 * Libro de ventas tevsys — Upstash Redis
 * Variables: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
 */

const PREFIX = "tevsys:sale:";

async function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  const { Redis } = require("@upstash/redis");
  return new Redis({ url, token });
}

/**
 * Upsert de registro de venta.
 * @returns {"saved"|"skipped"|"error"}
 */
async function upsertSaleRecord(recordId, data) {
  const redis = await getRedis();
  if (!redis) {
    console.warn("[sales-ledger] UPSTASH_REDIS_* no configurados. No se persiste.");
    return "skipped";
  }

  const key = PREFIX + String(recordId);
  try {
    const existingRaw = await redis.get(key);
    const existing =
      existingRaw && typeof existingRaw === "string" ? JSON.parse(existingRaw) : existingRaw || {};
    const merged = {
      ...existing,
      ...data,
      createdAt: existing.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await redis.set(key, JSON.stringify(merged));
    return "saved";
  } catch (err) {
    console.error("[sales-ledger] Error guardando:", err);
    return "error";
  }
}

module.exports = { upsertSaleRecord };

