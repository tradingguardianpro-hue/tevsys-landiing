# Handoff — Home + cierre visual (cohesión jun 2026)

**Última actualización:** 21 jun 2026 (puente auditoría + respiración cards)  
**Archivos vivos:** `src/pages/index.astro` · `src/components/core/Footer.astro`  
**Hero (sin cambios motion):** `HomeHeroSection.astro` — esquema **2m-E** · `HANDOFF_HOME_HERO_ESQUEMAS.md`  
**Método:** repo TGP → `.cursor/rules/workflow-web-visual-tevsys.mdc`

---

## Contexto

Tras cerrar el **hero 2m-E**, el scroll a valor + cards + auditoría + planes + pie cambiaba de registro visual. Objetivo: **pegamentos + aire + mono solo en puentes/metadatos**, sin rehacer la home.

**Criterio:** contraste hero/abajo = equipo interno. **Mono dentro de cards = revertido** (pegote); **puentes fuera = OK**.

---

## Mapa del scroll (estado jun 2026)

| Tramo | Puente / gesto | Estado |
|-------|----------------|--------|
| Hero → bloque valor | `Precisión · HyperClose · SML · Evidencia` | ✅ Cerrado |
| Bloque valor → grid cards | checklist + *Ellos deslizan* + **Opción A** aire | ✅ Cerrado |
| Grid cards → auditoría IA | `Evidencia · Trazabilidad · Verificación` | ✅ Cerrado |
| Auditoría IA → **Planes** | `Essential · Advanced · Pro` + aire + respiración plan-cards | ✅ Aplicado (feedback fundador pendiente) |
| Planes → fundador → footer | firma mono; footer contacto/copyright mono | ✅ Parcial (footer prueba) |

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
9. **Puente auditoría** — `.tevsys-home-cards-audit-bridge`: `Evidencia · Trazabilidad · Verificación`.
10. **Caja auditoría** — kicker `Revisión asistida · próximamente` (antes `Verificación con IA · próximamente`).
11. **Planes** — puente `.tevsys-home-audit-plans-bridge`: `Essential · Advanced · Pro`; banda `#000`; **Opción A** aire en plan-cards; pastillas estado mono.
12. **Fundador** — firma mono.

---

## Footer (prueba jun 2026, revertible)

| Elemento | Tipografía | Copy |
|----------|------------|------|
| Contacto | IBM Plex Mono | `info@tevsys.io` · `Barcelona (España)` |
| Copyright | IBM Plex Mono | `Copyright © … Todos los derechos reservados.` |
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
| Puente auditoría→planes | **Aplicado** — `Essential · Advanced · Pro` + aire plan-cards; feedback pendiente |
| Footer mono | Prueba revertible |

---

## Siguiente frente — transición auditoría → Planes

**Salto actual:** caja azul (Familia auditoría / cian) → banda negra `#000` con `Elige tu cuenta` — cambio de color + tono comercial sin pausa de marca.

**Opciones a valorar (una por paso):**

| Id | Propuesta | Copy puente (ejemplo) | Notas |
|----|-----------|----------------------|--------|
| **1** | Puente mono (misma familia) | `Essential · Advanced · Pro` | Espejo de puentes arriba; directo |
| **2** | Puente narrativo | `Elige tu capa · MT5` | Menos catálogo, más marca |
| **3** | Puente + **Aire** | cualquiera de 1–2 + más margen antes de banda planes | Sin tocar copy planes |
| **4** | Kicker mono sobre H2 planes (sin puente) | `Cuentas · límites · MT5` encima de *Elige tu cuenta* | Dentro de banda negra |
| **5** | Respiración A en plan-cards | — | Si el salto es densidad, no solo puente |

**No repetir:** mono dentro del cuerpo de plan-cards (misma lección que feature cards).

---

## Clases CSS (referencia)

```text
.tevsys-home-hero-bridge / __text
.tevsys-home-cards-audit-bridge
.tevsys-home-audit-plans-bridge
.tevsys-brand-accent-underline
.tevsys-card__title--accent-line / --short / --long
.audit-teaser-kicker
.plans-section / plan-card__status
.founder-signature
.footer-contact__item span / .footer-copyright
```

---

## Commits

```text
web(tevsys): cohesión home puente auditoría cards respiración A footer
```

---

## Espejos

| Repo | Archivo |
|------|---------|
| Web | `CHANGELOG-TEVSYS.md` § Home jun 2026 |
| Web | `CONTENIDO_WEB_TEVSYS_LANDING.md` |
| TGP | `docs/HANDOFF_HOME_BLOQUE_CARDS_JUN2026.md` |
| TGP | `QUE_CONTIENE_V12` → Ampliaciones |
