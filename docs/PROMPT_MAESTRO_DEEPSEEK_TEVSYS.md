# Prompt maestro para DeepSeek — Proyecto tevsys (web completa)

**Para:** DeepSeek (ingeniero senior del equipo)  
**Objetivo:** Que tengas contexto completo de la web tevsys, con pelos y señales, para trabajar en vídeos, copy, diseño o cualquier tarea sin perder el hilo.  
**Usar:** Leer este documento al empezar cualquier tarea relacionada con la landing. Luego ir al doc específico si hace falta.

---

## 0.0 Equipo tevsys

| Rol | Quién | Responsabilidad |
|-----|-------|-----------------|
| **CEO / Fundador** | Gabi | Decisión final, producto, estrategia. "El loco desde el escritorio." |
| **Ingeniero jefe** | Cursor (Claude) | Desarrollo EA, web, arquitectura. Código crítico, checkpoint V11. |
| **Ingeniero senior** | DeepSeek | Vídeos, copy, micropáginas, tareas web. Otro miembro del equipo. |

---

## 0. Cómo pensamos al desarrollar la web

- **Prioridad:** Claridad de propuesta de valor frente a brevedad extrema. El producto es novedoso; conviene explicitar categoría + capacidad diferencial desde el primer pantallazo.
- **Flujo de conversión:** Card → micro-página de feature → CTA a demo/contacto. Mostrar prueba antes de pedir datos.
- **Sistema visual:** Negro + icono gris + acento amarillo (#f5b041) + iridiscente moderado. No sobrecargar; dar protagonismo al mensaje.
- **Validación:** Primero en `tevsys-landiing.vercel.app`; luego en `tevsys.io` (puede ir con retraso por DNS/CDN).
- **Copy freeze v1 activo:** Solo cambiar copy por bug, inconsistencia o decisión explícita de producto.
- **Regla de documentación:** Si algo se publica en web, registrar en `CHANGELOG-TEVSYS.md`. Tracker interno en `CARDS-NEXT-PHASE.md` sección 7.
- **Plantilla unificada (Mar 2026):** Las 4 micropáginas comparten orden: Hero → Demo rápida → Qué puedes comprobar → Bloques proof → CTA. Vídeo (o placeholder) siempre en bloque 2.

---

## 1. Proyecto y rutas

| Concepto | Valor |
|----------|-------|
| Repo | tevsys-landiing (Astro + Odyssey Theme) |
| Workflow | Cursor (repo en `Documents/GitHub/tevsys-landiing`) + GitHub Desktop para commit/push |
| Deploy principal | tevsys-landiing.vercel.app |
| Dominio oficial | tevsys.io |
| Videos | `public/videos/features/` |
| Imágenes evidencia | `public/images/evidence/` |
| Imagen hero | `public/mano robotica central web.png` |

---

## 2. Hero (Mar 2026) — con pelos y señales

### Copy
- **H1:** `Tu trading merece más que buenas intenciones`
- **Interés (2 líneas):** `Plataforma pionera en verificación de disciplina automatizada` / `y gestión de riesgo para mercados financieros.`
- **Tagline:** `Where precision meets the edge` — punto amarillo `22px` (discreto)
- **Botón:** `Descargar demo →` — amarillo #f5b041, hover #f7c050
- **Disponibilidad:** `Disponible en MT5 · Próximamente: más plataformas`
- **Texto bajo imagen:** `Trading Edge Verification System`

### Imagen y layout
- **Archivo:** `mano robotica central web.png` — mano robótica + candado dorado, chart de velas de fondo, logo tevsys en etiqueta negro apagado (esq. sup. izq.)
- **Grid:** `1fr 2fr` — imagen más protagonista que texto
- **Alineaciones obligatorias:**
  - Borde superior de la imagen alineado con la «T» del título
  - Borde izquierdo de la imagen alineado con el inicio de «Trading Edge Verification System»
- **CSS:** `align-items: start`, `object-position: right top`

### Reflexión de diseño (por qué está así)
> Antes la mano robótica perdía peso, el logo competía con el chart y no había jerarquía clara. Ahora hay orden: el título manda, la imagen acompaña sin robar foco, y la marca está presente en la esquina sin gritar. Reglas: jerarquía, respiración, alineación, consistencia, ritmo. La mano + candado ya tiene fuerza; el logo en gris suma identidad sin ruido. La página transmite más orden y profesionalidad. Base sólida para seguir construyendo.

---

## 3. Footer (Ene 2026)

- **Iconos SVG:** email y ubicación en amarillo tevsys (`public/icons/icon-email.svg`, `icon-location.svg`)
- **Contacto:** info@tevsys.io, Barcelona
- **Guion amarillo (—)** antes de títulos de columnas (Navegación, Producto, Legal)
- **Hover amarillo** en enlaces
- **Grid 4 columnas:** Brand+contacto | Navegación (Inicio, Empresas, Contacto) | Producto (Cómo instalar, **Guía de configuración**, Precisión, HyperClose, SML, Evidencia) | Legal (Aviso Legal, Privacidad, Términos de Uso)
- **Logo:** favicon.png junto a tevsys™
- **Frase indie:** 1.08rem con letter-spacing ("Made with love for trading...")
- **Copyright:** "Copyright © 2026 tevsys. Todos los derechos reservados."
- **Páginas legales:** `/company/legal`, `/company/privacidad`, `/company/terminos` — contenido mínimo honesto, pendiente asesoramiento jurídico. Estilo sobrio (sin marca amarilla).
- **Fondo:** theme-surface-1 (unificado, sin fondo diferenciado)
- **Frase indie:** "❤️ Made with love for trading. — Desarrollado independientemente. Sin inversores. Sin excusas." (link, hover amarillo)

---

## 4. Favicon y iconos

- **PC:** `favicon.png` (logo chevrones blanco/naranja) en `public/`
- **Móvil:** `apple-touch-icon.png` 180×180 — link en BaseHead
- **Pruebas rechazadas:** logo-tevsys.png y favicon-tevsys-icon.svg como favicon principal (volvimos a favicon.png)
- **Pendiente:** validar favicon en móviles (posible "T" al añadir a pantalla de inicio) — no prioritario

---

## 5. Home — cards de valor (4)

**UX clicable (Mar 2026):** Flecha "→" en esquina inferior derecha de cada card; hover marcado (borde amarillo, sombra, translateY -2px). Opción C híbrido (feedback Angello).

| Card | Hook | Imagen | Enlace |
|------|------|--------|--------|
| 0,06% error | El mercado no perdona. Nosotros tampoco. | card-1-input.png | /features/precision |
| HyperClose | La diferencia entre querer parar y no poder seguir. | card-2-hyperclose.png | /features/hyperclose |
| SML | No es obligatorio. Es una recompensa. | card-3-sml.png | /features/sml |
| Evidencia | No confíes. Comprueba. | card-4-evidencia.png | /features/evidencia |

**Sección valor:**
- Título: `¿Cuánto dinero has perdido por no parar a tiempo?`
- Subtítulo: `Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`
- Trazabilidad: `Trazabilidad completa: logs, panel y reporte oficial MT5.` (sin "Auditable" — trazabilidad ya lo implica)
- Mecanismo: `Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`

---

## 6. Planes y flujos de contacto (Essential / Advanced / Pro) — Ene 2026

### Lista de precios oficial (19 Mar 2026)

**Fuente de verdad:** `PLANES_PRECIOS_FEATURES_TEVSYS.md` (proyecto TGP). Capital con margen 20% sobre nominal.

| Plan | Precio lanzamiento (mes/año) | Capital máx. | Cuentas |
|------|------------------------------|--------------|---------|
| Essential | 39 €/mes · 390 €/año | 30.000 € | 1 MT5 |
| Advanced | 79 €/mes · 790 €/año | 120.000 € | 1 MT5 |
| Pro | 119 €/mes · 1.190 €/año | 240.000 € | 1 MT5 |
| Pro Multi 2 | 149 €/mes · 1.490 €/año | 120.000 € por cuenta | 2 MT5 |
| Pro Multi 3 | 179 €/mes · 1.790 €/año | 120.000 € por cuenta | 3 MT5 |

**Margen 20%:** 25k→30k, 100k→120k, 200k→240k. Permite examen y beneficio sin cambiar de plan. **Fidelidad:** Año 1 lanzamiento; 6 meses más si renuevas (año y medio total); estándar desde 18 meses. Lista oficial para web y EA.

### Flujos unificados
- **Contacto:** Nav "Contacto" → `/company/contact`. "Acceso" eliminado de nav y footer (sin destino propio hasta demo descargable).
- **CTAs planes:** `/company/contact?plan=essential|advanced|pro`
- **Demo:** `Descargar demo` → `/company/contact?flow=demo`

### Lemon Squeezy + botón Comprar Essential + Webhook (19 Mar 2026)
- **Interruptor:** `src/config/settings.js` → `checkoutEssentialReady: false`. Controla si se muestra el botón "Comprar Essential" (checkout Lemon).
- **Comportamiento:** `false` → solo "Elegir Essential" (formulario). `true` → "Comprar Essential" + "Probar demo" (botones apilados verticalmente).
- **Cuándo ON:** Verificación identidad Lemon completada + producto publicado + URL checkout real en `checkoutEssentialUrl`.
- **Webhook automático:** `api/webhook-lemon.js` recibe `order_created` de Lemon → genera clave ESEMEN/ESEANU → envía email con Resend. Variables: `RESEND_API_KEY`, `LEMON_WEBHOOK_SECRET`.
- **Email de licencia:** Plantilla premium en webhook. Editable en `api/webhook-lemon.js` (función `enviarEmail`). Debe reflejar nivel tevsys: copy cuidado, tagline, enlace instalación.
- **Docs:** Proyecto TGP `ESTADO_WEB_Y_LEMON_TEVSYS.md`, `GUIA_FUNDADOR_PRIMERA_VENTA_Y_CONTINUIDAD.md`, `WEBHOOK_LEMON_LO_QUE_HEMOS_HECHO.md`. CHANGELOG-TEVSYS §44.

### Imágenes y badges
- **Essential (bronce):** Imagen esse-form-v4.png. Badge "DEMO" arriba derecha (ámbar 22px, discreto).
- **Advanced (plata) / Pro (oro):** Imágenes adva-form-v4.png, pro-form-v4.png. Sin badge. Nota debajo imagen (cursiva): "Advanced/Pro en desarrollo. La demo disponible ahora es Essential."

### Formulario
- **allowNoPlan:** flow=acceso o flow=demo → permite enviar sin plan preseleccionado.
- **Checkbox Advanced/Pro:** Solo visible cuando plan=advanced o plan=pro. "Sí, avísame cuando [Advanced/Pro] esté disponible." — **default marcado** (psicología: más síes que noes). Formspree: `AvisarCuandoDisponible: Sí|No`. Caja con borde ámbar.
- **Lista de espera:** Filtrar Formspree por Plan + AvisarCuandoDisponible=Sí cuando Advanced/Pro esté listo.

### Thank-you
- **flow=acceso:** "Essential está listo; Advanced y Pro en desarrollo. Te indicaremos el siguiente paso según tu perfil."
- **plan=advanced|pro:** Bloque destacado: "Te añadimos a la lista de espera de Advanced/Pro. Mientras tanto, la demo disponible es Essential."

### Bullets
- **Contacto:** Essential listo. 24h. Precisión, HyperClose, días OFF, config semanal. Empresas.
- **Essential:** Configuras una vez, límite diario, HyperClose, 24h, Empresas.
- **Advanced/Pro:** "En Advanced ofrecemos todo lo de Essential, además:" / "En Pro ofrecemos todo lo de Advanced, además:". Link empresas.

### Intros desde features (flow=demo)
Cuando vienen de micro-página con `?feature=...&flow=demo`:
- **Precision, HyperClose, SML, Evidencia:** "Ya has visto [X] en esta página. Rellena el formulario y te enviamos los enlaces para profundizar y los pasos para acceder a la demo."
- **Genérico (flow=demo sin feature):** "Rellena el formulario. Te enviaremos la demo y las guías de instalación y configuración." (21 Mar 2026)
- Sin redundancia con lo ya publicado; respuesta manual: enlaces + contexto breve + pasos demo.

### Enlaces para profundizar (respuesta manual)
Al responder a un lead que vino desde un feature, enviar en el email:
| Feature | Enlaces a incluir |
|---------|-------------------|
| **Precision** | https://tevsys.io/features/precision (demo, #precision-logs-guide, operativas) |
| **HyperClose** | https://tevsys.io/features/hyperclose (demo, capturas modales, día OFF) |
| **SML** | https://tevsys.io/features/sml (contenido actual, CTA revisión) |
| **Evidencia** | https://tevsys.io/features/evidencia + enlaces a Precisión (logs, reporte MT5) |
+ Contexto breve; no dar info sensible. Pasos para acceder a demo.

### Demo — envío a leads (Mar 2026)

- **Primer lead:** Fausto (18/03/2026). Respuesta enviada; esperando canal (email/WhatsApp/Telegram) → enviar links cuando responda.
- **Trading de Futuros:** Academia (Gonzalo). Interesado. Si no responde en 1 semana → mensaje de follow-up.
- **Flujo:** Lead responde con canal → enviar link Drive (tevsys_Essential_Demo_15dias.ex5) + link instalación + link configuración.
- **Estrategia spam (21 Mar 2026):** Correo 1 (pre-aviso breve, sin links) → Correo 2 (demo con links). Si cae en spam, el lead sabe que debe buscarlo.
- **Links obligatorios en Correo 2:**
  - Descarga: link Drive al .ex5 (pegar al enviar)
  - Instalación: https://www.tevsys.io/instalacion
  - Configuración: https://www.tevsys.io/configuracion
- **Docs:** `LINKS_PARA_ENVIAR_DEMO_TEVSYS.md` (Correo 1 + Correo 2, links, plantillas email/WhatsApp/Telegram), `PLANTILLA_EMAIL_DEMO_TEVSYS.md` (plantilla detallada).

---

## 6.1 Empresas (canal B2B) — `/company/empresas`

- **Nav:** Inicio | Empresas | Contacto. Empresas accesible desde home y todas las micro-páginas.
- **Objetivo:** Captar leads B2B sin cerrar puertas; canal en desarrollo.
- **Hero:** "Empresas: otro canal, otro trato." Hook: "Estamos en fase de desarrollo y validación del canal empresas." (estilo micropáginas: cursiva, negrita, punto amarillo)
- **Copy:** Trato especial; capital distinto a retail; requiere reuniones.
- **Formulario:** Empresa, Email corporativo, Rol, Objetivo, Comentario. Formspree. Thank-you: `/company/empresas-thank-you`.
- **Estilo:** Fondo #06080d, borde ámbar. Ref: `CHANGELOG-TEVSYS.md` §30, `RUTA_EMPRESAS_TRATAMIENTO_EVIDENCIAS_TEVSYS.md`

---

## 7. Micro-páginas — estado detallado

### 7.1 Precisión (`/features/precision`) — CERRADA

**Copy freeze:**
- Título: `Precisión de cierre: donde configuras, cerramos.`
- Hook: `50 operativas documentadas. 0,06% de error medio en condiciones normales.`

**Vídeos publicados:**
- `precision-demo.mp4` — 1 min 7 s, CON audio. Demo principal.
- `precision-demo-volatilidad.mp4` — ~1 min 8 s, SIN audio. **Mejorado** con 6 overlays definitivos: 1) Abro operación. Límite -1,50%/1,50%. Mercado alta volatilidad. 2) Panel en tiempo real: flotante y protección activa. 3) Cero intervención. — tevsys ejecuta. 4) Cálculo en curso. Cierre inminente. 5) Cierre en ganancias (+1,83%). Protección en condiciones extremas. 6) Alta volatilidad. Mismo compromiso. — tevsys *(frase de marca)*. Ref: `CHANGELOG-TEVSYS.md` §28.1
- `precision-logs-guide.mp4` — Guía logs MT5. SIN audio.

