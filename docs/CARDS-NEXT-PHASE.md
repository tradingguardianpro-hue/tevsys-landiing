# Cards & planes — Fase siguiente (actualizado)

Este documento reemplaza el enfoque inicial de placeholders y recoge el estado actual + siguiente iteración.

---

## 1) Estado actual (ya implementado)

### Cards de valor (home)
- Ya hay 4 cards activas:
  1. `0,06% error promedio`
  2. `HyperClose`
  3. `SML — Smart Money Lock`
  4. `Evidencia verificable`

### Imágenes ya conectadas
- `/assets/images/home/cards/card-1-input.png`
- `/assets/images/home/cards/card-2-hyperclose.png`
- `/assets/images/home/cards/card-3-sml.png`
- `/assets/images/home/cards/card-4-evidencia.png`

### Diseño
- Sistema visual coherente: negro + icono gris + acento amarillo + iridiscente moderado.

---

## 2) Nueva fase activa: Planes

Ya existe una sección template en home:
- `Essential`
- `Advanced`
- `Pro`

Con CTAs funcionales:
- `/company/contact?plan=essential`
- `/company/contact?plan=advanced`
- `/company/contact?plan=pro`

---

## 3) Decisiones pendientes de equipo

### A. Estilo visual de planes
Elegir una opción:
1. Mantener mano robótica en planes
2. Pasar a visual más abstracto para evitar repetición con hero

### B. Formularios
- Leer automáticamente el query param `plan` y precargar el plan seleccionado en contacto.

### C. Manual
- Crear `/manual` y enlazar en footer.

---

## 4) Checklist operativo para siguiente iteración

- [ ] Subir imágenes finales de planes a `public/assets/images/plans/`
- [ ] Reemplazar placeholders de planes en `src/pages/index.astro`
- [ ] Implementar preselección de plan en formulario
- [ ] QA visual final desktop + móvil
- [ ] QA de enlaces y copy

---

## 5) Criterio de calidad visual acordado

- No sobrecargar con demasiadas formas iridiscentes.
- Mantener consistencia de grosor y tono en iconos.
- Dar protagonismo al mensaje, no solo al adorno visual.
