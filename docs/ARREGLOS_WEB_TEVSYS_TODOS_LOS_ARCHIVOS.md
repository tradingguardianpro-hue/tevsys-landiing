# Arreglos web tevsys — Todos los archivos (actualizado)

Resumen técnico completo para revisión interna / DeepSeq.

---

## Cambios por archivo

| Archivo | Cambios aplicados |
|---|---|
| `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md` | **Abr 2026:** documento maestro — hero, header, cards. **19 abr 2026:** H1 **DM Sans**, stack **`#000`**, escáner restaurado, cards **`?v=7`**, accents lectura, Inter tema oscuro global, CTAs unificados, `.feature-hero`, orden Precisión. |
| `docs/CHANGELOG-TEVSYS.md` | **Abr 2026:** entrada iteración hero/cards. **19 abr 2026:** entrada **“Web — coherencia tipográfica…”** + corrección orden Nasdaq en entrada histórica Precisión. |
| `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` | **Abr 2026:** hero/header/cards. **19 abr 2026:** motion escáner, DM Sans H1, stack `#000`, contacto Inter, CTAs, theme oscuro, respiro micropáginas, estado Precisión (orden demos). |
| `docs/CARDS-NEXT-PHASE.md` | **Abr 2026:** bloque estado + siguiente fase. **19 abr 2026:** mismo hito documentado. |
| `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` | **19 abr 2026:** duraciones escáner header actualizadas (29,5s / 28s / 23,5s); nota “intensidad restaurada”. |
| `src/components/BrandOval.astro` | Logo simplificado: solo texto `tevsys` en óvalo. **Abr 2026:** Inter en pastilla. |
| `src/config/nav.js` | Nav final: Inicio, Acceso (CTA), Contacto. |
| `src/components/core/Header.astro` | Estilos del CTA en nav (botón blanco redondeado). **Abr 2026:** Inter, barra más baja, nav refinada; en `/` clase `tevsys-header--home-scanner` + capa escáner; motion escáner vía `global.css`. |
| `src/components/head/BaseHead.astro` | Fuentes: **Inter**, **DM Sans** (H1 hero), Outfit según tema. **19 abr 2026:** carga alineada a tipografía hero + micropáginas. **Schema** JSON-LD, **preload** LCP hero WebP (home). |
| `src/components/sections/heros/HomeHeroSection.astro` | Hero Mar 2026: imagen `mano robotica central web.png`, grid 1fr/2fr, alineación con «T», logo en etiqueta. Reflexión + commits: `REFLEXION_DISENO_HERO_FOOTER_MAR2026.md`, `CHANGELOG-TEVSYS.md` §27. **Abr 2026:** `hero-context-line`, ritmo vertical, halo, imagen con radio/filtros/viñeta. **19 abr 2026:** H1 **DM Sans** (`.hero-title`), mano/viñeta/marco iterados. |
| `src/pages/index.astro` | 4 cards de valor (2x2), textos finales, imágenes nuevas, sección de planes con CTA por plan e imágenes finales. **Abr 2026:** marcado `tevsys-home-*`; Inter, cards/planes tonos gris oscuro, estructura card sin franja, legibilidad texto, card 1 PNG. **19 abr 2026:** accents `.feature-card__value-accent`; CTA planes secundario con estilo local donde aplica. **Card 1 Precisión:** `card-1-input.png` engranaje; **`?v=8`**. **Card 2 HyperClose:** `card-2-hyperclose.png` candado; **`?v=9`**. **Card 3 SML:** `card-3-sml.png`; **`?v=10`**. |
| `src/pages/company/contact.astro` | Contacto por plan con título simplificado + visual dinámico por `?plan=` (sin redundancia en encabezado). **19 abr 2026:** **Inter** explícita en copy + formulario (coherencia con micro-páginas). |
| `src/components/forms/ContactForm.astro` | Badge de plan seleccionado + validación plan/capital + compatibilidad con `flow=demo`. |
| `public/assets/images/home/cards/*` | Imágenes personalizadas de cards 1-4. |
| `public/assets/images/plans/*` | Imágenes finales de cards de planes + visuales de formulario por plan. |
| `docs/*.md` | Documentación actualizada con estado real. |
| `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` | **Abr 2026:** handoff IA→IA — tabla duraciones/colores/capas motion home; sincronía / asincronía. |
| `src/styles/global.css` | **Abr 2026:** motion home tema oscuro (KITT, burbujas, franjas, escáner header gris, `prefers-reduced-motion`, móvil). **16 abr 2026:** mid-glow móvil `*-mobile` (92s / 118s). **19 abr 2026:** stack hero **`#000`**; escáner header **intensidad restaurada** (duraciones **29,5s** base, **28s** ≥769px, **23,5s** móvil); **CTAs demo** unificados (hero, feature, precios, plan primario); **`.feature-hero`** respiro global en micropáginas. |
| `src/styles/theme.css` | **19 abr 2026:** `[data-theme='dark']` — `--theme-font-family-sans` y `--theme-font-family-serif` → **Inter** (micropáginas alineadas a home). |
| `src/pages/features/precision.astro` | **19 abr 2026:** orden secciones demo: volatilidad → Nasdaq → cuenta pequeña → logs; anclas + `initDemoExpand` alineados. |
| `src/config/settings.js` | **SEO (Mar 2026):** title y description orientados a búsquedas (protección capital, límites MT5, **59** operativas). |
| `src/pages/company/contact.astro` | **SEO:** Meta propia "Contacto y demo \| tevsys". Bug Astro Odyssey corregido (antes: "Contact \| Astro Odyssey Theme"). |
| `public/robots.txt` | **SEO:** Nuevo. Allow all, sitemap. |
| `package.json` | **Analytics:** `@vercel/analytics` añadido. |
| `src/layouts/Base.astro` | **Analytics:** `inject()` de @vercel/analytics antes de `</body>`. |
| `public/sitemap.xml` | **SEO:** Sitemap estático (11 URLs). |
| `public/google644b0bf8f5617256.html` | **Search Console:** Verificación propiedad. |
| `src/components/sections/heros/HomeHeroSection.astro` | **Core Web Vitals:** picture WebP, fetchpriority, width/height, decoding. |
| `src/pages/index.astro` | **Core Web Vitals:** picture WebP, lazy, width/height en cards y planes. |
| `scripts/optimize-images.js` | **Core Web Vitals:** Genera WebP con sharp. |