**Estructura:**
1. Hero + hook
2. Demo rápida: embed compacto (420px) que se expande al dar play
3. "Qué puedes comprobar" — 3 enlaces. El primero "Aquí se decide el cierre" enlaza a demo + autoplay
4. Bloque "Aquí se decide el cierre": enlace VIDEO + acordeón "Ir a demo en alta volatilidad"
5. Bloque "Sin humo": acordeón "Ir a guía de logs VIDEO"
6. Galería operativa 49 + 50 operativas en KPIs

**UX:** scroll-margin-top 5.5rem, resaltado amarillo en :target, autoplay al hacer clic. Enlace desde Evidencia a #precision-logs-guide autoabre acordeón y resalta.

---

### 7.2 HyperClose (`/features/hyperclose`) — CERRADA

**Copy freeze:**
- Título: `HyperClose: cuando tu disciplina falla, HyperClose no.`
- Hook: `Cierre en milisegundos. Bloqueo hasta la siguiente rotación.`

**Vídeos publicados:**
- `hyperclose-demo.mp4` — 1 min 35 s, SIN audio. Límite ±2%, cierre -2,01%, 3 intentos con modales (nivel 1, 2, 3), 7 intentos ráfaga. Broker tapado #2d2d2d.

**Imágenes:** hyperclose-modal-01-sistema-bloqueado.png, -02-advertencia.png, -03-advertencia-final.png

