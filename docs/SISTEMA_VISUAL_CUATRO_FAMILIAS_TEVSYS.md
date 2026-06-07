# Sistema visual web tevsys — cuatro familias (jun 2026)

**Estado:** criterio acordado con fundador · **no** implica rediseño global inmediato.  
**Objetivo:** reducir “mix” sin empobrecer; cada zona tiene un **job** y un **tratamiento** reconocible.

---

## Por qué existe este doc

La web mezclaba demasiados lenguajes (cards home, stages cómo-funciona, guías grises, auditoría editorial). La sensación de visitante (“estudiante abajo”, “todo diferente”) era válida. Este documento fija **familias** para que futuras páginas y la IA no inventen un quinto estilo.

**Fuente de verdad operativa:** repo `tevsys-landiing`. Puntero en TGP: `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` (Ampliaciones).

---

## Tarjeta rápida (línea fija — jun 2026)

- **A — Producto** · Home cards + `/features/hyperclose`, `/precision`, `/sml`, `/evidencia` · **Job:** vídeo + mapa de pruebas + CTA demo · **Visual:** `--feature-micro-radius`; bloque índice gris redondeado; secciones vídeo **sin losa** (`--video-slim`); poco texto bajo el embed.
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
| **C — Guías** | **Cerrada** | Canon `instalacion.astro` v5.6 · CSS compartido `guia-operativa.css` · cuatro URLs alineadas · avisos cruce debajo del vídeo · sin CTA demo · copy lectura = borrador (revisión fundador pendiente). |
| **A — Producto** | **Cerrada (canon HyperClose)** | Validado jun 2026 — fundador. Replicar checklist en Precisión, SML, Evidencia · cards home. |
| **B — Narrativa** | **Pendiente definir** | `/como-funciona` estable en producción; falta **documentar criterio** como C y A (motion, stages — no copiar en guías). |
| **D — Editorial** | **Estable** | Shell propio; solo copy cuando toque roadmap. |
| **Footer** | **Hecho** | Rediseño 7 jun 2026 — § Footer implementado |
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
- Bloques **sin vídeo** (`feature-proof`, índice «Qué puedes comprobar»): esquinas redondeadas; padding `~1rem 1.1rem`.
- Secciones **con vídeo secundario:** clase `feature-proof-detail--video-slim` — **sin losa gris**; separador superior fino; **mismo aire lateral** que el índice (`clamp(1rem, 3vw, 1.5rem)`); título + una línea + vídeo + capturas en `<details>`.
- Hero vídeo: mantiene chrome propio; no apilar manual sobre manual.
- CTA demo **solo** al final de la micropágina.

**Canon de referencia (jun 2026):** `/features/hyperclose` — micropágina donde se cierra el criterio A (visual + contenido hero).

**Checklist Familia A (replicar en Precisión, SML, Evidencia):**
1. Hero: título + hook + manifesto (si aplica).
2. Demo principal: **h2 + hook con cifra clave** (número visible encima del vídeo) + embed + nota editada breve + acordeón evidencia.
3. Índice «Qué puedes comprobar» (bloque gris redondeado).
4. Pruebas secundarias: `--video-slim` (título · una línea · vídeo · `<details>` capturas).
5. CTA demo al final.
6. **Sin** losas grises bajo cada vídeo secundario; **sin** repetir el hero en párrafos largos.

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

## Footer — implementado (7 jun 2026)

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

**Familia A:** **cerrada** en criterio (canon `/features/hyperclose`). CSS compartido ya en `global.css` (`--feature-micro-radius`, `--video-slim`).

**Recomendación acordada — ir una por una, no expandido masivo hoy:**
- Cada micropágina tiene **estructura distinta** (Precisión = Nasdaq + stats; SML = paneles propios; Evidencia = muchos bloques informe/logs). Un batch ciego arriesga romper contenido único.
- Flujo: **clonar checklist A** → deploy → **captura + OK fundador** → siguiente.
- **Orden sugerido:** 1) **Footer** · 2) **Capturas HyperClose** día OFF (+ valorar semáforo 3 niveles; composito modal+panel, ref. Market) · 3) **Precisión** → SML → Evidencia (checklist A) · 4) cards home.
- **Familia B** (`/como-funciona`): sesión aparte — documentar criterio, no mezclar con A.
- **Familia D / futuro:** sin tocar salvo copy roadmap.

