# Motion home tevsys — Handoff IA → IA (tema oscuro)

**Repo:** `tevsys-landiing` (Astro). **Alcance:** solo **home** (`/`), **tema oscuro** (`html[data-theme='dark']`). **No afecta** al EA MQL5 ni al workspace TGP salvo documentación enlazada.

**Objetivo de producto:** “Vida” en la página (sistema activo, premium, calmado) **sin** cine ni estroboscopio. Las animaciones **no comparten reloj**: duraciones y funciones de tiempo distintas a propósito; si en algún instante coinciden, es casualidad.

**Accesibilidad:** `prefers-reduced-motion: reduce` apaga animaciones de estas capas (o las fija en estado estático según regla en `global.css`).

---

## 1. Archivos fuente

| Archivo | Rol |
|---------|-----|
| `src/styles/global.css` | Todas las `@keyframes`, duraciones, colores, capas `::before`, clases `.tevsys-home-*`, header escáner. |
| `src/pages/index.astro` | Marcado: hero stack + dos rectángulos KITT; banda cards + `mid-glow` (capa única en DOM; **segunda burbuja** = `::before` en CSS); banda lower + strip + tail bubble; fundador + strip. |
| `src/components/core/Header.astro` | Si `pathname === '/'`: clase `tevsys-header--home-scanner` en `<header>` + `<div class="tevsys-header-scanner" aria-hidden="true">`. Estilos locales mínimos (`position: relative`, `overflow: hidden` en header). |

---

## 2. Paleta en motion (identidad)

