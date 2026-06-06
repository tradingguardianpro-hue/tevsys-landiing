export const footerSocials = [];

/** Enlaces principales — fila superior del footer (no mezclar con guías operativas). */
export const footerNav = [
  { title: 'Inicio', slug: '/' },
  { title: 'Cómo funciona', slug: '/como-funciona' },
  { title: 'Precios', slug: '/precios' },
  { title: 'Empresas', slug: '/company/empresas' },
  { title: 'Contacto', slug: '/company/contact' },
];

/** Columnas inferiores — guías en orden de embudo + producto + legal. */
export const footerColumns = [
  {
    title: 'Guías',
    groups: [
      {
        items: [{ title: 'Cómo instalar', slug: '/instalacion' }],
      },
      {
        label: 'Essential',
        items: [{ title: 'Configuración', slug: '/configuracion' }],
      },
      {
        label: 'Advanced / Pro',
        items: [
          { title: 'Configuración al instalar', slug: '/configuracion-al-instalar', note: 'L–V · al momento' },
          {
            title: 'Planificar la semana',
            slug: '/configuracion-fin-de-semana',
            note: 'solo finde · lunes 00:00',
          },
        ],
      },
    ],
  },
  {
    title: 'Producto',
    items: [
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
