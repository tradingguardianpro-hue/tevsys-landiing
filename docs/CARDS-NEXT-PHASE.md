# Cards & planes — Fase siguiente (actualizado)

Este documento reemplaza el enfoque inicial de placeholders y recoge el estado actual + siguiente iteración.

---

## 1) Estado actual (ya implementado)

### Cards de valor (home)
- Ya hay 4 cards activas:
  1. `0,06% error promedio`
  2. `HyperClose`
  3. `SML — Smart Money Lock`
  4. `Evidencia verificable`

### Imágenes ya conectadas
- `/assets/images/home/cards/card-1-input.png`
- `/assets/images/home/cards/card-2-hyperclose.png`
- `/assets/images/home/cards/card-3-sml.png`
- `/assets/images/home/cards/card-4-evidencia.png`

### Diseño
- Sistema visual coherente: negro + icono gris + acento amarillo + iridiscente moderado.

---

## 2) Nueva fase activa: Planes

Ya existe una sección template en home:
- `Essential`
- `Advanced`
- `Pro`

Con CTAs funcionales:
- `/company/contact?plan=essential`
- `/company/contact?plan=advanced`
- `/company/contact?plan=pro`

### Estado funcional de lanzamiento
- **Essential:** disponible en demo/beta (foco actual de estabilización).
- **Advanced:** en desarrollo (captación por acceso anticipado).
- **Pro:** en desarrollo (captación por acceso anticipado).

---

## 3) Decisiones pendientes de equipo

### A. Estilo visual de planes
Estado actual elegido:
1. Cards de planes (home) con visual de plan + barra superior `tevsys`.
2. Formulario por plan con visual minimal (escudo + branding sutil), sin redundancia de copy en encabezado.

### B. Formularios
- `plan` por query param ya se lee en cliente y actualiza visual de contacto.
- Flujo demo separado del flujo plan:
  - Botón `Descargar demo` -> `/company/contact?flow=demo`
  - `flow=demo` permite enviar sin plan preseleccionado
  - `flow=plan` mantiene validación plan/capital

### C. Manual
- Crear `/manual` y enlazar en footer.

---

## 4) Checklist operativo para siguiente iteración

- [x] Subir imágenes finales de planes a `public/assets/images/plans/`
- [x] Reemplazar placeholders de planes en `src/pages/index.astro`
- [x] Implementar preselección de plan en formulario
- [ ] QA visual final desktop + móvil
- [ ] QA de enlaces y copy
- [ ] QA de consistencia entre `tevsys-landiing.vercel.app` y `tevsys.io` (post-propagación)

---

## 5) Criterio de calidad visual acordado

- No sobrecargar con demasiadas formas iridiscentes.
- Mantener consistencia de grosor y tono en iconos.
- Dar protagonismo al mensaje, no solo al adorno visual.

---

## 5.1) Notas de copy (sesión actual)

### Estado aplicado
- Línea de mecanismo en home (bajo "Sin excusas..."):
  - `Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`
- `HyperClose` en versión corta actual:
  - `Si estás bloqueado o en un día OFF, cualquier intento de operar se cierra al instante.`
- `SML` cierre con flexibilidad:
  - `Además, puedes definir límites por día y semana e incluir días OFF completos cuando no quieras operar.`

### Referencia HyperClose (textos anteriores)
1. `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos. Y no podrás reintentarlo hasta la siguiente rotación automática (diaria o semanal).`
2. `Protección reactiva instantánea: cierre en milisegundos si el usuario bloqueado intenta abrir una operación. No es un "cierre rápido"; es cierre antes del siguiente tick.`

### Pendiente para mañana
- Recuperar mejor en `HyperClose` la base funcional (intento de operar estando bloqueado + cierre en milisegundos) sin convertir la card en manual.
- Matizar los dos primeros párrafos de `SML` para mejorar comprensión del mecanismo.

---

## 6) Plataforma de pago (pendiente post-web)

> Esta decisión se toma cuando se cierre la web visual y copy final.

### Opciones evaluadas

1. **Lemon Squeezy** (recomendada para MVP)
   - Pros: rápida de implementar, checkout sólido, suscripciones, gestión fiscal simplificada.
   - Encaje: salida rápida con planes Essential / Advanced / Pro.

2. **Paddle**
   - Pros: enfoque muy robusto para SaaS y compliance fiscal global.
   - Encaje: buena opción si se prioriza estructura enterprise desde inicio.

