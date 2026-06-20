# Handoff — Home bloque hero → cards (cohesión visual · jun 2026)

**Última actualización:** 21 jun 2026  
**Archivo vivo:** `src/pages/index.astro`  
**Hero (no tocado en esta pasada):** `src/components/sections/heros/HomeHeroSection.astro` — esquema **2m-E** · ver `HANDOFF_HOME_HERO_ESQUEMAS.md`  
**Método de trabajo:** repo TGP → `.cursor/rules/workflow-web-visual-tevsys.mdc` (un paso a la vez, validación fundador entre puntos)

---

## Contexto y problema

Tras cerrar el **hero 2m-E** (DM Sans + IBM Plex Mono en capas, motion pilares), el scroll a la **sección de valor** (H2 + checklist + 4 cards) cambiaba de **registro visual**: Inter editorial, caja ámbar, salto brusco hero → argumento.

**Objetivo:** unir identidad **sin rehacer la home** — pegamentos visuales + un acento de marca + copy más directo.

**Nota:** el contraste hero/abajo lo planteamos **equipo interno** (no feedback externo de terceros).

---

## Estado actual (validado fundador · jun 2026)

Orden de scroll:

1. **Hero stack** — sin cambios de motion/KITT en esta iteración.
2. **Puente** — `.tevsys-home-hero-bridge`: hairline + `Precisión · HyperClose · SML · Evidencia` en **IBM Plex Mono**.
3. **H2** — `¿Has perdido dinero por no parar a tiempo — y por deslizamiento al límite?`
4. **Checklist** — `.feature-card__checklist-static`: losa **carbón** (`hsl(222,…)`) alineada a `.tevsys-card__content`; borde fino blanco + toque ámbar mínimo (no marco ámbar grueso anterior).
5. **Hook en caja** — copy + **Nosotros sí.** con `.tevsys-brand-accent-underline` (subrayado ámbar→gris, familia `/como-funciona`; raya **más larga** que el texto, sobresale a la derecha del *sí*).
6. **Viñetas** — doble trazabilidad + configuras una vez (sin cambio de texto).
7. **Remate** — `Ellos deslizan. En tevsys cerramos.` (sin subrayado; no compite con *Nosotros sí.*).
8. **Grid 4 cards** — títulos **Inter bold** (prueba mono revertida jun 2026); cuerpo Inter; operativas frase completa Inter.
9. **Auditoría IA** — kicker en mono (punto 3).
10. **Planes** — pastillas *Demo activa* / *Lista de espera* en mono (punto 3).

## Cambios por punto (decisiones)

### Punto 1 — Puente bajo hero

| Qué | Por qué |
|-----|--------|
| Línea mono + hairline entre hero y H2 | Evita salto “cine → folleto”; enlaza capas animadas con el grid de producto |
| Clases `tevsys-home-hero-bridge` | Solo en `index.astro`; no toca `HomeHeroSection.astro` |

### Punto 2 — Checklist carbón

| Qué | Por qué |
|-----|--------|
| Mismo gradiente carbón que cards | Misma “materia” en el bloque explicativo |
| **Toque B descartado** (cajita más clara + glow) | Fundador: le gusta el tono actual; no acumular cambios; reapertura opcional si el grid se siente plano |

### Copy + acento — H2 y *Nosotros sí.*

| Decisión | Motivo |
|----------|--------|
| H2: *¿Has perdido **dinero**…?* (sin *cuánto*) | Personal y claro; evita sensación “calculadora”; mantiene deslizamiento al límite |
| Subrayado solo en **Nosotros sí.** | Punchline dentro de la caja; ojo: titular → remate → viñetas |
| **No** subrayar *En tevsys cerramos.* | Dos acentos seguidos compiten |
| Subrayado `.tevsys-brand-accent-underline` | Reutiliza filosofía `.how-present-title__accent` (`como-funciona.astro`); **no** clonar capítulo «De cero a protegido» con barrido animado en home |

**Copy checklist (vivo):**

- H2: `¿Has perdido dinero por no parar a tiempo — y por deslizamiento al límite?`
- Hook: `Sin excusas. Las buenas intenciones no cierran con alta precisión ni bloquean operaciones. Nosotros sí.`

### Punto 3 — Etiquetas mono (`.tevsys-meta-label`)

| Dónde | Qué |
|-------|-----|
| Card Precisión | ~~`{N} operativas documentadas` en mono~~ **revertido** — frase entera Inter (jun 2026: mitad mono parecía error) |
| Títulos 4 cards (`h3`) | **Inter bold** (jun 2026) — prueba mono **revertida** (demasiadas voces vs bloque editorial arriba) |
| `.audit-teaser-kicker` | `Verificación con IA · próximamente` — mono, sin `text-transform: uppercase` |
| `.plan-card__status` | *Demo activa* / *Lista de espera* — mono dentro de pastillas (colores intactos) |

**Por qué:** extender IBM Plex Mono solo a **metadatos**, no a párrafos — coherencia con hero/puente sin “página técnica”.

---

## Clases CSS nuevas (referencia)

```text
.tevsys-home-hero-bridge / __text
.tevsys-brand-accent-underline
.tevsys-meta-label
```

---

## Qué NO se tocó

- Motion KITT / `tevsys-home-mid-glow` (salvo iteración móvil cards previa)
- `HomeHeroSection.astro` timing 2m-E
- Textos e imágenes de las 4 feature cards (salvo span mono en línea operativas)
- Bloque fundador, CTAs planes, lógica checkout

---

## Pendiente / opcional

- **Toque B** checklist más claro — aparcado; reabrir solo con OK fundador
- Más aire `hero-platform-note` → puente (histórico en `HANDOFF_HOME_HERO_ESQUEMAS.md`)
- Extender mono a títulos grid — **probado y revertido** (jun 2026): demasiadas voces; mono queda en puente + labels pequeños
- **Meet / terceros:** ruta web corta hero → card Evidencia → auditoría — `docs/GUION_LLAMADA_AXIOM_LABS_JUAN_MEET.md` (repo TGP)

---

## Commits sugeridos (línea deploy)

Uno consolidado o varios:

```text
web(tevsys): frase puente hero a bloque cards en home
web(tevsys): checklist carbon y titular home Has perdido dinero
web(tevsys): subrayado Nosotros si familia como-funciona
web(tevsys): labels mono home auditoria planes operativas
```

O paquete: `web(tevsys): cohesión home puente checklist copy y labels mono`

---

## Espejos documentación

| Repo | Archivo |
|------|---------|
| Web | `docs/CHANGELOG-TEVSYS.md` (entrada jun 2026) |
| Web | `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` § Sección principal de valor |
| TGP | `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → Ampliaciones |
| TGP | `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` § 3 |
| TGP | `.cursor/rules/workflow-web-visual-tevsys.mdc` |
