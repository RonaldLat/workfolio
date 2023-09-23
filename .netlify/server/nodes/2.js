export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(blog)/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/2.8d0161f2.js',
	'_app/immutable/chunks/scheduler.4738fa35.js',
	'_app/immutable/chunks/index.52a0b440.js',
	'_app/immutable/chunks/config.f7cdca80.js'
];
export const stylesheets = ['_app/immutable/assets/app.8e99e2c9.css'];
export const fonts = [];
