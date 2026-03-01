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
  - `/assets/images/plans/essential-form-v4.png`
  - `/assets/images/plans/advanced-form-v4.png`
  - `/assets/images/plans/pro-form-v4.png`
- Cache-bust aplicado por renombrado de assets (`*-form-v4`) para evitar desalineación por caché.

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
  - Interés: `Plataforma de verificación de disciplina automatizada y gestión de riesgo para mercados financieros.`
  - Deseo: `Where precision meets the edge`
  - Acción: `Disponible en MT5 · Próximamente: más plataformas` + `Descargar demo →`
- Presentación optimizada: el texto de interés se divide en 2 líneas para legibilidad sin perder contenido.

### Cards
- Fondo `var(--theme-surface-1)`
- Imagen con `object-fit: cover`
- Hook en itálica (`.feature-card__hook`)

### Plan cards
- Grid 3 columnas desktop, 1 en móvil
- CTA amarillo reutiliza lenguaje visual del hero
- CTAs alineados horizontalmente entre cards con `flex` + `margin-top: auto`.

### Copy de sección valor
- Subtítulo actualizado para incluir bloqueo (diferencial operativo):
  - `Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`

---

## Pendientes abiertos

1. Decidir ajustes finos de encuadre/contraste para visuales de formulario por plan.
2. Crear página de manual y añadir enlace en footer.

---

## Actualización de sesión (copy + documentación)

### Cambios aplicados hoy

- `src/pages/index.astro`
  - Línea bajo subtítulo de valor (versión sobria):
    - `Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`
  - `HyperClose` simplificado:
    - `Si estás bloqueado o en un día OFF, cualquier intento de operar se cierra al instante.`
  - `SML` con cierre orientado a flexibilidad:
    - `Además, puedes definir límites por día y semana e incluir días OFF completos cuando no quieras operar.`
  - `Evidencia verificable` con redacción más limpia y cierre de trazabilidad:
    - `... Cada cierre, cada bloqueo y cada rotación queda registrado.`

- `src/pages/company/contact.astro`
  - Primera bullet con mención a días OFF:
    - `También puedes marcar días OFF (por ejemplo, lunes o viernes) para proteger tu operativa cuando decides no estar en mercado.`
  - Tips mantenidos en 3 ítems para reducir carga.

### Registro de textos previos de HyperClose (referencia)

1. `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos. Y no podrás reintentarlo hasta la siguiente rotación automática (diaria o semanal).`
2. `Protección reactiva instantánea: cierre en milisegundos si el usuario bloqueado intenta abrir una operación. No es un "cierre rápido"; es cierre antes del siguiente tick.`

### Pendientes pactados para mañana (estado)

1. **HyperClose:** ✅ Resuelto. Copy final de card y micro-página alineado en cierre milisegundos + trazabilidad.
2. **SML:** ✅ Resuelto. Copy corregido a funcionamiento real (ampliación de margen 5-25, mínimo 75% protegido).

---

## Actualización técnica reciente (micro-páginas + flujo sin fricción)

### Archivos nuevos
- `src/pages/features/precision.astro`
- `src/pages/features/hyperclose.astro`
- `src/pages/features/sml.astro`
- `src/pages/features/evidencia.astro`

### Archivos actualizados
- `src/pages/index.astro`
  - Las cards de valor ya no apuntan a contacto directo (salvo iteraciones antiguas); ahora apuntan a sus micro-páginas.
  - Card 1 reforzada con validación en 5 brokers.
  - Card HyperClose actualizada con núcleo completo (milisegundos + trazabilidad + días OFF).
- `src/pages/company/contact.astro`
  - Añadido soporte del parámetro `feature` además de `origin` y `plan`.
  - Flujo `flow=demo` ahora puede heredar contexto por `feature`.

### UX aplicada
- Sección "Qué puedes comprobar" con enlaces subrayados.
- Interacción visible:
  - color base blanco
  - hover amarillo
  - cursor mano
  - foco accesible para teclado (`:focus-visible`)
- Cada enlace lleva a detalle por ancla dentro de la misma micro-página.

### Nombres de commit (para trazabilidad)
1. `feat: crear micro-página de precisión y conectar card 1 con CTA contextual a demo`
2. `feat: hacer clicables las evidencias de precisión con hover amarillo y secciones ancla`
3. `copy: actualizar card HyperClose con cierre en milisegundos y trazabilidad completa`
4. `feat: extender micro-paginas de features (hyperclose sml evidencia) con enlaces de prueba y CTA a demo`