- **Ámbar / KITT (acento producto):** `rgba(245, 176, 65, …)` (#f5b041), con halos `rgba(255, 236, 205, …)`, sombras `rgba(210, 175, 115, …)` — niebla `body::before`, **rise** (`.tevsys-home-kitt-rect--rise`), franjas inferiores, burbujas, etc.
- **Niebla / fondo:** azul‑negro muy contenido `rgba(4–18, …)` en gradientes 188°.
- **Gris “instrumento” (header + fall vertical + KITT franja inferior + mid-glow cards):** mismos RGB que el escáner del header — `rgba(110, 114, 128)`, `rgba(186, 190, 202)`, `rgba(95, 98, 110)` con alfas según capa. **Mid-glow** (abr 2026): dos **radiales grises** (niebla ancha + elipse “aureola”); **no** compiten en ámbar con el hero. **Header:** banda diagonal ~102°; escritorio **≥769px** y móvil comparten resalte de haz (ver `global.css`); animación **33.8s** (móvil **27.4s** solo duración). **Fall** (`.tevsys-home-kitt-rect--fall`): dos pseudo-elementos — haz **gris** (`::before`) y **ámbar** (`::after`); misma trayectoria `tevsys-home-intro-kitt-cycle-pos` (~311s) + mezcla `tevsys-home-fall-mix-gray` / `tevsys-home-fall-mix-amber` (**8.3s**, más peso al gris). **Padre:** solo `tevsys-home-intro-kitt-cycle-fade` (opacidad/visibilidad del barrido). **Lower strip:** niebla en el bloque; KITT en `::before`/`::after` con `tevsys-home-lower-strip-kitt-pos` (18s) + mezcla **10.3s** (`tevsys-home-lower-kitt-mix-*`).

---

## 3. Capas y orden (z-index mental)

- **Hero:** `.tevsys-home-hero-stack` con `isolation: isolate`; rectángulos `.tevsys-home-kitt-rect` en `z-index: 0`; contenido real en `.tevsys-home-hero-stack__content` en `z-index: 1`.
- **Cards:** `.tevsys-home-mid-glow` detrás (`z-index: 0`); grid/títulos en `z-index: 1`.
- **Header escáner:** `.tevsys-header-scanner` absoluto `inset: 0`, `z-index: 0`; nav / acciones `z-index: 1` para no tapar clics ni lectura.

---

## 4. Lista de animaciones — duración, easing, sincronía

**Regla:** ningún par usa la misma duración **y** el mismo easing **y** el mismo patrón de keyframes; los números “raros” (23.3s, 311s, 33.8s…) reducen batidas periódicas conjuntas.

| # | Selector / capa | Animación | Duración | Easing / notas | Dirección / comportamiento |
|---|-----------------|-----------|----------|----------------|----------------------------|
| A | `body::before` (niebla + KITT zona superior viewport) | `tevsys-top-strip` | **20s** `alternate` (default dark) | `ease-in-out` | Mueve **dos capas** de `background-position` (niebla + franja ámbar). |
| A′ | Misma capa en **home** (`body:has(.tevsys-home-band--cards)`) | misma | **23.3s** | `ease-in-out` | Solo cambia `animation-duration` → **desincronía** respecto a B/C y respecto a default 20s. |
| B | `.tevsys-home-kitt-rect--rise` | `tevsys-top-strip` | **18.7s** | `ease-in-out` `alternate` | Misma familia de keyframes que A, **otro periodo** → no va a la par con niebla home ni con fall. |
| C | `.tevsys-home-kitt-rect--fall` | `tevsys-home-intro-kitt-cycle-pos` + `tevsys-home-intro-kitt-cycle-fade` + mix | **311s** pos/fade; **8.3s** mix | `linear` (pos); mix `ease-in-out` `infinite` | Barrido **vertical**; **gris + ámbar** superpuestos, alternancia de opacidad (más tiempo en gris). Fase visible al inicio del ciclo largo. |
| D | `#odysseyNavHeader .tevsys-header-scanner` | `tevsys-header-scanner-sweep` | **33.8s** | `infinite`; cada tramo con `animation-timing-function: ease-in-out` en keyframes | **Solo gris**; trayectoria **irregular** en un solo bucle (a veces invierte sin llegar al borde); **sin** `alternate` global. |
| E1 | `.tevsys-home-mid-glow` (capa principal; 1 radial gris) | `tevsys-home-mid-bubbles-a` | **92s** | **`linear`** `infinite` (**sin** `alternate`; 0%=100%) | ~72% ciclo en **perímetro exterior**; luego centro detrás de cards. **Móvil:** `*-a-mobile` **92s**. |
| E2 | `.tevsys-home-mid-glow::before` (segunda burbuja / aureola) | `tevsys-home-mid-bubbles-b` | **118s** | **`linear`** `infinite` (**sin** `alternate`; delay **-26.8s** desktop / **-29.5s** móvil) | Misma filosofía; ruta distinta. **Tono:** radial + `opacity` ~**0,66** — menos “objeto” que la capa principal; no compite con las cards. |
| F | `.tevsys-home-lower-strip` | `tevsys-home-lower-strip-fog` + `tevsys-home-lower-strip-kitt-pos` + mix | **18s** fog/kitt; **10.3s** mix | `ease-in-out` `alternate` (fog/kitt) | Niebla en capa base; KITT gris/ámbar en pseudo-elementos (misma idea que fall). **Móvil:** mix `*-mobile` + gradientes más intensos. **Escritorio ≥769px:** mix `tevsys-home-lower-kitt-mix-gray-desktop` / `-amber-desktop` + opacidad/gradiente algo mayor (misma gama, menos que móvil). |
| G | `.tevsys-home-tail-bubble-solo` | `tevsys-home-tail-bubble-solo` (**64s**); en **≥769px** `tevsys-home-tail-bubble-solo-desktop` | **64s** | **`linear`** `alternate` | Burbuja radial; zigzag; máscara inferior. `linear` para evitar picos de velocidad entre claves. |
| H | `.tevsys-home-founder-strip` | `tevsys-home-founder-strip` | **16s** | `ease-in-out` `alternate` | Franja fina sobre copy fundador (misma familia visual que cards/lower). **Escritorio ≥769px:** opacidad y franja ámbar del segundo gradiente ligeramente reforzadas (misma paleta). |

**Variables CSS home (contexto KITT fall):** en `body:has(.tevsys-home-band--cards)`: `--tevsys-home-intro-cycle: 300s`, `--tevsys-home-fall-cycle: 311s` (fall usa la segunda; **311 ≠ 300** a propósito).

---

## 5. Detalle header escáner (D)

- **Gradiente:** `linear-gradient(102deg, …)` con transparencias y grises en ~46–54% del vector de color.
- **`background-size`:** `240% 100%` (haz ancho, suave).
- **Keyframes `tevsys-header-scanner-sweep`:** paradas en 0/100%, 22%, 29%, 51%, 57%, 76%, 85%, 93% — recorridos asimétricos; **velocidad perceptual calmada** (evolución respecto a iteraciones previas que parecían “flash” con ciclos cortos + `linear`).
- **Móvil / reduced motion:** reglas al final de `global.css` reducen niebla, apagan KITT rect, **escáner header activo** en home (resaltado), mid-glow con blur/opacidad propios; **`animation-name`** del mid-glow en móvil = keyframes **`*-mobile`** (columna detrás de cards). **Franja inferior (planes):** en móvil + `no-preference`, `.tevsys-home-lower-strip` refuerza contraste gris/ámbar (misma gama) y usa `tevsys-home-lower-kitt-mix-*-mobile`. `prefers-reduced-motion: reduce` también anula **`mid-glow::before`**. Revisar `@media (prefers-reduced-motion: reduce)` y `@media (max-width: 768px)`.

---

## 6. Keyframes compartidos

- **`tevsys-top-strip`:** usado por **A** (body), **B** (rise). Movimiento combinado posición niebla + franja ámbar.
- **`tevsys-home-intro-kitt-cycle-pos` / `tevsys-home-intro-kitt-cycle-fade`:** **C** (fall); posición en pseudos, apagado global en el padre. **`tevsys-home-fall-mix-*`:** alternancia gris/ámbar en el haz.
- **`tevsys-home-lower-strip-fog` / `tevsys-home-lower-strip-kitt-pos`:** franja inferior; **`tevsys-home-lower-kitt-mix-*`:** mezcla gris/ámbar (periodo distinto al fall).

---

## 7. Cómo extender sin romper la filosofía

1. **Nueva capa animada:** elegir duración **no** múltiplo obvio de 16/18/20/23.3/33.8/36/38/311 (p. ej. 27.4s o 41.2s).
2. **No** reutilizar el mismo `animation-name` con el mismo periodo que otra capa visible simultáneamente si buscáis asincronía perceptible.
3. **Header y fall hero vertical:** mantener **gris** (misma familia cromática); no mezclar ámbar en esas capas (marca vs “instrumento”).
4. Tras cambios: actualizar **`CHANGELOG-TEVSYS.md`** y este archivo si cambian números o nombres.

---

## 8. Referencias cruzadas

- Changelog publicable: `docs/CHANGELOG-TEVSYS.md` (entrada **Motion / vida en home**).
- Checkpoint proyecto TGP (contexto comercial, no código EA): `TGP_V11_CHECKPOINT_PRODUCCION.md` § *CHECKPOINT 16 ABR 2026 — LANDING motion home* (ruta según repo del fundador).
- `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` — entrada CHANGELOG **16 abr 2026 — Web tevsys.io** (correlato).
- Prompt equipo: `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` §0.1 (bullet motion).
