# Changelog tevsys — Estado actual (actualizado)

Registro completo de cambios aplicados en la landing de tevsys (base Odyssey Theme + Astro).

---

## 1) Brand, Header y navegación

### `src/components/BrandOval.astro`
- Eliminada la estrella del logo.
- Se mantiene solo `tevsys` en óvalo.

### `src/config/nav.js`
- Menú principal: `Inicio` | `Acceso` | `Contacto`.
- `Acceso` se dejó como CTA destacado (`asButton: true`).

### `src/components/core/Header.astro`
- Estilos del CTA de navegación (`.nav-link--button`) en blanco, redondeado.

---

## 2) Hero (home)

### `src/components/sections/heros/HomeHeroSection.astro`
- H1 con fuente Outfit: **"Tu capital merece más que buenas intenciones"**.
- Tagline con punto amarillo ampliado a `32px`.
- Texto `Trading Edge Verification System` movido debajo de la imagen, alineado a la izquierda.
- Botón `Descargar demo →` en amarillo (`#f5b041`) con hover `#f7c050`.
- Grid del hero ajustado para dar más protagonismo a la imagen: `1fr 1.5fr`.

---

## 3) Home: cards de valor (4 cards)

### `src/pages/index.astro`
Se pasó de 3 a 4 cards en layout `2x2`, con copy actualizado.

#### Card 1 — `0,06% error promedio`
- Hook: `El mercado no perdona. Nosotros tampoco.`
- Texto actualizado a **50 operativas documentadas**.
- Imagen: `/assets/images/home/cards/card-1-input.png`

#### Card 2 — `HyperClose`
- Hook mantenido: `Nadie te enseña a parar. Aprendes cuando ya es tarde.`
- Imagen: `/assets/images/home/cards/card-2-hyperclose.png`

#### Card 3 — `SML — Smart Money Lock`
- Hook final: `No es obligatorio. Es una recompensa.`
- Incluye frase de configuración opcional: porcentaje entre `5%` y `25%`.
- Imagen: `/assets/images/home/cards/card-3-sml.png`

#### Card 4 — `Evidencia verificable`
- Hook: `No confíes. Comprueba.`
- Imagen: `/assets/images/home/cards/card-4-evidencia.png`

---

## 4) Nueva sección template: Planes

### `src/pages/index.astro`
Añadida sección **`Elige tu cuenta`** antes del bloque del fundador.

- 3 planes: `Essential`, `Advanced`, `Pro`.
- Cada plan tiene CTA directo a contacto con query param:
  - `/company/contact?plan=essential`
  - `/company/contact?plan=advanced`
  - `/company/contact?plan=pro`
- Cards de planes actualizadas con imágenes finales:
  - `/assets/images/plans/essential-card.png`
  - `/assets/images/plans/advanced-card.png`
  - `/assets/images/plans/pro-card.png`

---

## 5) Fundador y footer

- Se mantiene bloque fundador tal cual (claim + cita + firma).
- Se mantiene footer existente.

---

## 6) Configuración/estilo global relevante

- `BaseHead.astro`: Outfit cargada desde Google Fonts.
- `settings.js`: `enableThemeSwitcher: false`, `showPlug: false`.
- Tema por defecto dark (`data-theme="dark"`).

---

## 7) Archivos principales tocados

