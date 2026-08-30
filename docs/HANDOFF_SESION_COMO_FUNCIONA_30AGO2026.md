# Handoff — Sesión web Cómo funciona (+ home/SML) · 30 ago 2026

**Para retomar:** *«handoff cómo funciona 30 ago»* · *«seguimos barrido»* · *«Fase D cierre pendiente»*.  
**Repo código:** `tevsys-landiing` · página `src/pages/como-funciona.astro` · footer `src/styles/global.css`.  
**Espejo TGP:** `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → **(cfSesion30ago)** · `docs/HANDOFF_SESION_COMO_FUNCIONA_30AGO2026.md` · CHANGELOG landing · `CATALOGO_MICROCLIPS_TEVSYS.md`.  
**Siguiente franja (no web):** roadmap **cierre pendiente post-STOP** (*barrido* / reintento acotado) — **cero código** hasta OK explícito + Fase D.

---

## 1) Veredicto de la sesión (fundador + equipo)

- **Cuerpo de `/como-funciona`:** ya se lee **mismo idioma visual** (cáscara negra + halo) desde Capital/Puesta → clips → cuatro piezas → panel. Validado en vista pájaro: *bastante mejor / mismo web*.
- **Aún delata obra en curso:** *De cero a protegido* (placeholder), SML en grid (*Vídeo en preparación*), tira `how-deep` antes del pie (utilitaria; otra pasada).
- **Footer:** cerrado esta noche — mismo negro que home (ya no pizarra `surface-1`).
- **Cuello de botella:** grabación (clips/GIFs Market/SML micro) = fundador; ir **poco a poco** en la semana.
- **Barrido motor:** diseño de criterio OK; **no bajar a código** en esta sesión ni “porque el mercado esté abierto mañana”. Validación A–E sí pedirá ticks reales.

---

## 2) Orden canónico de la página (cómo quedó)

1. Intro / Presentación + Evidencia Nasdaq + Transparencia  
2. *Después de la evidencia* → Desde cero (~57 s)  
3. Puesta en marcha → Capital y riesgo (cáscaras negras)  
4. Corte *Escenarios en práctica* → **Siguiente nivel** (3 ramas microclips)  
5. Corte *Las cuatro piezas* → grid Precisión / HyperClose / SML / Evidencia  
6. **Panel** — *Mimetiza el panel a tu gusto* (negro) + **También en tema claro** (publicado)  
7. Fase auditoría (shell cian; **sin** hueco “vídeo en preparación” interno)  
8. *De cero a protegido* — **aparcado** (placeholder; decidir quitar / enlaces / vídeo)  
9. Vigilancia VPS  
10. Nav `how-deep` (enlaces planos) → **Footer** = `--theme-bg` (como home)

---

## 3) Decisiones de producto / copy (qué se quitó o movió)

| Tema | Decisión |
|------|----------|
| Cáscara *Siguiente nivel* | Misma familia negra que Capital/Puesta (no losa gris SaaS). |
| Lead largo / *FUNCIONALIDADES ÚNICAS* / “Profundiza…” | **Fuera** del bloque cuatro piezas. |
| Cuatro piezas | Eyebrow *Las cuatro piezas* · título *Cada capa, con detalle* · sub: orden portada. |
| Panel | *Mimetiza el panel **a tu gusto*** (no “al proteger”). Sub: borde/colores + tres destellos. |
| Auditoría | **Eliminado** placeholder *Vídeo del capítulo en preparación / Cuando lo tengáis…* (jerga interna). Queda copy + cáscara cian. |
| *No vendemos señales* | **No** en micros HyperClose/SML. **Sí** en home: hero corto + bajo **Elige tu cuenta**: *No vendemos señales. Vendemos reglas que se ejecutan y se pueden contrastar en MT5.* |
| *De cero a protegido* | **Aparcado.** Criterio provisional: los clips de escenarios ya cubren parte; valorar quitar / sustituir por enlaces antes que otro mega-vídeo. |
| Footer cómo funciona | No era un footer distinto a propósito; faltaba en la regla home/Familia A. Ahora incluido. |
| Remakes microclips | Con **mercado abierto** y **SML activo** en panel (estado actual del producto). Semana, no bloqueante hoy. |
| Micro SML | Mejorar durante la semana; **después** de estabilizar cómo funciona / Market GIFs. |

---

## 4) Microclips / medios tocados esta sesión

### Panel mimetizado — tema claro (nuevo · publicado)

- **Ancla:** `#panel-mimetizado-claro` (bajo `#panel-mimetizado` / `#como-se-siente`).  
- **Archivo:** `public/videos/como-funciona/tevsys-mc-panel-mimetizado-claro-30s.mp4` + poster · `?v=20260830`.  
- **Duración:** ~36 s · 1080p.  
- **Ritual:** export en Descargas → IA valora → cuelga si OK (mismo flujo de siempre).  
- **Overlays:**  
  1. *Mimetiza el panel · también en blanco*  
  2. *Gráfico en tema claro*  
  3. *Panel en claro · borde mimetizado*  
  4. *Compacto y a tu sitio*  
