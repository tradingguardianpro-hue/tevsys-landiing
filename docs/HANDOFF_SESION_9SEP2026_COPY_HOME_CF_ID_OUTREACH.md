# Handoff sesión 9 sep 2026 — Home · Cómo funciona · Tu ID · Lightbox · Outreach

**Para:** chat nuevo / otro agente. Leer **este archivo entero** antes de retocar copy web o abrir más outreach Admirals.  
**Repos:** `tevsys-landiing` (Astro) · correlato TGP: hub V12 **(cfLeadAtribucion)** · **(homeAtribucion)** · **(tuIdWeb)** · **(admiralsOutreach)** · `docs/OUTREACH_ADMIRALS_SEP2026.md` · `docs/OUTREACH_FINTOKEI_SEP2026.md`.  
**Fundador:** Gabriel (Gabi) Muela García · `info@tevsys.io` · foto canónica `docs/perfil/GABI_FOTO_PERFIL_LINKEDIN_2026-09-09.jpg` (repo TGP).

---

## 1) Por qué nos vemos mejor (criterio de producto)

Antes, con poco scroll en **home** y al abrir **Cómo funciona**, el visitante (o un buscador) leía sobre todo “utilidad MT5 + límites”. Eso suena a **panel de risk genérico** y **no** al cuadro entero: acta desde instalación, atribución decisión tevsys vs ejecución MT5, HyperClose, intradía+swing.

**Qué cambió hoy:** en las **primeras líneas** decimos lo que de verdad diferencia el producto — sin inventar claims, sin diluir SEO.

- **Home:** definición + 3 golpes + **atribución** + cierre con acento en *lo demuestra*.  
- **Cómo funciona:** lead SEO conservado (utilidad + reglas) **más** acta + atribución + negrita en *intradía* / *swing*.  
- **Auditoría en CF:** bloque visual **Tu ID tevsys** (antes solo se nombraba `TVS-…` en texto).

Identidad de producto (cursor rules): trazabilidad como **capa**, no solo “disciplina”; atribución = edge serio para academias/brokers.

---

## 2) Home — bloque definicional (orden en pantalla)

Bajo *· Disponible en MT5 ·* (`src/i18n/home.js` + `HomePageView.astro` + `home-page.css`):

### 2.1 Lead (sin cambio de sustancia hoy; ya canónico 6 sep)

> tevsys es una utilidad para MetaTrader 5 que hace cumplir las reglas que el trader configura para su operativa: límites de pérdida y ganancia (día y semana), días OFF y el bloqueo que impide abrir nuevas operaciones cuando el límite ya se ha alcanzado — en intradía y en swing, sobre toda la cuenta y desde un solo gráfico.

### 2.2 Tres golpes ámbar

1. Cierra al alcanzar los límites… precisión documentada.  
2. Bloquea… HyperClose.  
3. **Actualizado 9 sep:**  
   *Deja acta desde la instalación: límites pactados, cuándo y cómo se cerró, disciplina bajo presión — contrastable con los informes oficiales de MT5.*

**Por qué:** el 3.º beat decía “deja acta de todo lo que ocurre” sin **desde cuándo** ni **qué**. Ahora ancla instalación + cierres + disciplina.

### 2.3 Línea de atribución (opción C — validada fundador)

Insertada **después** de los 3 golpes y **antes** del cierre. No es 4.º bullet ámbar.

> **Atribución clara: cuánto fue decisión de tevsys al cierre y cuánto la ejecución en MT5 — sin mezclarlo con slippage.**

**Por qué C y no A/B:** no reescribe el beat de cierre; el skim serio la ve; academias/brokers la necesitan arriba. Canon: tevsys **decide**; el fill es mercado/MT5; **no** mezclar con slippage.

Clave i18n: `definitionAttribution` (ES|EN).

### 2.4 Cierre + subrayado de marca (9 sep tarde)

> No opera por ti: cumple lo que tú decides — y **lo demuestra, operativa a operativa**.

Acento: clase `tevsys-brand-accent-underline` solo sobre *lo demuestra, operativa a operativa* (`definitionClosingBefore` / `Accent` / `After`).

