# Handoff técnico — `/como-funciona`, motion (home + página) y header (1 may 2026)

Documento para continuidad (p. ej. DeepSeek / otra IA): **qué se hizo**, **dónde está en código**, **criterio de producto** y **cómo no romperlo**.

---

## 1. Micropágina `/como-funciona` (`src/pages/como-funciona.astro`)

### 1.1 Rol de la página

- Recorrido **narrativo + vídeo** (presentación en dos partes YouTube), bloques **De cero a protegido** / **Siguiente nivel**, profundidad (enlaces a features), vídeos curados, etc.
- Datos de contenido en el frontmatter del `.astro`: `presentationParts`, `zeroToProtected`, `depthLayers`, `homeBridgeCards`, `siguienteNivelClipCards`, `curatedVideos`.

### 1.2 Estructura y decisiones de layout (resumen)

| Bloque | Decisión |
|--------|----------|
| **Intro (H1 + Presentación)** | Envuelto en `.how-intro-stage.how-intro-stage--stage` + `.how-intro-stage__bg` + `.how-intro-stage__inner`. **Sin** capa de barrido animado en el intro: solo **halo estático** (radiales + sombra interior) para no competir con el escáner del header ni con los stages inferiores. |
| **YouTube (Presentación)** | `border-radius: 0` en `.how-presentation .how-embed` (marco recto; coherencia con pedido de “instrumento”, no caja redondeada tipo card). |
| **«De cero a protegido» / «Siguiente nivel»** | Stages con `__bg` + `__sweep` y keyframe vertical compartido `how-zero-protected-sweep-vertical` (barrido gris vertical, familia home “fall”). |
| **Puente bajo «Esto no es todo…»** | Cuatro cards alineadas a las **mismas rutas que la home** (`/features/precision`, `hyperclose`, `sml`, `evidencia`), con **MP4** en precisión / HyperClose / evidencia (mismos assets que micros); SML texto hasta tener corte. |
| **Subrayados marca** | Ámbar → gris; H2 «Esto no es todo…» solo subrayado bajo «más comportamientos en vivo»; criterios similares en otros títulos (ver CHANGELOG y comentarios en el `.astro`). |

### 1.3 `bodyClass="page-como-funciona"`

- `como-funciona.astro` pasa `bodyClass="page-como-funciona"` a `Layout` (`Page.astro` → `Base.astro`).
- **`Base.astro`:** `<body class:list={[bodyClass]}>` — permite selectores globales `body.page-como-funciona` con **mayor especificidad** que estilos scoped del mismo `.astro` cuando hace falta.

### 1.4 Motion específico de `/como-funciona`

**Problema:** escáner **diagonal** del header (`tevsys-header-scanner-sweep*`) y barridos **verticales** de los stages compartían ritmos cercanos (p. ej. 44s en móvil) → sensación de “cruce” / exceso.

**Solución (dos capas):**

1. **`src/styles/global.css`** — reglas `html[data-theme='dark'] body.page-como-funciona #odysseyNavHeader...`:
   - Escáner **más lento** y **más tenue** (opacidad, gradiente, `animation-duration` 52–54s escritorio; 58s móvil en bloque dedicado).
   - **`animation-delay: 1.15s`** en overrides escritorio de esa ruta (entrada menos brusca al cargar).

2. **`como-funciona.astro` (final de `<style>`, `prefers-reduced-motion: no-preference`):** overrides con `:global(html[...] body.page-como-funciona)` sobre `.how-zero-protected__sweep` y `.how-more__sweep`:
   - **Duraciones** más largas que la base (p. ej. 66s / 82s oscuro; 74s / 88s claro) para **desacoplarse** del header.
   - **`animation-delay` positivos** (`1.65s` y `3.9s`) en sustitución de delays negativos, para que **no entren en fase rápida** al cargar.

**Por qué parte en el `.astro` scoped:** los keyframes del barrido vertical viven en ese archivo; usar `animation-duration` / `delay` en el mismo bundle mantiene coherencia con el nombre de la animación y gana en cascada frente al bloque base.

### 1.5 Halo del intro (oval)

- Selectores: `html[data-theme='dark|light'] .how-intro-stage__bg`.
- Ajustes finos iterados: halo **muy arriba** (porcentajes Y bajos en radiales) y **opacidad baja** para leer la **curva inferior del óvalo** sin brillar demasiado.
- Sin `__sweep` en intro.

