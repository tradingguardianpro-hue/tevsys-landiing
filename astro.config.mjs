import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tevsys.io', // Dominio público. Usado para redirect Formspree y sitemap.
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [
    /*
      El sitemap se GENERA en cada build (por eso `public/sitemap.xml` no pintaba nada y se borró).
      Sin filtro entraban páginas demo de la plantilla Odyssey (/theme, /landing-pages, /blog),
      proxies de medición /go/* que son noindex, páginas de gracias y pasos internos del pack.
      Al añadir sección nueva: si es pública y enlazada, no tocar nada; si es un paso de flujo
      o una página interna, añadir su patrón aquí.
    */
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        const excluded = [
          /^\/(en\/)?go\//,
          /^\/(en\/)?theme\//,
          /^\/(en\/)?landing-pages\//,
          /^\/(en\/)?blog(\/|$)/,
          /^\/(en\/)?company\/about\/?$/,
          /-thank-you\/?$/,
          /^\/(en\/)?auditoria-ia\/(empezar|pack|no-disponible)\/?$/,
        ];
        return !excluded.some((pattern) => pattern.test(pathname));
      },
    }),
    mdx(),
    lit(),
    icon(),
  ], // Add renderers to the config
  redirects: {
    '/que-es': '/', // La home ya explica qué es tevsys
    '/configuracion-semana': '/configuracion-fin-de-semana',
    '/features/evidence': '/features/evidencia', // hub EN Market pegó “evidence”; canónica ES
    /*
      Páginas demo de la plantilla Odyssey, borradas el 5 sep 2026 (estaban publicadas e indexadas
      en el dominio: blog de relleno, guías del tema, landings de muestra, «About Odyssey»).
      Redirigidas a la home para no dejar errores en lo que Google ya conocía.
    */
    '/blog': '/',
    '/blog/posts/consider-hybrid-work': '/',
    '/blog/posts/odyssey-theme-officially-released': '/',
    '/blog/posts/remote-work-mental-health': '/',
    '/blog/tags': '/',
    '/blog/tags/odyssey-theme': '/',
    '/blog/tags/remote-work': '/',
    '/theme/get-started': '/',
    '/theme/style-guide': '/',
    '/theme/theme-setup': '/',
    '/theme/customizing-odyssey': '/',
    '/landing-pages/landing-1': '/',
    '/landing-pages/landing-2': '/',
    '/company/about': '/company/empresas',
  },
});