**Por qué:** es la promesa verificable (cuenta con tevsys instalado), alineada con el resto de acentos de la web.

### 2.5 Archivos home

- `src/i18n/home.js`  
- `src/components/pages/HomePageView.astro`  
- `src/styles/home-page.css` (`.tevsys-home-definition__attribution`)

---

## 3) Cómo funciona — lead hero (SEO + skim)

**Ancla:** H1 *Cómo funciona tevsys* · clase `how-hero__definition`.

### 3.1 Evolución del texto (mismo día)

1. **Antes:** reglas + intradía/swing + “aquí lo ves…”. Sin acta fuerte.  
2. **Primera pasada:** *…y deja acta desde la instalación: funcionamiento contrastable con MT5.*  
3. **Propuesta A (validada):** más clara y con atribución.

### 3.2 Texto canónico ES (propuesta A + negrita)

> tevsys es una utilidad para MetaTrader 5 que hace cumplir las reglas que configuras —límites de pérdida y ganancia (día y semana), días OFF y el bloqueo al alcanzar el límite— en **intradía** y en **swing**. Deja acta desde la instalación y separa en el cierre la decisión de tevsys de la ejecución en MT5. Aquí lo ves funcionando en una sesión real.

**Negrita solo** en las palabras *intradía* y *swing* (ES) / *intraday* y *swing* (EN) — ancla skim sin saturar.

**Por qué no abandonar este párrafo:** es el que citan buscadores / “cómo funciona tevsys”. Hay que **enriquecer**, no sustituir por un muro.

**Qué no meter aquí:** ID, packs, overnight, cifras 42 ms (eso vive bajo el vídeo Nasdaq / Transparencia).

### 3.3 Archivos

- `src/pages/como-funciona.astro`  
- `src/pages/en/como-funciona.astro`

---

## 4) Bloque Tu ID tevsys (`#tu-id-tevsys`)

### 4.1 Decisión de sitio

**Lead visual del acto Auditoría**, justo después del corte *«Aquí comienza la fase de auditoría»* / *Audit phase starts here*, **antes** de *Hechos que se pueden cruzar*.

**Por qué no** en Puesta en marcha / instalar límites: la ID **no** es ese acto.  
**Por qué sí** en Auditoría: la página ya hablaba de `TVS-…` en abstracto; faltaba **enseñar el modal**.

### 4.2 Copy del bloque (ES)

- Eyebrow: *Identidad del caso*  
- Título: *Tu ID* + acento *tevsys*  
- Cuerpo: código TVS-… ligado a licencia · etiqueta del caso (panel, registros, packs).  
- Follow: no es auditoría de pago ni análisis de mercado.  
- CTA: *Capa de auditoría* → `/auditoria-ia` (EN: contact `?flow=auditoria-ia`).

Const: `tuIdTevsysBlock` en ambos `como-funciona.astro`.

### 4.3 Captura

- **Asset:** `public/images/evidence/tevsys-modal-tu-id-tvs.png`  
- **Src web:** `/images/evidence/tevsys-modal-tu-id-tvs.png?v=20260909`  
- **Contenido:** panel + modal *Tu ID TEVsys* · código ejemplo `TVS-H4T6-QXSR` · *Clic → ver ID*.  
- **Resolución actual:** **1024×540** (la que envió el fundador por chat).  
- **Referencia calidad:** captura caja capital `evidencia-movimiento-caja-retiro-800-full.png` ≈ **1907×936**.  
- **Pendiente producto:** re-captura nativa ~1800–1900 px mismo encuadre → sustituir asset + bump `?v=`.

Nav pie CF: enlace *Tu ID tevsys* / *Your tevsys ID*.

---

## 5) Lightbox — fix pixelado + apertura (9 sep)

**Problema 1 (pixelado):** forzar imagen a ancho ~1907 estiraba PNG 1024.

**Problema 2 (blur + scroll, reportado noche):** tras un intento de “no estirar” con `stage { width: auto }`, el stage **colapsaba a 0** (`img max-width:100%` de un padre sin ancho) → overlay blur sin foto usable. Además `window.scrollTo(0,0)` al abrir **tiraba la página arriba** detrás del blur.

