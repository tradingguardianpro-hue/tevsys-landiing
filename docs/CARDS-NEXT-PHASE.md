# Cards — Fase siguiente (para DeepSeq)

## Contexto

Las cards de la home actualmente usan imágenes placeholder (landing-1, landing-2, about). El cliente quiere subir imágenes editadas por él, incluyendo la estrella de tevsys en cada imagen.

**Decisión:** La estrella NO va en el H1 del hero. Va integrada en las imágenes de las cards (editadas por el cliente).

---

## Estructura actual de las cards

```html
<a href="/company/contact" class="tevsys-card">
  <div class="tevsys-card__image">
    <img src="/assets/images/home/screenshots/landing-1.png" alt="Precisión milimétrica" />
  </div>
  <div class="tevsys-card__content">
    <h3>Precisión milimétrica</h3>
    <p>...</p>
  </div>
</a>
```

**Card 1:** Precisión milimétrica — `landing-1.png`  
**Card 2:** HyperClose — `landing-2.png`  
**Card 3:** Evidencia verificable — `about.png`

---

## Rutas de imágenes

- Actuales: `public/assets/images/home/screenshots/`
- Sugerida para imágenes nuevas: `public/assets/images/home/cards/`
  - `precision-milimetrica.png`
  - `hyperclose.png`
  - `evidencia-verificable.png`

O el cliente puede indicar nombres/rutas.

---

## Cambios a aplicar

1. Crear carpeta para imágenes de cards (si no existe).
2. Actualizar `src/pages/index.astro` para apuntar a las nuevas rutas una vez el cliente tenga las imágenes.
3. Las imágenes deben incluir la estrella ya editada (no es un overlay en código).
