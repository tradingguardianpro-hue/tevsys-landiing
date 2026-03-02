# Contenido web tevsys landing (actualizado)

Documento de contenido/copy actual para revisión de equipo.

---

## Header
- **Logo:** `tevsys` en óvalo (sin estrella)
- **Navegación:** Inicio | Acceso | Contacto
- **CTA destacado en nav:** Acceso

---

## Hero
- **H1:** `Tu capital merece más que buenas intenciones`
- **Línea aclaratoria (2 líneas):** `Plataforma de verificación de disciplina automatizada y gestión de riesgo para mercados financieros.`
- **Tagline:** `Where precision meets the edge`
- **Punto de tagline:** amarillo grande (`32px`)
- **Botón:** `Descargar demo →` (amarillo)
- **Disponibilidad:** `Disponible en MT5 · Próximamente: más plataformas`
- **Imagen:** mano robótica + candado (`hero-tevsys.png`)
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

### Línea de apoyo (mecanismo)
`Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`

### Cards (4)

#### 1) 0,06% error promedio
- Hook: `El mercado no perdona. Nosotros tampoco.`
- Texto: Ajuste en tiempo real que compensa slippage, spread y comisiones. Cierre donde el trader configuró. Logs auditables y panel que muestra el cálculo. **50 operativas documentadas**, 0,06% error medio. **Validado en 5 brokers distintos.**

#### 2) HyperClose
- Hook: `El cierre que no negocia.`
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

### Pendiente inmediato
- Reemplazar videos provisionales por versiones finales (40s) según guía de producción.
- Mantener doble capa de evidencia:
  - resumen rápido (usuario general)
  - detalle técnico por anclas/soportes (usuario avanzado)
- Instrucciones de validación activas en las 4 micro-páginas dentro de cada rectángulo técnico (`Cómo validarlo` + `Ver captura`) para no depender de assets visuales entre semana.

---

## Pendientes para la próxima sesión

1. Grabar y publicar versiones finales de video (40s) para `precision`, `hyperclose`, `sml`, `evidencia`.
2. Revisar consistencia visual global tras incorporar videos finales (alineación, pesos tipográficos y ritmo de lectura).

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
  - `48 operativas documentadas. 0,06% de error medio en condiciones normales.`

- Bloque `Resumen estadístico` (lectura rápida):
  - `48 operativas documentadas`
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
  - `48 operativas documentadas`
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

### Criterio de publicación (recordatorio)

- `Dossier completo` no se presenta en abierto en este bloque.
- Queda reservado a flujo cualificado (interés real/empresa) según estrategia de capas de evidencia.
