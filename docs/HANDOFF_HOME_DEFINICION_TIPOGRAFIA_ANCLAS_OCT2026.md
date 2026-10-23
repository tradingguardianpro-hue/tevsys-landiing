# Handoff — Home definición · tipografía · anclas (23 oct 2026)

**Estado:** canon 23 oct 2026 (anclas). View Transitions **probado y descartado** (parecía scroll corto). Canon = salto directo + fundido tapa **~200 ms**.

**Repo:** `tevsys-landiing`  
**Espejo TGP:** viñetas V12 `homeDef*` · `hash*` · `cfFaq*` · `cfMovil*` · `cfRevertKeepPlex`

---

## 1. Qué problema resolvíamos

1. **Home:** la definición vendía límites e HyperClose, pero **trazabilidad** (joya de producto) quedaba diluida en “deja acta”.
2. **Lectura en diagonal:** muro denso; HyperClose y trazabilidad no saltaban a la vista sin llenar todo de ámbar “falso clic”.
3. **Cómo funciona (FAQ):** muro tipo prospecto médico; tramo final grisáceo “otra web”; sin corte de acto tipo “Preguntas frecuentes”.
4. **Anclas home → CF:** `scroll-behavior: smooth` + página larga = **montaña rusa** hasta `#tu-id-tevsys` (u otras).

---

## 2. Lab tipografía / tema (probado y decisiones)

### 2.1 Tema claro / “blanco” en Cómo funciona — PROBADO, NO CANON

- Piloto: micropágina CF en `theme="light"`, islas claras, panel visual-first.
- **Veredicto fundador:** la marca fuerte es **oscuro**; el claro fragmentaba / debilitaba frente a home negra.
- **Canon:** CF vuelve a **dark**. No reabrir light en CF sin OK explícito.
- Histórico en CHANGELOG: *Revert CF claro*, *light theme pilot*, *isla clara*.

### 2.2 IBM Plex Sans — SÍ CANON (bloque definición + CF)

- **Qué:** Plex Sans en home (definición) y en toda `/como-funciona` (forzado donde hacía falta; FAQ sin mono “viejo” en eyebrows de coverage).
- **Por qué:** lectura más producto / menos “plantilla Inter genérica”; alinea con mono ya usado en metadatos; títulos siguen jerarquía blanco / cuerpo muted (`--tevsys-copy-muted`).
- **Qué no:** no sustituir toda la web de golpe; home cards / otros bloques pueden seguir Inter hasta oleada tipográfica.

### 2.3 FAQ Cómo funciona — acordeón + tramo negro

- Overnight + espejo (+ vigilancia ES): `details`/`summary`, pregunta clicable `+`/`−`.
- Corte de acto **Preguntas frecuentes** (`#preguntas-frecuentes`) antes del tramo.
- Tarjetas coverage **más negras** (menos losa gris media).
- Texto FAQ sigue en DOM (SEO / JSON-LD).

---

## 3. Home — copy y jerarquía visual (CANON)

### 3.1 Lead (tras intradía / swing)

> …en **intradía** y **swing**. **Deja trazabilidad desde la instalación** — y de lo que pasa en tu operativa.

- **Por qué:** la palabra *trazabilidad* arriba, al cuello; “tu operativa” = interés del lector.
- **Sin «todo»:** claim honesto (no registramos “todo” lo del mercado/estrategia).
- Links ámbar solo: intradía, swing (y más abajo Tu ID / Para quién).

### 3.2 Tres viñetas

1. Cierre al límite / precisión.  
2. … **HyperClose** … (nombre en joya blanca).  
3. Acta… **contrastable con el informe oficial de MT5** (joya).

### 3.3 Joyas visuales (no clic)

- Clase `.tevsys-home-definition__jewel`: más blanco + peso.
- **No** ámbar, **no** subrayado (= no parecen links).
- Ámbar + raya = **solo** clicables reales.

