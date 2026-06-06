import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tevsys.io', // Dominio público. Usado para redirect Formspree y sitemap.
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
  redirects: {
    '/que-es': '/', // La home ya explica qué es tevsys
    '/configuracion-semana': '/configuracion-fin-de-semana',
  },
});