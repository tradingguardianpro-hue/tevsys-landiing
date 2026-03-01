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
- Texto 1: Tú eliges si activarlo. Y si lo haces, decides qué porcentaje de tus ganancias de ayer quieres blindar para hoy (entre el 5% y el 25%).
- Texto 2: Puedes operar con tus límites de siempre. Pero si un día decides activarlo y cierras en verde, el 75% de tus ganancias queda blindado. El resto, a por todas.
- Cierre actual: `Además, puedes definir límites por día y semana e incluir días OFF completos cuando no quieras operar.`

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
  - Hook: `• 50 operativas documentadas. 0,06% de error medio en condiciones normales. Hecho.`
  - Transparencia: incluye escenarios extremos documentados con desviación puntual hasta `~0,39%`.
- `SML`:
  - Título: `SML: protege parte de lo ganado sin frenar tu operativa.`
  - Hook: `• Actívalo cuando quieras. Decide cuánto ampliar el margen: del 5% al 25% (mínimo 75% protegido).`
- `Evidencia`:
  - Título: `Evidencia verificable: aquí no hay "creemos".`
  - Hook: `• Lo que no se puede demostrar, no cuenta.`
  - Soporte: panel, logs y reporte oficial.

### Pendiente inmediato
- Reemplazar videos provisionales por versiones finales (40s) según guía de producción.
- Mantener doble capa de evidencia:
  - resumen rápido (usuario general)
  - detalle técnico por anclas/soportes (usuario avanzado)

---

## Pendientes para la próxima sesión

1. Grabar y publicar versiones finales de video (40s) para `precision`, `hyperclose`, `sml`, `evidencia`.
2. Revisar consistencia visual global tras incorporar videos finales (alineación, pesos tipográficos y ritmo de lectura).

---

## Anexo rapido - Roadmap de evidencia por micropagina

Se mantiene el mismo bloque en `precision`, `hyperclose`, `sml` y `evidencia`:

- Titulo: `Mapa de evidencia (plan de publicacion)`
- Columnas: `Bloque`, `Formato previsto`, `Estado`, `Asset esperado`
- Estados visuales via `data-status`:
  - `pending` (Pendiente)
  - `final` (Pendiente final)
  - `pilot` (Piloto cargado)

Objetivo: seguimiento rapido de produccion (video/capturas/texto) sin sobrecargar las micro-paginas.