---

## Estado técnico actual de `index.astro`

### A) Sección de valor (4 cards)
- Grid desktop: 2 columnas (`repeat(2, 1fr)`)
- Grid móvil: 1 columna
- Cards enlazan a `/company/contact`

**Rutas de imagen actuales:**
- Card 1: `/assets/images/home/cards/card-1-input.png`
- Card 2: `/assets/images/home/cards/card-2-hyperclose.png`
- Card 3: `/assets/images/home/cards/card-3-sml.png`
- Card 4: `/assets/images/home/cards/card-4-evidencia.png`

### B) Sección de planes (template)
- Título: `Elige tu cuenta`
- 3 cards: Essential / Advanced / Pro
- CTA por plan con query param:
  - `/company/contact?plan=essential`
  - `/company/contact?plan=advanced`
  - `/company/contact?plan=pro`
- Imágenes finales de cards:
  - `/assets/images/plans/essential-card.png`
  - `/assets/images/plans/advanced-card.png`
  - `/assets/images/plans/pro-card.png`

### C) Contacto por plan
- Título actual: `Completa tu acceso a tevsys`.
- El badge de plan se mantiene en el formulario (lado derecho).
- El visual izquierdo cambia por plan y usa rutas:
  - `/assets/images/plans/essential-form-v4.png`
  - `/assets/images/plans/advanced-form-v4.png`
  - `/assets/images/plans/pro-form-v4.png`
- Cache-bust aplicado por renombrado de assets (`*-form-v4`) para evitar desalineación por caché.

