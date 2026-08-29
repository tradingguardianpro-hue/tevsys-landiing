# SEO, dominio, SSL y Vercel Web Analytics — tevsys

Documento técnico para desarrolladores e ingenieros.

**Dominio / SSL (apex + www, Plesk, Vercel):** `docs/DOMINIO_SSL_TEVSYS.md` — cerrado 19 jun 2026.

---

## 1. Meta tags (SEO)

### Fuente principal
- **Archivo:** `src/config/settings.js`
- **title:** `tevsys — Pioneros en disciplina automatizada verificada y gestión de riesgo · MT5`
- **description:** `Disciplina en el trading automatizada. Plataforma para MetaTrader 5: límites de pérdida y ganancia que se cumplen. Cierre preciso documentado. 114 operativas con evidencia verificable. Para traders, prop firms y auditorías.`

### Uso
- `BaseHead` consume estos valores por defecto.
- Páginas que definen `seo` propio (p. ej. `contact.astro`) sobrescriben título y descripción.

### Páginas con meta propia
| Página | Título | Nota |
|--------|--------|------|
| Contacto | Contacto y demo \| tevsys | Bug Astro Odyssey corregido (antes: "Contact \| Astro Odyssey Theme") |

---

## 2. robots.txt

- **Archivo:** `public/robots.txt`
- **Contenido:**
  ```
  User-agent: *
  Allow: /

  Sitemap: https://www.tevsys.io/sitemap.xml
  ```
- Accesible en `tevsys.io/robots.txt`.
- **Nota:** Sitemap dinámico (sitemap-index.xml) daba 404; se usa sitemap estático. Ver §6.

---

## 3. Vercel Web Analytics

### Integración
- **Paquete:** `@vercel/analytics` (dependencia en `package.json`)
- **Ubicación:** `src/layouts/Base.astro`, script antes de `</body>`:
  ```js
  import { inject } from '@vercel/analytics';
  inject();
  ```

### Activación
1. Vercel dashboard → proyecto tevsys-landiing
2. Pestaña **Analytics**
3. Activar **Web Analytics**

### Métricas
- Visitantes únicos
- Vistas de página
- Páginas más visitadas
- Referrers

Gratis en plan Hobby.

### 3.1 Tráfico propio — no se puede “reiniciar”; sí limpiar hacia delante (jun 2026)

**Acuerdo fundador (15 jun 2026):** implementar en **próxima sesión web larga**. **Prioridad producto > web** hasta ese día; este apartado es el canon operativo.

**Actualización 28 jun 2026:** bloque contención `#evidencia-contencion-489` y micro `/para-quien` — **publicados y documentados**.

**Actualización 24 jul 2026:** **analytics opt-out implementado** (`Base.astro` + `/go/evidencia-5min`). Cola §3.1 restante: FAQ acta AuditTrail.

**No existe** botón en Vercel para **borrar o reiniciar** el histórico en el mismo proyecto (Vercel community — sin ETA para exclusión permanente en dashboard).

**Lectura honesta (may 16 – jun 14):** ~76 visitantes / ~796 page views → **~10 PV/visitante** = revisión propia (PC + móvil). **mql5.com (7)** y **google.com (5)** incluyen probablemente al fundador (Market, pruebas). **Países** (ES ~83 %, US ~12 %, FR ~4 %, CA ~1 %) = volumen bajo; útil como **alerta** para preparar web (copy EN futuro, carga rápida, claims claros), no como KPI de crecimiento.

---

#### Los tres puntos (canon — sesión web)

| # | Qué | Para qué |
|---|-----|----------|
| **1** | **Línea base** — métricas interpretables solo desde **16 jun 2026** | Pasado contaminado; no usar top pages / países del mes previo como embudo |
| **2** | **Opt-out fundador** — ✅ **24 jul 2026** — `beforeSend` en `Base.astro` (+ redirect evidencia) + `localStorage va-disable` en PC y móvil | Tus visitas **dejan de contarse** hacia delante |
| **3** | **QA en preview** — diseño en `*.vercel.app`; `www.tevsys.io` solo tráfico real o con opt-out | Menos ruido mientras revisas |

---

#### Opt-out — implementado 24 jul 2026 (`Base.astro` + `/go/evidencia-5min`)

```js
import { inject } from '@vercel/analytics';

inject({
  beforeSend: (event) => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('va-disable')) {
      return null;
    }
    return event;
  },
});
```

**Tras deploy — una vez por navegador del fundador** (consola en `www.tevsys.io`):

```js
localStorage.setItem('va-disable', '1');
```

**Reactivar** en ese navegador (prueba): `localStorage.removeItem('va-disable');`

**Validar:** con `va-disable` activo, tus visitas no deben subir visitantes en Vercel; incógnito sin flag sí cuenta.

**Commit:** `web(tevsys): analytics opt-out va-disable para QA fundador`

