# Contenido web tevsys landing (actualizado)

Documento de contenido/copy actual para revisión de equipo.

---

## SEO y analytics (Mar 2026)
- **Meta global:** `src/config/settings.js` — title, description, keyword "disciplina en el trading".
- **contact.astro:** Título propio ("Contacto y demo | tevsys"); descripción con keywords.
- **robots.txt:** `public/robots.txt` — Allow all, sitemap.xml.
- **Sitemap:** `public/sitemap.xml` (estático, 11 URLs). Search Console: sitemap.xml enviado.
- **Search Console:** Verificación HTML file. Indexación solicitada para home y páginas clave.
- **Schema:** JSON-LD SoftwareApplication en home.
- **Vercel Web Analytics:** `@vercel/analytics` en `Base.astro`. Métricas en Vercel dashboard.
- **Core Web Vitals:** WebP, lazy load, fetchpriority hero, preload LCP. Doc: `SEO_ANALYTICS_TEVSYS.md`, `PERFORMANCE_IMAGENES_TEVSYS.md`.

---

## Header
- **Logo:** `tevsys` en óvalo (sin estrella)
- **Navegación:** Inicio | Empresas | Contacto
- **Tipografía (abr 2026):** **Inter** en barra y pastilla (`Header.astro`, `BrandOval.astro`), alineado al hero.
- **"Acceso" eliminado** (sin destino propio hasta demo descargable)
- **Empresas:** enlaza a `/company/empresas` (micro-página canal B2B)
- **Motion (abr 2026, solo home + tema oscuro):** capa decorativa `tevsys-header-scanner` — barrido **gris** (resaltado alineado móvil/escritorio donde aplica), sin sincronía con el resto de la portada. **Iteración abr 2026:** intensidad/opacidad del escáner **reducida** para no competir con el hero. Detrás de las **4 cards**: `.tevsys-home-mid-glow` — **gris instrumento**, doble burbuja con animaciones **92s** y **118s** (`::before`; `linear`; mayoría del tiempo en márgenes); **escritorio:** trayectoria tipo **perímetro** del bloque 2×2 (incl. **SML** y **Evidencia**); **móvil (1 columna):** mismas duraciones con keyframes **`*-mobile`** para que el brillo se mueva **detrás de la columna** de cards. Detalle: `MOTION_HOME_TEVSYS_HANDOFF_IA.md`, `CHANGELOG-TEVSYS.md` § Motion (iteración 15–16 abr), `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`.

---

## Hero
- **H1 (actual, abr 2026):** `MT5: disciplina automatizada. Tú pones los límites, tevsys los blinda, no negocia y lo registra.`
- **Línea de contexto (debajo H1):** `Control de riesgo y límites en tu cuenta MT5 — automatizado y registrado.` (clase `hero-context-line`; ancla producto para quien no asocie solo “disciplina” con trading/MT5).
- **Tipografía:** **Inter** en el bloque hero.
- **Tagline:** `Where precision meets the edge`
- **Punto de tagline:** amarillo (dot + badge)
- **Botón:** `Descargar demo →` (ámbar marca)
- **Disponibilidad:** `Disponible en MT5 · Próximamente: más plataformas`
- **Imagen:** mano robótica + candado (`mano robotica central web.png` / WebP). Tratamiento CSS: filtros/viñeta/radio imagen; stack home con viñeta y un solo redondeo exterior (`CHANGELOG` + `HOME_HERO_CARDS_ITERACION_ABR2026.md`).
- **Reflexión diseño histórica:** `REFLEXION_DISENO_HERO_FOOTER_MAR2026.md` (copy anterior); iteración actual: `HOME_HERO_CARDS_ITERACION_ABR2026.md`.
- **Texto bajo imagen:** `Trading Edge Verification System`

