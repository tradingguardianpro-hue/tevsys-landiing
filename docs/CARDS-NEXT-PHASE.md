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
Elegir una opción:
1. Mantener mano robótica en planes
2. Pasar a visual más abstracto para evitar repetición con hero

### B. Formularios
- Leer automáticamente el query param `plan` y precargar el plan seleccionado en contacto.
- Flujo demo separado del flujo plan:
  - Botón `Descargar demo` -> `/company/contact?flow=demo`
  - `flow=demo` permite enviar sin plan preseleccionado
  - `flow=plan` mantiene validación plan/capital

### C. Manual
- Crear `/manual` y enlazar en footer.

---

## 4) Checklist operativo para siguiente iteración

- [ ] Subir imágenes finales de planes a `public/assets/images/plans/`
- [ ] Reemplazar placeholders de planes en `src/pages/index.astro`
- [ ] Implementar preselección de plan en formulario
- [ ] QA visual final desktop + móvil
- [ ] QA de enlaces y copy

---

## 5) Criterio de calidad visual acordado

- No sobrecargar con demasiadas formas iridiscentes.
- Mantener consistencia de grosor y tono en iconos.
- Dar protagonismo al mensaje, no solo al adorno visual.

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
