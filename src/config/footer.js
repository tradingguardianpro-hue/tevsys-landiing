El tema Odyssey espera `footerLists` y `footerSocials`, no `links`. Usa este formato:

```javascript
export const footerSocials = [];

export const footerLists = [
  {
    title: 'tevsys',
    items: [
      { title: 'Inicio', slug: '/' },
      { title: 'Contacto', slug: '/company/contact' },
    ],
  },
];