### Marco de copy del hero (referencia abr 2026)
- **Titular + MT5:** ver H1 arriba.
- **Contexto temprano:** línea `hero-context-line` (cuenta MT5, automatizado, registrado).
- **Deseo / marca:** `Where precision meets the edge`
- **Acción:** `Disponible en MT5 · Próximamente: más plataformas` + CTA `Descargar demo →`

---

## Sección principal de valor

### Título
`¿Cuánto dinero has perdido por no parar a tiempo?`
- **Jerarquía (Mar 2026):** clamp(1.65rem, 3.5vw, 2rem), font-weight 700 — más prominente que el párrafo

### Subtítulo (feature-section__hook)
`Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`
- font-size 1rem, opacity 0.92 — claramente secundario

### Línea de trazabilidad (credibilidad)
`Trazabilidad completa: logs, panel y reporte oficial MT5.`

### Línea de apoyo (mecanismo)
`Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`

### Cards (4)
- **UX clicable (Mar 2026):** Flecha "→" esquina inferior derecha, hover marcado (borde amarillo, sombra, elevación). Opción C híbrido.
- **Diseño abr 2026 (confirmado en código):** Inter en la sección; bloque de texto con gris oscuro (~9% luminosidad); zona ilustración con fondo `var(--theme-bg)`; tipografía cuerpo reforzada (peso/color); card 1 puede servirse solo en PNG mientras se regenera WebP. Detalle: `HOME_HERO_CARDS_ITERACION_ABR2026.md`.
- **Motion detrás (15–16 abr 2026):** capa decorativa `.tevsys-home-mid-glow` (ver `global.css`) — **no** altera layout ni textos; atmósfera gris premium; cards siguen siendo el foco. En **móvil**, rutas de animación distintas al escritorio para que el resplandor recorra la **pila vertical** detrás de las cards.

#### 1) 0,06% error medio
- Hook (un solo `feature-card__hook`, abr 2026): `¿Has sentido que tu Stop Loss te cerró en otro planeta? — tevsys te lo cuenta todo.`
- Texto: `Ajuste en tiempo real: volatilidad • spread • slippage • comisiones` + `71 operativas documentadas. Validado en 5 entornos de ejecución.` (sync `index.astro`)

#### 2) HyperClose
- Hook: `La diferencia entre querer parar y no poder seguir.`
- Texto actual: `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos, antes del siguiente tick. Cada intento queda registrado con trazabilidad completa, también en días OFF.`
- Texto previo inmediato (referencia): `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos. Y no podrás reintentarlo hasta la siguiente rotación automática (diaria o semanal).`
- Texto técnico anterior (referencia): `Protección reactiva instantánea: cierre en milisegundos si el usuario bloqueado intenta abrir una operación. No es un "cierre rápido"; es cierre antes del siguiente tick.`

#### 3) SML — Smart Money Lock
- Hook: `No es obligatorio. Es una recompensa.`
- Texto 1: `Lo activas cuando tú quieras. Amplía el margen entre un 5% y un 25% (mínimo 75% protegido).`
- Texto 2: `Mantienes tu operativa diaria, pero con una capa extra para conservar mejor lo ganado.`
- Cierre actual: `Además, convive con tus límites diarios/semanales y con días OFF.`

#### 4) Evidencia verificable (home card — jerarquía abr 2026)
- Hook: `No confíes: Comprueba.`
- Caso: `Caso real: 100.000 € · 20 lotes · Apertura Wall Street.`
- Dato: `Error al cierre: 0,0072 %` (accent amarillo en el número, clase `feature-card__evidence-stat-value`)
- Medios: `Vídeo del cierre · Informe MT5 · Historial de transacciones.`
- Cierre: `Todo descargable. Todo verificable.`
- Whisper: `El desafío está servido. Para ti o para quien te audite.`
- Micropágina `/features/evidencia` mantiene su propio hero y listas; esta es solo la card home (`index.astro`).

---

## Nueva sección (template) — Planes

### Título
`Elige tu cuenta`

### Subtítulo
`Selecciona el plan que mejor encaja contigo. Luego ajustamos contigo los detalles.`