- `src/components/BrandOval.astro`
- `src/config/nav.js`
- `src/components/core/Header.astro`
- `src/components/sections/heros/HomeHeroSection.astro`
- `src/pages/index.astro`
- `docs/CHANGELOG-TEVSYS.md`
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`
- `docs/ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`
- `docs/CARDS-NEXT-PHASE.md`

---

## 8) Pendiente de decisión (equipo)

1. En sección de planes, decidir estilo visual final:
   - mantener mano robótica en 3 planes, o
   - pasar a visual más abstracto para evitar repetición con hero.
2. (Resuelto) `plan` en URL se lee en cliente para evitar inconsistencias de render estático.
3. Añadir página `manual` y link en footer.

---

## 9) Ajuste de conversión (demo vs plan) — aplicado

- `Descargar demo` ahora apunta a `/company/contact?flow=demo`.
- El formulario de contacto diferencia dos modos:
  - **Con plan** (`?plan=...`): valida capital máximo por plan.
  - **Demo** (`?flow=demo`): permite envío sin plan preseleccionado.
- Estado de planes en web:
  - **Essential:** demo/beta disponible.
  - **Advanced/Pro:** en desarrollo (acceso anticipado).

---

## 10) Contacto por plan — aplicado

### `src/pages/company/contact.astro`
- Título principal simplificado: **`Completa tu acceso a tevsys`**.
- Se eliminó redundancia de copy en el encabezado (no repite "Has seleccionado X").
- El bloque visual izquierdo ahora cambia por `?plan=` y usa imágenes de formulario sin barra superior:
  - `/assets/images/plans/essential-form-v4.png`
  - `/assets/images/plans/advanced-form-v4.png`
  - `/assets/images/plans/pro-form-v4.png`
- `flow=demo` conserva comportamiento específico de demo.

### `src/components/forms/ContactForm.astro`
- Mantiene badge funcional de plan seleccionado en el formulario.
- Mantiene validación plan/capital por límites definidos.

---

## 11) Hero framework AIDA — aplicado

### `src/components/sections/heros/HomeHeroSection.astro`
- Se adopta el marco AIDA como guía de copy del hero:
  - **Atención:** `Tu capital merece más que buenas intenciones`
  - **Interés:** `Plataforma de verificación de disciplina automatizada y gestión de riesgo para mercados financieros.`
  - **Deseo:** `Where precision meets the edge`
  - **Acción:** `Disponible en MT5 · Próximamente: más plataformas` + CTA `Descargar demo →`
- El texto de interés se mantiene completo (sin recortes) y se presenta en 2 líneas para legibilidad.

---

## 12) Incidencia operativa de dominio (seguimiento)

- Se detectan ventanas de desalineación temporal entre:
  - `tevsys-landiing.vercel.app` (deploy actualizado)
  - `tevsys.io` (actualización más lenta/intermitente)
- Criterio de validación temporal:
  1. Validar primero en `tevsys-landiing.vercel.app`.
  2. Confirmar después en `tevsys.io` cuando termine sincronización DNS/CDN/SSL.
- Para evitar caché de imágenes en formulario por plan, se aplicó **cache-bust por renombrado** a archivos `*-form-v4.png`.

---

## 13) Microajustes de copy/UX (decisiones de producto)

### Mensaje principal (criterio)
- Se prioriza **claridad de propuesta de valor** frente a brevedad extrema en copy del hero.
- Racional: el producto es novedoso; conviene explicitar categoría + capacidad diferencial desde el primer pantallazo.

### Frases ajustadas
- Subtítulo de sección valor:
  - de `Sin excusas. Las buenas intenciones no cierran operaciones. Nosotros sí.`
  - a `Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`
- Objetivo del ajuste: reflejar explícitamente el bloqueo operativo, no solo el cierre.

### Cards de planes (UX visual)
- Se corrige desalineación de CTAs entre Essential/Advanced/Pro usando layout flex:
  - `plan-card` a altura completa.
  - `plan-card__content` en columna con `flex: 1`.
  - `plan-card__cta` con `margin-top: auto`.
- Resultado: botones en la misma línea horizontal aunque el texto de cada card tenga distinta longitud.

---

## 14) Ajustes de copy (sesión actual) + pendientes de mañana

### Home (`src/pages/index.astro`)
- Se añadió línea de mecanismo bajo el subtítulo de valor con versión final sobria:
  - `Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`
- `HyperClose` fue simplificada para evitar saturación:
  - **Texto actual:** `Si estás bloqueado o en un día OFF, cualquier intento de operar se cierra al instante.`
- `SML` incorpora mención de flexibilidad y días OFF:
  - `Además, puedes definir límites por día y semana e incluir días OFF completos cuando no quieras operar.`
- `Evidencia verificable` se ajustó de cadencia y claridad:
  - `Panel, logs y reporte oficial MT5 por cada cierre. Para trader, inversor o auditor. No hay "creemos que cumple": hay evidencia medible. Cada cierre, cada bloqueo y cada rotación queda registrado.`

### Contacto (`src/pages/company/contact.astro`)
- Primera bullet orientada a días OFF:
  - `También puedes marcar días OFF (por ejemplo, lunes o viernes) para proteger tu operativa cuando decides no estar en mercado.`
- Se dejó la lista de tips en 3 elementos (más ligera).

### Trazabilidad HyperClose (texto previo)
- **Versión previa inmediata (antes de la simplificación actual):**
  - `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos. Y no podrás reintentarlo hasta la siguiente rotación automática (diaria o semanal).`
- **Versión anterior técnica (iteración previa):**
  - `Protección reactiva instantánea: cierre en milisegundos si el usuario bloqueado intenta abrir una operación. No es un "cierre rápido"; es cierre antes del siguiente tick.`

### Pendientes acordados para mañana (NO aplicados aún)
1. **HyperClose:** recuperar mejor el núcleo funcional (intento de operar estando bloqueado + cierre en milisegundos) sin sobrecargar la card.
2. **SML:** matizar y reescribir mejor los dos primeros párrafos para que expliquen con más claridad la lógica de uso/beneficio.

---

## 15) Micro-páginas de features (fase implementada)

### Decisión ejecutada
- Se confirma cambio de flujo: de `card -> contacto` a `card -> micro-página de feature -> CTA a demo`.
- Objetivo: reducir fricción y mostrar prueba antes de pedir datos.

### Cambios aplicados
- `src/pages/index.astro`
  - Card 1 -> `/features/precision`
  - Card 2 -> `/features/hyperclose`
  - Card 3 -> `/features/sml`
  - Card 4 -> `/features/evidencia`
- Nuevas páginas:
  - `src/pages/features/precision.astro`
  - `src/pages/features/hyperclose.astro`
  - `src/pages/features/sml.astro`
  - `src/pages/features/evidencia.astro`
- Todas las micro-páginas incluyen:
  - Hero + hook contextual
  - Bloque "Demo rápida (20-30s)" (placeholder inicial)
  - Sección "Qué puedes comprobar" con enlaces clicables
  - Hover en enlaces (blanco -> amarillo) + cursor mano
  - Secciones de detalle por anclas internas
  - CTA final a contacto con `?feature=...&flow=demo`
- `src/pages/company/contact.astro`
  - Soporte de `feature` además de `origin`, manteniendo compatibilidad con `flow=demo` y `plan=...`.

### Ajustes de copy aplicados
- Card 1 (precisión): se añadió `Validado en 5 brokers distintos.`
- Card 2 (HyperClose): texto actualizado a
  - `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos, antes del siguiente tick. Cada intento queda registrado con trazabilidad completa, también en días OFF.`

### Commits recientes asociados
1. `feat: crear micro-página de precisión y conectar card 1 con CTA contextual a demo`
2. `feat: hacer clicables las evidencias de precisión con hover amarillo y secciones ancla`
3. `copy: actualizar card HyperClose con cierre en milisegundos y trazabilidad completa`
4. `feat: extender micro-paginas de features (hyperclose sml evidencia) con enlaces de prueba y CTA a demo`

### Próximo paso recomendado
- Sustituir placeholders de "Demo rápida" por embed lazy (premium) y aplicar doble capa:
  - Resumen rápido (usuario no técnico)
  - Detalle técnico (usuario avanzado)

---

## 16) Afinado de copy y jerarquía visual por micro-página (iteración actual)

### `src/pages/features/hyperclose.astro`
- Título refinado para mayor legibilidad y menos redundancia visual:
  - `HyperClose: cuando tu disciplina falla, HyperClose no.`
- Jerarquía de título ajustada en 2 líneas con acento dorado solo en `no.`
- Subtítulo técnico con punto amarillo y estilo consistente de hook:
  - `Cierre en milisegundos. Bloqueo hasta la siguiente rotación.`

### `src/pages/features/precision.astro`
- Estructura de lectura alineada con HyperClose:
  1. Título
  2. Hook con punto amarillo
  3. Frase explicativa
  4. Texto técnico
  5. Transparencia de escenarios extremos
- Hook principal:
  - `50 operativas documentadas. 0,06% de error medio en condiciones normales. Hecho.`
- Transparencia extrema (sin ocultar riesgo de mercado):
  - Se documenta continuidad de protección con desviaciones puntuales mayores, hasta `~0,39%`.
- Acentos dorados aplicados a `0,06%` y `~0,39%`.

### `src/pages/features/sml.astro`
- Copy final de producto con enfoque correcto de funcionamiento:
  - SML no “elige cuánto proteger”, sino cuánto ampliar margen (5%–25%).
  - Se explicita mínimo `75%` protegido.
- Jerarquía visual igual al patrón de micro-páginas:
  - título fuerte
  - hook con punto amarillo
  - explicación corta
  - línea de transparencia

### `src/pages/features/evidencia.astro`
- Copy final híbrido aplicado:
  - `Evidencia verificable: aquí no hay "creemos".`
  - `• Lo que no se puede demostrar, no cuenta.`
  - Registro en panel, logs y reporte oficial + cierre de trazabilidad para usuario/auditor/historial.

### Decisión de diseño global
- Se mantiene acento amarillo en título solo en HyperClose (diferenciador de identidad).
- En el resto de micro-páginas, el amarillo se usa en hooks y datos clave para no saturar.

### Commits asociados a esta iteración
1. `style: mejorar jerarquia visual del titulo de HyperClose sin cambiar el mensaje`
2. `style: mejorar legibilidad del titulo HyperClose con acento solo en no`
3. `copy: alinear subtitulos de micro-paginas al estilo de cards y añadir transparencia de casos extremos en precision`
4. `copy: ajustar transparencia de casos extremos en precision y resaltar ~0,39 en amarillo`
5. `style: alinear jerarquia de precision con hyperclose (titulo -> hook con punto -> detalle)`
6. `copy: aplicar version final de evidencia verificable con hook demostrable y trazabilidad clara`
7. `copy: aplicar version final de SML en micro-pagina con hook de control 5-25 y enfoque en conservacion`
8. `copy: corregir mensaje SML a ampliacion de margen (5-25) y minimo 75 protegido`
9. `style: mejorar legibilidad del hook SML con mas margen y aire visual`

---

## 17) Iteración móvil (consistencia + credibilidad)

### Objetivo
- Reducir fricción visual en móvil y mejorar percepción de calidad sin tocar la propuesta de valor.

### Cambios aplicados

#### `src/components/sections/heros/HomeHeroSection.astro`
- Ajuste responsive para que la imagen robótica gane presencia en móvil.
- Recentrado del bloque visual y del texto de marca bajo imagen.
- Resultado: hero móvil más equilibrado y menos sensación de “imagen pequeña”.

#### `src/pages/features/precision.astro`
- Hook copy:
  - de `... condiciones normales. Hecho.`
  - a `... condiciones normales.`
- Ajuste CSS en móvil para evitar cortes estéticos del hook (`50 operativas ... 0,06% ...`).

#### `src/pages/index.astro` (card SML)
- Compactación de copy en 3 bloques cortos:
  - Activación + rango `5%-25%` (`mínimo 75% protegido`).
  - Beneficio operativo (conservación de ganancias).
  - Convivencia con límites diarios/semanales y días OFF.

### Validación observada
- Capturas móviles confirman mejora de lectura y jerarquía visual.
- No se detectan regresiones funcionales en flujo.

### Commits asociados
1. `fix(hero-mobile): aumentar protagonismo y centrado de imagen en pantallas moviles`
2. `copy(mobile): simplificar hook de precision y compactar texto SML en home`
3. `fix(precision-mobile): mejorar legibilidad del hook 50 operativas 0,06 en pantallas moviles`

---

## 18) Limpieza de front público (micro-páginas)

### Decisión
- Se retira de la UI pública la sección `Mapa de evidencia (plan de publicación)` en:
  - `precision`
  - `hyperclose`
  - `sml`
  - `evidencia`

### Motivo
- Equipo pequeño (2-3 personas): más eficiente separar
  - **web pública limpia para conversión**, y
  - **seguimiento interno en documentación**.

### Implementación
- Eliminado bloque visual de roadmap y estilos asociados en las 4 micro-páginas.
- Tracker interno consolidado en `docs/CARDS-NEXT-PHASE.md` (sección Dream Team).

---

## 19) Patrón unificado de validación en micro-páginas (sin assets finales)

### Decisión UX
- Mantener en todas las micro-páginas el mismo patrón:
  1. `Qué puedes comprobar` (links de ancla interna),
  2. Rectángulos técnicos,
  3. Dentro de cada rectángulo: `Cómo validarlo` + link `Ver captura`.

### Implementación
- Se elimina el bloque redundante `Cómo validarlo hoy (sin video final)` donde existía.
- Se estandariza instrucción y enlace de captura dentro de cada bloque técnico en:
  - `precision`
  - `hyperclose`
  - `sml`
  - `evidencia`

### Resultado
- Misma calidad percibida en las 4 micro-páginas.
- Menos redundancia de texto.
- Preparado para enchufar capturas reales sin cambiar estructura.

---

## 20) Navegación premium por anclas + instrucciones por bloque

### Objetivo
- Mejorar orientación visual cuando el usuario navega desde `Qué puedes comprobar`.
- Reducir confusión y evitar saltos bruscos de contexto.

### Cambios UX aplicados

1. **Patrón por bloque técnico (4 rectángulos):**
   - Línea `Cómo validarlo`
   - Link amarillo `Ver captura ...` (placeholder preparado para asset real)

2. **Orientación visual en destino de ancla:**
   - Punto amarillo junto al título del bloque (`h3::before`)
   - Resalte del bloque destino con `:target` (borde/fondo/acento)
   - `scroll-margin-top` para que el ancla no quede pegada arriba

3. **Scroll suave global:**
   - `src/styles/reset.css` -> `html { scroll-behavior: smooth; }`
   - Manteniendo respeto a accesibilidad vía `prefers-reduced-motion`

4. **Ajuste de claridad en trazabilidad (`evidencia`):**
   - Instrucción reescrita para usuario medio:
   - verificar el mismo evento en panel + logs MT5 + informe exportado (HTML/PDF), coincidiendo hora, tipo de acción y resultado.

### Archivos implicados
- `src/pages/features/precision.astro`
- `src/pages/features/hyperclose.astro`
- `src/pages/features/sml.astro`
- `src/pages/features/evidencia.astro`
- `src/styles/reset.css`

### Resultado
- Sensación más premium al navegar por pruebas.
- Menos pérdida de contexto al bajar por anclas.
- Estructura lista para conectar capturas/videos reales sin rediseño.

---

## 21) Cierre de sesión: recuperación documental + ajuste de evidencia en `precision`

### 21.1 Recuperación y custodia del documento crítico de precisión (interno)
- Se detectó vaciado accidental del documento de operativas.
- Se reconstruyó una versión operativa con soporte de:
  - copia local de MetaQuotes,
  - historial interno de trabajo.
- Se activó protocolo "bajo llave" en entorno interno para evitar repetición:
  - `MASTER + MIRROR + SNAPSHOT` por cada actualización.
- Se creó política interna de tratamiento de evidencias para empresas (público / bajo demanda / NDA).

### 21.2 Ajuste aplicado en micro-página `precision`
- Archivo: `src/pages/features/precision.astro`
- Cambios:
  - Hook de apertura actualizado a `48 operativas documentadas`.
  - Bloque `Resumen estadístico` pasado a formato de lectura rápida con 4 KPIs:
    - 48 operativas
    - 0,06% (condiciones normales)
    - 5 brokers validados
    - 2 casos extremos documentados aparte
  - Se añadieron enlaces técnicos:
    - `Ver resumen técnico (PDF)`
    - `Ver dossier completo (PRÓXIMAMENTE)`
  - Nota explícita de IP:
    - resultados verificables sí,
    - fórmula propietaria no publicada.

### 21.3 Evidencia visual validada para operativa 4.33
- Se validó uso de `ReportHistory-511090223.html` local sin necesidad de login activo FTMO.
- Se confirmó correspondencia operativa:
  - rango evento `10:20:56 -> 11:00:39`,
  - total bloque `302.70`,
  - balance final `95 633.94`.
- Se define patrón visual público:
  - captura panel,
  - captura transacciones,
  - captura resumen del bloque,
  - versión redacted para privacidad.

### 21.4 Pendiente inmediato para próxima sesión
1. Integrar primera evidencia real (4.33) en `precision` como piloto visual.
2. Repetir patrón en 3 casos más (4.38, 4.41, 4.44).
3. Cerrar PDF técnico corto (1-2 páginas) y enlace desde micro-página.

---

## 22) Publicación operativa 49 en web + depuración UX de `precision`

### 22.1 Assets reales cargados y visibles
- Se activa evidencia visual de operativa 49 en:
  - `public/images/evidence/precision-49-01-desbloqueado.png`
  - `public/images/evidence/precision-49-02-protegido.png`
  - `public/images/evidence/precision-49-03-flotante-intermedio-positivo.png`
  - `public/images/evidence/precision-49-04-flotante-intermedio-negativo.png`
  - `public/images/evidence/precision-49-05-stop-final.png`
  - `public/images/evidence/precision-49-06-html-transacciones-redacted.png`
  - `public/images/evidence/precision-49-07-mt5-resumen-redacted.png`
- Incidencia resuelta: los archivos estaban con doble extensión (`.png.png`), lo que impedía carga en la web.

### 22.2 Mejora de usabilidad en la galería de evidencia
- En `src/pages/features/precision.astro`:
  - cada miniatura abre imagen completa en pestaña nueva (`target="_blank"`),
  - se añade guía explícita: `Haz clic en cada captura para verla en tamaño completo`.
- Resultado: la evidencia deja de ser solo visual y pasa a ser legible/auditable por detalle.

### 22.3 Limpieza de `Resumen estadístico` para reducir saturación
- Se simplifica el bloque para foco comercial + validación rápida:
  - se mantiene KPI + `Ver resumen técnico (PDF)`,
  - se retira `Ver dossier completo` del bloque público,
  - se compacta texto de IP: resultados y trazabilidad públicas; fórmula propietaria no pública.

### 22.4 Nota semántica de panel (bloqueado/protección)
- Se incorpora nota visible fuera del acordeón:
  - `Nota: en este panel, "Bloqueado hasta" equivale a "Protección activa hasta".`
- Objetivo: eliminar ambigüedad sin rehacer capturas ni re-documentar operativas.

---

## 23) Guía de logs en vídeo + estilo unificado (31/01/2026)

### 23.1 Integración de `precision-logs-guide.mp4`
- Archivo: `public/videos/features/precision-logs-guide.mp4`
- Ubicación: sección «Sin humo: todo queda registrado» en `precision.astro`
- Contenido: guía paso a paso para localizar logs MT5 (overlays: hora servidor, archivo YYYYMMDD, buscar Trades)
- Sin audio: instructivo con texto en pantalla suficiente

### 23.2 Enlace con badge VIDEO (coherencia visual)
- Texto: `Ir a guía de logs` + badge `VIDEO`
- Mismo patrón que «Ir a demo del cierre» en la sección superior
- Archivo: `src/pages/features/precision.astro`

### 23.3 Estructura unificada Precisión / HyperClose
- Ambas micropáginas comparten: título → hook con punto → bloques proof → enlaces amarillos con badge VIDEO
- HyperClose: 3 bloques (Cierre inmediato, Semáforo, Día OFF) alineados con el patrón de Precisión

### 23.4 Pendiente
- `precision-demo.mp4`: demo de cierre real (con audio)

---

## 24) Precisión y HyperClose — vídeos finales, acordeones y UX unificada (Mar 2026)

### 24.1 Precisión — cierre de micropágina

**Demo principal:**
- `precision-demo.mp4` integrado (1 min 7 s, con audio).
- Embed compacto que se expande al dar play (misma UX que HyperClose).
- Primer enlace "Aquí se decide el cierre" apunta a la demo; autoplay al hacer clic.
- Scroll-margin y resaltado amarillo en `:target`.

**Acordeón demo en alta volatilidad:**
- Archivo: `precision-demo-volatilidad.mp4`.
- En bloque «Aquí se decide el cierre»: acordeón "Ir a demo en alta volatilidad VIDEO".
- Texto: Límite -1,50%. Cierre en ganancias (+1,83%) con alta volatilidad geopolítica.

**Actualización operativas:**
- 49 → 50 operativas documentadas (hook, KPIs, card home).

**Limpieza:**
- Eliminados placeholders internos (ruta de vídeo) de la UI pública.

### 24.2 HyperClose — vídeo y capturas de modales

**Vídeo demo:**
- `hyperclose-demo.mp4` (1 min 35 s, sin audio).
- Contenido: límite alcanzado, cierre automático, 3 intentos con semáforos, 7 intentos finales.
- Nota bajo embed: "Vídeo editado para acortar esperas (cadencia 30 s entre modales)."
- Broker y datos personales tapados (barra gris #2d2d2d).

**Estructura visual (igual que Precisión):**
- Embed compacto que se expande al dar play.
- Primer enlace y Semáforo apuntan a la misma demo.
- Autoplay al hacer clic en enlaces.
- scroll-margin y resaltado amarillo en `:target`.

**Acordeón 3 modales:**
- "Ver capturas de los 3 modales" en bloque Semáforo.
- Imágenes: `hyperclose-modal-01-sistema-bloqueado.png`, `-02-advertencia.png`, `-03-advertencia-final.png`.
- Cada captura con título, descripción corta y zoom a tamaño completo.

### 24.3 Pendiente
- Día OFF: vídeo cuando esté grabado; acordeón en bloque correspondiente.

### 24.5 Documentación para DeepSeek / Psique
- `PROMPT_RESUMEN_DEEPSEEK_VIDEOS_PRECISION_HYPERCLOSE.md` — Prompt completo con estado actual (Mar 2026) para dar contexto a IA.
- `GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md` — Actualizada con specs reales de vídeos publicados.

### 24.6 Commits asociados
- `feat(precision): enlazar "Aquí se decide el cierre" a demo rápida`

---

## 25) HyperClose Días OFF completo + Footer indie (Mar 2026)

### 25.1 HyperClose – sección Días OFF finalizada
- **Capturas:** 5 escenarios en acordeón: config (modal-00), panel protegido, modales 01/02/03 (educativo, advertencia, cláusula).
- **Vídeo:** `hyperclose-dias-off-demo.mp4` (51 s) con overlays: Día OFF config → Primer intento (cierre + 1.er semáforo) → Segundo intento (2.º semáforo) → Tercer intento (3.er semáforo, exención) → cierre "Tu calendario. Tu decisión. Nosotros lo cumplimos — tevsys".
- **Captions candado:** En capturas 1 y 2, sobre la imagen. "🔓 Candado gris (esquina inf. izq. del gráfico) = sin protección. Configura y bloquea." | "🔒 Candado verde (esquina inf. izq. del gráfico) = protección activa." Teal→verde para usuario. Margen 2rem 0 2rem.
- **Archivos:** `src/pages/features/hyperclose.astro`, `public/images/evidence/hyperclose-dias-off-*`, `public/videos/features/hyperclose-dias-off-demo.mp4`.

### 25.2 Footer – frase proyecto independiente
- **Texto:** "❤️ Made with love for trading. — Desarrollado independientemente. Sin inversores. Sin excusas."
- **Estilo:** Link con hover amarillo (#f5b041), font 0.95rem. Ubicado encima del copyright.
- **Archivo:** `src/components/core/Footer.astro`.

### 25.3 Favicon y logo (sesión anterior)
- Favicon: `logo tevsys_03.png`. Logo en BrandOval (header).

### 25.4 Commits asociados
- `feat(web): capturas modales Días OFF nivel 1, 2 y 3`
- `feat(footer): frase proyecto independiente EN/ES + corazón + em dash`
- `feat(precision): autoplay vídeo demo + scroll y resaltado`
- `feat(precision): embed compacto que se expande al dar play`
- `feat(precision): acordeón demo en alta volatilidad`
- `feat: actualizar 49 a 50 operativas documentadas`
- `fix: quitar placeholders internos de precision y hyperclose`
- `feat(hyperclose): nuevo vídeo 1:35 + estructura visual igual que Precisión`
- `feat(hyperclose): nota "Vídeo editado para acortar esperas"`
- `fix(hyperclose): sustituir vídeo con broker tapado`
- `feat(hyperclose): acordeón con capturas de los 3 modales`
- `fix(precision): resaltado amarillo y autoabrir acordeón en #precision-logs-guide`

