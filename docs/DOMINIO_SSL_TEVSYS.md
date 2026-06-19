# Dominio y SSL — tevsys.io (canon infra web)

**Última actualización:** 19 jun 2026  
**Uso:** retomar DNS/SSL sin reconstruir el chat. **Retomar:** *«SSL tevsys»* / *«dominio apex»* → este MD.

---

## Estado actual (cerrado 19 jun 2026)

| URL | Estado |
|-----|--------|
| `https://tevsys.io` | Certificado válido · redirección **308** → `www` (Vercel) |
| `https://www.tevsys.io` | Certificado válido · producción |
| WebRequest MT5 (`https://tevsys.io` en guías) | Coherente — apex resuelve sin `ERR_TLS_CERT_ALTNAME_INVALID` |

**Validación:** navegador privado + fetch externo (19 jun 2026). Fundador confirma carga en ambas URLs.

---

## Qué fallaba

- **Síntoma:** `https://tevsys.io` (sin www) → `ERR_TLS_CERT_ALTNAME_INVALID`. `https://www.tevsys.io` OK.
- **Detectado por:** Juan Pérez (Axiom Labs) al revisar la web (~18 jun 2026).
- **Causa raíz:** en **Vercel** faltaba el dominio **`tevsys.io`** en el proyecto; solo estaba `www.tevsys.io`. El tráfico al apex llegaba a Vercel por IP pero sin certificado para ese hostname.
- **DNS Plesk:** los registros correctos **ya estaban** (o equivalentes) antes de la sesión; no fue necesario añadir registros nuevos en la práctica.

---

## Arquitectura (quién hace qué)

| Pieza | Proveedor | Rol |
|-------|-----------|-----|
| **Web (Astro)** | Vercel — proyecto *Aterrizaje de Tevsys* / `tevsys-landing` | Hosting + CDN + SSL |
| **DNS zona** | ProfesionalHosting — **Plesk** (`s7correo.profesionalhosting.com`) | Registros A/CNAME/MX/TXT |
| **Nameservers** | Tercero (ProfesionalHosting) — **no** Vercel | Correcto: correo sigue en hosting |
| **Correo** | Misma suscripción Plesk | MX/TXT sin tocar |

**No usar** la pantalla Vercel **«Registros DNS»** (pide cambiar NS a `ns1/ns2.vercel-dns.com`) salvo migración total de DNS — rompería riesgo de correo si no se replica MX/TXT.

---

## Registros DNS canónicos (Plesk — tevsys.io)

| Tipo | Host | Valor | Notas |
|------|------|-------|--------|
| **A** | `@` / `tevsys.io.` | `76.76.21.21` | Apex → Vercel |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Sin registro **A** en `www` |
| **MX / TXT** | — | Sin cambios | `info@tevsys.io`, SPF, DKIM, Resend |

**Aviso amarillo Plesk** («el dominio no resuelve a la IP del hosting»): **esperado** — la web ya no está en `168.119.197.211`; no «Restablecer» la zona.

**Ruta Plesk:** Suscripciones → tevsys.io → Configuración DNS / DNS Avanzada.

---

## Vercel — configuración dominios

1. **Settings → Domains** del proyecto: deben figurar **`tevsys.io`** y **`www.tevsys.io`** → Producción.
2. **`tevsys.io`:** redirige a **`www.tevsys.io`** (308).
3. **CDN:** activo en overview del dominio.
4. Tras añadir apex: esperar emisión SSL (minutos–horas) + **Refrescar** en Dominios.

**Canonical en código:** `src/config/settings.js` → `url: "https://www.tevsys.io"`.

**Guías / WebRequest:** siguen pidiendo `https://tevsys.io` (sin barra final) — válido con apex en Vercel.

---

## Qué hicimos en la sesión (19 jun 2026)

1. Añadir **`tevsys.io`** en Vercel Domains (faltaba).
2. Revisar Plesk — DNS ya correcto (A apex + CNAME www).
3. Soporte hosting (bot): confirmó procedimiento Plesk sin cambiar NS.
4. Verificación final: ambas URLs cargan con HTTPS.

**Mail Juan (18 jun):** ya avisado de que localizamos el fallo y lo corregíamos; **no** hace falta mail dedicado solo por SSL cerrado — mencionar en el siguiente hilo si aplica.

---

## Ticket soporte (plantilla — por si hace falta de nuevo)

```
Para tevsys.io (web en Vercel), sin cambiar nameservers:

1) A en @ (raíz) → 76.76.21.21
2) CNAME en www → cname.vercel-dns.com
   (eliminar A de www si existe)

No modificar MX ni TXT de correo.
```

---

## Docs cruzados

- **Axiom / Juan:** `docs/HANDOFF_AXIOM_LABS_JUAN_PEREZ.md` (repo TGP)
- **Analytics (tráfico propio):** `docs/SEO_ANALYTICS_TEVSYS.md` §3.1
- **Sesión web larga (cola):** `docs/QUE_CONTIENE_TGP_Modular_Skeleton_V12.md` → mapa *Sesión web larga*
