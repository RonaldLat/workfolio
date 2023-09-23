export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.64bf9e80.js',
	'_app/immutable/chunks/scheduler.4738fa35.js',
	'_app/immutable/chunks/index.52a0b440.js',
	'_app/immutable/chunks/singletons.f3988683.js'
];
export const stylesheets = [];
export const fonts = [];