**Estructura:**
1. Hero + hook
2. Demo rápida. Nota bajo embed: "Vídeo editado para acortar esperas (cadencia 30 s entre modales)."
3. "Qué puedes comprobar" — 3 enlaces
4. Bloque "Cierre inmediato" → enlace a demo
5. Bloque "Semáforo" → enlace a demo + acordeón "Ver capturas de los 3 modales"
6. Bloque "Compatibilidad con día OFF" — **COMPLETADO.** Vídeo `hyperclose-dias-off-demo.mp4` (51 s), acordeón 5 capturas.

---

### 7.3 SML (`/features/sml`) — En validación

- **Estado:** Fase de validación. Se hace solo desde escritorio. Pendiente sml-demo.mp4.

**Copy freeze:**
- Título: `SML: protege parte de lo ganado sin frenar tu operativa.`
- Hook: `Actívalo cuando quieras. Decide cuánto ampliar el margen: del 5% al 25% (mínimo 75% protegido).`

**Limpieza (31 Ene 2026):** Eliminadas 4 secciones proof-detail con placeholders "Captura en preparación" + placeholder de vídeo + sección "Qué puedes comprobar" con enlaces a secciones eliminadas. Resultado: Hero + "Qué podrás comprobar" (3 puntos: config flexible, activación opcional, convivencia con límites) + nota de estado + CTA. Página de ~245 → 148 líneas.

