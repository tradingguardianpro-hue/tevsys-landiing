# Optimización imágenes y Core Web Vitals — tevsys

Documento técnico para desarrolladores. Ref: PageSpeed Insights, Google Search Console Experience.

---

## 1. Problema inicial (Mar 2026)

- **Performance móvil:** 70 (LCP 15,6 s, objetivo < 2,5 s).
- **Improve image delivery:** ~4.940 KiB recuperables.
- **Page size:** ~5,4 MB (muy alto para móvil).
- **Images without width/height:** riesgo de CLS.

---

## 2. Solución implementada

### 2.1 Hero (LCP)

- `fetchpriority="high"` — prioridad de carga.
- `decoding="async"` — no bloquea el render.
- `width="1200" height="800"` — evita layout shift (CLS).
- `<picture>` con WebP + fallback PNG.
- Preload WebP en `BaseHead.astro` (solo home).

### 2.2 Cards y planes (index.astro)

- `loading="lazy"` — no cargan hasta que entran en viewport.
- `decoding="async"`.
- `width`/`height` explícitos (640×400 cards, 640×360 planes).
- `<picture>` con WebP + fallback PNG.

### 2.3 Script de optimización (ampliado)

- **Archivo:** `scripts/optimize-images.js`
- **Ejecución:** `npm run image:optimize` o automático en `prebuild` antes de `npm run build`.
- **Función:** Genera WebP con sharp (quality 82, max 1200px hero, 800px resto).
- **Imágenes incluidas:** Hero, 4 cards, 3 plan cards, logo-tevsys, 3 form contact (esse/adva/pro-form-v4), todas las de evidencia (13), hyperclose (8), precision (7). Total ~40 imágenes.

---

## 3. Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `src/components/sections/heros/HomeHeroSection.astro` | picture, fetchpriority, width/height, decoding |
| `src/pages/index.astro` | picture, lazy, width/height en 4 cards + 3 planes |
| `src/components/head/BaseHead.astro` | preload LCP WebP (home) |
| `package.json` | image:optimize, prebuild |
| `scripts/optimize-images.js` | nuevo |

---

## 4. Uso

**Antes del build (obligatorio para que existan los WebP):**

```bash
npm run image:optimize
```

O simplemente `npm run build` — el prebuild lo ejecuta.

**Si falta Node o sharp:** Las imágenes PNG seguirán cargando (fallback). Los WebP mejoran el peso.

---

## 5. Paso 2: Render-blocking (preconnect fuentes)

- **Problema:** PageSpeed indicaba ~1.640 ms por recursos que bloquean el render.
- **Solución:** `preconnect` a `fonts.googleapis.com` y `fonts.gstatic.com` en BaseHead.
- La fuente Outfit ya usa `display=swap` (texto visible de inmediato, fuente carga después).

---

## 6. Referencias

- CHANGELOG-TEVSYS.md §48.4
- SEO_ANALYTICS_TEVSYS.md §7
- PageSpeed Insights: https://pagespeed.web.dev/