3. **Stripe (directo)**
   - Pros: máximo control técnico y de producto.
   - Contras: más carga operativa/fiscal y desarrollo adicional.
   - Encaje: fase posterior si se busca control total.

4. **Gumroad** (descartado por ahora)
   - Motivo: menos adecuado para licenciamiento SaaS con reglas de plan y automatizaciones.

### Criterios de decisión
- Tiempo de implementación.
- Fiabilidad del checkout y suscripciones.
- Gestión fiscal (IVA/países) y compliance.
- Facilidad para webhooks e integración con licencias TGP.
- Coste total (comisiones + operación).

### Flujo objetivo (alto nivel)
1. Cliente elige plan en web.
2. Pago en checkout de pasarela.
3. Webhook confirma evento (alta/renovación/cancelación/impago).
4. Backend TGP activa o ajusta licencia y límites.
5. Estado de plan visible para soporte/comercial.

### Nota operativa sobre métodos de pago
- Sí: estas plataformas suelen traer sus propios métodos (por ejemplo, tarjeta y otros según país).
- El detalle exacto de métodos disponibles depende de:
  - plataforma elegida,
  - país del negocio,
  - configuración fiscal/comercial de la cuenta.

### Checklist cuando toque activar pagos
- [ ] Elegir pasarela final.
- [ ] Definir catálogo de planes y precios finales.
- [ ] Mapear eventos webhook -> estado de licencia.
- [ ] Probar altas, renovaciones, impagos y cancelaciones.
- [ ] Definir página de éxito/error y soporte post-pago.

---

## 7) Tracker interno micro-páginas (Dream Team)

> Este tracker sustituye el roadmap visual dentro de las micro-páginas públicas.
> La web queda limpia para usuario final y el seguimiento lo llevamos aquí.

### Estado actual por micro-página

| Micro-página | Copy final | Ajuste móvil | Video final | Evidencias (capturas/logs) |
|---|---|---|---|---|
| `precision` | ✅ | ✅ (hook optimizado) | ⏳ | 🟡 (criterio textual activo) |
| `hyperclose` | ✅ | ✅ | ⏳ (piloto ya probado) | 🟡 (criterio textual activo) |
| `sml` | ✅ (compactado en home) | ✅ | ⏳ | 🟡 (criterio textual activo) |
| `evidencia` | ✅ | ✅ | ⏳ | 🟡 (criterio textual activo) |

### Regla simple de trabajo (solo 2-3 personas)

1. No duplicar seguimiento en muchos sitios.
2. Actualizar este bloque al cerrar cada tarea real.
3. Si algo se publica en web, registrar también en `CHANGELOG-TEVSYS.md`.
4. Patrón fijo en las 4 micro-páginas: ancla arriba (`Qué puedes comprobar`) + instrucción + `Ver captura` en cada rectángulo.
5. Patrón visual de navegación: punto amarillo en título de bloque + highlight del destino al hacer click en ancla.

### Regla fija de badges en enlaces de prueba (obligatoria)

- Si el enlace dice `Ver captura...` -> **sin badge** (evitar redundancia).
- Si el enlace abre demo/clip -> badge `VIDEO`.
- Si el enlace abre informe/exportación -> badge `PDF`.
- Si el asset aún no está publicado -> badge `PRÓXIMAMENTE`.

Nota de uso: si no hay instrucción explícita nueva, esta regla se aplica por defecto en cualquier micro-página futura.

---

## 8) Mini roadmap inmediato (sin complicarnos)

### Tarea 1 (ahora)
- [x] Congelar copy base v1 en las 4 micro-páginas (sin tocar más salvo bug).
- **Done cuando:** precisión/hyperclose/sml/evidencia queden estables en texto base.

### Tarea 2 (después)
- [ ] QA móvil rápido en 360/390/768 para home + features + contacto.
- **Done cuando:** no haya incoherencias visuales críticas de lectura/CTA.
  - Checklist mínimo por micro-página:
    - [ ] Click en `Qué puedes comprobar` baja con scroll suave.
    - [ ] Bloque destino se resalta en amarillo (`:target`).
    - [ ] Título de bloque con punto amarillo visible.
    - [ ] Link de prueba con estilo correcto (captura sin badge, PDF/VIDEO con badge).