---

## 26) Evidencia → Precisión: enlace guía de logs (Ene 2026)

### 26.1 Fix enlace «Guía visual de logs (VIDEO)»
- **Problema:** El enlace desde Evidencia a `#precision-logs-guide` no marcaba el embed en amarillo (el `:target` era el `details`, no la section).
- **Solución:** CSS `#precision-logs:has(#precision-logs-guide:target)` para aplicar el mismo resaltado; script para autoabrir el acordeón cuando se navega con ese hash.
- **Archivo:** `src/pages/features/precision.astro`.

---

## 27) Hero, Footer, Favicon — sprint Mar 2026 (sesión 6 marzo)

### 27.1 Hero — imagen mano robótica rediseñada
- **Nueva imagen:** `mano robotica central web.png` — mano robótica + candado dorado, chart de velas de fondo, logo tevsys en etiqueta negro apagado (esquina sup. izq.) para visibilidad.
- **Alineaciones:**
  - Borde superior de la imagen alineado con la «T» del título «Tu capital merece más que buenas intenciones».
  - Borde izquierdo de la imagen alineado con el inicio de «Trading Edge Verification System».
  - Grid `1fr 2fr`, `align-items: start`, `object-position: right top`.
- **Archivo:** `src/components/sections/heros/HomeHeroSection.astro`.