- **Catálogo TGP:** sección *Panel mimetizado — tema claro* → `publicado`.

### SML micropágina (misma jornada / hilo)

- Captura panel teal: `sml-panel-validacion-demo.png?v=20260830b`.  
- Fuera banner manifiesto “no vendemos señales” de la micro.

### Placeholders que **siguen** a propósito

- Cuatro piezas → card **SML**: *Vídeo en preparación*.  
- *De cero a protegido*: *Vídeo en preparación*.  
- (No reabrir el de auditoría.)

---

## 5) Commits útiles (pegar / historial)

```
web(tevsys): unify como-funciona clips stage with capital black shell
web(tevsys): wrap four pieces in same black shell as clips
web(tevsys): tone four-pieces and panel copy to match upper acts
web(tevsys): fix panel mimic copy to match product behavior
web(tevsys): wrap panel mimic block in black shell stage
web(tevsys): drop audit video jargon and stage light panel clip slot
web(tevsys): publish light-theme panel mimic clip under dark one
web(tevsys): match como-funciona footer to home black bg
web(tevsys): tighten plans subtitle to rules you can verify
web(tevsys): refresh SML panel capture with teal buttons
```

*(Algunos ya pusheados por el fundador; el footer negro es el cierre visual de la noche.)*

---

## 6) Cola semana (web / Market) — sin mezclar con barrido

1. Remakes microclips + GIFs Market con mercado abierto (cuando dé la vida).  
2. Decidir *De cero a protegido*.  
3. Micro SML (copy/visual).  
4. Opcional: suavizar tira `how-deep` para que no “corte” antes del pie.  
5. Añadir piezas web **solo** cuando el fundador elija el siguiente punto (workflow un paso a la vez).

---

## 7) Puente al barrido (motor) — estado al cerrar web

**Nombre en docs:** *cierre pendiente post-STOP* (reintento acotado tras un barrido de cierre si el bróker deja exposición).

| Hecho | Estado |
|-------|--------|
| Consenso Cursor + DeepSeek + Gabi (30 ago) | Sí — `PRODUCTO_MQL5_*` § ROADMAP |
| Candado estrecho + backoff + tope ~45 s + UI + semáforo multi-gráfico + umbral lote | Criterio cerrado en papel |
| Eventos Audit propuestos (`CLOSE_PENDING_*` / `CLOSE_RETRY_*`) | Propuestos; **Fase D** cierra lista |
| Código en EA | **NO** — zona sagrada / casi; hace falta *«sí, implementa…»* |
| Orden | P1 copy blog (build actual) → capturas/GIF Market → Fase D → código → validación A–E con mercado → Fase 4 blog |
| Validación | Mercado abierto **sí** para B/C (y A sin regresión); diseño Fase D **no** exige ticks |

**Retomar barrido:** *«Fase D cierre pendiente»* · V12 **(cierrePendienteStop)** · `AGENDA_GABI.md` § *OBLIGATORIO — Tras código…*.

---

## 8) Archivos a abrir al retomar

1. Este handoff.  
2. `docs/CHANGELOG-TEVSYS.md` (entradas 30 ago Cómo funciona).  
3. TGP `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` (**cfSesion30ago** + **cierrePendienteStop**).  
4. TGP `docs/CATALOGO_MICROCLIPS_TEVSYS.md` (panel claro).  
5. Si barrido: `docs/PRODUCTO_MQL5_MARKET_POST_EQUIVOCACION.md` § ROADMAP cierre pendiente.
