# Sistema visual web tevsys — cuatro familias (jun 2026)

**Estado:** criterio acordado con fundador · **no** implica rediseño global inmediato.  
**Objetivo:** reducir “mix” sin empobrecer; cada zona tiene un **job** y un **tratamiento** reconocible.

---

## Por qué existe este doc

La web mezclaba demasiados lenguajes (cards home, stages cómo-funciona, guías grises, auditoría editorial). La sensación de visitante (“estudiante abajo”, “todo diferente”) era válida. Este documento fija **familias** para que futuras páginas y la IA no inventen un quinto estilo.

**Fuente de verdad operativa:** repo `tevsys-landiing`. Puntero en TGP: `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` (Ampliaciones).

---

## Tarjeta rápida (línea fija — jun 2026)

- **A — Producto** · Home cards + `/features/hyperclose`, `/precision`, `/sml`, `/evidencia` · **Job:** vídeo + mapa de pruebas + CTA demo · **Visual:** `--feature-micro-radius`; índice «Qué puedes comprobar» **cálido + halo**; bloques de prueba **carbón translúcido** (`--micro-detail-*`); demo hero `--micro-demo-*`; **sin** `--theme-surface-1` opaco.
- **B — Narrativa** · `/como-funciona` + microclips · **Job:** mapa del sistema, escena rica · **Visual:** stages, halos, motion — **no** copiar en guías ni micropáginas A.
- **C — Guías** · `/instalacion`, `/configuracion`, `/configuracion-al-instalar`, `/configuracion-fin-de-semana` · **Job:** instalar/configurar; vídeo primero, lectura opcional, fork · **Visual:** `guia-operativa.css` v5.6 — ámbar solo hero+vídeo; avisos cruce **debajo del embed**; sin CTA demo.
- **D — Editorial** · Teaser home + `/auditoria-ia` · **Job:** futuro / roadmap aparte del producto · **Visual:** shell editorial propio — **no** homogeneizar con A ni C.

**Orden de cierre acordado (jun 2026):** C ✅ → A (HyperClose → Precisión → SML → Evidencia) → footer → home cards aligeradas.

---

## Qué debe explicar cada familia (contenido, no solo visual)

Regla transversal: **claims alineados** con `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` (repo TGP). Nada prometido que el build o la evidencia no respalden.

### A — Producto

**Al visitante le debe quedar claro:**
- Qué hace **esta pieza** del sistema (HyperClose, precisión, SML, evidencia) en lenguaje verificable.
- **Cómo comprobarlo** — vídeo principal + índice «Qué puedes comprobar» + pruebas puntuales (capturas en acordeón si aportan).
- Dónde pedir **demo** o ver **precios** (CTA al final; no mezclar con guías paso a paso).

**No debe hacer:** manual largo repetido del hero; bloques grises apilados bajo cada vídeo; tono «curso» (eso es C).

### B — Narrativa

**Al visitante le debe quedar claro:**
- El **mapa completo** del producto: cómo encajan disciplina, límites, cierre, SML, evidencia.
- Por qué tevsys es **polivalente** (no solo «disciplina») sin humo comercial.

**No debe hacer:** parecer guía de instalación ni ficha Market compacta.

### C — Guías

**Al visitante le debe quedar claro:**
- **Qué hacer ahora** en MT5 (instalar, configurar entre semana o fin de semana, según plan).
- **WebRequest** y requisitos técnicos mínimos cuando aplique (instalación).
- **Siguiente paso** vía fork («Elige tu guía») — no buscador global.

**No debe hacer:** vender demo con CTA grande; ámbar en bloques de lectura; avisos de cruce entre guías en el hero (van **debajo del embed**).

### D — Editorial

**Al visitante le debe quedar claro:**
- Qué es **roadmap / futuro** (p. ej. auditoría IA) vs lo **disponible hoy**.
- Honestidad: preparación, no producto cerrado en ficha.

**No debe hacer:** homogeneizarse con cards de producto ni con guías grises.

---

## Estado de cierre (jun 2026)

