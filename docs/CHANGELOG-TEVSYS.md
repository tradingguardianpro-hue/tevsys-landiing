# Changelog tevsys — Estado actual (actualizado)

Registro completo de cambios aplicados en la landing de tevsys (base Odyssey Theme + Astro).

---

## 1) Brand, Header y navegación

### `src/components/BrandOval.astro`
- Eliminada la estrella del logo.
- Se mantiene solo `tevsys` en óvalo.

### `src/config/nav.js`
- Menú principal: `Inicio` | `Acceso` | `Contacto`.
- `Acceso` se dejó como CTA destacado (`asButton: true`).

### `src/components/core/Header.astro`
- Estilos del CTA de navegación (`.nav-link--button`) en blanco, redondeado.

---

## 2) Hero (home)

### `src/components/sections/heros/HomeHeroSection.astro`
- H1 con fuente Outfit: **"Tu capital merece más que buenas intenciones"**.
- Tagline con punto amarillo ampliado a `32px`.
- Texto `Trading Edge Verification System` movido debajo de la imagen, alineado a la izquierda.
- Botón `Descargar demo →` en amarillo (`#f5b041`) con hover `#f7c050`.
- Grid del hero ajustado para dar más protagonismo a la imagen: `1fr 1.5fr`.

---

## 3) Home: cards de valor (4 cards)

### `src/pages/index.astro`
Se pasó de 3 a 4 cards en layout `2x2`, con copy actualizado.

#### Card 1 — `0,06% error promedio`
- Hook: `El mercado no perdona. Nosotros tampoco.`
- Texto actualizado a **50 operativas documentadas**.
- Imagen: `/assets/images/home/cards/card-1-input.png`

#### Card 2 — `HyperClose`
- Hook mantenido: `Nadie te enseña a parar. Aprendes cuando ya es tarde.`
- Imagen: `/assets/images/home/cards/card-2-hyperclose.png`

#### Card 3 — `SML — Smart Money Lock`
- Hook final: `No es obligatorio. Es una recompensa.`
- Incluye frase de configuración opcional: porcentaje entre `5%` y `25%`.
- Imagen: `/assets/images/home/cards/card-3-sml.png`

#### Card 4 — `Evidencia verificable`
- Hook: `No confíes. Comprueba.`
- Imagen: `/assets/images/home/cards/card-4-evidencia.png`

---

## 4) Nueva sección template: Planes

### `src/pages/index.astro`
Añadida sección **`Elige tu cuenta`** antes del bloque del fundador.

- 3 planes: `Essential`, `Advanced`, `Pro`.
- Cada plan tiene CTA directo a contacto con query param:
  - `/company/contact?plan=essential`
  - `/company/contact?plan=advanced`
  - `/company/contact?plan=pro`
- Estado actual: imágenes de plan en placeholder con `hero-tevsys.png`.
- Pendiente: sustituir por imágenes finales retocadas de planes.

---

## 5) Fundador y footer

- Se mantiene bloque fundador tal cual (claim + cita + firma).
- Se mantiene footer existente.

---

## 6) Configuración/estilo global relevante

- `BaseHead.astro`: Outfit cargada desde Google Fonts.
- `settings.js`: `enableThemeSwitcher: false`, `showPlug: false`.
- Tema por defecto dark (`data-theme="dark"`).

---

## 7) Archivos principales tocados

- `src/components/BrandOval.astro`
- `src/config/nav.js`
- `src/components/core/Header.astro`
- `src/components/sections/heros/HomeHeroSection.astro`
- `src/pages/index.astro`
- `docs/CHANGELOG-TEVSYS.md`
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`
- `docs/ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`
- `docs/CARDS-NEXT-PHASE.md`

---

## 8) Pendiente de decisión (equipo)

1. En sección de planes, decidir estilo visual final:
   - mantener mano robótica en 3 planes, o
   - pasar a visual más abstracto para evitar repetición con hero.
2. Leer `plan` en el formulario de contacto automáticamente (preselección de plan).
3. Añadir página `manual` y link en footer.
