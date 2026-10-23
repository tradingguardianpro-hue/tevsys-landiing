# Handoff — Home definición · tipografía · anclas (23 oct 2026)

**Estado anclas:** ✅ **OK para dejar** — salto directo + fundido tapa **~200 ms**.  
**View Transitions:** ❌ probado y **descartado** (parecía scroll corto, no transición limpia).  
**Pendiente (obligatorio antes de dar por cerrado el sitio entero):** § **4.3** — encuadre al aterrizar + igualar **todos** los clics al mismo método.

**Repo:** `tevsys-landiing`  
**Espejo TGP:** V12 `homeDef*` · `hashFade200Canon` · `cfFaq*` · `cfMovil*` · `cfRevertKeepPlex`

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

- Clase global `.tevsys-copy-jewel` (y home `.tevsys-home-definition__jewel`): más blanco + peso.
- **No** ámbar, **no** subrayado (= no parecen links).
- Ámbar + raya = **solo** clicables reales.
- **Tu ID CF** (`#tu-id-tevsys`): copy alineado al overlay (*tu identificador personal*). Joyas: *TVS-…* · *tu identificador personal* · *qué decidió tevsys* · *qué ejecutó MetaTrader 5*.
- **CTA bajo vídeo:** *Sigue: hechos que se pueden cruzar →* (ancla `#how-audit-chapter-title`). *Capa de auditoría →* dentro del bloque Hechos → micropágina.

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

## 4. Navegación a anclas — CANON (dejar así)

| Capa | Qué | Cuándo |
|------|-----|--------|
| **1. Aterrizaje directo** | `scroll-behavior: auto` | Siempre — sin montaña rusa |
| **2. Fundido corto** | Tapa `tgp-hash-arrive` **~200 ms** | Carga con `#ancla` (home → CF, etc.) |

### 4.0 View Transitions — PROBADO, NO CANON

- Feedback: “sigue pareciendo un scroll más rápido/corto”. Prefiere **ir directo** + fundido tapa.
- **Retirado.** No reintroducir sin OK explícito.
- `prefers-reduced-motion: reduce` → sin fundido tapa.

### 4.1 Archivos

- `src/layouts/Base.astro` — `HASH_FADE_MS = 200` + scripts  
- `src/styles/reset.css` — `scroll-behavior: auto` + CSS tapa 200 ms  

### 4.2 Cómo validar el método (OK)

1. Home → *¿Cómo sabemos…? — tu ID tevsys*: negro breve (~200 ms) → ya en el bloque, **sin** recorrer CF.  
2. Hard refresh `/como-funciona#tu-id-tevsys`: mismo fundido.  
3. Móvil + reduced-motion.

### 4.3 ⏳ PENDIENTE — encuadre al aterrizar + igualar todos los clics

> **Importante:** el método de transición (directo + 200 ms) **se deja**. Falta trabajo de **pantalla / ancla** para que el aterrizaje no quede descentrado ni “a medias”.

#### Problema visto (ejemplo)

- Clic en home → **Tu ID tevsys** (`/como-funciona#tu-id-tevsys`).
- Mal: aterrizaje **demasiado abajo** (título a media pantalla / sin el corte cian).
- Bien: ver **«Aquí comienza la fase de auditoría»** + Identidad + **Tu ID tevsys** + copy (como 2.ª captura fundador).

#### Tu ID — hecho 23 oct (encuadre)

- `id="tu-id-tevsys"` movido al corte `.how-more-audit-cut` (antes estaba en el bloque interno → perdías el corte).
- `scroll-margin-top` bajo nav sticky.
- Validar: home → Tu ID ≈ 2.ª captura.

#### Qué queda (pasada dedicada resto de hashes)

1. **Encuadre** en otros `#…` (mismo criterio: título/corte a la vista).

2. **Igualar TODOS los clics** al mismo método  
   - Home (intradía, swing, Tu ID, cards, invite…).  
   - Cómo funciona (ramas, clips, FAQ, vigilancia, deep links del footer…).  
   - Micros (Precisión, HyperClose, SML, Evidencia) ↔ CF / otros.  
   - Instalación / configuración / `?play=1` / hashes de vídeo.  
   - Objetivo: **mismo** aterrizaje directo + fundido 200 ms; **ningún** enlace con smooth-tour residual o aterrizaje “a ciegas”.

3. **Checklist de cierre** (cuando se haga la pasada)  
   - [ ] `#tu-id-tevsys` desde home: título visible  
   - [ ] Lista de hashes usados en la web recorrida (desktop + móvil)  
   - [ ] Ningún `scrollIntoView({ behavior: 'smooth' })` en destinos largos sin OK  
   - [ ] Handoff + CHANGELOG: “pasada encuadre anclas ✅”

**No mezclar** esta pasada con rediseño de copy. Solo **dónde para el ojo** + **mismo método de transición en todos los clics**.

---

## 5. Commits de referencia (oleada 23 oct)

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

---

## 6. Qué mejora es (mensaje de producto)

- **Home** nombra **trazabilidad**, enseña **HyperClose**, prueba **contrastable con MT5**, y empuja al **ID** con aire de lectura.
- **Cómo funciona** FAQ legible (acordeón + acto) y visualmente alineada al negro de marca.
- **Navegación:** sin montaña rusa; fundido corto 200 ms. Encuadre de títulos = **siguiente pasada** (§ 4.3).

---

## 7. Retomar

*«canon home definición»* · *«joyas home»* · *«anclas 200 ms»* · *«encuadre anclas»* / *«aterrizaje título»* · *«FAQ acordeón CF»*

- Método transición: **dejar**.  
- Encuadre + unificar clics: **siguiente**.  
- VT / smooth tour: **no**.