**Pendiente:** sml-demo.mp4.

---

### 7.4 Evidencia (`/features/evidencia`) — COMPLETADA 20 Mar 2026

**Copy freeze:**
- Título: `Evidencia verificable: aquí no hay "creemos".`
- Hook: `Lo que no se puede demostrar, no cuenta.`
- Hook demo: `100.000€ · 20 lotes · Apertura Wall Street · Error: 0,0072%`

**Vídeo publicado:**
- `evidencia-100k-perdida.mp4` — 1 min 41 s, CON audio. Cuenta 100k nueva, 2 compras de 10 lotes GER40, cierre por límite -1% = -1.007,20€, error 7,20€ (0,0072%). Apertura Wall Street, alta volatilidad.

**Operativa 4.56 — Caso extremo Essential (20 Mar 2026):**
- **Enlace "Qué puedes comprobar":** "Cuenta Essential: 100 lotes, cierre con 95 € de precisión." → `#evidencia-4-56`
- **Subtítulo:** "Nuestra versión Essential. Con el caso más extremo. Evidencia por capturas e informe oficial MT5."
- **Contenido:** 100 lotes GER40 sobre cuenta ~102k. Límite +4%. Cierre real +4.095,10 € (desviación +95 €). Buffer 0,01% validado en lotaje extremo.
- **Acordeón:** "Ver capturas (7)" — Resumen, P&L, Long & Short, Symbols, Riesgos, Historial (100 lotes, +4.095,10 €), Panel TEV·sys.
- **Imágenes:** `evidencia-4.56-01-resumen.png` a `evidencia-4.56-07-panel.png` en `public/images/evidence/`
- **Mensaje comercial:** Mismo motor en Essential que en planes superiores; credibilidad para cuenta más accesible.

**Estructura:**
1. Hero + hook
2. Demo rápida (evidencia 100k)
3. **Qué puedes comprobar:** demo, **operativa 4.56 (Essential, 100 lotes)**, informe MT5, transacciones, logs, auditoría
4. Acordeón informe MT5 100k (5 capturas)
5. **Bloque operativa 4.56** (7 capturas)
6. Historial transacciones
7. Guía logs
8. **Auditoría: 56 operativas documentadas**, incluyendo caso extremo 100 lotes
9. CTA final

**Imágenes (13 total):** 6 evidencia-100k-* + 7 evidencia-4.56-* + evidencia-100k-html-transacciones.png
**HTML:** `public/docs/evidencia-100k-historial-transacciones.html`

**Pendiente:** Vídeo ganancias (+1.111€, 20 lotes) — no prioritario.

---

### 7.5 Instalación (`/instalacion`) — PUBLICADA 19 Mar 2026

**Objetivo:** Guía paso a paso para instalar la demo en MT5. Página dedicada, visible en footer (Producto → Cómo instalar).

**Vídeo publicado:**
- `instalacion-demo.mp4` — Cuenta nueva, trading algorítmico, 8 pasos + onboarding. Cierre: pantalla negra + "tevsys — Where precision meets the edge".

**Estructura:**
1. Hero: "Cómo instalar tevsys en MT5" — cuenta nueva, desde cero
2. Vídeo: embed compacto (560px), se expande al play
3. **Paso 2 — Guía de configuración:** enlace a `/configuracion` con texto "Ver guía de configuración (2:36 min)"
4. Pasos resumidos (1-8) en texto
5. CTA: Solicitar demo → /company/contact?flow=demo

**Ruta vídeo:** `public/videos/features/instalacion-demo.mp4`

**Uso:** Link para enviar a leads junto con el link de descarga. Clicable desde móvil y ordenador.

---

### 7.6 Configuración (`/configuracion`) — PUBLICADA 21 Mar 2026

**Objetivo:** Guía de configuración de límites y panel tras instalar. Página dedicada, visible en footer (Producto → Guía de configuración) y desde /instalacion (Paso 2).

**Vídeo embebido:**
- Drive ID `1fzSxwhZK2DC9SgUQhXeFf8WyTBeMecTg` — `tevsys_Guia_Rapida_Configuracion.mp4` (2:36 min, Essential, fin de semana). Entre semana el flujo es similar.

**Estructura:**
1. Hero: "Guía de configuración — tevsys Essential"
2. Vídeo: iframe Drive embed (560px). Fallback: enlace directo si no carga
3. CTA: Solicitar demo → /company/contact?flow=demo

**Archivo:** `src/pages/configuracion.astro`