| Familia | Estado | Notas |
|---------|--------|--------|
| **C — Guías** | **Cerrada** | Canon `instalacion.astro` v5.6 · CSS `guia-operativa.css` · cuatro URLs · copy lectura fin de semana revisado **7 jun** · vídeo C **2:01** en `/configuracion-fin-de-semana`. |
| **A — Producto** | **Familia A piel carbón cerrada (8 jun)** — HyperClose, Evidencia, Precisión, SML + home + footer micros | § Pasada carbón jun 2026. |
| **B — Narrativa** | **Pendiente definir** | `/como-funciona` estable; videoteca **4 huecos** (MC-CF-019 fuera); criterio microclip vs guía documentado en V12 + catálogo. |
| **D — Editorial** | **Estable** | Shell propio; solo copy cuando toque roadmap. |
| **Footer** | **Cerrado** | Estructura **7 jun** · home integrado **8 jun** (`--theme-bg` + fade) — § Footer + § Pasada carbón |
| **Home (cards + planes + cita fundador)** | **Cerrado** | Validado fundador **8 jun 2026** — § Pasada carbón jun 2026 |
| **Buscador global** | **Aplazado** | Mail + footer Guías + fork. |

**Archivos clave Familia C:** `src/styles/guia-operativa.css` · `src/pages/instalacion.astro` · `configuracion*.astro`.

**Archivos clave Familia A (HyperClose):** `src/pages/features/hyperclose.astro` · `src/styles/global.css` (`--feature-micro-radius`, `.feature-proof-detail--video-slim`).

---

## Las cuatro familias

### A — Producto / venta (home, micropáginas de producto)

**Dónde:** home (cards Precisión, HyperClose, SML, Evidencia), `/precision`, `/hyperclose`, `/sml`, `/evidencia`, sección planes.

**Job:** convencer con claims auditables, vídeo + prueba, CTA a demo/precios.

**Visual:**
- Cards con radio `clamp(0.85rem, 1.5vw, 1.15rem)` — token `--feature-micro-radius` en `.tevsys-feature-micro-surface`.
- **Superficie carbón translúcida (canon jun 2026)** — tokens en `global.css` → `.tevsys-feature-micro-surface`:
  - `--micro-detail-bg` / `--micro-detail-border` — bloques de prueba redondeados (informe, semáforo, capturas…). Matiz frío, **no** `--theme-surface-1` opaco.
  - `--micro-demo-bg` / `--micro-demo-border` — contenedor del **vídeo hero** al abrir la micro.
  - `--micro-close-bg` / `--micro-close-border` — cierre Familia A (solo donde aplique, p. ej. `#evidence-audit`); halo ámbar **solo** en ese cierre y en el índice «Qué puedes comprobar» — **no** en cada bloque intermedio.
- Bloque **índice** (`feature-proof`, «Qué puedes comprobar»): `rgba(255,255,255,0.03)` + **halo** derecho (único bloque intermedio con halo).
- Bloques **prueba** (`feature-proof-detail` sin `--video-slim`): `--micro-detail-bg`; esquinas redondeadas; padding `~1rem 1.1rem`.
- Secciones **solo separador** (`--video-slim`): reservado si hace falta un bloque sin caja; **por defecto** pruebas con vídeo = `feature-proof-detail` + `--micro-detail-bg` (p. ej. logs Evidencia, semáforo HyperClose).
- Hero vídeo: `--micro-demo-bg`; chrome del embed sin cambiar.
- CTA demo **solo** al final de la micropágina.

**Estado (8 jun 2026):**
- **Piel carbón cerrada:** HyperClose, Evidencia, Precisión, **SML**, home (microcards + plan cards + footer integrado).
- **Pendiente diseño (propuesta):** ~~bloque CTA final~~ **cerrado** — opción B separador ligero (`global.css`).
- **Contenido HyperClose:** capturas día OFF en terminal — copy/collage OK.

**Canon de referencia (jun 2026):** `/features/hyperclose` + `/features/evidencia` + **`/features/precision`**. **Siguiente clone:** `/features/sml`.

