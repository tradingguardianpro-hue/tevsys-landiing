# Decisión de flujo: cards de valor, evidencias y modal

## Contexto

Actualmente, al hacer clic en las 4 cards de valor de la home (`precisión`, `HyperClose`, `SML`, `evidencia`), el usuario va a contacto con `?origin=...`.

En contacto se adapta el texto según origen, pero sigue existiendo una fricción:
- Usuario curioso quiere "ver prueba" rápida.
- Formulario antes de evidencia puede sentirse pesado.

---

## Pregunta clave

¿Debemos pedir formulario para consumir evidencia de las cards?

---

## Opciones

### Opción A — Mantener formulario como puerta de entrada

**Cómo funciona**
- Click en card -> contacto -> formulario.

**Pros**
- Filtra curiosos.
- Menos volumen de leads poco cualificados.
- Flujo simple de operar internamente.

**Contras**
- Alta fricción para usuario frío.
- Menor confianza inicial si no ve prueba antes.
- Puede bajar CTR a contacto en tráfico nuevo.

---

### Opción B — Evidencia abierta + CTA a contacto (recomendada)

**Cómo funciona**
- Click en card -> bloque de evidencia rápida (o mini página de feature).
- Mostrar 1-2 pruebas cortas (video 20-30s, captura de panel/log).
- CTA claro: "Si esto encaja contigo, solicita acceso".

**Pros**
- Reduce fricción y aumenta confianza.
- Mejor experiencia para usuario que aún está evaluando.
- Mantiene conversión con CTA posterior, más cualificada.

**Contras**
- Puede entrar más tráfico no comprador.
- Requiere crear y mantener activos de evidencia.

---

### Opción C — Híbrida por tipo de evidencia

**Cómo funciona**
- Evidencia básica pública.
- Evidencia avanzada (casos completos, datos sensibles) tras formulario.

**Pros**
- Equilibrio entre conversión y control.
- Protege información sensible sin bloquear todo.

**Contras**
- Mayor complejidad de UX/mensajería.
- Hay que diseñar bien qué es público vs privado.

---

## Modal in-page (explicación simple)

Un "modal in-page" es una ventana encima de la misma página con video o evidencia, sin navegar fuera.

**No es complejo técnicamente** para un MVP:
- Estado abrir/cerrar.
- Componente con título, texto corto, video/link y CTA.
- Cerrar al hacer clic fuera o en "X".

Lo más costoso no es el código, es tener el contenido (videos/capturas) bien preparado.

---

## Recomendación práctica

1. Aplicar **Opción B** de forma ligera:
   - Click en card -> abrir modal/overlay con:
     - "Cómo funciona"
     - 1 prueba rápida
     - CTA "Solicitar acceso"
2. Mantener formulario para el paso comercial final, no para "ver prueba".
3. Medir:
   - CTR en "Ver prueba"
   - CTR en CTA desde evidencia
   - Envíos de formulario

---

## Motivos para NO gatear todo con formulario

- El usuario aún no confía: primero necesita prueba.
- "Ver evidencia" es fase de evaluación, no de compra.
- Pedir datos demasiado pronto aumenta abandono.
- La confianza sube cuando la prueba es visible y rápida.

---

## Decisiones a validar con DeepSeek

1. ¿B o C como modelo final?
2. ¿Modal in-page o mini página por feature como primer paso?
3. ¿Qué evidencias deben ser públicas y cuáles requieren formulario?
4. ¿Texto exacto del CTA tras cada evidencia?

---

## Estado tras implementación (actualización)

### Decisión tomada
- Se ejecuta estrategia de micro-páginas por feature (base de Opción B) en lugar de formulario directo desde card.

### Implementación realizada
- Cards de home enlazan a:
  - `/features/precision`
  - `/features/hyperclose`
  - `/features/sml`
  - `/features/evidencia`
- Cada micro-página incluye:
  - estructura de explicación + prueba + CTA a demo
  - enlaces de evidencia clicables (blanco/amarillo)
  - anclas internas para detalle
- Contacto recibe contexto por `feature` usando:
  - `/company/contact?feature=<feature>&flow=demo`

### Consulta propuesta a DeepSeek (breve)
- ¿Mantener claims actuales tal cual o hacerlos más prudentes hasta publicar la evidencia visual completa?
- ¿Qué assets mínimos recomienda para que el embed de vídeo convierta (duración, formato y orden de contenido)?
- ¿Cómo estructurar la doble capa ideal en cada micro-página?
  - Resumen rápido (usuario general)
  - Detalle técnico (usuario avanzado)

---

## Backlog de mejora (no perder esta idea)

### Mini evidencias por bloque técnico
- En cada micro-página, además del vídeo principal de demo, se podrá añadir por bloque técnico:
  - mini clip (5-10s) o GIF corto
  - captura relevante
  - enlace a evidencia extendida
- Objetivo:
  - facilitar lectura rápida para perfil no técnico
  - mantener profundidad para perfil técnico sin saturar la página principal
- Estado: **Pendiente para fase posterior** (activar cuando estén listos los assets y no frene el avance actual).

---

## Capa empresas (actualización estratégica)

### Problema detectado
- Si se publica toda la evidencia "raw" en abierto:
  - se pierde control de información sensible,
  - se debilita la protección de IP,
  - se eleva riesgo de exposición innecesaria de datos personales/cuenta.

### Criterio acordado
- **Web pública:** evidencia suficiente + redacted + lectura clara.
- **Interés real de empresa:** paquete ampliado bajo demanda.
- **Due diligence avanzada:** evidencia completa bajo NDA.

### Implicación para UX
- La web no debe parecer un repositorio caótico de reportes.
- Debe mostrar:
  - confianza inicial (prueba visible),
  - orden de lectura (panel -> transacciones -> resumen),
  - CTA claro para revisión ampliada.

### Estado
- Se mantiene este tema como frente separado para próxima fase (sección `Empresas` del header y flujo dedicado).

---

## Ajuste de decisión UX - `precision` (bloque resumen estadístico)

### Problema detectado
- El bloque mezclaba demasiadas capas a la vez:
  1. KPI de validación rápida,
  2. CTA documental múltiple,
  3. notas técnicas/contextuales.
- Resultado percibido: ruido visual y pérdida de foco de conversión.

### Decisión tomada
- Mantener en abierto solo:
  - KPI + `Ver resumen técnico (PDF)`.
- Retirar `Ver dossier completo` del bloque público de resumen.
- Reforzar flujo por capas:
  - público = evidencia clara + legible,
  - cualificado/empresa = material ampliado.

### Ajuste semántico de panel (copy)
- Se normaliza mensaje para evitar ambigüedad:
  - `Nota: en este panel, "Bloqueado hasta" equivale a "Protección activa hasta".`
- Motivo: mantener claridad sin rehacer capturas ni alterar trazabilidad.

### Resultado esperado
- Menos saturación.
- Mejor escaneo en móvil/desktop.
- Mayor probabilidad de que el usuario llegue al CTA con contexto claro.

