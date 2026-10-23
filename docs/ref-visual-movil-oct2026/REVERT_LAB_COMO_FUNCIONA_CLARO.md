# Revertir lab Cómo funciona claro (23 oct 2026)

**Retomar:** *«revert cómo funciona»* · *«theme dark CF»*.

## Un cambio

En:

- `src/pages/como-funciona.astro`
- `src/pages/en/como-funciona.astro`

Sustituir:

```astro
<Layout … theme="light">
```

por:

```astro
<Layout …>
```

o `theme="dark"`.

Home y resto **no** se tocaron (siguen dark).

## Qué era el lab

- Tema claro solo micropágina Cómo funciona  
- IBM Plex Sans en cuerpo (esta página)  
- Ámbar más oscuro `#c45f12` para contraste en claro  
- Strong *intradía/swing* legibles + subrayado  
- Isla panel: ámbar (no teal)  

Opcional: quitar `IBM+Plex+Sans` del link de fuentes en `BaseHead.astro` si no se usa en otro sitio.