**SML — criterio web mientras validación EA (P12):**
- **Sí:** misma piel (radios, manifesto, índice «Qué puedes comprobar», tarjetas redondas, CTA); aviso **Advanced/Pro · validación en curso** visible; capturas actuales en `<details>` donde aplique.
- **No:** prometer catálogo completo de escenarios; hero vídeo hasta grabación; cambios en `SML_Manager.mqh` / EA.
- **Después de cerrar P12 en terminal:** vídeo(s) `--video-slim`, hooks ámbar con cifras validadas, copy alineado a handoff `SML_ZONA_SAGRADA_VALIDACION_HANDOFF.md`.

**Checklist Familia A (replicar en SML, Evidencia, HyperClose):**
1. Hero: título + hook + manifesto (si aplica).
2. Demo principal: **h2 + hook con cifra clave** + embed (`--micro-demo-bg`) + nota editada breve + acordeón evidencia.
3. Índice «Qué puedes comprobar» (`feature-proof`) — **cálido + halo** (único halo intermedio salvo cierre especial Evidencia).
4. Pruebas secundarias: `feature-proof-detail` con **`--micro-detail-bg`** (semáforo, capturas, informe…) · título + lead + vídeo/collage + `<details>` si aplica · **sin halo**.
5. Cierre opcional Familia A (Evidencia): `--micro-close-bg` + halo — **no** obligatorio en todas las micros.
6. CTA demo al final.
7. **Prohibido:** `--theme-surface-1` opaco / gris rancio neutro; halos en cada bloque; repetir el hero en párrafos largos.

**Hook demo HyperClose (canon copy):** `15 lotes · GER40 · límite −1 % · desviación 1,31 € · Apertura Wall Street · HyperClose en 3 niveles.` — cifra y «HyperClose en 3 niveles» en **ámbar** (`feature-title__accent`); encima del embed.

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
- Bloques lectura: lista **editorial** — separadores finos, número ámbar pequeño sin caja; **sin** panel gris ni doble marco (v5.3).
- Fork: tres filas **mismo tono**; ámbar solo en **labels** de plan (Essential / Advanced / Pro); hint «Elige tu guía:».
- **Sin** CTA “¿Necesitas la demo?” en guías (el visitante ya viene del mail o usa footer).
- Referencia implementación: `src/pages/instalacion.astro` · estilos compartidos `src/styles/guia-operativa.css`.

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

## Pasada carbón Familia A + home (8 jun 2026 — validada fundador)

**Objetivo:** eliminar gris opaco neutro (`--theme-surface-1`, `hsl(0,0%,6%)`) que “aplastaba” bloques y competía con la cita del fundador en home.

**Tokens globales** (`src/styles/global.css`, wrapper `.tevsys-feature-micro-surface`):

| Token | Uso |
|-------|-----|
| `--micro-detail-bg` / `--micro-detail-border` | Bloques prueba (informe, semáforo, logs, capturas…) |
| `--micro-demo-bg` / `--micro-demo-border` | Contenedor vídeo hero al abrir micro |
| `--micro-close-bg` / `--micro-close-border` | Cierre especial Familia A (solo `#evidence-audit` hoy) |

**Reglas visuales acordadas:**
- **Halo ámbar:** solo índice «Qué puedes comprobar» (`feature-proof`) + cierre `#evidence-audit` (estilo checklist).
- **Sin halo** en bloques intermedios (semáforo, logs, día OFF, etc.).
- Pruebas con vídeo = `feature-proof-detail` + carbón — **no** `--video-slim` gris salvo excepción documentada.
- Hero vídeo: `--micro-demo-bg`; sin sombra pesada ni `::before` que duplique losa (HyperClose).

**Por página (8 jun):**