**Fix canónico:**
- Stage: `width: min(96vw, 1907px)` (ancho real).
- Img: `width: auto; max-width: 100%` → nativa si es más estrecha, sin estirar.
- Sin `scrollTo(0,0)`; lock con `body { position: fixed; top: -scrollY }` y restaurar al cerrar.
- Overlay `overflow: hidden`.

**Archivo:** `src/components/core/EvidenceLightboxGlobal.astro`  
**Asset Tu ID:** sigue 1024×540; ideal re-captura ~1900 px.

---

## 6) Commits web sugeridos (orden lógico)

Si el fundador aún no ha pusheado todo, mensajes listos:

1. `web(tevsys): spell out audit trail from install on home and how-it-works`  
2. `web(tevsys): add close attribution line under home definition beats`  
3. `web(tevsys): strengthen como-funciona lead with install record and attribution`  
4. `web(tevsys): add Tu ID tevsys block with capture placeholder on como-funciona`  
5. `web(tevsys): hang Tu ID TEVsys modal capture on como-funciona`  
6. `web(tevsys): stop lightbox stretch and accent home closing proof line`  
7. `docs(tevsys): handoff 9 sep home CF ID copy and outreach pointers` *(este handoff)*

---

## 7) Outreach mismo día (fuera del landing — leer en TGP)

No vive en el repo Astro; **obligatorio** para el otro chat si retoma contactos.

| Frente | Estado | Doc TGP |
|--------|--------|---------|
| **VT Markets** | Descartado (offshore / hype) | radar V12 mapaPropBroker |
| **Admirals** | ✅ **Zanjado** · 2 mails enviados · sin chase | `docs/OUTREACH_ADMIRALS_SEP2026.md` |
| **Fintokei** | Mail a Adam Hrazdil enviado 9 sep · sin chase | `docs/OUTREACH_FINTOKEI_SEP2026.md` |
| **Daniel CoFounder** | Eliminado 9 sep (sin respuesta) | OUTREACH_PEERS… |

### Admirals — mails canónicos (corroborados)

| Quién | Rol | Mail | Estado |
|-------|-----|------|--------|
| **Liudmila Bataeva** | Head of Product | `liudmila.bataeva@admiralmarkets.com` | ✅ enviado (⚠️ **bataeva**, no *batoeva*) |
| **Sharukh Zaiwalla** | Partnership Manager | `sharukh.zaiwalla@admiralmarkets.com` | ✅ enviado |
| Alexandra Gulca | Product Owner | `alexandra.gulca@admiralmarkets.com` | Anotado · **no escribir** |

**Ángulo mails:** *Among other capabilities* · límites · OFF · lock · intradaily+swing · auditable · partners *proprietary trading tools* · tevsys.io.  
**Hunter:** Producto OK · Gestión = ruido · Ventas → solo Sharukh (Alianzas). Afiliados/CPA = puerta equivocada.

---

## 8) Pendientes / no hacer

- **No chase** Admirals ni Fintokei.  
- **No** rascar más Hunter Admirals salvo bounce/respuesta.  
- Re-captura **Tu ID** a ~1900 px cuando el fundador pueda.  
- Meta `description` de `/como-funciona` sigue genérica (*Evidencia Nasdaq…*) — opcional alinear en otra pasada.  
- WhatsApp web: solo con *«adelante WhatsApp»*.

---

## 9) Cómo retomar en un chat nuevo

1. Leer este handoff.  
2. Si toca **web:** `workflow-web-visual-tevsys.mdc` · un cambio → feedback → siguiente.  
3. Si toca **copy público:** proponer frase exacta → OK → código.  
4. Si toca **Admirals / Fintokei:** docs OUTREACH_* en workspace TGP · confianza outreach (`que-es-tevsys-identidad-producto.mdc` § vuelo).  
5. Validar en vivo: home (definición) · `/como-funciona` lead · `#tu-id-tevsys` lightbox.

**Frase disparadora:** *«handoff 9 sep home CF»* o *«retoma copy home atribución»*.
