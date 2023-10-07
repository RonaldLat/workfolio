export const index = 9;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/portofolio/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/9.48e0205b.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js',
	'_app/immutable/chunks/index.4db78ffb.js',
	'_app/immutable/chunks/tweenMe.853d1919.js'
];
export const stylesheets = [];
export const fonts = [];
