# Estrategia favicon e iconos tevsys

**Fecha:** 03/03/2026  
**Objetivo:** Reemplazar el favicon "OD" (Odyssey template) por la identidad visual tevsys en pestañas (PC) y pantalla de inicio (móvil).

---

## Contexto actual

- **Problema:** En pestañas de navegador y al añadir la web al móvil aparece "OD" (plantilla Odyssey/Vercel).
- **Referencia:** `BaseHead.astro` usa `href="/favicon.png"`.
- **Assets actuales:** Pendiente de sustituir.

---

## Imágenes disponibles / discutidas

### 1. Imagen completa (mano robótica + candado)
- Brazo robótico sujetando candado, gráfico de velas de fondo.
- Monocromática (plata/gris/negro), sobria.
- **Uso recomendado:** Icono PWA / móvil (120×120 y superiores), donde el detalle se aprecia.
- **No recomendada para favicon 16px:** Demasiado detalle, se perdería.

### 2. Logo tevsys (icono radial + texto)
- Icono: 12 puntas/rayos alrededor de un centro (estilo engranaje/estrella).
- Texto: "tevsys" en minúsculas, sans-serif.
- Blanco sobre negro, monocromático.
- **Uso recomendado:** Favicon solo con el **icono** (sin texto). El texto no es legible a 16px.

---

## Tamaños técnicos

| Contexto | Tamaño | Uso recomendado |
|----------|--------|------------------|
| Pestaña PC | 16×16, 32×32 px | Solo icono radial (12 puntas) |
| iPhone (home screen) | 120×120, 180×180 px | Icono o icono + "tevsys" |
| Android (home screen) | 192×192 px | Icono o imagen más detallada |
| Android splash | 512×512 px | Imagen completa o logo con texto |
| **PC — Instalar / barra de tareas** | **192×192, 512×512 px** | Icono grande en escritorio, anclado a barra de tareas (Chrome, Edge) |

---

## Instalar en PC (barra de tareas / escritorio)

Chrome y Edge permiten «Instalar» la web como app: icono en escritorio, barra de tareas, menú inicio. Para que aparezca el botón **Instalar**:

1. **Web App Manifest** (`manifest.json`) — Nombre, iconos 192 y 512, start_url, display.
2. **Service worker** — Mínimo para que el navegador considere la app instalable.
3. **HTTPS** — Requerido (Vercel lo cumple).
4. **Iconos 192×192 y 512×512** — Usan los mismos assets que PWA móvil.

Los iconos 192 y 512 se usan cuando el usuario instala la app: icono grande en escritorio y en la barra de tareas.

**Integración:** `@astrojs/pwa` (Workbox) o manifest + service worker mínimo. A implementar junto con los iconos.

---

## Decisión de color

- **Opción A — Monocromo (blanco/gris):** Máxima sobriedad.
- **Opción B — Acento amarillo (#f5b041):** Una punta del icono o el centro en amarillo para identidad de marca y visibilidad en la barra de pestañas.
- **Recomendación:** Probar ambas; valorar acento amarillo sutil para diferenciación.

---

## Assets a generar

1. **favicon.png** — 32×32 px (o multiplos: 16, 32, 48). Solo icono radial.
2. **apple-touch-icon.png** — 180×180 px. Icono o icono+texto para iOS.
3. **android-chrome-192x192.png** — 192×192 px. Para Android / PWA.
4. **android-chrome-512x512.png** — 512×512 px. Splash / PWA.

---

## Integración en la web

**Archivo:** `src/components/head/BaseHead.astro`

```html
<!-- Favicon estándar -->
<link rel="icon" type="image/png" href="/favicon.png" />

<!-- Apple Touch Icon (móvil iOS) -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- PWA / Android (opcional) -->
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
```

**Ubicación de archivos:** `public/`

---

## Pendientes

### Iconos
- [ ] Exportar icono radial en los tamaños indicados.
- [ ] Decidir: monocromo o acento amarillo.
- [ ] Sustituir favicon.png en `public/`.
- [ ] Añadir apple-touch-icon y opcionales en `public/`.
- [ ] Actualizar BaseHead.astro con los nuevos enlaces.
- [ ] Validar en PC (pestaña) y móvil (añadir a pantalla de inicio).

### PWA — Instalar en PC / barra de tareas
- [ ] Crear `manifest.json` (nombre, iconos 192/512, start_url, display).
- [ ] Añadir `@astrojs/pwa` o service worker mínimo.
- [ ] Enlazar manifest en `BaseHead.astro`: `<link rel="manifest" href="/manifest.json" />`.
- [ ] Validar botón «Instalar» en Chrome/Edge y que el icono aparezca correcto en escritorio/barra de tareas.
