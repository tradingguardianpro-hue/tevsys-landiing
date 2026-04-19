# Home, hero, header y cards — iteración abril 2026 (confirmado)

Documento de referencia para lo acordado y aplicado en código hasta **abr 2026**. **19 abr 2026:** coherencia tipográfica global (tema oscuro), hero (H1 DM Sans, stack `#000`), escáner con intensidad restaurada, cards `?v=7`, CTAs demo unificados, respiro `.feature-hero` en micropáginas. Estado: **cards** con assets y lectura reforzada; **siguiente fase:** decisión de equipo sobre mensajes finales + **revisión móvil** (hero / escáner) cuando se priorice.

**Repos / rutas:** proyecto `tevsys-landiing` (Astro). Imágenes públicas bajo `public/assets/...`.

---

## 1. Hero (`src/components/sections/heros/HomeHeroSection.astro`)

| Tema | Detalle |
|------|---------|
| **Tipografía** | **Inter** en el bloque salvo el **H1**: **DM Sans** solo en `.hero-title` (se probó Plus Jakarta Sans, descartada). `BaseHead.astro` carga **Inter** + **DM Sans** (+ Outfit donde aplique). |
| **H1** | `Tú pones los límites. TEVSYS los blinda. Disciplina automatizada.` — `TEVSYS` ámbar (`hero-title__brand`, sin subrayado); subrayado solo en el claim (`hero-title__underline`). MT5 en la línea de contexto, no en el H1. |
| **Línea de contexto** | Clase `.hero-context-line`: *Control de riesgo y límites en tu cuenta MT5 — automatizado y registrado.* (debajo del H1, encima del badge; texto más pequeño, no compite con el titular). Motivo: anclar **cuenta MT5 / riesgo** para visitantes que no lean solo “disciplina”. |
| **Ritmo vertical** | Margen amplio entre titular → badge “Where precision…” (`.hero-tagline-wrap`: `margin-top` / `margin-bottom` en clamp) → CTA (`.hero-download-btn`: `margin-top` en clamp) → nota plataformas (`hero-platform-note`). Abr 2026: más “aire” entre badge inglés y botón demo. |
| **Halo** | `.hero-section__glow`: gradientes radiales ámbar (marca), solo en hero. |
| **Imagen mano/candado** | Filtro **alineado a cards** (`brightness(0.91) saturate(0.97) contrast(1.04)`); viñeta más suave en `.hero-image__wrapper`; radio explícito; marco exterior del recorte con **animación opcional** de brillo (`prefers-reduced-motion` sin animación); sin marcos CSS que imiten óvalos del PNG. |
| **Stack home** | `global.css` (`.tevsys-home-hero-stack`): en tema oscuro **`background-color: #000`** (negro puro, alineado con zona imagen de cards); sombra exterior; viñeta `::after`; contenido por encima de capas KITT. **Capas KITT / motion del hero:** sin cambio de filosofía. |

---

## 2. Header y marca (`Header.astro`, `BrandOval.astro`)

| Tema | Detalle |
|------|---------|
| **Fuente** | **Inter** (alineado con cuerpo home; Outfit puede seguir cargándose donde el tema lo use). |
| **Barra** | Padding vertical reducido (“más estrecha”). |
| **Nav** | Enlaces ~0.9375rem, peso 500, letter-spacing ligero. |
| **Logo pastilla** | `BrandOval`: Inter, pastilla algo más compacta. |

### Motion / halo (`src/styles/global.css`)

- **Home** (`body:has(.tevsys-home-band--cards)::before`): niebla superior con franja ámbar contenida (iteraciones previas suavizaron demasiado; el equilibrio actual está documentado en `MOTION_HOME_TEVSYS_HANDOFF_IA.md`).
- **Escáner header** (`.tevsys-header-scanner`): **19 abr 2026 — intensidad restaurada** respecto a la iteración “menos discoteca”: más opacidad, gradientes algo más marcados y **duraciones** por breakpoint (base **29,5s**; escritorio **28s**; móvil **23,5s** — ver `global.css` y handoff motion). Objetivo: dar “vida” en cabecera sin competir con el contenido del hero.

---

## 3. Sección valor + cards (`src/pages/index.astro`)

