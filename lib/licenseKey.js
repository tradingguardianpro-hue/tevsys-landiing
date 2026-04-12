/**
 * Generación de claves Essential (10 caracteres): ESEMEN/ESEANU + 4 alfanuméricos aleatorios.
 * Usado por webhooks (Lemon, Stripe, Paddle, futuro UniPayment).
 */

const crypto = require("node:crypto");

const ALPHANUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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

/**
 * Genera clave Essential única comprobando colisión en Redis (getLicense).
 * @param {boolean} esAnual
 * @param {(k: string) => Promise<object|null>} getLicense - desde lib/licenses.js
 * @param {number} maxAttempts
 * @returns {Promise<string>}
 */
async function generarClaveEssentialUnica(esAnual, getLicense, maxAttempts = 10) {
  const prefix = prefijoEssential(esAnual);
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const key = prefix + generarSufijoAleatorio4();
    const existing = await getLicense(key);
    if (!existing) return key;
  }
  throw new Error("[licenseKey] No se pudo generar clave única tras reintentos");
}

module.exports = {
  generarSufijoAleatorio4,
  prefijoEssential,
  generarClaveEssentialUnica,
};