### Tarea 3 (siguiente)
- [ ] Preparar publicación de evidencias sin video final (capturas/logs con nombres cerrados).
- **Done cuando:** cada micro-página tenga lista su evidencia mínima publicable.

### Copy freeze v1 (activo)

- `precision`
  - Título: `Precisión de cierre: donde configuras, cerramos.`
  - Hook: `50 operativas documentadas. 0,06% de error medio en condiciones normales.`
- `hyperclose`
  - Título: `HyperClose: cuando tu disciplina falla, HyperClose no.`
  - Hook: `Cierre en milisegundos. Bloqueo hasta la siguiente rotación.`
- `sml`
  - Título: `SML: protege parte de lo ganado sin frenar tu operativa.`
  - Hook: `Actívalo cuando quieras. Decide cuánto ampliar el margen: del 5% al 25% (mínimo 75% protegido).`
- `evidencia`
  - Título: `Evidencia verificable: aquí no hay "creemos".`
  - Hook: `Lo que no se puede demostrar, no cuenta.`

Regla: a partir de este punto solo se cambia copy por bug, inconsistencia o decisión explícita de producto.

---

## 9) Estructura final de evidencias (sin vídeo definitivo todavía)

> Objetivo: tener claro qué prueba va en cada micro-página aunque hoy no podamos producir todos los vídeos.
> Regla: primero publicamos evidencia mínima útil (captura/log), luego sustituimos o ampliamos con vídeo final.

### 9.1 Precision (`/features/precision`)

| Bloque | Formato mínimo publicable | Formato final deseado | Asset objetivo |
|---|---|---|---|
| Cálculo visible en panel | Demo interna (ancla a video) | Vídeo 20-40s | `precision-demo.mp4` |
| Logs auditables | Captura | Captura + breve explicación | `precision-logs-01.png` |
| Resumen estadístico (0,06%) | Imagen del resumen/tabla | Imagen + validación cruzada | `precision-stats-01.png` |
| Demo principal | Placeholder actual | Vídeo final 40s | `precision-demo.mp4` |

### 9.2 HyperClose (`/features/hyperclose`)

| Bloque | Formato mínimo publicable | Formato final deseado | Asset objetivo |
|---|---|---|---|
| Intento bloqueado + cierre | Captura secuencial (2 imágenes) | Vídeo 20-40s | `hyperclose-close-01.png` / `hyperclose-demo.mp4` |
| Trazabilidad del intento | Captura logs | Captura logs + overlay explicativo | `hyperclose-logs-01.png` |
| Flujo completo de protección | Texto + captura | Vídeo final narrado | `hyperclose-flow-01.png` |

### 9.3 SML (`/features/sml`)

| Bloque | Formato mínimo publicable | Formato final deseado | Asset objetivo |
|---|---|---|---|
| Configuración 5%-25% | Captura de configuración | Mini clip configuración | `sml-config-01.png` / `sml-config-clip-01.mp4` |
| Activación opcional | Captura | Captura + micro explicación | `sml-activation-01.png` |
| Convivencia con límites y OFF | Captura panel/estado | Clip breve de flujo real | `sml-offdays-01.png` / `sml-demo.mp4` |
| Demo principal | Placeholder actual | Vídeo final 40s | `sml-demo.mp4` |

Nota de producto: en fase actual, SML se comunica para Advanced/Pro (lista de espera). En Essential demo no está activo todavía.

### 9.4 Evidencia (`/features/evidencia`)

| Bloque | Formato mínimo publicable | Formato final deseado | Asset objetivo |
|---|---|---|---|
| Criterio de validación inmediato | Texto operativo en página | Texto + soporte visual final | `n/a` |
| Panel operativo | Captura | Captura comparada con log/reporte | `evidencia-panel-01.png` |
| Logs auditables | Captura | Captura + explicación dónde validarlo | `evidencia-logs-01.png` |
| Reporte oficial | Captura/fragmento | Captura + correspondencia con evento real | `evidencia-report-01.png` |
| Demo principal | Placeholder actual | Vídeo final 40s | `evidencia-demo.mp4` |

### 9.5 Orden de publicación recomendado (realista)

1. Publicar primero capturas mínimas (rápido, sin depender de edición de vídeo).
2. Publicar después los vídeos finales por prioridad: HyperClose -> Precision -> SML -> Evidencia.
3. Al subir un asset final, actualizar estado en sección 7.
