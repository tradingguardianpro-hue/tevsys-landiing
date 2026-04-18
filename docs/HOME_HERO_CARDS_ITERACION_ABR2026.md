# Home, hero, header y cards — iteración abril 2026 (confirmado)

Documento de referencia para lo acordado y aplicado en código hasta **abr 2026**. Estado: **cards en refinamiento visual/copy**; **siguiente fase:** decidir qué cards mantener y ajustar **micropáginas una por una**.

**Repos / rutas:** proyecto `tevsys-landiing` (Astro). Imágenes públicas bajo `public/assets/...`.

---

## 1. Hero (`src/components/sections/heros/HomeHeroSection.astro`)

| Tema | Detalle |
|------|---------|
| **Tipografía** | **Inter** en todo el bloque `.hero-section__inner` (producto / legibilidad). |
| **H1** | `Tú pones los límites. TEVSYS los blinda. Disciplina automatizada.` — `TEVSYS` ámbar (`hero-title__brand`, sin subrayado); subrayado solo en el claim (`hero-title__underline`). MT5 en la línea de contexto, no en el H1. **`font-family: Inter` explícita en `.hero-title`** (abr 2026: anula `h1` global en serif del tema). |
| **Línea de contexto** | Clase `.hero-context-line`: *Control de riesgo y límites en tu cuenta MT5 — automatizado y registrado.* (debajo del H1, encima del badge; texto más pequeño, no compite con el titular). Motivo: anclar **cuenta MT5 / riesgo** para visitantes que no lean solo “disciplina”. |
| **Ritmo vertical** | Margen amplio entre titular → badge “Where precision…” (`.hero-tagline-wrap`: `margin-top` / `margin-bottom` en clamp) → CTA (`.hero-download-btn`: `margin-top` en clamp) → nota plataformas (`hero-platform-note`). Abr 2026: más “aire” entre badge inglés y botón demo. |
| **Halo** | `.hero-section__glow`: gradientes radiales ámbar (marca), solo en hero. |
| **Imagen mano/candado** | Filtro suave (brillo/saturación/contraste); viñeta en `.hero-image__wrapper`; `--hero-image-radius` explícito (el tema oscuro pone `--theme-shape-radius: 0`). |
| **Stack home** | Estilos en `global.css` (`.tevsys-home-hero-stack`): fondo `var(--theme-bg)`, sombra exterior para fundir con la página, viñeta `::after`, `z-index` contenido; el **redondeo** lo lleva el stack, no la `section` interna (evita doble “marco”). |

---

## 2. Header y marca (`Header.astro`, `BrandOval.astro`)

| Tema | Detalle |
|------|---------|
| **Fuente** | **Inter** (alineado con hero; se probó Outfit y se descartó). |
| **Barra** | Padding vertical reducido (“más estrecha”). |
| **Nav** | Enlaces ~0.9375rem, peso 500, letter-spacing ligero. |
| **Logo pastilla** | `BrandOval`: Inter, pastilla algo más compacta. |

### Motion / halo (`src/styles/global.css`)

- **Home** (`body:has(.tevsys-home-band--cards)::before`): niebla superior con **menos** franja ámbar agresiva (opacidad y gradientes suavizados).
- **Escáner header** (`.tevsys-header-scanner`): opacidad y picos de gradiente **reducidos** para no competir con el hero (“menos discoteca”).

---

## 3. Sección valor + cards (`src/pages/index.astro`)