### 27.2 Footer — iconos contacto, guiones, hover
- Iconos SVG (email, ubicación) en amarillo tevsys. Contacto: info@tevsys.io, Barcelona.
- Guion amarillo (— ) antes de títulos de columnas (Navegación, Producto).
- Hover amarillo en enlaces de columnas.
- Enlaces micropáginas: Precisión, HyperClose, SML, Evidencia.
- Logo en footer (favicon.png) junto a tevsys™.
- **Archivos:** `src/components/core/Footer.astro`, `src/config/footer.js`, `src/layouts/Page.astro`, `public/icons/icon-email.svg`, `public/icons/icon-location.svg`.

### 27.3 Favicon
- PC: `favicon.png` (logo con chevrones blanco/naranja). Tras pruebas con `logo-tevsys.png` y `favicon-tevsys-icon.svg`, se mantiene favicon.png como correcto.
- Móvil: `apple-touch-icon.png` 180×180 añadido (link en BaseHead). Pendiente validar en dispositivos reales.

### 27.4 Reflexión diseño hero (documentada 6 Mar 2026)

> **Antes vs ahora**  
> Antes la mano robótica perdía peso, el logo competía con el chart y no había jerarquía clara. Ahora hay orden: el título manda, la imagen acompaña sin robar foco, y la marca está presente en la esquina sin gritar.
>
> **Reglas respetadas**  
> - **Jerarquía:** El titular sigue siendo lo primero. La imagen refuerza el mensaje sin competir.  
> - **Respiración:** El espacio entre texto e imagen evita saturación; no se siente apretado ni vacío.  
> - **Alineación:** La línea superior compartida con la «T» y el alineamiento con las cards mantienen coherencia.  
> - **Consistencia:** El logo en la imagen encaja con el resto de la marca (cards, footer, amarillo) sin repetirse.  
> - **Ritmo:** La transición hero → cards es natural; cada bloque tiene su peso sin competir.
>
> **Importancia sin ser estridente**  
> La mano + candado ya tiene fuerza. El logo en gris sobre fondo apagado suma identidad sin ruido. Presencia de marca sin que el diseño grite.
>
> **Conclusión**  
> La página transmite más orden y profesionalidad. El hero funciona como puerta de entrada, las cards mantienen potencia y todo encaja en el mismo sistema. Base sólida para seguir construyendo.

