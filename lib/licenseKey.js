/**
 * Generación de claves tevsys (10 caracteres): TTT+PPP + 4 alfanuméricos aleatorios.
 * Usado por webhooks (Lemon, Stripe, Paddle) y emisión manual partner (scripts).
 */

const crypto = require("node:crypto");

const ALPHANUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** Prefijos de 6 caracteres (TTT+PPP) por tier y periodo */
const TIER_PERIOD_PREFIX = {
  essential: { mensual: "ESEMEN", anual: "ESEANU" },
  advanced: { mensual: "ADVMEN", anual: "ADVANU" },
  pro: { mensual: "PROMEN", anual: "PROANU" },
  pro_multi_2: { mensual: "PR2MEN", anual: "PR2ANU" },
  pro_multi_3: { mensual: "PR3MEN", anual: "PR3ANU" },
  elite: { mensual: "ELIMEN", anual: "ELIANU" },
};

function generarSufijoAleatorio4() {
  let s = "";
  for (let i = 0; i < 4; i++) {
    s += ALPHANUM[crypto.randomInt(0, ALPHANUM.length)];
  }
  return s;
}

function prefijoEssential(esAnual) {
  return esAnual ? "ESEANU" : "ESEMEN";
}

function prefijoTierPeriodo(tier, esAnual) {
  const t = String(tier || "essential").toLowerCase();
  const period = esAnual ? "anual" : "mensual";
  const map = TIER_PERIOD_PREFIX[t];
  if (!map) {
    throw new Error(`[licenseKey] Tier desconocido: ${tier}`);
  }
  return map[period];
}

/**
 * Genera clave única con prefijo fijo de 6 caracteres (anti-colisión Redis).
 * @param {string} prefix6 - Ej. ADVMEN, ESEMEN
 * @param {(k: string) => Promise<object|null>} getLicense
 * @param {number} maxAttempts
 * @returns {Promise<string>}
 */
async function generarClaveUnicaPorPrefijo(prefix6, getLicense, maxAttempts = 10) {
  const prefix = String(prefix6 || "").toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(prefix)) {
    throw new Error(`[licenseKey] Prefijo inválido (6 chars): ${prefix6}`);
  }
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const key = prefix + generarSufijoAleatorio4();
    const existing = await getLicense(key);
    if (!existing) return key;
  }
  throw new Error("[licenseKey] No se pudo generar clave única tras reintentos");
}

/**
 * Genera clave Essential única comprobando colisión en Redis (getLicense).
 * @param {boolean} esAnual
 * @param {(k: string) => Promise<object|null>} getLicense - desde lib/licenses.js
 * @param {number} maxAttempts
 * @returns {Promise<string>}
 */
async function generarClaveEssentialUnica(esAnual, getLicense, maxAttempts = 10) {
  return generarClaveUnicaPorPrefijo(prefijoEssential(esAnual), getLicense, maxAttempts);
}

/**
 * Genera clave partner/manual por tier (Advanced, Pro, etc.).
 * @param {string} tier - essential | advanced | pro | pro_multi_2 | pro_multi_3 | elite
 * @param {boolean} esAnual
 * @param {(k: string) => Promise<object|null>} getLicense
 * @param {number} maxAttempts
 * @returns {Promise<string>}
 */
async function generarClaveTierUnica(tier, esAnual, getLicense, maxAttempts = 10) {
  const prefix = prefijoTierPeriodo(tier, esAnual);
  return generarClaveUnicaPorPrefijo(prefix, getLicense, maxAttempts);
}

/**
 * Fecha ISO (YYYY-MM-DD) sumando días naturales desde hoy (UTC).
 * @param {number} dias
 * @returns {string}
 */
function calcularExpiraEnDias(dias) {
  const n = Number(dias);
  if (!Number.isFinite(n) || n < 1) {
    throw new Error(`[licenseKey] Días inválidos: ${dias}`);
  }
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + Math.floor(n));
  return d.toISOString().slice(0, 10);
}

module.exports = {
  ALPHANUM,
  TIER_PERIOD_PREFIX,
  generarSufijoAleatorio4,
  prefijoEssential,
  prefijoTierPeriodo,
  generarClaveUnicaPorPrefijo,
  generarClaveEssentialUnica,
  generarClaveTierUnica,
  calcularExpiraEnDias,
};
