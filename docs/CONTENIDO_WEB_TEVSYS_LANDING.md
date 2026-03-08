# Contenido web tevsys landing (actualizado)

Documento de contenido/copy actual para revisión de equipo.

---

## Header
- **Logo:** `tevsys` en óvalo (sin estrella)
- **Navegación:** Inicio | Empresas | Acceso | Contacto
- **CTA destacado en nav:** Acceso
- **Empresas:** enlaza a `/company/empresas` (micro-página canal B2B)

---

## Hero
- **H1:** `Tu capital merece más que buenas intenciones`
- **Línea aclaratoria (2 líneas):** `Plataforma de verificación de disciplina automatizada y gestión de riesgo para mercados financieros.`
- **Tagline:** `Where precision meets the edge`
- **Punto de tagline:** amarillo grande (`32px`)
- **Botón:** `Descargar demo →` (amarillo)
- **Disponibilidad:** `Disponible en MT5 · Próximamente: más plataformas`
- **Imagen:** mano robótica + candado (`mano robotica central web.png`). Logo tevsys en etiqueta negro apagado (esq. sup. izq.). Alineación: borde superior con la «T» del título; borde izquierdo con inicio de «Trading Edge Verification System».
- **Reflexión diseño + commits:** `REFLEXION_DISENO_HERO_FOOTER_MAR2026.md` | `CHANGELOG-TEVSYS.md` §27.
- **Texto bajo imagen:** `Trading Edge Verification System`

### Marco de copy del hero (AIDA)
- **Atención:** `Tu capital merece más que buenas intenciones`
- **Interés:** `Plataforma de verificación de disciplina automatizada y gestión de riesgo para mercados financieros.`
- **Deseo:** `Where precision meets the edge`
- **Acción:** `Disponible en MT5 · Próximamente: más plataformas` + CTA `Descargar demo →`
- **Criterio:** mantener mensaje completo (sin recortes) y optimizar presentación con salto de línea para legibilidad.

---

## Sección principal de valor

### Título
`¿Cuánto dinero has perdido por no parar a tiempo?`

### Subtítulo
`Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`

### Línea de trazabilidad (credibilidad)
`Trazabilidad completa: logs, panel y reporte MT5. Auditable.`

### Línea de apoyo (mecanismo)
`Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`

### Cards (4)

#### 1) 0,06% error promedio
- Hook: `El mercado no perdona. Nosotros tampoco.`
- Texto: Ajuste en tiempo real que compensa slippage, spread y comisiones. Cierre donde el trader configuró. Logs auditables y panel que muestra el cálculo. **50 operativas documentadas**, 0,06% error medio. **Validado en 5 brokers distintos.**

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

#### 4) Evidencia verificable
- Hook: `No confíes. Comprueba.`
- Texto: `Panel, logs y reporte oficial MT5 por cada cierre. Para trader, inversor o auditor. No hay "creemos que cumple": hay evidencia medible. Cada cierre, cada bloqueo y cada rotación queda registrado.`

---

## Nueva sección (template) — Planes

### Título
`Elige tu cuenta`

### Subtítulo
`Selecciona el plan que mejor encaja contigo. Luego ajustamos contigo los detalles.`

### Planes
- Essential → botón `Elegir Essential`
- Advanced → botón `Elegir Advanced`
- Pro → botón `Elegir Pro`

**Flujo actual:** cada botón abre contacto con plan en URL (`?plan=...`).

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

**Bullets por plan (acumulativos, Ene 2026):**
- **Essential:** 1) Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF. 2) Límite diario, precisión milimétrica y HyperClose incluidos. 3) Respuesta en menos de 24h con los siguientes pasos. 4) [Empresas o contacto corporativo](/company/empresas) *(link a micro-página)*
- **Advanced:** 1) Todo lo de Essential, además: 2) Protección configurable toda la semana + SML para operativas avanzadas. 3) Puedes marcar días OFF para proteger tu operativa. 4) Horarios de mercado y noticias (mejorados): en fase de desarrollo. 5) [Empresas o contacto corporativo](/company/empresas) *(link a micro-página)*
- **Pro:** 1) Todo lo de Advanced, además: 2) Para capitales más altos: drawdown y estructura completa. 3) Horarios de mercado y noticias (con eventos personalizados): en fase de desarrollo. 4) [Empresas o contacto corporativo](/company/empresas) *(link a micro-página)*

**Link empresas:** Enlaza a `/company/empresas` (micro-página canal B2B). Ref: `CHANGELOG-TEVSYS.md` §29, §30.

