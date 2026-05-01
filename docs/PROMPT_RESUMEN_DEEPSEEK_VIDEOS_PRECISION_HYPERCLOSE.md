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

> **26 Mar 2026:** Estado detallado en `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` §7 y `CHANGELOG-TEVSYS.md` **§58**. Este apartado es resumen; si hay discrepancia, gana el maestro + CHANGELOG.

### 2.1 Precisión (`/features/precision`) — CERRADA

**Vídeos publicados:**
- **Hero:** `evidencia-100k-perdida.mp4` — 1 min 41 s, CON audio (misma línea visual que Evidencia/HyperClose).
- `precision-demo-volatilidad.mp4` — ~1 min 4 s, SIN audio. Sección compacta; *operativa documentada* ±1,50%, cierre +1,83%.
- `precision-demo.mp4` — cuenta pequeña; sección con título + vídeo visible (compact).
- `precision-logs-guide.mp4` — Guía logs MT5. SIN audio.

**Copy:** Hook **80 operativas** + 0,06% (fuente MD operativas proyecto TGP).

**Estructura (orden enlaces «Qué puedes comprobar»):** demo 100k → logs → alta volatilidad → cuenta pequeña → **resultados al final**.

**UX:** scroll-margin-top, :target, autoplay por hash (`#precision-demo`, etc.). Ref. §58.

---

### 2.2 HyperClose (`/features/hyperclose`) — CERRADA (operativo: PNG informe + captura 1 Día OFF)

**Vídeo:** `hyperclose-demo.mp4` — metraje objetivo **2:23** (§57.3: 17 overlays). Precisión 15 lotes GER40, -1%, HyperClose semáforos + 7 cierres. Copy público sin cuenta/broker en hook.

**Bajo el vídeo:** acordeón galería **6** capturas (informe MT5 + historial) + enlace HTML `evidencia-hyperclose-demo-historial-transacciones.html` + nota MT5 vs HTML. **PNG:** pendiente copiar al repo si faltan (nombres §58.2).

**Modales:** `hyperclose-modal-01/02/03-*.png`.

**Día OFF:** `hyperclose-dias-off-demo.mp4` (51 s) + 5 capturas en página — **pendiente** renovar captura 1 sin protección previa (`AGENDA_GABI`).

---

### 2.3 SML y Evidencia

- **SML:** copy y estructura listos. Falta `sml-demo.mp4`.
- **Evidencia:** **COMPLETADA** — hero `evidencia-100k-perdida.mp4`, operativa 4.56 (100 lotes), informe MT5, HTML transacciones, enlace segundo HTML HyperClose, auditoría **59** operativas. Ver maestro §7.4.

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
Estado web tevsys (30 abr 2026): CHANGELOG §58 + sync contador. Precisión: hero evidencia-100k-perdida.mp4, 80 operativas, volatilidad + cuenta pequeña + logs compactos. HyperClose: vídeo 2:23, galería 6 + HTML historial; modales 3 PNG; Día OFF con vídeo + capturas (renovar captura 1). Evidencia: hero 100k, 4.56, auditoría 80. SML: falta sml-demo. Videos: public/videos/features/. Docs: PROMPT_MAESTRO §7, CONTENIDO_WEB, ARREGLOS_WEB.

EA/onboarding: Panel hint arrastre + F7; modales refinados Mar 2026. Resumen: RESUMEN_MODALES_DEFINITIVOS_Y_PENDIENTES.md (repo TGP).
```

---

## 6. Qué hacer si vas a grabar/editar un vídeo nuevo

1. Leer `GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md` — sección del vídeo correspondiente.
2. Tapar broker y datos con barra #2d2d2d.
3. Overlays: máx 4-6 palabras, sin punto.
4. Exportar con nombre exacto (ej: hyperclose-demo-dia-off.mp4).
5. Copiar en `public/videos/features/`.
6. Decir al equipo para que integre en la web (acordeón, enlace, etc.).