### D) Founder
- Se mantiene bloque de fundador sin cambios estructurales.

---

## Ajustes de estilo clave

### Hero (Mar 2026)
- `grid-template-columns: 1fr 2fr` — imagen más protagonista.
- Imagen: `mano robotica central web.png` (mano robótica + candado, logo en etiqueta).
- Alineación: borde sup. imagen con «T» del título; borde izq. con «Trading Edge Verification System».
- Botón amarillo:
  - `background: #f5b041`
  - `hover: #f7c050`
- Tagline dot: `22px`
- Copy en modo AIDA:
  - Atención: `Tu trading merece más que buenas intenciones`
  - Interés: `Plataforma de verificación de disciplina automatizada y gestión de riesgo para mercados financieros.`
  - Deseo: `Where precision meets the edge`
  - Acción: `Disponible en MT5 · Próximamente: más plataformas` + `Descargar demo →`
- Presentación optimizada: el texto de interés se divide en 2 líneas para legibilidad sin perder contenido.

### Cards
- Fondo `var(--theme-surface-1)`
- Imagen con `object-fit: cover`
- Hook en itálica (`.feature-card__hook`)

### Plan cards
- Grid 3 columnas desktop, 1 en móvil
- CTA amarillo reutiliza lenguaje visual del hero
- CTAs alineados horizontalmente entre cards con `flex` + `margin-top: auto`.

### Copy de sección valor
- Subtítulo actualizado para incluir bloqueo (diferencial operativo):
  - `Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`

### Motion mid-glow — móvil en 1 columna (abr 2026)
- **Problema:** con grid **2×2** en escritorio, las rutas `tevsys-home-mid-bubbles-a` / `-b` recorren el **perímetro** del bloque (SML / Evidencia en esquinas). En **móvil** las cards van en **una columna**: gran parte del recorrido lateral queda **fuera** de la pila visual.
- **Solución:** keyframes dedicados **`*-mobile`**: posición de fondo con **X** ~centro y **Y** variando a lo largo del stack; segunda capa (`::before`) con ruta y fase distintas; duraciones **92s** / **118s**, `linear` (márgenes + centro).
- **Docs:** `CHANGELOG-TEVSYS.md` § Motion iteración 15–16; `MOTION_HOME_TEVSYS_HANDOFF_IA.md` filas E1/E2; este archivo (tabla `global.css` arriba).

---

## Pendientes abiertos

1. Decidir ajustes finos de encuadre/contraste para visuales de formulario por plan.
2. Crear página de manual y añadir enlace en footer.

---

## Actualización de sesión (copy + documentación)

### Cambios aplicados hoy

- `src/pages/index.astro`
  - Línea bajo subtítulo de valor (versión sobria):
    - `Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`
  - `HyperClose` simplificado:
    - `Si estás bloqueado o en un día OFF, cualquier intento de operar se cierra al instante.`
  - `SML` con cierre orientado a flexibilidad:
    - `Además, puedes definir límites por día y semana e incluir días OFF completos cuando no quieras operar.`
  - `Evidencia verificable` con redacción más limpia y cierre de trazabilidad:
    - `... Cada cierre, cada bloqueo y cada rotación queda registrado.`

- `src/pages/company/contact.astro`
  - Primera bullet con mención a días OFF:
    - `También puedes marcar días OFF (por ejemplo, lunes o viernes) para proteger tu operativa cuando decides no estar en mercado.`
  - Tips mantenidos en 3 ítems para reducir carga.

### Registro de textos previos de HyperClose (referencia)

1. `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos. Y no podrás reintentarlo hasta la siguiente rotación automática (diaria o semanal).`
2. `Protección reactiva instantánea: cierre en milisegundos si el usuario bloqueado intenta abrir una operación. No es un "cierre rápido"; es cierre antes del siguiente tick.`

### Pendientes pactados para mañana (estado)