### 3.4 Aire / ritmo de scroll

1. Lead → aire → 3 viñetas.  
2. **Hueco grande** → *¿Cómo sabemos qué pasó en tu operativa? — tu ID tevsys*.  
3. Más aire → atribución (diferenciador serio) → *No opera por ti…* → Para quién.  
4. Puente **Precisión · HyperClose · SML · Evidencia** → *¿Has perdido dinero…?*

**No recortar** atribución ni cierre: quien llega ahí está en modo peer/academia.

### 3.5 Archivos

- Copy: `src/i18n/home.js` (ES|EN)  
- Markup: `src/components/pages/HomePageView.astro`  
- CSS: `src/styles/home-page.css`  
- Espejo copy: `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` § bloque definicional  

---

## 4. Navegación a anclas (CANON — dos capas)

| Capa | Qué | Cuándo |
|------|-----|--------|
| **1. Aterrizaje directo** | `scroll-behavior: auto` (reset.css) | Siempre — ya estás en el bloque |
| **2. Fundido corto** | Tapa `tgp-hash-arrive` **~200 ms** | Carga con `#ancla` (p. ej. home → CF#…) |

### 4.0 View Transitions — PROBADO, NO CANON

- Activado ~180 ms fade en `<main>` + scroll post-swap.
- **Feedback fundador:** “sigue pareciendo un scroll más rápido/corto; no es sweet transition”. Prefiere **ir directo** + fundido tapa.
- **Acción:** VT **retirado**. No reintroducir sin OK explícito.

- `prefers-reduced-motion: reduce` → sin fundido tapa.
- **Aparcado:** smooth scroll largo; VT.

### 4.1 Archivos

- `src/layouts/Base.astro` — scripts hash / `HASH_FADE_MS = 200`  
- `src/styles/reset.css` — auto + CSS tapa 200 ms  

### 4.2 Cómo validar

1. Home → Tu ID: **negro breve (~200 ms)** → ya en `#tu-id-tevsys`, **sin** recorrer CF.  
2. Hard refresh en `/como-funciona#tu-id-tevsys`: mismo fundido.  
3. Móvil + `prefers-reduced-motion`.  
4. Pasada posterior: igualar **todos** los enlaces ancla/vídeo del sitio al mismo canon (varios aún pueden sentirse distintos).

---

## 5. Commits de referencia (oleada 23 oct)

Orden lógico (pegar según lo que falte en git):

```
web(tevsys): put traceability in home definition lead after swing
web(tevsys): highlight traceability and HyperClose without fake link amber
web(tevsys): jewel MT5 contrastable and air below home ID bridge
web(tevsys): add breathing room before home ID bridge and layer cut
web(tevsys): accordion FAQs on como-funciona overnight and mirror
web(tevsys): surface traceability on home and darken CF FAQ stretch
web(tevsys): instant hash landing instead of smooth scroll tour
web(tevsys): short fade-in on hash landing after instant jump
web(tevsys): enable view transitions with fade and hash scroll canon
web(tevsys): revert view transitions keep 200ms hash fade landing
```

(Agrupar en menos commits si el fundador prefiere un solo push temático.)

---

## 6. Qué mejora es (mensaje de producto)

- **Home** deja de ser solo “utilidad de límites”: nombra **trazabilidad**, enseña **HyperClose**, prueba **contrastable con MT5**, y empuja al **ID** con aire de lectura.
- **Cómo funciona** FAQ legible (acordeón + acto) y visualmente alineada al negro de marca.
- **Navegación** entre piezas largas: intención del clic respetada (aterrizar), sensación tech (fundido / VT) sin teatro de scroll.

---

## 7. Retomar

*«canon home definición»* · *«joyas home»* · *«anclas / view transitions»* · *«FAQ acordeón CF»*

Si algo falla: **no** volver al smooth tour; mantener salto directo + fundido 200 ms. VT no vuelve sin OK.
