# Prompt para DeepSeek / Psique — Estado web tevsys (Mar 2026)

**Documento legado.** El prompt maestro completo está en:

→ **`PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`** — contexto completo (hero, footer, favicon, cards, planes, micro-páginas, patrones técnicos, commits, docs). Usar ese como punto de partida.

Este documento se mantiene como referencia específica de vídeos Precisión/HyperClose. Para trabajo general: leer primero el maestro.

---

**Objetivo original:** Dar contexto completo a DeepSeek o cualquier IA sobre dónde estamos con la web tevsys. Leer PROMPT_MAESTRO + GUIA_PRODUCCION_VIDEOS antes de trabajar en vídeos o micropáginas.

---

## 1. Proyecto

- **Repositorio:** tevsys-landiing (Astro + Odyssey Theme)
- **Deploy:** tevsys-landiing.vercel.app / tevsys.io
- **Carpeta videos:** `public/videos/features/`
- **Carpeta imágenes evidencia:** `public/images/evidence/`

---

## 2. Dónde hemos llegado (con pelos y señales)

### 2.1 Precisión (`/features/precision`) — CERRADA

**Vídeos publicados:**
- `precision-demo.mp4` — 1 min 7 s, CON audio. Demo principal de cierre.
- `precision-demo-volatilidad.mp4` — ~1 min 8 s, SIN audio. Overlays: 1) Abro operación. Límite -1,50%/1,50%. Mercado alta volatilidad. 2) Panel en tiempo real: flotante y protección activa. 3) Cero intervención. — tevsys ejecuta. 4) Cálculo en curso. Cierre inminente. 5) Cierre en ganancias (+1,83%). Protección en condiciones extremas. 6) Alta volatilidad. Mismo compromiso. — tevsys
- `precision-logs-guide.mp4` — Guía para localizar logs MT5. SIN audio.

**Estructura de la página:**
1. Hero con hook "50 operativas documentadas. 0,06% de error medio"
2. Demo rápida: embed del vídeo principal. **Embed compacto que se expande al dar play** (420px → ancho completo)
3. "Qué puedes comprobar" — 3 enlaces. **El primero "Aquí se decide el cierre" enlaza a la demo y hace autoplay**
4. Bloque "Aquí se decide el cierre":
   - Enlace "Ir a demo del cierre VIDEO" → scroll + autoplay
   - Acordeón "Ir a demo en alta volatilidad VIDEO" → precision-demo-volatilidad.mp4
5. Bloque "Sin humo" → acordeón "Ir a guía de logs VIDEO" → precision-logs-guide.mp4
6. Bloque "Lo que dicen los resultados" → galería operativa 49 + 50 operativas en KPIs

**UX aplicada:** scroll-margin-top 5.5rem, resaltado amarillo en :target, autoplay al hacer clic en enlaces que apuntan a #precision-demo.

**Limpieza:** Placeholders internos (rutas de archivo) eliminados de la UI pública.

---

### 2.2 HyperClose (`/features/hyperclose`) — CERRADA (falta Día OFF)

**Vídeos publicados:**
- `hyperclose-demo.mp4` — 1 min 35 s, SIN audio. Contenido:
  - Dos operaciones, límite ±2%, cierre automático -2,01%
  - Intento 1 → cierre + modal nivel 1 (Sistema Bloqueado)
  - Intento 2 → cierre + modal nivel 2 (Advertencia)
  - Intento 3 → cierre + modal nivel 3 (Advertencia Final)
  - 7 intentos ráfaga mostrando cierre instantáneo
  - Broker y datos tapados con barra gris #2d2d2d

**Imágenes publicadas:**
- `hyperclose-modal-01-sistema-bloqueado.png`
- `hyperclose-modal-02-advertencia.png`
- `hyperclose-modal-03-advertencia-final.png`

**Estructura de la página:**
1. Hero: "HyperClose: cuando tu disciplina falla, HyperClose no."
2. Demo rápida: embed compacto que se expande al play. **Nota bajo embed:** "Vídeo editado para acortar esperas (cadencia 30 s entre modales)."
3. "Qué puedes comprobar" — 3 enlaces. El primero apunta a la demo.
4. Bloque "Cierre inmediato" → enlace a demo
5. Bloque "Semáforo de responsabilidad" → enlace a demo + acordeón "Ver capturas de los 3 modales" con las 3 imágenes
6. Bloque "Compatibilidad con día OFF" → **pendiente vídeo**

**Pendiente:** Grabar vídeo Día OFF (desbloquear EA, miércoles OFF, intentar operar → cierre).

---

### 2.3 SML y Evidencia — PENDIENTES