| Tema | Detalle |
|------|---------|
| **Tipografía** | Inter en `.feature-card__section` y bloque de planes; **`h2` / `h3` de la home con Inter explícito** en clase (el tema Odyssey pone serif en `h1`–`h3` vía `typography.css`). **Tema oscuro global:** `theme.css` fuerza **Inter** en sans y serif bajo `[data-theme='dark']` para alinear micropáginas con la home. |
| **Título sección** | “¿Cuánto dinero has perdido por no parar a tiempo?” — espaciado y jerarquía afinados. |
| **Grid** | 2 columnas desktop; 1 columna móvil; gap aumentado. **Abr 2026:** más aire antes del grid (`margin` bajo intro “Ellos deslizan…” + `margin-top` en `.feature-card__grid`). |
| **Cards (`.tevsys-card`)** | `--feature-card-radius`; borde/sombra suaves + halo ámbar muy bajo en reposo; hover acentuado sin borde tan duro (abr 2026, integración SaaS). |
| **Estructura** | Fondo de la card **transparente**; **gris solo** en `.tevsys-card__content` (texto). Evita franja gris entre imagen y texto por fondo heredado + rendija bajo `<img>` (img `display: block`, `picture` bloque, `line-height: 0`). |
| **Zona imagen** | `background-color: var(--theme-bg)`. **`img`:** mismo `filter` que la mano del hero (`brightness(0.91) saturate(0.97) contrast(1.04)`); hover un poco más vivo; **contraste ≥1** para no parecer borroso. PNG/Canva sigue siendo la base. **19 abr 2026:** cuatro PNG nuevos en `public/.../card-*.png`; **cache-bust `?v=7`** en las cuatro rutas en `index.astro`. |
| **Zona texto** | Fondo ~`hsl(0, 0%, 6%)` (más cerca del `--theme-bg` ~2% L); párrafos con tamaño, peso 500, color explícito; **hooks** `.feature-card__hook` con **opacity: 1** dentro de cards (la regla global con 0.9 apagaba el texto). **H3** con peso 700. **Lectura reforzada:** clase `.feature-card__value-accent` en cuerpo — **71 operativas**, **no poder seguir**, **mín. 75 % protegido** (misma línea que evidencia `0,0072 %`). |
| **Card 1 (Precisión / cerdito)** | Primera versión: `<picture>` WebP + PNG; **ajuste:** solo **PNG** en `<img>` para ver exports nuevos sin depender de regenerar `.webp` (cuando haya `npm` + `sharp`, ejecutar `node scripts/optimize-images.js` y se puede volver a `<picture>`). |
| **Planes (misma página)** | Fondo y borde/sombra alineados a las cards de valor (`hsl(0,0%,6%)`, halo suave). CTA primario alineado al estilo global de demo (ver **CTAs** abajo). |
| **CTAs “Descargar demo” / planes** | Reglas compartidas en `global.css` para `a.hero-download-btn`, `a.feature-cta__button`, `a.precios-cta__button`, `a.plan-card__cta:not(.secondary)` — misma tipografía (**Inter 1rem**), padding, radio, color y hover; duplicados locales retirados donde aplica. |
| **Móvil** | Imagen de card con `aspect-ratio` y `max-height` acotados. |
| **Accesibilidad** | `:focus-visible` en enlaces `.tevsys-card`. |

### Micropáginas — respiro bajo títulos (19 abr 2026)

- **`global.css`:** `.feature-hero h1`, `.feature-hero`, `.feature-hero + section` definen el mismo “respiro” que ya se quería en Precisión; se **eliminan** márgenes locales duplicados en `precision`, `evidencia`, `hyperclose`, `sml`, `instalacion`, `configuracion` (y equivalentes).

---

## 4. Assets Canva / `card-1-input`

- **Cintas / formas iridiscentes:** en Canva, seleccionar esas capas y **bajar brillo** y **saturación** (o “Tono” / “Transparencia” si el efecto sigue fuerte). Objetivo: que el color no compita con el ámbar de la web; reexportar **mismo tamaño** que el PNG actual. Sustituir en `public/assets/images/home/cards/` y subir `?v=` en `index.astro` si hace falta forzar caché.
- Fondos probados en diseño: de gris apreciable (**#161618**) a casi negro página (**#060606**, **#050505** / alinear a `--theme-bg`).
- **Confirmado en código:** contenedor imagen = `var(--theme-bg)`; reexportes sucesivos del usuario a **`public/assets/images/home/cards/card-*.png`** (abr 2026). **Cache-bust** en la home: **`?v=7`** (19 abr 2026) para las cuatro cards.
- **WebP** (`card-1-input.webp`): debe **regenerarse** localmente con `scripts/optimize-images.js` cuando el entorno tenga dependencias instaladas; hasta entonces la home puede usar solo PNG en esa card.

---

## 5. Próximos pasos (no cerrados aquí)

1. **Decisión de equipo:** qué cards y copy definitivos en home.
2. **Micropáginas:** seguir alineación visual/copy (Precisión: **orden de demos** actualizado — Nasdaq tras alta volatilidad; cuenta pequeña antes de logs — ver `CHANGELOG-TEVSYS.md` 19 abr 2026).
3. **Móvil:** revisión hero + escáner (“trompicones”) cuando se priorice.
4. Opcional: restaurar **WebP** en card 1 tras regenerar asset optimizado.

---

## 6. Referencias cruzadas

- Changelog: `CHANGELOG-TEVSYS.md` (entradas “Home, hero, header y cards — abr 2026” y **“Web — coherencia tipográfica…” — 19 abr 2026**).
- Contenido/copy: `CONTENIDO_WEB_TEVSYS_LANDING.md` (hero, header, cards, contacto).
- Fase cards/planes: `CARDS-NEXT-PHASE.md`.
- Tabla por archivo: `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`.
- Motion: `MOTION_HOME_TEVSYS_HANDOFF_IA.md`, `CHANGELOG-TEVSYS.md` § Motion.
