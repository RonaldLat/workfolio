export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(app)/about/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/4.8a037fd2.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js'
];
export const stylesheets = [];
export const fonts = [];
