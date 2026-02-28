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