### 27.5 Documentación cruzada
- Reflexión completa + commits: `docs/REFLEXION_DISENO_HERO_FOOTER_MAR2026.md`.
- Referencias: `CONTENIDO_WEB_TEVSYS_LANDING`, `CARDS-NEXT-PHASE`, `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS`, `ESTRATEGIA_FAVICON_ICONOS_TEVSYS`.
- **Prompt maestro para DeepSeek:** `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` — documento único que engloba todo (hero, footer, vídeos, copy, patrones, docs) para onboarding del otro miembro del equipo.

### 27.6 Commits asociados (sesión 6 Mar 2026)
- `fix(precision): resaltado amarillo y autoabrir acordeón en #precision-logs-guide`
- `feat(web): favicon tevsys SVG + enlace apple-touch-icon`
- `fix(web): usar logo-tevsys.png en favicon y BrandOval (icono correcto)`
- `fix(web): volver a favicon.png para logo en pestaña`
- `feat(web): añadir apple-touch-icon 180x180 para móvil`
- `fix(web): centrar logo en apple-touch-icon`
- `feat(footer): enlaces micropáginas, logo y columna Producto`
- `feat(footer): iconos SVG contacto (email, Barcelona) en amarillo tevsys`
- `style(footer): fondo más oscuro y transparente + borde superior sutil`
- `revert(footer): fondo unificado con theme-surface-1`
- `feat(footer): guion amarillo en títulos y hover amarillo en enlaces`
- `feat(hero): nueva imagen mano robótica + candado con logo en etiqueta`
- `style(hero): imagen más grande, extendida hacia el texto`
- `style(hero): alinear borde superior de imagen con la "T" del título`
- `style(hero): reducir extensión izquierda de imagen, más separación del texto`

