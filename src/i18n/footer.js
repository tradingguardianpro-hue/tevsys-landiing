import { localizeHref, stripLocalePrefix } from './locales.js';

/** Solo estas rutas tienen página EN; el resto del footer sigue en ES (guías/legal). */
const footerEnReady = new Set([
	'/',
	'/para-quien',
	'/features/precision',
	'/features/hyperclose',
	'/features/evidencia',
	'/features/sml',
	'/precios',
	'/como-funciona',
	'/company/contact',
	'/company/empresas',
	'/company/legal',
	'/company/privacidad',
	'/company/terminos',
	'/company/reembolsos',
	'/instalacion',
	'/instalacion-market',
	'/configuracion',
	'/configuracion-al-instalar',
	'/configuracion-fin-de-semana',
]);

/**
 * @param {string | null} slug
 * @param {string} locale
 */
function localizeFooterSlug(slug, locale) {
	if (!slug || locale !== 'en') return slug;
	const bare = stripLocalePrefix(slug.split('?')[0].split('#')[0] || '/');
	if (!footerEnReady.has(bare)) return slug;
	return localizeHref(slug, locale);
}

const footerEs = [
	{
		title: 'Guías',
		groups: [
			{
				items: [
					{ title: 'Cómo instalar (web / licencia)', slug: '/instalacion' },
					{ title: 'Cómo instalar (MetaQuotes Market)', slug: '/instalacion-market' },
				],
			},
			{
				label: 'Essential',
				items: [{ title: 'Configuración', slug: '/configuracion#configuracion-video' }],
			},
			{
				label: 'Advanced / Pro',
				items: [
					{ title: 'Configurar límites (~1 min)', slug: '/configuracion#configurar-limites' },
					{ title: 'Config · al instalar (entre semana)', slug: '/configuracion-al-instalar' },
					{ title: 'Config · en fin de semana', slug: '/configuracion-fin-de-semana' },
				],
			},
		],
	},
	{
		title: 'Producto',
		items: [
			{ title: 'Para quién', slug: '/para-quien' },
			{ title: 'Precisión', slug: '/features/precision' },
			{ title: 'HyperClose', slug: '/features/hyperclose' },
			{ title: 'SML', slug: '/features/sml' },
			{ title: 'Evidencia', slug: '/features/evidencia' },
			{ title: 'Vídeos — casos de cierre', slug: '/videos-cierre-youtube' },
			{ title: 'Noticias y horarios', slug: null, note: 'próximamente' },
		],
	},
	{
		title: 'Legal',
		items: [
			{ title: 'Aviso Legal', slug: '/company/legal' },
			{ title: 'Privacidad', slug: '/company/privacidad' },
			{ title: 'Términos de Uso', slug: '/company/terminos' },
			{ title: 'Reembolsos', slug: '/company/reembolsos' },
		],
	},
];

const footerEn = [
	{
		title: 'Guides',
		groups: [
			{
				items: [
					{ title: 'How to install (web / license)', slug: '/instalacion' },
					{ title: 'How to install (MetaQuotes Market)', slug: '/instalacion-market' },
				],
			},
			{
				label: 'Essential',
				items: [{ title: 'Setup', slug: '/configuracion#configuracion-video' }],
			},
			{
				label: 'Advanced / Pro',
				items: [
					{ title: 'Set limits (~1 min)', slug: '/configuracion#configurar-limites' },
					{ title: 'Setup · on install (weekdays)', slug: '/configuracion-al-instalar' },
					{ title: 'Setup · weekend', slug: '/configuracion-fin-de-semana' },
				],
			},
		],
	},
	{
		title: 'Product',
		items: [
			{ title: "Who it's for", slug: '/para-quien' },
			{ title: 'Precision', slug: '/features/precision' },
			{ title: 'HyperClose', slug: '/features/hyperclose' },
			{ title: 'SML', slug: '/features/sml' },
			{ title: 'Evidence', slug: '/features/evidencia' },
			{ title: 'Videos — close cases', slug: '/videos-cierre-youtube' },
			{ title: 'News & sessions', slug: null, note: 'coming soon' },
		],
	},
	{
		title: 'Legal',
		items: [
			{ title: 'Legal notice', slug: '/company/legal' },
			{ title: 'Privacy', slug: '/company/privacidad' },
			{ title: 'Terms of use', slug: '/company/terminos' },
			{ title: 'Refunds', slug: '/company/reembolsos' },
		],
	},
];

/**
 * Localiza slugs EN donde hay página; el resto sigue apuntando a ES (guías/legal).
 * @param {string} locale
 */
export function getFooterColumns(locale) {
	const source = locale === 'en' ? footerEn : footerEs;
	return source.map((col) => {
		if (col.groups) {
			return {
				...col,
				groups: col.groups.map((g) => ({
					...g,
					items: g.items.map((item) => ({
						...item,
						slug: item.slug ? localizeFooterSlug(item.slug, locale) : item.slug,
					})),
				})),
			};
		}
		return {
			...col,
			items: (col.items || []).map((item) => ({
				...item,
				slug: item.slug ? localizeFooterSlug(item.slug, locale) : item.slug,
			})),
		};
	});
}
