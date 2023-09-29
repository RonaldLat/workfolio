import * as universal from '../entries/pages/d3/_page.js';

export const index = 7;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/d3/_page.svelte.js')).default);
export { universal };
export const universal_id = 'src/routes/d3/+page.js';
export const imports = [
	'_app/immutable/nodes/7.f0a02be0.js',
	'_app/immutable/chunks/scheduler.65fbc1b2.js',
	'_app/immutable/chunks/index.bbb9e424.js',
	'_app/immutable/chunks/each.e59479a4.js',
	'_app/immutable/chunks/index.00edf7ea.js'
];
export const stylesheets = [];
export const fonts = [];
