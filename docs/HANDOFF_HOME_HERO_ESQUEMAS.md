# Handoff — Hero home · esquemas de jerarquía (jun 2026)

**Última actualización:** 6 jun 2026 — **2m-E activo**  
**Archivo vivo:** `src/components/sections/heros/HomeHeroSection.astro`  
**Activo en web:** **esquema 2m-E** — vacío (~4 s) → batch 4 → apagado escalonado → solos async con **slots aleatorios** (JS) → pausa → loop.

## Esquema 2m-E — solo phase JS + slots variables (activo — 6 jun 2026)

1. **Vacío** al cargar (~4 s) — tiempo para leer H1 / marca; rectángulo pilares en negro.
2. **Entran las 4** juntas (posiciones `batch` fijas en frontmatter) · ~10 s lectura.
3. **Apagan** escalonadas (una a una).
4. **Vuelven una a una** — orden y **posición distintos cada ciclo** (`HERO_PILLAR_SOLO_SLOTS` barajados; sin sitio fijo por frase).
5. Pausa (~6,2 s) → **loop**.

Timing y slots en `<script define:vars>` del `.astro`. CSS solo transiciones de opacidad; sin `@keyframes` 72 s.

Posiciones `batch` en frontmatter `heroProductPillars`. Fase solo: 8 slots repartidos en el rectángulo H1–disclaimer.

## Esquema 2m-D — intro vacío + batch + solos CSS (supersedido — 6 jun 2026)

Animación CSS 72 s; solos con posición fija por índice — sustituido por 2m-E.

## Esquema 2m-C — intro cuatro visibles (supersedido)

## Esquema 2m — una línea fade (supersedido — 20 jun 2026)

## Esquema 2l-B — dos líneas fijas (descartada — 20 jun 2026)

- **`hero-pillar-lines`** — L1: Precisión · Disciplina · L2: Trazabilidad · MT5.
- Sin caja gris · mismo halo recortado que 2l-A · sin animación.

---

## Esquema 2l-A — tira fija (descartada — 20 jun 2026)

### Qué cambia respecto a 2k

- **Sin marquee** — eliminada animación `hero-edge-marquee`, máscara lateral y bucle duplicado.
- **`hero-pillar-band`** — 4 frases ES fijas, separador `·`, `flex-wrap` en móvil.
- **Fondo gris carbón** — banda con borde fino + gradiente suave; texto gris claro ~88% opacidad.
- **Halo** — opacidades ~−32% en `.hero-section__glow` (zona texto más neutra).

### Copy (frontmatter)

```js
const heroProductPillars = [
  'Precisión de cierre en tu operativa',
  'Disciplina automatizada',
  'Trazabilidad verificable',
  'Protección activa en MT5',
];
```

### Jerarquía

Igual que 2k cerrado: H1 → tira pilares → disclaimer + CTAs → mano + TEVS + MT5.

### Rollback a 2k (marquee)

Restaurar `data-hero-layout="scheme-2k"`, clases `hero-edge-strip` + animación — ver git history del `.astro` o sección 2k abajo.

---

## Esquema 2l-B — dos líneas fijas (pendiente probar)

**Markup objetivo:** sin caja; dos `<p>` centrados mismo peso.

- L1: Precisión de cierre en tu operativa · Disciplina automatizada  
- L2: Trazabilidad verificable · Protección activa en MT5  

Inter ~15 px · gris claro · halo recortado como 2l-A.

---

## Esquema 2l-C — una frase (pendiente probar)

**Copy único:**  
*Disciplina automatizada, precisión de cierre, trazabilidad verificable y protección activa en MT5.*

DM Sans o Inter 400 · una línea desktop (balance en móvil) · sin caja · halo recortado.

---

## Esquema 2k — estado cerrado (19 jun 2026, supersedido por 2l)

### Jerarquía (orden fijo)

1. **H1** — Tú pones los límites. / **TEVSYS** los blinda.
2. **`hero-edge-strip`** — franja en movimiento (4 pilares producto, solo ES).
3. **Pausa visual** — margen reducido respecto a iteraciones 2j/2g.
4. **Acto 2** — disclaimer + CTAs.
5. **Mano robótica** + TEVS discreto + nota MT5.

### Copy marquee (frontmatter)

```js
const heroMarqueePhrases = [
  'Precisión de cierre en tu operativa',
  'Disciplina automatizada',
  'Trazabilidad verificable',
  'Protección activa en MT5',
];
```

- **Eliminado:** `Where precision meets the edge` (mezcla ES/EN en home ES — fundador jun 2026).
- **Eliminado:** `text-transform: lowercase` (minúsculas forzadas).

### Tipografía y color

