/** Locales públicos tevsys. Extensible (de, fr…) sin cambiar el selector. */
export const defaultLocale = 'es';

/** @type {readonly string[]} */
export const locales = ['es', 'en'];

/** Etiqueta corta en header */
export const localeLabels = {
	es: 'ES',
	en: 'EN',
};

/**
 * Prefijo de URL por locale. ES = raíz (sin prefijo).
 * @param {string} locale
 */
export function localePrefix(locale) {
	if (!locale || locale === defaultLocale) return '';
	return `/${locale}`;
}

/**
 * @param {string | URL} url
 * @returns {'es' | 'en' | string}
 */
export function getLocaleFromUrl(url) {
	const pathname = typeof url === 'string' ? url : url.pathname;
	const seg = pathname.replace(/\/$/, '').split('/').filter(Boolean)[0];
	if (seg && locales.includes(seg) && seg !== defaultLocale) return seg;
	return defaultLocale;
}

/**
 * Quita el prefijo de locale de un pathname.
 * @param {string} pathname
 */
export function stripLocalePrefix(pathname) {
	const p = pathname.replace(/\/$/, '') || '/';
	const parts = p.split('/').filter(Boolean);
	if (parts[0] && locales.includes(parts[0]) && parts[0] !== defaultLocale) {
		const rest = parts.slice(1).join('/');
		return rest ? `/${rest}` : '/';
	}
	return p === '' ? '/' : p;
}

/**
 * Pathname en el locale pedido (misma página lógica).
 * Oleada 1: solo un subconjunto tiene EN; el resto del switch EN → `/en/` (home).
 * @param {string} pathname path actual (con o sin locale)
 * @param {string} targetLocale
 */
export function switchLocalePath(pathname, targetLocale) {
	const bare = stripLocalePrefix(pathname);
	const barePath = bare.split('?')[0].split('#')[0] || '/';
	/** Rutas con página EN publicada (oleada 1). Ampliar en oleadas siguientes. */
	const enReady = new Set([
		'/',
		'/como-funciona',
		'/company/contact',
		'/company/empresas',
		'/company/empresas-thank-you',
		'/company/legal',
		'/company/privacidad',
		'/company/terminos',
		'/company/reembolsos',
		'/features/precision',
		'/features/hyperclose',
		'/features/evidencia',
		'/features/sml',
		'/precios',
		'/para-quien',
		'/instalacion',
		'/instalacion-market',
		'/configuracion',
		'/configuracion-al-instalar',
		'/configuracion-fin-de-semana',
	]);
	if (targetLocale === 'en' && !enReady.has(barePath)) {
		return '/en/';
	}
	const prefix = localePrefix(targetLocale);
	if (barePath === '/') return prefix || '/';
	return `${prefix}${barePath}`;
}

/**
 * Prefija un slug interno con el locale (para nav/footer).
 * Slugs `/go/…` de medición: en EN apuntamos a la página real localizada si existe;
 * si no, al equivalente ES (oleadas).
 * @param {string} slug
 * @param {string} locale
 */
export function localizeHref(slug, locale) {
	if (!slug || slug.startsWith('http') || slug.startsWith('mailto:')) return slug;
	if (slug.startsWith('#')) return slug;

	let pathOnly = slug;
	let suffix = '';
	const hashIdx = slug.indexOf('#');
	const queryIdx = slug.indexOf('?');
	let cut = -1;
	if (queryIdx >= 0 && hashIdx >= 0) cut = Math.min(queryIdx, hashIdx);
	else if (queryIdx >= 0) cut = queryIdx;
	else if (hashIdx >= 0) cut = hashIdx;
	if (cut >= 0) {
		pathOnly = slug.slice(0, cut);
		suffix = slug.slice(cut);
	}

	const bare = stripLocalePrefix(pathOnly);
	/* Proxies /go: en EN van a la página canónica localizada (sin proxy) hasta tener /en/go. */
	if (locale !== defaultLocale && bare.startsWith('/go/')) {
		const map = {
			'/go/como-funciona-nav': '/como-funciona',
			'/go/como-funciona-home': '/como-funciona',
			'/go/como-funciona-operacion': '/como-funciona#videoclip-finde-operacion',
			'/go/como-funciona-pasiva': '/como-funciona#desde-cero',
			'/go/evidencia-5min': '/como-funciona#evidencia-nasdaq-100',
		};
		const dest = map[bare] || '/como-funciona';
		const [path, hash] = dest.split('#');
		const localized = localizeHref(path, locale);
		const fromMap = hash ? `${localized}#${hash}` : localized;
		/* Si el slug original traía ?…, no lo reaplicamos sobre dest mapeado. */
		return fromMap;
	}
	const prefix = localePrefix(locale);
	if (bare === '/') return `${prefix || '/'}${suffix}`;
	return `${prefix}${bare}${suffix}`;
}
