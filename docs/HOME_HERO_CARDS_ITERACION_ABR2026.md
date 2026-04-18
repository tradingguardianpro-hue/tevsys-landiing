# Home, hero, header y cards — iteración abril 2026 (confirmado)

Documento de referencia para lo acordado y aplicado en código hasta **abr 2026**. Estado: **cards en refinamiento visual/copy**; **siguiente fase:** decidir qué cards mantener y ajustar **micropáginas una por una**.

**Repos / rutas:** proyecto `tevsys-landiing` (Astro). Imágenes públicas bajo `public/assets/...`.

---

## 1. Hero (`src/components/sections/heros/HomeHeroSection.astro`)

| Tema | Detalle |
|------|---------|
| **Tipografía** | **Inter** en todo el bloque `.hero-section__inner` (producto / legibilidad). |
| **H1** | `MT5: disciplina automatizada. Tú pones los límites, tevsys los blinda, no negocia y lo registra.` — `tevsys` y subrayados según clases existentes. |
| **Línea de contexto** | Clase `.hero-context-line`: *Control de riesgo y límites en tu cuenta MT5 — automatizado y registrado.* (debajo del H1, encima del badge; texto más pequeño, no compite con el titular). Motivo: anclar **cuenta MT5 / riesgo** para visitantes que no lean solo “disciplina”. |
| **Ritmo vertical** | Más margen entre titular → badge “Where precision…” → CTA → nota plataformas. |
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
| **Tipografía** | Inter en `.feature-card__section` y bloque de planes en home. |
| **Título sección** | “¿Cuánto dinero has perdido por no parar a tiempo?” — espaciado y jerarquía afinados. |
| **Grid** | 2 columnas desktop; 1 columna móvil; gap aumentado. |
| **Cards (`.tevsys-card`)** | `--feature-card-radius`; borde/sombra suaves; hover sin cambiar lógica. |
| **Estructura** | Fondo de la card **transparente**; **gris solo** en `.tevsys-card__content` (texto). Evita franja gris entre imagen y texto por fondo heredado + rendija bajo `<img>` (img `display: block`, `picture` bloque, `line-height: 0`). |
| **Zona imagen** | `background-color: var(--theme-bg)` (mismo negro que la web); **sin** `filter` en el `img` (el matiz final va en el **PNG** de Canva). |
| **Zona texto** | Fondo ~`hsl(0, 0%, 9%)` (iterado respecto al `--theme-surface-1` muy claro); párrafos con tamaño, peso 500, color explícito; **hooks** `.feature-card__hook` con **opacity: 1** dentro de cards (la regla global con 0.9 apagaba el texto). **H3** con peso 700. |
| **Card 1 (Precisión / cerdito)** | Primera versión: `<picture>` WebP + PNG; **ajuste:** solo **PNG** en `<img>` para ver exports nuevos sin depender de regenerar `.webp` (cuando haya `npm` + `sharp`, ejecutar `node scripts/optimize-images.js` y se puede volver a `<picture>`). |
| **Planes (misma página)** | Cards de planes con el **mismo** criterio de gris oscuro (`hsl` alineado a cards de valor). |
| **Móvil** | Imagen de card con `aspect-ratio` y `max-height` acotados. |
| **Accesibilidad** | `:focus-visible` en enlaces `.tevsys-card`. |

---

## 4. Assets Canva / `card-1-input`

- Fondos probados en diseño: de gris apreciable (**#161618**) a casi negro página (**#060606**, **#050505** / alinear a `--theme-bg`).
- **Confirmado en código:** contenedor imagen = `var(--theme-bg)`; reexportes sucesivos del usuario a **`public/assets/images/home/cards/card-1-input.png`** (abr 2026).
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