| Elemento | Familia | Tamaño aprox. | Color / notas |
|----------|---------|---------------|---------------|
| H1 | DM Sans 600 | clamp 2–4.35rem | `#e8ebf0` (blanco suave, no puro) |
| TEVSYS | DM Sans 700 | — | `#f5b041` |
| Marquee | Inter 400 | ~15 px desktop | `rgba(202,206,218,0.78)` · tracking 0.055em |
| Disclaimer | DM Sans 500 | ~15 px | `rgba(244,246,248,0.74)` |
| TEVS largo | Inter 400 | ~10 px | EN fijo · `lang="en"` `translate="no"` · ~20% opacidad |
| Nota MT5 | Inter 400 | 13 px | gris 62% |

### TEVS (`hero-image__brand`)

- **Posición:** debajo del `<picture>`, dentro de `hero-image__wrapper` (padding gris), **no** overlay sobre el PNG.
- **Texto:** `Trading Edge Verification System` (inglés; evitar traducción automática del navegador).
- **Historial sesión:** probado overlay en franja negra del asset → fundador: bajar fuera de la foto; versión final en marco gris.

### Espaciado clave (desktop aprox.)

- H1 `margin-bottom`: `clamp(2rem, 5.5vh, 3.65rem)` (antes ~4.25rem max).
- `hero-edge-strip` `margin-bottom`: `clamp(2.25rem, 5.2vh, 3.25rem)` (antes hueco 6.5rem).
- `hero-image__brand` `margin-top`: separación extra respecto al borde de la foto.

### Rechazado explícitamente (no reintroducir sin OK)

- Pill una línea / grid 2×2 / marcos batch.
- Capa velas SVG (`hero-velas-ambient`).
- Marquee bajo CTAs (2j) como capa principal.
- Tagline EN en franja de home ES.

### KITT / motion

- **No tocar:** animación KITT y motion global en `index.astro` + `global.css`.

### Validación fundador

- Hero **cerrado en este sentido** (captura ~22:40 jun 2026).
- Salto hero → bloque *«¿Cuánto has perdido…?»* aceptable; opcional **más aire** vía `index.astro` (siguiente tarea).

### Commits sugeridos (sesión acumulados)

```
web(tevsys): hero 2k marquee legible disclaimer DM Sans menos hueco
web(tevsys): hero TEVS debajo foto en inglés sin overlay
web(tevsys): hero pulido marquee H1 off-white TEVS aire
web(tevsys): hero marquee solo ES sin tagline edge
```

---

## Esquema 2j (supersedido — pilares + marquee bajo CTAs)

## Esquema 2f (supersedido por 2g — validado fundador 18:30)

- Marco dos líneas (`hero-product-block`) · disclaimer fuera entre marco y CTAs.

---

## Esquema 2c (supersedido por 2d)

Pill una línea · badge tagline visible · sep ámbar.

---

## Esquema 2b (supersedido por 2c)

Dos líneas de pilar mismo peso · nota MT5 bajo mano.

---

---

## Rollback al hero pre-escala (jun 2026)

1. **Git (preferido):** `git log --oneline -- src/components/sections/heros/HomeHeroSection.astro` → checkout del commit deseado.
2. **Manual:** restaurar markup/CSS de la sección «Baseline pre-esquema 2» abajo en el mismo `.astro`.

---

## Esquema 2 (supersedido por 2b)

Sublínea primary/secondary distinto peso · nota MT5 en bloque texto.

---

## Baseline pre-esquema 2 (19 jun 2026)

**Orden:** H1 una línea · disclaimer grande · contexto pequeño · tagline · CTAs.

```html
<h1 class="hero-title">
  Tú pones los límites. <span class="hero-title__brand">TEVSYS</span> los blinda.
</h1>
<p class="hero-microline">No damos señales ni promesas de beneficio.</p>
<p class="hero-context-line">
  Disciplina automatizada, precisión de cierre de operaciones,
  trazabilidad verificable y protección activa en MT5.
</p>
<!-- tagline antes de CTAs · H1 max ~2.55rem · nowrap desktop -->
```

---

## Esquema 2 (referencia)

**Orden:** H1 dos líneas grande · sublínea fuerte · sublínea apoyo · disclaimer pequeño · CTAs · tagline discreta.

| Bloque | Copy |
|--------|------|
| H1 L1 | Tú pones los límites. |
| H1 L2 | **TEVSYS** los blinda. |
| Sub — primary | Disciplina automatizada · Trazabilidad verificable |
| Sub — secondary | Precisión de cierre de operaciones · Protección activa en MT5 |
| Disclaimer | No damos señales ni promesas de beneficio. |

**Tipografía (desktop aprox.):** H1 hasta ~4rem · primary ~1.65rem · secondary ~1.25rem · disclaimer ~0.9rem.

---

## Esquemas pendientes de probar

- **Esquema 1:** cuatro líneas de pilar (una idea por línea).
- **Esquema 3:** tres frases narrativas con guión.

Cambiar `data-hero-layout` + markup según bloques de este MD cuando el fundador pida 1 o 3.

---

## Correlato

- Inspiración escala: [Axiom Labs](https://axiomlabs.es) (estructura, no tono quant).
- Hub TGP: `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → *Sesión web larga*.