| URL | Cambio | Estado piel |
|-----|--------|-------------|
| `/features/evidencia` | Wrapper `--evidencia`; logs en caja carbón; `#evidence-audit` `--familia-a-close` + halo | **Cerrada** |
| `/features/hyperclose` | Wrapper `--hyperclose`; semáforo + día OFF en cajas carbón; más aire vídeo OFF; halo solo checklist | **Cerrada** |
| `/` home microcards | `.tevsys-card__content` gradiente `hsl(222, 14%, 7%)` → `hsl(222, 12%, 5.5%)` | **Cerrada** |
| `/` plan cards | Mismo gradiente que microcards (fin `hsl(0,0%,6%)`) | **Cerrada** |
| `/` footer | `--theme-bg` + fade superior + inset ámbar suave | **Cerrada** |
| `/features/*` footer | Mismo tratamiento que home (Familia A) | **Cerrada** 8 jun |
| `/features/precision` | Volatilidad, Nasdaq, logs y cuenta pequeña en cajas carbón; hero `--micro-demo-bg`; halo solo checklist | **Cerrada** 8 jun |
| `/features/sml` | Hero panel `--micro-demo-bg`; bloques prueba carbón; tarjetas captura vía global | **Cerrada** 8 jun |

**Home + micropáginas Familia A — cita / transición al pie (criterio fundador 8 jun):**
- Antes: footer en `--theme-surface-1` (losa gris) **absorbía** protagonismo del contenido superior y competía con la cita en home.
- Ahora: `--theme-bg` + fade — la **cita respira** en home; en micros el pie **continúa el fondo de página** sin bloque gris aparte.
- El footer **sigue siendo claramente footer** (columnas Guías / Producto / Legal).

**Archivos tocados:** `global.css` · `evidencia.astro` · `hyperclose.astro` · `index.astro` · `Footer.astro` / `Page.astro` (home).

**Commits sugeridos (orden):** `web(tevsys): unifica tono carbón translúcido micros y cards home` · `web(tevsys): evidencia logs caja carbon` · `web(tevsys): hyperclose familia-a carbon semaforo y aire video off` · `web(tevsys): home plan cards carbon y footer theme-bg integrado` · `docs: canon carbon familia A SISTEMA_VISUAL + V12`.

---

## CTA final micropáginas — **cerrado opción B** (8 jun 2026)

**Bloque:** `.feature-cta` — separador ligero antes del footer integrado.

**Implementado:** sin caja (`--theme-surface-1` eliminado); solo **línea superior** + padding vertical + botón ámbar. Regla global en `global.css` → `.tevsys-feature-micro-surface .feature-cta` (cuatro micros).

**Histórico — opciones descartadas:** A todo carbón · C carbón+ámbar · D cierre Evidencia · E surface-1 (ver changelog jun 2026).

---

## Footer — **CERRADO** (7 jun estructura · 8 jun home)

**Estado:** validado por fundador; **listo por el momento**. Integración `--theme-bg` en **home + micropáginas Familia A** (8 jun) — ver § Pasada carbón.

**Job:** mapa Guías + Producto + Legal + contacto. Nav principal **solo header** (sin franja ámbar duplicada).

**Estructura final:**
1. Grid contacto: **tevsys · mail · Barcelona** (móvil apilado).
2. **Línea única** bajo contacto.
3. Tres columnas — títulos alineados con icono/logo (cuadrícula 18 px / 24 px + guion ámbar).
4. Guías: subgrupos + labels cortos Adv/Pro (`Config · al instalar` / `Config · en fin de semana`).
5. **Made with love…** — separación antes del copyright.

**Archivos:** `Footer.astro` · `footer.js` · `Page.astro` · changelog `docs/CHANGELOG-TEVSYS.md`.

---

## Footer — implementado (7 jun 2026) — histórico intermedio

**Nota:** ver sección **Footer — CERRADO** arriba para estado actual.

**Job:** mapa Guías + Producto + Legal + contacto. Nav principal **solo header** (sin franja ámbar duplicada).

**Estructura:**
1. Fila compacta: **tevsys · mail · Barcelona** (horizontal; móvil en columna).
2. Tres columnas con **más gap** y divisores gris fino (no ámbar).
3. Guías Adv/Pro: labels cortos (`Config · al instalar` / `Config · en fin de semana`).
4. **Made with love…** — mismo tamaño; **más aire** (borde superior + padding) antes del copyright.

**Archivos:** `Footer.astro` · `footer.js` · `Page.astro`.

---

## Footer — diagnóstico histórico (jun 2026, pre-rediseño)

**Job:** mapa para quien llega sin mail (Guías + Producto + Legal) y refuerzo de contacto. **No** es Familia A/B/C/D; es **capa global** del layout.