**Referencia obligatoria al abrir cada micro:** checklist § Familia A en este doc + `hyperclose.astro`.

---

## Pendiente evidencia — HyperClose día OFF (después del footer, jun 2026)

**Cuándo:** sesión **Familia A** (micropáginas) **después** de aligerar footer — no mezclar con guías C.

**Dónde hoy:** `/features/hyperclose` → sección **Rotación automática y día OFF** → acordeón «5 escenarios día OFF» (`hyperclose-dias-off-modal-00` … `-03` + panel protegido).

**Problema / oportunidad:**
- Capturas actuales pueden no seguir el criterio **modal + panel al lado** (composito legible), como la buena pieza del **artículo MQL5 Market** (tres semáforos + panel en una captura, explicados).
- Objetivo web: **una captura diferenciada por escenario**, cada modal **junto al panel** (no solo modal aislado si confunde).
- Revisar también galería **semáforo responsabilidad** (3 niveles bloqueo) — mismo criterio si aplica.

**Fuentes de referencia:**
- `docs/ARTICULO_MQL5_SELLER_TEVSYS_DEFINITIVO.md` §4.3 (modal + semáforo; composición Market).
- `docs/ARTICULO_MQL5_PORTAL_REVISION_POR_TRAMOS_MAY2026.md` §6 inventario capturas (`art-v2-03-*`).
- Assets actuales: `public/images/evidence/hyperclose-dias-off-*` · `hyperclose-modal-0*`.

**Tareas al abordar:**
1. Inventariar qué captura sirve tal cual vs hay que rehacer (composito panel+modal).
2. Sustituir imágenes + webp; ajustar copy `proof-gallery__desc` si hace falta.
3. Validar en deploy con fundador (misma pasada que checklist A).

---

## Orden de trabajo recomendado (web)

| Prioridad | Tarea | Familia | Estado |
|-----------|--------|---------|--------|
| 1 | Canon `/instalacion` + replicar en resto guías | C | **Cerrado** v5.6 |
| 2 | Avisos cruce guías debajo del embed | C | **Hecho** jun 2026 |
| 3 | ~~HyperClose aligerado~~ | A | **Cerrado** — canon jun 2026 |
| 4 | ~~Footer aligerado~~ | — | **Hecho** 7 jun 2026 |
| 5 | **HyperClose — capturas día OFF (+ semáforo)** modal+panel | A | **Después footer** — § Pendiente evidencia HyperClose |
| 6 | Precisión (checklist A + hook cifra) | A | Pendiente |
| 7 | SML | A | Pendiente |
| 8 | Evidencia | A | Pendiente |
| 9 | Cards home aligeradas | A | Tras micropáginas |
| — | No tocar auditoría salvo copy | D | Estable |
| — | No homogeneizar cómo-funciona | B | Estable |
| — | Buscador global | — | Aplazado |

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
| 7 jun 2026 | **Guía fin de semana — bloques lectura:** lunes a viernes (sin L–V); finde = configuración/reprogramar; lunes 00:00 = protección (no «bloqueado hasta guardar»). |
| 6 jun 2026 | **Familia A validada:** checklist canon + hook 1,31 € en demo HyperClose; footer diagnóstico pendiente. |
| 6 jun 2026 | **Familia A — criterio documentado:** HyperClose = canon de referencia antes de clonar micropáginas. |
| 6 jun 2026 | **Familia A — HyperClose:** `--video-slim`; semáforo y día OFF sin losa gris; capturas en `<details>`. |
| 6 jun 2026 | **Familia C — avisos cruce** (finde ↔ entre semana) debajo del embed en las tres guías de config. |
| 6 jun 2026 | **Familia C cerrada** — canon `/instalacion` v5.6; `guia-operativa.css` en las cuatro guías. |
| 6 jun 2026 | v5.3 instalación: apoyo al vídeo editorial sin cajas grises. Familia A: `--feature-micro-radius` en bloques sin vídeo. |
| 6 jun 2026 | Doc inicial + tarjeta rápida A/B/C/D; navegación sin buscador. |