### Planes
- **Essential:** `Elegir Essential` (formulario). Si `checkoutEssentialReady: true` → `Comprar Essential` + `Probar demo` (Lemon checkout + formulario). Interruptor en `settings.js`.
- **Advanced** → botón `Elegir Advanced`
- **Pro** → botón `Elegir Pro`

**Flujo actual:** Essential depende del interruptor Lemon; Advanced/Pro abren contacto con plan en URL (`?plan=...`). Ref: `ESTADO_WEB_Y_LEMON_TEVSYS.md`, CHANGELOG §44.

**Estado visual actual (cards de planes):**
- Essential: `/assets/images/plans/essential-card.png`
- Advanced: `/assets/images/plans/advanced-card.png`
- Pro: `/assets/images/plans/pro-card.png`

**Estado visual actual (formulario por plan):**
- El bloque visual izquierdo cambia por plan con imagen sin barra superior y branding sutil:
  - Essential: `/assets/images/plans/essential-form-v4.png`
  - Advanced: `/assets/images/plans/advanced-form-v4.png`
  - Pro: `/assets/images/plans/pro-form-v4.png`
- Nota técnica: nombres `*-form-v4` usados para evitar caché obsoleta en CDN/navegador.

**Título contacto actual:** `Completa tu acceso a tevsys`

**Cards planes (home, Ene 2026):**
- **Essential:** Demo/beta disponible. Límite diario, precisión milimétrica y HyperClose para validar operativa real.
- **Advanced:** En Advanced ofrecemos todo lo de Essential, además: protección configurable toda la semana, SML y días OFF. En desarrollo — lista de espera.
- **Pro:** En Pro ofrecemos todo lo de Advanced, además: drawdown y estructura completa para capitales más altos. En desarrollo — lista de espera.

**Bullets por plan (acumulativos, Ene 2026):**
- **Essential:** 1) Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF. 2) Límite diario, precisión milimétrica y HyperClose incluidos. 3) Respuesta en menos de 24h con los siguientes pasos. 4) [Empresas o contacto corporativo](/company/empresas) *(link a micro-página)*
- **Advanced:** 1) En Advanced ofrecemos todo lo de Essential, además: 2) Protección configurable toda la semana + SML para operativas avanzadas. 3) Puedes marcar días OFF para proteger tu operativa. 4) Horarios de mercado y noticias (mejorados): en fase de desarrollo. 5) [Empresas o contacto corporativo](/company/empresas) *(link a micro-página)*
- **Pro:** 1) En Pro ofrecemos todo lo de Advanced, además: 2) Para capitales más altos: drawdown y estructura completa. 3) Horarios de mercado y noticias (con eventos personalizados): en fase de desarrollo. 4) [Empresas o contacto corporativo](/company/empresas) *(link a micro-página)*

**Link empresas:** Enlaza a `/company/empresas` (micro-página canal B2B). Ref: `CHANGELOG-TEVSYS.md` §29, §30.

**Flujo Acceso** (`?flow=acceso`): bullets específicos — 1) Essential listo para probar. Advanced y Pro en desarrollo — lista de espera. 2) Respuesta en menos de 24h. Te orientamos según tu perfil. 3) Precisión y HyperClose validados con operativas reales. Días OFF y configuración flexible de toda la semana. 4) Empresas. Imagen Essential (bronce) con badge "DEMO". Redirect `/company/contact` → `?flow=acceso`. Ref: `ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md`.

**Formulario contacto — intros desde features (flow=demo):**
- Precision, HyperClose, SML, Evidencia: "Ya has visto [X] en esta página. Rellena el formulario y te enviamos los enlaces para profundizar y los pasos para acceder a la demo."

