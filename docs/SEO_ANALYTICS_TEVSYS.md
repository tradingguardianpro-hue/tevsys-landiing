# SEO y Vercel Web Analytics — tevsys

Documento técnico para desarrolladores e ingenieros.

---

## 1. Meta tags (SEO)

### Fuente principal
- **Archivo:** `src/config/settings.js`
- **title:** `tevsys — Pioneros en disciplina automatizada verificada y gestión de riesgo · MT5`
- **description:** `Disciplina en el trading automatizada. Plataforma para MetaTrader 5: límites de pérdida y ganancia que se cumplen. Cierre preciso documentado. 71 operativas con evidencia verificable. Para traders, prop firms y auditorías.`

### Uso
- `BaseHead` consume estos valores por defecto.
- Páginas que definen `seo` propio (p. ej. `contact.astro`) sobrescriben título y descripción.

### Páginas con meta propia
| Página | Título | Nota |
|--------|--------|------|
| Contacto | Contacto y demo \| tevsys | Bug Astro Odyssey corregido (antes: "Contact \| Astro Odyssey Theme") |

---

## 2. robots.txt

- **Archivo:** `public/robots.txt`
- **Contenido:**
  ```
  User-agent: *
  Allow: /

  Sitemap: https://www.tevsys.io/sitemap.xml
  ```
- Accesible en `tevsys.io/robots.txt`.
- **Nota:** Sitemap dinámico (sitemap-index.xml) daba 404; se usa sitemap estático. Ver §6.

---

## 3. Vercel Web Analytics

### Integración
- **Paquete:** `@vercel/analytics` (dependencia en `package.json`)
- **Ubicación:** `src/layouts/Base.astro`, script antes de `</body>`:
  ```js
  import { inject } from '@vercel/analytics';
  inject();
  ```

### Activación
1. Vercel dashboard → proyecto tevsys-landiing
2. Pestaña **Analytics**
3. Activar **Web Analytics**

### Métricas
- Visitantes únicos
- Vistas de página
- Páginas más visitadas
- Referrers

Gratis en plan Hobby.

---

## 4. Google Search Console

- **URL:** [search.google.com/search-console](https://search.google.com/search-console)
- **Propiedad:** `https://www.tevsys.io/`
- **Verificación:** (1) Archivo HTML `public/google644b0bf8f5617256.html`. (2) Meta tag en BaseHead (`content="0xNV257HhIawlZd5KGvnrpi6ZUfVmlZL2OxE5PDiGlE"`).
- **Sitemap enviado:** `sitemap.xml`
- **Indexación:** Solicitada para home y páginas clave (URL inspection → Request indexing)

### Checklist 5 puntos (20 Mar 2026)
| Punto | Estado |
|-------|--------|
| 1. Verificación HTML tag (respaldo) | ✓ Meta tag añadido en BaseHead |
| 2. International targeting | No disponible — omitido |
| 3. Pages | Processing; revisar en 1–2 días |
| 4. Security & Manual Actions | No issues detected ✓ |
| 5. Associations | No aplica (solo Vercel Analytics) |

---

## 5. Sitemap estático

- **Archivo:** `public/sitemap.xml`
- **URLs:** 11 páginas (home, features, contact, empresas, instalacion, legales).
- **Motivo:** El sitemap dinámico de @astrojs/sitemap v0.1 no se servía correctamente (404).

---

## 6. Schema JSON-LD (SoftwareApplication)

- **Ubicación:** `BaseHead.astro`, solo en home (`pathname === '/'`).
- **Contenido:** name, applicationCategory, operatingSystem, description, url, offers.

---

## 7. Core Web Vitals / optimización imágenes

- **Script:** `node scripts/optimize-images.js` (o `npm run image:optimize`).
- **prebuild:** Se ejecuta antes de `npm run build` para generar WebP.
- **Hero:** fetchpriority="high", preload WebP, width/height.
- **Cards/planes:** loading="lazy", width/height, picture con WebP.
- **Doc detallada:** `docs/PERFORMANCE_IMAGENES_TEVSYS.md`

---

## 8. Archivos implicados

| Archivo | Cambio |
|---------|--------|
| `src/config/settings.js` | title, description SEO, keyword disciplina |
| `src/pages/company/contact.astro` | meta propia |
| `public/robots.txt` | sitemap.xml |
| `public/sitemap.xml` | sitemap estático |
| `public/google644b0bf8f5617256.html` | verificación Search Console |
| `package.json` | @vercel/analytics, image:optimize, prebuild |
| `src/layouts/Base.astro` | inject Analytics |
| `src/components/head/BaseHead.astro` | Schema, preload LCP, meta verification, preconnect fuentes |
| `src/components/sections/heros/HomeHeroSection.astro` | picture WebP, fetchpriority, width/height |
| `src/pages/index.astro` | picture WebP, lazy, width/height en cards/planes |
| `scripts/optimize-images.js` | generación WebP con sharp |

---

## 9. Referencias

- CHANGELOG-TEVSYS.md §47, §48
- PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md §17
- CONTENIDO_WEB_TEVSYS_LANDING.md (sección SEO y analytics)
- PERFORMANCE_IMAGENES_TEVSYS.md (Core Web Vitals)
