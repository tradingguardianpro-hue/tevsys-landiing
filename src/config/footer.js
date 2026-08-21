export const footerSocials = [];

/** @deprecated Nav principal solo en header (jun 2026). Mantener vacío o eliminar en limpieza theme-setup. */
export const footerNav = [];

/**
 * Columnas inferiores — guías en orden de embudo + producto + legal.
 * Canon 21 ago: minuto de límites = Advanced/Pro (semana), no Essential.
 */
export const footerColumns = [
  {
    title: 'Guías',
    groups: [
      {
        items: [{ title: 'Cómo instalar', slug: '/instalacion' }],
      },
      {
        label: 'Essential',
        items: [{ title: 'Configuración', slug: '/configuracion#configuracion-video' }],
      },
      {
        label: 'Advanced / Pro',
        items: [
          { title: 'Configurar límites (~1 min)', slug: '/configuracion#configurar-limites' },
          { title: 'Config · al instalar (entre semana)', slug: '/configuracion-al-instalar' },
          { title: 'Config · en fin de semana', slug: '/configuracion-fin-de-semana' },
        ],
      },
    ],
  },
  {
    title: 'Producto',
    items: [
      { title: 'Para quién', slug: '/para-quien' },
      { title: 'Precisión', slug: '/features/precision' },
      { title: 'HyperClose', slug: '/features/hyperclose' },
      { title: 'SML', slug: '/features/sml' },
      { title: 'Evidencia', slug: '/features/evidencia' },
      { title: 'Vídeos — casos de cierre', slug: '/videos-cierre-youtube' },
      { title: 'Noticias y horarios', slug: null, note: 'próximamente' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'Aviso Legal', slug: '/company/legal' },
      { title: 'Privacidad', slug: '/company/privacidad' },
      { title: 'Términos de Uso', slug: '/company/terminos' },
      { title: 'Reembolsos', slug: '/company/reembolsos' },
    ],
  },
];

/** @deprecated Usar footerNav + footerColumns. Mantener solo por compatibilidad theme-setup. */
export const footerLists = footerColumns;
