# Autoprompt — web tevsys.io (motion, home, móvil)

**Uso:** pegar el bloque «COPIAR EN CHAT» en un chat nuevo. Repo web: `tevsys-landiing` (Astro). Estilos motion home: `src/styles/global.css`. Home: `src/pages/index.astro`. Header: `src/components/core/Header.astro`.

---

## COPIAR EN CHAT (nuevo contexto rápido)

Eres IA en el repo **tevsys-landiing** (web tevsys.io, tema oscuro). Objetivo inmediato: **ajustar motion en móvil** sin romper desktop.

**Hecho reciente (no repetir debate largo):**
- Burbujas detrás del bloque de cards (`.tevsys-home-mid-glow`): **gris instrumento**; **92s** + **118s** `linear`; mayor parte del tiempo en **márgenes** (fuera de cards), luego centro. **Móvil:** mismas duraciones. Ver **CHANGELOG-TEVSYS.md** § Motion «iteración 15–16 abr 2026».
- **19 abr 2026:** escáner del header — intensidad **restaurada**; duraciones **29,5s** (base) / **28s** (≥769px) / **23,5s** (≤768px). Entrada **«Web — coherencia tipográfica…»** en CHANGELOG + `MOTION_HOME_TEVSYS_HANDOFF_IA.md` § D.
- Documentación motion: `docs/MOTION_HOME_TEVSYS_HANDOFF_IA.md` + `docs/CHANGELOG-TEVSYS.md` + `docs/ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` § Motion mid-glow móvil.

**Intención producto (ajustes finos futuros — no tocar sin OK):**
- **Móvil:** pendiente de sesión dedicada si el escáner sigue sintiéndose a **trompicones** o el hero sigue flojo; evitar **más** estrés cerca del titular de valor y las cards salvo diagnóstico (prioridad **calma**).
- **Hero / franjas en pantalla estrecha:** si algo “se lee raro”, valorar **overrides solo `@media (max-width: 768px)`** o apagar capas decorativas selectivas, sin romper desktop.
- Respetar **`prefers-reduced-motion: reduce`**: ya apaga varias animaciones; no regresar eso.

**Archivos clave:** `src/styles/global.css` (bloques `tevsys-home-*`, `@media (max-width: 768px)`, header `#odysseyNavHeader.tevsys-header--home-scanner .tevsys-header-scanner`), `src/pages/index.astro`, `src/components/core/Header.astro`.

**No tocar sin OK:** copy institucional en `docs/CONTENIDO_WEB_TEVSYS_LANDING.md` (canónico también en repo TGP); no inventar claims.

---

## Lista de `.md` relacionados (leer según tarea)

### Repo `tevsys-landiing/docs/` (prioridad web)

| Archivo | Para qué |
|--------|-----------|
| `MOTION_HOME_TEVSYS_HANDOFF_IA.md` | Mapa de capas, duraciones, keyframes, decisiones máscara/burbujas |
| `CHANGELOG-TEVSYS.md` | Resumen numérico de ciclos y cambios recientes |
| `CONTENIDO_WEB_TEVSYS_LANDING.md` | Mensaje público, claims, coherencia copy |
| `PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md` | Narrativa §21 y contexto producto |
| `REFLEXION_DISENO_HERO_FOOTER_MAR2026.md` | Hero/footer, criterios diseño |
| `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` | Inventario toques web históricos |
| `DECISION_FLUJO_CARDS_EVIDENCIA_Y_MODAL.md` | Cards / evidencia / modal |
| `SEO_ANALYTICS_TEVSYS.md` | SEO / analytics |
| `PERFORMANCE_IMAGENES_TEVSYS.md` | Imágenes / rendimiento |
| `ESTRATEGIA_FAVICON_ICONOS_TEVSYS.md` | Favicon / iconos |
| `CARDS-NEXT-PHASE.md` | Siguiente fase cards |
| `GO-TO-MARKET-BETA-ESSENTIAL.md` | GTM beta |
| `SETUP_BD_LICENCIAS.md` / `PENDIENTE_VERIFICACION_EMAIL_LEADS.md` | Backend leads (si toca flujo) |

### Repo TGP (`poyecto TGP con cursor/docs/`) — alinear web con producto

| Archivo | Para qué |
|--------|-----------|
| `CONTENIDO_WEB_TEVSYS_LANDING.md` | Misma línea argumental (obligatorio si se opina de producto) |
| `QUE_CONTIENE_TGP_Modular_Skeleton_V11.md` | CHANGELOG web / correlato comercial |
| `WEB_SYNC_OPERATIVAS_60_TEVSYS_LANDIING.md` | Sync operativas ↔ web |
| `ARREGLOS_WEB_TEVSYS_TODOS_LOS_ARCHIVOS.md` | Espejo útil si se edita desde TGP |
| `ESTADO_WEB_Y_LEMON_TEVSYS.md` | Estado web + Lemon |
| `PROMPT_DEEPSEEK_WEB_TEVSYS_ESTADO_COMPLETO.md` | Estado web para terceros |
| `PLANES_PRECIOS_FEATURES_TEVSYS.md` | Planes / precios |
| `_vault/PRECISION_MILIMETRICA_EVIDENCIADA_CON_OPERATIVAS_REALES.MIRROR.md` o `PRECISION_MILIMETRICA_*.md` | Evidencias auditables |

---

## Cierre de este hilo (abr 2026)

- Motion mid-glow: **22s**, sin máscara; docs actualizados en este repo.
- **Móvil:** acordado hablar primero; criterio: más movimiento **solo header**, menos competencia cerca de titular + cards. Implementación **pendiente de OK explícito**.
