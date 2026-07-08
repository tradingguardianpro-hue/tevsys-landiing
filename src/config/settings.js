/** Fuente: `docs/PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3 (repo TGP). */
export const TEVSYS_DOCUMENTED_OPERATIVES = 101;

export default {
  title: "tevsys — Disciplina verificada, precisión de cierre y gestión de riesgo · MT5",
  description: `Disciplina en el trading automatizada. Plataforma para MetaTrader 5: límites de pérdida y ganancia que se cumplen. Cierre preciso documentado. ${TEVSYS_DOCUMENTED_OPERATIVES} operativas con evidencia verificable. Para traders, prop firms y auditorías.`,
  documentedOperatives: TEVSYS_DOCUMENTED_OPERATIVES,
  url: "https://www.tevsys.io",
  name: "tevsys",
  enableThemeSwitcher: false,
  showPlug: false,
  /** Checkout Essential: true = mostrar Comprar + Probar demo en Essential. false = solo Elegir Essential (formulario). Mar 2026: OFF hasta mail + descarga + flujo listos para venta pública. */
  checkoutEssentialReady: false,
  /**
   * Enlace "Preparar y enviar pack" en /auditoria-ia. false = oculto. true = enlaza a /auditoria-ia/empezar (transición checklist) → usuario sigue a /auditoria-ia/pack (herramienta local).
   */
  auditPackPreparationVisible: false,
  /** URL checkout Mensual (39 €/mes). Pegar el link que copias de Lemon Share (solo Mensual activado). */
  checkoutEssentialUrlMensual: "https://tevsys.lemonsqueezy.com/checkout/buy/e24253bf-82e6-4ce7-ba37-4888b4dd3d03",
  /** URL checkout Anual (390 €/año). Copiar desde Lemon Share → solo Anual activado. */
  checkoutEssentialUrlAnual: "https://tevsys.lemonsqueezy.com/checkout/buy/TU_LINK_ANUAL_AQUI",
};
