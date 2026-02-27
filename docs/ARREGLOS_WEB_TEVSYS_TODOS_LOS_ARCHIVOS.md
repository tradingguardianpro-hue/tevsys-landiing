# Arreglos web tevsys — Todos los archivos (actualizado)

Resumen técnico completo para revisión interna / DeepSeq.

---

## Cambios por archivo

| Archivo | Cambios aplicados |
|---|---|
| `src/components/BrandOval.astro` | Logo simplificado: solo texto `tevsys` en óvalo. |
| `src/config/nav.js` | Nav final: Inicio, Acceso (CTA), Contacto. |
| `src/components/core/Header.astro` | Estilos del CTA en nav (botón blanco redondeado). |
| `src/components/head/BaseHead.astro` | Fuente Outfit cargada globalmente. |
| `src/components/sections/heros/HomeHeroSection.astro` | Hero refinado: brand debajo imagen, punto 32px, botón amarillo, grid 1fr/1.5fr. |
| `src/pages/index.astro` | 4 cards de valor (2x2), textos finales, imágenes nuevas, sección template de planes con CTA por plan. |
| `public/assets/images/home/cards/*` | Imágenes personalizadas de cards 1-4. |
| `docs/*.md` | Documentación actualizada con estado real. |

---

## Estado técnico actual de `index.astro`

### A) Sección de valor (4 cards)
- Grid desktop: 2 columnas (`repeat(2, 1fr)`)
- Grid móvil: 1 columna
- Cards enlazan a `/company/contact`

**Rutas de imagen actuales:**
- Card 1: `/assets/images/home/cards/card-1-input.png`
- Card 2: `/assets/images/home/cards/card-2-hyperclose.png`
- Card 3: `/assets/images/home/cards/card-3-sml.png`
- Card 4: `/assets/images/home/cards/card-4-evidencia.png`

### B) Sección de planes (template)
- Título: `Elige tu cuenta`
- 3 cards: Essential / Advanced / Pro
- CTA por plan con query param:
  - `/company/contact?plan=essential`
  - `/company/contact?plan=advanced`
  - `/company/contact?plan=pro`
- Imágenes de plan en placeholder (hero) hasta que se suban las versiones finales.

### C) Founder
- Se mantiene bloque de fundador sin cambios estructurales.

---

## Ajustes de estilo clave

### Hero
- `grid-template-columns: 1fr 1.5fr`
- Botón amarillo:
  - `background: #f5b041`
  - `hover: #f7c050`
- Tagline dot: `32px`

### Cards
- Fondo `var(--theme-surface-1)`
- Imagen con `object-fit: cover`
- Hook en itálica (`.feature-card__hook`)

### Plan cards
- Grid 3 columnas desktop, 1 en móvil
- CTA amarillo reutiliza lenguaje visual del hero

---

## Pendientes abiertos

1. Reemplazar imágenes de planes con versiones finales retocadas.
2. Decidir estética final de planes (mano robótica vs visual más abstracto).
3. Implementar lectura automática de `?plan=` en formulario de contacto.
4. Crear página de manual y añadir enlace en footer.

---

## Nota de proceso

Se trabajó con iteración visual continua (prueba-error controlado) para mantener coherencia de marca: negro + gris lineal + acento amarillo + iridiscente moderado.
