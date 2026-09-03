import { localizeHref } from './locales.js';

const navEs = [
	{ title: 'Inicio', slug: '/' },
	{ title: 'Cómo funciona', slug: '/go/como-funciona-nav', match: '/como-funciona' },
	{ title: 'Para quién', slug: '/para-quien' },
	{ title: 'Empresas', slug: '/company/empresas' },
	{ title: 'Contacto', slug: '/company/contact' },
];

const navEn = [
	{ title: 'Home', slug: '/' },
	{ title: 'How it works', slug: '/como-funciona', match: '/como-funciona' },
	{ title: 'Who it’s for', slug: '/para-quien' },
	{ title: 'Companies', slug: '/company/empresas' },
	{ title: 'Contact', slug: '/company/contact' },
];

/**
 * @param {string} locale
 */
export function getNav(locale) {
	const source = locale === 'en' ? navEn : navEs;
	return source.map((item) => ({
		...item,
		slug: localizeHref(item.slug, locale),
		match: item.match ? localizeHref(item.match, locale) : undefined,
	}));
}