---

## 2. Motion global — home (`src/styles/global.css`)

### 2.1 Desincronía entre capas (ritmos “incomodados”)

- Objetivo: evitar que **18s / 18.7s / 23s** coincidan en picos (efecto “todo a la vez”).
- Se repartieron **duraciones no redondas** (p. ej. niebla body 26.9s, rise 21–24s, franja inferior ~23.9s + mezclas 12.1 / 13.9s, mid-glow 96.7s / 127s, tail 70s, founder 18.3s, ciclos fall `--tevsys-home-fall-cycle: 313s`, intro 307s, etc.).
- Comentarios en bloque `body:has(.tevsys-home-band--cards)` documentan intención.

### 2.2 Entrada al cargar — delays positivos escalonados (`--tevsys-home-enter-*`)

**Problema:** `animation-delay` **negativos** hacían que al cargar la animación **entrara ya avanzada** en el ciclo (a veces en tramo **rápido**) y todo arrancaba junto.

**Solución:** en `html[data-theme='dark'] body:has(.tevsys-home-band--cards)` se definieron variables:

- `--tevsys-home-enter-body` (~0.25s) — niebla `body::before` home.
- `--tevsys-home-enter-rise` (~1.45s) — capas rise + bienvenida fall alineada al hero.
- `--tevsys-home-enter-header` (~2.65s) — escáner header home.
- `--tevsys-home-enter-cards` (~4.05s) — mid-glow burbujas.
- `--tevsys-home-enter-lower` (~5.45s) — franja inferior + niebla del strip.
- `--tevsys-home-enter-tail` (~6.75s) — burbuja cola.
- `--tevsys-home-enter-founder` (~7.35s) — franja fundador.

**Fall (ciclo largo):** los `animation-delay` / `linear` del ciclo infinito usan `calc(var(--tevsys-home-enter-rise) + var(--tevsys-home-fall-phase2-delay))` para que el **phase2** siga siendo “después de bienvenida + respiro” pero **desplazado** desde el instante de carga.

**Header micros** (`:not(.tevsys-header--home-scanner)`): `animation-delay: 0.85s` (escritorio base + ≥769px) y en móvil en el bloque del sweep-mobile, para que **no dispare** en t=0 al entrar en features / precios / etc.

**Home header** (`body:has(...) .home-scanner .tevsys-header-scanner`): delays basados en `--tevsys-home-enter-header` (escritorio dos breakpoints).

### 2.3 Referencias cruzadas

- Keyframes escáner: `tevsys-header-scanner-sweep`, `tevsys-header-scanner-sweep-mobile`.
- Documentación previa home: `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md`, entradas **Header** y **Home** en `docs/CHANGELOG-TEVSYS.md`.

---

## 3. Header — borde oval y ancho (`src/components/core/Header.astro`)

### 3.1 Evolución

1. Primera iteración: barra **más estrecha** (`width: calc(100% - …)`, `max-width: 1400px`, centrada) → en pantalla parecía **dos cápsulas** (logo BrandOval fuerte + menú en píldoras) flotando sobre el hero.
2. Ajuste pedido: **mismo borde sutil** pero **barra a todo el ancho** como antes (`width: 100%`, `max-width: none`, `margin` solo vertical superior).
3. **Logo:** tokens en el `<header>` para que `BrandOval` herede borde más suave y **fondo transparente** (`--tevsys-header-pill-border` / `--tevsys-header-pill-surface`), integrando el logo en una **sola** lectura de barra.

### 3.2 Detalles técnicos

- `border-radius: 2.5rem` (misma familia que `.brand-oval`).
- `border: 1px solid var(--tevsys-header-bar-border)`; tema claro: override `:global(html[data-theme='light']) header` con borde oscuro suave.
- `header.tevsys-header--with-scanner`: `overflow: hidden` — el escáner respeta el radio de la barra.

---

## 4. Layouts — `bodyClass` (`src/layouts/Base.astro`, `Page.astro`)

- Props opcional `bodyClass?: string` en `Base.astro` y `Page.astro`.
- Uso actual principal: **`page-como-funciona`** desde `como-funciona.astro`.
- Otras páginas que usan `Page.astro` sin prop: sin clase extra (comportamiento anterior).

---