- SML: copy final, estructura lista. Falta vídeo sml-demo.mp4
- Evidencia: copy final, estructura lista. Falta vídeo evidencia-demo.mp4

---

### 2.4 EA / Onboarding y modales (Mar 2026 — para capturas y vídeos)

**Panel principal – hint arrastrar (16 Mar 2026):**
- Texto en el panel: **"▼ Clic y arrastra ● F7: personaliza"**. Parpadea 3–4 veces, luego fijo hasta el **primer arrastre** del panel; al arrastrar se oculta y no vuelve a mostrarse (GV_PANEL_HINT_VISTO). Solo si el input "Mostrar guías educativas" (F7) está en true. Útil para onboarding y para vídeos donde se quiera mostrar que el panel es arrastrable.

**Modales refinados (17 Mar 2026):**
- **SML Upsell (Essential):** Intro en 2 líneas ("Si quieres, puedes usar parte de tu ganancia de ayer / para ampliar tu límite de pérdida de hoy"). CÓMO FUNCIONA (3 bullets), EJEMPLO PRÁCTICO (2 bullets), ● DISPONIBLE EN ADVANCED, PRO Y ELITE, "- Conocer planes en tevsys.io". Contenido listo para capturas o vídeo SML.
- **Confirmación Irreversible:** Pregunta actual: "¿Estás seguro de bloquear los límites configurados?" (una línea). Modal tras Resumen en semana laboral.

**Resumen modales:** Ver en el proyecto TGP `docs/RESUMEN_MODALES_DEFINITIVOS_Y_PENDIENTES.md` (definitivos vs en curso vs pendientes).

---

## 3. Patrones técnicos aplicados

### Embed de vídeo
- Clase `demo-video demo-video--compact` con id para el container
- Vídeo con id único para autoplay vía JS
- `preload="metadata"` para que play() funcione al instante
- Compact: max-width 420px, al dar play se añade clase `demo-video--playing` (max-width: none)

### Acordeones
- `<details class="proof-accordion">` + `<summary class="proof-capture-link">`
- Dentro: `proof-gallery`, `proof-gallery__grid`, `proof-gallery__item`
- Para vídeos: `proof-gallery-video` con video dentro
- Para imágenes: `proof-gallery__zoom` (link) + `proof-gallery__image` (img)

### Enlaces a vídeos
- `href="#id-demo"` para scroll + autoplay
- Badge: `<span class="proof-link-meta">VIDEO</span>`
- Script escucha hashchange y DOMContentLoaded; si hash = #xxx-demo, llama video.play()

### Overlays en vídeos
- Máximo 4-6 palabras. Sin punto final.
- Estilo: texto blanco, Segoe UI 12, efecto máquina de escribir (opcional)
- Tapar broker: barra sólida #2d2d2d (gris MT5)

---

## 4. Documentos de referencia

| Documento | Contenido |
|-----------|-----------|
| `GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md` | Specs reales de vídeos publicados, overlays, rutas, estado |
| `CHANGELOG-TEVSYS.md` | Historial completo de cambios (entrada 24 = Mar 2026) |
| `CONTENIDO_WEB_TEVSYS_LANDING.md` | Copy actual de toda la web |
| `CARDS-NEXT-PHASE.md` | Tracker estado micro-páginas |

---

## 5. Resumen para pegar a DeepSeek

```
Estado web tevsys (Mar 2026): Precisión CERRADA (precision-demo 1:07 + audio, precision-demo-volatilidad, 50 operativas, embed compacto + autoplay). HyperClose CERRADA salvo Día OFF (hyperclose-demo 1:35 sin audio, 3 capturas modales, misma UX que Precisión). Pendiente: vídeo Día OFF, SML demo, Evidencia demo. Ruta videos: public/videos/features/. Documentación actualizada en docs/.

EA/onboarding (Mar 2026): Panel con hint "▼ Clic y arrastra ● F7: personaliza" que parpadea y desaparece tras el primer arrastre (solo si Mostrar guías educativas = true). Modales SML Upsell y Confirmación Irreversible refinados 17 Mar (texto definitivo para capturas). Resumen modales: docs/RESUMEN_MODALES_DEFINITIVOS_Y_PENDIENTES.md (en repo TGP).
```

---

## 6. Qué hacer si vas a grabar/editar un vídeo nuevo

1. Leer `GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md` — sección del vídeo correspondiente.
2. Tapar broker y datos con barra #2d2d2d.
3. Overlays: máx 4-6 palabras, sin punto.
4. Exportar con nombre exacto (ej: hyperclose-demo-dia-off.mp4).
5. Copiar en `public/videos/features/`.
6. Decir al equipo para que integre en la web (acordeón, enlace, etc.).