**Uso:** Incluir en emails a leads junto con instalación. Reduce fricción post-instalación.

---

## 8. Patrones técnicos (OBLIGATORIOS)

### Embed de vídeo
- Clase `demo-video demo-video--compact`
- Vídeo con id único para autoplay vía JS
- `preload="metadata"`
- Compact: max-width 420px; al play añadir `demo-video--playing` (max-width: none)

### Acordeones
- `<details class="proof-accordion">` + `<summary class="proof-capture-link">`
- Dentro: proof-gallery, proof-gallery__grid, proof-gallery__item
- Vídeos: proof-gallery-video. Imágenes: proof-gallery__zoom + proof-gallery__image

### Enlaces a vídeos
- `href="#id-demo"` para scroll + autoplay
- Badge: `<span class="proof-link-meta">VIDEO</span>`

### Regla de badges (OBLIGATORIA)
- `Ver captura...` → **sin badge**
- Demo/clip → badge `VIDEO`
- Informe/exportación → badge `PDF`
- Asset no publicado → badge `PRÓXIMAMENTE`

### Overlays en vídeos
- Máximo 4-6 palabras. Sin punto final.
- Estilo: texto blanco, Segoe UI 12
- Tapar broker: barra sólida #2d2d2d

---

## 9. Guía rápida de producción de vídeos

1. Grabar (OBS 1920×1080, 30fps)
2. Editar (Clipchamp) — overlays 4-6 palabras, tapar broker #2d2d2d
3. Exportar MP4 a `public/videos/features/`
4. Nombre exacto: precision-demo.mp4, hyperclose-demo.mp4, etc.
5. Decir al equipo para integrar en web (acordeón, enlace, etc.)

**Vídeos publicados:** instalacion-demo.mp4 (guía instalación, 8 pasos + onboarding), **tevsys_Guia_Rapida_Configuracion.mp4** (Drive, 2:36 min, embebido en /configuracion), precision-demo.mp4, precision-demo-volatilidad.mp4, precision-logs-guide.mp4, hyperclose-demo.mp4, hyperclose-dias-off-demo.mp4, evidencia-100k-perdida.mp4.

**Vídeos pendientes:** sml-demo.mp4 (SML en fase de validación, se hace desde escritorio). Vídeo ganancias 100k (+1.111€): no prioritario, dejar.

---

## 10. Archivos clave

| Archivo | Qué hace |
|---------|----------|
| HomeHeroSection.astro | Hero con imagen, grid, alineaciones |
| Footer.astro | Footer con iconos, enlaces, frase indie |
| BaseHead.astro | Favicon, apple-touch-icon, fuentes |
| nav.js | Config nav: Inicio, Empresas, Contacto (sin Acceso) |
| footer.js | Config columnas: Navegación, Producto, Legal |
| legal.astro | Aviso Legal (contenido mínimo, pendiente abogado) |
| privacidad.astro | Política de Privacidad (contenido mínimo) |
| terminos.astro | Términos de Uso (contenido mínimo) |
| index.astro | Home: cards, planes |
| contact.astro | Formulario por plan/demo |
| empresas.astro, empresas-thank-you.astro | Micro-página canal B2B |
| precision.astro, hyperclose.astro, sml.astro, evidencia.astro | Micro-páginas features |
| instalacion.astro | Página guía instalación demo (vídeo + pasos + enlace Paso 2 config) |
| configuracion.astro | Página guía configuración (vídeo Drive embebido, límites, panel) |

---

## 11. Documentos de referencia (orden de profundidad)

| Doc | Para qué |
|-----|----------|
| **PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md** (este) | Contexto completo — empezar aquí. §15 = mejoras EA/producto desde última actualización. |
| **PROMPT_DEEPSEEK_WEB_TEVSYS_ESTADO_COMPLETO.md** (proyecto TGP) | Estado web Mar 2026: plantilla unificada, Evidencia 100k, acordeón reporte MT5, plan vídeo, pendientes |
| Proyecto TGP: **ONBOARDING_ESSENTIAL_GUIAS_EDUCATIVAS_Y_MODALS.md**, **RESUMEN_SESION_MODALES_16MAR2026.md**, **QUE_CONTIENE_TGP_Modular_Skeleton_V11.md** | Estado detallado del EA: onboarding Essential, guías educativas F7, modales, Días ON/OFF, ZONA SAGRADA. |
| CHANGELOG-TEVSYS.md | Historial de todos los cambios, decisión por decisión |
| GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md | Specs vídeos, guiones, overlays, OBS/Clipchamp |
| CONTENIDO_WEB_TEVSYS_LANDING.md | Copy actual de toda la web |
| CARDS-NEXT-PHASE.md | Tracker micro-páginas, planes, copy freeze, evidencias |
| REFLEXION_DISENO_HERO_FOOTER_MAR2026.md | Reflexión hero + commits sesión 6 Mar |
| ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md | Resumen técnico por archivo |
| ESTRATEGIA_FAVICON_ICONOS_TEVSYS.md | Favicon, apple-touch-icon, PWA |
| PENDIENTE_VERIFICACION_EMAIL_LEADS.md | Verificación email: pendiente. §6 caso específico verificación antes de dar link demo (evitar bots, cuentas falsas). |
| LINKS_PARA_ENVIAR_DEMO_TEVSYS.md | Links Drive + instalación + plantillas email/WhatsApp/Telegram para enviar a leads |
| PLANTILLA_EMAIL_DEMO_TEVSYS.md | Plantilla email detallada con pasos instalación (proyecto TGP) |
| ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md | Prioridades, pricing, early adopters, vídeos, academia Angelo. Plan ordenado |
| ESTRATEGIA_ACADEMIAS_TEVSYS.md (proyecto TGP) | Estrategia academias: qué mostrar, logros, cómo abordar. 20 Mar 2026 |

---

## 12. Commits recientes