---

## 28) Línea de trazabilidad en sección valor (Ene 2026)

- **Cambio:** Añadida línea entre subtítulo y mecanismo: `Trazabilidad completa: logs, panel y reporte MT5. Auditable.`
- **Objetivo:** Señal de credibilidad temprana para inversores, fondos y escépticos antes de llegar a las cards.
- **Estructura:** Dolor (pregunta) → Promesa (nosotros sí) → **Prueba (trazabilidad)** → Mecanismo (configuras una vez).
- **Archivo:** `src/pages/index.astro` — clase `feature-card__intro-trazabilidad`.
- **Docs:** CONTENIDO_WEB, PROMPT_MAESTRO actualizados.

### 28.1 Overlays vídeo alta volatilidad (Precisión) — FINAL
- **Vídeo:** `precision-demo-volatilidad.mp4` — SIN audio.
- **Mejora aplicada:** Vídeo actualizado/mejorado con 6 overlays definitivos que guían la narración visual. Sustituye versión previa (si la hubo) con overlays más claros y coherentes.
- **Overlays (orden):** 1) Abro operación. Límite -1,50% / 1,50%. Mercado en alta volatilidad. 2) Panel en tiempo real: flotante y protección activa. 3) Cero intervención. — tevsys ejecuta. 4) Cálculo en curso. Cierre inminente. 5) Cierre en ganancias (+1,83%). Protección en condiciones extremas. 6) Alta volatilidad. Mismo compromiso. — tevsys *(frase de marca)*
- **Estado:** Vídeo editado y listo para exportar/subir.

