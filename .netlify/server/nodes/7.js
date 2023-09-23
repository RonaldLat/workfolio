export const index = 7;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/d3/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/7.bc824050.js',
	'_app/immutable/chunks/scheduler.4738fa35.js',
	'_app/immutable/chunks/index.52a0b440.js',
	'_app/immutable/chunks/each.e59479a4.js'
];
export const stylesheets = [];
export const fonts = [];
