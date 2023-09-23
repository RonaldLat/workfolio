export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/8.3031b5c5.js',
	'_app/immutable/chunks/scheduler.4738fa35.js',
	'_app/immutable/chunks/index.52a0b440.js'
];
export const stylesheets = [];
export const fonts = [];
