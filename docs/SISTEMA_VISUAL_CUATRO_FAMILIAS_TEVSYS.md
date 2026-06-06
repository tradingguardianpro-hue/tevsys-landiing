# Sistema visual web tevsys — cuatro familias (jun 2026)

**Estado:** criterio acordado con fundador · **no** implica rediseño global inmediato.  
**Objetivo:** reducir “mix” sin empobrecer; cada zona tiene un **job** y un **tratamiento** reconocible.

---

## Por qué existe este doc

La web mezclaba demasiados lenguajes (cards home, stages cómo-funciona, guías grises, auditoría editorial). La sensación de visitante (“estudiante abajo”, “todo diferente”) era válida. Este documento fija **familias** para que futuras páginas y la IA no inventen un quinto estilo.

**Fuente de verdad operativa:** repo `tevsys-landiing`. Puntero en TGP: `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` (Ampliaciones).

---

## Las cuatro familias

### A — Producto / venta (home, micropáginas de producto)

**Dónde:** home (cards Precisión, HyperClose, SML, Evidencia), `/precision`, `/hyperclose`, `/sml`, `/evidencia`, sección planes.

**Job:** convencer con claims auditables, vídeo + prueba, CTA a demo/precios.

**Visual:**
- Cards con radio `clamp(0.85rem, 1.5vw, 1.15rem)`.
- Borde ámbar fino `rgba(245, 176, 65, 0.34)` + gradiente de superficie muy suave.
- Punto ámbar en hooks (`feature-hook__dot`).
- Referencia: `index.astro` → `.feature-card__*`.

**No copiar en:** guías operativas (demasiado marketing).

---

### B — Mapa / narrativa (cómo funciona)

**Dónde:** `/como-funciona`, microclips anclados.

**Job:** explicar el sistema en profundidad; la página más rica en motion y escena.

**Visual:**
- Stages, halos, embed chrome, barridos (motion acotado).
- Eyebrows y jerarquía tipográfica fuerte.
- Referencia: `docs/HANDOFF_COMO_FUNCIONA_MOTION_HEADER_1MAY2026.md`.

**No copiar en:** guías paso a paso (sobra escena).

---

### C — Guías operativas (instalación, configuración)

**Dónde:** `/instalacion`, `/configuracion`, `/configuracion-al-instalar`, `/configuracion-fin-de-semana`; enlaces desde mail demo (2.º y 3.º correo).

**Job:** llevar de cero a EA en gráfico; vídeo primero, lectura opcional mínima, fork al siguiente paso.

**Visual (plantilla `guia-*`):**
- Hero corto + eyebrow **ámbar** + caja WebRequest (duplicar en bloque MT5 cuando aplique).
- Vídeo protagonista: `guia-embed--chrome` + halo estático (sin stages).
- **Regla ámbar (v5):** ámbar solo en **hero + vídeo** (hook, WebRequest, halo, marco). Debajo = **neutro**.
- Bloques lectura: `guia-phase-card` — panel contenedor sutil + tarjetas en `--theme-surface-1`, borde gris claro, acento izquierdo plateado, badge número cuadrado redondeado; **sin** ámbar.
- Fork: filas neutras; **solo** `--primary` (Essential) con barra izquierda ámbar + fondo cálido suave.
- **Sin** CTA “¿Necesitas la demo?” en guías (el visitante ya viene del mail o usa footer).
- Referencia implementación: `src/pages/instalacion.astro` (v5 visual jun 2026).

**Regla:** todas las guías comparten **mismas clases**; solo cambia copy y vídeo.

---

### D — Editorial / futuro (auditoría IA)

**Dónde:** teaser home + `/auditoria-ia`.

**Job:** separar visualmente “lo que vendemos hoy” de “lo que estamos preparando” (verificación IA, roadmap).

**Visual:**
- Shell propio (`audit-teaser-shell`): tipografía editorial, menos “card producto”.
- **No** homogeneizar con A ni C; la diferencia es intencional.

**Referencia:** `index.astro` → `.audit-teaser-*`.

---

## Navegación sin buscador (decisión jun 2026)

**No** lupa global en header por ahora.

**Flujos reales:**
1. **Lead demo Essential:** mail → enlace directo `/instalacion` (no busca en web).
2. **Lead Advanced/Pro / licencia:** mail con **tres URLs** (`LINKS_PARA_ENVIAR_DEMO` § Guías web).
3. **Explorador en web:** header (Inicio, Cómo funciona, Precios, Contacto) + **footer** columna **Guías** (Instalar, Config Essential, Config Advanced/Pro, Fin de semana).
4. **Fork al final de cada guía:** siguiente paso según plan y día.

**Futuro (cuando haya mucho más contenido):** índice de atajos tipo “¿Qué buscas?” (4–5 chips) o buscador estático con índice Astro — **no prioridad** mientras el sitio sea < ~20 páginas útiles.

**Header:** mantener `BrandOval` (pastilla logo); no añadir badge extra salvo función clara.

---

## Orden de trabajo recomendado (web)

| Prioridad | Tarea | Familia |
|-----------|--------|---------|
| 1 | Pulir `/instalacion` bloques + fork (v4) | C |
| 2 | Replicar plantilla `guia-*` en `/configuracion-fin-de-semana` | C |
| 3 | Igual en `/configuracion-al-instalar` (vídeo 6.1b-ADV cuando exista) | C |
| 4 | Opcional: alinear `/configuracion` Essential | C |
| — | No tocar auditoría salvo copy | D |
| — | No homogeneizar cómo-funciona | B |
| — | Buscador global | aplazado |

---

## Checklist IA al tocar una página web

1. ¿Es A, B, C o D? Si no encaja, **preguntar** antes de inventar estilo.
2. Si es **C:** reutilizar clases `guia-*`; no importar estilos de stages.
3. Claims alineados con `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` (repo TGP o mirror en `tevsys-landiing/docs`).
4. Footer Guías coherente con `src/config/footer.js`.
5. Commit: prefijo `web(tevsys):`.

---

## Historial

| Fecha | Nota |
|-------|------|
| 6 jun 2026 | v5.2: título fuera del panel; panel + cards más claros; línea plateada superior. |
