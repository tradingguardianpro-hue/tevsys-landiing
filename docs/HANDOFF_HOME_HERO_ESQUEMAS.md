# Handoff — Hero home · esquemas de jerarquía (jun 2026)

**Última actualización:** 19 jun 2026  
**Archivo vivo:** `src/components/sections/heros/HomeHeroSection.astro`  
**Activo en web:** **esquema 2k** — marquee bajo H1 · sin pilares estáticos · TEVS overlay en franja negra de la foto (casi invisible).

---

## Esquema 2k (activo — 19 jun 2026)

- H1 → **`hero-edge-strip`**: 5 frases en bucle (mayúscula inicial · ~14 px · contraste ~72% · sin minúsculas forzadas).
- **`hero-disclaimer`:** DM Sans (misma familia que H1), ~15 px, gris claro legible.
- Espacio H1 → acto 2 reducido (marquee más cerca de disclaimer + CTAs).
- **TEVS** (`hero-image__brand`): **debajo** de la foto, en el padding gris del wrapper (no overlay sobre el PNG). Texto fijo **EN:** `Trading Edge Verification System` · `lang="en"` · casi invisible (~20% opacidad).
- Sin velas · KITT intacto.

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