## 5. Archivos tocados (lista de trabajo)

| Área | Archivo |
|------|---------|
| Cómo funciona (markup + CSS página + overrides sweep) | `src/pages/como-funciona.astro` |
| Home + header + micros + como-funciona header | `src/styles/global.css` |
| Header UI + tokens logo | `src/components/core/Header.astro` |
| Body class | `src/layouts/Base.astro`, `src/layouts/Page.astro` |

---

## 6. Bloque inferior — «Siguiente nivel» / «Esto no es todo…» (estado definitivo, may 2026)

**Archivo único:** `src/pages/como-funciona.astro` (markup + `<style>` scoped). **Ancla:** `id="mas-comportamientos"` en la `<section>` principal de este bloque.

### 6.1 Contenedor stage (motion)

- **`<section class="how-more how-more--stage">`**
  - Capas decorativas: **`.how-more__bg`**, **`.how-more__sweep`** (misma familia de barrido vertical que «De cero a protegido», keyframe `how-zero-protected-sweep-vertical`).
  - Contenido: **`.how-more__inner`** (`z-index` sobre el sweep).
  - Motion de esta página: **`body.page-como-funciona`** alarga la duración del `.how-more__sweep` y aplica **delay positivo** al cargar (ver §1.4).

### 6.2 Cabecera del bloque (`how-more__head`)

| Elemento | Contenido / criterio |
|------------|----------------------|
| **Eyebrow** | Texto fijo: **«Siguiente nivel»** (`.how-eyebrow.how-eyebrow--center`). |
| **H2** `id="how-more-title"` | Texto **«Esto»** + span **`.how-more-main-title__underline-anchor`** con **«no es todo:»** + span **«más comportamientos en vivo»** (`.how-more-main-title__accent`). Subrayado marca (`::after` en la **ancla**) de **«no»** hasta el final de **«…en vivo»**. |
| **Puente** `.how-more-bridge` | **Encima** del bloque narrativo largo (`.how-more-lead`): evita que el visitante “caiga” en auditoría + tres líneas sin pasar antes por las **cuatro rutas home**. |

### 6.3 Puente «FUNCIONALIDADES ÚNICAS» (cuatro cards)

- **Kicker:** `FUNCIONALIDADES ÚNICAS` (**sin** punto medio · — dos palabras juntas; may 2026) — clase compartida con el tono ámbar de auditoría (`.how-more-lead__audit-kicker` + `.how-more-bridge__kicker`).
- **Datos:** array **`homeBridgeCards`** (título, blurb, `href`, opcional `featureVideoSrc` + `videoLabel`).
- **Orden:** alineado a la **home** — Precisión, HyperClose, SML, Evidencia.
- **MP4:** Precisión, HyperClose, Evidencia usan los **mismos** `/videos/features/*.mp4` que las micros; **SML** sin `featureVideoSrc` hasta tener corte (solo texto + CTA).
- **HTML:** `<article class="how-more-bridge-card">` — título en enlace principal; `<video>` **fuera** del enlace del título (controles válidos); CTA secundario al pie.
- **Estilo cards (may 2026):** carril ámbar lateral, gradiente de superficie, jerarquía título/blurb/CTA; **SML** sin MP4 → placeholder **«Vídeo en preparación»** (ratio 16:9, borde discontinuo), no hueco vacío.

### 6.4 Narrativa intermedia y capítulo auditoría (may 2026 — bloques tipo Presentación)