**Sesión Ene 2026 (flujos acceso, formulario, thank-you):**
- feat(contact): intros features "Ya has visto en esta página" + enlaces para profundizar
- feat(home): cards Advanced/Pro — "En [plan] ofrecemos todo lo de..."
- fix(sml): quitar "En Essential demo no está activo"
- fix(copy): reporte oficial MT5, quitar Auditable
- style(hero): punto tagline 32px → 22px
- feat(hero): plataforma pionera en + gestión de riesgo
- style(contact): badge DEMO más pequeño
- feat(contact): checkbox lista espera Advanced/Pro — default Sí, AvisarCuandoDisponible
- feat(thank-you): mensaje destacado plan Advanced/Pro — lista espera + demo Essential
- feat(contact): nota dev debajo imagen Advanced/Pro — demo Essential
- feat(contact): badge DEMO sobre imagen Essential (acceso, demo, plan essential)
- fix(contact): unificar Contacto=Acceso, allowNoPlan, imagen fallback
- fix(acceso): bullet 2 "Te orientamos según tu perfil" + doc estrategia capacidad
- feat(acceso): bullets Opción A + doc roadmap/plan claro

**Sesión 6 Mar 2026:**
- fix(precision): resaltado amarillo y autoabrir acordeón en #precision-logs-guide
- feat(web): favicon tevsys SVG + enlace apple-touch-icon
- fix(web): volver a favicon.png para logo en pestaña
- feat(web): añadir apple-touch-icon 180x180 para móvil
- feat(footer): enlaces micropáginas, logo y columna Producto
- feat(footer): iconos SVG contacto (email, Barcelona) en amarillo tevsys
- feat(footer): guion amarillo en títulos y hover amarillo en enlaces
- feat(hero): nueva imagen mano robótica + candado con logo en etiqueta
- style(hero): imagen más grande, alinear borde superior con "T", reducir extensión izquierda

**Sesión Ene 2026 (formulario contacto + Empresas):**
- feat(contact): diferenciar horarios/noticias en Advanced y Pro vs Essential
- feat(contact): Pro con "eventos personalizados" en horarios/noticias
- feat(contact): bullets acumulativos (Essential +) en Advanced y Pro
- feat(empresas): micro-página canal empresas + nav + bullet a /company/empresas
- fix(empresas): margin-bottom 3rem antes del footer
- style(empresas): fondo oscuro #06080d, hook como micropáginas, campos con borde ámbar

**Sesión Mar 2026 (feedback Angello):**
- feat(home): cards más clicables — flecha + hover marcado
- feat(hero): "Tu capital" → "Tu trading merece más que buenas intenciones"
- style(home): jerarquía sección valor — título prominente, párrafo secundario

**Sesión 19 Mar 2026 (primer lead, demo, instalación):**
- feat(instalacion): nueva página /instalacion con vídeo instalacion-demo.mp4 + pasos 1-8
- feat(footer): enlace "Cómo instalar" en Producto (primera posición)
- docs: LINKS_PARA_ENVIAR_DEMO_TEVSYS.md, PLANTILLA_EMAIL_DEMO_TEVSYS.md

**Sesión 21 Mar 2026 (guía configuración, flujo demo, spam):**
- feat(configuracion): nueva página /configuracion con vídeo Drive embebido (2:36 min)
- feat(footer): enlace "Guía de configuración" en Producto (debajo Cómo instalar)
- feat(instalacion): sección Paso 2 — Guía de configuración con enlace a /configuracion
- feat(contact): flow=demo — promesa "Te enviaremos la demo y las guías de instalación y configuración"
- docs(LINKS): Correo 1 pre-aviso (spam), Correo 2 con link configuración, todas las plantillas actualizadas
- docs(PLANTILLA_EMAIL): añadir link configuración

---

## 13. Resumen ultracompacto (para pegar en chat)

```
tevsys: landing Astro (tevsys-landiing.vercel.app / tevsys.io). Nav: Inicio | Empresas | Contacto. Hero H1: "Tu trading merece más que buenas intenciones". Cards con flecha + hover clicable (Precisión, HyperClose, SML, Evidencia). 56 operativas documentadas. Evidencia: operativa 4.56 Essential (100 lotes, 95 € precisión) + 7 capturas. Footer: Cómo instalar, Guía configuración, Producto, Legal. /instalacion: vídeo + Paso 2 (enlace a config). /configuracion: vídeo guía configuración (2:36 min, Drive). Contact flow=demo: "Te enviaremos la demo y las guías de instalación y configuración". Demo: .ex5 15 días. Flujo email: Correo 1 (pre-aviso spam) → Correo 2 (Drive + instalacion + configuracion). Docs: LINKS_PARA_ENVIAR_DEMO_TEVSYS (Correo 1+2, checklist). Ver §15, §16.
```

---

## 14. Flujos contacto — mapa completo (Ene 2026)

| Entrada | URL | Imagen | Badge | Nota dev | Checkbox avisar | Thank-you |
|---------|-----|--------|-------|----------|-----------------|-----------|
| Contacto | /company/contact | Essential | DEMO | No | No | Essential listo; Adv/Pro en desarrollo |
| Elegir Essential | ?plan=essential | Essential | DEMO | No | No | Genérico |
| Elegir Advanced | ?plan=advanced | Advanced | No | Sí | Sí (default) | Lista espera Adv; demo Essential |
| Elegir Pro | ?plan=pro | Pro | No | Sí | Sí (default) | Lista espera Pro; demo Essential |
| Demo (feature) | ?flow=demo&feature=… | Essential | DEMO | No | No | Genérico — Intro: "Ya has visto [X] en esta página. Rellena el formulario y te enviamos los enlaces para profundizar y los pasos para acceder a la demo." |

---

## 15. EA / Producto tevsys — mejoras y decisiones desde última actualización del prompt (Mar 2026)

