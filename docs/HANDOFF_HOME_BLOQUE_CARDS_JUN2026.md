# Handoff — Home + cierre visual (cohesión jun 2026)

**Última actualización:** 21 jun 2026 (noche — footer copyright mono)  
**Archivos vivos:** `src/pages/index.astro` · `src/components/core/Footer.astro`  
**Hero (sin cambios motion):** `HomeHeroSection.astro` — esquema **2m-E** · `HANDOFF_HOME_HERO_ESQUEMAS.md`  
**Método:** repo TGP → `.cursor/rules/workflow-web-visual-tevsys.mdc`

---

## Contexto

Tras cerrar el **hero 2m-E**, el scroll a valor + cards + pie cambiaba de registro visual. Objetivo: **pegamentos + acento de marca + mono solo en metadatos**, sin rehacer la home.

**Nota:** contraste hero/abajo = criterio **equipo interno** (no feedback externo de terceros).

---

## Estado actual — home (validado fundador)

1. **Hero** — motion/KITT intactos (2m-E).
2. **Puente** — `.tevsys-home-hero-bridge`: hairline + `Precisión · HyperClose · SML · Evidencia` (IBM Plex Mono).
3. **H2** — `¿Has perdido dinero por no parar a tiempo — y por deslizamiento al límite?`
4. **Checklist carbón** — `.feature-card__checklist-static`; **toque B** (cajita más clara) **aparcado**.
5. ***Nosotros sí.*** — `.tevsys-brand-accent-underline` (3px, ámbar→gris; raya sobresale del *sí*).
6. **Remate** — `Ellos deslizan. En tevsys cerramos.` — IBM Plex Mono; punto ámbar; sin subrayado.
7. **Grid 4 cards** — títulos **Inter bold** blanco; subrayado fino **2px** (`.tevsys-card__title--accent-line`):
   - **short** 3.25rem: HyperClose, SML
   - **long** 4rem: Precisión (*error medio*), Evidencia (*verificable*)
   - Offset distinto por card; prueba mono en títulos **revertida**; prueba gris títulos **revertida**.
   - Prueba mono en hooks cards **revertida** (jun 2026).
   - **Opción A respiración (jun 2026):** más aire checklist→grid; padding interno cards; cuerpo más suave; hook mantiene peso. Revertible.
8. **Auditoría IA** — kicker mono.
9. **Planes** — pastillas *Demo activa* / *Lista de espera* en mono.
10. **Fundador** — firma `— Gabi, fundador de tevsys` en IBM Plex Mono.

---

## Estado actual — footer (prueba jun 2026, revertible)

| Elemento | Tipografía | Copy |
|----------|------------|------|
| Fila contacto | **IBM Plex Mono** en texto | `info@tevsys.io` · `Barcelona (España)` (no *Spain*) |
| Columnas enlaces | Inter (sin cambio) | Guías, producto, legal |
| Made with love… | Inter (sin cambio) | frase independiente |
| **Copyright** | **IBM Plex Mono** (prueba) | `Copyright © {año} tevsys. Todos los derechos reservados.` |

**Archivo:** `src/components/core/Footer.astro` — clases `.footer-contact__item span`, `.footer-copyright`.

---

## Decisiones clave (revertidas vs cerradas)

| Tema | Decisión |
|------|----------|
| Toque B checklist más claro | Aparcado — tono carbón OK |
| Mono en títulos 4 cards | **Revertido** — demasiadas voces |
| Gris en títulos cards | **Revertido** — otro tono de gris competía con arte |
| Subrayado fino en títulos cards | **Cerrado** — familia `/como-funciona` |
| Operativas en card Precisión | Frase entera **Inter** (split mono revertido) |
| Footer mono | Contacto + copyright — **prueba**; revertir si no convence |

---

## Clases CSS (referencia)

```text
.tevsys-home-hero-bridge / __text
.tevsys-brand-accent-underline
.tevsys-meta-label
.tevsys-card__title--accent-line / --short / --long
.founder-signature
.footer-contact__item span
.footer-copyright
```

---

## Qué NO se tocó

- Motion KITT / hero 2m-E
- Copy e imágenes de las 4 feature cards (salvo estilos título/subrayado)
- CTAs planes / checkout
- Claim + blockquote fundador (solo firma)
- Enlaces del footer (columnas)

---

## Commits sugeridos

Paquete recomendado:

```text
web(tevsys): cohesión home jun 2026 puente checklist cards fundador footer
```

O granular si prefieres historial fino (ver commits parciales en CHANGELOG § Home jun 2026).

---

## Espejos

| Repo | Archivo |
|------|---------|
| Web | `CHANGELOG-TEVSYS.md` § Home jun 2026 |
| Web | `CONTENIDO_WEB_TEVSYS_LANDING.md` § valor + fundador + footer |
| TGP | `HANDOFF_HOME_BLOQUE_CARDS_JUN2026.md` (espejo) |
| TGP | `QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → Ampliaciones |
| TGP | `workflow-web-visual-tevsys.mdc` |