1. **HyperClose:** ✅ Resuelto. Copy final de card y micro-página alineado en cierre milisegundos + trazabilidad.
2. **SML:** ✅ Resuelto. Copy corregido a funcionamiento real (ampliación de margen 5-25, mínimo 75% protegido).

---

## Actualización técnica reciente (micro-páginas + flujo sin fricción)

### Archivos nuevos
- `src/pages/features/precision.astro`
- `src/pages/features/hyperclose.astro`
- `src/pages/features/sml.astro`
- `src/pages/features/evidencia.astro`

### Archivos actualizados
- `src/pages/index.astro`
  - Las cards de valor ya no apuntan a contacto directo (salvo iteraciones antiguas); ahora apuntan a sus micro-páginas.
  - Card 1 reforzada con validación en 5 brokers.
  - Card HyperClose actualizada con núcleo completo (milisegundos + trazabilidad + días OFF).
- `src/pages/company/contact.astro`
  - Añadido soporte del parámetro `feature` además de `origin` y `plan`.
  - Flujo `flow=demo` ahora puede heredar contexto por `feature`.

### UX aplicada
- Sección "Qué puedes comprobar" con enlaces subrayados.
- Interacción visible:
  - color base blanco
  - hover amarillo
  - cursor mano
  - foco accesible para teclado (`:focus-visible`)
- Cada enlace lleva a detalle por ancla dentro de la misma micro-página.

### Nombres de commit (para trazabilidad)
1. `feat: crear micro-página de precisión y conectar card 1 con CTA contextual a demo`
2. `feat: hacer clicables las evidencias de precisión con hover amarillo y secciones ancla`
3. `copy: actualizar card HyperClose con cierre en milisegundos y trazabilidad completa`
4. `feat: extender micro-paginas de features (hyperclose sml evidencia) con enlaces de prueba y CTA a demo`

### Siguiente bloque recomendado
- Reemplazar "Demo rápida" placeholder por embed real (lazy-load) y mantener doble capa:
  - lectura rápida (comercial)
  - lectura técnica (acordeón o bloque expandible)

---

## Nota de proceso

Se trabajó con iteración visual continua (prueba-error controlado) para mantener coherencia de marca: negro + gris lineal + acento amarillo + iridiscente moderado.

### Nota de validación de entornos
- Referencia principal de despliegue: `tevsys-landiing.vercel.app`.
- `tevsys.io` puede mostrar retraso temporal frente al deploy por DNS/CDN/SSL.
- Protocolo: validar primero en Vercel y confirmar después en dominio oficial.

---

## Actualización reciente (copy final por micro-página + piloto video)

### Estado de avance
- Pipeline de video validado end-to-end en `HyperClose` (archivo en `public/videos/features/hyperclose-demo.mp4`).
- Estructura y jerarquía unificadas en micro-páginas:
  - título grande
  - hook con punto amarillo (estilo card)
  - explicación
  - detalle técnico / transparencia

### Ajustes principales aplicados
- `HyperClose`:
  - Título refinado: `HyperClose: cuando tu disciplina falla, HyperClose no.`
  - Acento amarillo en `no.` y subtítulo técnico con punto amarillo.
- `Precisión`:
  - Hook de apertura con `0,06%` destacado.
  - Transparencia de escenarios extremos con `~0,39%` destacado.
  - Reordenado a patrón: título -> hook -> detalle.
- `SML`:
  - Mensaje corregido al funcionamiento real: ampliar margen, no “elegir cuánto proteger”.
  - Hook final: 5%-25% y mínimo 75% protegido.
- `Evidencia`:
  - Copy final: `aquí no hay "creemos"` + `Lo que no se puede demostrar, no cuenta.`
  - Referencia explícita a panel, logs y reporte oficial.

