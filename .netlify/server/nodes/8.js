import * as universal from '../entries/pages/dsa/_page.js';

export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/dsa/_page.svelte.js')).default);
export { universal };
export const universal_id = 'src/routes/dsa/+page.js';
export const imports = [
	'_app/immutable/nodes/8.543309fe.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js',
	'_app/immutable/chunks/index.4db78ffb.js',
	'_app/immutable/chunks/QuickSort.5aa30d5e.js',
	'_app/immutable/chunks/each.fcc43a98.js',
	'_app/immutable/chunks/transform.97276be4.js'
];
export const stylesheets = ['_app/immutable/assets/8.be806665.css'];
export const fonts = [];
