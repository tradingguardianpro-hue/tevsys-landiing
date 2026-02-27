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
| `src/pages/index.astro` | 4 cards de valor (2x2), textos finales, imágenes nuevas, sección de planes con CTA por plan e imágenes finales. |
| `src/pages/company/contact.astro` | Contacto por plan con título simplificado + visual dinámico por `?plan=` (sin redundancia en encabezado). |
| `src/components/forms/ContactForm.astro` | Badge de plan seleccionado + validación plan/capital + compatibilidad con `flow=demo`. |
| `public/assets/images/home/cards/*` | Imágenes personalizadas de cards 1-4. |
| `public/assets/images/plans/*` | Imágenes finales de cards de planes + visuales de formulario por plan. |
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
- Imágenes finales de cards:
  - `/assets/images/plans/essential-card.png`
  - `/assets/images/plans/advanced-card.png`
  - `/assets/images/plans/pro-card.png`

### C) Contacto por plan
- Título actual: `Completa tu acceso a tevsys`.
- El badge de plan se mantiene en el formulario (lado derecho).
- El visual izquierdo cambia por plan y usa rutas:
  - `/assets/images/plans/essential-v3-bronze.png`
  - `/assets/images/plans/advanced-v3-silver.png`
  - `/assets/images/plans/pro-v2-gold.png`

### D) Founder
- Se mantiene bloque de fundador sin cambios estructurales.

---

## Ajustes de estilo clave

### Hero
- `grid-template-columns: 1fr 1.5fr`
- Botón amarillo:
  - `background: #f5b041`
  - `hover: #f7c050`
- Tagline dot: `32px`
- Copy en modo AIDA:
  - Atención: `Tu capital merece más que buenas intenciones`
  - Interés: `Plataforma de verificación de disciplina para operar en mercados financieros.`
  - Deseo: `Where precision meets the edge`
  - Acción: `Disponible en MT5 · Próximamente: más plataformas` + `Descargar demo →`

### Cards
- Fondo `var(--theme-surface-1)`
- Imagen con `object-fit: cover`
- Hook en itálica (`.feature-card__hook`)

### Plan cards
- Grid 3 columnas desktop, 1 en móvil
- CTA amarillo reutiliza lenguaje visual del hero

---

## Pendientes abiertos

1. Decidir ajustes finos de encuadre/contraste para visuales de formulario por plan.
2. Crear página de manual y añadir enlace en footer.

---

## Nota de proceso

Se trabajó con iteración visual continua (prueba-error controlado) para mantener coherencia de marca: negro + gris lineal + acento amarillo + iridiscente moderado.

### Nota de validación de entornos
- Referencia principal de despliegue: `tevsys-landiing.vercel.app`.
- `tevsys.io` puede mostrar retraso temporal frente al deploy por DNS/CDN/SSL.
- Protocolo: validar primero en Vercel y confirmar después en dominio oficial.
