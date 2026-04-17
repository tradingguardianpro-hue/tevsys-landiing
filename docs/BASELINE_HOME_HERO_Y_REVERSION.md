# Baseline home / hero — cómo volver atrás sin perderse

**Para qué sirve:** muchas pruebas en el hero (`HomeHeroSection.astro` + fuentes en `BaseHead.astro`). Este documento fija **qué es “el principio”** y **cómo restaurarlo** en un paso, sin 18.000 intentos.

---

## Dos niveles de “volver atrás”

### 1) Clásico pre-experimentos (abr 2026)

**Qué es:** home con **dos columnas** (texto izquierda, mano derecha), H1 *“Tu trading merece más que buenas intenciones”*, sublínea **Pioneros…**, sin frase MT5 grande, sin halo, **solo Outfit** en tipografía del hero.

**Archivos guardados en el repo:**

| Qué | Ruta |
|-----|------|
| Hero completo listo para copiar | `docs/baseline/HomeHeroSection.CLASICO_PRE_EXPERIMENTOS.astro` |
| Línea de fuentes global (solo Outfit) | `docs/baseline/BaseHead-fuente-CLASICO.txt` |

**Restaurar a mano (sin git):**

1. Copiar el contenido de `docs/baseline/HomeHeroSection.CLASICO_PRE_EXPERIMENTOS.astro` sobre  
   `src/components/sections/heros/HomeHeroSection.astro` (sustituir todo el archivo).
2. En `src/components/head/BaseHead.astro`, sustituir la línea del `<link … fonts.googleapis.com/css2?family=…>` por la de `docs/baseline/BaseHead-fuente-CLASICO.txt`.
3. Guardar, build / preview, comprobar home.

**Decirle a la IA en chat:**  
*“Revierte el hero al baseline clásico del repo: copia `docs/baseline/HomeHeroSection.CLASICO_PRE_EXPERIMENTOS.astro` sobre `HomeHeroSection.astro` y aplica `BaseHead-fuente-CLASICO` en `BaseHead.astro`.”*

---

### 2) Git (recomendado si usáis historial)

Antes de una racha de pruebas:

```bash
git add src/components/sections/heros/HomeHeroSection.astro src/components/head/BaseHead.astro
git commit -m "web(tevsys): checkpoint hero antes de pruebas"
git tag web-hero-antes-pruebas-YYYY-MM-DD
```

Para volver a ese commit o tag:

```bash
git checkout web-hero-antes-pruebas-YYYY-MM-DD -- src/components/sections/heros/HomeHeroSection.astro src/components/head/BaseHead.astro
```

(O `git restore --source=<hash>` según versión de git.)

---

## Checkpoints intermedios (opcional)

Si queréis un punto de retorno **entre** “clásico” y “último experimento”, copiad el archivo activo a:

`docs/baseline/HomeHeroSection.CHECKPOINT_<FECHA>.astro`

y anotad aquí la fecha en una línea:

- *(añadir líneas según vayáis guardando)*

---

## Nota para la IA (Cursor)

- **“Revierte todo como al principio”** (hero) → por defecto = **baseline clásico** de `docs/baseline/HomeHeroSection.CLASICO_PRE_EXPERIMENTOS.astro` + fuente Outfit en `BaseHead`, salvo que el fundador diga otro checkpoint o un hash/tag concreto.
- No hace falta rehacer pruebas: **un copy + una línea de fuente** o **un `git checkout` de dos rutas**.

---

**Última actualización:** documento creado abr 2026 — experimentos hero (MT5 centrado, halo ámbar; tipografía hero alineada con sección de cards = Outfit). El archivo **CLASICO** describe el estado **anterior** a esos experimentos.
