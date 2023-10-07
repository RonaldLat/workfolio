import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_page.svelte.js')).default);
export { universal };
export const universal_id = 'src/routes/+page.js';
export const imports = [
	'_app/immutable/nodes/3.7365a1f4.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js',
	'_app/immutable/chunks/tweenMe.853d1919.js',
	'_app/immutable/chunks/index.4db78ffb.js',
	'_app/immutable/chunks/each.fcc43a98.js',
	'_app/immutable/chunks/Icon.85806294.js'
];
export const stylesheets = [];
export const fonts = [];