**Por qué pesa visualmente (captura fundador):**
- Tres pisos apilados: marca + contacto → **barra nav con gradiente ámbar** → tres columnas → frase independiente grande → copyright.
- **Doble navegación** respecto al header (Inicio, Cómo funciona, Precios, Contacto).
- Títulos largos en Guías Advanced/Pro ocupan mucho ancho.
- La frase «Made with love…» a ~1,08 rem compite con el contenido de arriba.

**Qué mantener (funcional):**
- Columna **Guías** (embudo demo / mail).
- Columna **Producto** (micropáginas).
- **Legal** obligatorio.
- Email visible.

**Opciones acordables (sin perder información):**
1. **Aligerar barra nav inferior:** quitar gradiente/borde ámbar; enlaces más pequeños o fusionar con columnas (Precios/Empresas solo en header).
2. **Acortar labels Guías:** p. ej. «Config · entre semana (Adv/Pro)» / «Config · fin de semana (Adv/Pro)» — misma URL, menos ruido.
3. **Frase independiente:** bajar tamaño y opacidad; una sola línea.
4. **Espaciado vertical:** menos padding entre pisos en páginas largas (micropáginas).

**Decisión:** aplazada a sesión footer dedicada — **no implementar jun 2026 (noche).**

**Opinión IA (validada con criterio fundador):** el footer **cumple su job** (Guías + Producto + Legal + contacto); el problema es **peso visual**, no exceso de enlaces. **Sí conviene aligerar** en la próxima sesión; **no conviene vaciar** columnas ni quitar email. Prioridad sugerida al tocar: (1) barra nav inferior sin gradiente ámbar, (2) acortar títulos Guías Adv/Pro, (3) frase independiente más pequeña. Mantener header como nav principal.

**Implementación:** `Footer.astro` + `footer.js` — una pasada, sin mezclar con micropáginas.

---

## Próxima sesión — handoff micropáginas Familia A (jun 2026)

**HyperClose + Precisión:** **cerradas** (fundador 7 jun). HyperClose: día OFF copy+acordeón OK; **capturas/collage OFF pendiente** (terminal entre semana).

**SML:** **Fase 1 cerrada** (fundador 7 jun). **En curso:** **`/features/evidencia`** — Familia A (hook hero, radios, `--video-slim` logs, copy ámbar).

**Referencia:** checklist § Familia A + `hyperclose.astro` + `precision.astro` + `sml.astro`.

**Familia B** (`/como-funciona`): sesión aparte. **Familia D:** sin tocar salvo copy roadmap.

---

## Pendiente evidencia — HyperClose día OFF (jun 2026)

**Estado:** copy y acordeón alineados al **tono semáforo** (7 jun); **capturas y collage pendientes** — sesión terminal entre semana.

**Cuándo:** fundador programa tevsys con **día OFF**, intenta operar y regraba cada escenario.

**Dónde hoy:** `/features/hyperclose` → `#hyperclose-off` → vídeo rotación + acordeón **«Capturas de los escenarios día OFF»** (sin «5» en el label).

**Objetivo (mismo criterio que semáforo):**
- **Collage** composito modal+panel visible (como CAP-06b en `#hyperclose-semaphore`) — **pendiente** crear y colgar.
- **Galería** en acordeón: mismas escenas pero **capturas actualizadas** composito modal+panel (sustituir `hyperclose-dias-off-modal-00` … `-03` + panel).
- **Vídeo** actual se **mantiene**; copy intro ya alineado.

**Semáforo:** **cerrado** (collage + copy + dos enlaces vídeo).

**Fuentes:** comentario HTML en `hyperclose.astro` · `ARTICULO_MQL5_*` §4.3 · assets `public/images/evidence/hyperclose-dias-off-*`.

**Tareas al abordar:**
1. Terminal: día OFF + bloquear + intentos operar → capturas composito.
2. Collage día OFF (ref. Market / semáforo web).
3. Sustituir PNG + webp; validar acordeón en deploy.

---

## Pendiente evidencia — HyperClose día OFF (después del footer, jun 2026) — **supersedido**

<details>
<summary>Texto histórico (pre 7 jun)</summary>