### Proxies `/go/` — Cómo funciona home vs nav (23 ago 2026)

Misma idea que `/go/evidencia-5min`: pageview medible en Vercel Hobby + redirect.

| Ruta | Origen | Destino |
|------|--------|---------|
| `/go/como-funciona-home` | CTA mid-home *Ver cómo funciona →* | `/como-funciona` |
| `/go/como-funciona-operacion` | Chip mid-home *Operación abierta en finde…* | `/como-funciona#rama-operacion` |
| `/go/como-funciona-nav` | Header *Cómo funciona* | `/como-funciona` |

- `noindex` · opt-out `va-disable` · delay ~280 ms.
- En Analytics: comparar visitas a esas dos rutas (no solo `/como-funciona`).

**Commit:** `web(tevsys): measure como-funciona clicks via go home and nav proxies`

---

#### Sesión web larga — orden sugerido

1. ~~Analytics opt-out (§3.1)~~ — **hecho 24 jul 2026**  
2. ~~Bloque 4.89 Evidencia~~ — **hecho 28 jun 2026** (`HANDOFF_4.89_*` §13.1)  
3. ~~Micro `/para-quien`~~ — **hecho 28 jun 2026** (`CONTENIDO_WEB` § *Micro Para quién*)  
4. **FAQ — acta AuditTrail (jun 2026):** publicar frase canon en `PROMPT_MAESTRO` §21.5 («tevsys no solo aplica tus límites…») — home FAQ, `/auditoria-ia` o `/features/evidencia`; sin prometer portal auditoría abierto.  
5. Resto de cola web del día  

**Puntero repo TGP:** `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → *Sesión web larga*.

**No usar** Analytics como KPI comercial hasta varias semanas **post opt-out**.

---

## 4. Google Search Console

- **URL:** [search.google.com/search-console](https://search.google.com/search-console)
- **Propiedad:** `https://www.tevsys.io/`
- **Verificación:** (1) Archivo HTML `public/google644b0bf8f5617256.html`. (2) Meta tag en BaseHead (`content="0xNV257HhIawlZd5KGvnrpi6ZUfVmlZL2OxE5PDiGlE"`).
- **Sitemap enviado:** `sitemap.xml`
- **Indexación:** Solicitada para home y páginas clave (URL inspection → Request indexing)

### Checklist 5 puntos (20 Mar 2026)
| Punto | Estado |
|-------|--------|
| 1. Verificación HTML tag (respaldo) | ✓ Meta tag añadido en BaseHead |
| 2. International targeting | No disponible — omitido |
| 3. Pages | Processing; revisar en 1–2 días |
| 4. Security & Manual Actions | No issues detected ✓ |
| 5. Associations | No aplica (solo Vercel Analytics) |

---

## 5. Sitemap estático

- **Archivo:** `public/sitemap.xml`
- **URLs:** 11 páginas (home, features, contact, empresas, instalacion, legales).
- **Motivo:** El sitemap dinámico de @astrojs/sitemap v0.1 no se servía correctamente (404).

---

## 6. Schema JSON-LD (SoftwareApplication)

- **Ubicación:** `BaseHead.astro`, solo en home (`pathname === '/'`).
- **Contenido:** name, applicationCategory, operatingSystem, description, url, offers.

---

## 7. Core Web Vitals / optimización imágenes

- **Script:** `node scripts/optimize-images.js` (o `npm run image:optimize`).
- **prebuild:** Se ejecuta antes de `npm run build` para generar WebP.
- **Hero:** fetchpriority="high", preload WebP, width/height.
- **Cards/planes:** loading="lazy", width/height, picture con WebP.
- **Doc detallada:** `docs/PERFORMANCE_IMAGENES_TEVSYS.md`

---

## 8. Archivos implicados

| Archivo | Cambio |
|---------|--------|
| `src/config/settings.js` | title, description SEO, keyword disciplina |
| `src/pages/company/contact.astro` | meta propia |
| `public/robots.txt` | sitemap.xml |
| `public/sitemap.xml` | sitemap estático |
| `public/google644b0bf8f5617256.html` | verificación Search Console |
| `package.json` | @vercel/analytics, image:optimize, prebuild |
| `src/layouts/Base.astro` | inject Analytics |
| `src/components/head/BaseHead.astro` | Schema, preload LCP, meta verification, preconnect fuentes |
| `src/components/sections/heros/HomeHeroSection.astro` | picture WebP, fetchpriority, width/height |
| `src/pages/index.astro` | picture WebP, lazy, width/height en cards/planes |
| `scripts/optimize-images.js` | generación WebP con sharp |

---

## 9. Referencias

- CHANGELOG-TEVSYS.md §47, §48
- PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md §17
- CONTENIDO_WEB_TEVSYS_LANDING.md (sección SEO y analytics)
- PERFORMANCE_IMAGENES_TEVSYS.md (Core Web Vitals)