- **H2 «Siguiente nivel»:** tras el título, **`.how-more__siguiente-aspiration`** (frase puente a bloques siguientes).
- **`how-chapter--bridge`:** kicker ámbar **FUNCIONALIDADES ÚNICAS** (`how-eyebrow--chapter-kicker`), **H3** «Las cuatro piezas, **con contexto breve**» (`how-present-title__accent`), **`how-section-sub`** (aquí solo contexto breve + vídeo muestra; detalle en micropáginas vía enlace); **grid** **2×2** desde **560px** (mismo orden que home: Precisión, HyperClose, SML, Evidencia); **MP4** con `max-height` más alto (`clamp`).
- **Puente:** **`.how-more-audit-bridge`** entre bridge y auditoría (cierre: «Lo siguiente ordena exactamente eso.»).
- **`how-chapter--audit`:** ceño **Primero · Auditoría**, **H3** «Hechos que **se pueden cruzar**», **`how-section-sub`** (triangulación / ID / canal + honestidad apertura pública + «No es señales…» en segunda línea); **placeholder vídeo** del capítulo (`how-audit-chapter__frame`, mismo teaser que «De cero…»); **lista** **`.how-more-lead__audit-points`** en caja **`.how-more-lead__audit`**; nota al pie clips.
- **Temas OFF / pasiva / retocar:** **`.how-more-lead--topics`** (fuera del capítulo auditoría), antes del grid de cuatro clips.
- **Tres líneas con tema + subrayado** (clases `how-more-lead__line--topic-u1` … `u3`): OFF / observación pasiva / retocar con EA vigilando — textos de apoyo con **subrayado** vía `.how-more-lead__topic::after`.
- **Alineación narrativa:** `docs/PROTOCOLO_AUDITORIA_IA_FASE1_MANUAL_ASISTIDA.md` (§0 honesto, §4 triangulación/focos, §5.7 ID).

### 6.5 Grid de cuatro «clips» (`.how-more-grid`)

- **Datos:** array **`siguienteNivelClipCards`** — hoy solo `{ title }[]` (cuatro títulos).
- **UI:** cada celda **`.how-more-cell.how-more-cell--video`** con placeholder **`.how-embed-placeholder`** y CTA **«Clip en preparación →»** (`.how-more-card__cta--pending`, no enlace hasta haber URL).
- **Títulos actuales (orden):** 1) Auditoría con evidencia (Fase 1 manual), 2) Observación pasiva, 3) OFF, 4) Retocar ~25–30 s.
- **Pendiente de producto:** sustituir placeholders por **embeds reales** (~25–30 s) cuando existan; probable ampliación del array con `embed` / `href` (patrón parecido a `presentationParts`).

### 6.6 Lo que viene después en la página (contexto)

- **`how-depth`:** grid de enlaces «Enlaces directos en vivo» (HyperClose, evidencia, SML, auditoría) — **se mantiene**; posible consolidación futura cuando el fundador cierre diseño (ya anotado en CHANGELOG 30 abr).

### 6.7 Pendiente UX y feedback (fundador — may 2026)

- **Transición grid puente → capítulo auditoría:** mitigado con **`.how-more-audit-bridge`** + caja distinta del grid; si tras **feedback** del fundador (sesión cerrada **1 may 2026**, pendiente **mañana**) aún se nota salto, afinar espaciado / ritmo / separador adicional en pasada corta.
- **SML sin vídeo:** placeholder en card (ver §6.3); sustituir por MP4 cuando exista corte.
- **Feedback pendiente (post mañana):** microcards puente, copy del capítulo auditoría (tono/longitud), empalme con bloques inferiores, clips cuando haya material — incorporar viñetas en este § o en CHANGELOG según decisión.

---

## 7. Qué no hacer sin releer esto

- No volver a **delays negativos** masivos en intro/carga sin motivo: reintroduce **picos** al entrar.
- No igualar **duraciones** header vertical-sweep y escáner en **44s** en la misma página sin comprobar fase.
- En `/como-funciona`, no reactivar barrido en **intro stage** sin acordar impacto con header.
- Tras tocar `Header.astro` / `global.css` motion: validar en **tema oscuro**, **home**, **una micro**, **`/como-funciona`**, **`prefers-reduced-motion: reduce`**.

---

## 8. Changelog del repo

- Resumen breve y fecha: **`docs/CHANGELOG-TEVSYS.md`** (entrada superior **1 may 2026** — paquete motion + header + handoff).
- Este archivo: **`docs/HANDOFF_COMO_FUNCIONA_MOTION_HEADER_1MAY2026.md`**.

---

## 9. Cierre sesión 1 may 2026 — continuidad

- **Estado:** `/como-funciona` (puente cards, capítulo auditoría, puente de una línea) + este handoff **al día**; **pendiente feedback** del fundador (pasada completa **mañana**).
- **Siguiente:** con tu feedback → ajustes puntuales (copy/CSS/motion si hace falta) → mirada oscuro/claro y `prefers-reduced-motion` → si toca, línea en **CHANGELOG-TEVSYS** + commit `web(tevsys): …`.
- **Contexto:** repo TGP (EA, SML, zona sagrada) sigue en su propio ritmo; esta web no lo sustituye.
