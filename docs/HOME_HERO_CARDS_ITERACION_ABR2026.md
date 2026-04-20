# Home, hero, header y cards — iteración abril 2026 (confirmado)

Documento de referencia para lo acordado y aplicado en código hasta **abr 2026**. **19 abr 2026:** coherencia tipográfica global (tema oscuro), hero (H1 DM Sans, stack `#000`), escáner con intensidad restaurada, CTAs demo unificados, respiro `.feature-hero` en micropáginas; **card 1 (Precisión)** — **engranajes + esfera**, **`card-1-input.png?v=8`**; **card 2 (HyperClose)** — **candado cerrado** (alineado panel/EA + hero), **`card-2-hyperclose.png?v=9`**. Estado: **cards** con assets y lectura reforzada; **siguiente fase:** mensajes finales + ajustes menores si hace falta.

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
| **Zona imagen** | `background-color: var(--theme-bg)`. **`img`:** mismo `filter` que la mano del hero (`brightness(0.91) saturate(0.97) contrast(1.04)`); hover un poco más vivo; **contraste ≥1** para no parecer borroso. PNG/Canva sigue siendo la base. **19 abr 2026:** renovación de assets; **card 1** — **`?v=8`** (`engranaje motor`). |
| **Zona texto** | Fondo ~`hsl(0, 0%, 6%)` (más cerca del `--theme-bg` ~2% L); párrafos con tamaño, peso 500, color explícito; **hooks** `.feature-card__hook` con **opacity: 1** dentro de cards (la regla global con 0.9 apagaba el texto). **H3** con peso 700. **Lectura reforzada:** clase `.feature-card__value-accent` en cuerpo — card 1 **Ajuste a tiempo real** (fórmula); **no poder seguir**; **mín. 75 % protegido**; evidencia `0,0072 %`. **71 operativas** sigue en texto, sin acento. |
| **Card 1 (Precisión)** | Ilustración **engranajes + esfera ámbar** (motor / ajuste en tiempo real); alineada al **icono engranaje** del EA en configuración fin de semana (vs candado en operativa). Solo **PNG** en `<img>` (WebP opcional tras `optimize-images.js`). Sustituye diseño anterior con alcancía. |
| **Card 2 (HyperClose)** | Ilustración **candado cerrado** + esfera; coherente con **bloqueo** de HyperClose y con candado en **panel/gráficos EA** y hero. **`card-2-hyperclose.png?v=9`**. |
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
- **Confirmado en código:** contenedor imagen = `var(--theme-bg)`; reexportes del usuario a **`public/assets/images/home/cards/card-*.png`**. **Cache-bust card 1:** **`?v=8`** (19 abr 2026, engranaje motor); demás cards según `index.astro`.
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

---

## 7. Estándar visual reusable para micropáginas (20 abr 2026)

Aplicar este patrón en `precision`, `evidencia`, `hyperclose`, `sml`, `instalacion`, `configuracion` para mantener imagen premium sobria (sin estridencia).

### 7.1 Bloque de apertura de demo (frase + vídeo)

- **Frase inicial con punto** (ej.: “Un gráfico para tevsys…”): punto alineado en línea base visual, espaciado corto y lectura estable.
- **Respiración entre frase y título de demo:** margen claro para separar contexto de acción.
- **Embed / vídeo principal:** cromado **gris elegante** (neutral), sin dominancia ámbar en marco.
- **Ámbar** reservado para acentos de marca (dot, h2, links), no para teñir el bloque completo.

### 7.2 Sección “Qué puedes comprobar” (lista de anclas)

- Convertir lista plana en **filas escaneables**:
  - más aire vertical,
  - micro-acento por fila (barra/punto ámbar tenue),
  - hover limpio en color de marca.
- **Halo lateral ámbar** muy suave (presencia de marca sin competir con la lectura).
- Mantener foco en copy y clicabilidad; evitar efectos decorativos fuertes o animación continua.

### 7.3 Criterio de diseño de negocio (tevsys)

- Sensación objetivo: **control, precisión, trazabilidad**.
- Evitar estética “demo llamativa”; priorizar “producto serio y verificable”.
- Cada mejora visual debe responder a esta regla: **más claridad + más jerarquía + misma sobriedad**.

### 7.4 Aplicación práctica (estado 20 abr 2026)

- **`precision`**: patrón aplicado completo (embed inicial neutro + lista escaneable + estado puntual de navegación visible).
- **`hyperclose`**: patrón aplicado con adaptación:
  - fase 1 (igualación de apertura/lista),
  - fase 2 (zona protocolaria gris mantenida pero refinada en legibilidad),
  - anclas con foco ámbar puntual reforzado, sin autoplay.
- **`sml`**: patrón aplicado a la sección de comprobación (no clicable por ahora) y reordenación del hook de gráficos para contexto correcto.
- **`evidencia`**: patrón aplicado completo:
  - apertura de demo con respiración y embed neutro,
  - “Qué puedes comprobar” con halo + jerarquía escaneable,
  - copy alineado a doble trazabilidad tevsys/MT5,
  - navegación cruzada a logs en Precisión apuntando al bloque `#precision-logs` con foco reforzado de sección+embed.

### 7.5 Cierre baseline visual (20 abr 2026)

- Hero validado visualmente:
  - mano robótica con versión final de imagen (más presencia sin estridencia),
  - marco exterior equilibrado y estable,
  - contexto hero con mención explícita a **trading real en MT5** + **automatizado y registrado**.
- Cards home actualizadas con assets retocados (centrado de iconos) y copy HyperClose con separación robusta.
- Decisión de equipo: **cerrar fase visual** y pasar a iteración de **tono comercial por micropágina** (sin reabrir diseño salvo incidencias críticas).

### 7.6 Evolución narrativa (20 abr 2026)

- **Precisión:** lead técnico-comercial compacto + lista “Qué puedes comprobar” orientada a validación.
- **HyperClose:** lead, hook demo, checklist y CTA en tono de prueba operativa clara.
- **Evidencia:** lead con acento en “Doble trazabilidad”, hook demo con desviación documentada, checklist y CTA en el mismo registro; hook del vídeo de logs sustituye texto genérico.
- **SML:** intro + lead con acento “Opcional y bajo tu control”, panel con lectura verificable (DISPONIBLE vs 1‑CLICK), “Qué podrás comprobar” en tono de comprobación, CTA y meta alineados a validación Advanced/Pro (sin cambiar nota de fase).
- **Principio aplicado:** el diseño queda estable; la mejora se concentra en copy con más precisión comercial y técnica.
