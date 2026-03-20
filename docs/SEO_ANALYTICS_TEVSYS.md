# SEO y Vercel Web Analytics — tevsys

Documento técnico para desarrolladores e ingenieros.

---

## 1. Meta tags (SEO)

### Fuente principal
- **Archivo:** `src/config/settings.js`
- **title:** `tevsys — Protección de capital y límites automáticos para trading MT5`
- **description:** `Plataforma de disciplina automatizada para MetaTrader 5. Límites de pérdida y ganancia que se cumplen. Cierre preciso documentado. 56 operativas con evidencia verificable. Para traders, prop firms y auditorías.`

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

  Sitemap: https://www.tevsys.io/sitemap-index.xml
  ```
- Accesible en `tevsys.io/robots.txt`.

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

---

## 4. Archivos implicados

| Archivo | Cambio |
|---------|--------|
| `src/config/settings.js` | title, description SEO |
| `src/pages/company/contact.astro` | meta propia |
| `public/robots.txt` | nuevo |
| `package.json` | @vercel/analytics |
| `src/layouts/Base.astro` | inject Analytics |

---

## 5. Referencias

- CHANGELOG-TEVSYS.md §47
- PROMPT_MAESTRO_DEEPSEEK_TEVSYS.md §17
- CONTENIDO_WEB_TEVSYS_LANDING.md (sección SEO y analytics)
