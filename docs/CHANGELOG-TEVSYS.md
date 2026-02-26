# Changelog tevsys — Cambios realizados (para DeepSeq)

Documentación completa de todos los cambios aplicados al proyecto tevsys landing. Base: Odyssey Theme + Astro.

---

## 1. Logo / Brand (BrandOval)

**Archivo:** `src/components/BrandOval.astro`

**Cambios:**
- Se eliminó la estrella del logo. Solo queda el texto "tevsys" dentro de un óvalo.
- El óvalo mantiene: borde blanco 50% opacidad, fondo blanco 4% opacidad, border-radius 2.5rem.
- Tipografía: 1.55rem, font-weight 600, lowercase, color blanco 95% opacidad.

**Uso:** Se usa en el Header como logo principal (`Page.astro` → Header con slot logo → BrandOval).

---

## 2. Header y Navegación

**Archivos:**
- `src/config/nav.js` — Datos de navegación
- `src/components/core/Header.astro` — Estilos del botón destacado

**Cambios en nav.js:**
- Se eliminó el enlace "Descargar demo" del header.
- Navegación actual: **Inicio** | **Acceso** | **Contacto**.
- **Acceso** es el CTA principal: `asButton: true` (fondo blanco, texto negro, destacado).
- Ruta de Acceso: `/company/contact`.

**Estilos del botón CTA (Header.astro):**
- `.nav-link--button`: padding 0.4rem 1rem, background #fff, color #111, border-radius 2rem, opacity 1, font-weight 500.
- Hover: opacity 0.92.

---

## 3. Hero Section (HomeHeroSection)

**Archivo:** `src/components/sections/heros/HomeHeroSection.astro`

### 3.1 Estructura
- Grid 2 columnas: texto a la izquierda, imagen a la derecha.
- Columnas: 1fr | 1.15fr. Gap 2rem.
- Responsive: una columna en ≤768px.

### 3.2 Contenido
- **H1:** "Tu capital merece más que buenas intenciones"
- **Fuente H1:** Outfit (cargada en BaseHead.astro)
- **Tagline:** Pill con punto amarillo + texto "Where precision meets the edge"
- **Botón:** "Descargar demo →" — pequeño, ovalado (padding 0.45rem 1rem, font-size 0.9rem, border-radius 2rem)
- **Imagen:** `/hero-tevsys.png` (robot con mano dorada y candado)

### 3.3 Tagline (pill)
- Borde blanco 50% opacidad, fondo blanco 3% opacidad, border-radius 2rem.
- **Punto amarillo:** 32×32px, `#f5b041`, border-radius 50%, flex-shrink 0.
- Gap entre punto y texto: 0.85rem.
- Texto: 1.05rem, opacity 0.95.

### 3.4 "Trading Edge Verification System"
- **Posición:** Debajo de la imagen, alineado a la izquierda (NO superpuesto sobre la imagen).
- Estructura: `hero-section__image` es flex column; el texto va después de `hero-image__wrapper`.
- Estilos: `margin-top: 0.75rem`, `align-self: flex-start`, font-size 0.75rem, font-weight 400, color rgba(255,255,255,0.45), letter-spacing 0.02em.

### 3.5 Botón Descargar demo (hero)
- Tamaño reducido, estilo oval.
- Enlace a `/company/contact`.

---

## 4. Fuentes y assets globales

**BaseHead.astro:** Outfit cargada desde Google Fonts (wght 300–700).

**Imágenes usadas:**
- Hero: `/hero-tevsys.png`
- Logo (si se usara Logo.astro): `/logo-tevsys.png` — en Header se usa BrandOval, no Logo.

---

## 5. Sección de cards (feature cards) — Estado actual

**Archivo:** `src/pages/index.astro`

**Estructura:**
- Título: "¿Cuánto dinero has perdido por no parar a tiempo?"
- Subtítulo: "Sin excusas. Las buenas intenciones no cierran operaciones. Nosotros sí."
- Grid de 3 cards (`tevsys-card`), cada una con:
  - `tevsys-card__image` — imagen superior, aspect-ratio 16/10, object-fit cover
  - `tevsys-card__content` — título H3 + párrafos

**Imágenes actuales (placeholders):**
1. **Precisión milimétrica:** `/assets/images/home/screenshots/landing-1.png`
2. **HyperClose:** `/assets/images/home/screenshots/landing-2.png`
3. **Evidencia verificable:** `/assets/images/home/screenshots/about.png`

**Próxima fase (pendiente):**
- Sustituir esas imágenes por imágenes editadas por el cliente.
- Incluir la estrella de tevsys dentro de las imágenes personalizadas (no en el H1 del hero).
- Rutas sugeridas para las nuevas imágenes: `public/assets/images/home/cards/` o similar.

---

## 6. Configuración general

**settings.js:**
- `enableThemeSwitcher: false`
- `showPlug: false`
- Tema por defecto: dark (`data-theme="dark"` en Base.astro)

---

## Resumen de archivos modificados

| Archivo | Cambio principal |
|---------|------------------|
| `src/components/BrandOval.astro` | Solo "tevsys", sin estrella |
| `src/config/nav.js` | Sin "Descargar demo", Acceso como CTA |
| `src/components/core/Header.astro` | Estilos `.nav-link--button` |
| `src/components/sections/heros/HomeHeroSection.astro` | Hero completo: H1 Outfit, tagline con punto 32px, brand debajo imagen, botón pequeño |
| `src/components/head/BaseHead.astro` | Fuente Outfit |
| `src/pages/index.astro` | Cards con estructura tevsys-card |

---

## Próximos pasos

1. **Cards:** Permitir subir imágenes personalizadas (con estrella) para las 3 cards.
2. Definir rutas y nombres de archivos para las nuevas imágenes de cards.
