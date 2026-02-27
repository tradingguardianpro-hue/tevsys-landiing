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
- **Línea aclaratoria:** `Plataforma de verificación de disciplina para operar en mercados financieros.`
- **Tagline:** `Where precision meets the edge`
- **Punto de tagline:** amarillo grande (`32px`)
- **Botón:** `Descargar demo →` (amarillo)
- **Disponibilidad:** `Disponible en MT5 · Próximamente: más plataformas`
- **Imagen:** mano robótica + candado (`hero-tevsys.png`)
- **Texto bajo imagen:** `Trading Edge Verification System`

### Marco de copy del hero (AIDA)
- **Atención:** `Tu capital merece más que buenas intenciones`
- **Interés:** `Plataforma de verificación de disciplina para operar en mercados financieros.`
- **Deseo:** `Where precision meets the edge`
- **Acción:** `Disponible en MT5 · Próximamente: más plataformas` + CTA `Descargar demo →`

---

## Sección principal de valor

### Título
`¿Cuánto dinero has perdido por no parar a tiempo?`

### Subtítulo
`Sin excusas. Las buenas intenciones no cierran operaciones. Nosotros sí.`

### Cards (4)

#### 1) 0,06% error promedio
- Hook: `El mercado no perdona. Nosotros tampoco.`
- Texto: Ajuste en tiempo real que compensa slippage, spread y comisiones. Cierre donde el trader configuró. Logs auditables y panel que muestra el cálculo. **50 operativas documentadas**, 0,06% error medio.

#### 2) HyperClose
- Hook: `Nadie te enseña a parar. Aprendes cuando ya es tarde.`
- Texto: Protección reactiva instantánea: cierre en milisegundos si el usuario bloqueado intenta abrir una operación. No es un "cierre rápido"; es cierre antes del siguiente tick.

#### 3) SML — Smart Money Lock
- Hook: `No es obligatorio. Es una recompensa.`
- Texto 1: Tú eliges si activarlo. Y si lo haces, decides qué porcentaje de tus ganancias de ayer quieres blindar para hoy (entre el 5% y el 25%).
- Texto 2: Puedes operar con tus límites de siempre. Pero si un día decides activarlo y cierras en verde, el 75% de tus ganancias queda blindado. El resto, a por todas.
- Cierre: Tú decides cuándo quieres jugar con ventaja.

#### 4) Evidencia verificable
- Hook: `No confíes. Comprueba.`
- Texto: Panel, logs y reporte oficial MT5 por cada cierre. Para el trader, el inversor o el auditor. No hay "creemos que cumple"; hay evidencia medible.

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
  - Essential: `/assets/images/plans/essential-v3-bronze.png`
  - Advanced: `/assets/images/plans/advanced-v3-silver.png`
  - Pro: `/assets/images/plans/pro-v2-gold.png`

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
