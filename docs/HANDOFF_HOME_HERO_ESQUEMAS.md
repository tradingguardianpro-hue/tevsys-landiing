# Handoff — Hero home · esquemas de jerarquía (jun–jul 2026)

**Última actualización:** 26 jul 2026 — paso 4 chevron antes tras título  
**Archivo vivo:** `src/components/sections/heros/HomeHeroSection.astro`  
**Ambiente / header / KITT:** `src/styles/global.css`  
**Activo en web:** **esquema 2m-E-column** + marca chevron + reinicio suave.

---

## Checkpoint 26 jul 2026 — hero timing (pasos 1–4)

**Paso 4 (foco ahora):** ~**0,5 s** de aire al cargar → blur chevron (no al instante). Frases aún retrasadas. **Siguiente:** matizar frases.

**Pasos 1–3:** ver CHANGELOG (teatro / hold / cascada).

---

## Checkpoint 25 jul 2026 — marca chevron + ritmo (fundador OK)

### Secuencia (estado vivo — ver también paso 3 arriba)

1. **Intro marca** — `hero-tevsys-chevrons.png` (solo chevrones, transparente). Blur 14px → nítido; misma curva a la salida.
2. **1.ª carga (paso 3):** frases entran ~2,6 s tras empezar el chevron (aún emergiendo); hold corto; blur salida.
3. **Batch** — 4 frases en columna (Precisión → Disciplina → Trazabilidad → Protección).
4. **Solo** — chevron pequeño centrado; frases en **perímetro** (no pisan el centro); desktop **una línea**.
5. **Reinicio suave** — bucles siguientes: misma alma blur, tiempos más cortos (`*Soft`). 1.ª carga = intro teatro compartido.
6. **Anti-disco (pareja con cards handoff):**
   - Header cede intensidad con chevron (`body.tevsys-home-mark-focus`).
   - Ambiente settle ~26 s (`body.tevsys-home-ambient-settle`).
   - Picos KITT (fall / lower / tono) más suaves — **validado fundador: “simplemente perfecto”**.

### Timing clave (`HERO_PILLAR_TIMING`)

- Arranque marca ~0,7 s tras ciclo; fade-in ~5,2 s (1.ª) / ~3,4 s (soft).
- Hold ~2,2 s / ~1,5 s soft; fade-out ~3 s / ~2,4 s soft.
- Slots solo: `maxW: calc(50% - 3.75rem)` + `white-space: nowrap` (desktop).

### Commits sesión (serie web)

Ver `CHANGELOG-TEVSYS.md` entradas **25 jul 2026** (hero + home ambiente/KITT/puentes).

---

### 2m-E-column — batch simétrico (28 jun 2026 — base)

- **Batch:** columna centrada bajo H1; orden **Precisión → Disciplina → Trazabilidad → Cuenta** (anti-encasillamiento).
- **Marca hero:** chevrons — ver checkpoint 25 jul arriba.
- **Apagado:** arriba→abajo; luego fase **solo** (perímetro desde 25 jul).

## Esquema 2m-E — solo phase JS + slots variables (supersedido batch — 28 jun 2026)

- Menos hueco vacío entre vueltas (`emptyMs` / `loopPauseMs` reducidos; móvil aparte).
- **Handoff:** si la 4.ª frase era la de transición, ya no salta de sitio visible — fundido antes de mover.
- **Solos:** reposicionamiento con fundido si aún se veía la frase (no corte instantáneo).
- Revertir: restaurar `HERO_PILLAR_TIMING` previo en el `<script>` del `.astro`.

## Esquema 2m-E — solo phase JS + slots variables (activo — 6 jun 2026)

1. **Vacío** al cargar (~4 s) — tiempo para leer H1 / marca; rectángulo pilares en negro.
2. **Entran las 4** juntas (posiciones batch) · ~10 s lectura.
3. **Apagan** en oleada **2 → 1 → 1** (Precisión+Trazabilidad casi juntas · Disciplina · Protección al final).
4. **Fase solo:** las 4 una a una, orden y posición aleatorios.
5. Pausa (~2,4 s escritorio / ~2,1 s móvil) → **loop**. *(Histórico 6 jun: ~6,2 s.)*

Timing en `<script define:vars>` del `.astro` — ver checkpoint 25 jul.

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

Sublínea primary/secondary distinto peso · nota MT5 bajo mano.

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

- **Scroll hero → cards + anti-disco ambiente:** `docs/HANDOFF_HOME_BLOQUE_CARDS_JUN2026.md`
- Inspiración escala: [Axiom Labs](https://axiomlabs.es) (estructura, no tono quant).
- Hub TGP: `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → *Sesión web larga* / Ampliaciones 25 jul.