---

## 29) Formulario contacto: imagen por plan, link empresas, bullets acumulativos (Ene 2026)

### 29.1 Imagen en formulario demo
- El bloque visual izquierdo del formulario de contacto muestra una imagen distinta según el plan seleccionado.
- Imágenes: `*-form-v4.png` (essential-form-v4, advanced-form-v4, pro-form-v4) en `/assets/images/plans/`.
- Al cambiar de plan (Essential / Advanced / Pro), la imagen se actualiza en cliente para reflejar el visual del plan.

### 29.2 Link empresas (actualizado §30)
- Bullet fijo en todos los planes: enlace a `/company/empresas` (micro-página canal empresas).
- Texto del enlace: `Empresas o contacto corporativo`. Ya no es mailto; redirige a la micro-página.

### 29.3 Diferenciación horarios/noticias por plan
- **Essential:** No incluye bullet de horarios/noticias (base).
- **Advanced:** `Horarios de mercado y noticias (mejorados): en fase de desarrollo.` — mejorados respecto a Essential.
- **Pro:** `Horarios de mercado y noticias (con eventos personalizados): en fase de desarrollo.` — nivel superior, eventos que el usuario define.
- Vinculación con diseño: `docs/DISENO_NOTICIAS_HORARIOS_V9_COMPLETO.md` (proyecto TGP).

### 29.4 Bullets acumulativos (Essential + Advanced + Pro)
- **Enfoque:** Advanced y Pro explicitan que incluyen todo lo anterior más lo nuevo.
- **Essential** (base): 3 bullets + link empresas.
- **Advanced:** Línea intro `Todo lo de Essential, además:` + 3 bullets específicos (SML, días OFF, horarios mejorados) + link empresas.
- **Pro:** Línea intro `Todo lo de Advanced, además:` + 2 bullets específicos (drawdown/estructura, horarios con eventos personalizados) + link empresas.
- Eliminadas redundancias (días OFF no se repite en Pro; "respecto a Essential" en Advanced implícito por la intro).

### 29.5 Bullets completos por plan (estado actual)

| Plan | Bullets |
|------|---------|
| **Essential** | 1) Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF. 2) Límite diario, precisión milimétrica y HyperClose incluidos. 3) Respuesta en menos de 24h con los siguientes pasos. 4) Empresas: info@tevsys.io |
| **Advanced** | 1) Todo lo de Essential, además: 2) Protección configurable toda la semana + SML para operativas avanzadas. 3) Puedes marcar días OFF para proteger tu operativa. 4) Horarios de mercado y noticias (mejorados): en fase de desarrollo. 5) Empresas: info@tevsys.io |
| **Pro** | 1) Todo lo de Advanced, además: 2) Para capitales más altos: drawdown y estructura completa. 3) Horarios de mercado y noticias (con eventos personalizados): en fase de desarrollo. 4) Empresas: info@tevsys.io |

