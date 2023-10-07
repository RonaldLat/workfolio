export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(blog)/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/2.61e84326.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js',
	'_app/immutable/chunks/config.f7cdca80.js'
];
export const stylesheets = ['_app/immutable/assets/app.78681a0c.css'];
export const fonts = [];
