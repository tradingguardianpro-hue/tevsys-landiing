# Prompt maestro para DeepSeek — Proyecto tevsys (web completa)

**Para:** DeepSeek (otro miembro del equipo)  
**Objetivo:** Que tengas contexto completo de la web tevsys, con pelos y señales, para trabajar en vídeos, copy, diseño o cualquier tarea sin perder el hilo.  
**Usar:** Leer este documento al empezar cualquier tarea relacionada con la landing. Luego ir al doc específico si hace falta.

---

## 0. Cómo pensamos al desarrollar la web

- **Prioridad:** Claridad de propuesta de valor frente a brevedad extrema. El producto es novedoso; conviene explicitar categoría + capacidad diferencial desde el primer pantallazo.
- **Flujo de conversión:** Card → micro-página de feature → CTA a demo/contacto. Mostrar prueba antes de pedir datos.
- **Sistema visual:** Negro + icono gris + acento amarillo (#f5b041) + iridiscente moderado. No sobrecargar; dar protagonismo al mensaje.
- **Validación:** Primero en `tevsys-landiing.vercel.app`; luego en `tevsys.io` (puede ir con retraso por DNS/CDN).
- **Copy freeze v1 activo:** Solo cambiar copy por bug, inconsistencia o decisión explícita de producto.
- **Regla de documentación:** Si algo se publica en web, registrar en `CHANGELOG-TEVSYS.md`. Tracker interno en `CARDS-NEXT-PHASE.md` sección 7.

---

## 1. Proyecto y rutas

| Concepto | Valor |
|----------|-------|
| Repo | tevsys-landiing (Astro + Odyssey Theme) |
| Deploy principal | tevsys-landiing.vercel.app |
| Dominio oficial | tevsys.io |
| Videos | `public/videos/features/` |
| Imágenes evidencia | `public/images/evidence/` |
| Imagen hero | `public/mano robotica central web.png` |

---

## 2. Hero (Mar 2026) — con pelos y señales

### Copy
- **H1:** `Tu capital merece más que buenas intenciones`
- **Interés (2 líneas):** `Plataforma pionera en verificación de disciplina automatizada` / `y gestión de riesgo para mercados financieros.`
- **Tagline:** `Where precision meets the edge` — punto amarillo `32px`
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

## 3. Footer (Mar 2026)

- **Iconos SVG:** email y ubicación en amarillo tevsys (`public/icons/icon-email.svg`, `icon-location.svg`)
- **Contacto:** info@tevsys.io, Barcelona
- **Guion amarillo (—)** antes de títulos de columnas (Navegación, Producto)
- **Hover amarillo** en enlaces
- **Enlaces micropáginas:** Precisión, HyperClose, SML, Evidencia
- **Logo:** favicon.png junto a tevsys™
- **Fondo:** theme-surface-1 (unificado, sin fondo diferenciado)
- **Frase indie:** "❤️ Made with love for trading. — Desarrollado independientemente. Sin inversores. Sin excusas." (link, hover amarillo)

---

## 4. Favicon y iconos

- **PC:** `favicon.png` (logo chevrones blanco/naranja) en `public/`
- **Móvil:** `apple-touch-icon.png` 180×180 — link en BaseHead
- **Pruebas rechazadas:** logo-tevsys.png y favicon-tevsys-icon.svg como favicon principal (volvimos a favicon.png)
- **Pendiente:** validar en dispositivos móviles reales; puede seguir mostrando "T" al añadir a pantalla de inicio

---

## 5. Home — cards de valor (4)

| Card | Hook | Imagen | Enlace |
|------|------|--------|--------|
| 0,06% error | El mercado no perdona. Nosotros tampoco. | card-1-input.png | /features/precision |
| HyperClose | La diferencia entre querer parar y no poder seguir. | card-2-hyperclose.png | /features/hyperclose |
| SML | No es obligatorio. Es una recompensa. | card-3-sml.png | /features/sml |
| Evidencia | No confíes. Comprueba. | card-4-evidencia.png | /features/evidencia |

**Sección valor:**
- Título: `¿Cuánto dinero has perdido por no parar a tiempo?`
- Subtítulo: `Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`
- Trazabilidad: `Trazabilidad completa: logs, panel y reporte MT5. Auditable.`
- Mecanismo: `Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`

---

## 6. Planes y flujos de contacto (Essential / Advanced / Pro) — Ene 2026

### Flujos unificados
- **Acceso / Contacto:** Nav "Acceso" y "Contacto" → `/company/contact?flow=acceso`. Misma experiencia.
- **Redirect:** `/company/contact` sin params → `?flow=acceso`
- **CTAs planes:** `/company/contact?plan=essential|advanced|pro`
- **Demo:** `Descargar demo` → `/company/contact?flow=demo`

### Imágenes y badges
- **Essential (bronce):** Imagen esse-form-v4.png. Badge "DEMO" arriba derecha (ámbar, opacidad, tamaño compacto).
- **Advanced (plata) / Pro (oro):** Imágenes adva-form-v4.png, pro-form-v4.png. Sin badge. Nota debajo imagen (cursiva): "Advanced/Pro en desarrollo. La demo disponible ahora es Essential."

### Formulario
- **allowNoPlan:** flow=acceso o flow=demo → permite enviar sin plan preseleccionado.
- **Checkbox Advanced/Pro:** Solo visible cuando plan=advanced o plan=pro. "Sí, avísame cuando [Advanced/Pro] esté disponible." — **default marcado** (psicología: más síes que noes). Formspree: `AvisarCuandoDisponible: Sí|No`. Caja con borde ámbar.
- **Lista de espera:** Filtrar Formspree por Plan + AvisarCuandoDisponible=Sí cuando Advanced/Pro esté listo.

### Thank-you
- **flow=acceso:** "Essential está listo; Advanced y Pro en desarrollo. Te indicaremos el siguiente paso según tu perfil."
- **plan=advanced|pro:** Bloque destacado: "Te añadimos a la lista de espera de Advanced/Pro. Mientras tanto, la demo disponible es Essential."

### Bullets
- **Acceso:** Essential listo. 24h. Precisión, HyperClose, días OFF, config semanal. Empresas.
- **Essential:** Configuras una vez, límite diario, HyperClose, 24h, Empresas.
- **Advanced/Pro:** Acumulativos. Link empresas. Ref: `CHANGELOG-TEVSYS.md` §29–31

---

## 6.1 Empresas (canal B2B) — `/company/empresas`

- **Nav:** Inicio | Empresas | Acceso | Contacto. Empresas accesible desde home y todas las micro-páginas (Precision, HyperClose, SML, Evidencia).
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

### 7.2 HyperClose (`/features/hyperclose`) — CERRADA salvo Día OFF

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
6. Bloque "Compatibilidad con día OFF" — **PENDIENTE vídeo** (hyperclose-demo-dia-off.mp4)

**Día OFF pendiente:** Grabar vídeo: desbloquear EA, miércoles OFF configurado, intentar operar → cierre + semáforos.

---

### 7.3 SML (`/features/sml`) — Pendiente vídeo

**Copy freeze:**
- Título: `SML: protege parte de lo ganado sin frenar tu operativa.`
- Hook: `Actívalo cuando quieras. Decide cuánto ampliar el margen: del 5% al 25% (mínimo 75% protegido).`

**Pendiente:** sml-demo.mp4. SML en fase actual para Advanced/Pro (lista de espera); en Essential demo no está activo todavía.

---

### 7.4 Evidencia (`/features/evidencia`) — Pendiente vídeo

**Copy freeze:**
- Título: `Evidencia verificable: aquí no hay "creemos".`
- Hook: `Lo que no se puede demostrar, no cuenta.`

**Pendiente:** evidencia-demo.mp4

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

**Vídeos pendientes:** hyperclose-demo-dia-off.mp4, sml-demo.mp4, evidencia-demo.mp4

---

## 10. Archivos clave

| Archivo | Qué hace |
|---------|----------|
| HomeHeroSection.astro | Hero con imagen, grid, alineaciones |
| Footer.astro | Footer con iconos, enlaces, frase indie |
| BaseHead.astro | Favicon, apple-touch-icon, fuentes |
| nav.js | Config nav: Inicio, Empresas, Acceso, Contacto |
| footer.js | Config enlaces y columnas |
| index.astro | Home: cards, planes |
| contact.astro | Formulario por plan/demo |
| empresas.astro, empresas-thank-you.astro | Micro-página canal B2B |
| precision.astro, hyperclose.astro, sml.astro, evidencia.astro | Micro-páginas features |

---

## 11. Documentos de referencia (orden de profundidad)

| Doc | Para qué |
|-----|----------|
| **PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md** (este) | Contexto completo — empezar aquí |
| CHANGELOG-TEVSYS.md | Historial de todos los cambios, decisión por decisión |
| GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md | Specs vídeos, guiones, overlays, OBS/Clipchamp |
| CONTENIDO_WEB_TEVSYS_LANDING.md | Copy actual de toda la web |
| CARDS-NEXT-PHASE.md | Tracker micro-páginas, planes, copy freeze, evidencias |
| REFLEXION_DISENO_HERO_FOOTER_MAR2026.md | Reflexión hero + commits sesión 6 Mar |
| ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md | Resumen técnico por archivo |
| ESTRATEGIA_FAVICON_ICONOS_TEVSYS.md | Favicon, apple-touch-icon, PWA |
| PENDIENTE_VERIFICACION_EMAIL_LEADS.md | Verificación email (double opt-in): pendiente de decisión, opciones valoradas |
| ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md | Prioridades, pricing, early adopters, vídeos, academia Angelo. Plan ordenado |

---

## 12. Commits recientes

**Sesión Ene 2026 (flujos acceso, formulario, thank-you):**
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

---

## 13. Resumen ultracompacto (para pegar en chat)

```
tevsys: landing Astro (tevsys-landiing.vercel.app / tevsys.io). Nav: Inicio | Empresas | Acceso | Contacto. Contacto=Acceso unificado (?flow=acceso). Hero: mano robotica central web.png. Footer: iconos amarillos, micropáginas. Formulario: imagen por plan; Essential con badge DEMO; Advanced/Pro con nota "demo disponible es Essential" debajo imagen; checkbox "avísame cuando esté disponible" (default Sí) solo Advanced/Pro; Formspree AvisarCuandoDisponible. Thank-you flow-aware (acceso, plan advanced/pro con bloque lista espera). Precisión CERRADA. HyperClose CERRADA salvo Día OFF. Empresas: canal B2B, fondo #06080d. Docs: CHANGELOG-TEVSYS §29–31, ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA, CONTENIDO_WEB.
```

---

**Última actualización:** Ene 2026. Si algo cambia, actualizar CHANGELOG y este prompt.

---

## 14. Flujos contacto — mapa completo (Ene 2026)

| Entrada | URL | Imagen | Badge | Nota dev | Checkbox avisar | Thank-you |
|---------|-----|--------|-------|----------|-----------------|-----------|
| Acceso / Contacto | ?flow=acceso | Essential | DEMO | No | No | Essential listo; Adv/Pro en desarrollo |
| Elegir Essential | ?plan=essential | Essential | DEMO | No | No | Genérico |
| Elegir Advanced | ?plan=advanced | Advanced | No | Sí | Sí (default) | Lista espera Adv; demo Essential |
| Elegir Pro | ?plan=pro | Pro | No | Sí | Sí (default) | Lista espera Pro; demo Essential |
| Demo (feature) | ?flow=demo&feature=… | Essential | DEMO | No | No | Genérico |