**Formulario contacto (flujos Advanced/Pro):**
- Checkbox debajo Experiencia: "Sí, avísame cuando [Advanced/Pro] esté disponible." — default marcado. Formspree: `AvisarCuandoDisponible: Sí|No`. Caja con borde ámbar.
- Nota debajo imagen: "Advanced/Pro en desarrollo. La demo disponible ahora es Essential." (cursiva).
- Thank-you: bloque destacado "Te añadimos a la lista de espera de Advanced/Pro. Mientras tanto, la demo disponible es Essential."

**Formulario lista de espera (flow=lista):**
- Origen: link "escríbenos para apuntarte" en `/precios` (amarillo, clicable).
- Título: "Lista de espera Advanced y Pro". Intro: "Apúntate a la lista de espera. Te avisaremos por email cuando Advanced y Pro estén disponibles."
- Select: "¿En qué plan estás interesado?" (Advanced / Pro / Ambos). Formspree: `Flow: lista`, `Plan: advanced|pro|ambos`.
- Thank-you: "Te hemos añadido a la lista de espera. Te avisaremos por email cuando Advanced y Pro estén disponibles."

**Contacto = Acceso:** Nav Contacto → `?flow=acceso`. allowNoPlan para flow acceso, demo y lista.

---

## Micro-página Empresas (`/company/empresas`)

- **Nav:** Empresas visible en header (Inicio | Empresas | Acceso | Contacto). Accesible desde home y todas las micro-páginas de features.
- **Hero:** feature-kicker "Canal empresas", h1 "Empresas: otro canal, otro trato."
- **Hook (estilo micropáginas):** "Estamos en fase de desarrollo y validación del canal empresas." — cursiva, negrita, punto amarillo.
- **Copy:** Trato especial; capital distinto a retail; requiere reuniones; definimos oferta contigo. "Si te interesa, déjanos tus datos y te avisaremos cuando estemos listos."
- **Formulario:** Empresa (req), Email corporativo (req), Rol (opt), Objetivo (opt), Comentario (opt). Formspree. Thank-you: `/company/empresas-thank-you`.
- **Fallback:** "O escríbenos directo: info@tevsys.io"
- **Estilo:** Fondo formulario #06080d, borde ámbar, campos con borde ámbar. Ref: `CHANGELOG-TEVSYS.md` §30, `RUTA_EMPRESAS_TRATAMIENTO_EVIDENCIAS_TEVSYS.md`.

---

## Bloque fundador
- Claim: `tevsys no es el sueño de un inversor. Es la respuesta de un trader.`
- Cita de Gabi (se mantiene)
- Firma: `— Gabi, fundador de tevsys`

---

## Estado actual
- Home funcional y coherente visualmente.
- Cards 1-4 con imagen personalizada integradas.
- Planes montados en modo plantilla para test/iteración.
- Nota operativa: validar cambios primero en `tevsys-landiing.vercel.app`; `tevsys.io` puede reflejar con retraso por sincronización de dominio/CDN.

---

## Micro-páginas de features (estado actual)

- URLs activas:
  - `/features/precision`
  - `/features/hyperclose`
  - `/features/sml`
  - `/features/evidencia`
- Las 4 cards de valor enlazan ahora a su micro-página correspondiente.
- Estructura actual por micro-página:
  - Hero + hook
  - Bloque "Demo rápida" con embed de video MP4
  - "Qué puedes comprobar" con enlaces clicables
  - Secciones de detalle por anclas
  - CTA final a contacto con `?feature=...&flow=demo`
- Patrón visual aplicado:
  - Links subrayados, color blanco y hover amarillo.
  - Jerarquía consistente: título -> hook con punto amarillo -> explicación técnica.

### Copy de apertura por micro-página (actual)
- `HyperClose`:
  - Título: `HyperClose: cuando tu disciplina falla, HyperClose no.`
  - Hook: `• Cierre en milisegundos. Bloqueo hasta la siguiente rotación.`
- `Precisión`:
  - Título: `Precisión de cierre: donde configuras, cerramos.`
  - Hook: `• 71 operativas documentadas. 0,06% de error medio en condiciones normales.`
  - Transparencia: incluye escenarios extremos documentados con desviación puntual hasta `~0,39%`.
