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

## Paquete 30 abr 2026 — Operativas 80, micros Precisión/HyperClose, mirrors

**Resumen:** Sincronización del contador **80** operativas documentadas (fuente `PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3, repo TGP) en SEO, home, Precisión y Evidencia; ajuste de copy y formato en **Precisión** (nota extremos **−0,39%** con acento + cursiva); nuevo hero **HyperClose** (ventana sin atajos + lead de trazabilidad). Detalle técnico y lista de archivos: **`CHANGELOG-TEVSYS.md`** entrada **«Paquete 30 abr 2026 (II)»**.

### Contador y rutas tocadas
- `src/config/settings.js`, `src/pages/index.astro`, `src/pages/features/precision.astro`, `src/pages/features/evidencia.astro`.

### Micropágina Precisión (`/features/precision`)
- **H1:** `Precisión de cierre.` + `Menos "casi": más cierre donde toca.` (acento en *casi*).
- **Hook:** 97 operativas + 0,06% error medio (condiciones normales).
- **Transparencia extrema:** párrafo inmediato bajo intro — desviación máxima documentada **−0,39%** (formato signo + coma; cursiva en el porcentaje, coherente visualmente con el hook).
- **Manifiesto** bajo hero: misma línea de valor que otras features.

### Micropágina HyperClose (`/features/hyperclose`)
- **Hook:** `Cierre en milisegundos.` + `Hasta la siguiente ventana (día o semana), sin atajos.`
- **Lead:** cierre al instante si operas en bloqueo; constancia trazable para comprobar.

### Poda de densidad y otras iteraciones el mismo día
- **Home** (`index.astro`): manifiesto visible bajo **Elige tu cuenta** (alineado claim producto).
- **`/features/sml`:** poda de texto (fase 1 tramo superior + redundancias); evidencia 4.81 antes/después — ver **`CHANGELOG-TEVSYS.md`** bloques *Home + SML manifiesto* y *SML narrativa*.
- **Header + `/como-funciona`:** píldora nav, vídeo en dos partes, enlaces instalación — misma fecha en `CHANGELOG`.

### Docs internos actualizados en este repo
- `SEO_ANALYTICS_TEVSYS.md`, `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`, `CARDS-NEXT-PHASE.md`, `HOME_HERO_CARDS_ITERACION_ABR2026.md`, `PROMPT_RESUMEN_DEEPSEEK_VIDEOS_PRECISION_HYPERCLOSE.md`.
- **Motion / índice técnico header:** `MOTION_HOME_TEVSYS_HANDOFF_IA.md` §1.1 (tabla home vs micros); `CHANGELOG-TEVSYS.md` (entrada header ampliada); `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` (bloque *Complemento abr 2026 — header escáner*).

---

## Header
- **Logo:** `tevsys` en óvalo (sin estrella)
- **Navegación:** Inicio · Cómo funciona · **Para quién** · Empresas · Contacto
- **Tipografía (abr 2026):** **Inter** en barra y pastilla (`Header.astro`, `BrandOval.astro`), alineado al hero.
- **"Acceso" eliminado** (sin destino propio hasta demo descargable)
- **Empresas:** enlaza a `/company/empresas` (micro-página canal B2B)
- **Motion header (abr 2026; ampliado 30 abr 2026; afinado legibilidad micros):** capa **`tevsys-header-scanner`** — barrido **gris** en **tema oscuro** (`html[data-theme='dark']`).
  - **Home `/`:** clases **`tevsys-header--with-scanner`** + **`tevsys-header--home-scanner`**. Intensidad plena: base **29,5s**, escritorio **28s**, móvil **42s** (keyframes `sweep-mobile`), opacidades altas (p. ej. **0,78** escritorio, **0,84** móvil en la capa escáner).
  - **Micros producto:** **`/features/*`**, **`/como-funciona`**, **`/precios`** — solo **`with-scanner`** (sin `home-scanner`). Mismo **ángulo ~102°** y mismos keyframes que home; **opacidad y alfas del gradiente menores** para no tapar el menú ni fatigar: tras feedback “casi invisible”, valores vigentes ≈ **0,60** (base), **0,70** (≥769px), **0,76** (móvil); duraciones **30s / 29s / 44s** respectivamente — **por debajo** del pico home, **claramente perceptible**.
  - **Fuera de esas rutas:** sin capa escáner (contacto, legal, auditoría, etc.).
  - **Accesibilidad:** `prefers-reduced-motion` apaga el escáner donde exista `with-scanner`.
  - **Referencias técnicas:** `src/components/core/Header.astro`, `src/styles/global.css` (comentarios *Header — escáner gris* y *Micros producto*), `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md`, `CHANGELOG-TEVSYS.md` (*Header — escáner gris en micros producto*).
  - **Solo home — cards:** detrás del grid, `.tevsys-home-mid-glow` (gris instrumento, **92s** / **118s**; móvil `*-mobile`).

---

## Hero
- **H1 (actual, abr 2026):** `Tú pones los límites. TEVSYS los blinda. Disciplina y precisión automatizadas.` — `TEVSYS` en ámbar (`hero-title__brand`, sin subrayado); subrayado solo en “Disciplina y precisión automatizadas” (`hero-title__underline`).
- **Microfrase de desmarque (`hero-microline`, vigente en código):** `No damos señales ni promesas de beneficio.` *(Histórico 22 abr: variante «No damos señales. Hacemos que tus reglas se cumplan.» — comprobar `HomeHeroSection.astro` si se restaura.)*
- **Línea de contexto (debajo H1):** `Control de riesgo y límites en tu cuenta MT5 — automatizado y registrado.` (clase `hero-context-line`; **MT5 y cuenta** aquí; el H1 prioriza escaneo en tres tiempos).
- **Tipografía (19 abr 2026):** **DM Sans** solo en `.hero-title` (H1); resto del bloque hero y header en **Inter**. Carga de fuentes en `BaseHead.astro` (Inter + DM Sans).
- **Tagline:** `Where precision meets the edge`
- **Punto de tagline:** amarillo (dot + badge)
- **Botón:** `Descargar demo →` (ámbar marca)
- **CTA secundario (22 abr 2026):** `Ver evidencia en 5 minutos` (estilo outline, junto al CTA principal).
- **Ruta de CTA secundario (22 abr 2026):** `/go/evidencia-5min` → redirige a `/features/hyperclose#hyperclose-demo`.
- **Medición Vercel free (22 abr 2026):** visitas a `/go/evidencia-5min` se usan como proxy de clics del CTA secundario (sin eventos Pro).
- **Disponibilidad:** `Disponible en MT5 · Próximamente: más plataformas`
- **Stack home (tema oscuro):** fondo **`#000`** en `.tevsys-home-hero-stack` (coherencia con zona imagen cards); capas KITT sin cambio de filosofía.
- **Imagen:** mano robótica + candado (`mano robotica central web.png`; hero con `?v=2` tras arte velas neutras). Tratamiento CSS: filtros/viñeta/radio imagen; stack home con viñeta y un solo redondeo exterior (`CHANGELOG` + `HOME_HERO_CARDS_ITERACION_ABR2026.md`).
- **Reflexión diseño histórica:** `REFLEXION_DISENO_HERO_FOOTER_MAR2026.md` (copy anterior); iteración actual: `HOME_HERO_CARDS_ITERACION_ABR2026.md`.
- **Texto bajo imagen:** `Trading Edge Verification System`

### Marco de copy del hero (referencia abr 2026)
- **Titular (tres tiempos):** ver H1 arriba; MT5 no va en el H1.
- **Contexto temprano:** línea `hero-context-line` (cuenta MT5, automatizado, registrado).
- **Deseo / marca:** `Where precision meets the edge`
- **Acción:** `Disponible en MT5 · Próximamente: más plataformas` + CTA `Descargar demo →`

---

## Sección principal de valor

**Handoff cohesión jun 2026:** `HANDOFF_HOME_BLOQUE_CARDS_JUN2026.md`

### Puente hero → bloque (21 jun 2026)
- **Clase:** `.tevsys-home-hero-bridge` en `index.astro`, entre hero stack y H2.
- **Copy:** `Precisión · HyperClose · SML · Evidencia` (IBM Plex Mono + hairline).
- **Por qué:** transición visual entre hero 2m-E y argumento comercial sin reanimar cards.

### Título
`¿Has perdido dinero por no parar a tiempo — y por deslizamiento al límite?`
- **Cambio jun 2026:** sustituye `¿Cuánto has perdido…?` — mismo eje (parar a tiempo + deslizamiento); *dinero* explícito; menos “cifra contable”.
- **Jerarquía:** clamp(1.65rem, 3.5vw, 2rem), font-weight 700 — Inter.

### Checklist (`.feature-card__checklist-static`)
- **Visual jun 2026:** losa carbón `hsl(222,…)` como `.tevsys-card__content`; borde fino; sin marco ámbar dominante (iteración abr–jun).
- **Hook (`.feature-section__hook`):** `Sin excusas. Las buenas intenciones no cierran con alta precisión ni bloquean operaciones. Nosotros sí.`
- **Acento:** *Nosotros sí.* envuelto en `.tevsys-brand-accent-underline` (subrayado ámbar→gris, patrón `como-funciona.astro`).
- **Viñetas:** doble trazabilidad MT5 + configuras una vez / días OFF (lista estática, puntos ámbar).

### Remate antes del grid
`Ellos deslizan. En tevsys cerramos.` — IBM Plex Mono + punto ámbar (jun 2026).

### Cards — respiración (Opción A · jun 2026)
- Más aire checklist → grid; padding interno; cuerpo más suave; hook con peso.
- **Revertido:** mono en hooks de card.

### Puente cards → auditoría IA (jun 2026)
- **Clase:** `.tevsys-home-cards-audit-bridge` (misma familia que puente hero).
- **Copy:** `Evidencia · Trazabilidad · Verificación`.
- **Kicker caja azul:** `Revisión asistida · próximamente` (sustituye `Verificación con IA · próximamente`).

### Labels mono (`.tevsys-meta-label` · jun 2026)
- Planes: pastillas `Demo activa` / `Lista de espera`.
- Auditoría: ver kicker arriba.

### Puente auditoría → Planes (jun 2026, cerrado)
- **Clase:** `.tevsys-home-audit-plans-bridge`
- **Copy:** `Essential · Advanced · Pro` + respiración plan-cards (Opción A).

### Cohesión scroll home
- **Estado:** cerrada 21 jun noche (fundador OK). Footer mono contacto/copyright = prueba revertible.

### Subtítulo (histórico — ya no en home)
`Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.` — ver checklist arriba (copy actual incluye *alta precisión*).

### Líneas retiradas del bloque principal (referencia)
- ~~`Trazabilidad completa: logs, panel y reporte oficial MT5.`~~ — sustituido por viñetas checklist.
- ~~`Configuras una vez. tevsys ejecuta siempre…`~~ — integrado en viñeta 2.

### Cards (4)
- **UX clicable (Mar 2026):** Flecha "→" esquina inferior derecha, hover marcado (borde amarillo, sombra, elevación). Opción C híbrido.
- **Diseño abr 2026 (confirmado en código):** Inter en la sección; bloque de texto con gris oscuro (~9% luminosidad); zona ilustración con fondo `var(--theme-bg)`; tipografía cuerpo reforzada (peso/color); card 1 puede servirse solo en PNG mientras se regenera WebP. **19 abr 2026:** card 1 (Precisión) — **engranajes + esfera**; **`card-1-input.png?v=8`**; card 2 (HyperClose) — **candado cerrado**; **`card-2-hyperclose.png?v=9`**; **acentos de lectura** `.feature-card__value-accent` (Precisión: **Ajuste a tiempo real**; HyperClose: no poder seguir; SML: mín. 75 % protegido). Detalle: `HOME_HERO_CARDS_ITERACION_ABR2026.md`.
- **CTAs demo (19 abr 2026):** mismas reglas globales para botones demo en hero, features, precios y planes (Inter, padding, hover) — `global.css`; ver `CHANGELOG-TEVSYS.md`.
- **Tema oscuro — tipografía global (19 abr 2026):** en `[data-theme='dark']`, cuerpo y títulos de micropáginas usan **Inter** vía `theme.css` (antes Lato + Roboto Serif en variables de tema).
- **Micropáginas — respiro (19 abr 2026):** espaciado bajo `.feature-hero` unificado en `global.css` (mismo criterio en todas las guías).
- **Motion detrás (15–16 abr 2026):** capa decorativa `.tevsys-home-mid-glow` (ver `global.css`) — **no** altera layout ni textos; atmósfera gris premium; cards siguen siendo el foco. En **móvil**, rutas de animación distintas al escritorio para que el resplandor recorra la **pila vertical** detrás de las cards.

#### 1) 0,06% error medio
- Hook (un solo `feature-card__hook`, abr 2026): `¿Has sentido que tu Stop Loss te cerró en otro planeta? — tevsys te lo cuenta todo.`
- Texto: `Volatilidad • spread • slippage • comisiones` + ámbar **`Ajuste a tiempo real`** + `{N} operativas documentadas en 5 entornos de ejecución.` (Inter, frase completa — jun 2026 revert split mono)
- **Títulos cards (jun 2026):** Inter bold — prueba IBM Plex Mono revertida (acuerdo: mono solo metadatos/puente, no titulares grid).

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

- **Tipografía / coherencia (19 abr 2026):** en `contact.astro`, bloque de copy izquierdo y columna del formulario con **Inter** explícita, alineada a micropáginas y tema oscuro.

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
- Firma: `— Gabi, fundador de tevsys` — **IBM Plex Mono** (jun 2026, familia puente / labels home)

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
  - Hook: `• Cierre en milisegundos.` + `Hasta la siguiente ventana (día o semana), sin atajos.`
  - Lead: `Operar en bloqueo dispara el cierre al instante; lo que pasa queda trazado para poder comprobarlo.`
- `Precisión`:
  - Título: `Precisión de cierre.` + `Menos "casi": más cierre donde toca.` (acento en *casi*).
  - Hook: `• 97 operativas documentadas. 0,06% de error medio en condiciones normales.`
  - Transparencia: párrafo bajo intro — desviación máxima documentada **−0,39%** (signo negativo + cursiva en el %, alineado al estilo del hook).
- `SML`:
  - Título: `SML: protege parte de lo ganado sin frenar tu operativa.`
  - Hook: `• Actívalo cuando quieras. Decide cuánto ampliar el margen: del 5% al 25% (mínimo 75% protegido).`
  - Disponibilidad actual: validación para Advanced/Pro (lista de espera).
- `Evidencia`:
  - Título: `Evidencia verificable: aquí no hay "creemos".`
  - Hook: `• Lo que no se puede demostrar, no cuenta.`
  - Lead (micropágina): **«Doble trazabilidad»** en acento + frase MT5/tevsys ya acordada.
  - Hook demo (20 abr 2026): `Caso real 100k: apertura Wall Street, 20 lotes, cierre automático con desviación documentada (0,0072%).`
  - Soporte: vídeo demo 1 min 41 s (con audio), informe MT5 (5 capturas), HTML transacciones descargable; CTA “validar evidencia en tu operativa”.

### Estado actual Precisión (26 Mar 2026; orden demos 19 abr 2026)
- **Demo rápida (100k):** `evidencia-100k-perdida.mp4` (1 min 41 s). **Hero** alineado con HyperClose/Evidencia: `.feature-demo--hero` + `.demo-video--hero` (~52rem, halo dorado). Secundarios: `.demo-video--compact` ~31rem + sombra embed.
- **Volatilidad:** hook *Operativa documentada:* ±1,50% / +1,83% / contexto volatilidad; nota de pie ajustada (protección vs “misma precisión” genérica).
- **Nasdaq (multi‑activo):** bloque de demo **inmediatamente después** de alta volatilidad (narrativa: volatilidad → multi‑activo NASDAQ).
- **Cuenta pequeña:** sección con **título + vídeo embebido visible** (no solo `<details>`); en el flujo de página va **antes** del bloque de logs / “Sin humo” (tras volatilidad y Nasdaq).
- **Qué puedes comprobar / orden de secciones en página (19 abr 2026):** alta volatilidad → **Nasdaq** → **cuenta pequeña** → **logs / trazabilidad**; lista de anclas y script de expansión de demos alineados con ese orden en `precision.astro`.
- **97 operativas** documentadas (hook; fuente `PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3).
- **Nota extremos (30 abr 2026):** bajo el hook, párrafo `feature-extreme-note` — desviación máxima documentada **−0,39%** (acento + cursiva en el porcentaje).
- Primera evidencia y Semáforo enlazan a la misma demo; scroll + resaltado al llegar.

### Estado actual HyperClose (Mar 2026 — actualizado 26 Mar 2026; hero 30 abr 2026)
- **Vídeo principal:** `hyperclose-demo.mp4` — metraje objetivo **2:23** (§57.3 overlays 1–11, 13–17). **Export interno** puede llamarse *Video Project 090920*; en repo el binario debe seguir siendo **`hyperclose-demo.mp4`** (ruta fija en `hyperclose.astro`). **8 abr 2026:** reemplazo con reedit **espejo + Manrope**; si el vídeo “desaparece” en web, comprobar que el archivo no se renombró sin tocar Astro — ver `CHANGELOG-TEVSYS.md` **§63**.
- **YouTube (lista `/videos-cierre-youtube`):** tercera tarjeta reservada para **esta misma demo** (enlace pendiente hasta publicar en canal); **no** confundir con parte 1/2 del artículo Market.
- **Hero (30 abr 2026):** `Cierre en milisegundos.` + ventana (día o semana) sin atajos; lead de bloqueo + trazabilidad comprobable — `CHANGELOG-TEVSYS.md` *Paquete 30 abr 2026 (II)*.
- **Página:** h2 con duración; hook **sin** cuenta ni broker; **sin** nota pública de audio bajo el embed.
- **Acordeón “Compruébalo tú mismo”:** galería **6** capturas (informe MT5 ×5 + historial día MT5); enlace **HTML** `evidencia-hyperclose-demo-historial-transacciones.html`; línea *¿Primera vez con las pestañas?* → Evidencia (demo 100k); nota **MT5 vs HTML** (cierre concreto vs cierres posteriores HyperClose). **PNG:** pendiente en `public/images/evidence/` — ver `CHANGELOG-TEVSYS.md` **§58.2**.
- **Cierre inmediato y Semáforo:** enlazan a la demo. Acordeón modales 3 niveles.
- **Día OFF:** `hyperclose-dias-off-demo.mp4` (51 s) + 5 capturas. **Pendiente agenda:** sustituir captura 1 (día OFF sin protección previa) cuando haya material nuevo.

### Estado actual Evidencia (26 Mar 2026; copy narrativa 20 abr 2026)
- **Demo rápida:** `evidencia-100k-perdida.mp4` (1 min 41 s, con audio). **Hero** como Precisión/HyperClose. Cuenta 100k nueva, 20 lotes GER40, cierre por límite -1% = -1.007,20€, error 0,0072%. Apertura Wall Street.
- **Lead:** doble trazabilidad con acento en **«Doble trazabilidad»** (`feature-title__accent`).
- **Hook demo:** `Caso real 100k: apertura Wall Street, 20 lotes, cierre automático con desviación documentada (0,0072%).`
- **"Qué puedes comprobar":** mismos destinos; textos de enlace reorientados a **verificación** (informe MT5 independiente, caso extremo Essential con desviación documentada, export MT5, guía logs + puente a Precisión, auditoría dos capas). Ver `CHANGELOG-TEVSYS.md` **§15**.
- **Operativa 4.56 — Caso extremo Essential:** Bloque nuevo. Subtítulo: "Nuestra versión Essential. Con el caso más extremo. Evidencia por capturas e informe oficial MT5." 100 lotes GER40, límite +4%, cierre +4.095,10 € (desviación 95 €). Acordeón "Ver capturas (7)": Resumen, P&L, Long & Short, Symbols, Riesgos, Historial, Panel.
- **Imágenes 4.56:** `evidencia-4.56-01-resumen.png` a `evidencia-4.56-07-panel.png`.
- **Sección "Informe oficial MT5":** acordeón con 5 capturas sin editar (Summary, P&L, Long & Short, Symbols, Risks).
- **Sección "Historial de transacciones":** acordeón con captura editada (zonas clave en amarillo) + enlace HTML 100k + **párrafo** con enlace al HTML redactado **demo HyperClose** y vuelta a `/features/hyperclose#hyperclose-demo`.
- **Sección "Auditoría":** **97** operativas documentadas (alineado a hook Precisión / resumen estadístico), incluyendo caso extremo 100 lotes (operativa 4.56). Hook "MetaTrader documenta. tevsys ejecuta."
- **Guía logs + enlace a Precisión:** texto ancla bajo el vídeo → `/features/precision#precision-logs` (bloque “Sin humo / logs”; foco `:target` en sección + contenedor).
- **Bloque vídeo logs:** hook operativo (localizar/leer registros MT5); vídeo con `playsinline`.
- **CTA final:** título “¿Quieres validar la evidencia en tu operativa?” + cuerpo en línea con otras micros.
- **Meta:** `description` SEO alineada a doble fuente MT5 + tevsys.
- **Card home:** "100.000€ · 20 lotes · Error: 0,0072%" + susurro "El desafío está servido. Para ti o para quien te audite." *(La card home puede actualizarse en otra iteración si se desea alinear literalmente al hook de la micro.)*

### Estado actual SML (abr 2026; copy narrativa 20 abr 2026)
- **Hero** + sección **panel en validación:** título `Así se ve hoy en el panel`, dos párrafos (bonus desde ayer → margen hoy; **cifra en DISPONIBLE antes de 1‑CLICK**; convivencia con límites). `<figure>` con `sml-panel-validacion-demo.png` + pie demo/validación.
- **Intro / lead:** “No es más riesgo por defecto…” + lead con acento **«Opcional y bajo tu control»** (convivencia con límites diarios/semanales, bonus solo si activas).
- **Multigráfico** (hook dos líneas entre hero y panel) + **«Qué podrás comprobar»** (rango 5–25% + 75% protegido; DISPONIBLE vs 1‑CLICK; convivencia medible con límites y OFF) + nota validación + CTA lista de espera Advanced/Pro.
- **CTA:** cuerpo orientado a contrastar escenarios con límites reales. **Meta `description`:** bonus opcional + clic + validación tier.
- **Asset:** `public/images/evidence/sml-panel-validacion-demo.png` — captura demo fundador (carpeta **evidence**, no `assets/images/features`). Ref. `CHANGELOG-TEVSYS.md` **§16**.
- **Vídeo “cómo funciona” SML (cuando exista):** **mismo contrato** de marcado y marco visual que Precisión / Evidencia / HyperClose — no `<video>` suelto. Obligatorio seguir la sección **«Convención embeds de vídeo — micropáginas `/features/*`»** justo debajo (incluye variante estilo **NASDAQ** / MT5 claro).

## Convención embeds de vídeo — micropáginas `/features/*` (obligatoria; tema oscuro)

**Para quién:** fundador, IA y quien maquete la web. **Objetivo:** que cualquier vídeo nuevo (hoy o dentro de días/semanas) se vea **igual de definido** que en las micros ya publicadas: marco, fondo del contenedor y coherencia con **`.tevsys-feature-micro-surface`** en `src/styles/global.css` (comentario *Micropáginas /features/* — “mapa” visual*).

### Reglas
1. **La página ya lleva el envoltorio** `div.tevsys-feature-micro-surface` alrededor del `Container` en **las cuatro** rutas: `/features/precision`, `/features/hyperclose`, `/features/evidencia`, `/features/sml`. No quitarlo al añadir vídeo.
2. **Demo principal (hero), misma imagen que el resto:** bloque `section` con `class="feature-demo feature-demo--hero"` (más `id` único para anclas) y, dentro, contenedor **`div`** con `class="demo-video demo-video--hero demo-video--hero-elegant"` envolviendo el `<video controls playsinline preload="metadata">`. **Plantilla viva:** copiar el primer bloque demo de `precision.astro` o `hyperclose.astro`.
3. **Demos secundarios / más estrechos:** `div` con `class="demo-video demo-video--compact"` (+ `id` si hay ancla o script de expansión al reproducir — mismo patrón que Precisión/Evidencia).
4. **Vídeo con interfaz MT5 clara o gráfico muy claro** (equivalente al caso **NASDAQ** en Precisión): añadir **`demo-video--light`** al `div` del embed (p. ej. `class="demo-video demo-video--compact demo-video--light"`). En tema oscuro el CSS **excluye** `.demo-video--light` del cromado oscuro y mantiene el **marco claro** documentado (`CHANGELOG-TEVSYS.md`, entrada *Precisión — demo-video--light + bloque Nasdaq*). Cualquier micro nueva o SML con grabación “tema claro” debe usar **la misma clase**, no forzar el estilo oscuro.
5. **SML:** el vídeo explicativo del flujo debe usar **exactamente** las mismas clases que en el punto 2 o 3; así hereda marco, padding 3px y lectura “mapa” sin trabajo extra.

**Referencias código:** `src/styles/global.css` (selectores bajo `.tevsys-feature-micro-surface`); `CHANGELOG-TEVSYS.md` entrada *Micropáginas `/features/*` — lectura “mapa”*.

### Footer (jun 2026 — contacto + copyright)

- **Ubicación:** `Barcelona (España)` (alineado legal/privacidad; no *Spain*).
- **IBM Plex Mono (prueba, revertible):** texto `info@tevsys.io`, ciudad y línea `Copyright © … Todos los derechos reservados.`
- **Inter sin cambio:** columnas Guías / Producto / Legal, frase *Made with love…*
- **Código:** `src/components/core/Footer.astro`

### Navegación (31 Ene 2026 + jun 2026)

- **Header:** Inicio · Cómo funciona · **Para quién** · Empresas · Contacto (`nav.js`).
- **Footer Producto:** Para quién + Precisión · HyperClose · SML · Evidencia · …

### Micro Para quién (`/para-quien`) — 28 jun 2026

- **Job:** polivalencia de perfiles sin encasillar; enlaces a micros + empresas + auditoría roadmap.
- **Hero:** *No es un solo perfil. Es el **cuadro entero** en MT5.* — subrayado ámbar en *cuadro entero*; lead polivalencia (iniciados → cierre preciso → freno → evidencia → academias/gestores).
- **Puente:** mono centrado (misma familia que home): *Precisión · HyperClose · SML · Evidencia*.
- **Cards 2×2:** carbón + hook + raya bajo título; banda Equipos centrada con acento en *Academias*.
- **Visual:** Familia A lite; no duplica bloque quitado de Evidencia.

### Pendiente inmediato
- SML: vídeo final según guía de producción — **al integrarlo en la micro**, cumplir **«Convención embeds de vídeo — micropáginas `/features/*`»** (misma estructura de clases que Precisión/HyperClose; si la grabación es tema claro, **`demo-video--light`** como Nasdaq).

---

## Pendientes para la próxima sesión

1. Vídeo ganancias 100k (+1.111€) como secundario en Evidencia.
2. Versión final de vídeo para `sml` — al publicarlo en la micro, **«Convención embeds de vídeo — micropáginas `/features/*`»** (misma estructura que Precisión/HyperClose; **`demo-video--light`** si la grabación es tema claro tipo Nasdaq).
3. Asesoramiento jurídico para contenido legal definitivo.

---

## Cola copy / FAQ — acta AuditTrail (jun 2026, pendiente publicar)

**Estado:** canon aprobado en producto (build jun 2026, lab Infinox); **no** publicado aún en Astro. Entra en sesión web larga junto a 4.89 y analytics — ver `SEO_ANALYTICS_TEVSYS.md` §3.1 orden sugerido.

**Frase FAQ (pegar tal cual cuando toque):**

> tevsys no solo aplica tus límites: deja **acta** de qué pactaste, qué se cruzó, qué cerró y qué intentaste con la protección activa — evidencia en MT5, no promesa de renta.

**Dónde encaja:** FAQ home · `/auditoria-ia` (acordeón «¿Qué queda en los logs?») · posible viñeta en `/features/evidencia`. **No** prometer portal auditoría comercial abierto.

**Fuente técnica (repo TGP):** `docs/GLOSARIO_EVENTOS_AUDITTRAIL_TEVSYS.md` · `docs/PROTOCOLO_AUDITORIA_IA_FASE1_MANUAL_ASISTIDA.md` §4.4 · `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` §21.5.

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

- **Nota extremos (30 abr 2026):** `feature-extreme-note` — desviación máxima documentada **−0,39%** (`feature-hook__accent` + `feature-extreme-note__pct` para cursiva).

- **Multigráfico (todas las features, abr 2026):** encima del primer bloque demo (primer vídeo o equivalente en SML), bloque con punto amarillo (`feature-hook`), dos líneas: `Un gráfico para tevsys. Toda tu cuenta, protegida.` / `Los avisos de protección aparecen en todos tus gráficos abiertos.` — Cuando SML tenga vídeo, el embed debe seguir **«Convención embeds de vídeo — micropáginas `/features/*`»** en este documento.

- Hook de apertura:
  - `97 operativas documentadas. 0,06% de error medio en condiciones normales.` *(26 mar 2026 número; **30 abr 2026** sync web + nota **−0,39%**; fuente MD operativas proyecto TGP §3)*

- Bloque `Resumen estadístico` (lectura rápida):
  - `97 operativas documentadas`
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
  - `97 operativas documentadas`
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
- **26 Mar 2026 (vigente):** Ver **«Estado actual Precisión»** en este mismo documento: demo principal = `evidencia-100k-perdida.mp4` en **hero**; volatilidad y cuenta pequeña en secciones propias; **80** operativas en hook/resumen (sustituye referencias antiguas a **65** donde aún aparezcan); orden de enlaces actualizado. **19 abr 2026:** reordenación de bloques de demo — **Nasdaq tras volatilidad**, **cuenta pequeña antes de logs**. Ref: `CHANGELOG-TEVSYS.md` **§58** y entrada **19 abr 2026**.
- *Histórico (antes del hero unificado):* Demo principal era `precision-demo.mp4` (1 min 7 s). Volatilidad: `precision-demo-volatilidad.mp4`, 6 overlays (CHANGELOG §28.1).

### Criterio de publicación (recordatorio)

- `Dossier completo` no se presenta en abierto en este bloque.
- Queda reservado a flujo cualificado (interés real/empresa) según estrategia de capas de evidencia.