**Cuándo:** sesión **Familia A** (micropáginas) **después** de aligerar footer — no mezclar con guías C.

**Dónde hoy:** `/features/hyperclose` → sección **Rotación automática y día OFF** → acordeón «5 escenarios día OFF» (`hyperclose-dias-off-modal-00` … `-03` + panel protegido).

</details>

## Orden de trabajo recomendado (web)

| Prioridad | Tarea | Familia | Estado |
|-----------|--------|---------|--------|
| 1 | Canon `/instalacion` + replicar en resto guías | C | **Cerrado** v5.6 |
| 2 | Avisos cruce guías debajo del embed | C | **Hecho** jun 2026 |
| 3 | ~~HyperClose aligerado~~ | A | **Cerrado** 7 jun 2026 |
| 4 | ~~Footer aligerado~~ | — | **Cerrado** 7 jun 2026 |
| 5 | HyperClose capturas día OFF + collage | A | Copy OK · **capturas pendiente** terminal |
| 6 | ~~**Precisión** — piel carbón~~ | A | **Cerrado** 8 jun |
| 7 | ~~**SML** — piel carbón~~ | A | **Cerrado** 8 jun |
| 7b | ~~**CTA final** micropáginas~~ | A | **Cerrado** 8 jun — opción **B** separador ligero |
| 8 | ~~Evidencia piel carbón~~ | A | **Cerrado** 8 jun |
| 9 | ~~Cards home + planes + footer home~~ | A | **Cerrado** 8 jun |
| — | No tocar auditoría salvo copy | D | Estable |
| — | No homogeneizar cómo-funciona | B | Estable |
| — | Buscador global | — | Aplazado |
| — | **Siguiente web:** capturas HyperClose día OFF | A | Tras footer cerrado |

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
| 8 jun 2026 | **Precisión piel carbón cerrada** — volatilidad, Nasdaq, logs y cuenta pequeña en cajas; hero sin ::before; halo solo checklist. |
| 8 jun 2026 | **Pasada carbón Familia A + home cerrada** — HyperClose, Evidencia, microcards, plan cards, footer home integrado; cita fundador recupera protagonismo; **siguiente:** SML piel. |
| 7 jun 2026 | **HyperClose semáforo cerrado**; día OFF mismo tono + acordeón sin «5»; collage/capturas OFF **pendiente** terminal. |
| 7 jun 2026 | **HyperClose semáforo:** collage CAP-06b HECHO visible bajo vídeo (3→2→1 + panel). |
| 7 jun 2026 | **Footer cerrado** — validado fundador; alineación grid; build fix; changelog + V12. |
| 7 jun 2026 | **`/como-funciona`:** MC-CF-019 fuera de microclips; videoteca 4 huecos; título bloque sin cambio. |
| 7 jun 2026 | **Guía fin de semana:** títulos unificados · copy lectura · espaciado hero→vídeo · bloque PROGRAMADO·LUNES. |
| 7 jun 2026 | **Guía fin de semana — bloques lectura:** lunes a viernes; finde = configuración/reprogramar; lunes 00:00 = protección (no «bloqueado hasta guardar»). |
| 6 jun 2026 | **Familia A validada:** checklist canon + hook 1,31 € en demo HyperClose; footer diagnóstico pendiente. |
| 6 jun 2026 | **Familia A — criterio documentado:** HyperClose = canon de referencia antes de clonar micropáginas. |
| 6 jun 2026 | **Familia A — HyperClose:** `--video-slim`; semáforo y día OFF sin losa gris; capturas en `<details>`. |
| 6 jun 2026 | **Familia C — avisos cruce** (finde ↔ entre semana) debajo del embed en las tres guías de config. |
| 6 jun 2026 | **Familia C cerrada** — canon `/instalacion` v5.6; `guia-operativa.css` en las cuatro guías. |
| 6 jun 2026 | v5.3 instalación: apoyo al vídeo editorial sin cajas grises. Familia A: `--feature-micro-radius` en bloques sin vídeo. |
| 6 jun 2026 | Doc inicial + tarjeta rápida A/B/C/D; navegación sin buscador. |