### Siguiente bloque recomendado
- Reemplazar "Demo rápida" placeholder por embed real (lazy-load) y mantener doble capa:
  - lectura rápida (comercial)
  - lectura técnica (acordeón o bloque expandible)

---

## Nota de proceso

Se trabajó con iteración visual continua (prueba-error controlado) para mantener coherencia de marca: negro + gris lineal + acento amarillo + iridiscente moderado.

### Nota de validación de entornos
- Referencia principal de despliegue: `tevsys-landiing.vercel.app`.
- `tevsys.io` puede mostrar retraso temporal frente al deploy por DNS/CDN/SSL.
- Protocolo: validar primero en Vercel y confirmar después en dominio oficial.

---

## Actualización reciente (copy final por micro-página + piloto video)

### Estado de avance
- Pipeline de video validado end-to-end en `HyperClose` (archivo en `public/videos/features/hyperclose-demo.mp4`).
- Estructura y jerarquía unificadas en micro-páginas:
  - título grande
  - hook con punto amarillo (estilo card)
  - explicación
  - detalle técnico / transparencia

### Ajustes principales aplicados
- `HyperClose`:
  - Título refinado: `HyperClose: cuando tu disciplina falla, HyperClose no.`
  - Acento amarillo en `no.` y subtítulo técnico con punto amarillo.
- `Precisión`:
  - Hook de apertura con `0,06%` destacado.
  - Transparencia de escenarios extremos con `~0,39%` destacado.
  - Reordenado a patrón: título -> hook -> detalle.
- `SML`:
  - Mensaje corregido al funcionamiento real: ampliar margen, no “elegir cuánto proteger”.
  - Hook final: 5%-25% y mínimo 75% protegido.
- `Evidencia`:
  - Copy final: `aquí no hay "creemos"` + `Lo que no se puede demostrar, no cuenta.`
  - Referencia explícita a panel, logs y reporte oficial.

### Commits de esta ronda (referencia)
1. `style: mejorar jerarquia visual del titulo de HyperClose sin cambiar el mensaje`
2. `style: mejorar legibilidad del titulo HyperClose con acento solo en no`
3. `copy: alinear subtitulos de micro-paginas al estilo de cards y añadir transparencia de casos extremos en precision`
4. `copy: ajustar transparencia de casos extremos en precision y resaltar ~0,39 en amarillo`
5. `style: alinear jerarquia de precision con hyperclose (titulo -> hook con punto -> detalle)`
6. `copy: aplicar version final de evidencia verificable con hook demostrable y trazabilidad clara`
7. `copy: aplicar version final de SML en micro-pagina con hook de control 5-25 y enfoque en conservacion`
8. `copy: corregir mensaje SML a ampliacion de margen (5-25) y minimo 75 protegido`
9. `style: mejorar legibilidad del hook SML con mas margen y aire visual`

### Siguiente bloque operativo
- Sustituir videos provisionales por versiones finales (40s) siguiendo:
  - `docs/GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md`
- Mantener coherencia overlay -> CTA final en cada micro-página.

---

## Actualizacion operativa - Mapa de evidencia (micropaginas)

**Fecha:** 31/01/2026  
**Objetivo:** roadmap rapido, mantenible y consistente en las 4 micropaginas de features.

### Archivos implicados

- `src/pages/features/precision.astro`
- `src/pages/features/hyperclose.astro`
- `src/pages/features/sml.astro`
- `src/pages/features/evidencia.astro`

### Implementacion aplicada

1. Seccion `Mapa de evidencia (plan de publicacion)` en las 4 micropaginas.
2. Tabla uniforme con columnas: Bloque / Formato previsto / Estado / Asset esperado.
3. Badges de estado para lectura rapida.
4. Refactor de mantenimiento: estados controlados por `data-status`.

### Estados activos

- `data-status="pending"` -> Pendiente
- `data-status="final"` -> Pendiente final
- `data-status="pilot"` -> Piloto cargado

### Regla de mantenimiento (equipo futuro)

Cuando cambie el avance de una evidencia:

1. Actualizar texto visible del estado.
2. Cambiar valor de `data-status`.
3. Mantener nombre de asset esperado alineado con archivo real.
4. Preservar misma estructura de tabla en las 4 paginas.

### Nota de alcance

- Bloque pensado como roadmap operativo interno de avance rapido.
- Impacto UX: sin cambio funcional para usuario final; mejora de lectura del estado.

### Siguiente fase prioritaria

Auditoria movil completa de `index`, `contact` y `features/*` para resolver incoherencias visuales frente a desktop.