### Commits de esta ronda (referencia)
1. `style: mejorar jerarquia visual del titulo de HyperClose sin cambiar el mensaje`
2. `style: mejorar legibilidad del titulo HyperClose con acento solo en no`
3. `copy: alinear subtitulos de micro-paginas al estilo de cards y añadir transparencia de casos extremos en precision`
4. `copy: ajustar transparencia de casos extremos en precision y resaltar ~0,39 en amarillo`
5. `style: alinear jerarquia de precision con hyperclose (titulo -> hook con punto -> detalle)`
6. `copy: aplicar version final de evidencia verificable con hook demostrable y trazabilidad clara`
7. `copy: aplicar version final de SML en micro-pagina con hook de control 5-25 y enfoque en conservacion`
8. `copy: corregir mensaje SML a ampliacion de margen (5-25) y minimo 75 protegido`
9. `style: mejorar legibilidad del hook SML con mas margen y aire visual`

### Actualización 31/01/2026 — Guía de logs en vídeo + estilo unificado

**Precisión:**
- Integrado `precision-logs-guide.mp4` en sección «Sin humo: todo queda registrado».
- Enlace con badge: `Ir a guía de logs VIDEO` (mismo patrón que «Ir a demo del cierre»).
- Vídeo sin audio (instructivo, overlays de texto suficientes).

**Estructura unificada Precisión / HyperClose:**
- Ambas usan: título → hook con punto → detalle → bloques proof con enlace amarillo + badge VIDEO donde aplica.
- HyperClose: 3 bloques (Cierre inmediato, Semáforo, Día OFF) con mismo patrón de enlaces.

### Siguiente bloque operativo
- Sustituir videos provisionales por versiones finales (40s) siguiendo:
  - `docs/GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md`
- `precision-demo.mp4` (demo cierre real) pendiente de grabar.
- Mantener coherencia overlay -> CTA final en cada micro-página.

---

## Actualización Mar 2026 — Precisión y HyperClose cerrados

**Estado extendido 25–26 Mar 2026:** `CHANGELOG-TEVSYS.md` **§58** (hero unificado, galería MT5 HyperClose, 71 operativas, HTML redactado).

### Precisión
- **Vigente:** demo principal **100k** `evidencia-100k-perdida.mp4` en **hero**; volatilidad + cuenta pequeña + logs; **59** operativas; orden «Qué puedes comprobar» (resultados al final).
- *Histórico:* `precision-demo.mp4` (1 min 7 s) como demo principal; 50 operativas en una fase anterior.

### HyperClose
- **Vídeo:** metraje **2:23** (§57.3). **Página:** hero, hook sin cuenta/broker, acordeón galería **6** + HTML `evidencia-hyperclose-demo-historial-transacciones.html` + nota MT5/HTML.
- **PNG informe:** pendiente en repo — nombres §58.2.
- Acordeón modales 3 niveles: `hyperclose-modal-01/02/03-*.png`.
- Día OFF: vídeo + 5 capturas (pendiente renovar captura 1 — `AGENDA_GABI`).

### Assets añadidos
- `public/videos/features/precision-demo.mp4`, `precision-demo-volatilidad.mp4`
- `public/videos/features/hyperclose-demo.mp4`
- `public/images/evidence/hyperclose-modal-01-sistema-bloqueado.png`, `-02-advertencia.png`, `-03-advertencia-final.png`

---

## Actualizacion operativa - Mapa de evidencia (micropaginas)

**Fecha:** 31/01/2026  
**Objetivo:** roadmap rapido, mantenible y consistente en las 4 micropaginas de features.

### Archivos implicados

- `src/pages/features/precision.astro`
- `src/pages/features/hyperclose.astro`
- `src/pages/features/sml.astro`
- `src/pages/features/evidencia.astro`

### Implementacion aplicada

1. Seccion `Mapa de evidencia (plan de publicacion)` en las 4 micropaginas.
2. Tabla uniforme con columnas: Bloque / Formato previsto / Estado / Asset esperado.
3. Badges de estado para lectura rapida.
4. Refactor de mantenimiento: estados controlados por `data-status`.

### Estados activos

- `data-status="pending"` -> Pendiente
- `data-status="final"` -> Pendiente final
- `data-status="pilot"` -> Piloto cargado

### Regla de mantenimiento (equipo futuro)

