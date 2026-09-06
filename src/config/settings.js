/** Fuente pública canónica (6 sep 2026): ficha / claim web = **90** operativas documentadas. */
export const TEVSYS_DOCUMENTED_OPERATIVES = 90;

export default {
  title: "tevsys — Límites que se cumplen, con precisión y trazabilidad · MT5",
  description: `Utilidad para MetaTrader 5 que hace cumplir las reglas que el trader configura: límites de pérdida y ganancia (día y semana), días OFF y el bloqueo al alcanzar el límite — en intradía y en swing. Precisión documentada, HyperClose y acta contrastable con MT5. No opera por ti. ${TEVSYS_DOCUMENTED_OPERATIVES} operativas documentadas.`,
  documentedOperatives: TEVSYS_DOCUMENTED_OPERATIVES,
  url: "https://www.tevsys.io",
  name: "tevsys",
  /** Perfil LinkedIn del fundador (footer + contacto). Sin foto en home. */
  founderLinkedInUrl: "https://www.linkedin.com/in/gabriel-muela-garc%C3%ADa-020334388",
  founderLinkedInLabelEs: "Fundador · LinkedIn",
  founderLinkedInLabelEn: "Founder · LinkedIn",

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