**Flujo Acceso** (`?flow=acceso`): bullets específicos — 1) Essential listo para probar. Advanced y Pro en desarrollo — lista de espera. 2) Respuesta en menos de 24h. Te orientamos según tu perfil. 3) Precisión y HyperClose validados con operativas reales. Días OFF y configuración flexible de toda la semana. 4) Empresas. Imagen Essential (bronce) con badge "DEMO". Redirect `/company/contact` → `?flow=acceso`. Ref: `ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md`.

**Formulario contacto (flujos Advanced/Pro):**
- Checkbox debajo Experiencia: "Sí, avísame cuando [Advanced/Pro] esté disponible." — default marcado. Formspree: `AvisarCuandoDisponible: Sí|No`. Caja con borde ámbar.
- Nota debajo imagen: "Advanced/Pro en desarrollo. La demo disponible ahora es Essential." (cursiva).
- Thank-you: bloque destacado "Te añadimos a la lista de espera de Advanced/Pro. Mientras tanto, la demo disponible es Essential."

**Contacto = Acceso:** Nav Contacto → `?flow=acceso`. allowNoPlan para flow acceso/demo.

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
  - Hook: `• 50 operativas documentadas. 0,06% de error medio en condiciones normales.`
  - Transparencia: incluye escenarios extremos documentados con desviación puntual hasta `~0,39%`.
- `SML`:
  - Título: `SML: protege parte de lo ganado sin frenar tu operativa.`
  - Hook: `• Actívalo cuando quieras. Decide cuánto ampliar el margen: del 5% al 25% (mínimo 75% protegido).`
  - Disponibilidad actual: validación para Advanced/Pro (lista de espera). En Essential demo no activo todavía.
- `Evidencia`:
  - Título: `Evidencia verificable: aquí no hay "creemos".`
  - Hook: `• Lo que no se puede demostrar, no cuenta.`
  - Soporte: panel, logs y reporte oficial.

### Estado actual Precisión (Mar 2026)
- **Demo rápida:** `precision-demo.mp4` (1 min 7 s, con audio). Embed compacto que se expande al dar play.
- **Aquí se decide el cierre:** enlace a demo + autoplay. Acordeón "Ir a demo en alta volatilidad" → `precision-demo-volatilidad.mp4` (límite -1,50%, cierre +1,83% en alta volatilidad). Vídeo mejorado con 6 overlays definitivos (Ene 2026).
- **50 operativas** documentadas (hook y KPIs).
- Primera evidencia y Semáforo enlazan a la misma demo; scroll + resaltado al llegar.

### Estado actual HyperClose (Mar 2026)
- **Demo rápida:** `hyperclose-demo.mp4` (1 min 35 s, sin audio). Cierre, 3 niveles semáforo, 7 intentos. Nota: "Vídeo editado para acortar esperas (cadencia 30 s entre modales)."
- **Cierre inmediato y Semáforo:** ambos enlazan a la demo. Acordeón "Ver capturas de los 3 modales" con imágenes de cada nivel.
- **Pendiente:** vídeo Día OFF.

### Pendiente inmediato
- Vídeo Día OFF para HyperClose.
- Mantener doble capa de evidencia en Precision/HyperClose (resumen + detalle técnico).
- SML y Evidencia: videos finales según guía de producción.

---

## Pendientes para la próxima sesión

1. Grabar y publicar vídeo Día OFF para HyperClose.
2. Versiones finales de video para `sml` y `evidencia`.

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

- Hook de apertura:
  - `50 operativas documentadas. 0,06% de error medio en condiciones normales.`

- Bloque `Resumen estadístico` (lectura rápida):
  - `50 operativas documentadas`
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
  - `50 operativas documentadas`
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
- Demo principal: `precision-demo.mp4` (1 min 7 s, con audio). Embed compacto, autoplay al enlazar.
- Acordeón "Ir a demo en alta volatilidad" → `precision-demo-volatilidad.mp4`. **Vídeo mejorado** (Ene 2026) con 6 overlays definitivos: 1) Abro operación. Límite -1,50%/1,50%. Mercado alta volatilidad. 2) Panel en tiempo real: flotante y protección activa. 3) Cero intervención. — tevsys ejecuta. 4) Cálculo en curso. Cierre inminente. 5) Cierre en ganancias (+1,83%). Protección en condiciones extremas. 6) Alta volatilidad. Mismo compromiso. — tevsys. Ref: CHANGELOG §28.1.
- **50 operativas** documentadas en hook, KPIs y card home.

### Criterio de publicación (recordatorio)

- `Dossier completo` no se presenta en abierto en este bloque.
- Queda reservado a flujo cualificado (interés real/empresa) según estrategia de capas de evidencia.