### 29.6 Archivos modificados
- `src/pages/company/contact.astro` — `planTipsMap` con bullets acumulativos y diferenciación horarios/noticias.
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` — copy de bullets actualizado.
- `docs/CHANGELOG-TEVSYS.md` — esta sección.

### 29.7 Commits asociados
- `feat(contact): diferenciar horarios/noticias en Advanced y Pro vs Essential`
- `feat(contact): Pro con "eventos personalizados" en horarios/noticias`
- `feat(contact): bullets acumulativos (Essential +) en Advanced y Pro`

---

## 30) Micro-página Empresas: canal B2B, nav, formulario, estilo (Ene 2026)

### 30.1 Objetivo
- No cerrar puertas a B2B mientras se enfoca en retail/Essential.
- Captar leads empresas sin prometer funcionalidad aún no disponible.
- Mensaje: canal en desarrollo; avisaremos cuando esté listo.

### 30.2 Nav header
- Añadido **Empresas** al menú: Inicio | Empresas | Acceso | Contacto.
- Acceso a `/company/empresas` desde cualquier página (home, micro-páginas de features).

### 30.3 Bullet en formulario contacto
- El bullet "Empresas o contacto corporativo" enlaza a `/company/empresas` (no mailto).
- Visible en Essential, Advanced y Pro al seleccionar plan.
- Mismo enlace cuando `flow=demo` → título "Solicita tu demo de tevsys" (el bullet empresas sigue presente).

### 30.4 Micro-página `/company/empresas`
- **Ruta:** `/company/empresas`
- **Hero:** feature-kicker "Canal empresas", h1 "Empresas: otro canal, otro trato."
- **Hook (estilo micropáginas):** "Estamos en fase de desarrollo y validación del canal empresas." — cursiva, negrita, punto amarillo (mismo que Precision/HyperClose).
- **Copy:** Trato especial; capital distinto a retail; requiere reuniones; definimos oferta contigo.
- **CTA:** "Si te interesa, déjanos tus datos y te avisaremos cuando estemos listos."

### 30.5 Formulario empresas
- **Campos:** Empresa (req), Email corporativo (req), Rol (opt), Objetivo (opt), Comentario (opt).
- **Hidden:** `_subject: [tevsys Empresas] Nueva solicitud`, `Source: empresas`
- **Endpoint:** mismo Formspree que contacto (xzdjbenk).
- **Thank-you:** `/company/empresas-thank-you` — "Te avisaremos cuando estemos listos para el canal empresas."
- **Fallback:** "O escríbenos directo: info@tevsys.io" (mailto).

### 30.6 Estilo visual
- **Fondo formulario:** #06080d (igual que demo-video en Precision), no gris theme-surface-1.
- **Borde:** rgba(245, 176, 65, 0.35) — acento amarillo tevsys.
- **Campos:** fondo rgba(255,255,255,0.04), borde ámbar, focus más visible.
- **Margen inferior:** 3rem antes del footer.

### 30.7 Accesos desde micro-páginas
- Las micro-páginas (Precision, HyperClose, SML, Evidencia) comparten el mismo header.
- Header incluye Empresas → siempre accesible desde cualquier feature.
- CTAs de features enlazan a `/company/contact?feature=...&flow=demo` (solicitar demo retail).
- Empresas es canal paralelo; no sustituye el flujo demo.

### 30.8 Pendientes documentados
- **Verificación email (double opt-in):** `docs/PENDIENTE_VERIFICACION_EMAIL_LEADS.md` — contexto, opciones, decisión aplazada hasta después de Essential estable.
- **Plan producto y academia:** `docs/ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md` — prioridades, pricing, early adopters, vídeos, presentación. Ir paso a paso.

### 30.9 Archivos
- `src/pages/company/empresas.astro`
- `src/pages/company/empresas-thank-you.astro`
- `src/config/nav.js`
- `src/pages/company/contact.astro` (bullet link)
- `docs/RUTA_EMPRESAS_TRATAMIENTO_EVIDENCIAS_TEVSYS.md`
- `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`

### 30.10 Commits asociados
- `feat(empresas): micro-página canal empresas + nav + bullet a /company/empresas`
- `fix(empresas): margin-bottom 3rem antes del footer`
- `style(empresas): fondo oscuro #06080d, hook como micropáginas, campos con borde ámbar`

---

## 31) Bullets flujo Acceso — Opción A (Ene 2026)

### 31.1 Contexto
- Formulario con `?flow=acceso` usa bullets propios (no demo ni plan).
- Objetivo: claridad sobre Essential vs Advanced/Pro, trato personal, evidencia real.

### 31.2 Bullets aplicados
1. **Essential listo para probar. Advanced y Pro en desarrollo — lista de espera.**
2. **Respuesta en menos de 24h. Te orientamos según tu perfil.** (antes "Trato personal, sin automatismos" — ajuste por capacidad real; ver §6 ROADMAP)
3. **Precisión y HyperClose validados con operativas reales. Días OFF y configuración flexible de toda la semana.**
4. **Empresas o contacto corporativo** — enlace a `/company/empresas`.

### 31.3 Claridad Essential / Advanced / Pro en desarrollo
- **Intro Acceso:** "Rellena el formulario... Essential listo; Advanced y Pro en desarrollo."
- **Thank-you flow-aware:** Si envía desde `?flow=acceso`, redirige a `?flow=acceso` y muestra: "Essential está listo; Advanced y Pro en desarrollo. Te indicaremos el siguiente paso según tu perfil."

### 31.4 Bullet 3 ampliado (Opción B)
- Añadido: "Días OFF y configuración flexible de toda la semana." — vender features únicos (Essential ya tiene días OFF; Advanced/Pro amplían).

### 31.5 Archivos
- `src/pages/company/contact.astro` — bullets, intro Acceso.
- `src/components/forms/ContactForm.astro` — thank-you URL con `?flow=acceso`.
- `src/pages/company/contact-thank-you.astro` — mensaje condicional por flow.

### 31.6 Badge DEMO sobre imagen Essential (Ene 2026)
- Cuando se muestra la imagen Essential (flow=acceso, flow=demo, plan=essential), se añade badge "DEMO" en la esquina superior derecha.
- Refuerza: la demo disponible es solo Essential.

### 31.7 Contacto = Acceso unificado + fixes (Ene 2026)
- **Nav:** "Contacto" apunta a `/company/contact?flow=acceso` — misma experiencia que Acceso.
- **Redirect:** `/company/contact` sin params → redirige a `?flow=acceso`.
- **allowNoPlan:** Pasado desde Astro según URL (flow=acceso o demo) — permite enviar sin plan.
- **Imagen:** demo-form-visual.png no existía; fallback a `esse-form-v4.png` para flujos demo/acceso.

### 31.8 Referencia
- `docs/ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md` — plan paso a paso.
