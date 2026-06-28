# Changelog tevsys — Estado actual (actualizado)

Registro completo de cambios aplicados en la landing de tevsys (base Odyssey Theme + Astro).

**Norma (jun 2026):** todo cambio web relevante se registra **aquí** (detalle) **y** en `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → *Ampliaciones* (viñeta + puntero). Espejo de criterio visual: `docs/SISTEMA_VISUAL_CUATRO_FAMILIAS_TEVSYS.md`.

---

---

## Para quién — micro posicionamiento + nav (28 jun 2026)

**Qué:** nueva `/para-quien` — grid 5 perfiles (Precisión, HyperClose, Evidencia, SML, Equipos) + puente mono; nav header + footer Producto.

**Commit:** `web(tevsys): micro para quien perfiles nav header`

---

## Evidencia — nota outlier contención 4.89 (28 jun 2026)

**Qué:** `#evidencia-contencion-489` — línea *Caso extremo documentado aparte — no entra en el error medio ≈ 0,06 %* (alineado `PRECISION_*` §3 / §4.89).

**Commit:** `web(tevsys): evidencia contencion nota outlier error medio`

---

## Evidencia — titular contención estilo home (27 jun 2026)

**Qué:** bloque contención — titular Inter una línea (familia `feature-section__title` home) + puente hairline/mono «tevsys bajo estrés extremo».

**Commit:** `web(tevsys): evidencia titular contencion puente home`

---

## Evidencia — titular contención tres líneas (27 jun 2026)

**Qué:** bloque contención — titular en 3 líneas (sin corte huérfano); «siempre» en acento; hairline antes de «tevsys bajo estrés extremo».

**Commit:** `web(tevsys): evidencia titular contencion tres lineas`

---

## Evidencia — copy Evidencia fila + titular contención (27 jun 2026)

**Qué:** fila Evidencia «máxima transparencia»; bloque contención — *Precisión… trazabilidad siempre* / *tevsys bajo estrés extremo*.

**Commit:** `web(tevsys): evidencia transparencia titular contencion trazabilidad`

---

## Evidencia — tagline resumen tevsys (27 jun 2026)

**Qué:** `#evidence-audit` bajo «tevsys»: *No te pedimos fe: te enseñamos lo que pasa.*

**Commit:** `web(tevsys): evidencia tagline resumen sin fe enseñamos`

---

## Evidencia — resumen tevsys filas label/tip (27 jun 2026)

**Qué:** `#evidence-audit` — sustituidos chips mono rotos por filas label + tip (misma familia que audit-card); mono solo en etiqueta.

**Commit:** `web(tevsys): evidencia resumen capas filas label tip`

---

## Evidencia — chips resumen tevsys + sin disclaimer (27 jun 2026)

**Qué:** `#evidence-audit` resumen tevsys — chips con tip corto por capa (Precisión, HyperClose, SML, Evidencia); eliminada línea «No son señales…» (redundante con resto web).

**Commit:** `web(tevsys): evidencia resumen chips tip corto sin disclaimer`

---

## Evidencia — copy columna tevsys dos capas (27 jun 2026)

**Qué:** `#evidence-audit` columna «tevsys — por qué»: límites al bloquear, cruce y cierre — en logs auditables y panel (opción B, alineado AuditTrail Fase 1).

**Commit:** `web(tevsys): evidencia dos capas copy tevsys auditables`

---

## Evidencia — dos capas al patrón micro + resumen chips (27 jun 2026)

**Qué:** `#evidence-audit` como `feature-proof-detail` (igual que Precisión/HyperClose); sin card puente ni «para quién»; resumen tevsys en chips; índice alineado.

**Commit:** `web(tevsys): evidencia dos capas patrón micro resumen chips`

---

## Evidencia — informe MT5 dentro del bloque vídeo (27 jun 2026)

**Qué:** `#evidencia-informe-mt5` anidado bajo `#evidencia-demo`; índice acortado; titular puente en dos líneas.

**Commit:** `web(tevsys): evidencia informe MT5 bajo video titular puente`

---

## Evidencia — puente «Para quién encaja» arriba (27 jun 2026)

**Qué:** `#evidence-audit` movido tras índice «Qué puedes comprobar» — dos capas, perfiles, pilares sin escudo Pro; cierre mínimo al final; card técnica final eliminada.

**Commit:** `web(tevsys): evidencia puente para quien encaja arriba`

---

## Evidencia — bloque contención captura sweep lateral (27 jun 2026)

**Qué:** `evidencia-489-sweep-web.png` al lado de los tres pasos en `#evidencia-contencion-489`; marco oscuro; sticky en desktop.

**Commit:** `web(tevsys): evidencia contencion captura sweep lateral`

---

## Evidencia — bloque contención v3 tevsys leyó, sin broker, layout capturas (27 jun 2026)

**Qué:** `/features/evidencia#evidencia-contencion-489` — titular «Precisión cuando puede — contención cuando toca — bajo estrés extremo»; bloque **reposicionado** tras informe MT5 (tercer bloque al scroll); marco visual reforzado; grid preparado para captura lateral en pasos; «tevsys leyó»; KPI sin broker; panel centrado.

**Commit:** `web(tevsys): evidencia contencion v3 reposicion tras informe MT5`

---

## Evidencia — bloque contención v2 copy corto + capturas visibles (28 jun 2026)

**Qué:** `/features/evidencia#evidencia-contencion-489` — propuesta A; sin referencia «4.89» en copy público; KPI **111 ms** mono; panel + gráfico M2 visibles (sin acordeón); sin panorámica; ancla + scroll offset; puente audit sin número interno.

**Commit:** `web(tevsys): evidencia contencion v2 copy corto KPI 111ms capturas visibles`

---

## Evidencia — bloque contención 4.89 bajo estrés (28 jun 2026)

**Qué:** nuevo bloque `#evidencia-contencion-489` en `/features/evidencia` — caso FTMO GER40 8 jun 2026: tres números separados (+0,50 % / +0,65 % tick / +1,04 % cierre), galería 3 capturas, puente en `#evidence-audit`. Sin tocar hero ni contador 97.

**Assets:** `public/images/evidence/evidencia-489-panel-stop.png`, `evidencia-489-sweep-m2.png`, `evidencia-489-panoramica-m2.png`.

**Docs TGP:** `docs/HANDOFF_4.89_CONTENCION_WEB_TEVSYS.md` §8–12 · viñeta V12.

**Commit:** `web(tevsys): evidencia bloque contencion 4.89 bajo estres`

---

## Contador operativas — **97** (jun 2026)

**Fuente:** `docs/PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3 (repo TGP).

**Web:** `src/config/settings.js` → `TEVSYS_DOCUMENTED_OPERATIVES` + `documentedOperatives`; consumido en home card Precisión, hook `/features/precision`, lista `/features/evidencia`, meta `description`.

**Docs:** `SEO_ANALYTICS_TEVSYS.md`, `CONTENIDO_WEB_TEVSYS_LANDING.md`, `PROMPT_MAESTRO_*`, `CARDS-NEXT-PHASE.md`.

**Commit:** `web(tevsys): sync contador 97 operativas documentadas`

---

## Home — puente Trader·fundador hairline (22 jun 2026)

**Qué:** `.tevsys-home-plans-founder-bridge` vuelve **entre** banda planes y `.tevsys-home-founder-band` (fuera del bloque fundador) para que el hairline gris sea visible sobre negro; márgenes alineados a puentes auditoría/planes. **22 jun tarde:** más aire puente + cola fundador antes del footer (Opción A respiración). **Misma pasada:** hairlines cards→auditoría y auditoría→planes (puentes fuera de KITT + `::before` explícito).  
**Archivo:** `src/pages/index.astro` · `HANDOFF_HOME_BLOQUE_CARDS_JUN2026.md`  
**Commit:** `web(tevsys): fix hairline puente Trader fundador`

---

## Home KITT — mezcla 50/50 gris·ámbar (22 jun 2026)

**Qué:** `tevsys-hero-kitt-tone-*` + `tevsys-home-lower-kitt-mix-*` (base, desktop, móvil) — platos simétricos 50% tiempo cada tono (antes ~60/40 ámbar). Resto del motion sin cambio.  
**Archivo:** `src/styles/global.css` · `MOTION_HOME_TEVSYS_HANDOFF_IA.md`  
**Commit:** `web(tevsys): kitt home mezcla 50-50 gris ambar barridos`

---

## Hero 2m-E — suavizado motion pilares (22 jun 2026)

**Qué:** menos vacío entre vueltas; fundido antes de reposicionar frases; fix handoff cuando caía la 4.ª frase; tiempos móvil aparte.  
**Archivo:** `HomeHeroSection.astro` · `HANDOFF_HOME_HERO_ESQUEMAS.md`  
**Commit:** `web(tevsys): suaviza motion hero 2m-e pilares menos cortes bruscos`

---

## Home + cierre visual — cohesión jun 2026

**Handoff:** `docs/HANDOFF_HOME_BLOQUE_CARDS_JUN2026.md`  
**Método:** repo TGP `.cursor/rules/workflow-web-visual-tevsys.mdc`  
**Pendiente (chat jun 2026):** ~~transición auditoría → Planes~~ **cerrada 21 jun noche.**

### Home (`index.astro`)

1. Puente hero `.tevsys-home-hero-bridge` — hairline + `Precisión · HyperClose · SML · Evidencia` (IBM Plex Mono).
2. Checklist carbón; **toque B** aparcado.
3. H2 *¿Has perdido dinero…?* · subrayado *Nosotros sí.* · remate *Ellos deslizan…* mono.
4. **Cards:** subrayado títulos 2px; títulos Inter; **Opción A respiración** (aire + cuerpo suave, hook fuerte).
5. Puente cards→auditoría `.tevsys-home-cards-audit-bridge` — `Evidencia · Trazabilidad · Verificación`.
6. Caja auditoría: kicker `Revisión asistida · próximamente` (mono); H2 + copy sin cambio sustancial.
7. Planes: puente `Essential · Advanced · Pro` + respiración plan-cards (A).
8. Puente planes→fundador `Trader · fundador` — hairline sobre negro (entre planes y banda fundador).
9. Firma fundador mono.

**Revertido en sesión:** mono hooks cards · mono/gris títulos cards · split mono operativas.

### Footer (`Footer.astro`)

- `Barcelona (España)`.
- **Prueba mono:** contacto + copyright.

**Commit paquete sesión:** `web(tevsys): cohesión home puentes cards auditoría planes respiración footer`

---

## Contador operativas — **95** (20 jun 2026)

**Fuente:** `docs/PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3 (repo TGP).

**Web:** `src/config/settings.js` → `TEVSYS_DOCUMENTED_OPERATIVES` + `documentedOperatives`; consumido en home card Precisión, hook `/features/precision`, lista `/features/evidencia`, meta `description`.

**Commit:** `web(tevsys): sync contador 95 operativas documentadas`

---

## Hero home — esquema 2m-E solo JS + slots aleatorios (6 jun 2026)

**Qué:** vacío ~4 s · batch **4** juntas · apagado async **2+1+1** · fase solo 4 frases en slots aleatorios · script 2m-E.

**Commit:** `web(tevsys): hero 2m-e solo js slots aleatorios mas vacio inicial`

---

## Hero home — esquema 2m una línea fade (20 jun 2026)

**Qué:** 4 pilares ES en una línea · fade opacidad secuencial (20 s, sin scroll) · separación amplia · halo recortado.

**Commit:** `web(tevsys): hero 2m una linea pilares fade sin scroll`

---

## Hero home — esquema 2l-B dos líneas fijas (20 jun 2026)

**Qué:** 2 líneas pilares ES sin caja · halo recortado · sustituye 2l-A (descartada).

**Commit:** `web(tevsys): hero 2l-b dos lineas pilares sin caja`

---

## Hero home — esquema 2l-A tira fija gris + halo recortado (20 jun 2026)

**Qué:** sustituye marquee 2k por `hero-pillar-band` estático (4 pilares ES) · fondo gris carbón · halo ~−32% · sin animación.

**Cola:** 2l-B dos líneas · 2l-C una frase — ver `HANDOFF_HOME_HERO_ESQUEMAS.md`.

**Commit:** `web(tevsys): hero 2l tira fija pilares gris halo recortado`

---

## Hero home — esquema 2k **cerrado** (19 jun 2026, noche)

**Archivo:** `src/components/sections/heros/HomeHeroSection.astro` · `data-hero-layout="scheme-2k"`

**Qué (sesión completa):**

1. **Marquee bajo H1** — 4 frases ES en bucle (precisión · disciplina · trazabilidad · MT5). Sin pilares estáticos 2×2 ni pill overflow.
2. **Tipografía franja** — ~15 px, contraste ~78%, mayúscula inicial; eliminado `lowercase` forzado.
3. **Disclaimer** — DM Sans alineado al H1 (~15 px); «No damos señales ni promesas de beneficio».
4. **Espaciado** — menos hueco entre H1, franja y acto 2 (disclaimer + CTAs).
5. **H1** — blanco suave `#e8ebf0` (no blanco puro); TEVSYS ámbar intacto.
6. **TEVS** — `Trading Edge Verification System` debajo de la foto en marco gris; `lang="en"` `translate="no"`; ~20% opacidad. (Probado overlay en PNG → descartado.)
7. **Tagline EN** — eliminada `Where precision meets the edge` del bucle (home ES).

**No tocado:** KITT / motion (`index.astro`, `global.css`).

**Validación:** fundador — hero listo en este sentido (captura ~22:40).

**Pendiente (fuera hero):** más aire entre `hero-platform-note` y primer `h2` home (`.feature-card__section` en `index.astro`).

**Handoff:** `docs/HANDOFF_HOME_HERO_ESQUEMAS.md`

**Commits sugeridos (línea única deploy):**
`web(tevsys): hero 2k cerrado marquee ES disclaimer DM Sans TEVS off-white`

---

## Hero home — esquema 2k refino marquee + disclaimer (19 jun 2026)

**Qué:** iteración intermedia — marquee ~14 px · disclaimer DM Sans · TEVS overlay franja negra (supersedido en misma sesión).

**Handoff:** `docs/HANDOFF_HOME_HERO_ESQUEMAS.md`

---

## Hero home — esquema 2j velas + tagline (19 jun 2026)

**Qué:** dos líneas pilares flotantes · acto 2 disclaimer · velas ambient + marquee gris · KITT intacto.

**Commit sugerido:** `web(tevsys): hero 2j pilares flotantes velas tagline edge`

---

## Hero home — esquema 2g pill fino (19 jun 2026)

**Qué:** pill ancho (`hero-pill-strip`) · 4 pilares una línea desktop · sep gris · disclaimer fuera · móvil wrap sin scroll horizontal.

**Rollback:** `docs/HANDOFF_HOME_HERO_ESQUEMAS.md` (2f = marco dos líneas).

**Commit sugerido:** `web(tevsys): hero 2g pill fino una linea cuatro pilares`

---

## Hero home — esquema 2d (19 jun 2026)

**Qué:** sin badge tagline · H1 más aire · pill gris · KITT intacto. Tagline motion → paso siguiente.

---

**Qué:** cuatro pilares mismo peso · disclaimer legible · nota MT5 bajo mano/TEVS.

**Rollback:** `docs/HANDOFF_HOME_HERO_ESQUEMAS.md`.

---

## Hero home — esquema 2 jerarquía (19 jun 2026)

**Qué:** H1 dos líneas (~4rem desktop) · sublíneas disciplina+trazabilidad / precisión+protección · disclaimer pequeño · tagline tras CTAs.

**Rollback:** `docs/HANDOFF_HOME_HERO_ESQUEMAS.md` (baseline pre-esquema 2).

**Commit sugerido:** `web(tevsys): hero home esquema 2 escala jerarquia`

---

## Cierre SSL apex tevsys.io (19 jun 2026)

**Resumen:** `tevsys.io` sin www dejó de fallar certificado tras añadir el dominio apex en Vercel; DNS en Plesk (ProfesionalHosting) ya apuntaba a Vercel.

| Pieza | Acción |
|-------|--------|
| Vercel | Añadir `tevsys.io` al proyecto · redirect 308 → `www` |
| Plesk | A `@` → `76.76.21.21` · CNAME `www` → `cname.vercel-dns.com` (sin cambios en sesión) |
| Validación | HTTPS OK en apex y www |

**Canon infra:** `docs/DOMINIO_SSL_TEVSYS.md` · correlato TGP: `HANDOFF_AXIOM_LABS_JUAN_PEREZ.md`.

**Sin cambio de código Astro** en este cierre.

---

## Cierre sesión web — Familia A piel carbón (8 jun 2026, validado fundador)

**Resumen en una frase:** fin del gris opaco; carbón translúcido en producto; home + micros + footer + CTA alineados.

| Área | Qué quedó |
|------|-----------|
| **Tokens** | `--micro-detail-*`, `--micro-demo-*`, `--micro-close-*` en `global.css` |
| **Micros** | HyperClose, Evidencia, Precisión, SML — cajas prueba carbón; halo solo «Qué puedes comprobar» (+ cierre Evidencia) |
| **Home** | Microcards + plan cards `hsl(222…)`; cita fundador respira |
| **Footer** | `--theme-bg` + fade en home **y** micropáginas |
| **CTA final** | Opción **B** — separador ligero; **no** subir línea (decisión fundador) |

**Pendiente (contenido, no piel):** capturas HyperClose día OFF · SML Fase 2 vídeos post P12.

**Commits sugeridos (batch):**
```
web(tevsys): pasada carbon familia A micros home footer y cta B
docs(tevsys): cierra canon visual familia A jun 2026
```

---

## CTA micropáginas — separador ligero opción B (8 jun 2026)

- **Qué:** fin caja `--theme-surface-1` en `.feature-cta`; línea superior + aire + botón ámbar; transición al footer `--theme-bg`.
- **Alcance:** HyperClose, Precisión, Evidencia, SML — regla única `global.css`.
- **Archivos:** `global.css`; retirados estilos locales en las cuatro `.astro`.

---

## SML — piel carbón Familia A (8 jun 2026)

- **Qué:** hero panel `--micro-demo-bg`; bloques prueba carbón; tarjetas captura vía tokens global; fin overrides locales en `sml-proof-card`.
- **Sin tocar:** banner validación Advanced/Pro, copy.
- **Archivos:** `sml.astro` · `global.css`.

---

## Footer — micropáginas alineado a home (8 jun 2026)

- **Qué:** mismo `--theme-bg` + fade + inset ámbar que home en `/features/*` (wrapper `.tevsys-feature-micro-surface`).
- **Motivo:** el pie seguía en `--theme-surface-1` (gris opaco) fuera de home.
- **Archivo:** `global.css`.

---

## Precisión — piel carbón Familia A (8 jun 2026)

- **Qué:** volatilidad, Nasdaq, logs y cuenta pequeña en `feature-proof-detail` carbón; fin `--video-slim`; hero `--micro-demo-bg` sin `::before`; halo solo «Qué puedes comprobar».
- **Global:** aire en vídeos secundarios dentro de cajas carbón (`global.css`).
- **Archivos:** `precision.astro` · `global.css`.

---

## Pasada carbón Familia A + home — cierre validado fundador (8 jun 2026)

**Canon:** `docs/SISTEMA_VISUAL_CUATRO_FAMILIAS_TEVSYS.md` § *Pasada carbón Familia A + home*.

- **Micros cerradas (piel):** Evidencia (logs carbón, `#evidence-audit` cierre), HyperClose (semáforo + día OFF carbón, halo solo checklist).
- **Home:** microcards + plan cards `hsl(222…)`; footer home `--theme-bg` + fade — cita fundador gana protagonismo; footer sigue siendo pie legal claro.
- **Tokens:** `--micro-detail-*`, `--micro-demo-*`, `--micro-close-*` en `global.css`.
- **Pendiente:** `/features/precision` y `/features/sml` — misma piel, sin halos extra.
- **Archivos:** `global.css` · `evidencia.astro` · `hyperclose.astro` · `index.astro` · `Footer.astro` / `Page.astro`.

---

## Home — plan cards + footer (8 jun 2026)

- **Plan cards:** gradiente `hsl(222…)` alineado a microcards (fin gris neutro `hsl(0,0%,6%)`).
- **Footer (home + micropáginas Familia A):** `--theme-bg` + fade superior suave; fin losa `--theme-surface-1` en `/features/*`.

---

## Evidencia + HyperClose — carbón translúcido Familia A (8 jun 2026)

- **Tokens:** `--micro-detail-*`, `--micro-demo-*`, `--micro-close-*` en `global.css` (`.tevsys-feature-micro-surface`).
- **Regla:** índice «Qué puedes comprobar» = cálido + halo; bloques prueba = carbón frío sin halo; cierre Evidencia = halo opcional.
- **HyperClose:** semáforo + día OFF en `feature-proof-detail` (no `--video-slim`); más aire antes del vídeo OFF.
- **Docs:** `SISTEMA_VISUAL_CUATRO_FAMILIAS_TEVSYS.md` § Familia A actualizado.

---

## Evidencia — Familia A cierre sin losa (8 jun 2026)

- **`#evidence-audit`:** clase `--familia-a-close` — fondo transparente, línea superior, brillo ámbar (como checklist); MT5/tevsys en franjas laterales; bloque Pro y «Para quién» sin cajas grises apiladas.
- **Global:** `global.css` — patrón reutilizable para otras micros Familia A.
- **Web:** `evidencia.astro` · `global.css`.

---

## Evidencia + auditoría — P0 copy honesto (7 jun 2026)

- **Evidencia `#evidence-audit`:** bloque adelgazado — solo prueba (grid MT5/tevsys, 87 ops, 0,06 %, enlace Precisión). Sin manifiesto ni roadmap.
- **`/auditoria-ia`:** banner «servicio no abierto»; CTAs **Qué estamos preparando** + **Avísame cuando abra** (contacto).
- **Home:** frase puente en teaser auditoría (hoy cruzas tú / mañana revisión asistida).
- **Web:** `evidencia.astro` · `auditoria-ia.astro` · `index.astro` · `CONTENIDO_WEB_TEVSYS_LANDING.md`.

---

## Evidencia — bloque auditoría copy ampliado (7 jun 2026)

- **Enganche:** «La evidencia no la escribimos nosotros» + cruce MT5/tevsys.
- **Viñeta 1:** qué somos, hoy en prod, en camino (SML, auditoría, noticias) — sin encasillar.
- **Cierre:** contrastar lo pactado vs registros; enlace Precisión con motivo (0,002 p.p.).
- **Web:** `features/evidencia.astro` · `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` § Evidencia.

---

## Evidencia — Familia A en curso (7 jun 2026)

- **Qué:** alinear `/features/evidencia` a HyperClose/Precisión/SML — hook hero 7,20 € ámbar, `--feature-micro-radius`, sección logs `--video-slim`, leads por bloque, orden índice (HTML antes de logs).
- **Web:** `src/pages/features/evidencia.astro`.

---

## SML micropágina **CERRADA** — Familia A Fase 1 (7 jun 2026)

- **Estado:** validada por fundador; Fase 1 web lista (Fase 2 = vídeo post P12).
- **Pulido final:** punto ámbar multigráfico alineado (canon Precisión); capturas panel y pérdida ampliada centradas.
- **Web:** `src/pages/features/sml.astro`.

---

## SML — Familia A Fase 1 piel web (7 jun 2026)

- **Qué:** `/features/sml` alineada visualmente a HyperClose/Precisión — **sin** tocar EA (SML sigue en validación P12).
- **Incluye:** bloque demo panel principal; banner validación Advanced/Pro; índice «Qué puedes comprobar»; tarjetas redondas (`--feature-micro-radius`); pérdida ampliada con hook ámbar **−0,75 % → −0,78 %**; flujo demo 3 capturas en acordeón; CTA final.
- **Honestidad:** mensaje «solo lo que el build demuestre»; sin vídeo hero hasta grabación.
- **Web:** `src/pages/features/sml.astro` · `SISTEMA_VISUAL_*` § SML.

---

## Precisión micropágina **CERRADA** — Familia A (7 jun 2026)

- **Estado:** validada por fundador; **lista** junto a HyperClose como referencia Familia A cerrada.
- **Estructura:** hero + manifesto + demo principal 100k + índice «Qué puedes comprobar» + 4 bloques demo (volatilidad · Nasdaq · cuenta pequeña bundle · logs) + CTA.
- **Visual:** `--feature-micro-radius` en tarjetas y embeds; hooks ámbar por bloque; vídeo Nasdaq con `demo-video--light`.
- **Pendiente fuera de esta URL:** regrab hero Londres/GER40 = opcional futuro (`SISTEMA_VISUAL_*` § handoff).
- **Web:** `src/pages/features/precision.astro` · `src/styles/global.css`.

---

## Precisión — Familia A alineada a HyperClose (7 jun 2026)

- **Hero 100k:** hook con **7,20 € (0,0072 %)** en ámbar; nota vídeo editado + enlace **Evidencia verificable** (sin acordeón duplicado).
- **Secundarios:** `--video-slim` (volatilidad, Nasdaq, logs); eliminado bloque redundante «Aquí se decide el cierre».
- **Cuenta pequeña + stats:** desviación documentada **0,06 € (0,002 p.p.)** en hook y bloque capturas (misma línea que hero 100k).
- **Web:** `features/precision.astro`.

---

## Precisión / Evidencia — demo 100k reexport overlay Wall Street (7 jun 2026)

- **Qué:** sustituido `evidencia-100k-perdida.mp4` — overlay 5 solo «Apertura Wall Street» (sin «alta volatilidad»).
- **Fuente export:** `Downloads/evidencia 100k perdida wallstreet v2.mp4` (Clipchamp).
- **Web:** `?v=20260607wsv2` en `precision.astro`, `evidencia.astro`, puentes `como-funciona.astro`.

---

## HyperClose — semáforo cerrado; día OFF alineado y evidencia pendiente (7 jun 2026)

- **Semáforo:** **cerrado** — copy en lista + collage visible + dos enlaces vídeo (demo 2:23 · Nasdaq ~4 min).
- **Día OFF — tono:** mismo criterio que semáforo (intro con aire, `--video-slim`); **acordeón** «Capturas de los escenarios día OFF» (sin contar escenarios en el label).
- **Pendiente operativo (fundador, entre semana):** regrabar escenarios en terminal (tevsys con día OFF, intento operar); **collage** composito modal+panel actualizado (ref. semáforo CAP-06b); sustituir PNG/webp en galería; **vídeo** `tevsys-rotacion-automatica-dia-off.mp4` se mantiene.
- **Web:** `features/hyperclose.astro` · comentario `PENDIENTE` en bloque `#hyperclose-off`.

---

## HyperClose — collage semáforos visible en micropágina (7 jun 2026)

- **Qué:** captura **CAP-06b** (*hyperclose collage para mql market HECHO.png*) en sección «Semáforo de responsabilidad» — **solo collage + explicación** (sin 2.º vídeo duplicado ni acordeón de 3 modales sueltos: eran capturas antiguas y redundantes vs Market).
- **Vídeo:** el movimiento sigue en la **demo principal** (2:23); enlace desde el pie de la collage.
- **Fuente:** `C:\Users\Usuario\Desktop\capturas mayo para seguir con mql producto\hyperclose collage para mql market  HECHO.png`
- **Web:** `public/images/evidence/hyperclose-semaforos-collage-panel-modales.png` · `features/hyperclose.astro`

---

## Footer — **CERRADO** (validado fundador 7 jun 2026)

- **Estado:** footer dado por **listo por el momento** (captura producción 7 jun).
- **Job:** mapa Guías + Producto + Legal + contacto; nav principal **solo header** (sin franja ámbar duplicada).
- **Estructura final:**
  1. Fila contacto en grid 3 columnas: **tevsys** · **info@tevsys.io** · **Barcelona (Spain)**.
  2. **Una línea** horizontal bajo contacto (no tres rayas por columna).
  3. Tres columnas: **Guías** (subgrupos Essential / Advanced·Pro) · **Producto** · **Legal**.
  4. Títulos `— Guías / Producto / Legal` alineados con icono/logo vía cuadrícula (18 px mail/ubicación · 24 px marca).
  5. **Made with love…** — mismo tamaño; borde superior + padding antes del copyright.
- **Labels Guías Adv/Pro:** `Config · al instalar (entre semana)` · `Config · en fin de semana` (enlace a guía C; **no** confundir con microclip).
- **`footerNav`:** vacío — eliminada navegación duplicada (Inicio, Cómo funciona…).
- **Iteraciones 6–7 jun:** rediseño compacto → tres columnas verticales apiladas → alineación Producto/Legal → fix build Astro (listas inline en plantilla; markup `<a>` corregido).
- **Archivos:** `src/components/core/Footer.astro` · `src/config/footer.js` · `src/layouts/Page.astro`.
- **Commits ref.:** `web(tevsys): footer compacto…` · `footer columnas alineadas…` · `footer alinea producto y legal…` · `fix footer build…`.

---

## `/como-funciona` — microclip fin de semana fuera de videoteca (7 jun 2026)

- **Qué:** retirado de `siguienteNivelClipCards` el hueco **MC-CF-019** (*Preconfig fin de semana: del engranaje gris al lunes con candado*) con MP4 embebido.
- **Por qué:** no es microclip de **comportamiento** (~30 s); es procedimiento de **Familia C** — el vídeo largo (**2:01**) vive en **`/configuracion-fin-de-semana`**.
- **Videoteca:** vuelve a **4 huecos** (OFF · observación pasiva · retocar límites protegido · auditoría Fase 1); título bloque **sin cambio** (*Todo nuestro comportamiento en microvídeos* — roadmap de muchos clips).
- **MP4:** conservado en `public/videos/como-funciona/tevsys-clip-preconfig-fin-semana-linea1-30s.mp4` por si entra en guía C.
- **Catálogo:** `docs/CATALOGO_MICROCLIPS_TEVSYS.md` (repo TGP) — MC-CF-019 estado `editado`, fuera de rejilla web.
- **Archivo:** `src/pages/como-funciona.astro`.

---

## Guía `/configuracion-fin-de-semana` — títulos, copy lectura, espaciado (7 jun 2026)

- **Títulos:** h1/h2/SEO **«Configuración en fin de semana»** (unificado).
- **Bloques «Si prefieres leer»:** finde = **modo configuración** (engranaje); reprogramar vía F7; **protección el lunes 00:00** (no «bloqueado hasta guardar»); entre semana sin abreviatura confusa L–V en copy principal.
- **Bloque 2 ampliado:** **PROGRAMADO · LUNES** = botón panel; engranaje en color = esquina inferior izquierda del gráfico.
- **Espaciado:** menos hueco hero → vídeo (`guia-hero` + `guia-video-panel` en `guia-operativa.css`).
- **Enlaces cruce:** alineados en `configuracion-al-instalar.astro`, `configuracion.astro`, `como-funciona.astro`.
- **Archivos:** `src/pages/configuracion-fin-de-semana.astro` · `src/styles/guia-operativa.css`.

---

## `/features/hyperclose` — Familia A canon cerrada (6–7 jun 2026)

