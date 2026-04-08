# Guía de producción de videos para micro-páginas TEVsys

**Para contexto completo del proyecto:** ver `PROMPT_RESUMEN_DEEPSEEK_VIDEOS_PRECISION_HYPERCLOSE.md` y **`PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`** §7.

> **Alineación web 26 Mar 2026 (`CHANGELOG` §58):** En `/features/precision` el **hero** es **`evidencia-100k-perdida.mp4`**; `precision-demo.mp4` queda como sección secundaria (cuenta pequeña). HyperClose: **`hyperclose-demo.mp4`** con metraje **2:23** y texto de overlays en **§57.3**; en la página, acordeón con **6** capturas informe MT5 + HTML historial. Los apartados 1) y 2) más abajo describen además el clip HyperClose **1:35** (referencia de estilo/edición); el guión del clip largo es el de §57.3.

## Objetivo

Tener una guía simple, accionable y repetible para crear, editar y publicar los videos demo de las 4 micro-páginas:

- `precision`
- `hyperclose`
- `sml`
- `evidencia`

Esta guía está pensada para producir videos con calidad profesional sin fricción.

---

## Flujo general (resumen rápido)

1. Grabar pantalla (OBS).
2. Editar video (Clipchamp).
3. Exportar MP4.
4. Copiar archivo en `public/videos/features/`.
5. Commit + push.
6. Validar en Vercel.

---

## Estructura estándar (referencia: 40s)

Duración objetivo: **40s** (puede alargarse si el contenido lo requiere; Precision 1:07, HyperClose 1:35 o **2:23** en web, etc.).  
Formato: **1080p, MP4, 30fps**  
Audio: según tipo — demo principal con audio; guías/instructivos sin audio.

### Bloques recomendados

- **0s-4s:** Hook visual + título
- **4s-10s:** Acción inicial (intento/configuración)
- **10s-16s:** Respuesta del sistema
- **16s-24s:** Prueba visible (panel/log/reporte)
- **24s-31s:** Caso adicional relevante
- **31s-36s:** Resumen del flujo
- **36s-40s:** Cierre + CTA

---

## Qué es un overlay (y cómo usarlo)

Un **overlay** es un texto corto encima del video para guiar al usuario.

Ejemplos:
- `Intento detectado`
- `Cierre en milisegundos`
- `Evento registrado`
- `También en días OFF`

Regla:
- Máximo 4-6 palabras por overlay.
- Letra clara, sin saturar.
- Mantener estilo consistente en todos los videos.

### Coherencia crítica overlay <-> CTA web

Si el cierre del video usa un mensaje tipo `Probar X en demo`, el botón real de la micro-página debe usar el mismo texto o una variante mínima equivalente.

Objetivo:
- evitar fricción cognitiva
- reforzar confianza
- mantener continuidad entre promesa visual y acción real

---

## Guión por micro-página

## 1) HyperClose (`hyperclose-demo.mp4`)

### Clip web actual (Mar 2026): metraje **2:23**

- **Nombre de proyecto en el editor (ej. Premiere):** *Video Project 090920* u otro título interno — **no** usar ese nombre como archivo en `public/videos/features/` (espacios y URLs rotas). **Siempre** desplegar sustituyendo **`hyperclose-demo.mp4`** salvo que actualices las dos etiquetas `<source>` en `src/pages/features/hyperclose.astro`. Ver **`CHANGELOG-TEVSYS.md` §63**.
- **Reexport abr 2026:** modo espejo + tipografía **Manrope** alineada con el resto del sitio.
- **Guión overlays 1–17 (sin tarjeta 12):** `CHANGELOG-TEVSYS.md` **§57.3**. Contenido: precisión 15 lotes GER40, límite -1%, desviación ~1,31 €, Wall Street + HyperClose (semáforos, caja herramientas, 7 cierres).
- **Página:** hero + acordeón evidencia (§58). La web **no** menciona audio bajo el embed (el export puede llevar pista instrumental).

### Referencia histórica — clip corto **1 min 35 s** (estilo/edición)

