export const index = 10;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/10.737a5918.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js'
];
export const stylesheets = [];
export const fonts = [];
