# Handoff — referencias visuales móvil (+ desktop) · 23 oct 2026

**Estado:** archivo de evidencia. **No** es orden de implementar ya.  
**Retomar:** *«móvil web»* · *«ref visual móvil»* · *«Mario web»* · *«halo móvil»*.

**Contexto:** reunión Raúl (amigo / capital). Sensación: web seria en PC bueno; en portátil/sol y en **móvil** se ve peor (oscuridad, descentrado, densidad). Socio de Raúl (**Mario**) entiende webs — mirada externa prevista. Fundador: poca energía; móvil apartado hasta ahora pero **mucho tráfico real** pasará por móvil.

---

## Carpetas (mismas capturas)

| Repo | Ruta |
|------|------|
| Landing (canónica web) | `tevsys-landiing/docs/ref-visual-movil-oct2026/` |
| Espejo TGP | `docs/ref-visual-web-movil-oct2026/` |

---

## Inventario de capturas

### Móvil (home `tevsys.io` · Android Chrome)

| Archivo | Qué muestra | Sensación fundador / nota |
|---------|-------------|---------------------------|
| `05-menu-hamburguesa-desplazado.jpg` | Menú ☰ abierto (Inicio… Contacto) | **Desplazado a la izquierda**; no centrado respecto a bordes / “12x”. La X y las pastillas “abrazan” la izquierda. |
| `03-home-hero-header-halo.jpg` | Hero + header + spinner carga | Halo **ámbar a la derecha**; contenido se siente **tirado**; hero con hueco de carga del media. |
| `01-home-cuerpo-texto.jpg` | Definición + bullets + Tu ID | **Mucho texto** en una sola pantalla; márgenes asimétricos (más aire a la derecha / apretado a la izquierda). |
| `02-home-pregunta-card-precision.jpg` | Pregunta + card 0,06 % | Cards / bloques con **márgenes irregulares**; oscuro + denso. |
| `04-home-cta-auditoria-desplazada.jpg` | CTA “Ver cómo funciona” + card auditoría | Card inferior **claramente desplazada a la izquierda**; gap negro grande a la derecha. |

### Desktop (referencia · zoom ~75 % — “cómo ve Gabi las webs”)

| Archivo | Qué muestra |
|---------|-------------|
| `desktop-01-home-arriba.png` | Home hero + definición (marca seria en pantalla grande) |
| `desktop-02-como-funciona-bloques.png` | Cómo funciona: swing / panel / desde cero |
| `desktop-03-panel-adapta.png` | Trozo scroll: “El panel se adapta…” (flujo visual denso, no “copy malo”) |

---

## Diagnóstico corto (llano)

1. **Alineación móvil (bug / deuda UX):** menú, cards y bloques no comparten el mismo eje; sensación de web “torcida” o tirada. Halo decorativo empeora el desequilibrio.
2. **Densidad de texto:** en móvil el mismo copy de desktop **llena** la pantalla → menos “llamada a clic / demo”. No implica borrar jerga técnica; sí **jerarquía** (menos a la vista, más bajo demanda).
3. **PC ≠ móvil:** al 75 % en monitor bueno = carta fuerte. Móvil = otra carta; hay que tratarla como **canal**, no como versión encogida.
4. **Marca:** seguir siendo tevsys (técnico, elegante). No clínica / portal genérico. Negro OK; blanco elegante = opción de mesa con Mario, no obligación inmediata.

---

## Qué se puede hacer en móvil (catálogo — sin implementar aquí)

| Idea | Qué resuelve | Esfuerzo |
|------|----------------|----------|
| Centrar menú ☰ + cards (mismos márgenes izq/der) | “Tirada / descentrada” | Medio (CSS layout) |
| Suavizar o apagar halo en `max-width` móvil | Desequilibrio visual | Bajo |
| Home móvil: acortar o colapsar párrafos (“Leer más”) | Menos muro de texto | Medio (copy + UI) |
| CTA demo más presente arriba / sticky ligero | Más descargas | Bajo–medio |
| Cómo funciona: visual antes que párrafo largo | Flujo / clic | Medio (una sección piloto) |
| Tema claro elegante (no hospital) | Luz / trading claro | Alto (marca + assets) — **con Mario** |

**Qué no hace falta:** reescribir toda la jerga; rediseñar marca desde cero esta semana.

---

## Piloto desktop ya cerrado (23 oct noche) — no confundir con móvil

- Tema **claro** CF: **revertido** (marca negra).  
- **IBM Plex Sans** en toda Cómo funciona + trozo definición home.  
- Lab claro documentado; no reabrir sin mesa.  
- **Móvil** = cola viva (esta carpeta + § siguiente).

---

## Cómo funciona móvil — teaser (23 oct noche) · IMPLEMENTADO piloto

**Retomar:** *«CF móvil leer más»* · *«definición SEO móvil»*.

### Qué hay ahora (≤768px)
- Teaser: *intradía* / *swing* (clic → Presentación) + «Ver presentación →».  
- Botón «Leer definición completa» / ocultar.  
- Párrafo GEO **sigue en el HTML** (colapsado hasta abrir).  
- Desktop: párrafo completo como siempre.

### Pendiente móvil (otra cola)
Alineación ☰ / halo / cards (capturas home) — no cerrado en este piloto.

### Relación con el resto
Misma ola de mejora web que vídeos Penguin / microclips: **claridad visual + móvil**, sin abandonar negro de marca. Alineación ☰ / halo = sigue en tabla de abajo.

---

## Orden de ataque sugerido (cuando haya gasolina o Mario)

1. **Alineación** (menú + cards) — lo más “roto” a ojo.  
2. **Halo / márgenes** en móvil.  
3. **CF móvil:** lead corto + Leer más / clic intradía·swing → Presentación (**sin** romper SEO) — § arriba.  
4. **Densidad home** móvil (mismo patrón “bajo demanda”).  
5. Tema claro solo si la mesa Raúl/Mario lo prioriza.

---

## Frases listas para Mario / Raúl

- En PC bueno ya se ve producto serio; en móvil se ve **descentrado y denso**.  
- Menú hamburguesa y varias cards **no están centradas**.  
- Queremos **misma marca**, más **luz/aire/flujo**, sin volvernos locos.  
- Evidencia: carpeta `docs/ref-visual-movil-oct2026/`.