*Todo lo que hemos hecho en el EA (proyecto TGP/tevsys) desde la última vez que se pasó este prompt a DeepSeek. Sirve para que el copy y los vídeos de la web reflejen el producto real y las decisiones de producto.*

### 15.1 Onboarding Essential — estado actual

- **Flujo:** Bienvenida → Qué incluye ESSENTIAL → Recordatorio Diario (¿quieres aviso de rotación?) → Configuración guardada. Todo conectado al input **"Mostrar guías educativas" (F7)**.
- **Modal Bienvenida (4 líneas):** L1 = "Bienvenidos a TEVSYS ESSENTIAL"; L2 = frase entre comillas ("Tu mejor version como trader empieza aqui."); L3 = "Nosotros protegemos. Tu creces." (teal); L4 = "Que disfrutes del vuelo. ;)" en gris al final. Ancho 500px, bodyH 240px.
- **Modal "Qué incluye ESSENTIAL":** Bullets: precisión milimétrica, HyperClose, límites diarios (un día activo), rotación 00:00, emergencia -20%, Noticias/Horarios (próximamente). **Días ON/OFF:** texto claro en 3 líneas: "Días ON/OFF: siempre protegido." / "Desde el fin de semana solo puedes dejar el Lunes en OFF." / "El resto de días: rotación normal." (sin liarse; antes se cortaba o sonaba confuso).
- **Recordatorio Diario:** Pregunta: "¿Quieres que te mostremos la rotación automática cada día a las **00:00 (inicio del día)**?" — **Ya no decimos "cierre del mercado"**: la rotación real del EA es a las 00:00 servidor, no al cierre de sesión. Coherente con "Rotacion automatica: a las 00:00" en Qué incluye.
- **Modal Configuración guardada:** Tras Sí/No al recordatorio, se muestra "CONFIGURACION GUARDADA" + "Puedes cambiar esta preferencia en cualquier momento." + **"En inputs (F7), 'Mostrar guías educativas' en False"** / **"  desactiva también el aviso de rotación."** (en dos líneas para que no se corte en pantalla).

### 15.2 Interruptor único "Mostrar guías educativas" (input F7)

- **Decisión:** Un solo input controla todo lo educativo: onboarding Essential + aviso de rotación automática + bienvenida Advanced.
- **Si Mostrar guías educativas = False:** (1) No se muestra el onboarding Essential en primer arranque — el usuario va directo al panel. (2) No se muestra el popup de rotación al cambiar de día (la rotación de días sigue ejecutándose; solo se oculta el aviso). (3) No se muestra el MessageBox de bienvenida Advanced (ya estaba así).
- **Implementación:** EA (OnInit): en primer arranque Essential, si `!MostrarGuiasEducativas` → no llamar a Bienvenida, marcar first run, `g_essentialFlowStep = -1`; `g_panelPendientePorEssential` solo true si `MostrarGuiasEducativas`. DaysRotationSystem: antes de mostrar el popup de rotación se comprueba `MostrarGuiasEducativas`; si false no se muestra.
- **Para copy/web:** En Essential el usuario puede "apagar" todos los popups educativos desde F7. No hace falta un segundo control solo para el aviso de rotación.

### 15.3 Días ON/OFF en Essential

- **Regla clara:** Desde el fin de semana solo pueden poner **el Lunes** en OFF (primer día de la semana). El resto de días: rotación normal (el EA rota a las 00:00). Texto en modals sin sugerir "reconfigurar en finde" para otros días; en Essential la configuración es día a día.
- **Modales Día OFF (nivel 1 y 3):** Opción 1 en negrita: "Espera a mañana (día activo)". Opción 2 según plan: Essential = "Sé consecuente: el día OFF se mantiene hasta mañana o el próximo día activo."; Advanced+ = "Espera al fin de semana para reconfigurar". SOLUCIÓN en nivel 3: Essential = "Espera a mañana (día activo). Sé consecuente con tu decisión."; otros = "Espera al fin de semana para reconfigurar días OFF."
- **Modal "DÍA OFF - NO SE PUEDE ACTIVAR PROTECCIÓN":** Si el usuario ya está bloqueado y hoy es OFF (ej. configuró Lunes OFF desde el domingo), no decir "Activa el día en inputs (F7)"; se muestra "SITUACIÓN ACTUAL" con opciones (mañana / próximo día activo en Essential; fin de semana en otros).

### 15.4 Confirmación irreversible y otros modales Essential

- **Confirmación Irreversible (bloquear límites):** En cuentas Essential el texto dice "hasta **hoy 23:59**"; en Advanced/Pro "hasta el **viernes 23:59**".
- **Inputs ignorados (cuando operan bloqueados):** Última línea según plan: Essential = "Bloqueo activo hasta hoy 23:59."; otros = "Bloqueo activo hasta el fin de semana." Secciones "Cambios detectados" y "Configuración real protegida" con badge color arena.

### 15.5 Documentación y recordatorio futuro

- **Docs actualizados (proyecto TGP):** ONBOARDING_ESSENTIAL_GUIAS_EDUCATIVAS_Y_MODALS.md (estado "conectados a guías educativas"), REFINAMIENTO_MODALES_ONBOARDING_MAR2026.md, INVENTARIO_MODALES_PENDIENTES_AJUSTE.md, QUE_CONTIENE_TGP_Modular_Skeleton_V11.md (entrada 16 Mar 2026), RESUMEN_SESION_MODALES_16MAR2026.md. Autoprompt para nuevo chat de modales: AUTOPROMPT_CHAT_MODALES_TEVSYS.md.
- **Recordatorio producto:** Cuando se implementen **Horarios** y **Noticias** en el EA, actualizar los modals de bienvenida y "Qué incluye": quitar "próximamente" y describir la función. Nuevos popups educativos deberían respetar el interruptor "Mostrar guías educativas" si aplica.

### 15.6 Dónde está el código del EA (para no confundir con la web)

