# Prompt para DeepSeek — Resumen sesión web tevsys (Precisión + HyperClose)

Usa este texto para dar contexto a DeepSeek sobre lo hecho en esta sesión.

---

## Contexto

Proyecto: **tevsys-landiing** (Astro + Odyssey Theme). Micropáginas de features en `/features/precision`, `/features/hyperclose`, etc.

## Lo que hemos hecho

### Precisión (`/features/precision`)

1. **Guía de logs en vídeo**
   - Archivo: `public/videos/features/precision-logs-guide.mp4`
   - Integrado en la sección «Sin humo: todo queda registrado» dentro de un acordeón (`<details>`)
   - Contenido: guía paso a paso para localizar logs MT5 (ruta Archivo → Abrir carpeta de datos → MQL5 → Logs)
   - Overlays en el vídeo: hora servidor UTC, buscar archivo YYYYMMDD, buscar "Trades", conversión hora España
   - **Sin audio:** es instructivo, el texto en pantalla basta

2. **Enlace unificado con badge VIDEO**
   - Texto: `Ir a guía de logs` + badge `VIDEO` (clase `proof-link-meta`)
   - Mismo patrón que «Ir a demo del cierre» en el bloque superior
   - Coherencia visual entre todos los bloques de prueba

3. **Estructura actual**
   - Hero (título, hook 49 operativas 0,06%, intro)
   - Demo rápida (placeholder para `precision-demo.mp4` — pendiente grabar)
   - Qué puedes comprobar (3 enlaces de evidencia)
   - Bloque «Aquí se decide el cierre» → enlace `Ir a demo del cierre VIDEO`
   - Bloque «Sin humo: todo queda registrado» → acordeón `Ir a guía de logs VIDEO` → vídeo
   - Bloque «Lo que dicen los resultados» → galería operativa 49 + resumen estadístico
   - CTA a demo

4. **Pendiente**
   - `precision-demo.mp4`: demo mostrando un cierre real (con audio)

### HyperClose (`/features/hyperclose`)

1. **Estructura alineada con Precisión**
   - Misma jerarquía: título grande → hook con punto amarillo → explicación → bloques proof
   - Hero: «HyperClose: cuando tu disciplina falla, HyperClose no.»
   - Hook: «Cierre en milisegundos. Bloqueo hasta la siguiente rotación (diaria o semanal).»

2. **Tres bloques de verificación**
   - Cierre inmediato → `Ir a demo del cierre VIDEO` (enlace a `#hyperclose-demo`)
   - Semáforo de responsabilidad → `Ver secuencia de popups` (placeholder)
   - Compatibilidad con día OFF → `Ver evidencia en día OFF` (placeholder)

3. **Vídeo**
   - `hyperclose-demo.mp4` ya cargado en `public/videos/features/`
   - Sección demo rápida con reproductor HTML5

### Reglas de estilo (Precisión y HyperClose)

- Enlaces a vídeos/demos: clase `proof-capture-link`, texto + `<span class="proof-link-meta">VIDEO</span>`
- Acordeones para contenido desplegable: `<details>` + `<summary class="proof-capture-link">`
- Evitar redundancia: si el enlace dice «vídeo», no hace falta duplicar; si no, usar badge VIDEO

### Documentación actualizada

- `docs/GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md`: añadido `precision-logs-guide.mp4`, nota sobre guía sin audio
- `docs/CARDS-NEXT-PHASE.md`: logs auditables ahora es vídeo, no 3 capturas
- `docs/ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`: sección nueva de guía de logs + estilo unificado
- `docs/CHANGELOG-TEVSYS.md`: entrada 23
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`: nota de guía de logs
- `docs/DECISION_FLUJO_CARDS_EVIDENCIA_Y_MODAL.md`: mini evidencias por bloque — implementado en precisión

---

## Resumen para DeepSeek

«Hemos integrado en tevsys-landiing una guía de logs en vídeo (`precision-logs-guide.mp4`) en la micropágina de Precisión, con enlace unificado "Ir a guía de logs VIDEO" y acordeón. La estructura de Precisión y HyperClose está alineada: hero, demo, bloques proof con enlaces amarillos + badge VIDEO. HyperClose tiene ya hyperclose-demo.mp4 cargado. Pendiente: precision-demo.mp4 (demo de cierre real con audio). Toda la documentación en docs/ está actualizada.»
