# Arreglos web tevsys — Todos los archivos

Resumen técnico de todos los cambios aplicados. Para DeepSeq / referencia.

---

## Archivos modificados y qué se hizo

| Archivo | Cambio |
|---------|--------|
| `src/components/BrandOval.astro` | Quitada estrella. Solo texto "tevsys" en óvalo. |
| `src/config/nav.js` | Eliminado "Descargar demo". Acceso como CTA (`asButton: true`). Navegación: Inicio, Acceso, Contacto. |
| `src/components/core/Header.astro` | Estilos `.nav-link--button` (blanco, redondeado) para el CTA. |
| `src/components/sections/heros/HomeHeroSection.astro` | Hero completo: H1 Outfit, tagline con punto 32px, "Trading Edge Verification System" debajo de la imagen (no superpuesto), botón Descargar demo pequeño y oval. |
| `src/components/head/BaseHead.astro` | Fuente Outfit añadida (Google Fonts). |
| `src/pages/index.astro` | Cards con clase `tevsys-card`, founder section, estilos. |

---

## Detalles por archivo

### BrandOval.astro
- Óvalo: borde blanco 50%, fondo blanco 4%, border-radius 2.5rem
- Texto: 1.55rem, weight 600, lowercase, blanco 95%

### nav.js
```js
{ title: 'Inicio', slug: '/' },
{ title: 'Acceso', slug: '/company/contact', asButton: true },
{ title: 'Contacto', slug: '/company/contact' },
```

### HomeHeroSection.astro
- Punto amarillo tagline: 32×32px, #f5b041
- Brand "Trading Edge Verification System": debajo imagen, margin-top 0.75rem, align-self flex-start, font-size 0.75rem, color rgba(255,255,255,0.45)
- Botón hero: padding 0.45rem 1rem, font-size 0.9rem, border-radius 2rem

### index.astro (cards)
- Grid 3 columnas, gap theme
- Imágenes: landing-1.png, landing-2.png, about.png (placeholders)
- Próximo paso: sustituir por imágenes editadas con estrella

---

## Archivos sin modificar (configuración)
- `settings.js`: enableThemeSwitcher false, showPlug false
- `Base.astro`: data-theme="dark"