| Tema | Detalle |
|------|---------|
| **Tipografía** | Inter en `.feature-card__section` y bloque de planes; **`h2` / `h3` de la home con Inter explícito** en clase (el tema Odyssey pone serif en `h1`–`h3` vía `typography.css`). |
| **Título sección** | “¿Cuánto dinero has perdido por no parar a tiempo?” — espaciado y jerarquía afinados. |
| **Grid** | 2 columnas desktop; 1 columna móvil; gap aumentado. **Abr 2026:** más aire antes del grid (`margin` bajo intro “Ellos deslizan…” + `margin-top` en `.feature-card__grid`). |
| **Cards (`.tevsys-card`)** | `--feature-card-radius`; borde/sombra suaves + halo ámbar muy bajo en reposo; hover acentuado sin borde tan duro (abr 2026, integración SaaS). |
| **Estructura** | Fondo de la card **transparente**; **gris solo** en `.tevsys-card__content` (texto). Evita franja gris entre imagen y texto por fondo heredado + rendija bajo `<img>` (img `display: block`, `picture` bloque, `line-height: 0`). |
| **Zona imagen** | `background-color: var(--theme-bg)`. **`img`:** `filter` alineado al hero (`brightness(0.78) saturate(0.9) contrast(0.96)`); hover algo más luminoso; PNG/Canva sigue siendo la base. |
| **Zona texto** | Fondo ~`hsl(0, 0%, 6%)` (más cerca del `--theme-bg` ~2% L); párrafos con tamaño, peso 500, color explícito; **hooks** `.feature-card__hook` con **opacity: 1** dentro de cards (la regla global con 0.9 apagaba el texto). **H3** con peso 700. |
| **Card 1 (Precisión / cerdito)** | Primera versión: `<picture>` WebP + PNG; **ajuste:** solo **PNG** en `<img>` para ver exports nuevos sin depender de regenerar `.webp` (cuando haya `npm` + `sharp`, ejecutar `node scripts/optimize-images.js` y se puede volver a `<picture>`). |
| **Planes (misma página)** | Fondo y borde/sombra alineados a las cards de valor (`hsl(0,0%,6%)`, halo suave). |
| **Móvil** | Imagen de card con `aspect-ratio` y `max-height` acotados. |
| **Accesibilidad** | `:focus-visible` en enlaces `.tevsys-card`. |

---

## 4. Assets Canva / `card-1-input`

- **Cintas / formas iridiscentes:** en Canva, seleccionar esas capas y **bajar brillo** y **saturación** (o “Tono” / “Transparencia” si el efecto sigue fuerte). Objetivo: que el color no compita con el ámbar de la web; reexportar **mismo tamaño** que el PNG actual. Sustituir en `public/assets/images/home/cards/` y subir `?v=` en `index.astro` si hace falta forzar caché.
- Fondos probados en diseño: de gris apreciable (**#161618**) a casi negro página (**#060606**, **#050505** / alinear a `--theme-bg`).
- **Confirmado en código:** contenedor imagen = `var(--theme-bg)`; reexportes sucesivos del usuario a **`public/assets/images/home/cards/card-1-input.png`** (abr 2026). **Cache-bust** en la home: `card-1-input.png?v=2` si hace falta forzar recarga tras sustituir asset.
- **WebP** (`card-1-input.webp`): debe **regenerarse** localmente con `scripts/optimize-images.js` cuando el entorno tenga dependencias instaladas; hasta entonces la home puede usar solo PNG en esa card.

---

## 5. Próximos pasos (no cerrados aquí)

1. **Decisión de equipo:** qué cards y copy definitivos en home.
2. **Micropáginas:** ajuste **uno por uno** (Precisión, HyperClose, SML, Evidencia, etc.) alineado a la misma línea visual/copy.
3. Opcional: restaurar **WebP** en card 1 tras regenerar asset optimizado.

---

## 6. Referencias cruzadas

- Changelog resumido: `CHANGELOG-TEVSYS.md` (entrada “Home, hero, header y cards — abr 2026”).
- Contenido/copy: `CONTENIDO_WEB_TEVSYS_LANDING.md` (hero, header, cards).
- Fase cards/planes: `CARDS-NEXT-PHASE.md`.
- Tabla por archivo: `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`.
- Motion (sin duplicar aquí): `MOTION_HOME_TEVSYS_HANDOFF_IA.md`, `CHANGELOG-TEVSYS.md` § Motion.
