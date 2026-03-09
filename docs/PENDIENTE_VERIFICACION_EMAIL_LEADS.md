# Pendiente de decisión: Verificación de email (double opt-in) en formularios

**Estado:** Pendiente de decisión  
**Prioridad:** Después de estabilizar Essential al 100% y completar lo que falte en la web  
**Última revisión:** Ene 2026

---

## 1) Contexto

- Formularios actuales (contacto, empresas) envían a Formspree → correo corporativo (inbox).
- Sin verificación de email: cualquiera puede poner datos falsos.
- Objetivo futuro: base de datos de leads con emails verificados para tratar cada usuario de forma individual (email, número de cuenta de acceso, etc.).
- Escalar la captación sin acumular correos basura ni obligarnos a enviar demo a quien no es serio.

---

## 2) Respuestas del equipo (para contexto)

| Pregunta | Respuesta |
|----------|-----------|
| **Volumen esperado** | Progresivo. Ojalá empezar con ~200 leads/mes. Infraestructura que permita escalar. |
| **Gestión actual** | Formspree → correo corporativo (inbox). Hosting: ProfesionalHosting.com. |
| **Presupuesto** | €0 por ahora. No añadir gastos hasta que empiece a arrancar. Filosofía: como la web (Vercel, nuestras horas, sin inmersión económica). |

---

## 3) Situación actual

- **Formspree gratis:** 50 envíos/mes. Si hay más, hay que pagar (Bronze ~10 €/mes).
- **Formspree:** No incluye verificación de email (double opt-in).
- **Decisión aplicada:** No mencionar "enlace de descarga" en el copy del formulario para no atraer curiosos ni obligarnos a enviar a cuentas falsas.

---

## 4) Opciones valoradas (cuando se aborde)

### A. Mantener Formspree + manual (actual)
- Sin verificación. Revisión manual de leads.
- Si se superan 50/mes → upgrade Formspree (~10 €/mes).
- Adecuado mientras el volumen sea bajo.

### B. Brevo (ex-Sendinblue)
- Gratis hasta 300 correos/día.
- Tiene double opt-in en formularios propios.
- Integración en formulario custom vía API requiere desarrollo.
- Diseño de formularios menos flexible.

### C. Flujo propio en stack (Vercel + Resend)
- API route en Vercel recibe el envío.
- Resend: 3.000 emails/mes gratis para envío de verificación.
- Base de datos gratuita (Supabase, Vercel KV) para leads y estado `verified`.
- Requiere desarrollo, pero: €0 fijos, escala bien, encaja con filosofía del proyecto.

---

## 5) Recomendación (cuando se aborde)

1. **Ahora:** Mantener Formspree, gestión manual. Si se superan 50/mes, asumir coste como señal de tracción.
2. **Cuando haya que implementar verificación:** Flujo propio en Vercel (API + Resend + DB gratuita).

---

## 6) Caso específico: verificación antes de dar link de descarga demo

**Motivo:** Evitar cuentas falsas, bots y curiosos que descarguen la demo sin interés real.

**Opciones:**
- Formulario → email de verificación (double opt-in) → tras confirmar, enviar link de descarga.
- Formulario → respuesta manual; si el lead parece serio, enviar demo (actual).
- Formulario → email automático con link de verificación → solo tras verificar, link de descarga.

**Estado:** Pendiente de decisión. Conectar con la decisión general de verificación (§4, §5).

---

## 7) Qué falta decidir

- [ ] Momento de implementar verificación (cuando Essential estable + web completa).
- [ ] Si se hace: flujo propio vs. herramienta externa (Brevo, etc.).
- [ ] Si Formspree se mantiene o se sustituye por otro backend cuando se añada verificación.
- [ ] Verificación específica para descarga de demo (§6).

---

## 8) Referencias

- Formularios actuales: `src/pages/company/contact.astro`, `src/pages/company/empresas.astro`
- Formspree endpoint: `xzdjbenk` (config en ContactForm.astro)
- Documentación relacionada: `CHANGELOG-TEVSYS.md`, `RUTA_EMPRESAS_TRATAMIENTO_EVIDENCIAS_TEVSYS.md`
