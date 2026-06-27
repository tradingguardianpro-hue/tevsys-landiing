#!/usr/bin/env node
/**
 * Emisión manual de licencias partner / evaluación (ej. Axiom 90 d Advanced).
 *
 * Requiere en el entorno (Upstash → copiar de Vercel o consola):
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 *
 * Uso:
 *   node scripts/create-partner-license.js --tier advanced --days 90 --email juan@example.com --partner "Axiom Labs"
 *   node scripts/create-partner-license.js --tier advanced --days 90 --dry-run
 *
 * Tras guardar, probar:
 *   curl "https://tevsys.io/api/validate?key=ADVMENXXXX"
 */

const { saveLicense, getLicense } = require("../lib/licenses");
const { generarClaveTierUnica, calcularExpiraEnDias } = require("../lib/licenseKey");

function parseArgs(argv) {
  const out = {
    tier: "advanced",
    days: 90,
    email: "",
    partner: "",
    note: "",
    orderId: "",
    dryRun: false,
    anual: false,
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    const next = argv[i + 1];
    if (a === "--tier" && next) {
      out.tier = next;
      i++;
    } else if (a === "--days" && next) {
      out.days = Number(next);
      i++;
    } else if (a === "--email" && next) {
      out.email = next;
      i++;
    } else if (a === "--partner" && next) {
      out.partner = next;
      i++;
    } else if (a === "--note" && next) {
      out.note = next;
      i++;
    } else if (a === "--order-id" && next) {
      out.orderId = next;
      i++;
    } else if (a === "--anual") {
      out.anual = true;
    } else if (a === "--dry-run") {
      out.dryRun = true;
    } else if (a === "--help" || a === "-h") {
      out.help = true;
    }
  }
  return out;
}

function printHelp() {
  console.log(`
create-partner-license.js — guarda licencia en Upstash (evaluación / partner)

Opciones:
  --tier advanced|pro|essential|pro_multi_2|pro_multi_3|elite   (default: advanced)
  --days 90          Caducidad en días naturales (default: 90)
  --email texto      Email del contacto (recomendado)
  --partner texto    Etiqueta partner (ej. "Axiom Labs")
  --note texto       Nota interna
  --order-id texto   Referencia (default: PARTNER-YYYYMMDD)
  --anual            Usar prefijo anual (ADVANU…) en lugar de mensual
  --dry-run          Solo muestra clave y fecha, no escribe en Redis

Variables de entorno: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
`);
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const expiresAt = calcularExpiraEnDias(args.days);
  const orderId =
    args.orderId ||
    `PARTNER-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}`;

  let licenseKey;
  if (args.dryRun) {
    const { generarSufijoAleatorio4, prefijoTierPeriodo } = require("../lib/licenseKey");
    licenseKey = prefijoTierPeriodo(args.tier, args.anual) + generarSufijoAleatorio4();
    console.log("[dry-run] No se escribe en Redis.");
  } else {
    licenseKey = await generarClaveTierUnica(args.tier, args.anual, getLicense);
    const payload = {
      email: args.email || "partner@tevsys.io",
      tier: String(args.tier).toLowerCase(),
      variant: `partner_${args.days}d`,
      orderId,
      expiresAt,
    };
    if (args.partner) payload.partner = args.partner;
    if (args.note) payload.note = args.note;

    const saveResult = await saveLicense(licenseKey, payload);
    if (saveResult === "skipped") {
      console.error(
        "ERROR: UPSTASH_REDIS_* no configuradas. Copia URL y token desde Upstash/Vercel."
      );
      process.exit(1);
    }
    if (saveResult === "error") {
      console.error("ERROR: fallo al guardar en Redis.");
      process.exit(1);
    }
  }

  const validateUrl = `https://tevsys.io/api/validate?key=${licenseKey}`;
  console.log("");
  console.log("=== Licencia partner tevsys ===");
  console.log("Clave:      ", licenseKey);
  console.log("Tier:       ", args.tier);
  console.log("Caduca:     ", expiresAt, `(${args.days} días naturales)`);
  if (args.email) console.log("Email:      ", args.email);
  if (args.partner) console.log("Partner:    ", args.partner);
  console.log("Validar API:", validateUrl);
  console.log("");
  console.log("Siguiente: F7 en MT5 con esta clave + WebRequest https://tevsys.io");
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