**Specs del vídeo corto (referencia):**
- Duración: **1 min 35 s**
- Audio: **sin audio** (overlays explican todo)
- Broker y datos personales: **tapados con barra gris #2d2d2d**
- Nota en web bajo embed: "Vídeo editado para acortar esperas (cadencia 30 s entre modales)."

**Overlays reales usados:**
1. Dos operaciones abiertas (4 lotes). Límite ±2%. Esperando a que se alcance.
2. Configurado -2% | Cerrado -2,01%
3. Primer intento estando bloqueado. Semáforo nivel 1 – Sistema Bloqueado.
4. Segundo intento. Semáforo nivel 2 – Advertencia.
5. Tercer intento. Semáforo nivel 3 – Exención de responsabilidad.
6. 7 intentos. 7 cierres. Cero dudas. Así funciona la disciplina de verdad. — tevsys 🏆

**Flujo:** Límite alcanzado → cierre automático → 3 intentos con modales (cadencia 30 s recortada en edición) → ráfaga de 7 intentos mostrando cierre instantáneo.

### Mensaje principal
Si estás bloqueado y aun así intentas operar, HyperClose actúa en milisegundos y deja trazabilidad.

### Guión referencia 40s (para futuros vídeos cortos)
- **0-4s:** Panel en estado bloqueado  
  Overlay: `HyperClose: la última barrera`
- **4-10s:** Intento de abrir operación bloqueado  
  Overlay: `Intento detectado`
- **10-16s:** Cierre inmediato  
  Overlay: `Cierre en milisegundos`
- **16-24s:** Mostrar log/panel del evento  
  Overlay: `Cada intento queda registrado`
- **24-31s:** Escenario día OFF  
  Overlay: `También en días OFF`
- **31-36s:** Secuencia completa intento -> cierre -> registro  
  Overlay: `Protección real, no teoría`
- **36-40s:** Plano final + CTA  
  Overlay: `Probar HyperClose en demo`

---

## 2) Precisión (`precision-demo.mp4`)

### Hero en web (`/features/precision`)

- **Archivo en hero:** `evidencia-100k-perdida.mp4` (1:41, con audio) — misma pieza que en Evidencia; ver §58.

### `precision-demo.mp4` — sección secundaria (cuenta pequeña)

### Estado Mar 2026: ✅ PUBLICADO

**Specs reales del vídeo publicado:**
- Duración: **1 min 7 s**
- Audio: **con audio** (narración/explicación)
- Broker y datos: tapados (barra sólida)

**También:** `precision-demo-volatilidad.mp4` — demo en alta volatilidad, límite -1,50%, cierre +1,83% en ganancias. Sin audio. **Vídeo mejorado** con 6 overlays definitivos (Ene 2026). Ref: `CHANGELOG-TEVSYS.md` §28.1.

**Overlays del vídeo (orden final, versión mejorada):**
1. Abro operación. Límite -1,50% / 1,50%. Mercado en alta volatilidad.
2. Panel en tiempo real: flotante y protección activa.
3. Cero intervención. — tevsys ejecuta.
4. Cálculo en curso. Cierre inminente.
5. Cierre en ganancias (+1,83%). Protección en condiciones extremas.
6. Alta volatilidad. Mismo compromiso. — tevsys *(overlay final, frase de marca)*

### Mensaje principal
TEVsys cierra donde configuras, compensando slippage/spread/comisiones con evidencia visible.

### Guión referencia 40s
- **0-4s:** Panel/MT5 + límite configurado  
  Overlay: `Precisión de cierre`
- **4-10s:** Se muestra el contexto de operación  
  Overlay: `Límite configurado`
- **10-16s:** Ejecución del cierre  
  Overlay: `Cierre ejecutado`
- **16-24s:** Comparativa límite vs cierre real  
  Overlay: `Resultado verificable`
- **24-31s:** Mostrar panel y dato de validación  
  Overlay: `Operativas documentadas`
- **31-36s:** Reforzar robustez en distintos entornos  
  Overlay: `Validado en 5 entornos`
- **36-40s:** Cierre + CTA  
  Overlay: `Probar precisión en demo`

---

## 3) SML (`sml-demo.mp4`)

### Mensaje principal
SML es una capa opcional para proteger parte de lo ganado y mejorar disciplina diaria.

