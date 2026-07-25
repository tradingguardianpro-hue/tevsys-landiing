# Handoff — Home + cierre visual (cohesión jun 2026)

**Última actualización:** 25 jul 2026 — puentes con losa opaca (anti mid-glow)  
**Archivos vivos:** `src/pages/index.astro` · `src/components/core/Footer.astro`  
**Hero (sin cambios motion):** `HomeHeroSection.astro` — esquema **2m-E** · `HANDOFF_HOME_HERO_ESQUEMAS.md`  
**Método:** repo TGP → `.cursor/rules/workflow-web-visual-tevsys.mdc`  

---

## Contexto

Tras cerrar el **hero 2m-E**, el scroll a valor + cards + auditoría + planes + pie cambiaba de registro visual. Objetivo: **pegamentos + aire + mono solo en puentes/metadatos**, sin rehacer la home.

**Criterio:** contraste hero/abajo = equipo interno. **Mono dentro de cards = revertido** (pegote); **puentes fuera = OK**.

**24 jul 2026 — bug “separadores que a veces no se ven”:** el puente `Precisión · HyperClose · SML · Evidencia` vivía **dentro** de la banda cards, **detrás/debajo** de las burbujas (`.tevsys-home-mid-glow`). El motion las lavaba. **Fix parcial:** hairline en `<span>`, fuera de mid-glow.

**25 jul 2026 — mismo bug tras deploy/reload:** el blur del glow **sigue pintando encima** de una raya de 1px aunque el puente esté “fuera”. **Fix:** cada puente es una **losa opaca** (`background` + `::after` a `100vw`) + hairline más firme + `z-index: 20`. Misma pieza en los 4 (incl. Trader · fundador).

---

## Mapa del scroll (estado jul 2026)

| Tramo | Puente / gesto | Estado |
|-------|----------------|--------|
| Hero → bloque valor | `Precisión · HyperClose · SML · Evidencia` | ✅ Fijo 24 jul (fuera mid-glow) |
| Bloque valor → grid cards | checklist + *Ellos deslizan* + **Opción A** aire | ✅ Cerrado |
| Grid cards → auditoría IA | `Evidencia · Trazabilidad · Verificación` | ✅ Fijo 24 jul |
| Auditoría IA → **Planes** | `Essential · Advanced · Pro` | ✅ Fijo 24 jul |
| Planes → fundador → footer | `Trader · fundador` | ✅ Referencia visual (mismo patrón) |

---

## Estado actual — home (validado fundador)

1. **Hero** — motion/KITT intactos (2m-E).
2. **Puente hero** — `.tevsys-home-hero-bridge`: hairline + `Precisión · HyperClose · SML · Evidencia`.
3. **H2** — `¿Has perdido dinero por no parar a tiempo — y por deslizamiento al límite?`
4. **Checklist carbón** — `.feature-card__checklist-static`; **toque B** aparcado.
5. ***Nosotros sí.*** — `.tevsys-brand-accent-underline`.
6. **Remate** — `Ellos deslizan. En tevsys cerramos.` — IBM Plex Mono.
7. **Grid 4 cards** — títulos Inter + subrayado 2px; hooks **Inter cursiva** (mono hooks **revertido**).
8. **Opción A respiración** — más aire checklist→grid; padding cards; cuerpo suave; hook fuerte.
9. **Puente auditoría** — `.tevsys-home-cards-audit-bridge` **entre cards y franja inferior** (hairline + `Evidencia · Trazabilidad · Verificación`).
10. **Caja auditoría** — kicker `Revisión asistida · próximamente` (antes `Verificación con IA · próximamente`).
11. **Planes** — puente `.tevsys-home-audit-plans-bridge` **entre auditoría y planes** (hairline + `Essential · Advanced · Pro`); banda `#000`; **Opción A** aire en plan-cards; pastillas estado mono.
12. **Fundador** — puente `.tevsys-home-plans-founder-bridge` **entre planes y banda fundador** (hairline + `Trader · fundador`); **respiración** puente + cola fundador antes del footer; firma mono.
13. **Hero móvil** — mano robótica centrada dentro del marco redondeado (`HomeHeroSection.astro` ≤768px).

---

## Footer (prueba jun 2026, revertible)

| Elemento | Tipografía | Copy |
|----------|------------|------|
| Contacto | IBM Plex Mono | `info@tevsys.io` · `Barcelona (España)` |
| Copyright | Inter | sin mono (22 jun) |
| Columnas / Made with love | Inter | sin cambio |

**Archivo:** `Footer.astro`

---

## Decisiones clave

| Tema | Decisión |
|------|----------|
| Mono hooks dentro cards | **Revertido** — pegote |
| Mono títulos / gris títulos cards | **Revertido** |
| Opción A respiración cards | **Cerrado** — fundador OK |
| Puente cards→auditoría | **Cerrado** — fundador OK |
| Puente auditoría→planes | **Cerrado** — fundador OK 21 jun noche |
| Footer mono | Contacto **mono** (prueba); **copyright Inter** (22 jun) |

---

## Siguiente frente — transición auditoría → Planes

**Estado:** ✅ **Cerrado 21 jun 2026 (noche)** — fundador OK.

- Puente `.tevsys-home-audit-plans-bridge`: `Essential · Advanced · Pro`
- Aire antes de banda `#000` + respiración plan-cards (familia Opción A)

**Revertible:** footer mono contacto/copyright si no convence en frío.

---

## Clases CSS (referencia)

```text
.tevsys-home-hero-bridge / __text
.tevsys-home-cards-audit-bridge
.tevsys-home-audit-plans-bridge
.tevsys-home-plans-founder-bridge
.tevsys-brand-accent-underline
.tevsys-card__title--accent-line / --short / --long
.audit-teaser-kicker
.plans-section / plan-card__status
.founder-signature
.footer-contact__item span / .footer-copyright
```

---

## Commits

Paquete sesión (recomendado si un solo push):

```text
web(tevsys): cohesión home puentes cards auditoría planes respiración footer
```

Incremental planes (si ya pusheaste antes):

```text
web(tevsys): puente planes Essential Advanced Pro respiración plan-cards
```

---

## Espejos

| Repo | Archivo |
|------|---------|
| Web | `CHANGELOG-TEVSYS.md` § Home jun 2026 |
| Web | `CONTENIDO_WEB_TEVSYS_LANDING.md` |
| TGP | `docs/HANDOFF_HOME_BLOQUE_CARDS_JUN2026.md` |
| TGP | `QUE_CONTIENE_V12` → Ampliaciones |