- `SML`:
  - Título: `SML: protege parte de lo ganado sin frenar tu operativa.`
  - Hook: `• Actívalo cuando quieras. Decide cuánto ampliar el margen: del 5% al 25% (mínimo 75% protegido).`
  - Disponibilidad actual: validación para Advanced/Pro (lista de espera).
- `Evidencia`:
  - Título: `Evidencia verificable: aquí no hay "creemos".`
  - Hook: `• Lo que no se puede demostrar, no cuenta.`
  - Hook demo: `100.000€ · 20 lotes · Apertura Wall Street · Error: 0,0072%`
  - Soporte: vídeo demo 1 min 41 s (con audio), informe MT5 (5 capturas), HTML transacciones descargable.

### Estado actual Precisión (Mar 2026 — actualizado 26 Mar 2026)
- **Demo rápida (100k):** `evidencia-100k-perdida.mp4` (1 min 41 s). **Hero** alineado con HyperClose/Evidencia: `.feature-demo--hero` + `.demo-video--hero` (~52rem, halo dorado). Secundarios: `.demo-video--compact` ~31rem + sombra embed.
- **Volatilidad:** hook *Operativa documentada:* ±1,50% / +1,83% / contexto volatilidad; nota de pie ajustada (protección vs “misma precisión” genérica).
- **Cuenta pequeña:** sección con **título + vídeo embebido visible** (no solo `<details>`).
- **Qué puedes comprobar:** orden — demo 100k, logs, alta volatilidad, cuenta pequeña, **resultados al final**.
- **71 operativas** documentadas (hook; fuente `PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3).
- Primera evidencia y Semáforo enlazan a la misma demo; scroll + resaltado al llegar.

### Estado actual HyperClose (Mar 2026 — actualizado 26 Mar 2026)
- **Vídeo principal:** `hyperclose-demo.mp4` — metraje objetivo **2:23** (§57.3 overlays 1–11, 13–17). **Export interno** puede llamarse *Video Project 090920*; en repo el binario debe seguir siendo **`hyperclose-demo.mp4`** (ruta fija en `hyperclose.astro`). **8 abr 2026:** reemplazo con reedit **espejo + Manrope**; si el vídeo “desaparece” en web, comprobar que el archivo no se renombró sin tocar Astro — ver `CHANGELOG-TEVSYS.md` **§63**.
- **YouTube (lista `/videos-cierre-youtube`):** tercera tarjeta reservada para **esta misma demo** (enlace pendiente hasta publicar en canal); **no** confundir con parte 1/2 del artículo Market.
- **Página:** h2 con duración; hook **sin** cuenta ni broker; **sin** nota pública de audio bajo el embed.
- **Acordeón “Compruébalo tú mismo”:** galería **6** capturas (informe MT5 ×5 + historial día MT5); enlace **HTML** `evidencia-hyperclose-demo-historial-transacciones.html`; línea *¿Primera vez con las pestañas?* → Evidencia (demo 100k); nota **MT5 vs HTML** (cierre concreto vs cierres posteriores HyperClose). **PNG:** pendiente en `public/images/evidence/` — ver `CHANGELOG-TEVSYS.md` **§58.2**.
- **Cierre inmediato y Semáforo:** enlazan a la demo. Acordeón modales 3 niveles.
- **Día OFF:** `hyperclose-dias-off-demo.mp4` (51 s) + 5 capturas. **Pendiente agenda:** sustituir captura 1 (día OFF sin protección previa) cuando haya material nuevo.

### Estado actual Evidencia (26 Mar 2026)
- **Demo rápida:** `evidencia-100k-perdida.mp4` (1 min 41 s, con audio). **Hero** como Precisión/HyperClose. Cuenta 100k nueva, 20 lotes GER40, cierre por límite -1% = -1.007,20€, error 0,0072%. Apertura Wall Street.
- **Hook demo:** `100.000€ · 20 lotes · Apertura Wall Street · Error: 0,0072%`
- **"Qué puedes comprobar":** demo, **operativa 4.56 Essential (100 lotes, 95 € precisión)**, informe MT5, transacciones, logs, auditoría.
- **Operativa 4.56 — Caso extremo Essential:** Bloque nuevo. Subtítulo: "Nuestra versión Essential. Con el caso más extremo. Evidencia por capturas e informe oficial MT5." 100 lotes GER40, límite +4%, cierre +4.095,10 € (desviación 95 €). Acordeón "Ver capturas (7)": Resumen, P&L, Long & Short, Symbols, Riesgos, Historial, Panel.
- **Imágenes 4.56:** `evidencia-4.56-01-resumen.png` a `evidencia-4.56-07-panel.png`.
- **Sección "Informe oficial MT5":** acordeón con 5 capturas sin editar (Summary, P&L, Long & Short, Symbols, Risks).
- **Sección "Historial de transacciones":** acordeón con captura editada (zonas clave en amarillo) + enlace HTML 100k + **párrafo** con enlace al HTML redactado **demo HyperClose** y vuelta a `/features/hyperclose#hyperclose-demo`.
- **Sección "Auditoría":** **65** operativas documentadas, incluyendo caso extremo 100 lotes (operativa 4.56). Hook "MetaTrader documenta. tevsys ejecuta."
- **Enlace logs:** Guía visual de logs en MT5 → `/features/precision#precision-logs-guide`
- **Card home:** "100.000€ · 20 lotes · Error: 0,0072%" + susurro "El desafío está servido. Para ti o para quien te audite."

### Estado actual SML (abr 2026)
- **Hero** + sección **panel en validación:** título `Así se ve hoy en el panel`, dos párrafos (concepto bonus ayer → margen hoy; DISPONIBLE vs 1‑CLICK), `<figure>` con `sml-panel-validacion-demo.png` + pie demo/validación.
- **Multigráfico** (hook dos líneas) + checklist + nota validación ampliada + CTA lista de espera.
- **Asset:** `public/images/evidence/sml-panel-validacion-demo.png` — captura demo fundador (carpeta **evidence**, no `assets/images/features`).

### Estado actual navegación y footer (31 Ene 2026)
- **Nav:** Inicio | Empresas | Contacto. "Acceso" eliminado.
- **Footer:** 4 columnas (Brand, Navegación, Producto, Legal). Frase indie más grande. Copyright con "Todos los derechos reservados."
- **Páginas legales:** /company/legal, /company/privacidad, /company/terminos (contenido mínimo, pendiente abogado).

### Pendiente inmediato
- SML: vídeo final según guía de producción.

---

## Pendientes para la próxima sesión

1. Vídeo ganancias 100k (+1.111€) como secundario en Evidencia.
2. Versión final de vídeo para `sml`.
3. Asesoramiento jurídico para contenido legal definitivo.

---

## Anexo interno de seguimiento

El roadmap de publicación de evidencias ya **no se muestra en la web pública**.

Seguimiento interno activo en:
- `docs/CARDS-NEXT-PHASE.md` (secciones 7, 8 y 9)
- `docs/CHANGELOG-TEVSYS.md` (decisiones y trazabilidad de cambios)

---

## Mini auditoria movil - resultado de la iteracion

### Mejoras aplicadas

- Hero home (`HomeHeroSection`):
  - Se incrementa protagonismo visual de la imagen robótica en móvil.
  - Se centra mejor el bloque visual y el subtítulo de marca bajo imagen.
- Micro-página de precisión:
  - Se elimina `Hecho.` del hook para evitar ruido.
  - Se mejora legibilidad del hook en móvil para evitar cortes estéticos incómodos.
- Home card SML:
  - Se compacta copy en 3 bloques cortos para escaneo más rápido en pantallas pequeñas.

### Resultado observado

- Mejor lectura en móvil sin perder mensaje de valor.
- Más consistencia visual entre desktop y móvil.
- Mayor sensación de producto cuidado (credibilidad percibida al alza).

---

## Actualización de tramo (cierre de sesión)

### `features/precision` (copy operativo actual)

- **H1 (abr 2026, dos líneas):** `Precisión de cierre.` / `Menos "casi": más cierre donde toca.` — comillas tipográficas en pantalla según CSS; acento visual en `casi` (`feature-title__accent`).

- **Multigráfico (todas las features, abr 2026):** encima del primer bloque demo (primer vídeo o equivalente en SML), bloque con punto amarillo (`feature-hook`), dos líneas: `Un gráfico para tevsys. Toda tu cuenta, protegida.` / `Los avisos de protección aparecen en todos tus gráficos abiertos.`

- Hook de apertura:
  - `71 operativas documentadas. 0,06% de error medio en condiciones normales.` *(26 Mar 2026; fuente MD operativas proyecto TGP)*

- Bloque `Resumen estadístico` (lectura rápida):
  - `71 operativas documentadas`
  - `0,06% de error medio en condiciones normales`
  - `5 brokers validados (real y demo)`
  - `2 casos extremos documentados aparte (0,29% y 0,39%)`

- Enlaces de capa técnica:
  - `Ver resumen técnico (PDF)`
  - `Ver dossier completo (PRÓXIMAMENTE)`

- Nota de transparencia/IP:
  - Se publican resultados verificables y trazabilidad.
  - No se publica fórmula propietaria de ajuste.

### Evidencias visuales (criterio de publicación)

- Evidencia pública mínima por caso:
  1. captura de panel,
  2. captura de transacciones del `ReportHistory`,
  3. captura de resumen del bloque (beneficio + balance final).

- Política de privacidad:
  - publicar solo versión `redacted` (sin nombre completo ni cuenta completa).

- Caso piloto validado en sesión:
  - Operativa `4.33` (`27/01/2026`) con trazabilidad completa en `ReportHistory-511090223`.

---

## Actualización de copy - `features/precision` (estado vigente)

### Resumen estadístico (versión simplificada)

**Objetivo de la sección:** lectura rápida + prueba inmediata, sin saturar.

- KPIs visibles:
  - `71 operativas documentadas`
  - `0,06% de error medio en condiciones normales`
  - `5 brokers validados (real y demo)`
  - `2 casos extremos documentados aparte (0,29% y 0,39%)`

- CTA público activo:
  - `Ver resumen técnico (PDF)`

- Mensaje IP (versión corta):
  - `Publicamos resultados verificables y trazabilidad. La fórmula propietaria no es pública.`

### Galería de evidencia operativa 49

- Texto guía visible:
  - `Haz clic en cada captura para verla en tamaño completo.`

- Nota semántica visible:
  - `Nota: en este panel, "Bloqueado hasta" equivale a "Protección activa hasta".`

### Guía de logs (actualización 31/01/2026)
- Vídeo integrado: `precision-logs-guide.mp4`
- Enlace: `Ir a guía de logs` + badge VIDEO
- Sin audio (texto en overlays)

### Actualización Mar 2026 — Demo y alta volatilidad
- **26 Mar 2026 (vigente):** Ver **«Estado actual Precisión»** en este mismo documento: demo principal = `evidencia-100k-perdida.mp4` en **hero**; volatilidad y cuenta pequeña en secciones propias; **65** operativas; orden de enlaces actualizado. Ref: `CHANGELOG-TEVSYS.md` **§58**.
- *Histórico (antes del hero unificado):* Demo principal era `precision-demo.mp4` (1 min 7 s). Volatilidad: `precision-demo-volatilidad.mp4`, 6 overlays (CHANGELOG §28.1).

### Criterio de publicación (recordatorio)

- `Dossier completo` no se presenta en abierto en este bloque.
- Queda reservado a flujo cualificado (interés real/empresa) según estrategia de capas de evidencia.
