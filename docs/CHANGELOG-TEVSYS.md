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