- **Secciones secundarias:** `--video-slim` (semáforo 3 niveles, día OFF) — sin losa gris; título + línea + vídeo + `<details>` capturas.
- **Hook demo principal:** `15 lotes · GER40 · límite −1 % · desviación 1,31 € · Apertura Wall Street · HyperClose en 3 niveles` — cifra y «HyperClose en 3 niveles» en **ámbar**.
- **CSS compartido:** `src/styles/global.css` — `.feature-proof-detail--video-slim`, `--feature-micro-radius`.
- **Doc:** `docs/SISTEMA_VISUAL_CUATRO_FAMILIAS_TEVSYS.md` § Familia A checklist · handoff micropáginas (Precisión → SML → Evidencia pendiente).

---

## Familia C — guías operativas **cerrada** v5.6 (6 jun 2026)

- **Plantilla canon:** `/instalacion` — hero ámbar acotado · vídeo protagonista · lectura editorial · fork «Elige tu guía» tres filas iguales · labels plan en ámbar · sin CTA demo.
- **CSS compartido:** `src/styles/guia-operativa.css`.
- **URLs alineadas:** `/instalacion` · `/configuracion` (Essential) · `/configuracion-al-instalar` (Adv/Pro L–V) · `/configuracion-fin-de-semana` (Adv/Pro finde).
- **Vídeo C1:** export **2:01** en fin de semana; A1 instalación **1:24** en `/instalacion`.
- **Doc:** `docs/SISTEMA_VISUAL_CUATRO_FAMILIAS_TEVSYS.md` · `docs/PLAN_VIDEOS_A_B_C_INSTALACION_CONFIG_SEMANA.md` § 6.1c.

---

## Sistema visual — cuatro familias A/B/C/D (6 jun 2026)

- **Doc canon:** `docs/SISTEMA_VISUAL_CUATRO_FAMILIAS_TEVSYS.md` — job por familia; tabla cierre; footer; pendiente capturas HyperClose día OFF; buscador global aplazado.
- **Familia B (`/como-funciona`):** estable en producción; criterio motion documentado en handoff — **no** copiar estilos en guías C.

---

## Footer — rediseño compacto (inicio 6–7 jun 2026, ver entrada «CERRADO» arriba)

- Primera pasada: contacto horizontal; columnas Guías/Producto/Legal; franja nav luego **eliminada**; `footer.js` con `groups` en Guías y `note: 'próximamente'` en Noticias y horarios.
- Detalle histórico pre-rediseño: `SISTEMA_VISUAL_*` § Footer diagnóstico histórico.

---

## Contador operativas 87 (4 jun 2026)