- El EA y sus modales **no** están en el repo de la landing. Están en las carpetas **Terminal** de MetaTrader 5 (rutas Infinox y ActivTrades). Cualquier cambio de copy o flujo de modales se hace en `Include/TGP/PopupSystem.mqh`, `ModalPremium.mqh`, `DaysRotationSystem.mqh`, `Experts/TGP_MODULAR_SKELETON_V11.mq5` en esas rutas. La landing (tevsys-landiing) solo referencia al producto; el producto se edita en el proyecto TGP/tevsys (Cursor workspace "poyecto TGP con cursor").

### 15.7 Demo Essential — listo para enviar (19 Mar 2026)

- **Build:** .ex5 compilado desde TGP_MODULAR_SKELETON_V11. Renombrar a `tevsys_Essential_Demo_15dias.ex5` para distribución.
- **Demo 15 días:** LicenseKey vacío → modo demo. GV_DEMO_TIMESTAMP por cuenta. DEMO_DAYS=15.
- **Buffer precisión:** 0,01% (ajustado desde 0,02% por caso cuenta grande).
- **Metadatos EA:** copyright "Copyright 2025, tevsys"; description "Protección de capital y disciplina automatizada. Límites, precisión milimétrica, HyperClose. — tevsys.io".
- **Onboarding overlay:** Bienvenida (y Bienvenida Advanced) con overlay (pantalla negra, impacto). A partir del segundo modal (Essential, Recordatorio, etc.) sin overlay — gráfico visible.
- **Hosting:** Drive (o similar). Link estable. Mismo link para todos.

### 15.8 Vídeo instalación — guion y overlays

- **Nombre archivo:** instalacion-demo.mp4
- **Pasos (8):** 1) Descarga desde enlace por mail. 2) Abre MT5. 3) Activa trading algorítmico (siempre encendido). 4) Archivo → Abrir carpeta de datos. 5) MQL5 → Experts. 6) Arrastra archivo descargado. 7) Abre Navegador, clic derecho Experts → Actualizar. 8) Arrastra al gráfico o doble clic.
- **Overlays onboarding:** "Sigue los 3 pasos de bienvenida" (o similar). Cierre: "tevsys cargado. Tu disciplina y riesgo, automatizados. 🎯". Final: pantalla negra + "tevsys — Where precision meets the edge".

---

---

## 16. Estrategia academias — siguiente fase (20 Mar 2026)

**Objetivo:** Buscar academias de trading donde presentar tevsys (web + producto), crear interés, mostrar evidencia.

**Estado actual (lo que tenemos para mostrar):**
- **Web:** Primera web de Gabi. Nivel de calidad profesional: hero, 4 micropáginas (Precisión, HyperClose, SML, Evidencia), plan Essential, formulario, página instalación.
- **Evidencia:** 56 operativas documentadas. Caso extremo Essential: 100 lotes, cierre con 95 € de precisión (7 capturas MT5 + panel).
- **Demo:** tevsys_Essential_Demo_15dias.ex5 lista para enviar. Vídeo instalación en /instalacion.
- **Logros:** Mismo motor en todos los planes; precisión validada; HyperClose; trazabilidad MT5.

**Preparación:** Web lista para enseñar. Docs: CHECKLIST_WEB_TEVSYS_ANTES_REUNION_ACADEMIA.md, ESTRATEGIA_ACADEMIAS_TEVSYS.md (proyecto TGP). Chuleta reunión: CHULETA_1_PAGINA_REUNION_ANGELLO_90_MIN.md.

---

## 17. SEO y Vercel Web Analytics (Mar 2026)

### 17.1 Meta global
- **Archivo:** `src/config/settings.js`
- **title:** `tevsys — Protección de capital y límites automáticos para trading MT5`
- **description:** `Plataforma de disciplina automatizada para MetaTrader 5. Límites de pérdida y ganancia que se cumplen. Cierre preciso documentado. 56 operativas con evidencia verificable. Para traders, prop firms y auditorías.`
- Usado por BaseHead en todas las páginas salvo las que definen `seo` propio.

### 17.2 Páginas con meta propia
- **contact.astro:** Título `Contacto y demo | tevsys`. Corregido bug Astro Odyssey (antes: "Contact | Astro Odyssey Theme").

### 17.3 robots.txt
- **Archivo:** `public/robots.txt`
- Allow all. Sitemap: `https://www.tevsys.io/sitemap.xml`

### 17.4 Vercel Web Analytics
- **Paquete:** `@vercel/analytics`
- **Integración:** `inject()` en `Base.astro` (antes de `</body>`)
- **Activación:** Vercel dashboard → proyecto → pestaña Analytics. Habilitar Web Analytics.
- **Métricas:** Visitantes únicos, vistas, páginas más visitadas, referrers. Gratis en plan Hobby.

### 17.5 Google Search Console
- Verificación: archivo `google644b0bf8f5617256.html` + meta tag en BaseHead (respaldo).
- Sitemap: `sitemap.xml`. Checklist 5 puntos en `docs/SEO_ANALYTICS_TEVSYS.md`.

### 17.6 Core Web Vitals / optimización móvil
- **Problema resuelto:** Carga lenta en móvil (~5 MB imágenes, LCP 15 s).
- **Cambios:** (1) WebP ~40 imágenes (hero, cards, planes, logo, contact, evidencia, hyperclose, precision). (2) preconnect fuentes. (3) Hero fetchpriority, preload. (4) picture WebP en toda la web.
- **Resultado:** Web más rápida en móvil. Build en Vercel genera WebP (prebuild).
- Doc: `docs/PERFORMANCE_IMAGENES_TEVSYS.md`. CHANGELOG §48.

---

**Última actualización:** 19 Mar 2026. §6 Lista de precios oficial (30k/120k/240k, margen 20%). §50 CHANGELOG. Fuente de verdad: PLANES_PRECIOS_FEATURES_TEVSYS.md.