Cuando cambie el avance de una evidencia:

1. Actualizar texto visible del estado.
2. Cambiar valor de `data-status`.
3. Mantener nombre de asset esperado alineado con archivo real.
4. Preservar misma estructura de tabla en las 4 paginas.

### Nota de alcance

- Bloque pensado como roadmap operativo interno de avance rapido.
- Impacto UX: sin cambio funcional para usuario final; mejora de lectura del estado.

### Siguiente fase prioritaria

Auditoria movil completa de `index`, `contact` y `features/*` para resolver incoherencias visuales frente a desktop.

---

## Cierre de mini auditoria movil (iteracion actual)

### Objetivo de la iteracion

Mejorar legibilidad y consistencia visual en móvil sin romper desktop ni reescribir arquitectura.

### Cambios aplicados por archivo

- `src/components/sections/heros/HomeHeroSection.astro`
  - Ajuste responsive para dar más protagonismo a la imagen principal en móvil.
  - Centrado del bloque visual y del texto `Trading Edge Verification System`.
  - Menor fricción visual en el primer pantallazo móvil.

- `src/pages/features/precision.astro`
  - Hook actualizado: se elimina `Hecho.`.
  - Ajuste CSS móvil del hook para lectura más natural y menos cortes forzados.

- `src/pages/index.astro` (card SML)
  - Copy compactado en 3 bloques cortos:
    1) activación + rango 5%-25% (mínimo 75% protegido),
    2) beneficio operativo (conservar lo ganado),
    3) convivencia con límites y días OFF.

### Impacto funcional/UX

- No se cambia flujo de navegación.
- Mejora de claridad en móvil (lectura más rápida, menos ruido visual).
- Reforzada percepción de producto serio y coherente entre dispositivos.

### Commits de referencia de este tramo móvil

1. `fix(hero-mobile): aumentar protagonismo y centrado de imagen en pantallas moviles`
2. `copy(mobile): simplificar hook de precision y compactar texto SML en home`
3. `fix(precision-mobile): mejorar legibilidad del hook 50 operativas 0,06 en pantallas moviles`

---

## Actualización técnica de tramo (evidencia + gobernanza de documentación)

### 1) `src/pages/features/precision.astro`

Cambios aplicados al bloque de `Resumen estadístico`:
- Hook ajustado de `50` a `48` operativas.
- Sustitución de párrafo genérico por bloque KPI de lectura rápida.
- Se añadieron dos enlaces de capa técnica:
  - resumen técnico (`PDF`)
  - dossier completo (`PRÓXIMAMENTE`)
- Se añadió nota explícita de protección de IP (sin fórmula propietaria).
- Se añadieron estilos auxiliares:
  - `.proof-kpis`
  - `.proof-links-row`
  - `.proof-note`

### 2) Validación de evidencia 4.33 (proceso)

- Se verificó que `ReportHistory-511090223.html` local contiene:
  - bloque de transacciones del evento,
  - total de bloque `302.70`,
  - balance final `95 633.94`.
- Se estableció patrón visual para capturas públicas:
  - resaltar inicio/fin de evento,
  - resaltar total y balance final,
  - pie corto de validación.

### 3) Política de publicación de pruebas

- Público: evidencia redacted y comprensible.
- Bajo demanda: más detalle técnico.
- NDA: evidencia completa por alcance.

Nota: la documentación operativa de custodia (`MASTER/MIRROR/SNAPSHOT`) y la ruta de tratamiento de empresas se mantiene en entorno interno del proyecto para no mezclar material web con procedimientos sensibles.

---

## Actualización técnica - Operativa 49 en `precision` (zoom + limpieza de bloque)

### Archivo principal tocado
- `src/pages/features/precision.astro`

### Cambios aplicados
1. **Galería de evidencia funcional (7 capturas reales)**
   - Se conectan las 7 imágenes redacted en `public/images/evidence/`.
   - Se valida nomenclatura exacta y carga correcta en frontend.

