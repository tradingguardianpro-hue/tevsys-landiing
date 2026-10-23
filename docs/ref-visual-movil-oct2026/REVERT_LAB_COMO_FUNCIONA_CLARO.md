# Lab Cómo funciona claro — estado 23 oct noche

**Retomar:** *«plex home»* · *«revert plex»*.

## Hecho

- Tema **claro** de CF: **revertido** (página otra vez dark).
- **IBM Plex Sans** se mantiene en Cómo funciona (oscuro) y en home solo `.tevsys-home-definition`.

## Si quieres quitar también Plex

1. CF ES|EN: borrar el bloque `font-family: IBM Plex Sans` en `body.page-como-funciona`.
2. Home: en `home-page.css` quitar Plex de `.tevsys-home-definition` y volver `Inter` en los hijos si hace falta.
3. Opcional: quitar `IBM+Plex+Sans` del link en `BaseHead.astro`.
