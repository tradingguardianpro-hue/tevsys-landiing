# Guía de producción de videos para micro-páginas TEVsys

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

## Estructura estándar de cada video (40 segundos)

Duración objetivo: **40s**  
Formato: **1080p, MP4, 30fps**  
Audio: música instrumental rítmica, limpia, suave, de fondo.

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

### Mensaje principal
Si estás bloqueado y aun así intentas operar, HyperClose actúa en milisegundos y deja trazabilidad.

### Guión 40s
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

### Mensaje principal
TEVsys cierra donde configuras, compensando slippage/spread/comisiones con evidencia visible.

### Guión 40s
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
- `precision-demo.mp4` (demo principal de cierre — con audio)
- `precision-logs-guide.mp4` (guía paso a paso de logs — sin audio, overlays de texto)
- `hyperclose-demo.mp4` ✅ cargado
- `sml-demo.mp4`
- `evidencia-demo.mp4`

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

## Estado actual y nota operativa

- Se validó con éxito el pipeline técnico de video embed en `HyperClose` (piloto).
- **Precisión — guía de logs:** `precision-logs-guide.mp4` ✅ cargado. Guía paso a paso (overlays: hora servidor, archivo YYYYMMDD, buscar Trades). Sin audio: es instructivo y el texto basta.
- **Precisión — demo principal:** `precision-demo.mp4` pendiente (mostrar cierre real, con audio).
- El contenido final se grabará con mercado abierto.
- Esta guía queda como estándar para ejecutar sin improvisar.