### Guión 40s
- **0-4s:** Vista del panel SML  
  Overlay: `SML: protección opcional`
- **4-10s:** Configuración de porcentaje  
  Overlay: `Rango 5% - 25%`
- **10-16s:** Activación en contexto de sesión  
  Overlay: `Tú decides cuándo activarlo`
- **16-24s:** Resultado práctico en control diario  
  Overlay: `Más control sobre lo ganado`
- **24-31s:** Compatibilidad con límites/días OFF  
  Overlay: `Integra disciplina completa`
- **31-36s:** Recap del mecanismo  
  Overlay: `Flexible y accionable`
- **36-40s:** Cierre + CTA  
  Overlay: `Probar SML en demo`

---

## 4) Evidencia (`evidencia-demo.mp4`)

### Mensaje principal
Cada cierre, bloqueo y rotación queda trazado para revisión propia y auditoría.

### Guión 40s
- **0-4s:** Intro visual panel/log  
  Overlay: `No confíes. Comprueba.`
- **4-10s:** Mostrar evento de cierre o bloqueo  
  Overlay: `Evento detectado`
- **10-16s:** Mostrar panel relacionado  
  Overlay: `Panel operativo`
- **16-24s:** Mostrar log por fecha/hora  
  Overlay: `Trazabilidad verificable`
- **24-31s:** Mostrar referencia a reporte oficial  
  Overlay: `Respaldo MT5`
- **31-36s:** Recap: cierre + bloqueo + rotación  
  Overlay: `Todo deja huella`
- **36-40s:** Cierre + CTA  
  Overlay: `Probar evidencia en demo`

---

## Producción técnica (OBS + Clipchamp)

## OBS (grabación)
- Resolución: `1920x1080`
- FPS: `30`
- Codificador de video: `NVIDIA NVENC H.264` (si disponible)
- Formato grabación: `MKV` (luego convertir a MP4)
- Audio: escritorio según necesidad del clip

## Clipchamp (edición)
- Importar video grabado
- Recortar a 40s
- Añadir overlays según guión
- Ajustar audio de fondo bajo
- Exportar en `1080p` MP4

---

## Rutas de archivo en proyecto

Guardar videos finales en:

`public/videos/features/`

Nombres exactos:
- `evidencia-100k-perdida.mp4` (hero Precisión + Evidencia, 1:41 — con audio) ✅
- `precision-demo.mp4` (cuenta pequeña, 1:07 — con audio) ✅
- `precision-demo-volatilidad.mp4` (demo alta volatilidad — sin audio) ✅
- `precision-logs-guide.mp4` (guía logs — sin audio, overlays) ✅
- `hyperclose-demo.mp4` (web **2:23** §57; sustituyó metraje 1:35 en landing) ✅
- `hyperclose-dias-off-demo.mp4` (Día OFF, 51 s) ✅
- `sml-demo.mp4` (pendiente)

---

## Publicación y validación

1. Copiar MP4 en la ruta correcta.
2. Confirmar cambios en GitHub Desktop.
3. Commit + push.
4. Esperar deploy en Vercel.
5. Validar:
   - `/features/precision`
   - `/features/hyperclose`
   - `/features/sml`
   - `/features/evidencia`

---

## Estado actual (26 Mar 2026)

| Vídeo | Estado | Duración | Audio |
|-------|--------|----------|-------|
| `evidencia-100k-perdida.mp4` | ✅ | 1:41 | Sí |
| `precision-demo.mp4` | ✅ | 1:07 | Sí |
| `precision-demo-volatilidad.mp4` | ✅ | ~1:04 | No |
| `precision-logs-guide.mp4` | ✅ | — | No |
| `hyperclose-demo.mp4` | ✅ | **2:23** (web) | Opc. instrumental export |
| `hyperclose-dias-off-demo.mp4` | ✅ | 51 s | No |
| `sml-demo.mp4` | ⏳ | — | — |

**Nota operativa:** Precisión / HyperClose / Evidencia (100k) en web alineados §58. Pendiente principal producción: **SML** (`sml-demo.mp4`); HyperClose PNG galería §58.2 en repo; captura 1 Día OFF. Tapar broker #2d2d2d. Overlays: máx 4-6 palabras, sin punto final.