- **Fuente:** `docs/PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3 (repo TGP) — pareja **4.86** FTMO + **4.87** IC Markets.
- **Web:** `settings.js` (meta description), `index.astro` (card Precisión), `features/precision.astro` (hook), `features/evidencia.astro` (bloque auditoría); espejo `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`, `docs/SEO_ANALYTICS_TEVSYS.md`, `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`.

---

## Home — h2 sección cards: deslizamiento al límite (may 2026)

- **Título:** `¿Cuánto has perdido por no parar a tiempo — y por deslizamiento al límite?` (sustituye *¿Cuánto dinero has perdido por no parar a tiempo?*).
- **Archivo:** `src/pages/index.astro` — clase `feature-section__title`; párrafo hook y checklist sin cambio.
- **Criterio:** unir dolor disciplina (HyperClose) + cierre al límite (precisión) en una sola pregunta; sin mencionar “comisiones” en el h2 (siguen en card 0,06 %).

---

## `/como-funciona` — Precisión puente: MP4 hero micro + capítulo auditoría reforzado (may 2026)

- **Card Precisión:** `featureVideoSrc` = **`/videos/features/evidencia-100k-perdida.mp4`** (primer embed grande en `/features/precision`), ya no `precision-demo-volatilidad.mp4`.
- **Auditoría:** más **aire** tras el puente; capítulo con **gradiente** suave + **línea ámbar** superior; kicker y **H3** algo más marcados; **`how-audit-chapter__hook`**; placeholder vídeo con **borde/sombra** más presentes; `how-audit-chapter__frame` más ancho (`46rem`).

---

## `/como-funciona` — FUNCIONALIDADES: solo lista de nombres (tijera de párrafos) (may 2026)

- Bajo el H3 «Las cuatro piezas, con contexto breve»: una sola línea con **Precisión al cierre**, **HyperClose**, **Smart Money Lock**, **evidencia verificable** (sin repetir «contexto breve» ni vídeo/enlaces).

---

## `/como-funciona` — Copy Siguiente nivel + FUNCIONALIDADES: sin contradicción «contexto» (may 2026)

- Frase bajo H2: **vistazo breve** + enlace a profundizar; **sin** «un poco más de contexto» (chocaba con «contexto breve» del H3).
- Bloque FUNCIONALIDADES: primera línea **sin** repetir «las mismas cuatro al abrir…»; segunda línea acorta «detalle completo» → **«lo extenso»**.

---

## `/como-funciona` — Copy puente FUNCIONALIDADES: «con contexto breve» (may 2026)

- H3 y cuerpo alineados con la realidad: **no** es “más explicado” aquí; **sí** contexto breve + vídeo muestra; **detalle** en micropáginas por enlace.

---

## `/como-funciona` — Grid puente 2×2 (orden home) + embeds más altos (may 2026)

- **`how-more-bridge__grid`:** desde **560px** dos columnas fijas (arriba Precisión + HyperClose, abajo SML + Evidencia); debajo, una columna.
- **`how-more-bridge`:** `max-width` **54rem**; **`how-more-bridge-card__media`** `max-height` con **clamp** más generoso para los MP4.

---

## `/como-funciona` — Copy puente Siguiente nivel (tono A) + capítulo FUNCIONALIDADES más claro + aire (may 2026)

- Frase bajo H2 «Esto no es todo…»: tono **A** (tú / abajo / auditoría después); sin «portada» ni «vamos por bloques».
- Capítulo **FUNCIONALIDADES ÚNICAS**: H3 **«Las cuatro piezas, un poco más explicadas»**; cuerpo sin «home»; segunda línea aclara **vídeo en tarjeta** vs **enlace a página de producto**.
- **Espacio** extra bajo la frase puente + `padding-top` en `how-chapter--bridge` para separar visualmente del bloque siguiente.

---

## `/como-funciona` — Bloques tipo Presentación en Siguiente nivel + capítulo auditoría (may 2026)

- **Patrón:** eyebrow/kicker ámbar (`how-eyebrow--chapter-kicker`) → **H3** con **`how-present-title__accent`** (subrayado) → **`how-section-sub`** (+ segunda línea opcional) → contenido.
- **Siguiente nivel (H2):** párrafo puente **`how-more__siguiente-aspiration`** tras el título principal.
- **`how-chapter--bridge`:** FUNCIONALIDADES ÚNICAS + grid de cuatro cards (sin cabecero duplicado dentro de `<header>` global incorrecto).
- **`how-chapter--audit`:** Primero · Auditoría + frase clara + **placeholder vídeo** (`how-embed-placeholder--zero-teaser` compartido con «De cero…» vía `:is(.how-zero-protected, .how-audit-chapter)`).
- Transición verbal: **`how-more-audit-bridge`** con cierre «Lo siguiente ordena exactamente eso.»; lista detallada solo en caja **`how-more-lead__audit`** (sin párrafo largo duplicado previo).

---

## `/como-funciona` — Presentación YouTube: borde marca en Parte 1 / Parte 2 (may 2026)

- **`how-presentation .how-embed--chrome`:** `border-color` ámbar + sombra ligera alineada con placeholders de clips (dark/light).

---

## `/como-funciona` — «Siguiente nivel» menos sumido + placeholders de clips con guiño vídeo (may 2026)

**Objetivo:** en tema oscuro el stage **`.how-more`** se leía muy cerrado; los cuatro placeholders del grid **sin embed** no tenían el “color” que da el chrome del reproductor.

### `src/pages/como-funciona.astro`
- **`.how-more__bg` (dark):** radial central algo más claro, lavado ámbar un poco más visible, **menos** vignette interior (`inset`).
- **Barrido vertical (dark):** override **`page-como-funciona`** sube opacidad del **`.how-more__sweep`** (sigue desacoplado del header por duración/delay).
- **Tarjetas `.how-more-cell--video` (dark):** superficie y borde un peldaño más legibles + sombra suave.
- **Placeholders del grid:** clase **`how-embed-placeholder--clip-teaser`** + **`how-clip-teaser__glyph`** (círculo + triángulo genérico, no marca YouTube); gradiente y borde ámbar en dark/light.
- **Puente FUNCIONALIDADES ÚNICAS (cards con MP4):** **`how-bridge-video-mark`** en esquina superior derecha del área vídeo — misma familia visual que el play genérico de los placeholders; **`pointer-events: none`** para no tapar controles nativos del `<video>`.
- **Puente (cuatro cards):** hover un poco más marcado; **carril izquierdo con matiz distinto** por posición (ámbar / frío / violeta suave / menta); tema claro sin pisar el carril al hover.
- **SML (placeholder):** **`placeholderPulse`** + clase **`how-more-bridge-card__media--placeholder-pulse`** — animación muy suave del borde discontinuo; **`prefers-reduced-motion: reduce`** sin animación.
- **«De cero a protegido» (sin embed):** **`how-embed-placeholder--zero-teaser`** + **`how-clip-teaser__glyph--zero`** (misma familia que clips).
- **Contenedor stage «Siguiente nivel»:** contorno + sombra exterior suave (dark/light).

---

## Home — corrección mid-glow **features** vs burbuja **planes** (may 2026)

**Aclaración:** el **pase 1** tocaba **`.tevsys-home-mid-glow`** (detrás de las **cuatro cards de producto** del bloque superior), no las burbujas KITT de la **franja inferior**. El fundador echaba de menos las **dos esferas grises en movimiento**; la molestia era **`.tevsys-home-tail-bubble-solo`** (radial **ámbar** detrás de **«Elige tu cuenta»** / planes).

### `src/styles/global.css`
- **Mid-glow (`tevsys-home-band--cards`):** restaurado esquema **previo al pase 1**: dos capas con **`tevsys-home-mid-bubbles-a`** / **`…-a-mobile`** y **`tevsys-home-mid-bubbles-b`** / **`…-b-mobile`**; opacidades y gradientes originales (~**0,99** host, **0,66** `::before`); duraciones **~96,7s / 127s** (móvil **~95s / 126s**). Eliminado uso de `tevsys-home-mid-glow-secondary-breathe`.
- **`tevsys-home-tail-bubble-solo`:** **sin pintado ni animación** (`opacity: 0`, `visibility: hidden`, `animation: none`); el nodo se conserva en `index.astro` por si se reactiva. Escritorio ya no reescribe esta capa.

---

## Home — pase 1 motion banda **cards** (may 2026) — **supersedido en parte**

**Objetivo original:** menos fatiga en la cuadrícula de cuatro cards.

### Estado tras corrección (véase entrada anterior)
- El **mid-glow** de las cuatro cards **features** volvió al modelo **dos burbujas grises en tour**.
- Lo que **sigue vigente** del pase 1 es sobre todo **`index.astro`**: hover de **`.tevsys-card`** más sobrio y sin **`card-title-blink`**.

### Histórico (lo que se probó y se revirtió en mid-glow)
- ~~Mid-glow~~ restaurado; este bloque documenta el experimento de **una sola capa lenta + respiración** en `::before` — **no** aplica en código actual.

### `src/pages/index.astro` (`.tevsys-card`)
- Hover: **`translateY(-1px)`** (antes -3px); flecha **`scale(1,06)`** (antes 1,2).
- **`.card-title__accent`:** eliminado **`card-title-blink`**; acento ámbar con **transición** al hover; en `reduce` se mantiene salto directo a ámbar.

### Seguimiento
- Franja inferior + fundador: ver **«Home — pase 2 motion franja IA + fundador»** (entrada siguiente). Opcional: alinear `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` con los nuevos nombres de keyframes.

---

## Home — pase 2 motion **franja IA** + **fundador** (may 2026)

**Objetivo:** detrás de «¿Quieres auditar tu operativa con IA?» menos sensación de **latido repetido**; capas **desincronizadas** y trayectos con **paradas** / a veces solo **recorrido parcial**; bloque **fundador** sin barrido.

### `src/styles/global.css`
- **`tevsys-home-lower-strip` (niebla en host):** `tevsys-home-lower-strip-fog` **~46s** (antes ~28,3s); keyframes con **mesetas** (menos vaivén uniforme).
- **`::before` / `::after`:** nuevos **`tevsys-home-lower-strip-kitt-pos-wander-a`** y **`…-wander-b`** (distinta geometría temporal); duraciones **desiguales** (~41s / ~49s base; escritorio ~43s / ~51s); **delays** del segundo haz más separados del primero; mezclas gris/ámbar **más lentas** (p. ej. 19s / 24s base; desktop ~18,5s / ~23s).
- **Móvil (≤768px):** `…-wander-mobile-a` / `…-wander-mobile-b` con **ease-in-out** `alternate` (**~58s / ~68s**) + mix **~31s / ~36s**; delays asíncronos.
- **Eliminados** keyframes ya sustituidos: `tevsys-home-lower-strip-kitt-pos`, `tevsys-home-lower-strip-kitt-pos-mobile`.
- **`tevsys-home-founder-strip`:** **sin** `animation`; fondo fijo (`background-position` estático). Eliminado `@keyframes tevsys-home-founder-strip`.

---

## Paquete 1 may 2026 — Motion (entrada + desync), header oval ancho, handoff `/como-funciona`

**Handoff técnico unificado (DeepSeek / continuidad):** `docs/HANDOFF_COMO_FUNCIONA_MOTION_HEADER_1MAY2026.md` — estructura `/como-funciona`, `body.page-como-funciona`, overrides escáner + barridos verticales, variables `--tevsys-home-enter-*`, delays positivos, header borde full width + tokens logo. **§6 del handoff:** bloque inferior definitivo (**Siguiente nivel** / **Esto no es todo…**), puente `homeBridgeCards`, lead `how-more-lead`, grid `siguienteNivelClipCards` + placeholders. **§6.7:** pendiente UX transición hacia «Primero · Auditoría». **Copy puente:** kicker pasa a **«FUNCIONALIDADES ÚNICAS»** (sin punto medio, 2 may 2026).

### Resumen ejecutivo
- **Home:** ritmos “incomodados” entre capas + **`animation-delay` positivos** escalonados (niebla → hero → header → cards → franja → cola → fundador); fall phase2 con `calc(enter-rise + phase2)`; micros header `delay ~0.85s`.
- **`/como-funciona`:** escáner más lento/tenue vía `body.page-como-funciona` en `global.css`; barridos verticales más largos + delay positivo en `como-funciona.astro`; intro oval **solo halo estático** (sin sweep).
- **Header:** una barra **`width: 100%`**, `border-radius: 2.5rem`, borde sutil; logo con tokens más suaves para una sola lectura visual.
- **Layouts:** `bodyClass` opcional en `Base.astro` / `Page.astro` (uso: `page-como-funciona`).

---

## `/como-funciona` — puente «cuatro piezas home» bajo «Esto no es todo…» (30 abr 2026)

**Archivo:** `src/pages/como-funciona.astro`.

### Contexto y decisión
- Tras el H2 **«Esto no es todo: más comportamientos en vivo»** hace falta **anclar** al visitante a las mismas **cuatro rutas que la home** (precisión, HyperClose, SML, evidencia) antes del bloque narrativo de auditoría + **«FUNCIONALIDADES ÚNICAS»** + clips.
- H2 **«Esto no es todo…»**: **subrayado ámbar→gris** solo bajo **«más comportamientos en vivo»**. Puente: kicker **FUNCIONALIDADES ÚNICAS** (misma clase ámbar que auditoría; desde 2 may 2026 **sin** punto medio), centrado; eliminada la frase «Lo mismo que en portada…» y el kicker duplicado que había entre auditoría y las tres líneas.
- **No se elimina** el contenido existente (Primero · Auditoría, tres líneas con subrayado, grid de cuatro placeholders): el puente queda **encima** del bloque `how-more-lead`.
- La sección **«Enlaces directos en vivo»** (`how-depth`) con HyperClose / evidencia / SML / auditoría **se mantiene** por ahora (sin borrar; posible consolidación cuando el fundador cierre diseño).

### Comportamiento
- Grid de cards **responsive** (`auto-fit`), hover y foco accesible; CTA en gris que **toma ámbar** al hover para no competir con el color del stage hasta interacción.
- **Presentación:** iframes YouTube con **borde recto** (`border-radius: 0`).
- **Intro (H1 + Presentación):** envuelto en **`.how-intro-stage--stage`** — **contenedor ovalado** con **halo / radiales estáticos** (sin barrido interior) para no competir con el header; el **motion fuerte** queda en cabecera y en los stages inferiores («De cero…», etc.). Radio `clamp(1.75rem, 7vw, 3.25rem)`; YouTube rectos dentro del stage.
- **Tres cards** llevan **vídeo HTML5** pequeño (mismo MP4 que en las micros): **Precisión** (`precision-demo-volatilidad.mp4`), **HyperClose** (`hyperclose-demo.mp4`), **Evidencia** (`evidencia-100k-perdida.mp4`, demo 100k ~1 min 41 s). **SML** sigue solo texto + enlace hasta tener corte. El `<video>` va **fuera** del enlace principal para HTML válido y controles usables.

---

## Micropáginas `/features/*` — lectura “mapa” (tema oscuro, compartido)

**Archivos:** `src/styles/global.css` (bloque **`.tevsys-feature-micro-surface`**); wrappers en `src/pages/features/hyperclose.astro`, `precision.astro`, `evidencia.astro`, `sml.astro`.

- **`tevsys-feature-micro-surface`** envuelve el `Container` en **las cuatro** micros de producto.
- **Bloque hero demo** (`section.feature-demo.feature-demo--hero`): panel neutro **solo si `:not(:target)`** — no interfiere con resaltado ámbar por ancla (`#precision-demo`, `#evidencia-demo`, `#hyperclose-demo`, etc.).
- **`.demo-video`:** degradado, borde, **padding 3px**; **excluye** `.demo-video--light` (Nasdaq claro en Precisión).
- **`.demo-video--hero-elegant`** y **`.demo-video--compact`** (sin light): acabado “chrome” un poco más definido.
- **Tarjetas / listas:** `feature-proof-detail`, `feature-proof`, galerías, CTA, manifiesto; HyperClose mantiene refuerzo en **`#hyperclose-semaphore`** / **`#hyperclose-off`**.
- **SML:** `feature-sml-panel`, `feature-sml-proof`, `feature-demo--sml-check`, `sml-proof-card`, imagen panel — mismo criterio de marco legible.

**Handoff vídeo (todas las micros, incl. SML cuando exista):** `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` — sección **«Convención embeds de vídeo — micropáginas `/features/*`»** (hero = `feature-demo--hero` + `demo-video--hero` + `demo-video--hero-elegant`; secundarios = `demo-video--compact`; grabación clara tipo MT5/Nasdaq = **`demo-video--light`**).

---

## Header — escáner gris en micros producto (coherencia con home, sin “disco”)

**Archivos:** `src/components/core/Header.astro`, `src/styles/global.css`. **Docs:** `CONTENIDO_WEB_TEVSYS_LANDING.md` (§ Header), `MOTION_HOME_TEVSYS_HANDOFF_IA.md` §1, `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` (nota complemento abr 2026).

### Contexto y decisión
- En **home** el barrido gris del header ya aportaba “instrumento activo”; en **micropáginas** la capa **no existía** (solo se montaba en `/`), de ahí la sensación de cabecera más muerta al saltar de la portada a una feature.
- Criterio acordado con el fundador: **misma familia visual** en rutas de producto, **menos intensidad** que la home para no competir con lectura (demos, copy denso). Tras un primer despliegue demasiado tenue, se **subió visibilidad** un segundo tramo (opacidad + gradiente + duración), sin igualar el pico de `/`.

### Comportamiento por ruta (`Header.astro`)
- **`tevsys-header--with-scanner`:** `pathname` en **`/`**, **`/features/*`**, **`/como-funciona`**, **`/precios`** → se renderiza **`<div class="tevsys-header-scanner" aria-hidden="true">`** y el `<header>` lleva `position: relative; overflow: hidden` (estilo local).
- **`tevsys-header--home-scanner`:** **solo** si `pathname === '/'` — activa en `global.css` el refuerzo de **intensidad plena** (gradiente + opacidad + duraciones ya documentadas para portada).
- **Resto de rutas** (legal, contacto, auditoría, empresas, instalación, etc.): **sin** capa escáner; sin cambio de comportamiento previo.

### Modelo CSS (`global.css`, tema oscuro)
- **Base común** (`#odysseyNavHeader.tevsys-header--with-scanner .tevsys-header-scanner`): posicionamiento, `z-index: 0`, animación por defecto **`tevsys-header-scanner-sweep`**; nav y acciones en `z-index: 1`. En **≤768px** y `prefers-reduced-motion: no-preference`, home y micros pasan a variantes con **`tevsys-header-scanner-sweep-mobile`** (duraciones distintas según bloque).
- **Solo home** (`.with-scanner.home-scanner`): bloque escritorio ≥769px con gradiente reforzado, `opacity: 0.78`, `animation-duration: 28s`; móvil `opacity: 0.84`, animación **42s** — *sin cambio respecto a la iteración 19 abr 2026 en portada*.
- **Micros producto** (`.with-scanner:not(.home-scanner)`), valores **vigentes tras el segundo ajuste de legibilidad:**
  - **Base (<769px y regla general):** `opacity: 0.6`, gradiente RGBA intermedio (~102°), `animation-duration: 30s` (`tevsys-header-scanner-sweep`).
  - **Escritorio ≥769px:** gradiente un peldaño más marcado, `opacity: 0.7`, `animation-duration: 29s`.
  - **Móvil (≤768px, `prefers-reduced-motion: no-preference`):** `tevsys-header-scanner-sweep-mobile` en **44s**, `opacity: 0.76`, stops del gradiente cercanos al ~85% de la presencia del home en móvil (sin igualar 0.84).
- **Histórico de tuning:** primera pasada micro (opacidades ~0.44 / 0.52 / 0.58) se consideró **inapreciable**; segunda pasada = valores anteriores.
- **`prefers-reduced-motion: reduce`:** la capa `.tevsys-header-scanner` queda anulada en cualquier ruta con `with-scanner` (misma política que antes en home).

---

## Paquete 30 abr 2026 (II) — Operativas **80**, hero Precisión/HyperClose, nota **−0,39%**, mirrors `docs/`

**Fuente del contador:** `docs/PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3 (proyecto TGP) — **80** operativas documentadas al cierre de esta sincronización.

### Contador en web y SEO
- **`src/config/settings.js`:** meta `description` con **80** operativas.
- **`src/pages/index.astro`:** card Precisión — *80 operativas documentadas en 5 entornos de ejecución.*
- **`src/pages/features/precision.astro`:** hook hero — *80 operativas documentadas.* + *0,06%* en acento.
- **`src/pages/features/evidencia.astro`:** bloque auditoría — *Llevamos **80 operativas** documentadas…*

### `/features/precision` — copy y transparencia extrema
- **H1 (una idea, dos tiempos en pantalla):** `Precisión de cierre.` + `Menos "casi" (accent): más cierre donde toca.`
- **Hook:** 80 operativas + error medio 0,06% (condiciones normales).
- **Párrafo bajo hook (`feature-extreme-note`):** situaciones exigentes; **desviación máxima documentada** como **−0,39%** (guión matemático `−`, coma decimal); número con **misma clase de acento que el % del hook** + **cursiva** (`.feature-extreme-note__pct`) para alinear lectura con el hook.
- **Manifiesto** (`feature-manifesto-banner`): alineado al resto de features (ejecución disciplinada, precisión verificable MT5, evidencia, control bajo presión).

### `/features/hyperclose` — hero (decisión fundador, copy aprobado)
- **Hook:** `Cierre en milisegundos.` (accent) + `Hasta la siguiente ventana (día o semana), sin atajos.`
- **Lead (`feature-lead`):** `Operar en bloqueo dispara el cierre al instante; lo que pasa queda trazado para poder comprobarlo.`
- Sustituye al par anterior orientado a “Cierre inmediato en MT5…” / “Bloqueo hasta la siguiente rotación (diaria o semanal).”

### Documentación espejo en este repo (misma fecha)
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` — secciones de copy abiertura / Precisión / Evidencia / SEO alineadas a lo anterior.
- `docs/SEO_ANALYTICS_TEVSYS.md` — description con **80** operativas.
- `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`, `docs/CARDS-NEXT-PHASE.md`, `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md`, `docs/PROMPT_RESUMEN_DEEPSEEK_VIDEOS_PRECISION_HYPERCLOSE.md` — contador y referencias narrativas.

### Repo TGP (workspace fundador)
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` — bloque **§14** (nuevo) + `settings` snippet y bullets **6** con **80** operativas; puntero a este `CHANGELOG` para poda home/SML y header/`/como-funciona` del **mismo día** (entrada siguiente).

---

## Header global + micropágina `/como-funciona` (30 abr 2026, UX + vídeo en dos partes)

**Archivos:** `src/components/core/Header.astro`, `src/components/BrandOval.astro`, `src/pages/como-funciona.astro` (y enlaces previos en `src/config/nav.js` a `/como-funciona`).

### Header (`Header.astro` + `BrandOval.astro`)
- Menú en forma de **píldora sin borde** visible; **hover** y **página activa** en **grises** (sin ámbar en esos estados).
- Más **padding vertical** en la barra y en los enlaces para que **respire**; **estado activo** según ruta + `aria-current` donde aplica.
- Variables **`--tevsys-header-pill-border`** / **`--tevsys-header-pill-surface`** en `<header>`; la pastilla del **logo** las reutiliza con **fallback** si la pastilla se usara fuera del header.
- Iteración desde versiones con más “burbuja” / más ámbar en nav → cabecera **más sobria y fluida** (feedback fundador + capturas).

### `/como-funciona`
- Prioridad al **vídeo**; hero con **poco texto**.
- Bloque **Instalación y guías**: mismo destino que el pie → **`/instalacion#instalacion-video`** + puente a configuración esencial / paso 2.
- **Presentación en dos partes** (alineado a artículo MQL5 / “ver más casos”): **dos embeds en paralelo** (Parte 1 ~3 min + Parte 2 ~2:22), mismo patrón tipográfico (título + línea + enlace YouTube); en móvil se apilan.
- Sección **Selección en vídeo** sin duplicar la Parte 2: queda el corte de **configuración** (Drive) u otros cortes futuros.

---

## Home (`Elige tu cuenta`) + `/features/sml` — manifiesto visible y primera poda de densidad (30 abr 2026, copy)

**Archivos:** `src/pages/index.astro`, `src/pages/features/sml.astro`.

- En **home**, bajo `Elige tu cuenta`, se sustituye el subtítulo por el manifiesto corto:
  - *No vendemos señales. Vendemos ejecución disciplinada, alta precisión verificable de cierre en MT5, evidencia real y control bajo presión.*
- En **SML**, poda inicial de texto:
  - se compacta el bloque central (se elimina duplicidad entre “evidencia” y “qué comprobar”),
  - se mantiene foco en 4.79 y 4.81 + estado de validación final,
  - copy más directo, menos redundante, sin perder trazabilidad.
  - **poda fase 1 (tramo superior):** se elimina línea redundante de “más riesgo por defecto”, se simplifica disponibilidad (`Advanced/Pro en validación`) y se acorta el párrafo técnico bajo “Así se ve hoy en el panel”.
  - **evidencia visual 4.81 (antes/después):** se incorporan dos capturas del flujo real (activación y cierre), con nota explicativa de por qué el umbral ampliado y el cierre final pueden diferir (`-1,61%` vs `-1,58%`) y bloque preparado para captura de log técnico.

---

## `/features/sml` — narrativa sin encasillar + evidencia 4.79/4.81 + fase final explícita (30 abr 2026, copy producto)

**Archivo:** `src/pages/features/sml.astro`.

- Se añade manifiesto de posicionamiento: disciplina + alta precisión verificable de cierre en MT5 + evidencia real + control bajo presión (sin encasillar tevsys como “solo señales/no señales”).
- Nueva sección **SML en marcha: evidencia documentada** con referencia operativa a **4.79** (SML activo en ganancia) y **4.81** (cierre en pérdida ampliada con trigger en logs + cierre final coherente).
- Estado de madurez actualizado a **última fase de validación** con mensaje explícito de honestidad: no vender “100% cerrado” hasta completar escenarios pendientes.

---

## `settings.js` — `auditPackPreparationVisible: false` (30 abr 2026, producto)

**Archivo:** `src/config/settings.js`.

- CTA «**Preparar y enviar pack**» en **`/auditoria-ia`** **oculto** hasta retomar bloque auditoría en público. Rutas **`/auditoria-ia/empezar`** y **`/auditoria-ia/pack`** siguen en el proyecto.

---

## `/auditoria-ia/empezar` — CTA principal «Valida tu ID y tus archivos aquí» (prominente) + Volver a Auditoría IA (29 abr 2026, copy + UX)

**Archivo:** `src/pages/auditoria-ia/empezar.astro`.

- Sustituye al anterior «Comprobar en tu equipo»; destino sigue siendo **`/auditoria-ia/pack`**.

---

## `/auditoria-ia/empezar` — viñeta 1: arrastre en web + aclaración sin subida a servidores (29 abr 2026, copy)

**Archivo:** `src/pages/auditoria-ia/empezar.astro`.

- Paso 1 alineado al flujo real del **pack**: arrastrar/elegir en la micro web para **comprobar** localmente; no implica recepción automática en servidores tevsys.

---

## `/auditoria-ia/empezar` — título «Eres cliente de tevsys» (mayúsculas cian) + viñeta • pack + barra bajo «Tres pasos» (29 abr 2026, UX)

**Archivo:** `src/pages/auditoria-ia/empezar.astro`.

- Prefacio: kicker **ERES CLIENTE DE TEVSYS** (misma línea cian); **un punto • cian** por frase (misma familia que checklist `/auditoria-ia/pack`) y margen entre párrafos.
- Hero: **Tres pasos** al tamaño/peso del hero principal + **barra** ámbar→cian como en `/auditoria-ia`.

---

## `/auditoria-ia/empezar` — prefacio: kicker cian «Antes: cliente e ID…» + lead corto + ID en correo con licencia (29 abr 2026, copy + UX)

**Archivo:** `src/pages/auditoria-ia/empezar.astro`.

- Título del rectángulo: estilo compacto mayúsculas / acento cian (no título grande tipo pregunta).
- Lead bajo «Tres pasos»: una línea breve (ID arriba, tres piezas, comprobación local).
- Párrafo ID: afirmativo — correo que enviamos con la licencia; sin condicional «si te lo enviamos».

---

## `/auditoria-ia/empezar` — franja «¿Eres cliente de tevsys?» + ID panel/correo (29 abr 2026, copy)

**Archivo:** `src/pages/auditoria-ia/empezar.astro`.

---

## `/auditoria-ia/empezar` — franja identidad/ID antes de los tres pasos de material (opción A) (29 abr 2026, copy + UX)

**Archivo:** `src/pages/auditoria-ia/empezar.astro`.

---

## `/auditoria-ia/empezar` — checklist de cuatro a **tres pasos** (copy preciso) (29 abr 2026, copy)

**Archivo:** `src/pages/auditoria-ia/empezar.astro`.

---

## `/auditoria-ia` — bloque academias: banda + superficie (ritmo como En dos pasos; acento ámbar) (29 abr 2026, UX)

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: límite inversión pasa a cuarta viñeta «Te llevas» (29 abr 2026, copy)

- Micro *Qué mirar primero…* cierra en precisión/límites; **Te llevas** suma viñeta **No es orientación de inversión:** …

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: micro «Qué mirar primero…» orden material → coherencia → precisión (29 abr 2026, copy)

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## Home — `plans-section`: banda `#000` + bleed (sin cian; cian solo teaser auditoría) (29 abr 2026, UX)

**Archivo:** `src/pages/index.astro`.

---

## Home — `plans-section`: banda de lectura detrás de Essential / Advanced / Pro (29 abr 2026, UX)

- Fondo más profundo, padding, radio, borde cian suave e `inset` ligero; móvil con padding ajustado.

**Archivo:** `src/pages/index.astro`.

---

## `/auditoria-ia` — dictamen: título «Qué mirar primero en el informe» (29 abr 2026, copy)

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: micro «Qué revisar primero» (coherencia, reglas, ejecución) (29 abr 2026, copy)

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: «Te llevas» más escaneable + títulos scanlist cian suave (29 abr 2026, copy + UX)

- **Te llevas:** veredicto / prioridades cortas / mismas piezas para revisión propia.
- **Títulos** (*Qué pasó…*, *Contraste…*, *Qué revisar primero*): color `rgba(172, 224, 255)` — acento sin feria.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: micros scanlist + «Te llevas» (orden, material completo, prioridades) (29 abr 2026, copy)

- **Qué pasó en el periodo:** foco en orden de hechos y evidencia trazable.
- **Qué revisar primero:** *si el material enviado es completo* (sustituye *pack lo sostiene* en copy público).
- **Te llevas:** segunda viñeta = prioridades de revisión centradas en coherencia reglas–ejecución.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: solo marca TEVSYS en cian en el lead (29 abr 2026, copy + UX)

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: lead sin interrogantes + punto cian en micros (29 abr 2026, copy + UX)

- Lead enunciativo (*…cómo hemos actuado nosotros.*); micro de cada viñeta con **·** cian vía `::before`.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: lead sin «contra los hechos» + pregunta intermedia (29 abr 2026, copy)

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: aire título→lead + lead en tres tiempos (29 abr 2026, copy + UX)

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — dictamen: títulos Qué pasó / Contraste / Qué revisar + precisión si pack (29 abr 2026, copy)

- Viñetas alineadas a **`PROTOCOLO_AUDITORIA_IA_FASE1_MANUAL_ASISTIDA.md` §9.6** (resumen, evidencia, precisión/límites cuando aplique); micro más corta.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — «Tu dictamen de ejecución»: copy DeepSeek+Claude + escaneo + Te llevas (29 abr 2026, copy + UX)

- Sustituye **Qué recibes** por título **Tu dictamen de ejecución**, lead con **protocolo de trazabilidad**, lista **escaneable** (título + micro) y bloque **Te llevas** (micro-checklist).
- Quita **accionable** / viñetas antiguas / cierre “no con teoría”.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — pack: «En dos pasos» h2 + tarjeta «Resumen» y viñetas (29 abr 2026, copy + UX)

- Sustituye kicker largo por **`h2` «En dos pasos»** (tamaño jerárquico + subrayado bicolor como otras secciones).
- Dentro de **`audit-pack-compact-surface`:** **`h3` «Resumen»** + viñetas *Periodo a auditar. Fechas claras.* (sin “hero” en copy).

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — scroll suave otra vez + marco azul tramo 2 + tipografía explícita (29 abr 2026, UX)

- **`scroll-behavior: smooth`** de vuelta en la micro; **`prefers-reduced-motion`** sigue forzando salto seco.
- **`audit-page-act-two`:** borde redondeado completo, **marco** azul + halo exterior; **`#que-debes-enviar:target`** refuerza borde/sombra en **toda** la región (pack → FAQ); bruma **`::before`** un poco más presente.
- **`font-family: var(--theme-font-family-sans)`** en **`audit-page-band-motion__inner`** y en **`audit-page-act-two`** + antialiasing, para alinear render con el resto de la web.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — ancla #que-debes-enviar al inicio del tramo 2 + scroll seco (29 abr 2026, UX)

- **`id`** pasa al contenedor **`audit-page-act-two`** (inicio del bloque pack→FAQ); se quita el **`scroll-margin-top`** grande de la tarjeta interna (impedía “comerse” *Cómo funciona*).
- **`scroll-behavior: auto`** en la micro para salto **seco** al ancla; **`scroll-margin-top`** mínimo en el tramo 2.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — CTA hero secundario acortado (29 abr 2026, copy)

- Texto del botón: **«¿Qué deberás enviar?»** (sustituye *En el futuro: qué deberás enviar*; el kicker *próximamente* ya da contexto temporal).

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — acto II: región pack→FAQ, sheen lento + H2 sin repetir hero (29 abr 2026, UX + copy)

- Contenedor **`audit-page-act-two`**: desde **`#que-debes-enviar`** hasta **FAQ**; fondo distinto + **`::before`** gradiente con animación **~52s** alternate; **`prefers-reduced-motion`** la fija.
- **H2** del embed: **«Qué reunir (vista previa)»** (ya no repite «En el futuro…»). Kicker: *mismo tema que el botón del hero — aquí solo el resumen*.
- **HR** previo con un poco más de margen inferior.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — kicker envío: “En dos pasos” + puente al hero; más aire en viñetas (29 abr 2026, copy + UX)

- Sustituye **Siguiente · vista previa del envío** por frase que conecta con el CTA del hero (**En dos pasos** + tramo explicativo); tipografía **sin** all-caps de etiqueta.
- Más **margen** kicker → tarjeta; **padding-top** de la superficie y **interlineado / márgenes** entre H2 y viñetas en el bloque ancla.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — tramo envío: más aire, banda visual y motion al ancla (29 abr 2026, UX)

- Más **margen** tras *Cómo funciona*, **HR** `--pack` más separado, **`scroll-margin-top`** mayor en el ancla.
- Contenedor **`audit-pack-anchor-wrap`**: **banda** (fondo + sombra + línea superior), **padding vertical** generoso; el **pack** interno sin doble `margin` de sección.
- Al llegar por **`#que-debes-enviar`**: animación breve en kicker + superficie (**`prefers-reduced-motion`** la anula).

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — hero → ancla embed + scroll suave + capítulo (29 abr 2026, UX)

- CTA hero **“En el futuro…”** vuelve a **`#que-debes-enviar`** (misma página): **`scroll-behavior: smooth`** solo en esta micro (`html:has(.audit-page-anchor-flow)`), **scroll-margin** mayor, **HR** con clase `--pack` (más aire), kicker **Siguiente · vista previa del envío** y contenedor ancla **`audit-pack-anchor-wrap`** para que el resaltado **`:target`** aplique al embed.
- **Preparar y enviar pack** sigue yendo a **`/auditoria-ia/empezar`** (segundo clic).

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — bloque envío: ancho alineado + rail + CTA a la derecha (29 abr 2026, visual)

- **#que-debes-enviar:** superficie `audit-pack-compact-surface` (gradiente suave, borde fino + **acento izquierdo**); **52rem** como el resto; en `≥640px` texto a la izquierda y **Preparar y enviar pack** a la derecha; móvil CTA ancho útil.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — hero sin ancla brusca + aire antes del bloque envío (29 abr 2026, UX)

- CTA secundario **“En el futuro…”** → **`/auditoria-ia/empezar`** (ya no `#que-debes-enviar`).
- **HR** suave entre *Cómo funciona* y el bloque compacto; **`scroll-margin-top`** mayor en `#que-debes-enviar` por enlaces externos.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` + `/auditoria-ia/empezar` — copy mínimo (29 abr 2026, segunda pasada)

- **#que-debes-enviar:** 2 viñetas (**Archivos arrastrables** · **Periodo** a auditar) + micro “Canal de envío…”.
- **empezar:** “Cuatro cosas” + “Esto es lo mínimo.” + 4 líneas; CTA **Comprobar en tu equipo**; nota canal / **ID** / elegibilidad.

**Archivos:** `src/pages/auditoria-ia.astro`, `src/pages/auditoria-ia/empezar.astro`.

---

## `/auditoria-ia/empezar` — transición checklist antes del pack (29 abr 2026, UX)

- **Flujo en dos pasos:** desde `/auditoria-ia`, el CTA **Preparar y enviar pack** abre **`/auditoria-ia/empezar`** (cuatro piezas del pack en tarjetas, copy breve, sin zona de archivos). El CTA principal lleva a **`/auditoria-ia/pack`** (herramienta local existente).
- **`/auditoria-ia/pack`:** línea superior *← Resumen del pack (paso 1)* + indicación *Paso 2*.
- **Misma tanda (recorte):** títulos y líneas más cortas en **empezar** (`audit-step-*--lite`) para sensación “rápido”, no muro.

**Archivos:** `src/pages/auditoria-ia/empezar.astro`, `src/pages/auditoria-ia.astro`, `src/pages/auditoria-ia/pack.astro`, `src/config/settings.js` (comentario).

---

## SEO pestaña (`<title>`): sin «Pioneros»; alineado a mensaje actual (29 abr 2026)

- **`settings.js` → `title`:** de *Pioneros en disciplina…* a **disciplina verificada + precisión de cierre + gestión de riesgo · MT5** (misma línea argumental que home, sin superlativo difícil de sustentar).

**Archivo:** `src/config/settings.js`.

---

## Home — teaser «Auditoría con IA»: lead con precisión de cierre (29 abr 2026, copy)

- **Lead** (`index.astro`): alineación con el hero — `precisión` → **precisión de cierre** (mismo hilo: ejecución verificable, no “precisión” genérica).

**Archivo:** `src/pages/index.astro`.

---

## `/auditoria-ia/pack` — opción “Auditoría completa” + hint de foco (27 abr 2026, producto)

- **Select `audit-focus`:** nueva opción `completo` — *Auditoría completa (todos los pilares)*; texto de ayuda bajo el campo: foco = énfasis en el informe, no pack distinto; sin asesoramiento personal.
- **Doc:** `docs/PROTOCOLO_AUDITORIA_IA_FASE1_MANUAL_ASISTIDA.md` (§4, criterio foco vs triangulación).

**Archivo:** `src/pages/auditoria-ia/pack.astro` (repo `tevsys-landiing`).

---

## `/auditoria-ia` — sin mid-glow animado; halo hero más suave (26 abr 2026, UX)

- **Quitada** la capa `tevsys-home-mid-glow` en esta URL (las dos burbujas en movimiento pasaban por detrás del hero semitransparente y distraían). La **home** sigue igual (`index.astro` + `global.css`).
- **Hero:** halo radial estático **menos intenso**, más blur, elipse algo más contenida; **fondo** del bloque con una velatura oscura muy fina para que el texto no compita con lo que queda detrás.
- **Ajuste fino:** halo fijo un poco más visible al entrar; **viñetas del bloque «En el futuro: qué deberás enviar» en cian siempre** (`::marker`), no solo con ancla activa.
- **Copy de facilidad:** en «En el futuro», se refuerza que el envío será **simple** y la primera viñeta anticipa flujo tipo **arrastrar archivos y listo** (cuando se abra el canal).
- **Legibilidad 2ª mitad (replanteo):** `Qué recibes` se rehace en formato entregables (sin `Apto/Apto con observaciones/No apto`, sin frase redundante de logs y sin placeholders `X%`); `En el futuro` cierra con dos aclaraciones en formato guion; `Para academias y equipos` refuerza enfoque de uso en estructura/equipo y mantiene viñetas cian.
- **Jerarquía visual:** `Qué recibes` y `Para academias y equipos` incorporan subrayado corto bicolor en `h2` (misma familia visual que `Qué auditamos / Qué no auditamos`).
- **Pulido FAQ + cierre:** FAQ gana lead corto, acordeón con señal visual más clara (estado abierto/cerrado) y contraste cian suave; cierre inferior con más respiración y contenedor tenue. Ajuste de guion/espaciado en notas de `En el futuro` y FAQ alineada al nuevo enfoque (sin referencia a “Apto con observaciones”).
- **`/auditoria-ia/no-disponible`:** subrayado bajo el H1 `Servicio no disponible por ahora` para separar mejor el mensaje principal del bloque y del footer.

**Archivos:** `src/pages/auditoria-ia.astro`, `src/pages/auditoria-ia/no-disponible.astro`.

---

## `/auditoria-ia` — mid-glow home + copy en azul; ámbar solo subrayado (27 abr 2026, UI)

- **Movimiento:** misma capa `tevsys-home-mid-glow` que la home (`global.css`), dentro de `tevsys-home-band--cards` + wrapper con `z-index` para lectura por encima.
- **Color:** kicker y tarjetas otra vez en **familia cian/azul**; viñetas alineadas; **único** gradiente ámbar→azul en el **subrayado** bajo el H1 (sin mezcla en títulos/listas).

**Archivo:** `src/pages/auditoria-ia.astro`.

**Tanda siguiente (misma página):** subrayado bicolor **corto** bajo los H2 de «Qué auditamos / no» (`h2::after`); halo hero algo más suave; kicker menos eléctrico; listas con más contraste; **sin** segundo movimiento global.

---

## `/auditoria-ia` — hero + tarjetas: ámbar puntual y jerarquía (27 abr 2026, UI)

- Kicker partido: parte cian + **próximamente** en ámbar suave.
- Barra de acento **ámbar → cian** bajo el H1.
- Subtítulo con `max-width` + interlineado; línea “Sin promesas…” más secundaria (tamaño/opacidad).
- Tarjeta **Qué auditamos:** franja superior gradiente, título cálido, viñetas ámbar. **Qué no auditamos:** título frío, viñetas gris‑azulado.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — copy perímetro «Qué auditamos / no auditamos» (27 abr 2026, tanda copy)

- **Auditamos:** eventos **relevantes** de control; precisión en una línea (configurado · tevsys · MT5 mismo periodo); todo con **tevsys** en minúsculas.
- **No auditamos:** estrategias/señales en una viñeta; riesgo fuera de lo que registra tevsys; rentabilidad futura / predicciones (sustituye “promesas de rentabilidad futura”).

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — viñeta precisión en «Qué auditamos»; menos margen hero→dual (27 abr 2026)

- Cuarta viñeta: precisión de cierre (configuración, tevsys, informe MT5, mismo periodo).
- Ajuste de márgenes para acercar el bloque de las dos tarjetas al hero.

**Archivo:** `src/pages/auditoria-ia.astro`.

---

## `/auditoria-ia` — qué deberás enviar: 3 piezas; pack oculto por `settings` (27 abr 2026)

**Cambio:** se elimina la viñeta fija (broker, símbolo, etc.); se añade una **línea** de criterio futuro (contrastar con informe + licencia / protocolo). CTA **“Preparar y enviar pack”** pasa a **`settings.auditPackPreparationVisible`** (defecto `false`) — misma lógica que el interruptor de **checkout** en planes. Ruta `/auditoria-ia/pack` **no** se elimina; solo el enlace público en la micro.

**Archivos:** `src/config/settings.js`, `src/pages/auditoria-ia.astro`.

---

## Auditoría IA — servicio cerrado al público + página de cierre (26 abr 2026, tanda 2)

**Problema:** los CTAs “Solicitar auditoría” llevaban a **contacto** aunque el servicio aún no está abierto; faltaba un cierre claro y coherente con el **frenazo** documentado en TGP.

**Cambio:**
- Nueva ruta **`/auditoria-ia/no-disponible`**: mensaje breve (no disponible, gracias, próximamente) + enlaces a inicio y a `/auditoria-ia`.
- **`/auditoria-ia`:** kicker **próximamente**; “Solicitar auditoría” (hero y cierre) → `no-disponible`; secundario **“En el futuro: qué deberás enviar”** → ancla; bloque **#que-debes-enviar** con título y nota en futuro; cierre de copy alineado.
- **`/auditoria-ia/pack`:** CTA “Continuar por contacto” → **“Siguiente paso”** → `no-disponible` (sin query a contacto); mejora visual de **aviso**, **dropzone** (borde/foco/hover), **chips** y **checklist**; nota bajo CTA cuando el pack está listo.
- **Párrafo largo del hero del pack** (criterio cliente / local): **sin cambios** de copy.

**Archivos:** `src/pages/auditoria-ia/no-disponible.astro`, `src/pages/auditoria-ia.astro`, `src/pages/auditoria-ia/pack.astro`.

---

## `/auditoria-ia/pack` — criterio cliente, sin subida; validación local (27 abr 2026)

**Problema:** el recuadro de “arrastrar” parecía abrir envío a cualquiera. Hacía falta alinear con el producto: **tevsys en gráfico**, captura con el **mismo rigor** que en documentación de precisión, y **cribado** vía relación comercial; además dejar claro que **hoy no hay upload** a servidores tevsys (solo comprobación en el navegador).

**Cambio:** copy del hero, aviso explícito, textos del dropzone y enlace a contacto/demo para quien aún no es cliente.

**Archivo:** `src/pages/auditoria-ia/pack.astro`.

---

## Contacto — solicitud auditoría: formulario aligerado (26 abr 2026, 2.ª pasada)

**Problema:** el flujo `flow=auditoria-ia` seguía pidiendo **capital** y **experiencia** (pensado para demo/venta) y el título llevaba **(Fase 1)**, generando fricción y la sensación de “proceso en varias fases”.

**Cambio:**
- Título: **Solicitar auditoría** (sin paréntesis). Copy del hero más corto; viñetas sin tecnicismos de fase.
- Formulario: con `flow=auditoria-ia` se **ocultan** capital y experiencia; se envían valores comodín en campos ocultos para Formspree; se **oculta** la caja informativa del plan; botón **Enviar**. Validación JS acorde.
- **Gracias:** `contact-thank-you` con mensaje específico para `flow=auditoria-ia` y query en redirect.

**Archivos:** `src/pages/company/contact.astro`, `src/components/forms/ContactForm.astro`, `src/pages/company/contact-thank-you.astro`.

---

## Contacto — `flow=auditoria-ia` ya no muestra "Completa tu acceso" (26 abr 2026)

**Problema:** el enlace `Solicitar auditoría` desde `/auditoria-ia` iba a `/company/contact?flow=auditoria-ia`, pero el script de la página de contacto **no tenía rama** para ese `flow` y dejaba el título/intro por defecto de demo/acceso.

**Cambio:** rama dedicada con título **«Solicitar auditoría (Fase 1)»**, intro y viñetas alineadas a evidencia/pack. **Formulario:** `flow=auditoria-ia` pasa a permitir envío sin plan en URL (mismo criterio que `acceso`/`demo` vía `allowNoPlan` + `ContactForm`).

**Archivos:** `src/pages/company/contact.astro`, `src/components/forms/ContactForm.astro`.

---

## Auditoría IA — pack: badges checklist más discretos (26 abr 2026)

**Objetivo:** bajar un punto el tamaño y el peso visual de las etiquetas `Pendiente`, `OK` y `Dato manual` en el checklist de `/auditoria-ia/pack` para que no compitan con el título y el cuerpo de la lista.

**Cambio (`src/pages/auditoria-ia/pack.astro`):**
- `font-size` de badges ~0.62rem → **0.55rem**, `font-weight` 700 → **600**, padding horizontal algo más ajustado.
- `Dato manual`: `text-transform: none` (etiqueta mixta legible a tamaño pequeño) y mismo tamaño/peso alineado al resto.

---

## Auditoría IA — pack interactivo + criterios de evidencia (25 abr 2026, cierre de tanda)

**Objetivo:** consolidar la micro `/auditoria-ia/pack` como flujo usable de preparación de evidencias, sin backend de subida todavía, y dejar base coherente para validación interna.

**Cambios funcionales y UI (`src/pages/auditoria-ia/pack.astro`):**

- Zona drag&drop + selector de archivos (logs, captura, html, zip) con lista de archivos detectados.
- Chips de formatos permitidos y microcopy de confianza:
  - `Tus archivos solo se usarán para esta auditoría.`
- Checklist con estados visuales:
  - `Pendiente` (azul),
  - `OK` (tick verde),
  - `Dato manual` para campos declarativos.
- Formulario mínimo de contraste integrado en la misma pantalla:
  - `Periodo desde`,
  - `Periodo hasta`,
  - `Cuenta auditada`,
  - `Objetivo principal`.
- Regla de habilitación CTA:
  - se activa `Continuar por contacto` solo cuando el pack técnico está completo **y** el formulario mínimo está completo.
- Paso a contacto con query de contexto (`flow=auditoria-ia&step=pack` + campos mínimos).
- Pulidos de jerarquía/respiración:
  - compactación de densidad,
  - separación del bloque de contraste,
  - mejora de título del checklist para evitar pérdida de jerarquía.

**Correcciones técnicas realizadas durante la tanda:**

- Fix build Vercel por variable duplicada en script cliente (`manualOk`).
- Fix de render "sin estilos" en producción:
  - estilos de la página definidos con `style is:global` para evitar pérdida de CSS local en esta micro.

**Resultado buscado:** flujo claro y presentable para capturar packs en Fase 1 (manual-asistida), con validación visual suficiente y base lista para endurecer reglas de coherencia.

---

## Auditoría IA — halo trasero azul + micro sin motion ámbar (25 abr 2026)

**Objetivo:** reducir ruido visual en `/auditoria-ia` y reforzar una sola capa protagonista (halo azul permanente) sin afectar el resto de micros.

**Cambios (`src/pages/auditoria-ia.astro`):**

- Se añade un selector de página (`.audit-page-motion-off`) para aplicar comportamiento exclusivo de esta ruta.
- El halo del hero deja de sentirse “interno”:
  - se elimina el efecto pequeño dentro del rectángulo,
  - se crea halo **grande, permanente y azul** detrás del bloque principal (`.audit-hero::before`), con blur amplio y radial elíptico.
- Se desactiva el barrido/motion ámbar global **solo en esta micro**:
  - `body::before` queda sin animación y sin fondo cuando la ruta contiene `.audit-page-motion-off`.

**Resultado buscado:** estética más limpia y coherente para auditoría (menos mezcla de capas), manteniendo el motion activo en home y en el resto de micropáginas.

---

## Auditoría IA — opción A (halo centrado) + nueva micro de pack (25 abr 2026)

**Objetivo:** cerrar la elección visual del hero en `auditoria-ia` y abrir un flujo práctico para preparar evidencia antes del contacto.

**Cambios:**

- `src/pages/auditoria-ia.astro`
  - Se fija la variante **A** del hero: halo azul **centrado** detrás del bloque principal.
  - CTA de `Qué debes enviar` actualizado a nueva ruta: `/auditoria-ia/pack`.

- `src/pages/auditoria-ia/pack.astro` (nueva)
  - Nueva micro para preparar pack de auditoría.
  - Zona drag&drop + selector de archivos.
  - Checklist visual mínimo:
    - logs,
    - captura panel,
    - informe HTML/MT5,
    - contexto operativo.
  - Detección básica en cliente por tipo de archivo y estado del pack.
  - CTA principal habilitado cuando hay pack técnico completo, y paso a contacto con `flow=auditoria-ia&step=pack`.

**Resultado buscado:** dar sensación de producto completo desde ya (flujo guiado), sin esperar al backend de subida final.

---

## Home — teaser “Auditoría con IA” entre cards y planes (25 abr 2026)

**Objetivo:** abrir una vía de valor para traders/academias/equipos sin encasillar el mensaje en “indisciplina” y sin romper el lenguaje visual de la home.

**Cambios (`src/pages/index.astro` + `src/styles/global.css`):**

- Nuevo bloque teaser entre cards y planes (`audit-teaser-section`) con CTA a contacto (`flow=auditoria-ia`).
- Copy inicial evolucionado a tono más polivalente:
  - Título: `¿Quieres auditar tu operativa con IA?`
  - Lead: `No auditamos tu estrategia: auditamos ejecución, cumplimiento de límites y evidencia real.`
  - Nota: orientado a traders, academias y equipos (decisiones con datos verificables).
- Integración visual con motion:
  - bloque más estrecho que cards para dejar “respirar” el fondo,
  - ajuste fino de superposición para que el barrido quede detrás del rectángulo completo (desde zona inferior del bloque hasta su parte alta),
  - respiración tipográfica recalibrada: más aire en el título y compactación del cuerpo explicativo.
- Diferenciación suave respecto al bloque superior:
  - misma familia visual de home, pero identidad propia (acento cian/azul) para señalizar “módulo distinto”.

**Resultado buscado:** que el bloque sea creíble, legible y coherente con marca; preparado para evolucionar a micropágina de auditoría (Fase 1 manual-asistida) sin prometer automatización total.

---

## Nueva página — `auditoria-ia` (25 abr 2026)

**Objetivo:** abrir un flujo completo y honesto para auditoría manual-asistida con IA, alineado a Fase 1 (sin prometer automatización total ni señales).

**Cambios (`src/pages/auditoria-ia.astro`):**

- Hero con posicionamiento:
  - `¿Quieres auditar tu operativa con IA?`
  - subtítulo acordado: `No venimos a juzgar tu estrategia: venimos a verificar tu ejecución con datos.`
  - cierre corto: `Sin promesas, sin relato. Con datos trazables.`
- Secciones principales:
  - `Qué auditamos / Qué no auditamos`
  - `Cómo funciona` (4 pasos)
  - `Qué debes enviar` (pack mínimo + aviso no punitivo)
  - `Qué recibes` (estados + bloque de precisión/datos)
  - `Para academias y equipos`
  - `FAQ` (incluye requisito de usar tevsys para emitir dictamen bajo este estándar)
  - CTA final + microtexto legal de Fase 1.
- Estilo visual:
  - base oscura, acento azul/cian para el módulo de auditoría,
  - ámbar de marca en puntos de apoyo,
  - coherencia tipográfica con home (sin crear “otro producto visual”).

**Integración home:**
- CTA del teaser de home (`index.astro`) actualizado a `/auditoria-ia` (`Ver auditoría IA`) como puerta de entrada al flujo.

---

## Home — pulido bloque previo a cards (22 abr 2026)

**Objetivo:** mejorar lectura en diagonal y transición hacia las 4 cards sin tocar la propuesta de valor.

**Cambio (`src/pages/index.astro`):**

- Reagrupación del texto introductorio en un bloque visual suave (`.feature-card__intro-stack`).
- Borde del bloque ajustado a ámbar sutil (sin halo) para reforzar marca sin romper estética.
- Bloque convertido a checklist visual no clickable (estático) y renombrado interno a `.feature-card__checklist-static`.
- Ajuste fino de opacidades/márgenes en hook e intros para dar más jerarquía.
- Microajuste de espaciado del claim `Ellos deslizan. En tevsys cerramos.` para que actúe como remate antes del grid.
- Ajuste responsive del bloque de intro en móvil.

**Resultado buscado:** sección más escaneable, menos “texto suelto” y entrada más limpia al bloque de cards.

---

## Home planes — estado visible por card (22 abr 2026)

**Objetivo:** dejar claro en 1 vistazo qué plan está disponible ya y cuáles están en espera.

**Cambio (`src/pages/index.astro`):**

- Etiqueta en card `Essential`: `Demo activa`.
- Etiquetas en `Advanced` y `Pro`: `Lista de espera`.
- Estilo visual de estado:
  - `Demo activa` en ámbar suave.
  - `Lista de espera` en gris neutro.

**Resultado buscado:** más claridad comercial sin añadir botones extra ni cambiar el flujo actual.

---

## Home cards — microajuste de escaneo en card 1 (22 abr 2026)

**Objetivo:** mejorar lectura rápida de la card `0,06% error medio` sin alterar su fondo técnico.

**Cambio (`src/pages/index.astro`):**

- Línea técnica simplificada:
  - de lista separada por puntos a frase compacta con `Ajuste a tiempo real: ...`.
- Cierre de prueba más limpio:
  - `71 operativas documentadas en 5 entornos de ejecución.`

**Resultado buscado:** misma información, menor fricción de lectura en 2-3 segundos.

---

## Home cards — microajuste de escaneo en card 2 (22 abr 2026)

**Objetivo:** hacer más directa la lectura de mecanismo en `HyperClose`.

**Cambio (`src/pages/index.astro`):**

- Frase principal de mecanismo simplificada:
  - de `Intentas operar bloqueado...`
  - a `Si operas bloqueado, HyperClose cierra en milisegundos.`

**Resultado buscado:** menor fricción verbal y lectura más instantánea sin cambiar el contenido funcional.

---

## Home cards — microajuste de escaneo en card 3 (22 abr 2026)

**Objetivo:** mejorar claridad de lectura en la card `SML` manteniendo su propuesta actual.

**Cambio (`src/pages/index.astro`):**

- Frase de mecanismo reordenada para lectura natural:
  - `Lo activas cuando quieras: amplías margen entre 5 % y 25 % (mín. 75 % protegido).`
- Frase de cierre simplificada:
  - `Conserva lo ganado y convive con tus límites y días OFF.`

**Resultado buscado:** mismo contenido funcional, mejor escaneo en pocos segundos.

---

## Home cards — microajuste de escaneo en card 4 (22 abr 2026)

**Objetivo:** mantener fuerza de prueba en `Evidencia verificable` con menor carga de lectura.

**Cambio (`src/pages/index.astro`):**

- Línea de medios simplificada:
  - `Vídeo del cierre, informe MT5 e historial de transacciones.`
- Cierre compacto:
  - `Todo verificable. Todo descargable.`
- Whisper final más directo:
  - `Para ti o para quien te audite.`

**Resultado buscado:** misma contundencia de prueba con mejor ritmo visual.

---

## Home Hero — medicion de clics sin Vercel Pro (22 abr 2026)

**Objetivo:** medir clics del CTA secundario con plan free de Vercel (sin Custom Events).

**Cambios (`src/components/sections/heros/HomeHeroSection.astro`, `src/pages/go/evidencia-5min.astro`):**

- Se retira el tracking por evento personalizado (requiere plan Pro).
- Nuevo enlace del CTA secundario: `/go/evidencia-5min`.
- Nueva ruta puente medible: `/go/evidencia-5min` (pagina intermedia que redirige a `/features/hyperclose#hyperclose-demo`).
- La ruta puente se sirve en HTML minimo oscuro (sin header/footer) para evitar flash visual, inyecta Analytics y redirige con delay corto para registrar pageview.

**Uso esperado:** medir en Analytics las visitas a `/go/evidencia-5min` como proxy directo de clics en el boton del hero.

**Ajuste UX (22 abr 2026):**
- Desde el CTA del hero, la ruta puente redirige a `/features/hyperclose?src=hero#hyperclose-demo`.
- En `hyperclose.astro`, si `src=hero`, se evita autoplay del vídeo principal para priorizar lectura inicial.

---

## Home Hero — redistribución final de mensaje (22 abr 2026)

**Objetivo:** reducir carga visual y clarificar el mensaje funcional para perfil novato y perfil técnico.

**Cambio (`src/components/sections/heros/HomeHeroSection.astro`):**

- Microfrase reducida a una línea directa:
  - `No damos señales.`
- Línea funcional actualizada:
  - `Automatizamos, vigilamos y actuamos para que tus reglas se cumplan siempre en tu cuenta MT5.`
- Sin subrayado adicional en estas líneas (solo jerarquía tipográfica).

**Resultado buscado:** más claridad en 2 golpes de lectura y mejor separación entre desmarque y propuesta funcional.

---

## Home Hero — CTA secundario de validación rápida (22 abr 2026)

**Objetivo:** añadir un atajo de evaluación para perfiles escépticos (academias/traders) sin romper la estética ni desplazar el CTA principal de demo.

**Cambio (`src/components/sections/heros/HomeHeroSection.astro`):**

- Nuevo bloque `.hero-cta-row` con dos botones en la misma zona:
  - primario: `Descargar demo →` (se mantiene),
  - secundario: `Ver evidencia en 5 minutos`.
- El nuevo botón enlaza a `/go/evidencia-5min` para medir clic y redirigir a vídeo + pruebas.
- Estilo secundario tipo outline (`.hero-audit-btn`) y ajustes responsive para móvil.

**Resultado buscado:** facilitar “validación en pocos minutos” sin convertir la home en una página solo para academias.

---

## Home Hero — microfrase de desmarque anti-señales (22 abr 2026)

**Objetivo:** reforzar en los primeros 3 segundos que TEVSYS no pertenece a la categoría de “EA de señales”, sin desplazar el protagonismo del H1 principal.

**Cambio (`src/components/sections/heros/HomeHeroSection.astro`):**

- Nueva línea entre H1 y `.hero-context-line`: `No damos señales. Hacemos que tus reglas se cumplan.`
- Jerarquía tipográfica intermedia con clase `.hero-microline` (tamaño/peso por debajo del H1 y por encima del contexto).
- Énfasis selectivo en `No damos señales.` para filtrar categoría de forma instantánea.

**Resultado buscado:** mantener el claim de marca (`Tú pones los límites...`) y añadir una lectura inequívoca de producto (disciplina operativa, no promesa de señales).

---

## Motion home — barrido inicial KITT “fall” más calmado (21 abr 2026)

**Problema:** al cargar `/` en tema oscuro, el primer barrido vertical del haz en `.tevsys-home-kitt-rect--fall` se percibía **demasiado rápido** (mucho recorrido en poco tiempo al inicio).

**Causa técnica:** `tevsys-home-fall-welcome-pos` animaba `background-position` Y de **248% → -206%** en **12s** con **`ease-out`**, que concentra velocidad al **comienzo** del intervalo.

**Cambio (`src/styles/global.css`):**

- `--tevsys-home-fall-welcome-dur`: **12s → 18s** (misma distancia, más tiempo).
- `tevsys-home-fall-welcome-pos` en `::before` / `::after`: **`ease-out` → `ease-in-out`** (arranque menos agresivo).
- Fallbacks de `var(--tevsys-home-fall-phase2-delay, …)` actualizados a **20.1s** (18 + 2.1 respiro) donde aplica; el delay real sigue siendo `calc(welcome-dur + breath)` en `body:has(.tevsys-home-band--cards)`.

**Doc:** `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` (tabla / nota fall bienvenida).

### Motion home — móvil: escáner header + franja ámbar menos “a trozos” (21 abr 2026)

**Problema:** en `max-width: 768px`, el escáner del header y el barrido ámbar/gris de la franja inferior (planes) se percibían **poco fluidos** (“trompicones”).

**Cambios (`src/styles/global.css`, solo móvil + `prefers-reduced-motion: no-preference`):**

- **Header:** `tevsys-header-scanner-sweep-mobile` con **8 paradas** en X + **`linear`** (56s → **42s** tras feedback: más vida sin volver a trompicones); haz **más ancho** (`background-size` ~278%) y algo **más luminoso** (opacidad/gradiente). `will-change: background-position` en el escáner.
- **Franja inferior (`::before` / `::after`):** nuevo `tevsys-home-lower-strip-kitt-pos-mobile` (barrido vertical en pasos, sin salto -40%→102% en un tramo); **36s** `linear` `alternate` + mezclas gris/ámbar **18s** `linear` con **keyframes más graduales** en opacidad.
- **Hero KITT rise:** niebla y franjas **26s** (antes 18,7s) para bajar velocidad perceptual del barrido en pantalla pequeña; **opacidad rise** en móvil **~0,44** (menos “rectángulo fantasma” junto a la mano).

**Hero mano (móvil, `HomeHeroSection.astro`):** más **padding** en `.hero-image__wrapper`, **radio** alineado al img, **scale** img **1,06 → 1,04**, viñeta `::after` algo más suave — el borde blanco envuelve mejor la foto.

**Ajuste lateral (móvil):** padding **horizontal mayor** en el marco ovalado (`clamp(2rem, 9vw, 2.85rem)`), img un poco más contenida (`86vw` / **scale 1,03**), `overflow-x: visible` en **`.hero-section__section`** y en **`.tevsys-home-hero-stack`** (`global.css`) para que **no se recorten** los bordes del anillo a izquierda y derecha.

**Parpadeo mano (móvil):** sin animación de **box-shadow** en `.hero-image__wrapper` (sombra fija); KITT **rise** sin **`tevsys-hero-kitt-tone-*`** (solo barrido `kitt-only` + opacidad fija); **`translate3d` + `backface-visibility: hidden`** en la imagen para capa estable.

**Doc:** `MOTION_HOME_TEVSYS_HANDOFF_IA.md` § móvil; `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` (fila `global.css`).

---

## Micropágina Precisión + Hero Home — ajuste visual fino (20 abr 2026)

**Contexto:** Iteración guiada por feedback en vivo (capturas). Objetivo: reforzar elegancia y coherencia visual sin oscurecer en exceso ni perder jerarquía.

### 1) Precisión (`/features/precision`)

- **Bloque de logs unificado** con el lenguaje de demos: `#precision-logs` pasó a `feature-demo` (sin caja gris tipo panel aislado).
- **Primer vídeo (Demo rápida 100k):** marco y cromado movidos a **gris elegante** (neutral), evitando protagonismo ámbar en el embed.
- **Lavado del bloque hero de Precisión:** neutralizado para que no tiña el primer vídeo en ámbar.
- **Frase inicial “Un gráfico para tevsys…”:** ajuste de alineación del punto y separación para lectura estable.

### 2) Home — card 1 (Precisión)

- **Copy corregido a una sola línea** por criterio de negocio:
  - `Ajuste a tiempo real · Volatilidad · spread · slippage · comisiones`
- Línea de prueba separada:
  - `71 operativas documentadas. Validado en 5 entornos de ejecución.`

### 3) Hero Home — mano robótica (iteración por capturas)

- Se descartó el enfoque de “hacer solo más grande el contenedor”.
- Se aplicó y refinó el enfoque correcto: **dar más protagonismo a la foto real**.
- Ajustes cerrados:
  - eliminación del zoom variable (foto estable, sin efecto pegatina por hover),
  - rebalanceo entre foto y rectángulo ovalado exterior,
  - suavizado de contraste/viñeta/motion para integrar mejor con el halo.
- Resultado buscado y validado en iteración: **foto con mayor presencia + marco exterior claramente envolvente**.

### 4) Tokens y coherencia visual en oscuro

- Tema oscuro actualizado hacia tonos carbón/azulados más elegantes.
- Añadidos tokens de superficie/borde/sombra y de cromado para embeds (`--theme-embed-chrome`), aplicados donde corresponde.

### 5) Estandarización para próximas micropáginas

- Se fija patrón replicable:
  - bloque inicial frase + demo con respiración y embed gris elegante,
  - sección “Qué puedes comprobar” con jerarquía escaneable y halo ámbar suave,
  - acento de marca controlado (no invasivo) para sostener imagen premium.
- Documentación de referencia para réplica: `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md` §7.

### 6) HyperClose — fase 1 y fase 2 (20 abr 2026)

- **Fase 1 (alineación con Precisión):**
  - bloque inicial (2:23) con respiración de frase previa y embed en gris elegante,
  - lista “Qué puedes comprobar” con jerarquía escaneable + halo ámbar suave,
  - texto “Vídeo editado” rebajado para no competir con el vídeo.
- **Fase 2 (zona protocolaria en gris):**
  - se conserva la agrupación de `Semáforo` y `Día OFF`, pero con acabado menos “panel pesado”,
  - mejor jerarquía (títulos/subtítulos/espaciado) y embeds compactos con cromado neutral.
- **Navegación por anclas:**
  - links de “Qué puedes comprobar” apuntan al objetivo visual correcto del embed,
  - resaltado puntual ámbar reforzado (flash breve + halo) para marcar claramente el destino,
  - decisión explícita: **sin autoplay** (prioridad a lectura y control del usuario).

### 7) SML — orden narrativo y lenguaje visual (20 abr 2026)

- Se aplica el mismo patrón visual de “Qué puedes comprobar” aunque no haya anclas clicables:
  - filas con punto/barra + halo suave + mejor escaneo.
- “Así se ve hoy en el panel” recibe título con dot (misma familia visual que el resto).
- Reubicación del hook “Un gráfico para tevsys…”:
  - **sale** de la zona “en medio de la nada”,
  - **entra** entre el cierre del hero (`No está en Essential...`) y el inicio del bloque de panel.
- **Tono comercial (§16, misma fecha):** copy hero/panel/checklist/CTA/SEO alineada a verificación sin relajar el mensaje de validación — detalle en **§16**.

### 8) Home Hero — mano robótica (microajustes por capturas)

- Ajustes incrementales de tamaño/encaje para aumentar presencia de la imagen real.
- Correcciones de integración:
  - eliminación de zoom variable,
  - reequilibrio entre rectángulo interior y marco ovalado exterior,
  - ajuste final de altura del marco exterior (borde blanco) para evitar solape.
- Resultado final: mayor protagonismo de mano robótica sin romper la jerarquía visual del hero.

### 9) Evidencia — alineación completa con patrón de micros (20 abr 2026)

- Bloque inicial de demo ajustado al mismo estándar de `precision`/`hyperclose`:
  - frase “Un gráfico para tevsys…” con respiración en dos líneas,
  - embed principal con cromado gris elegante (neutral),
  - neutralización del lavado ámbar dominante.
- Sección “Qué puedes comprobar” actualizada al patrón visual común:
  - filas escaneables (barra/punto),
  - halo lateral ámbar suave,
  - subrayado/hovers de enlace coherentes.
- Decisión de UX mantenida: **sin autoplay** al navegar por anclas (lectura primero, play opcional).
- Copy de credibilidad reforzado:
  - hero de Evidencia cambia a: `Doble trazabilidad real: tevsys registra la lógica interna y MT5 certifica la ejecución oficial.`

### 10) Enlaces cruzados Evidencia ↔ Precisión (logs)

- Fix de navegación desde Evidencia:
  - el enlace “Ver precisión de cierre y trazabilidad en detalle” ahora apunta al objetivo visual exacto `#precision-logs-container` (no al bloque general).
- En Precisión se añadió:
  - `scroll-margin-top` para `#precision-logs-container`,
  - estado `:target` puntual con resaltado ámbar en el propio contenedor de vídeo.

### 11) Home — card HyperClose (espaciado robusto de copy)

- Frase: `La diferencia entre querer parar y no poder seguir.`
- Tras varios intentos visuales, se fija solución robusta ante minificado/deploy:
  - espacio no separable inyectado por CSS (`::before` con `\00a0`) en el acento de `no poder seguir`.

### 12) Home — cierre visual hero/cards + copy de contexto (20 abr 2026)

- **Assets cards home actualizados (retocados y centrados):**
  - `card-1-input.png`
  - `card-2-hyperclose.png`
  - `card-3-sml.png`
  - `card-4-evidencia.png`
- **Hero mano robótica:** reemplazo final de imagen (`public/mano robotica central web.png`) con versión más visible (Canva), validada visualmente como solución definitiva.
- **Línea de contexto hero (claridad comercial):**
  - `Control de riesgo y límites para trading real en tu cuenta MT5 — automatizado y registrado.`
- **Estado final de fase visual:** baseline aprobado para seguir con optimización de tono comercial en micropáginas sin reabrir cambios estéticos grandes.

### 13) Iteración de tono comercial (Precisión + HyperClose) — 20 abr 2026

- **Objetivo:** elevar credibilidad comercial sin reabrir diseño (evolución narrativa, no cambio estético).
- **Precisión (`/features/precision`):**
  - lead principal actualizado a claim compacto y verificable:
    - `Cierre real en MT5: límite configurado, resultado verificable, desviación documentada.`
  - bloque “Qué puedes comprobar” reescrito en tono técnico-comercial (más orientado a validación, menos descriptivo).
- **HyperClose (`/features/hyperclose`):**
  - lead principal actualizado:
    - `Cierre inmediato en MT5: intento de operar en bloqueo, ejecución automática y trazabilidad verificable.`
  - subhook demo 2:23 reforzado:
    - caso real + desviación documentada + protocolo 3 niveles.
  - “Qué puedes comprobar” reescrito en lenguaje de prueba operativa.
  - CTA final actualizado a lenguaje claro:
    - `Te mostramos el protocolo completo en tu contexto y te enseñamos las pruebas para comprobarlo.`
- **Home (hero):**
  - línea de contexto consolidada para público mixto (novato/intermedio/avanzado):
    - `Control de riesgo y límites para trading real en tu cuenta MT5 — automatizado y registrado.`

### 14) Ajuste final de enlace de logs (Evidencia → Precisión) — 20 abr 2026

- Se corrige destino para que la navegación sea inequívoca hacia el bloque **“Sin humo: todo queda registrado”**:
  - enlace desde Evidencia apunta a `#precision-logs` (sección objetivo),
  - en Precisión se refuerza el foco visual del bloque y del embed de logs al llegar por ancla.

### 15) Evidencia — iteración de tono comercial (20 abr 2026)

- **Objetivo:** mismo criterio que Precisión/HyperClose — copy orientada a **comprobación**, no a promesa.
- **Lead:** acento de marca en `Doble trazabilidad` (lectura escaneable alineada con otras micros).
- **Hook demo principal:** caso 100k + contexto + **desviación documentada** (0,0072%) en una sola frase verificable.
- **“Qué puedes comprobar”:** bullets reescritos (demo, informe MT5 independiente, caso extremo Essential, export MT5, guía logs + puente a Precisión, auditoría en dos capas).
- **Bloque logs:** sustituido el placeholder *“Otro vídeo que te interesa”* por hook operativo (localizar/leer registros MT5); `playsinline` en el vídeo de logs.
- **CTA final:** título y cuerpo alineados al patrón “validar en tu operativa” + pasos de comprobación.
- **SEO `description`:** alineada al mensaje de doble fuente (MT5 + tevsys).
- **Documentación correlativa (20 abr 2026):** en este repo — `CONTENIDO_WEB_TEVSYS_LANDING.md` (estado Evidencia), `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` (tabla docs), `HOME_HERO_CARDS_ITERACION_ABR2026.md` §7.6. En workspace **TGP** (correlato EA V11): `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` (cabecera correlato web + nueva entrada CHANGELOG V11), `docs/RESUMEN_COMPARATIVO_SKELETON_V2_V3_V4.md` (nota contexto web).

### 16) SML — iteración de tono comercial (20 abr 2026)

- **Objetivo:** alinear `/features/sml` al mismo registro que el resto de micros: **control verificable**, bonus **opcional**, sin prometer producto cerrado (sigue la nota de validación).
- **Intro + lead:** intro más explícita sobre “no es más riesgo por defecto”; lead con acento **«Opcional y bajo tu control»** + convivencia con límites y bonus desde ganancia de ayer.
- **Panel (captura):** copy reforzado en **número comprobable antes de 1‑CLICK** y claridad multi‑gráfico.
- **«Qué podrás comprobar»:** tres bullets en lenguaje de **configuración / decisión / convivencia medible** (75% protegido, DISPONIBLE vs 1‑CLICK, límites + OFF).
- **Estado validación:** mismo compromiso “solo lo que el build demuestre”, redacción más directa.
- **CTA:** cuerpo alineado a **contrastar escenarios con límites reales** (Advanced/Pro, lista de espera).
- **SEO `description`:** bonus opcional + clic + validación Advanced/Pro.

**Docs:** `CONTENIDO_WEB_TEVSYS_LANDING.md` (estado SML); `HOME_HERO_CARDS_ITERACION_ABR2026.md` §7.6; `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`; workspace TGP `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` (entrada CHANGELOG V11 SML).

**Archivos principales tocados en esta tanda:**
- `src/pages/features/precision.astro`
- `src/pages/index.astro`
- `src/components/sections/heros/HomeHeroSection.astro`
- `src/pages/configuracion.astro`
- `src/styles/theme.css`
- (coherencia de bloques en features) `src/pages/features/evidencia.astro` (incl. §15 tono comercial), `src/pages/features/hyperclose.astro`, `src/pages/features/sml.astro` (incl. §16 tono comercial), `src/pages/instalacion.astro`, `src/pages/configuracion.astro`

---

## Home — card 1 (Precisión): engranaje motor (19 abr 2026)

**Motivo:** Sustituir la ilustración anterior (alcancía / “cerdito”) por **engranajes + esfera ámbar**, metáfora de **motor / ajuste en tiempo real**. Alineado con el producto: en el EA, icono de **engranaje** en modo configuración fin de semana; **candado teal** al pasar a operativa protegida.

| Área | Detalle |
|------|--------|
| **Asset** | `public/assets/images/home/cards/card-1-input.png` — Canva / export usuario. Origen local típico: `Downloads/card-1-input.png`. |
| **Web** | `src/pages/index.astro` — misma ruta; **cache-bust `?v=8`** en la imagen de la card 1. |
| **Copy (misma fecha)** | Ámbar **Ajuste a tiempo real** (mensaje motor); línea de factores `Volatilidad • spread • …` sin repetir el claim; **71 operativas documentadas** como prueba, sin acento. |

**Doc:** `HOME_HERO_CARDS_ITERACION_ABR2026.md` §3–4, `CONTENIDO_WEB_TEVSYS_LANDING.md` (cards), `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`.

---

## Home — card 2 (HyperClose): candado cerrado (19 abr 2026)

**Motivo:** Sustituir ilustración anterior más genérica por **candado cerrado** (bloqueo coherente con HyperClose). Alineación con **hero** (candado) y con **panel / gráficos del EA**, donde el candado es señal reconocible.

| Área | Detalle |
|------|--------|
| **Asset** | `public/assets/images/home/cards/card-2-hyperclose.png` — export usuario (`Downloads/card-2-hyperclose.png`). |
| **Web** | `src/pages/index.astro` — **cache-bust `?v=9`**. |

**Doc:** `HOME_HERO_CARDS_ITERACION_ABR2026.md` §3, `CONTENIDO_WEB_TEVSYS_LANDING.md`, `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`.

---

## Home — card 3 (SML): arte reposicionado (19 abr 2026)

**Motivo:** Mejora de composición (gráfico + flecha). **Asset:** `public/assets/images/home/cards/card-3-sml.png` — `Downloads/card-3-sml.png`. **Web:** `index.astro` — **`?v=10`**.

---

## Hero — imagen mano + candado (velas neutras, 19 abr 2026)

**Motivo:** Nueva exportación Canva: gráfico de velas **sin rojo** (mejor armonía con paleta web). **Asset:** `public/mano robotica central web.png` — origen `Downloads/mano robotica central web.png`.

**Código:** `HomeHeroSection.astro` — imagen hero con **`?v=2`**; eliminado `<source>` WebP (no había `mano-robotica-central-web.webp` en repo; evita 404). `BaseHead.astro` — preload LCP y meta imagen por defecto al **mismo PNG**.

**Opcional:** `node scripts/optimize-images.js` regenera `mano-robotica-central-web.webp` y se puede volver a `<picture>` con `source` cuando el entorno tenga `sharp`.

---

## Web — coherencia tipográfica, hero, cards, CTAs y micropáginas (19 abr 2026)

**Objetivo:** Una sola lectura de producto (Inter + DM Sans solo en H1 home), negro unificado, CTAs demo idénticos, micropáginas alineadas y documentación al día con decisiones recientes.

| Área | Decisión / cambio | Archivos principales |
|------|---------------------|----------------------|
| **Stack hero home** | Fondo **`#000`** en tema oscuro (negro puro, coherente con zona imagen de cards); **capas KITT / motion del hero sin cambios de lógica**. | `src/styles/global.css` (`.tevsys-home-hero-stack`) |
| **H1 hero** | **DM Sans** solo en `.hero-title` (se probó Plus Jakarta Sans, descartada). Resto del hero y header siguen en **Inter**. Google Fonts: `DM+Sans` + `Inter` en `BaseHead.astro`. | `BaseHead.astro`, `HomeHeroSection.astro` |
| **Imagen mano** | Viñeta más suave; filtros para nitidez; marco exterior del recorte con **animación opcional** de brillo (reduced-motion sin animación); sin marcos CSS que imiten óvalos del PNG. | `HomeHeroSection.astro` |
| **Escáner header (home)** | **Intensidad restaurada** respecto a la iteración “menos discoteca”: más opacidad, gradientes y `animation-duration` algo más cortas (escritorio/móvil) para dar “vida” sin tocar filosofía del motion. | `global.css` |
| **Cards home** | Nuevos PNG en `public/.../card-*.png`; **cache-bust** en `index.astro` (card 1 **`?v=8`** engranaje; card 2 **`?v=9`** candado HyperClose; otras según iteración). Cintas retocadas en origen (tonos ámbar/gris/negro, sin arcoíris). **Lectura:** `feature-card__value-accent` — card Precisión **Ajuste a tiempo real** (71 operativas en cuerpo sin acento); HyperClose **no poder seguir**; SML **mín. 75 %**; evidencia `0,0072 %`. | `index.astro`, assets |
| **Tema oscuro — tipografía global** | **`[data-theme='dark']`:** `--theme-font-family-sans` y `--theme-font-family-serif` → **Inter** (antes Lato + Roboto Serif en cuerpo/títulos); micropáginas y `h1`–`h3` alineados con la home. | `theme.css` |
| **CTAs demo** | Reglas globales: mismo **Inter 1rem**, padding, radio, colores y hover para `hero-download-btn`, `feature-cta__button`, `precios-cta__button`, `plan-card__cta` (excepto secundario outline). | `global.css`; estilos locales duplicados retirados en varias páginas |
| **Contacto / demo** | Bloque izquierdo + columna formulario con **Inter** explícito (alineación con micro-páginas). | `contact.astro` |
| **`.feature-hero` (todas las guías/features)** | **Respiro unificado:** margen bajo `h1`, `padding-bottom` del hero, `margin-top` en `.feature-hero + section` — mismo criterio que Precisión, centralizado en **`global.css`**. | `global.css`; márgenes locales duplicados quitados en precision, evidencia, hyperclose, sml, instalacion, configuracion |
| **Precisión — orden de vídeos** | **Nasdaq** inmediatamente **después** de **alta volatilidad**; **cuenta pequeña** **antes** de **Sin humo / logs** (narrativa: multi‑activo tras volatilidad; cuenta pequeña enlazada al bloque de trazabilidad). Lista “Qué puedes comprobar” y `initDemoExpand` reordenados. | `precision.astro` |

**Doc actualizada en este bloque:** `HOME_HERO_CARDS_ITERACION_ABR2026.md`, `CONTENIDO_WEB_TEVSYS_LANDING.md`, `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`, `MOTION_HOME_TEVSYS_HANDOFF_IA.md` (nota escáner), `CARDS-NEXT-PHASE.md`.

**Pendiente conocido (no cerrado aquí):** revisión **móvil** (hero + escáner a trompicones) cuando el equipo priorice.

---

## Home cards — integración visual SaaS (18 abr 2026)

**Objetivo:** Menos discontinuidad entre hero y grid de valor: imágenes de card **menos “pegatinas”** frente al fondo; contenedor más **fundido** con la página.

**Código:** `src/pages/index.astro` — `.tevsys-card__image img`: `filter` compartido con hero (ver iteración **nitidez**); franja imagen `background-color: var(--theme-bg)`; texto `.tevsys-card__content` a **~6%** L; borde/sombra + halo; **aire** antes del grid. **Abr 2026 (nitidez):** `contrast` pasó de **&lt;1** a **~1.04** y brillo algo mayor — misma receta en `HomeHeroSection` (mano) y cards para evitar sensación “borrosa” / error de carga.

**Doc:** `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md` §3–4.

---

## Home — Inter en encabezados (hero + valor + planes) (18 abr 2026)

**Motivo:** En `typography.css`, `h1` / `h2` / `h3` usan **`--theme-font-family-serif`** (Roboto Serif). Los bloques ya tenían Inter en el contenedor, pero los **títulos** seguían en serif por esa regla global.

**Código:** `font-family: 'Inter', …` explícita en `.hero-title` (`HomeHeroSection.astro`); en `index.astro` en `.feature-section__title`, `.tevsys-card__title-row h3`, `.plans-section__title`, `.plan-card__content h3` (+ `font-weight: 700` en planes donde aplica).

**Doc:** `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md` §1 y §3.

---

## Hero KITT — tono 60% ámbar / 40% gris en tiempo (18 abr 2026)

**Objetivo:** Mismo movimiento (`tevsys-top-strip` / ciclo vertical fall); el haz KITT alterna **predominio** ámbar vs gris **scanner** (~`rgba(110,114,128)` familia) en **proporción temporal** (~60/40), con ciclos **31s** (rise) y **29.3s** (fall, tras delay de fase 2) — **sin** sincronía con 18.7s / 311s.

**Código:** `src/styles/global.css` — rise: niebla + `::before` ámbar + `::after` gris; fall: `tevsys-hero-kitt-tone-*` sustituye `tevsys-home-fall-mix-*` (keyframes antiguos eliminados). **Header:** sin cambios.

**Doc:** `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` (tabla B/C y §6).

---

## Hero — H1 escaneo en tres tiempos (16 abr 2026)

**Objetivo:** Titular más escaneable (usuario → marca → claim); **MT5** solo en `.hero-context-line`, no en el H1.

**Copy H1:** `Tú pones los límites. TEVSYS los blinda. Disciplina automatizada.` (`hero-title__brand` / `hero-title__underline`). Eliminado prefijo `MT5:` en titular y estilos huérfanos `.hero-title__mt5`.

**Archivos:** `src/components/sections/heros/HomeHeroSection.astro`, `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`, `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md`.

---

## Hero — ajuste claim subrayado (27 abr 2026)

**Objetivo:** incluir “precisión” en el primer impacto del H1 sin alargar el titular ni romper el ritmo de lectura.

**Cambio:** claim subrayado actualizado a `Disciplina y precisión automatizadas` en hero (`.hero-title__underline`).

**Archivos:** `src/components/sections/heros/HomeHeroSection.astro`, `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`, `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md`.

---

## Home, hero, header y cards — iteración diseño (abr 2026) — **confirmado**

**Objetivo:** Inter en superficie producto, menos choque motion header/hero, hero y cards integrados en negro mate, línea de contexto MT5, legibilidad en cards y assets Canva para card Precisión.

**Documentación completa:** `docs/HOME_HERO_CARDS_ITERACION_ABR2026.md`.

**Archivos tocados (principal):** `src/components/sections/heros/HomeHeroSection.astro`, `src/components/core/Header.astro`, `src/components/BrandOval.astro`, `src/styles/global.css`, `src/pages/index.astro`, `public/assets/images/home/cards/card-1-input.png`.

**Resumen:** H1 MT5 + `.hero-context-line`; halo y mano con filtros/viñeta/radio; stack hero con viñeta y sin doble borde; header Inter y escáner/niebla suavizados; cards Inter, gris solo en bloque texto, zona imagen `var(--theme-bg)`, tipografía cuerpo reforzada, card 1 con PNG directo hasta regenerar WebP; planes home mismo tono.

**Siguiente (fuera de este commit conceptual):** decidir cards finales; micropáginas **una por una**.

---

## Precisión — `demo-video--light` + bloque multi‑activo Nasdaq (17 abr 2026) — **binario publicado**

**Objetivo:** Incrustar vídeos con **MT5 en tema claro** (gráfico + panel blancos) sin un marco **#06080d** que parezca una mancha alrededor del plano en la micropágina oscura.

**Código:** `src/pages/features/precision.astro`
- Clase **`demo-video--light`**: fondo claro en gradiente suave, borde y sombra acordes con la línea dorada existente; pensada para **compact** (y extensible a hero si hiciera falta).
- Sección **`#precision-nasdaq`**: reproductor **`demo-video--compact demo-video--light`**; copy multi‑activo (NASDAQ), USD. **Orden actualizado (19 abr 2026):** Nasdaq **después** de alta volatilidad; cuenta pequeña **antes** de logs — ver entrada **“Web — coherencia…” (19 abr 2026)** arriba.
- **Vídeo publicado:** **`public/videos/features/precision-demo-nasdaq.mp4`** (~**1′47″** export Clipchamp; ~7,9 MB en el commit del fundador).

**Lista “Qué puedes comprobar”:** nuevo enlace ancla a `#precision-nasdaq`. **Script:** `initDemoExpand` incluye `precision-nasdaq-video` / `precision-nasdaq-container`. **`:target` / scroll-margin:** mismo tratamiento que otros bloques demo.

**Número operativas + duraciones en títulos (abr 2026):** copy visible y docs espejo alineados a **71** operativas documentadas (`index.astro`, `settings.js`, `evidencia.astro`, hook hero `precision.astro`; `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`, `SEO_ANALYTICS_TEVSYS.md`, `CARDS-NEXT-PHASE.md`). En `precision.astro`, los `h2` de las demos incluyen duración: **Demo en alta volatilidad — Cierre en ganancias (1 min 4 s)** y **Demo — Nasdaq · multi‑activo (tema claro) (1 min 47 s)**.

**Contenido del vídeo (referencia editorial / handoff):** operativa **documentada** cuenta **50.000 USD**, **NAS100**, **1 posición · 5 lotes**, límite ganancia **+1,00 %**, cierre **+506,05 USD** (**~+1,01 %** redondeo; **precisión exacta +1,0121 %** sobre base); en copy pública se habla de **margen de umbral +0,01 %** (evitar jerga “buffer” en overlay). **Transparencia de montaje:** grabación larga (**~57 min** hasta el cierre real) recortada a **momentos clave**; cartelas de **edición / salto de reloj**; bloque **WOW** + **“Ahora la evidencia”** solapado antes del fade de precisión exacta; **HTML / informe** con **mismas cifras**; broker **oculto** con rectángulos; cierre en **gris** + **`tevsys — Where precision meets the edge`**. **Música:** *Carry me home* — **Afro House Galaxy** (voz + afro house elegante); **YouTube / copyright:** revisar Content ID si aplica; en la micropágina Precisión hay **5** embeds y **solo 2** llevan música — patrón aceptado (instrucción vs prueba con pulso).

**Copy web Nasdaq (`#precision-nasdaq`):** hook con apertura *Otro activo. Misma regla.* + cifras operativa **4.71** (50.000 USD, +1,00 % umbral, +506,05 USD / +1,0121 % exacto, margen +0,01 p.p. vs +1,01 % panel); sin término *buffer* en copy pública.

---

## Motion / vida en home (tema oscuro) — abr 2026

**Objetivo:** Sensación de producto **activo** (instrumento encendido), **sin** estética cinematográfica ni parpadeo agresivo. Animaciones **desacopladas** entre sí (duraciones distintas, sin “reloj maestro”).

**Documentación handoff IA → IA:** `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` (tabla de duraciones, colores, keyframes, archivos).

**Código:**
- `src/styles/global.css` — niebla `body::before`, KITT hero (`.tevsys-home-kitt-rect--rise` / `--fall`), burbujas (`.tevsys-home-mid-glow`, `.tevsys-home-tail-bubble-solo`), franjas `.tevsys-home-lower-strip`, `.tevsys-home-founder-strip`, escáner header `#odysseyNavHeader.tevsys-header--home-scanner .tevsys-header-scanner`, `@keyframes` asociados, `prefers-reduced-motion`, ajustes móvil.
- `src/pages/index.astro` — contenedores `tevsys-home-*` (stack hero, bandas, fundador).
- `src/components/core/Header.astro` — en `/`: clase `tevsys-header--home-scanner` + capa `tevsys-header-scanner` (`aria-hidden`).

**Resumen numérico (dark, `prefers-reduced-motion: no-preference`):** niebla home `body::before` **23.3s**; rise **18.7s**; fall **311s** (`--tevsys-home-fall-cycle`); escáner header gris **`tevsys-header-scanner-sweep`** **29,5s** (base), **28s** (≥769px), **23,5s** (≤768px) — **19 abr 2026** sustituye la referencia antigua fija **33,8s**; bucle irregular, `ease-in-out` por tramo. **mid-glow** burbuja A **92s** + burbuja B (`::before`) **118s** (`linear`; ~70–75% tiempo en **márgenes** fuera de cards; ver iteración 15–16 abr abajo); lower strip **18s**; tail bubble **64s** `linear`; founder strip **16s**. Variables `--tevsys-home-intro-cycle` 300s vs fall 311s para no ir a la par.

**Iteración (equilibrio cromático):** el barrido vertical del hero (`.tevsys-home-kitt-rect--fall`) combina **gris + ámbar** en dos capas (`::before` / `::after`) con la misma trayectoria (~311s); el predominio cromático en tiempo usa **`tevsys-hero-kitt-tone-*`** (~60% ámbar / ~40% gris, ciclo **29.3s** tras delay de fase 2; antes ~8.3s `tevsys-home-fall-mix-*`, eliminados). **Rise:** niebla + dos pseudos KITT con `tevsys-hero-kitt-tone-*` (**31s**). La franja KITT de **planes** (`.tevsys-home-lower-strip`) sigue con mix ~10.3s (`tevsys-home-lower-kitt-mix-*`). Keyframes trayectoria: `tevsys-home-intro-kitt-cycle-pos`, `tevsys-home-intro-kitt-cycle-fade`, `tevsys-home-lower-strip-fog`, `tevsys-home-lower-strip-kitt-pos`.

**Proyecto TGP (solo docs):** `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` CHANGELOG **16 abr 2026** + **15–16 abr 2026 (ampliación motion)**; `TGP_V11_CHECKPOINT_PRODUCCION.md` § **CHECKPOINT 16 ABR 2026 — LANDING motion home**.

### Iteración 15–16 abr 2026 — Mid-glow, header, hero móvil (`global.css` únicamente; cards sin cambio de layout)

| Área | Detalle |
|------|--------|
| **Header escáner (home)** | **15–16 abr:** suavizado (menos competencia con hero). **19 abr 2026:** intensidad **restaurada** — `animation-duration` **29,5s** (regla base), **28s** (≥769px), **23,5s** (≤768px); gradientes/opacidad reforzados. Valores anteriores documentados (p. ej. **33,8s** / **27,4s**) quedan **obsoletos**. |
| **Hero móvil** | KITT **rise** opacidad **0.68** (más “instrumento” en titular + mano; cards siguen calmadas vía mid-glow/blur móvil). |
| **Mid-glow (detrás de las 4 cards)** | **Gris instrumento** (alineado header/panel), dos lecturas: **núcleo** + **aureola** más clara hacia el borde en la segunda elipse. **Capa host:** `tevsys-home-mid-bubbles-a` **92s** `linear` `infinite`; **segunda burbuja** en **`::before`:** `tevsys-home-mid-bubbles-b` **118s** `linear` + delay negativo — duraciones **no** múltiplos obvios → asincronía perceptible. *(Corrección doc 19 abr 2026: texto previo citaba por error 28s/33,7s; el código vigente es **92s / 118s**.)* **Escritorio:** rutas con **perímetro** del rectángulo 2×2: paradas para **SML** (inferior izquierda) y **Evidencia verificable** (inferior derecha); laterales y fila baja. **Móvil (≤768px):** mismas duraciones pero **`animation-name`** distinto: `tevsys-home-mid-bubbles-a-mobile` / `tevsys-home-mid-bubbles-b-mobile` — eje ~centro horizontal y barrido **vertical** por la **columna** de cards para que el movimiento se lea **detrás** de la pila (el perímetro 2×2 en columna única no bastaba). Blur/opacidad desktop y móvil afinados. **Refino posterior:** keyframes desktop y móvil con más pasos en **Y alto** (~88–98%) para cubrir el **cuerpo gris** bajo las imágenes de las cards; franja inferior (`.tevsys-home-lower-strip`) en móvil: gradientes gris/ámbar más legibles + `tevsys-home-lower-kitt-mix-*-mobile` (sin cambiar gama cromática). **Escritorio ≥769px:** mismo criterio de presencia con `tevsys-home-lower-kitt-mix-*-desktop` (medio paso por debajo del móvil), franja sobre planes + `tevsys-home-founder-strip` + `tevsys-home-tail-bubble-solo` / `tevsys-home-tail-bubble-solo-desktop`. **Mid-glow cards:** bucles **sin `alternate`** (0%=100%), barridos **horizontal/vertical/diagonal**, pasos en SML/Evidencia bajo; capa B con **`animation-delay`** negativo + keyframes más móviles para asincronía perceptible. |
| **Calma / premium** | Mid-glow **92s / 118s** `linear`: brillo **mayoría del tiempo en márgenes** (fuera del bloque de cards), vuelta al centro lenta; muchos pasos cortos evitan acelerones. Tail **64s** `linear`. `prefers-reduced-motion: reduce` apaga también animación del `::before`. **Post revisión:** segunda burbuja (`mid-glow::before`) — `opacity` ~**0,66** y radial más suave para que **no robe foco** a las cards (sigue leyéndose movimiento premium detrás). |

**Referencias:** `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` (tabla y notas actualizadas); `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` §0.1 / §0.2; `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` (nota cards + motion); `docs/ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` (tabla + nota motion móvil columna).

---

## API licencias y webhooks — abr 2026

**Repo:** `tevsys-landiing` (desplegar en Vercel).

| Área | Cambio |
|------|--------|
| **`api/validate.js`** | Normalización de clave (espacios/guiones); rate limit de **fallos** con Upstash (`lib/rateLimitValidate.js`): por IP (~1 min, default 10) y por clave (~1 h, default 3); respuesta **HTTP 429** + `reason: "rate_limited"` + `Retry-After`. Env opcional: `VALIDATE_RL_IP_MAX`, `VALIDATE_RL_KEY_MAX`. |
| **`lib/licenseKey.js`** | Nueva: `generarClaveEssentialUnica` — prefijo ESEMEN/ESEANU + 4 aleatorios; anti-colisión con `getLicense`. |
| **Webhooks** `webhook-lemon.js`, `webhook-stripe.js`, `webhook-paddle.js` | Generación de clave unificada con sufijo aleatorio (sustituye correlativo/determinista). |

**Documentación proyecto EA (workspace TGP):** `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V11.md`, `docs/PUNTO_4_VALIDACION_API_EA_PASO_A_PASO.md`, `docs/LICENCIAS_QUE_SEGUIR_TEVSYS.md`.

---

## 0) Actualización copy — abr 2026

### Home — card Precisión (`src/pages/index.astro`)
- Hook unificado (sustituye dos líneas previas «SL de mantequilla» / «El mercado no perdona…»): `¿Has sentido que tu Stop Loss te cerró en otro planeta? — tevsys te lo cuenta todo.`
- Docs sincronizados: `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`, `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` §5; en proyecto TGP `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`.

### Micropágina Precisión (`src/pages/features/precision.astro`)
- H1 en **dos líneas** (prueba; tercera línea pendiente si hiciera falta): `Precisión de cierre.` + `Menos "casi": más cierre donde toca.` — `casi` con `feature-title__accent`. Sustituye H1 de tres líneas con «SL de mantequilla» (histórico §43).

### Micropágina SML (`src/pages/features/sml.astro`) — abr 2026
- Bloque nuevo **«Así se ve hoy en el panel»**: explica bonus por ganancia de ayer, DISPONIBLE vs 1‑CLICK, convivencia con límites; **sin** prometer producto cerrado.
- Figura: `public/images/evidence/sml-panel-validacion-demo.png` (misma convención que el resto de capturas MT5/panel).
- SEO `description` ajustado. Nota de validación ampliada bajo checklist.

### Home — card Evidencia (abr 2026)
- Copy reorganizado en capas: hook `No confíes: Comprueba.` → caso real 100k/20 lotes/Wall Street → **error 0,0072 %** (accent) → vídeo/MT5/historial → `Todo descargable. Todo verificable.` → whisper. Clases: `feature-card__evidence-*`. Sincronizado `CONTENIDO_WEB` + maestro §5.

### Contador operativas documentadas — 65 (abr 2026)
- Fuente: `PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3. Web: `index.astro`, `precision.astro`, `evidencia.astro`, `settings.js` + docs de referencia (`CONTENIDO_WEB`, maestro, SEO, sync TGP `WEB_SYNC_*`).

### Multigráfico — copy encima del primer bloque demo (abr 2026)
- En **precision**, **hyperclose**, **evidencia** y **sml**: línea con punto amarillo (`feature-hook` + `feature-hook__dot`), misma tipografía que el hook del hero, **encima del primer `<h2>`** del bloque demo (o primer bloque post-hero en SML, sin vídeo aún).
- Texto (dos líneas en el mismo `feature-hook`): `Un gráfico para tevsys. Toda tu cuenta, protegida.` + `Los avisos de protección aparecen en todos tus gráficos abiertos.`

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
- Hook (abr 2026): `¿Has sentido que tu Stop Loss te cerró en otro planeta? — tevsys te lo cuenta todo.`
- Texto: **71 operativas documentadas** (abr 2026; sync `PRECISION_MILIMETRICA…` §3; 65 hasta mar 2026; antes 60).
- Imagen: `/assets/images/home/cards/card-1-input.png`

#### Card 2 — `HyperClose`
- Hook: `La diferencia entre querer parar y no poder seguir.`
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
- Cards de planes actualizadas con imágenes finales:
  - `/assets/images/plans/essential-card.png`
  - `/assets/images/plans/advanced-card.png`
  - `/assets/images/plans/pro-card.png`

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
2. (Resuelto) `plan` en URL se lee en cliente para evitar inconsistencias de render estático.
3. Añadir página `manual` y link en footer.

---

## 9) Ajuste de conversión (demo vs plan) — aplicado

- `Descargar demo` ahora apunta a `/company/contact?flow=demo`.
- El formulario de contacto diferencia dos modos:
  - **Con plan** (`?plan=...`): valida capital máximo por plan.
  - **Demo** (`?flow=demo`): permite envío sin plan preseleccionado.
- Estado de planes en web:
  - **Essential:** demo/beta disponible.
  - **Advanced/Pro:** en desarrollo (acceso anticipado).

---

## 10) Contacto por plan — aplicado

### `src/pages/company/contact.astro`
- Título principal simplificado: **`Completa tu acceso a tevsys`**.
- Se eliminó redundancia de copy en el encabezado (no repite "Has seleccionado X").
- El bloque visual izquierdo ahora cambia por `?plan=` y usa imágenes de formulario sin barra superior:
  - `/assets/images/plans/essential-form-v4.png`
  - `/assets/images/plans/advanced-form-v4.png`
  - `/assets/images/plans/pro-form-v4.png`
- `flow=demo` conserva comportamiento específico de demo.

### `src/components/forms/ContactForm.astro`
- Mantiene badge funcional de plan seleccionado en el formulario.
- Mantiene validación plan/capital por límites definidos.

---

## 11) Hero framework AIDA — aplicado

### `src/components/sections/heros/HomeHeroSection.astro`
- Se adopta el marco AIDA como guía de copy del hero:
  - **Atención:** `Tu capital merece más que buenas intenciones`
  - **Interés:** `Plataforma de verificación de disciplina automatizada y gestión de riesgo para mercados financieros.`
  - **Deseo:** `Where precision meets the edge`
  - **Acción:** `Disponible en MT5 · Próximamente: más plataformas` + CTA `Descargar demo →`
- El texto de interés se mantiene completo (sin recortes) y se presenta en 2 líneas para legibilidad.

---

## 12) Incidencia operativa de dominio (seguimiento)

- Se detectan ventanas de desalineación temporal entre:
  - `tevsys-landiing.vercel.app` (deploy actualizado)
  - `tevsys.io` (actualización más lenta/intermitente)
- Criterio de validación temporal:
  1. Validar primero en `tevsys-landiing.vercel.app`.
  2. Confirmar después en `tevsys.io` cuando termine sincronización DNS/CDN/SSL.
- Para evitar caché de imágenes en formulario por plan, se aplicó **cache-bust por renombrado** a archivos `*-form-v4.png`.

---

## 13) Microajustes de copy/UX (decisiones de producto)

### Mensaje principal (criterio)
- Se prioriza **claridad de propuesta de valor** frente a brevedad extrema en copy del hero.
- Racional: el producto es novedoso; conviene explicitar categoría + capacidad diferencial desde el primer pantallazo.

### Frases ajustadas
- Subtítulo de sección valor:
  - de `Sin excusas. Las buenas intenciones no cierran operaciones. Nosotros sí.`
  - a `Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.`
- Objetivo del ajuste: reflejar explícitamente el bloqueo operativo, no solo el cierre.

### Cards de planes (UX visual)
- Se corrige desalineación de CTAs entre Essential/Advanced/Pro usando layout flex:
  - `plan-card` a altura completa.
  - `plan-card__content` en columna con `flex: 1`.
  - `plan-card__cta` con `margin-top: auto`.
- Resultado: botones en la misma línea horizontal aunque el texto de cada card tenga distinta longitud.

---

## 14) Ajustes de copy (sesión actual) + pendientes de mañana

### Home (`src/pages/index.astro`)
- Se añadió línea de mecanismo bajo el subtítulo de valor con versión final sobria:
  - `Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF.`
- `HyperClose` fue simplificada para evitar saturación:
  - **Texto actual:** `Si estás bloqueado o en un día OFF, cualquier intento de operar se cierra al instante.`
- `SML` incorpora mención de flexibilidad y días OFF:
  - `Además, puedes definir límites por día y semana e incluir días OFF completos cuando no quieras operar.`
- `Evidencia verificable` se ajustó de cadencia y claridad:
  - `Panel, logs y reporte oficial MT5 por cada cierre. Para trader, inversor o auditor. No hay "creemos que cumple": hay evidencia medible. Cada cierre, cada bloqueo y cada rotación queda registrado.`

### Contacto (`src/pages/company/contact.astro`)
- Primera bullet orientada a días OFF:
  - `También puedes marcar días OFF (por ejemplo, lunes o viernes) para proteger tu operativa cuando decides no estar en mercado.`
- Se dejó la lista de tips en 3 elementos (más ligera).

### Trazabilidad HyperClose (texto previo)
- **Versión previa inmediata (antes de la simplificación actual):**
  - `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos. Y no podrás reintentarlo hasta la siguiente rotación automática (diaria o semanal).`
- **Versión anterior técnica (iteración previa):**
  - `Protección reactiva instantánea: cierre en milisegundos si el usuario bloqueado intenta abrir una operación. No es un "cierre rápido"; es cierre antes del siguiente tick.`

### Pendientes acordados para mañana (NO aplicados aún)
1. **HyperClose:** recuperar mejor el núcleo funcional (intento de operar estando bloqueado + cierre en milisegundos) sin sobrecargar la card.
2. **SML:** matizar y reescribir mejor los dos primeros párrafos para que expliquen con más claridad la lógica de uso/beneficio.

---

## 15) Micro-páginas de features (fase implementada)

### Decisión ejecutada
- Se confirma cambio de flujo: de `card -> contacto` a `card -> micro-página de feature -> CTA a demo`.
- Objetivo: reducir fricción y mostrar prueba antes de pedir datos.

### Cambios aplicados
- `src/pages/index.astro`
  - Card 1 -> `/features/precision`
  - Card 2 -> `/features/hyperclose`
  - Card 3 -> `/features/sml`
  - Card 4 -> `/features/evidencia`
- Nuevas páginas:
  - `src/pages/features/precision.astro`
  - `src/pages/features/hyperclose.astro`
  - `src/pages/features/sml.astro`
  - `src/pages/features/evidencia.astro`
- Todas las micro-páginas incluyen:
  - Hero + hook contextual
  - Bloque "Demo rápida (20-30s)" (placeholder inicial)
  - Sección "Qué puedes comprobar" con enlaces clicables
  - Hover en enlaces (blanco -> amarillo) + cursor mano
  - Secciones de detalle por anclas internas
  - CTA final a contacto con `?feature=...&flow=demo`
- `src/pages/company/contact.astro`
  - Soporte de `feature` además de `origin`, manteniendo compatibilidad con `flow=demo` y `plan=...`.

### Ajustes de copy aplicados
- Card 1 (precisión): se añadió `Validado en 5 brokers distintos.`
- Card 2 (HyperClose): texto actualizado a
  - `Si estás bloqueado y aun así intentas operar, HyperClose cierra en milisegundos, antes del siguiente tick. Cada intento queda registrado con trazabilidad completa, también en días OFF.`

### Commits recientes asociados
1. `feat: crear micro-página de precisión y conectar card 1 con CTA contextual a demo`
2. `feat: hacer clicables las evidencias de precisión con hover amarillo y secciones ancla`
3. `copy: actualizar card HyperClose con cierre en milisegundos y trazabilidad completa`
4. `feat: extender micro-paginas de features (hyperclose sml evidencia) con enlaces de prueba y CTA a demo`

### Próximo paso recomendado
- Sustituir placeholders de "Demo rápida" por embed lazy (premium) y aplicar doble capa:
  - Resumen rápido (usuario no técnico)
  - Detalle técnico (usuario avanzado)

---

## 16) Afinado de copy y jerarquía visual por micro-página (iteración actual)

### `src/pages/features/hyperclose.astro`
- Título refinado para mayor legibilidad y menos redundancia visual:
  - `HyperClose: cuando tu disciplina falla, HyperClose no.`
- Jerarquía de título ajustada en 2 líneas con acento dorado solo en `no.`
- Subtítulo técnico con punto amarillo y estilo consistente de hook:
  - `Cierre en milisegundos. Bloqueo hasta la siguiente rotación.`

### `src/pages/features/precision.astro`
- Estructura de lectura alineada con HyperClose:
  1. Título
  2. Hook con punto amarillo
  3. Frase explicativa
  4. Texto técnico
  5. Transparencia de escenarios extremos
- Hook principal:
  - `50 operativas documentadas. 0,06% de error medio en condiciones normales. Hecho.`
- Transparencia extrema (sin ocultar riesgo de mercado):
  - Se documenta continuidad de protección con desviaciones puntuales mayores, hasta `~0,39%`.
- Acentos dorados aplicados a `0,06%` y `~0,39%`.

### `src/pages/features/sml.astro`
- Copy final de producto con enfoque correcto de funcionamiento:
  - SML no “elige cuánto proteger”, sino cuánto ampliar margen (5%–25%).
  - Se explicita mínimo `75%` protegido.
- Jerarquía visual igual al patrón de micro-páginas:
  - título fuerte
  - hook con punto amarillo
  - explicación corta
  - línea de transparencia

### `src/pages/features/evidencia.astro`
- Copy final híbrido aplicado:
  - `Evidencia verificable: aquí no hay "creemos".`
  - `• Lo que no se puede demostrar, no cuenta.`
  - Registro en panel, logs y reporte oficial + cierre de trazabilidad para usuario/auditor/historial.

### Decisión de diseño global
- Se mantiene acento amarillo en título solo en HyperClose (diferenciador de identidad).
- En el resto de micro-páginas, el amarillo se usa en hooks y datos clave para no saturar.

### Commits asociados a esta iteración
1. `style: mejorar jerarquia visual del titulo de HyperClose sin cambiar el mensaje`
2. `style: mejorar legibilidad del titulo HyperClose con acento solo en no`
3. `copy: alinear subtitulos de micro-paginas al estilo de cards y añadir transparencia de casos extremos en precision`
4. `copy: ajustar transparencia de casos extremos en precision y resaltar ~0,39 en amarillo`
5. `style: alinear jerarquia de precision con hyperclose (titulo -> hook con punto -> detalle)`
6. `copy: aplicar version final de evidencia verificable con hook demostrable y trazabilidad clara`
7. `copy: aplicar version final de SML en micro-pagina con hook de control 5-25 y enfoque en conservacion`
8. `copy: corregir mensaje SML a ampliacion de margen (5-25) y minimo 75 protegido`
9. `style: mejorar legibilidad del hook SML con mas margen y aire visual`

---

## 17) Iteración móvil (consistencia + credibilidad)

### Objetivo
- Reducir fricción visual en móvil y mejorar percepción de calidad sin tocar la propuesta de valor.

### Cambios aplicados

#### `src/components/sections/heros/HomeHeroSection.astro`
- Ajuste responsive para que la imagen robótica gane presencia en móvil.
- Recentrado del bloque visual y del texto de marca bajo imagen.
- Resultado: hero móvil más equilibrado y menos sensación de “imagen pequeña”.

#### `src/pages/features/precision.astro`
- Hook copy:
  - de `... condiciones normales. Hecho.`
  - a `... condiciones normales.`
- Ajuste CSS en móvil para evitar cortes estéticos del hook (`50 operativas ... 0,06% ...`).

#### `src/pages/index.astro` (card SML)
- Compactación de copy en 3 bloques cortos:
  - Activación + rango `5%-25%` (`mínimo 75% protegido`).
  - Beneficio operativo (conservación de ganancias).
  - Convivencia con límites diarios/semanales y días OFF.

### Validación observada
- Capturas móviles confirman mejora de lectura y jerarquía visual.
- No se detectan regresiones funcionales en flujo.

### Commits asociados
1. `fix(hero-mobile): aumentar protagonismo y centrado de imagen en pantallas moviles`
2. `copy(mobile): simplificar hook de precision y compactar texto SML en home`
3. `fix(precision-mobile): mejorar legibilidad del hook 50 operativas 0,06 en pantallas moviles`

---

## 18) Limpieza de front público (micro-páginas)

### Decisión
- Se retira de la UI pública la sección `Mapa de evidencia (plan de publicación)` en:
  - `precision`
  - `hyperclose`
  - `sml`
  - `evidencia`

### Motivo
- Equipo pequeño (2-3 personas): más eficiente separar
  - **web pública limpia para conversión**, y
  - **seguimiento interno en documentación**.

### Implementación
- Eliminado bloque visual de roadmap y estilos asociados en las 4 micro-páginas.
- Tracker interno consolidado en `docs/CARDS-NEXT-PHASE.md` (sección Dream Team).

---

## 19) Patrón unificado de validación en micro-páginas (sin assets finales)

### Decisión UX
- Mantener en todas las micro-páginas el mismo patrón:
  1. `Qué puedes comprobar` (links de ancla interna),
  2. Rectángulos técnicos,
  3. Dentro de cada rectángulo: `Cómo validarlo` + link `Ver captura`.

### Implementación
- Se elimina el bloque redundante `Cómo validarlo hoy (sin video final)` donde existía.
- Se estandariza instrucción y enlace de captura dentro de cada bloque técnico en:
  - `precision`
  - `hyperclose`
  - `sml`
  - `evidencia`

### Resultado
- Misma calidad percibida en las 4 micro-páginas.
- Menos redundancia de texto.
- Preparado para enchufar capturas reales sin cambiar estructura.

---

## 20) Navegación premium por anclas + instrucciones por bloque

### Objetivo
- Mejorar orientación visual cuando el usuario navega desde `Qué puedes comprobar`.
- Reducir confusión y evitar saltos bruscos de contexto.

### Cambios UX aplicados

1. **Patrón por bloque técnico (4 rectángulos):**
   - Línea `Cómo validarlo`
   - Link amarillo `Ver captura ...` (placeholder preparado para asset real)

2. **Orientación visual en destino de ancla:**
   - Punto amarillo junto al título del bloque (`h3::before`)
   - Resalte del bloque destino con `:target` (borde/fondo/acento)
   - `scroll-margin-top` para que el ancla no quede pegada arriba

3. **Scroll suave global:**
   - `src/styles/reset.css` -> `html { scroll-behavior: smooth; }`
   - Manteniendo respeto a accesibilidad vía `prefers-reduced-motion`

4. **Ajuste de claridad en trazabilidad (`evidencia`):**
   - Instrucción reescrita para usuario medio:
   - verificar el mismo evento en panel + logs MT5 + informe exportado (HTML/PDF), coincidiendo hora, tipo de acción y resultado.

### Archivos implicados
- `src/pages/features/precision.astro`
- `src/pages/features/hyperclose.astro`
- `src/pages/features/sml.astro`
- `src/pages/features/evidencia.astro`
- `src/styles/reset.css`

### Resultado
- Sensación más premium al navegar por pruebas.
- Menos pérdida de contexto al bajar por anclas.
- Estructura lista para conectar capturas/videos reales sin rediseño.

---

## 21) Cierre de sesión: recuperación documental + ajuste de evidencia en `precision`

### 21.1 Recuperación y custodia del documento crítico de precisión (interno)
- Se detectó vaciado accidental del documento de operativas.
- Se reconstruyó una versión operativa con soporte de:
  - copia local de MetaQuotes,
  - historial interno de trabajo.
- Se activó protocolo "bajo llave" en entorno interno para evitar repetición:
  - `MASTER + MIRROR + SNAPSHOT` por cada actualización.
- Se creó política interna de tratamiento de evidencias para empresas (público / bajo demanda / NDA).

### 21.2 Ajuste aplicado en micro-página `precision`
- Archivo: `src/pages/features/precision.astro`
- Cambios:
  - Hook de apertura actualizado a `48 operativas documentadas`.
  - Bloque `Resumen estadístico` pasado a formato de lectura rápida con 4 KPIs:
    - 48 operativas
    - 0,06% (condiciones normales)
    - 5 brokers validados
    - 2 casos extremos documentados aparte
  - Se añadieron enlaces técnicos:
    - `Ver resumen técnico (PDF)`
    - `Ver dossier completo (PRÓXIMAMENTE)`
  - Nota explícita de IP:
    - resultados verificables sí,
    - fórmula propietaria no publicada.

### 21.3 Evidencia visual validada para operativa 4.33
- Se validó uso de `ReportHistory-511090223.html` local sin necesidad de login activo FTMO.
- Se confirmó correspondencia operativa:
  - rango evento `10:20:56 -> 11:00:39`,
  - total bloque `302.70`,
  - balance final `95 633.94`.
- Se define patrón visual público:
  - captura panel,
  - captura transacciones,
  - captura resumen del bloque,
  - versión redacted para privacidad.

### 21.4 Pendiente inmediato para próxima sesión
1. Integrar primera evidencia real (4.33) en `precision` como piloto visual.
2. Repetir patrón en 3 casos más (4.38, 4.41, 4.44).
3. Cerrar PDF técnico corto (1-2 páginas) y enlace desde micro-página.

---

## 22) Publicación operativa 49 en web + depuración UX de `precision`

### 22.1 Assets reales cargados y visibles
- Se activa evidencia visual de operativa 49 en:
  - `public/images/evidence/precision-49-01-desbloqueado.png`
  - `public/images/evidence/precision-49-02-protegido.png`
  - `public/images/evidence/precision-49-03-flotante-intermedio-positivo.png`
  - `public/images/evidence/precision-49-04-flotante-intermedio-negativo.png`
  - `public/images/evidence/precision-49-05-stop-final.png`
  - `public/images/evidence/precision-49-06-html-transacciones-redacted.png`
  - `public/images/evidence/precision-49-07-mt5-resumen-redacted.png`
- Incidencia resuelta: los archivos estaban con doble extensión (`.png.png`), lo que impedía carga en la web.

### 22.2 Mejora de usabilidad en la galería de evidencia
- En `src/pages/features/precision.astro`:
  - cada miniatura abre imagen completa en pestaña nueva (`target="_blank"`),
  - se añade guía explícita: `Haz clic en cada captura para verla en tamaño completo`.
- Resultado: la evidencia deja de ser solo visual y pasa a ser legible/auditable por detalle.

### 22.3 Limpieza de `Resumen estadístico` para reducir saturación
- Se simplifica el bloque para foco comercial + validación rápida:
  - se mantiene KPI + `Ver resumen técnico (PDF)`,
  - se retira `Ver dossier completo` del bloque público,
  - se compacta texto de IP: resultados y trazabilidad públicas; fórmula propietaria no pública.

### 22.4 Nota semántica de panel (bloqueado/protección)
- Se incorpora nota visible fuera del acordeón:
  - `Nota: en este panel, "Bloqueado hasta" equivale a "Protección activa hasta".`
- Objetivo: eliminar ambigüedad sin rehacer capturas ni re-documentar operativas.

---

## 23) Guía de logs en vídeo + estilo unificado (31/01/2026)

### 23.1 Integración de `precision-logs-guide.mp4`
- Archivo: `public/videos/features/precision-logs-guide.mp4`
- Ubicación: sección «Sin humo: todo queda registrado» en `precision.astro`
- Contenido: guía paso a paso para localizar logs MT5 (overlays: hora servidor, archivo YYYYMMDD, buscar Trades)
- Sin audio: instructivo con texto en pantalla suficiente

### 23.2 Enlace con badge VIDEO (coherencia visual)
- Texto: `Ir a guía de logs` + badge `VIDEO`
- Mismo patrón que «Ir a demo del cierre» en la sección superior
- Archivo: `src/pages/features/precision.astro`

### 23.3 Estructura unificada Precisión / HyperClose
- Ambas micropáginas comparten: título → hook con punto → bloques proof → enlaces amarillos con badge VIDEO
- HyperClose: 3 bloques (Cierre inmediato, Semáforo, Día OFF) alineados con el patrón de Precisión

### 23.4 Pendiente
- `precision-demo.mp4`: demo de cierre real (con audio)

---

## 24) Precisión y HyperClose — vídeos finales, acordeones y UX unificada (Mar 2026)

### 24.1 Precisión — cierre de micropágina

**Demo principal:**
- `precision-demo.mp4` integrado (1 min 7 s, con audio).
- Embed compacto que se expande al dar play (misma UX que HyperClose).
- Primer enlace "Aquí se decide el cierre" apunta a la demo; autoplay al hacer clic.
- Scroll-margin y resaltado amarillo en `:target`.

**Acordeón demo en alta volatilidad:**
- Archivo: `precision-demo-volatilidad.mp4`.
- En bloque «Aquí se decide el cierre»: acordeón "Ir a demo en alta volatilidad VIDEO".
- Texto: Límite -1,50%. Cierre en ganancias (+1,83%) con alta volatilidad geopolítica.

**Actualización operativas:**
- 49 → 50 operativas documentadas (hook, KPIs, card home).

**Limpieza:**
- Eliminados placeholders internos (ruta de vídeo) de la UI pública.

### 24.2 HyperClose — vídeo y capturas de modales

**Vídeo demo:**
- `hyperclose-demo.mp4` (1 min 35 s, sin audio).
- Contenido: límite alcanzado, cierre automático, 3 intentos con semáforos, 7 intentos finales.
- Nota bajo embed: "Vídeo editado para acortar esperas (cadencia 30 s entre modales)."
- Broker y datos personales tapados (barra gris #2d2d2d).

**Estructura visual (igual que Precisión):**
- Embed compacto que se expande al dar play.
- Primer enlace y Semáforo apuntan a la misma demo.
- Autoplay al hacer clic en enlaces.
- scroll-margin y resaltado amarillo en `:target`.

**Acordeón 3 modales:**
- "Ver capturas de los 3 modales" en bloque Semáforo.
- Imágenes: `hyperclose-modal-01-sistema-bloqueado.png`, `-02-advertencia.png`, `-03-advertencia-final.png`.
- Cada captura con título, descripción corta y zoom a tamaño completo.

### 24.3 Pendiente
- Día OFF: vídeo cuando esté grabado; acordeón en bloque correspondiente.

### 24.5 Documentación para DeepSeek / Psique
- `PROMPT_RESUMEN_DEEPSEEK_VIDEOS_PRECISION_HYPERCLOSE.md` — Prompt completo con estado actual (Mar 2026) para dar contexto a IA.
- `GUIA_PRODUCCION_VIDEOS_MICROPAGINAS_TEVSYS.md` — Actualizada con specs reales de vídeos publicados.

### 24.6 Commits asociados
- `feat(precision): enlazar "Aquí se decide el cierre" a demo rápida`

---

## 25) HyperClose Días OFF completo + Footer indie (Mar 2026)

### 25.1 HyperClose – sección Días OFF finalizada
- **Capturas:** 5 escenarios en acordeón: config (modal-00), panel protegido, modales 01/02/03 (educativo, advertencia, cláusula).
- **Vídeo:** `hyperclose-dias-off-demo.mp4` (51 s) con overlays: Día OFF config → Primer intento (cierre + 1.er semáforo) → Segundo intento (2.º semáforo) → Tercer intento (3.er semáforo, exención) → cierre "Tu calendario. Tu decisión. Nosotros lo cumplimos — tevsys".
- **Captions candado:** En capturas 1 y 2, sobre la imagen. "🔓 Candado gris (esquina inf. izq. del gráfico) = sin protección. Configura y bloquea." | "🔒 Candado verde (esquina inf. izq. del gráfico) = protección activa." Teal→verde para usuario. Margen 2rem 0 2rem.
- **Archivos:** `src/pages/features/hyperclose.astro`, `public/images/evidence/hyperclose-dias-off-*`, `public/videos/features/hyperclose-dias-off-demo.mp4`.

### 25.2 Footer – frase proyecto independiente
- **Texto:** "❤️ Made with love for trading. — Desarrollado independientemente. Sin inversores. Sin excusas."
- **Estilo:** Link con hover amarillo (#f5b041), font 0.95rem. Ubicado encima del copyright.
- **Archivo:** `src/components/core/Footer.astro`.

### 25.3 Favicon y logo (sesión anterior)
- Favicon: `logo tevsys_03.png`. Logo en BrandOval (header).

### 25.4 Commits asociados
- `feat(web): capturas modales Días OFF nivel 1, 2 y 3`
- `feat(footer): frase proyecto independiente EN/ES + corazón + em dash`
- `feat(precision): autoplay vídeo demo + scroll y resaltado`
- `feat(precision): embed compacto que se expande al dar play`
- `feat(precision): acordeón demo en alta volatilidad`
- `feat: actualizar 49 a 50 operativas documentadas`
- `fix: quitar placeholders internos de precision y hyperclose`
- `feat(hyperclose): nuevo vídeo 1:35 + estructura visual igual que Precisión`
- `feat(hyperclose): nota "Vídeo editado para acortar esperas"`
- `fix(hyperclose): sustituir vídeo con broker tapado`
- `feat(hyperclose): acordeón con capturas de los 3 modales`
- `fix(precision): resaltado amarillo y autoabrir acordeón en #precision-logs-guide`

---

## 26) Evidencia → Precisión: enlace guía de logs (Ene 2026)

### 26.1 Fix enlace «Guía visual de logs (VIDEO)»
- **Problema:** El enlace desde Evidencia a `#precision-logs-guide` no marcaba el embed en amarillo (el `:target` era el `details`, no la section).
- **Solución:** CSS `#precision-logs:has(#precision-logs-guide:target)` para aplicar el mismo resaltado; script para autoabrir el acordeón cuando se navega con ese hash.
- **Archivo:** `src/pages/features/precision.astro`.

---

## 27) Hero, Footer, Favicon — sprint Mar 2026 (sesión 6 marzo)

### 27.1 Hero — imagen mano robótica rediseñada
- **Nueva imagen:** `mano robotica central web.png` — mano robótica + candado dorado, chart de velas de fondo, logo tevsys en etiqueta negro apagado (esquina sup. izq.) para visibilidad.
- **Alineaciones:**
  - Borde superior de la imagen alineado con la «T» del título «Tu capital merece más que buenas intenciones».
  - Borde izquierdo de la imagen alineado con el inicio de «Trading Edge Verification System».
  - Grid `1fr 2fr`, `align-items: start`, `object-position: right top`.
- **Archivo:** `src/components/sections/heros/HomeHeroSection.astro`.

### 27.2 Footer — iconos contacto, guiones, hover
- Iconos SVG (email, ubicación) en amarillo tevsys. Contacto: info@tevsys.io, Barcelona.
- Guion amarillo (— ) antes de títulos de columnas (Navegación, Producto).
- Hover amarillo en enlaces de columnas.
- Enlaces micropáginas: Precisión, HyperClose, SML, Evidencia.
- Logo en footer (favicon.png) junto a tevsys™.
- **Archivos:** `src/components/core/Footer.astro`, `src/config/footer.js`, `src/layouts/Page.astro`, `public/icons/icon-email.svg`, `public/icons/icon-location.svg`.

### 27.3 Favicon
- PC: `favicon.png` (logo con chevrones blanco/naranja). Tras pruebas con `logo-tevsys.png` y `favicon-tevsys-icon.svg`, se mantiene favicon.png como correcto.
- Móvil: `apple-touch-icon.png` 180×180 añadido (link en BaseHead). Pendiente validar en dispositivos reales.

### 27.4 Reflexión diseño hero (documentada 6 Mar 2026)

> **Antes vs ahora**  
> Antes la mano robótica perdía peso, el logo competía con el chart y no había jerarquía clara. Ahora hay orden: el título manda, la imagen acompaña sin robar foco, y la marca está presente en la esquina sin gritar.
>
> **Reglas respetadas**  
> - **Jerarquía:** El titular sigue siendo lo primero. La imagen refuerza el mensaje sin competir.  
> - **Respiración:** El espacio entre texto e imagen evita saturación; no se siente apretado ni vacío.  
> - **Alineación:** La línea superior compartida con la «T» y el alineamiento con las cards mantienen coherencia.  
> - **Consistencia:** El logo en la imagen encaja con el resto de la marca (cards, footer, amarillo) sin repetirse.  
> - **Ritmo:** La transición hero → cards es natural; cada bloque tiene su peso sin competir.
>
> **Importancia sin ser estridente**  
> La mano + candado ya tiene fuerza. El logo en gris sobre fondo apagado suma identidad sin ruido. Presencia de marca sin que el diseño grite.
>
> **Conclusión**  
> La página transmite más orden y profesionalidad. El hero funciona como puerta de entrada, las cards mantienen potencia y todo encaja en el mismo sistema. Base sólida para seguir construyendo.

### 27.5 Documentación cruzada
- Reflexión completa + commits: `docs/REFLEXION_DISENO_HERO_FOOTER_MAR2026.md`.
- Referencias: `CONTENIDO_WEB_TEVSYS_LANDING`, `CARDS-NEXT-PHASE`, `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS`, `ESTRATEGIA_FAVICON_ICONOS_TEVSYS`.
- **Prompt maestro para DeepSeek:** `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` — documento único que engloba todo (hero, footer, vídeos, copy, patrones, docs) para onboarding del otro miembro del equipo.

### 27.6 Commits asociados (sesión 6 Mar 2026)
- `fix(precision): resaltado amarillo y autoabrir acordeón en #precision-logs-guide`
- `feat(web): favicon tevsys SVG + enlace apple-touch-icon`
- `fix(web): usar logo-tevsys.png en favicon y BrandOval (icono correcto)`
- `fix(web): volver a favicon.png para logo en pestaña`
- `feat(web): añadir apple-touch-icon 180x180 para móvil`
- `fix(web): centrar logo en apple-touch-icon`
- `feat(footer): enlaces micropáginas, logo y columna Producto`
- `feat(footer): iconos SVG contacto (email, Barcelona) en amarillo tevsys`
- `style(footer): fondo más oscuro y transparente + borde superior sutil`
- `revert(footer): fondo unificado con theme-surface-1`
- `feat(footer): guion amarillo en títulos y hover amarillo en enlaces`
- `feat(hero): nueva imagen mano robótica + candado con logo en etiqueta`
- `style(hero): imagen más grande, extendida hacia el texto`
- `style(hero): alinear borde superior de imagen con la "T" del título`
- `style(hero): reducir extensión izquierda de imagen, más separación del texto`

---

## 28) Línea de trazabilidad en sección valor (Ene 2026)

- **Cambio:** Añadida línea entre subtítulo y mecanismo: `Trazabilidad completa: logs, panel y reporte MT5. Auditable.`
- **Objetivo:** Señal de credibilidad temprana para inversores, fondos y escépticos antes de llegar a las cards.
- **Estructura:** Dolor (pregunta) → Promesa (nosotros sí) → **Prueba (trazabilidad)** → Mecanismo (configuras una vez).
- **Archivo:** `src/pages/index.astro` — clase `feature-card__intro-trazabilidad`.
- **Docs:** CONTENIDO_WEB, PROMPT_MAESTRO actualizados.

### 28.1 Overlays vídeo alta volatilidad (Precisión) — FINAL
- **Vídeo:** `precision-demo-volatilidad.mp4` — SIN audio.
- **Mejora aplicada:** Vídeo actualizado/mejorado con 6 overlays definitivos que guían la narración visual. Sustituye versión previa (si la hubo) con overlays más claros y coherentes.
- **Overlays (orden):** 1) Abro operación. Límite -1,50% / 1,50%. Mercado en alta volatilidad. 2) Panel en tiempo real: flotante y protección activa. 3) Cero intervención. — tevsys ejecuta. 4) Cálculo en curso. Cierre inminente. 5) Cierre en ganancias (+1,83%). Protección en condiciones extremas. 6) Alta volatilidad. Mismo compromiso. — tevsys *(frase de marca)*
- **Estado:** Vídeo editado y listo para exportar/subir.

---

## 29) Formulario contacto: imagen por plan, link empresas, bullets acumulativos (Ene 2026)

### 29.1 Imagen en formulario demo
- El bloque visual izquierdo del formulario de contacto muestra una imagen distinta según el plan seleccionado.
- Imágenes: `*-form-v4.png` (essential-form-v4, advanced-form-v4, pro-form-v4) en `/assets/images/plans/`.
- Al cambiar de plan (Essential / Advanced / Pro), la imagen se actualiza en cliente para reflejar el visual del plan.

### 29.2 Link empresas (actualizado §30)
- Bullet fijo en todos los planes: enlace a `/company/empresas` (micro-página canal empresas).
- Texto del enlace: `Empresas o contacto corporativo`. Ya no es mailto; redirige a la micro-página.

### 29.3 Diferenciación horarios/noticias por plan
- **Essential:** No incluye bullet de horarios/noticias (base).
- **Advanced:** `Horarios de mercado y noticias (mejorados): en fase de desarrollo.` — mejorados respecto a Essential.
- **Pro:** `Horarios de mercado y noticias (con eventos personalizados): en fase de desarrollo.` — nivel superior, eventos que el usuario define.
- Vinculación con diseño: `docs/DISENO_NOTICIAS_HORARIOS_V9_COMPLETO.md` (proyecto TGP).

### 29.4 Bullets acumulativos (Essential + Advanced + Pro)
- **Enfoque:** Advanced y Pro explicitan que incluyen todo lo anterior más lo nuevo.
- **Essential** (base): 3 bullets + link empresas.
- **Advanced:** Línea intro `Todo lo de Essential, además:` + 3 bullets específicos (SML, días OFF, horarios mejorados) + link empresas.
- **Pro:** Línea intro `Todo lo de Advanced, además:` + 2 bullets específicos (drawdown/estructura, horarios con eventos personalizados) + link empresas.
- Eliminadas redundancias (días OFF no se repite en Pro; "respecto a Essential" en Advanced implícito por la intro).

### 29.5 Bullets completos por plan (estado actual)

| Plan | Bullets |
|------|---------|
| **Essential** | 1) Configuras una vez. tevsys ejecuta siempre. Incluso los días que tú decides estar OFF. 2) Límite diario, precisión milimétrica y HyperClose incluidos. 3) Respuesta en menos de 24h con los siguientes pasos. 4) Empresas: info@tevsys.io |
| **Advanced** | 1) Todo lo de Essential, además: 2) Protección configurable toda la semana + SML para operativas avanzadas. 3) Puedes marcar días OFF para proteger tu operativa. 4) Horarios de mercado y noticias (mejorados): en fase de desarrollo. 5) Empresas: info@tevsys.io |
| **Pro** | 1) Todo lo de Advanced, además: 2) Para capitales más altos: drawdown y estructura completa. 3) Horarios de mercado y noticias (con eventos personalizados): en fase de desarrollo. 4) Empresas: info@tevsys.io |

### 29.6 Archivos modificados
- `src/pages/company/contact.astro` — `planTipsMap` con bullets acumulativos y diferenciación horarios/noticias.
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` — copy de bullets actualizado.
- `docs/CHANGELOG-TEVSYS.md` — esta sección.

### 29.7 Commits asociados
- `feat(contact): diferenciar horarios/noticias en Advanced y Pro vs Essential`
- `feat(contact): Pro con "eventos personalizados" en horarios/noticias`
- `feat(contact): bullets acumulativos (Essential +) en Advanced y Pro`

---

## 30) Micro-página Empresas: canal B2B, nav, formulario, estilo (Ene 2026)

### 30.1 Objetivo
- No cerrar puertas a B2B mientras se enfoca en retail/Essential.
- Captar leads empresas sin prometer funcionalidad aún no disponible.
- Mensaje: canal en desarrollo; avisaremos cuando esté listo.

### 30.2 Nav header
- Añadido **Empresas** al menú: Inicio | Empresas | Acceso | Contacto.
- Acceso a `/company/empresas` desde cualquier página (home, micro-páginas de features).

### 30.3 Bullet en formulario contacto
- El bullet "Empresas o contacto corporativo" enlaza a `/company/empresas` (no mailto).
- Visible en Essential, Advanced y Pro al seleccionar plan.
- Mismo enlace cuando `flow=demo` → título "Solicita tu demo de tevsys" (el bullet empresas sigue presente).

### 30.4 Micro-página `/company/empresas`
- **Ruta:** `/company/empresas`
- **Hero:** feature-kicker "Canal empresas", h1 "Empresas: otro canal, otro trato."
- **Hook (estilo micropáginas):** "Estamos en fase de desarrollo y validación del canal empresas." — cursiva, negrita, punto amarillo (mismo que Precision/HyperClose).
- **Copy:** Trato especial; capital distinto a retail; requiere reuniones; definimos oferta contigo.
- **CTA:** "Si te interesa, déjanos tus datos y te avisaremos cuando estemos listos."

### 30.5 Formulario empresas
- **Campos:** Empresa (req), Email corporativo (req), Rol (opt), Objetivo (opt), Comentario (opt).
- **Hidden:** `_subject: [tevsys Empresas] Nueva solicitud`, `Source: empresas`
- **Endpoint:** mismo Formspree que contacto (xzdjbenk).
- **Thank-you:** `/company/empresas-thank-you` — "Te avisaremos cuando estemos listos para el canal empresas."
- **Fallback:** "O escríbenos directo: info@tevsys.io" (mailto).

### 30.6 Estilo visual
- **Fondo formulario:** #06080d (igual que demo-video en Precision), no gris theme-surface-1.
- **Borde:** rgba(245, 176, 65, 0.35) — acento amarillo tevsys.
- **Campos:** fondo rgba(255,255,255,0.04), borde ámbar, focus más visible.
- **Margen inferior:** 3rem antes del footer.

### 30.7 Accesos desde micro-páginas
- Las micro-páginas (Precision, HyperClose, SML, Evidencia) comparten el mismo header.
- Header incluye Empresas → siempre accesible desde cualquier feature.
- CTAs de features enlazan a `/company/contact?feature=...&flow=demo` (solicitar demo retail).
- Empresas es canal paralelo; no sustituye el flujo demo.

### 30.8 Pendientes documentados
- **Verificación email (double opt-in):** `docs/PENDIENTE_VERIFICACION_EMAIL_LEADS.md` — contexto, opciones, decisión aplazada hasta después de Essential estable.
- **Plan producto y academia:** `docs/ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md` — prioridades, pricing, early adopters, vídeos, presentación. Ir paso a paso.

### 30.9 Archivos
- `src/pages/company/empresas.astro`
- `src/pages/company/empresas-thank-you.astro`
- `src/config/nav.js`
- `src/pages/company/contact.astro` (bullet link)
- `docs/RUTA_EMPRESAS_TRATAMIENTO_EVIDENCIAS_TEVSYS.md`
- `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`

### 30.10 Commits asociados
- `feat(empresas): micro-página canal empresas + nav + bullet a /company/empresas`
- `fix(empresas): margin-bottom 3rem antes del footer`
- `style(empresas): fondo oscuro #06080d, hook como micropáginas, campos con borde ámbar`

---

## 31) Bullets flujo Acceso — Opción A (Ene 2026)

### 31.1 Contexto
- Formulario con `?flow=acceso` usa bullets propios (no demo ni plan).
- Objetivo: claridad sobre Essential vs Advanced/Pro, trato personal, evidencia real.

### 31.2 Bullets aplicados
1. **Essential listo para probar. Advanced y Pro en desarrollo — lista de espera.**
2. **Respuesta en menos de 24h. Te orientamos según tu perfil.** (antes "Trato personal, sin automatismos" — ajuste por capacidad real; ver §6 ROADMAP)
3. **Precisión y HyperClose validados con operativas reales. Días OFF y configuración flexible de toda la semana.**
4. **Empresas o contacto corporativo** — enlace a `/company/empresas`.

### 31.3 Claridad Essential / Advanced / Pro en desarrollo
- **Intro Acceso:** "Rellena el formulario... Essential listo; Advanced y Pro en desarrollo."
- **Thank-you flow-aware:** Si envía desde `?flow=acceso`, redirige a `?flow=acceso` y muestra: "Essential está listo; Advanced y Pro en desarrollo. Te indicaremos el siguiente paso según tu perfil."

### 31.4 Bullet 3 ampliado (Opción B)
- Añadido: "Días OFF y configuración flexible de toda la semana." — vender features únicos (Essential ya tiene días OFF; Advanced/Pro amplían).

### 31.5 Archivos
- `src/pages/company/contact.astro` — bullets, intro Acceso.
- `src/components/forms/ContactForm.astro` — thank-you URL con `?flow=acceso`.
- `src/pages/company/contact-thank-you.astro` — mensaje condicional por flow.

### 31.6 Badge DEMO + nota dev para Advanced/Pro (Ene 2026)
- **Badge DEMO:** Cuando se muestra la imagen Essential (flow=acceso, flow=demo, plan=essential), se añade badge "DEMO" en la esquina superior derecha. Ámbar con opacidad. Ajuste visual: más pequeño (font-size 0.65rem, padding 0.2rem 0.45rem).
- **Nota debajo imagen (Advanced/Pro):** Para plan advanced o pro, línea en cursiva debajo de la imagen: "Advanced/Pro en desarrollo. La demo disponible ahora es Essential." — mismo tamaño, blanco, destaca visualmente.

### 31.7 Thank-you plan Advanced/Pro (Ene 2026)
- Si envían desde plan=advanced o plan=pro, redirect incluye ?plan=advanced|pro.
- Thank-you muestra bloque destacado: "Te añadimos a la lista de espera de Advanced/Pro. Mientras tanto, la demo disponible es Essential." — borde ámbar, fondo suave, importancia visual.

### 31.8 Checkbox lista de espera — Advanced/Pro (Ene 2026)
- **Campo:** "Sí, avísame cuando [Advanced/Pro] esté disponible." — debajo de Experiencia.
- **Solo visible** cuando plan=advanced o plan=pro.
- **Default:** Marcado (Sí). Psicología: más síes que noes; deben desmarcar activamente para decir no.
- **Formspree:** `AvisarCuandoDisponible: Sí | No`. Para filtrar lista de espera cuando Advanced/Pro esté listo.
- **Estilo:** Caja con borde ámbar, fondo suave.

### 31.9 Contacto = Acceso unificado + fixes (Ene 2026)
- **Nav:** "Contacto" apunta a `/company/contact?flow=acceso` — misma experiencia que Acceso.
- **Redirect:** `/company/contact` sin params → redirige a `?flow=acceso`.
- **allowNoPlan:** Pasado desde Astro según URL (flow=acceso o demo) — permite enviar sin plan.
- **Imagen:** demo-form-visual.png no existía; fallback a `esse-form-v4.png` para flujos demo/acceso.

### 31.11 Cards Advanced/Pro — todo anterior + extras (Ene 2026)
- **Advanced:** "Todo lo de Essential, además: protección configurable toda la semana, SML y días OFF. En desarrollo — lista de espera."
- **Pro:** "Todo lo de Advanced, además: drawdown y estructura completa para capitales más altos. En desarrollo — lista de espera."
- Alineado con bullets del formulario; diferenciación clara en home.

### 31.12 Hero — plataforma pionera (Ene 2026)
- Subline (2 líneas): "Plataforma pionera en verificación de disciplina automatizada" / "y gestión de riesgo para mercados financieros." — refuerza posicionamiento; evidencia ya en home (trazabilidad, logs, panel).

### 31.13 Hero tagline — punto amarillo más discreto (Ene 2026)
- Punto del tagline "Where precision meets the edge": 32px → 22px. Más discreción, texto gana protagonismo.

### 31.14 Bullets Advanced/Pro — "En [plan] ofrecemos" (Ene 2026)
- Advanced: "En Advanced ofrecemos todo lo de Essential, además:"
- Pro: "En Pro ofrecemos todo lo de Advanced, además:"
- Refuerza nombre del plan y tono directo.

### 31.15 SML — quitar "En Essential demo no está activo" (Ene 2026)
- Nota disponibilidad: solo "Disponible en validación avanzada para cuentas Advanced/Pro (lista de espera)." — más limpio.

### 31.16 Trazabilidad — quitar "Auditable" (Ene 2026)
- Frase: "Trazabilidad completa: logs, panel y reporte oficial MT5." — menos carga; "trazabilidad" ya aporta para quien conoce el término.

### 31.17 Intros desde features — "Ya has visto en esta página" (Ene 2026)
- Precision, HyperClose, SML, Evidencia: "Ya has visto [X] en esta página. Rellena el formulario y te enviamos los enlaces para profundizar y los pasos para acceder a la demo."
- Sin redundancia con lo que ya está en la web; respuesta: enlaces + contexto breve.
- PENDIENTE_VERIFICACION_EMAIL_LEADS: §6 caso verificación antes de dar link demo (cuentas falsas, bots).

### 31.18 Referencia
- `docs/ROADMAP_PLAN_PRODUCTO_Y_ACADEMIA.md` — plan paso a paso.

### 31.19 Actualización docs web (Ene 2026)
- **PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md:** Sección "Enlaces para profundizar" con URLs por feature (Precision, HyperClose, SML, Evidencia) para respuesta manual a leads. Intros features, cards Advanced/Pro "En [plan] ofrecemos...", badge DEMO 22px, SML sin Essential demo, trazabilidad sin Auditable, PENDIENTE_VERIFICACION §6. Evidencia: bullet reporte oficial MT5.
- **CONTENIDO_WEB_TEVSYS_LANDING.md:** Evidencia soporte — reporte oficial MT5.

---

## 32) Plantilla unificada 4 micropáginas + Evidencia 100k (Mar 2026)

### 32.1 Plantilla unificada
- **Orden fijo** en las 4 micropáginas: Hero → Demo rápida → Qué puedes comprobar → Bloques proof → CTA
- Precisión, HyperClose, Evidencia y SML comparten la misma estructura
- Vídeo (o placeholder) siempre en bloque 2, mismo peso visual
- Enlaces "Qué puedes comprobar": clase `evidence-link` (blanco por defecto, amarillo en hover)

### 32.2 Evidencia — Reestructuración
- **Demo cuenta 100k primero:** Bloque "Demo rápida — Cuenta 100k" inmediatamente después del hero
- **Subtítulo:** "100.000€ · Misma precisión. Compruébalo tú mismo."
- **Eliminada** sección "Evidencia en acción"
- Placeholder hasta que exista `evidencia-100k.mp4`; enlaces alternativos a demo Precisión y guía logs

### 32.3 Evidencia — Acordeón reporte MT5
- Sección "Reporte oficial MT5: respaldo independiente": acordeón "Ver capturas de la operativa 100k"
- Galería de 4 capturas (`evidencia-100k-reporte-01.png` a `04.png`) + enlace "Descargar informe completo PDF"
- Rutas: `public/images/evidence/`, `public/docs/evidencia-100k-informe-mt5.pdf`
- Enlace a resumen técnico Precisión mantenido debajo

### 32.4 SML — Misma estructura
- Demo rápida con hook "Bonus por rendimiento. Límites ampliados cuando tú decides."
- `id="sml-demo"`, `feature-demo-hook`, misma estructura visual que las otras micropáginas

### 32.5 Plan vídeo 100k (pendiente)
- Secuencia overlays: "Cuenta 100k · Sin operaciones previas" → "Cálculo en curso — cierre inminente" → "Misma precisión. Mismo límite." + marca tevsys
- Cuando esté listo: sustituir placeholder en evidencia.astro por `demo-video` + `<video>`

### 32.6 Documentación
- **Proyecto TGP:** `docs/PROMPT_DEEPSEEK_WEB_TEVSYS_ESTADO_COMPLETO.md` — documento maestro para DeepSeek con contexto completo web
- **CHECKLIST_WEB_TEVSYS_ANTES_REUNION_ACADEMIA:** Evidencia y SML actualizados con plantilla unificada

### 32.7 Commits asociados
- `feat(web): plantilla unificada Evidencia + SML — vídeo 100k primero, misma estructura 4 micropáginas`
- `fix(evidencia): subtítulo demo 100k — 100.000€ · Misma precisión. Compruébalo tú mismo.`
- `feat(evidencia): acordeón 4 capturas operativa 100k + enlace PDF en sección Reporte MT5`

---

## 33) Home — frase "Ellos deslizan" + ajustes redundancia (Mar 2026)

### 33.1 Frase "Ellos deslizan. En tevsys cerramos."
- **Ubicación:** Debajo de "Configuras una vez. Ejecutamos siempre. Incluso los días que tú decides estar OFF."
- **Estilo:** Punto amarillo (`feature-hook__dot`) + texto gris heredado, cursiva, `font-weight: 600`, `opacity: 0.9`. Mismo patrón visual que hooks de micropáginas.
- **Decisión:** Se movió debajo de la intro (no justo después de "Nosotros sí") para evitar repetición de "nosotros" en líneas seguidas.

### 33.2 Ajuste redundancia "nosotros"
- **Problema detectado:** "Nosotros" aparecía 3 veces en el bloque intro + primera card:
  1. "Las buenas intenciones no cierran… Nosotros sí."
  2. "Ellos deslizan. Nosotros cerramos."
  3. "El mercado no perdona. Nosotros tampoco."
- **Solución:** Cambiar la frase 2 a "Ellos deslizan. **En tevsys** cerramos." (marca en vez de pronombre).
- **Ajuste adicional:** "tevsys ejecuta siempre" → "**Ejecutamos** siempre" para que la línea anterior no repita "tevsys" justo encima.

### 33.3 Orden final sección valor (home)
1. h2: ¿Cuánto dinero has perdido por no parar a tiempo?
2. Sin excusas. Las buenas intenciones no cierran ni bloquean operaciones. Nosotros sí.
3. Trazabilidad completa: logs, panel y reporte oficial MT5.
4. Configuras una vez. Ejecutamos siempre. Incluso los días que tú decides estar OFF.
5. **• Ellos deslizan. En tevsys cerramos.**
6. Grid de 4 cards.

### 33.4 Archivo
- `src/pages/index.astro`

---

## 34) Bug crítico: Variables Globales MT5 sin ADN de cuenta — multi-cuenta (Mar 2026)

### 34.1 Descubrimiento
- Al probar con cuenta nueva (100k, ActivTrades), la cuenta arrancaba bloqueada sin haber alcanzado ningún límite.
- Causa: Variables Globales genéricas de MT5 (`TGP_DAILY_LOSS_LIMIT_REACHED`, `TGP_BLOCKED`, etc.) **no llevan el número de cuenta (login)** en su nombre.
- La sesión anterior (cuenta diferente) dejó esas GVs en `1.0`. La cuenta nueva las leyó y asumió que estaba bloqueada.

### 34.2 Impacto

**Técnico:**
- Interferencia entre cuentas en el mismo terminal MT5.
- Estado corrupto al cambiar de cuenta o reinstalar EA.
- Reinstalar/reiniciar MT5 no borra las GVs (son persistentes por diseño de MetaTrader).

**Negocio:**
- Si un usuario quiere tevsys en dos cuentas (= dos licencias), el producto no funciona porque las GVs se interfieren.
- Un usuario podría evadir la protección cambiando de cuenta en el mismo terminal (la GV de bloqueo de la cuenta A no afecta a la cuenta B si se corrige, pero hoy sí la afecta incorrectamente).
- Se pierde un canal natural de upsell: "Protege más cuentas, paga más licencias."

### 34.3 Qué ya funciona
- Las GVs con prefijo `SKEL7_<login>_` ya tienen ADN propio (login = número de cuenta). Cada cuenta tiene sus propias variables de bloqueo, estado, etc. Verificado en captura de Variables Globales con dos logins distintos (6198944, 6210646).

### 34.4 Qué falta (el bug)
- Las GVs escritas con nombre fijo (sin login):
  - `TGP_DAILY_LOSS_LIMIT_REACHED`
  - `TGP_BLOCKED`
  - `TGP_STOP_REASON`
  - `TGP_WEEKLY_LOSS_LIMIT_REACHED`
  - `TGP_WEEKLY_PROFIT_LIMIT_REACHED`
  - `TGP_DAILY_PROFIT_LIMIT_REACHED`
  - `TGP_WEEKLY_DRAWDOWN_LIMIT_REACHED`
  - `TGP_KILL_SWITCH`
  - `TGP_EMERGENCY_STOP`

### 34.5 Solución: migrar a prefijo con login
- Cada GV genérica pasa a incluir el login: `TGP_<login>_DAILY_LOSS_LIMIT_REACHED`.
- Cambio mecánico: strings hardcodeados → variables construidas con `AccountInfoInteger(ACCOUNT_LOGIN)`.
- Mismo patrón que ya usan las `SKEL7_<login>_*`.
- **Estado:** Prompt detallado enviado al chat de bugs (V11) para implementación.

### 34.6 Workaround temporal (para grabar vídeo hoy)
- Herramientas → Variables Globales → borrar todas las `TGP_*` genéricas.
- Borrar `TGP_BlockState_<login>.bin` en `Terminal/Common/Files`.
- Cerrar MT5 → reabrir → cargar EA → funciona limpio.

---

## 35) Idea de negocio: detección multi-cuenta + upsell (Mar 2026)

### 35.1 Concepto
- Con el ADN por cuenta (login en todas las GVs), el EA sabe exactamente en qué cuenta se ejecuta.
- Si se carga en una cuenta no autorizada por la licencia, puede detectarlo y mostrar un mensaje:
  - *"Esta cuenta no está asociada a tu licencia. Si quieres proteger más capital en otra cuenta, contacta con nosotros."*
- No es un castigo: es una oferta de upsell natural.

### 35.2 Escenarios a contemplar

**Demo vs real:**
- Un usuario podría querer probar en demo antes de comprar para su cuenta real.
- La licencia debería permitir al menos una demo sin restricción, o el mensaje debería ser distinto para demo:
  - *"Estás probando en demo. Tu licencia protege la cuenta X."*

**Cambio de broker:**
- Si un usuario migra de ActivTrades a Infinox (misma licencia, cuenta distinta), no debería sentir que le bloquean.
- Necesita un flujo simple de "migrar licencia a nueva cuenta" (soporte o self-service).

**Timing:**
- Implementar después de que el EA esté estable. Primero curar al enfermo, luego monetizar la salud.

### 35.3 Monetización
- Dos cuentas = dos licencias. Canal de ingresos natural.
- El EA ya tendrá el login en todas las GVs; cruzarlo con la licencia es casi gratis.
- Compatible con el sistema de licencias por capital documentado en `Formato_Clave_Licencia_Capital_Por_Tier_TEVSYS.md` (Essential 10k, Advanced 50k, Pro 200k).

### 35.4 Qué comunicar en la web (cuando Essential esté estable)
- En la página de planes o en FAQ: "Cada licencia protege una cuenta MT5. Si operas en varias cuentas, puedes añadir licencias adicionales."
- En el formulario de contacto: campo opcional "¿Operas en más de una cuenta?" para detectar oportunidades de multi-licencia.

### 35.5 Referencia
- `docs/Formato_Clave_Licencia_Capital_Por_Tier_TEVSYS.md` — formato clave, capital por tier, popups.
- `docs/ANALISIS_CAUSA_RAIZ_FECHA_BLOQUEO_09MAR2026.md` — contexto técnico del bug de GVs.
- `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` — changelog V11.

---

## 36) Evidencia 100k completa: vídeo demo + informe MT5 + HTML transacciones (11 Mar 2026)

### 36.1 Vídeo demo pérdida 100k

**Operativa:**
- Cuenta: 100.000€ nueva (Infinox, demo, Hedge)
- Activo: GER40, 2 compras de 10 lotes = 20 lotes en mercado
- Límite configurado: -1%
- Cierre automático: -1.007,20€ (-1,01%)
- Error/desviación: 7,20€ = **0,0072%**
- Contexto: apertura Wall Street, alta volatilidad
- Duración vídeo: **1 min 41 s**, con audio

**Archivo:** `public/videos/features/evidencia-100k-perdida.mp4`

**Overlays (secuencia):**
1. Cuenta de 100.000€, cuenta nueva, sin operaciones previas
2. Primera compra 10 lotes / Límite configurado -1% / Panel a tiempo real
3. Segunda compra 10 lotes / Total 20 lotes en mercado
4. 20 lotes en 100K, alto riesgo. El sistema no juzga, protege.
5. Apertura Wall Street, alta volatilidad
6. Cálculo en curso. Cierre inminente.
7. Cierre automático: 2 posiciones, mismo segundo, mismo precio
8. -1.007,20€ / Error: 7,20€ / Precisión: 0,0072%
9. tevsys — where precision meets the edge + diana

**Embed:** Compacto (420px), se expande al dar play. Mismo patrón que Precisión y HyperClose.

### 36.2 Reestructuración de evidencia.astro

**Antes (Mar 2026 §32):**
- Placeholder de vídeo con texto "Vídeo en preparación"
- Sección "Qué puedes comprobar" con 3 bullets
- Sección "Panel y logs" con 6 capturas de cuenta 50K
- Sección "Reporte oficial MT5" con capturas placeholder
- Sección "Auditoría" con enlace a Precisión

**Después (11 Mar 2026):**
- **Vídeo real** `evidencia-100k-perdida.mp4` con hook: `100.000€ · 20 lotes · Apertura Wall Street · Error: 0,0072%`
- **Acordeón 1:** "Informe oficial MT5 — comprueba esta operativa tú mismo" con 5 capturas (todas las pestañas, sin editar):
  - Summary, Profit & Loss, Long & Short, Symbols, Risks
- **Acordeón 2:** "Historial de transacciones — detalle por operación" con captura editada (zonas clave en amarillo) + enlace "Abrir informe HTML original"
- **Enlace logs:** "¿Quieres ver los logs de esta operativa? Guía visual de logs en MT5 (VIDEO)" → `/features/precision#precision-logs-guide`
- Sección "Auditoría" mantenida (enlace a Precisión)
- **Eliminadas:** sección 50K completa, sección "Qué puedes comprobar" (bullets), sección "Reporte oficial MT5" separada

### 36.3 Capturas informe MT5

| # | Archivo | Pestaña MT5 |
|---|---------|-------------|
| 1 | `evidencia-100k-informe-resumen.png` | Summary — -1.007,20€, balance 98.992,80€ |
| 2 | `evidencia-100k-informe-profitloss.png` | Profit & Loss — desglose pérdida |
| 3 | `evidencia-100k-informe-longshort.png` | Long & Short — 100% Long, 2 manuales |
| 4 | `evidencia-100k-informe-symbols.png` | Symbols — GER40 único activo |
| 5 | `evidencia-100k-informe-risks.png` | Risks — drawdown, worst trade |

Ruta: `public/images/evidence/`

### 36.4 HTML transacciones

- **Captura editada:** `evidencia-100k-html-transacciones.png` — zonas clave marcadas en amarillo (Beneficio Neto, Reducción máxima, Reducción relativa)
- **HTML original descargable:** `public/docs/evidencia-100k-historial-transacciones.html` — archivo MT5 original (UTF-16 LE) con datos personales redactados ([Nombre redactado], [Cuenta redactada], [Broker redactado])
- **Fix encoding:** Archivo mantenido en UTF-16 LE original. Se añadió header Content-Type en `netlify.toml` para `/docs/*.html`

### 36.5 Fix extensiones dobles

- 4 de 5 capturas del informe se subieron con extensión `.png.png` — renombradas a `.png` correcto.

### 36.6 Archivos modificados
- `src/pages/features/evidencia.astro` — reestructuración completa
- `netlify.toml` — header Content-Type para docs HTML
- `public/videos/features/evidencia-100k-perdida.mp4`
- `public/images/evidence/evidencia-100k-informe-*.png` (5 capturas)
- `public/images/evidence/evidencia-100k-html-transacciones.png`
- `public/docs/evidencia-100k-historial-transacciones.html`

### 36.7 Commits asociados
- `Evidencia: sustituir placeholder por vídeo real 100k pérdida`
- `Evidencia: igualar embed vídeo con precisión y hyperclose (compact + expand)`
- `Evidencia: informe MT5 100k debajo del vídeo, eliminar sección 50K obsoleta`
- `Evidencia: acordeón HTML transacciones + descarga informe + fix content-type`
- `Evidencia: fix encoding HTML transacciones (UTF-16 LE original)`
- `Evidencia: enlace guía visual de logs (precisión)`

### 36.8 Pendiente
- Vídeo de ganancias (+1.111€, ActivTrades, 20 lotes) como vídeo secundario
- ~~Sección "Auditoría" con contenido propio~~ → Completada en §37

---

## 37) Refinamiento completo micropáginas + footer + legal + navegación (31 Ene 2026)

Sesión de pulido integral de las 4 micropáginas, navegación, footer y páginas legales.

### 37.1 Evidencia — reestructuración y auditoría

**Estructura final (patrón Hero → Demo → Qué puedes comprobar → Proof sections → CTA):**
1. Hero simplificado: "Cada cierre y cada bloqueo queda registrado en panel, logs y reporte oficial MT5."
2. Demo vídeo 100k con autoplay/hashchange
3. "Qué puedes comprobar" como guía de navegación (4 enlaces)
4. Sección "Informe oficial MT5" con acordeón dentro (5 capturas)
5. Sección "Historial de transacciones" con acordeón dentro (captura + HTML descargable)
6. Sección "Auditoría: la prueba no es nuestra" — **nuevo contenido completo:**
   - Hook: "MetaTrader documenta. tevsys ejecuta."
   - "Para quién": traders retail, gestoras, prop firms, academias
   - "Dos capas de evidencia": MT5 (qué ocurrió) + logs tevsys (por qué)
   - "Todo lo de arriba es la prueba": +50 operativas documentadas
   - Enlace a Precisión operativa 49
   - Etiquetas amarillas `.audit-label` (uppercase, #f5b041)
7. CTA final

**Card home (Evidencia verificable):**
- Datos concretos: "100.000€ · 20 lotes · Apertura Wall Street. Error: 0,0072%."
- Susurro: "El desafío está servido. Para ti o para quien te audite."
- Clase `.feature-card__whisper` (italic, 0.92rem, opacity 0.7)

### 37.2 Precisión — vídeo alta volatilidad elevado

- Demo alta volatilidad elevada de acordeón a sección propia con embed visible
- Nuevo `<section id="precision-volatilidad">` con hook: "Límite ±1,50% · Cierre en +1,83% · Alta volatilidad geopolítica"
- Embed compacto con expand-on-play (mismo patrón que demo principal)
- Fix: "Límite -1,50%" → "Límite ±1,50%" (refleja límite bilateral)
- Auto-open de acordeón `#precision-49-evidence` y highlight de `#precision-stats` con `:has()` CSS

### 37.3 Home — consistencia cards

- Card Precisión: "error promedio" → "error medio" (consistencia con micropágina)

### 37.4 SML — limpieza para presentación

- **Eliminadas:** 4 secciones proof-detail con "Captura en preparación (Advanced/Pro)", placeholder de vídeo, sección "Qué puedes comprobar" con 4 enlaces a secciones eliminadas
- **Resultado:** Hero + "Qué podrás comprobar" (3 puntos concisos) + nota de estado + CTA
- ~100 líneas de CSS muerto eliminadas
- Página de ~245 líneas → 148 líneas

### 37.5 Navegación — eliminar "Acceso"

**Antes:** Inicio | Empresas | Acceso (botón) | Contacto  
**Después:** Inicio | Empresas | Contacto

- "Acceso" eliminado de `nav.js` y `footer.js` (sin destino propio hasta demo descargable)
- "Contacto" ahora apunta a `/company/contact` limpio (sin `?flow=acceso`)
- "Empresas" añadido al footer (antes solo estaba en nav)

### 37.6 Footer — legal y copyright

**Estructura grid (4 columnas):**
- Brand + contacto | Navegación | Producto | **Legal (nueva)**

**Columna Legal:**
- Aviso Legal → `/company/legal`
- Privacidad → `/company/privacidad`
- Términos de Uso → `/company/terminos`

**Copyright actualizado:** "Copyright © 2026 tevsys. Todos los derechos reservados."  
**Frase indie:** Aumentada de 0.95rem a 1.08rem con letter-spacing.

### 37.7 Páginas legales (3 nuevas)

| Página | Ruta | Contenido |
|--------|------|-----------|
| Aviso Legal | `/company/legal` | Titularidad, propiedad intelectual, limitación de responsabilidad |
| Privacidad | `/company/privacidad` | Responsable, datos recogidos, finalidad, derechos RGPD |
| Términos de Uso | `/company/terminos` | Objeto, naturaleza del producto, responsabilidad usuario, uso contenido |

Las tres incluyen: "Será ampliado con asesoramiento jurídico profesional antes del lanzamiento comercial." Estilo sobrio (sin marca amarilla), solo texto.

### 37.8 Archivos modificados
- `src/pages/features/evidencia.astro`
- `src/pages/features/precision.astro`
- `src/pages/features/sml.astro`
- `src/pages/index.astro`
- `src/config/nav.js`
- `src/config/footer.js`
- `src/components/core/Footer.astro`
- `src/pages/company/legal.astro` (reescrito)
- `src/pages/company/privacidad.astro` (nuevo)
- `src/pages/company/terminos.astro` (nuevo)

### 37.9 Commits asociados
- `evidencia: reestructurar página — Hero → Demo → Proof sections → Auditoría → CTA`
- `precisión: elevar vídeo alta volatilidad a sección propia + fix ±1,50%`
- `home: card evidencia con datos 100k + susurro auditoría`
- `home: card precisión "error promedio" → "error medio"`
- `sml: limpiar micro-página — eliminar placeholders y secciones vacías`
- `nav/footer: eliminar Acceso, añadir Empresas al footer, aumentar frase identidad`
- `footer: páginas legales (aviso, privacidad, términos) + enlaces + copyright completo`
- `footer: mover enlaces legales a columna propia en el grid`

### 37.10 Pendiente
- Vídeo ganancias 100k (+1.111€) como secundario en Evidencia
- Vídeo SML demo
- Asesoramiento jurídico para contenido legal definitivo

---

## 38) Feedback Angello + cards clicables + hook "Tu trading" + jerarquía sección valor (Mar 2026)

Sesión tras feedback de Angello (academia). Cambios aplicados; resto de sugerencias descartadas por alineamiento con estrategia.

### 38.1 Contexto — feedback Angello

Angello envió audio con feedback sobre la web (imágenes que no llaman, hook más directo, vídeos con voiceover, precios, sustituir mano por gráfico). Transcripción en docs. **Decisión:** aplicar lo que encaja (cards, hook, voiceover pendiente); descartar precios (estrategia demo-first), gráfico (mano aporta mensaje), cambios masivos.

**Cierre:** Mensaje firme a Angello: "Con esto cerramos esta ronda. No voy a seguir tocando la web; confío en lo que tenemos." Angello respondió: "al final es tu proyecto... si algún día hay yate, mejor todavía, yo te deseo lo mejor" — interpretado como desvinculación del proyecto. Sin resentimiento; se sigue adelante sin depender de academia.

### 38.2 Cards más clicables (Opción C — híbrido)

- **Flecha "→"** en esquina inferior derecha de cada card (visible, sobre fondo contenido)
- **Hover marcado:** borde amarillo `rgba(245,176,65,0.45)`, sombra, `translateY(-2px)`
- **Flecha en hover:** opacity 1, color tevsys amarillo
- Clase `.tevsys-card__arrow` con `position: absolute; bottom: 1rem; right: 1rem;`

### 38.3 Hero — hook "Tu trading"

- **Antes:** "Tu capital merece más que buenas intenciones"
- **Después:** "Tu trading merece más que buenas intenciones"
- **Racional:** "Trading" engloba actividad/oficio — traders individuales y empresas. Más inclusivo que "capital" (evita sonar solo recovery retail).

### 38.4 Sección valor — jerarquía visual

- **Título "¿Cuánto dinero has perdido por no parar a tiempo?":** `1.5rem` → `clamp(1.65rem, 3.5vw, 2rem)`, font-weight 700, margin-bottom 0.5rem
- **Párrafo hook:** clase `.feature-section__hook`, font-size 1rem, opacity 0.92 — claramente secundario

### 38.5 Archivos modificados
- `src/pages/index.astro` — cards (arrow + hover), jerarquía sección valor
- `src/components/sections/heros/HomeHeroSection.astro` — hook "Tu trading"

### 38.6 Commits asociados
- `home: cards más clicables — flecha + hover marcado (feedback Angello)`
- `home: mover flecha cards a esquina inferior derecha (mejor visibilidad)`
- `hero: "Tu capital" → "Tu trading merece más que buenas intenciones"`
- `home: jerarquía sección valor — pregunta más prominente, párrafo secundario`

### 38.7 Pendiente (pendiente de decisión)
- Vídeo "Guía rápida" o "Cómo funciona en 2 minutos" con voiceover — anunciado a Angello, por grabar
- Voiceover en vídeos existentes (sustituir música) — valorar
- Revisar tipografía — valorar

---

## 39) Hero subheadline "Pioneros" + nota MT5 + retroiluminación cards (31 Ene 2026)

Sesión de pulido visual: posicionamiento, legibilidad y consistencia de efectos hover.

### 39.1 Hero — subheadline "Pioneros"

- **Antes:** "Plataforma pionera en verificación de disciplina automatizada y gestión de riesgo para mercados financieros"
- **Después:** "Pioneros en verificación de disciplina automatizada y gestión de riesgo para mercados financieros"
- **Racional:** "Pioneros" como posicionamiento diferenciador (precisión documentada, HyperClose, SML, evidencia verificable). Se mantiene "disciplina" por ser central en el mensaje de tevsys.

### 39.2 Hero — nota plataformas más discreta

- **Texto:** "Disponible en MT5 · Próximamente: más plataformas" (debajo del botón Descargar demo)
- **Cambio:** `font-size: 0.84rem` → `0.76rem` — más sutil, no compite con el CTA

### 39.3 Plan cards — hover con retroiluminación

- **Card no clicable** (`cursor: default`); solo el botón "Elegir X" es clicable
- **Hover en la card:** borde amarillo, box-shadow con glow (`0 0 24px rgba(245,176,65,0.2)`), `translateY(-3px)` — efecto retroiluminado y 3D

### 39.4 Feature cards — mismo efecto retroiluminación

- **Unificación visual:** `.tevsys-card` (Precisión, HyperClose, SML, Evidencia) ahora usa el mismo efecto que plan cards
- **Hover:** box-shadow con glow amarillo + `translateY(-3px)` — consistencia entre secciones

### 39.5 Archivos modificados

- `src/components/sections/heros/HomeHeroSection.astro` — subheadline, nota MT5
- `src/pages/index.astro` — plan-card hover, tevsys-card hover

### 39.6 Commits asociados

- `feat(hero): subheadline Pioneros + reducir nota MT5`
- `feat(plan-cards): hover con retroiluminación y efecto 3D, solo botón clicable`
- `feat(cards): unificar efecto retroiluminación en feature cards`

---

## 40) Precisión — Vídeo guía logs visible (Feb 2026)

El vídeo de la guía de logs estaba oculto dentro de un acordeón. Para mejorar la atención y que el usuario vea que hay otro vídeo (además de demo rápida y demo volatilidad), se sacó el vídeo del acordeón y se muestra visible, con el mismo estilo compacto y comportamiento expand-on-play que los otros dos.

### 40.1 Cambio aplicado

- **Antes:** Vídeo `precision-logs-guide.mp4` dentro de acordeón "Ir a guía de logs" — solo visible al expandir
- **Después:** Vídeo visible en la sección "Sin humo: todo queda registrado", con hook "Guía visual — otro vídeo que te interesa"
- **Archivo:** `src/pages/features/precision.astro`

### 40.2 Commit asociado

- `feat(precision): mostrar vídeo guía logs visible — igual que demo rápida y volatilidad`

---

## 41) HyperClose — Vídeo semáforo visible en zona gris (Feb 2026)

Mismo patrón que Precisión §40: el vídeo del semáforo (3 niveles) estaba solo como enlace a la demo principal. Se añadió el vídeo embed visible en la sección "Semáforo de responsabilidad" (zona gris) para que el usuario vea que hay otro vídeo sin tener que hacer scroll.

### 41.1 Cambio aplicado

- **Sección:** "Semáforo de responsabilidad" (id hyperclose-semaphore)
- **Añadido:** Vídeo `hyperclose-demo.mp4` visible con hook "Los 3 niveles en vídeo — mismo que demo rápida"
- **Archivo:** `src/pages/features/hyperclose.astro`

---

## 42) Evidencia — Guía logs visible + bullet (Feb 2026)

Misma lógica que Precisión e HyperClose: vídeos visibles en secciones propias. Se añadió sección "Guía visual de logs" con vídeo embed y bullet en "Qué puedes comprobar".

### 42.1 Cambio aplicado

- **Bullet nuevo:** "Guía visual de logs (vídeo)" → #evidencia-logs
- **Sección nueva:** Vídeo `precision-logs-guide.mp4` visible, hook "Otro vídeo que te interesa"
- **Enlace:** "Ver precisión de cierre y trazabilidad en detalle" → /features/precision#precision-logs
- **Eliminado:** Link redundante en Historial transacciones
- **Archivo:** `src/pages/features/evidencia.astro`

### 42.2 Commit asociado

- `feat(evidencia): guía logs visible + bullet — misma lógica que Precisión e HyperClose`

---

## 43) Precisión — H1 con punch "SL de mantequilla" (Feb 2026)

Refuerzo del claim: diferenciación vs SL tradicional. Nuevo H1 directo, sin pedir perdón.

### 43.1 Cambio aplicado

- **Antes:** "Precisión de cierre: donde configuras, cerramos."
- **Después:** "Precisión de cierre. / Olvídate de los SL de mantequilla. / Cerramos donde configuras."
- **Archivo:** `src/pages/features/precision.astro`

### 43.2 Commit asociado

- `feat(precision): H1 con punch — olvídate de los SL de mantequilla`

---

## 44) Lemon Squeezy + botón Comprar Essential + interruptor (19 Mar 2026)

### 44.1 Integración Lemon Squeezy
- **Estado:** Cuenta creada, tienda tevsys.lemonsqueezy.com configurada, producto Essential en Draft.
- **Variantes:** Mensual 39€/mes, Anual 390€/año (2 meses gratis).
- **Pendiente:** Verificación de identidad (DNI) para poder publicar y cobrar.

### 44.2 Botón Comprar Essential en card
- **Ubicación:** `src/pages/index.astro` — card Essential.
- **Comportamiento:** Controlado por interruptor `checkoutEssentialReady` en `src/config/settings.js`.
  - `false`: Solo se muestra "Elegir Essential" (formulario contacto).
  - `true`: Se muestran "Comprar Essential" (checkout Lemon) + "Probar demo" (formulario).
- **Objetivo:** Evitar 404 hasta que Lemon esté verificado y el checkout link sea real.

### 44.3 Settings
- `checkoutEssentialReady: false` — poner `true` cuando Lemon esté listo.
- `checkoutEssentialUrl`: URL real de Lemon cuando se publique el producto.

### 44.4 Layout botones
- Botones apilados verticalmente (Comprar arriba, Probar demo abajo) para evitar texto partido en dos líneas.

### 44.5 Documentación
- **Proyecto TGP:** `docs/ESTADO_WEB_Y_LEMON_TEVSYS.md` — estado web + Lemon, interruptor, flujo, próximos pasos.
- **Proyecto TGP:** `docs/GUIA_LEMON_SQUEEZY_TEVSYS_PASO_A_PASO.md` — pasos Lemon, referencia al interruptor.

### 44.6 Commits asociados
- `feat(home): añadir botón Comprar Essential en la card + enlace Lemon`
- `fix(essential): ocultar botón Comprar hasta que Lemon esté verificado`

---

## 45) Webhook Lemon + Resend — claves automáticas (19 Mar 2026)

### 45.1 Endpoint webhook
- **Archivo:** `api/webhook-lemon.js` — recibe `order_created` de Lemon.
- **Flujo:** Lemon avisa → verifica firma → genera clave ESEMEN/ESEANU → envía email con Resend.
- **Despliegue:** Vercel (tevsys.io/api/webhook-lemon). Responde 405 a GET (correcto; solo acepta POST).

### 45.2 Variables de entorno (Vercel)
- `RESEND_API_KEY` — envío de emails.
- `LEMON_WEBHOOK_SECRET` — validación firma (mismo valor que en Lemon).

### 45.3 Email de licencia
- **Plantilla:** Editable en `api/webhook-lemon.js`, función `enviarEmail`.
- **Objetivo:** Email premium, nivel tevsys — copy cuidado, tagline, instrucciones claras.
- **Asunto:** "tevsys Essential — Tu licencia".

### 45.4 Documentación
- **Proyecto TGP:** `WEBHOOK_LEMON_LO_QUE_HEMOS_HECHO.md`, `WEBHOOK_LEMON_GUIA_PASO_A_PASO_SENCILLA.md`, `GUIA_FUNDADOR_PRIMERA_VENTA_Y_CONTINUIDAD.md`.
- **Checkpoint:** `FLUJO_VENTAS_LICENCIAS_PENDIENTE.md` actualizado con webhook operativo.

---

## 46) Evidencia — Operativa 4.56 Essential, 100 lotes (20 Mar 2026)

### 46.1 Nuevo bloque operativa 4.56
- **Objetivo:** Documentar caso extremo en Essential — mismo motor que planes superiores, credibilidad para cuenta más accesible.
- **Datos:** 100 lotes GER40, cuenta ~102k, límite +4%, cierre +4.095,10 €, desviación 95 €. Buffer 0,01% validado.
- **7 capturas:** Resumen, P&L, Long & Short, Symbols, Riesgos, Historial (100 lotes), Panel TEV·sys.
- **Imágenes:** `evidencia-4.56-01-resumen.png` a `evidencia-4.56-07-panel.png` en `public/images/evidence/`

### 46.2 Copy comercial
- **Enlace "Qué puedes comprobar":** "Cuenta Essential: 100 lotes, cierre con 95 € de precisión." → `#evidencia-4-56`
- **Subtítulo bloque:** "Nuestra versión Essential. Con el caso más extremo. Evidencia por capturas e informe oficial MT5."
- **Auditoría:** Actualizado a 56 operativas documentadas, incluyendo caso extremo 100 lotes.

### 46.3 Archivos modificados
- `src/pages/features/evidencia.astro`
- `src/pages/features/precision.astro` (55 → 56 operativas)
- `src/pages/index.astro` (55 → 56 operativas)
- `public/images/evidence/evidencia-4.56-*.png` (7 archivos)

### 46.4 Documentación actualizada
- PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md (§7.4, §16)
- CONTENIDO_WEB_TEVSYS_LANDING.md
- CHECKLIST_WEB_TEVSYS_ANTES_REUNION_ACADEMIA.md
- ESTRATEGIA_ACADEMIAS_TEVSYS.md (proyecto TGP)

### 46.5 Commits asociados
- `feat(evidencia): operativa 4.56 — Essential, 100 lotes, copy comercial`

---

## 47) SEO y Vercel Web Analytics (Mar 2026)

### 47.1 SEO — meta tags y robots.txt
- **settings.js:** Título y descripción globales orientados a búsquedas (protección capital, límites automáticos MT5, 56 operativas).
- **contact.astro:** Corregido título "Astro Odyssey Theme" → "Contacto y demo | tevsys". Descripción con keywords.
- **robots.txt:** Creado en `public/robots.txt`. Permite todo, referencia sitemap.

### 47.2 Vercel Web Analytics
- **Paquete:** `@vercel/analytics` en dependencias.
- **Integración:** `inject()` en `src/layouts/Base.astro` (script antes de `</body>`).
- **Activación:** Habilitar Web Analytics en Vercel → proyecto → pestaña Analytics.
- **Métricas:** Visitantes únicos, vistas de página, páginas más visitadas, referrers. Gratis en plan Hobby.

### 47.3 Archivos modificados
- `src/config/settings.js`
- `src/pages/company/contact.astro`
- `public/robots.txt` (nuevo)
- `package.json` (@vercel/analytics)
- `src/layouts/Base.astro`

### 47.4 Documentación
- `docs/SEO_ANALYTICS_TEVSYS.md` (nuevo)
- `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` (§1, §17)
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md`

### 47.5 Commits asociados
- `feat: SEO (meta, robots.txt, contacto) + Vercel Analytics`

---

## 48) Google Search Console, sitemap estático, Schema y Core Web Vitals (Mar 2026)

### 48.1 Google Search Console
- **Verificación:** Archivo `public/google644b0bf8f5617256.html` (método HTML file).
- **Sitemap:** Enviado `sitemap.xml` (éxito, 27 páginas detectadas).
- **Indexación:** Solicitada home + precision, hyperclose, sml, evidencia, contact, instalacion.
- **URL:** [search.google.com/search-console](https://search.google.com/search-console). Propiedad `https://www.tevsys.io/`.

### 48.2 Sitemap estático
- **Problema:** `sitemap-index.xml` (Astro @astrojs/sitemap v0.1) devolvía 404 en producción.
- **Solución:** Sitemap estático `public/sitemap.xml` con 11 URLs principales.
- **robots.txt:** Actualizado a `Sitemap: https://www.tevsys.io/sitemap.xml`.

### 48.3 Keyword y Schema
- **settings.js:** Descripción con "disciplina en el trading" al inicio.
- **BaseHead.astro:** Schema JSON-LD `SoftwareApplication` en home (applicationCategory, operatingSystem, offers).

### 48.4 Optimización imágenes (Core Web Vitals)
- **Problema:** LCP 15,6 s, ~5 MB imágenes (PageSpeed Insights).
- **Cambios:**
  - Hero: `fetchpriority="high"`, `decoding="async"`, `width`/`height`, preload WebP en home.
  - Cards y planes: `width`/`height`, `loading="lazy"`, `decoding="async"`.
  - `<picture>` con WebP + fallback PNG para hero, cards, planes.
  - Script `scripts/optimize-images.js`: genera WebP con sharp (max 1200px hero, 800px resto).
- **Build:** `prebuild` ejecuta `node scripts/optimize-images.js` antes de `astro build`.
- **Archivos:** HomeHeroSection.astro, index.astro, BaseHead.astro, package.json, scripts/optimize-images.js.

### 48.5 Documentación
- `docs/SEO_ANALYTICS_TEVSYS.md` (secciones Search Console, sitemap, Performance)
- `docs/PERFORMANCE_IMAGENES_TEVSYS.md` (nuevo)
- PROMPT_MAESTRO §17
- ARREGLOS_WEB, CHECKLIST_WEB (TGP)

### 48.7 Paso 2 — preconnect fuentes (render-blocking)
- BaseHead: `preconnect` a fonts.googleapis.com y fonts.gstatic.com.
- Reduce tiempo de espera antes de cargar la fuente Outfit.

### 48.8 Verificación HTML tag (respaldo)
- BaseHead: `<meta name="google-site-verification" content="0xNV257HhIawlZd5KGvnrpi6ZUfVmlZL2OxE5PDiGlE" />`
- Doble verificación: archivo HTML + meta tag. Si se borra el archivo, sigue verificada.

### 48.9 WebP ampliado (todas las imágenes)
- Script `optimize-images.js` ampliado: ~40 imágenes (logo, contact form, evidencia, hyperclose, precision).
- HTML actualizado: Logo.astro, contact.astro (dinámico por plan), evidencia, hyperclose, precision con `<picture>` WebP.
- width/height en todas para evitar CLS.

### 48.10 Checklist Search Console (5 puntos)
1. **Verificación:** HTML file + meta tag (respaldo) ✓
2. **International targeting:** No disponible en esta propiedad — omitido
3. **Pages:** Processing (revisar en 1–2 días)
4. **Security & Manual Actions:** No issues detected ✓
5. **Associations:** No aplica (solo Vercel Analytics, no Google Analytics)

### 48.11 Commits sugeridos
- `feat(seo): verificación meta tag Search Console + WebP ampliado`
- `perf(images): WebP para evidencia, hyperclose, precision, contact, logo`

---

## 49) Guía de configuración, flujo demo y estrategia spam (21 Mar 2026)

### 49.1 Nueva página /configuracion
- **Archivo:** `src/pages/configuracion.astro`
- **Objetivo:** Guía de configuración de límites y panel tras instalar. Vídeo Drive embebido (tevsys_Guia_Rapida_Configuracion.mp4, 2:36 min, Essential, fin de semana).
- **Estructura:** Hero, vídeo iframe, enlace fallback si no carga, CTA Solicitar demo.
- **URL:** https://www.tevsys.io/configuracion

### 49.2 Footer y instalación
- **footer.js:** Enlace "Guía de configuración" en columna Producto (debajo de "Cómo instalar").
- **instalacion.astro:** Nueva sección "Paso 2 — Guía de configuración" con enlace a /configuracion (entre vídeo instalación y pasos resumidos).

### 49.3 Formulario demo — promesa explícita
- **contact.astro flow=demo:** Intro actualizado: "Rellena el formulario. Te enviaremos la demo y las guías de instalación y configuración."
- Aplica a genérico y a intros desde features (se añade la promesa al final).

### 49.4 Estrategia spam — Correo 1 + Correo 2
- **Problema:** Emails de demo caen en correo no deseado (links, Drive, etc.).
- **Solución:** Flujo de dos correos:
  - **Correo 1 (pre-aviso):** Breve, sin links. "En el próximo correo te envío la demo y las guías. Si no lo ves, revisa spam."
  - **Correo 2:** Demo con links (Drive, instalación, configuración).
- **Doc:** `LINKS_PARA_ENVIAR_DEMO_TEVSYS.md` actualizado con Correo 1, Correo 2, link configuración en todas las plantillas, checklist.

### 49.5 Links obligatorios en emails a leads
- Descarga: link Drive al .ex5
- Instalación: https://www.tevsys.io/instalacion
- Configuración: https://www.tevsys.io/configuracion (nuevo)

### 49.6 Archivos tocados
- `src/pages/configuracion.astro` (nuevo)
- `src/config/footer.js`
- `src/pages/instalacion.astro`
- `src/pages/company/contact.astro`
- `public/sitemap.xml` (añadida URL /configuracion)
- `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`

### 49.7 Docs proyecto TGP
- `LINKS_PARA_ENVIAR_DEMO_TEVSYS.md` — Correo 1, Correo 2, link config en plantillas
- `PLANTILLA_EMAIL_DEMO_TEVSYS.md` — link configuración añadido, nota estrategia spam

---

## 50) Lista de precios oficial — capital con margen 20% (19 Mar 2026)

### 50.1 Decisión de producto
- **Capital por tier:** Essential 30.000 € (antes 25k), Advanced 120.000 € (antes 100k), Pro 240.000 € (antes 200k), Pro Multi 120.000 € por cuenta.
- **Margen 20% sobre nominal:** 25k→30k, 100k→120k, 200k→240k. Permite fase examen o beneficio sin cambiar de plan al primer 1% de ganancia.
- **Estado:** Lista oficial para web y EA (checkpoint 19 Mar 2026). Fuente de verdad: `PLANES_PRECIOS_FEATURES_TEVSYS.md` (proyecto TGP).

### 50.2 Archivos web actualizados
- `src/pages/precios.astro` — capital en cards (30k, 120k, 240k).
- `src/components/forms/ContactForm.astro` — límites 30000, 120000, 240000; recomendación por capital; opciones select.

### 50.3 Docs proyecto TGP actualizados
- `PLANES_PRECIOS_FEATURES_TEVSYS.md`, `Formato_Clave_Licencia_Capital_Por_Tier_TEVSYS.md`, `Resumen_Cuatro_Planes_TEVSYS_Para_Clase.md`, `PITCH_DECK_TEVSYS_TODAS_LAS_SLIDES.md`, `PLAN_SISTEMA_LICENCIAS_PRO_MULTI_EA.md`, `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md`.
- *(29 mar 2026)* En repo TGP: `VALIDACION_CAPITAL_TIER_PRICING.md` **eliminado** (precios desactualizados). Fuente única de importes en TGP: `PLANES_PRECIOS_FEATURES_TEVSYS.md`; ver también `docs/PLAN_MQL5_MARKET_TEVSYS.md` §0.

### 50.4 PROMPT_MAESTRO_DEEPSEEK
- Sección §6 "Lista de precios oficial" añadida con tabla y nota del margen 20%.

---

## 51) Política fidelidad: 6 meses en vez de año completo (19 Mar 2026)

### 51.1 Decisión
- **Antes:** Año 1 lanzamiento; si renuevas, mantienes precio año 2 (24 meses total).
- **Ahora:** Año 1 lanzamiento; si renuevas, mantienes precio 6 meses más (18 meses total); a partir de mes 19, estándar.
- **Razón:** Premiar fidelidad de forma sostenible. 18 meses pagando = validación suficiente; transición a estándar más temprana.

### 51.2 Archivos actualizados
- `src/pages/precios.astro` — lead, subtítulo, nota, labels "Estándar (desde 18 meses)".
- `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` — sección §6 fidelidad.
- Proyecto TGP: `PLANES_PRECIOS_FEATURES_TEVSYS.md`, `Resumen_Cuatro_Planes_TEVSYS_Para_Clase.md`, `PITCH_DECK_TEVSYS_TODAS_LAS_SLIDES.md`.

---

## 52) Flow lista de espera, link amarillo precios, redundancia Pro Multi (22 Mar 2026)

### 52.1 Formulario adaptado para flow=lista
- **Origen:** Enlace "escríbenos para apuntarte" en `/precios` → formulario específico para lista de espera.
- **URL:** `/company/contact?flow=lista`
- **Título:** "Lista de espera Advanced y Pro"
- **Intro:** "Apúntate a la lista de espera. Te avisaremos por email cuando Advanced y Pro estén disponibles."
- **Formulario:** Select "¿En qué plan estás interesado?" (Advanced / Pro / Ambos). Badge "Lista de espera — indica tu plan de interés abajo."
- **Thank-you:** "Te hemos añadido a la lista de espera. Te avisaremos por email cuando Advanced y Pro estén disponibles."
- **Formspree:** Recibe `Flow: lista`, `Plan: advanced|pro|ambos`.

### 52.2 Link "escríbenos para apuntarte" en amarillo
- **Archivo:** `src/pages/precios.astro`
- **Cambio:** Clase `precios-desc__link` con color #f5b041, hover underline. Link a `/company/contact?flow=lista`.

### 52.3 Redundancia Pro Multi 2/3
- Eliminado bullet repetido "2 cuentas MT5 hasta 120k € cada una" / "3 cuentas MT5 hasta 120k € cada una". La info ya está en CUENTAS y CAPITAL MÁX. POR CUENTA.

### 52.4 Archivos tocados
- `src/pages/company/contact.astro` — bloque flow=lista
- `src/components/forms/ContactForm.astro` — select plan lista, validación, allowNoPlan
- `src/pages/company/contact-thank-you.astro` — mensaje flow=lista
- `src/pages/precios.astro` — link amarillo, redundancia Pro Multi

---

## 53) Instrucciones primera vez con licencia + WebRequest (23 Mar 2026)

### 53.1 Contexto
- El EA valida licencias vía API (`https://tevsys.io/api/validate`). Los compradores **deben añadir tevsys.io** en MT5 (Opciones → Asesores Expertos → Permitir WebRequest) para que funcione.
- Demo (LicenseKey vacío) no requiere WebRequest; solo los que compran.

### 53.2 Email webhook actualizado
- **Archivo:** `api/webhook-lemon.js` — función `buildEmailHtml()`
- **Cambio:** Instrucciones ampliadas a 4 pasos: (1) Herramientas → Opciones → Asesores Expertos; (2) Activar comercio algorítmico; (3) Activar WebRequest y añadir `https://tevsys.io`; (4) Pegar clave en License Key (F7).

### 53.3 Nuevo doc
- `docs/INSTRUCCIONES_PRIMERA_VEZ_CON_LICENCIA_TEVSYS.md` — Los 3 pasos obligatorios para compradores. Copia en proyecto TGP.

### 53.4 Vídeo pendiente
- Crear vídeo "Primera vez con licencia" (1–2 min): trading algorítmico, WebRequest + tevsys.io, pegar clave.
- Uso: enviar a compradores, colgar en web (footer Guías). Ver PROMPT_MAESTRO §9 Vídeos pendientes.

### 53.5 PROMPT_MAESTRO actualizado
- Sección Lemon/Webhook: email con 4 pasos, BD Upstash.
- Sección instalación: nota demo vs licencia.
- Sección vídeos pendientes: vídeo "Primera vez con licencia".
- Footer: futuro enlace "Activación con licencia".
- Doc referencia: INSTRUCCIONES_PRIMERA_VEZ_CON_LICENCIA_TEVSYS.md.

---

## 54) Email licencia Essential — cierre soporte “opción B” (25 Mar 2026)

### 54.1 Contexto
- Tras la compra (Lemon → webhook → Resend), el comprador recibe HTML generado en `api/webhook-lemon.js` (`buildEmailHtml`).
- Se unifica el cierre de soporte con copy acordado: cercanía sin prometer atención instantánea ni depender del verbo “personalmente” a escala.

### 54.2 Texto del cierre (orden en el email)
1. *Aquí estamos para lo que necesites:*
2. Enlace mailto / texto destacado: **info@tevsys.io**
3. *Te leemos y te respondemos en cuanto podamos.*
4. Firma: *— Gabi · tevsys*

### 54.3 Archivo
- `api/webhook-lemon.js` — comentario en código: copy acordado, expectativa de respuesta sin SLA agresivo.

### 54.4 Docs y proyecto TGP
- Proyecto TGP: `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` (CHANGELOG 25 Mar, punto 8), `CHECKPOINT_V11_SESION_25MAR2026_ESSENTIAL_ADVANCED.md` §8, `ESTADO_WEB_Y_LEMON_TEVSYS.md`, `WEBHOOK_LEMON_LO_QUE_HEMOS_HECHO.md`, `CHECKPOINT_24MAR2026_LEMON_RESEND_FLUJO_COMPLETO.md` §6.1.
- **Deploy:** Redeploy en Vercel para que el endpoint en producción envíe el HTML actualizado.

---

## 55) /instalación — paso WebRequest en lista + vídeo pendiente de renovar (25 Mar 2026)

### 55.1 Motivo
- Con licencia, el EA valida vía API: hace falta **Permitir WebRequest** y URL `https://tevsys.io` en MT5. El vídeo `instalacion-demo.mp4` se grabó antes de unificar este mensaje en la guía pública.

### 55.2 Cambios en web
- **`src/pages/instalacion.astro`:** Lista de pasos pasa a **9** (nuevo paso 4: WebRequest + URL). Meta description y lead actualizados. Bajo el título del vídeo: aviso de que el **vídeo aún no muestra** ese paso y que la lista es la referencia hasta nueva grabación.

### 55.3 Pendiente (fundador / producción)
- Regrabar o editar `public/videos/features/instalacion-demo.mp4` mostrando en Opciones → Asesores Expertos: (1) trading algorítmico ya mostrado, (2) **Permitir WebRequest** + campo URL `https://tevsys.io`. Subir archivo al repo y quitar o suavizar el aviso de desfase en la página.

### 55.4 Docs
- `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` §7.5 y §15.8. `AGENDA_GABI.md` (proyecto TGP).

---

## 56) Email licencia — escenario demo/no-demo + enlace descarga configurable (Mar 2026)

### 56.1 Contexto de producto
- En compras reales aparecen dos escenarios: (A) cliente que **ya tenía demo instalada**; (B) cliente que **compra directo** y no tiene el `.ex5`.
- El mail automático debía cubrir ambos sin romper el flujo actual (Lemon → webhook → clave → BD → Resend).

### 56.2 Cambio aplicado en webhook
- **Archivo:** `api/webhook-lemon.js` (`buildEmailHtml`).
- Se añade bloque previo a la clave:
  - “Si ya tienes tevsys instalado por la demo, puedes usar ese mismo archivo.”
  - Si no lo tiene, se muestra descarga directa del `.ex5` **si existe variable**.
- `buildEmailHtml` ahora recibe `downloadUrl` para renderizar el bloque de descarga de forma condicional.

### 56.3 Dónde va cada link y en qué escenario
- **`TEVSYS_DOWNLOAD_EX5_URL` configurada (Vercel):**
  - El mail muestra enlace **Descargar tevsys (.ex5)** para clientes sin demo previa.
  - Clientes con demo pueden ignorar descarga y seguir con activación.
- **`TEVSYS_DOWNLOAD_EX5_URL` no configurada:**
  - El mail muestra fallback a `info@tevsys.io` para solicitar el enlace.
  - El resto del flujo (clave + activación + guía) sigue operativo.
- **Guía instalación (siempre):** `https://www.tevsys.io/instalacion`.
- **WebRequest (licencia):** sigue indicado en pasos de activación (`https://tevsys.io` en lista de URLs).

### 56.4 Operación y despliegue
- No cambia la lógica de negocio del webhook (clave/BD/envío), solo copy+render condicional del bloque descarga.
- Para ver el enlace directo en producción: definir `TEVSYS_DOWNLOAD_EX5_URL` y redeploy.

---

## 57) Vídeo HyperClose + precisión milimétrica — producción Mar 2026 (operativa real 25 Mar)

### 57.1 Objetivo del vídeo
- **Un solo metraje** que enlace **cierre por límite con desviación documentada** (~1,31 € sobre -1,00% en cuenta ~106,4k €, **15 lotes GER40**, apertura Wall Street / alta volatilidad) con **HyperClose en acción**: **3 niveles de semáforo** + ráfaga desde **caja de herramientas** (cierres en ms sin nuevos modales tras el 3.er nivel) + **CTA de verificación** alineado con la ficha web.
- **Duración publicada (export final):** **2:23**.
- **Audio:** pista **instrumental** (p. ej. *Symbol*), **sin voz** en off.

### 57.2 Evidencia que lo respalda (MT5)
- **Cuenta demo ActivTrades** `#6216264`, informe **ReportHistory-6216264.html** (export **2026.03.25 16:10**).
- **Operativa:** compra **10** lotes **2026.03.25 15:25:41** + compra **5** lotes **15:26:25**; cierre **sell 15** **16:07:23**, P&L **-1.066,05 €**; balance de referencia en tabla **106.474,20 €** → **105.408,15 €** (desviación ~**1,31 €** vs -1,00% teórico sobre la base de cálculo).
- **Archivo local de referencia (PC fundador):** `Desktop/trade reports para evidencias de precisión milimétrica/operativas precisión 2026/ReportHistory-6216264.html`.

### 57.3 Overlays — texto exacto en pantalla (orden de aparición)

*Copy tal como en el vídeo exportado (2:23). La numeración sigue el guión de edición; no existe tarjeta “12”.*

1. `alta volatilidad · apertura wall street`
2. `balance de la cuenta · 106.474,20 €`
3. `primera entrada · ger40 · 10 lotes · compra`
4. `segunda entrada · ger40 · 5 lotes · compra`
5. `límite pérdida diario · -1,00% · configurado y protegido`
6. `hemos acortado tiempos muertos · comprueba la hora del pc`
7. `cálculo en curso · cierre inminente`
8. `desviación de cierre · 1,31 € · 15 lotes · apertura wall street`
9. `ahora verás hyperclose en acción`
10. `ahora verás hyperclose en acción` *(segunda aparición / beat en el montaje)*
11. `abro operación · bloqueo por límite alcanzado · cierre en ms · semáforo nivel 1`
13. `2.º intento · bloqueo por límite alcanzado · cierre en ms · semáforo nivel 2`
14. `3.er intento · bloqueo por límite alcanzado · cierre en ms · semáforo nivel 3`
15. `fíjate en la caja de herramientas ahora  ( abro varias operaciones para que se vea como las cierra siempre )`
16. `7 intentos. 7 cierres. Cero dudas. — tevsys disciplina automatizada 🎯`
17. `compruébalo tú mismo · informe oficial mt5 y html enlazados bajo el vídeo`

### 57.4 Notas de montaje (Clipchamp)
- **Saltos temporales:** overlay 6 (reloj del PC visible en grabación).
- **Pre-cierre:** overlay 7; **post-cierre numérico:** 8 → puente HyperClose 9–10 (misma frase dos veces si el plano lo pide).
- **Semáforos:** plantilla uniforme 11 / 13 / 14 (nivel 1: “abro operación…”; niveles 2 y 3: “N.º intento…”).
- **Tras semáforo 3:** overlay 15 (caja de herramientas + varias aperturas, cierre en ms sin nuevos modales).
- **CTA web:** overlay 17 coherente con acordeón **bajo** el vídeo en `/features/hyperclose`.

### 57.5 Estado web respecto al vídeo (Mar 2026 — revisado 26 Mar)
- **Guión/overlays:** sin cambio — §57.3.
- **`hyperclose.astro` (actual):** demo **2:23** en título; **hook sin cuenta ni broker**; **sin** nota pública de audio bajo el embed; hero `.feature-demo--hero` + `.demo-video--hero`. Acordeón: **galería 6** (informe MT5 + historial día) + enlace **HTML** redactado + línea opcional a Evidencia (demo 100k) + nota **MT5 vs HTML**. Bloque semáforo reutiliza el mismo MP4.
- **Pendiente operativo:** MP4 final en `public/videos/features/hyperclose-demo.mp4` si aún no sustituido; **PNG** de galería en `public/images/evidence/` (nombres en **§58.2**).

### 57.6 Docs cruzados
- **Proyecto TGP:** `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` (puntos 10–11) y `TGP_V11_CHECKPOINT_PRODUCCION.md` — vídeo §57 + **landing §58**.
- **Este changelog** es la fuente de verdad del **guión/overlays** y del **estado de la landing** asociada.

### 57.7 Archivos tocados (documentación)
- `docs/CHANGELOG-TEVSYS.md` (esta sección + §58)
- `docs/PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` §7.2
- `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` — estado HyperClose / Precisión / Evidencia
- `docs/ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` — referencia §57 y §58
- Proyecto TGP: `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V11.md`, `TGP_V11_CHECKPOINT_PRODUCCION.md`, `docs/CHECKPOINT_V11_SESION_25MAR2026_ESSENTIAL_ADVANCED.md` §9

---

## 58) Landing 25–26 Mar 2026 — HyperClose evidencia, Precisión/Evidencia hero, 59 operativas

### 58.1 Objetivo
- Alinear **micropáginas** con el vídeo **2:23** (§57) y con la **evidencia verificable** (HTML redactado + hueco para informe MT5).
- Unificar **protagonismo visual** del demo principal en **Precisión**, **Evidencia** y **HyperClose** (hero + halo dorado).
- Actualizar **número de operativas documentadas** a **59** (fuente: `PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3, proyecto TGP).

### 58.2 Archivos clave (repo `tevsys-landiing`)
| Archivo | Cambio resumido |
|---------|-----------------|
| `src/pages/features/hyperclose.astro` | Hero demo; acordeón galería 6; HTML + notas MT5/HTML; estilos galería / enlaces. |
| `src/pages/features/precision.astro` | Hero demo 100k; compactos ~31rem+sombra; volatilidad/cuenta pequeña copy y UX; orden lista “Qué puedes comprobar”; **59** en hook. |
| `src/pages/features/evidencia.astro` | Hero demo; estilos; **59** en auditoría; enlace HTML HyperClose + vuelta a vídeo. |
| `src/pages/index.astro` | **59** en card/stats. |
| `src/config/settings.js` | Meta description con **59** operativas. |
| `public/docs/evidencia-hyperclose-demo-historial-transacciones.html` | Export MT5 redactado (sesión 15 lotes; sin datos personales). |
| `public/images/evidence/` | Carpeta + `.gitkeep`; **pendiente** añadir PNG: `hyperclose-demo-informe-summary.png`, `hyperclose-demo-informe-profit-loss.png`, `hyperclose-demo-informe-long-short.png`, `hyperclose-demo-informe-symbols.png`, `hyperclose-demo-informe-risks.png`, `hyperclose-demo-mt5-historial-hoy.png`. |

### 58.3 Docs y checkpoints actualizados
- **Proyecto TGP:** `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` **§10–11**; `TGP_V11_CHECKPOINT_PRODUCCION.md` (bloque landing 26 Mar); `CHECKPOINT_V11_SESION_25MAR2026_ESSENTIAL_ADVANCED.md` **§9**.
- **Este repo:** `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`, `CONTENIDO_WEB_TEVSYS_LANDING.md`, `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`, `SEO_ANALYTICS_TEVSYS.md` (si aplica).

---

## 59) Pagos 26 Mar 2026 — transición Lemon → Paddle + política de reembolsos

### 59.1 Contexto y decisión
- Se recibe rechazo de Lemon por política/riesgo de categoría.
- Decisión operativa: mantener web y flujo de licencias, y migrar canal de pago a Paddle sin romper producción.

### 59.2 Alta y configuración Paddle (estado base)
- Cuenta Paddle creada y en revisión.
- Producto creado: `tevsys Essential`.
- Precios creados:
  - Mensual: `39 EUR`
  - Anual: `390 EUR`
- IDs guardados para integración:
  - `pro_...` (producto)
  - `pri_...` mensual / anual
- Destination webhook creado con 5 eventos:
  - `transaction.paid`
  - `transaction.payment_failed`
  - `subscription.created`
  - `subscription.updated`
  - `subscription.canceled`

### 59.3 Cambios de código en repo web
- **Nuevo endpoint:** `api/webhook-paddle.js`
  - Valida firma con `PADDLE_WEBHOOK_SECRET`.
  - Procesa `transaction.paid`.
  - Resuelve mensual/anual por `PADDLE_PRICE_ID_MONTHLY` / `PADDLE_PRICE_ID_YEARLY`.
  - Genera clave `ESEMEN/ESEANU`, persiste en Upstash y envía email con Resend.
  - Convive con `api/webhook-lemon.js` durante la migración (sin corte abrupto).

### 59.4 Legal para onboarding de pasarela
- Nueva página legal: `src/pages/company/reembolsos.astro`
- Enlace añadido en footer legal: `src/config/footer.js` → `/company/reembolsos`
- URL pública para pasarelas: `https://tevsys.io/company/reembolsos`

### 59.5 Variables de entorno (Paddle)
- `PADDLE_API_KEY`
- `PADDLE_WEBHOOK_SECRET`
- `PADDLE_PRODUCT_ID`
- `PADDLE_PRICE_ID_MONTHLY`
- `PADDLE_PRICE_ID_YEARLY`
- `PADDLE_CLIENT_TOKEN` (puede quedar pendiente temporalmente)

### 59.6 Pendiente inmediato de validación
- Ejecutar simulación `transaction.paid` en Paddle contra `/api/webhook-paddle`.
- Confirmar respuesta `200`.
- Realizar una compra de prueba end-to-end (pago → clave → BD → email).

---

## 60) Stripe (26 Mar 2026) — carril activo de pagos tras rechazos MoR

### 60.1 Contexto
- Se reciben rechazos de Lemon y Paddle (categoría/riesgo/dominio).
- Se decide pasar a **Stripe + gestoría propia** para recuperar control y evitar más dependencia de aprobación MoR.

### 60.2 Implementación técnica realizada
- **Nuevo endpoint:** `api/webhook-stripe.js`
  - Verificación firma `stripe-signature` con `STRIPE_WEBHOOK_SECRET`.
  - Eventos soportados: `invoice.paid`, `invoice.payment_failed`, `charge.refunded`, `customer.subscription.updated`, `customer.subscription.deleted`, `checkout.session.completed`.
  - En `invoice.paid`: mapea `STRIPE_PRICE_ID_MONTHLY/YEARLY` -> `ESEMEN/ESEANU`, guarda licencia y envía email (Resend).
- **Nuevo módulo:** `lib/salesLedger.js`
  - Upsert de libro de ventas en Redis (`tevsys:sale:*`) para conciliación/gestoría.

### 60.3 Dashboard Stripe (test)
- Producto creado: `tevsys Essential`.
- Precios creados: 39 EUR mensual y 390 EUR anual.
- Destination webhook activo: `tevsys webhook stripe test` -> `/api/webhook-stripe`.
- Payment Link de prueba creado y checkout test completado.

### 60.4 Estado de validación
- Endpoint publicado responde `GET 405` (ruta viva).
- Entrega `POST` actual: `401` firma inválida (pendiente ajuste fino de `STRIPE_WEBHOOK_SECRET`/entorno test).
- Pendiente para cerrar bloque:
  1) corregir firma hasta `200` en `invoice.paid`,
  2) verificar escritura BD (`licenses` + `sales_ledger`),
  3) verificar email automático.

---

## 61) Copy — 60 operativas documentadas (28 Mar 2026)

- **Fuente:** `PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.md` §3 (proyecto TGP); última incorporación relevante: operativa **4.60** (overnight + swap, FAQ §8).
- **Cambio:** número en copy público **59 → 60** (meta description, home, Precisión, Evidencia).
- **Archivos:** `src/config/settings.js`, `src/pages/index.astro`, `src/pages/features/precision.astro`, `src/pages/features/evidencia.astro`; docs `SEO_ANALYTICS_TEVSYS.md`, `CONTENIDO_WEB_TEVSYS_LANDING.md`, `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md`, `PROMPT_RESUMEN_DEEPSEEK_VIDEOS_PRECISION_HYPERCLOSE.md`, `CARDS-NEXT-PHASE.md`, `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md`; §3 Card 1 en este changelog.

---

## 62) Página vídeos YouTube — casos de cierre (abr 2026)

### 62.1 Objetivo
- **URL:** `/videos-cierre-youtube`
- Lista simple de **títulos + enlaces** a vídeos públicos (presentación ~3 min, parte 2 evidencia, futuros). Sin iframe embebido: abre YouTube en pestaña nueva.
- Enlaces `url` vacíos muestran *Próximamente* hasta pegar el `watch?v=…` en `src/pages/videos-cierre-youtube.astro` (array `videos`).

### 62.2 Archivos
- **`src/pages/videos-cierre-youtube.astro`** — contenido editable.
- **`src/config/footer.js`** — columna Guías: *Vídeos — casos de cierre (YouTube)*.
- **`src/pages/features/hyperclose.astro`** — bajo la demo MP4: *Ver más casos de cierre en YouTube*.

### 62.3 Miniaturas YouTube (abr 2026)
- **`/videos-cierre-youtube`:** tarjetas con **miniatura oficial** (`img.youtube.com/vi/…/hqdefault.jpg`), etiqueta **YouTube**, play overlay, CTA; grid 2 columnas en escritorio. Sin iframe (abre `watch` en nueva pestaña). Si `url` vacía: tarjeta *Próximamente* sin thumbnail.

### 62.3 bis Alta vídeo Nasdaq (27 abr 2026)
- Añadido vídeo **NAS100** en `src/pages/videos-cierre-youtube.astro`.
- URL: `https://youtu.be/GR8WrfeBU1E`
- Título mostrado: `Precisión Nasdaq 100 | Cierre documentado en MT5`
- Copy alineado al bloque multi-activo de `features/precision`.

### 62.4 Enlaces públicos (abr 2026)
- **Parte 1:** `https://youtu.be/Kz21Hm_ukZ0` (presentación, reedit modo espejo; doc TGP `ARTICULO_*`). *Histórico:* `xnZBaEruRNY` (versión anterior sin reedit).
- **Parte 2:** `https://youtu.be/QU1hC6SKg10` (cierre/evidencia ~2′22″). Ambos en `src/pages/videos-cierre-youtube.astro`.

### 62.4.1 Parte 1 — URL definitiva reedit (abr 2026)
- Sustituido enlace inicial por **`https://youtu.be/Kz21Hm_ukZ0`** (descripción larga en YouTube). `videos-cierre-youtube.astro` + `ARTICULO_*` + `AGENDA_GABI`.

### 62.5 Estilo marca YouTube (abr 2026)
- Etiquetas y acento “YouTube” en **crimson apagado** (`#9a4a52`), sin `#ff0033`. Kicker de sección: *Vídeos públicos* (menos ruido visual).

### 62.6 Navegación al pie — `/videos-cierre-youtube` (abr 2026)
- **Seguir explorando:** (con dos puntos / `:`) a la **izquierda**; a la **derecha en la misma franja** todos los enlaces clicables: **Inicio · Precisión · HyperClose · SML · Evidencia** (orden cards; envuelve en pantallas estrechas).

### 62.7 Hero `/videos-cierre-youtube` — centrado + tono (abr 2026)
- **text-align: center** en el bloque hero (antes el texto quedaba alineado a la izquierda dentro de la caja y parecía descuadrado).
- Título con más carácter: kicker *En nuestra casa*, H1 *Pruebas en vídeo.* + acento amarillo *Sin rodeos.*; lead con tono directo (pausa / rebobina / contrasta).

---

## 63) HyperClose demo MP4 — export «Video Project 090920» + lista YouTube tercer slot (8 abr 2026)

### 63.1 Problema (causa raíz)
- El `<video>` en `hyperclose.astro` apunta siempre a **`/videos/features/hyperclose-demo.mp4`**.
- Si el archivo en disco se renombra (p. ej. `Video Project 090920.mp4` con espacios) **sin** actualizar Astro, el reproductor queda en **404** aunque el commit suba bien.

### 63.2 Convención de archivo
- **Nombre en repo / URL pública:** `public/videos/features/hyperclose-demo.mp4` (sin espacios; estable para CDN y HTML).
- **Nombre de proyecto en export (Premiere, etc.):** puede ser *Video Project 090920* — anotar en guías; al desplegar, **sustituir** el binario conservando el nombre **`hyperclose-demo.mp4`** (o actualizar las dos rutas `<source>` en `hyperclose.astro` si algún día se cambia el nombre del fichero).

### 63.3 Contenido abr 2026
- Reemplazo del MP4 por versión **modo espejo + Manrope** (misma ruta `hyperclose-demo.mp4`).

### 63.4 `/videos-cierre-youtube`
- **Tercera tarjeta** en el array: *HyperClose · Precisión 15 lotes + semáforo (~2 min 23 s)* — **diferenciada** de parte 1/2 (artículo en vídeo).
- **URL publicada (8 abr 2026):** `https://youtu.be/jwEvJrohR4I` — título en YouTube *tevsys · HyperClose · Precisión 15 lotes + semáforo (~2:23)*; descripción alineada con transparencia de edición + enlaces tevsys.

---

## 64) `/instalacion` — jerarquía vídeos y pasos (abr 2026)

- **Vídeo principal:** badge *Vídeo en esta página* + nota WebRequest más corta; contorno suave al reproductor.
- **Paso 2 configuración:** CTA tipo tarjeta (borde/acento dorado, círculo play, título + duración) — sustituye el botón gris discreto.
- **Pasos resumidos:** lista en **tarjetas** (número + título + detalle breve); 8 pasos (carpeta datos + MQL5/Experts unificados en un bloque); intro de una línea al inicio.