2. **Zoom por clic en cada captura**
   - Cada imagen se envuelve en enlace para abrir tamaño completo.
   - Se añade clase de interacción visual (`cursor: zoom-in`) y foco accesible.

3. **Indicador de uso**
   - Texto añadido sobre galería:
   - `Haz clic en cada captura para verla en tamaño completo.`

4. **Refactor UX de `Resumen estadístico`**
   - Se mantiene solo 1 CTA técnico en abierto: `Ver resumen técnico (PDF)`.
   - Se retira CTA `Ver dossier completo` de este bloque para evitar sobrecarga.
   - Se compacta texto de IP a versión corta y clara.

5. **Nota semántica visible (estado panel)**
   - Nota final fuera de acordeón:
   - `Nota: en este panel, "Bloqueado hasta" equivale a "Protección activa hasta".`

### Incidencia corregida durante implementación
- **Error de carga de imágenes por doble extensión**:
  - Detectado en carpeta pública como `*.png.png`.
  - Corregido a `*.png` para resolver 404/rotura visual.

### Resultado
- Evidencia visual usable (no solo decorativa).
- Mejor lectura del bloque estadístico (menos ruido, más foco).
- Menor confusión semántica en mensaje de estado del panel.

---

## Landing HyperClose + Precisión + Evidencia + home (25–26 Mar 2026)

**Referencia:** `CHANGELOG-TEVSYS.md` **§58**.

| Archivo | Cambios |
|---------|---------|
| `src/pages/features/hyperclose.astro` | Demo hero; acordeón galería 6 (MT5 + historial); HTML redactado; nota MT5/HTML; enlace suave Evidencia; estilos galería. |
| `src/pages/features/precision.astro` | Hero demo 100k; compactos reforzados; copy volatilidad/cuenta pequeña; orden “Qué puedes comprobar”; hook **59** operativas. |
| `src/pages/features/evidencia.astro` | Hero demo; **59** en auditoría; enlace HTML HyperClose; `#evidencia-demo:target`. |
| `src/pages/index.astro` | **59** operativas en copy visible. |
| `public/docs/evidencia-hyperclose-demo-historial-transacciones.html` | Historial MT5 redactado (demo HyperClose). |
| `public/images/evidence/` | Carpeta + `.gitkeep`; **pendiente** 6 PNG nombres §58.2. |

**Proyecto TGP:** `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` §10–11; `TGP_V11_CHECKPOINT_PRODUCCION.md`; `CHECKPOINT_V11_SESION_25MAR2026_ESSENTIAL_ADVANCED.md` §9.

---

## SEO y Vercel Analytics (Mar 2026)

### Archivos tocados
- `src/config/settings.js`, `src/pages/company/contact.astro`, `public/robots.txt`, `package.json`, `src/layouts/Base.astro`

### SEO
- Meta global: title y description con keywords (protección capital, límites automáticos MT5, **59** operativas).
- contact.astro: meta propia; corregido título heredado de plantilla Odyssey.
- robots.txt: Allow all, sitemap tevsys.io.

### Vercel Web Analytics
- Paquete `@vercel/analytics`, `inject()` en Base.astro.
- Activación en Vercel dashboard → Analytics.

### Google Search Console + sitemap estático (Mar 2026)
- Verificación: `public/google644b0bf8f5617256.html`.
- Sitemap: `public/sitemap.xml` (11 URLs). robots.txt apunta a sitemap.xml.
- Indexación solicitada para home y páginas clave.

### Core Web Vitals / optimización imágenes (Mar 2026)
- Hero: fetchpriority, preload WebP, width/height. Cards/planes: lazy, picture WebP.
- Script `scripts/optimize-images.js` genera WebP (prebuild antes de build).
- Meta tag verificación Search Console en BaseHead (respaldo).
- WebP ampliado: ~40 imágenes (evidencia, hyperclose, precision, contact, logo). picture en toda la web.
- Doc: `docs/PERFORMANCE_IMAGENES_TEVSYS.md`. CHANGELOG §48.
