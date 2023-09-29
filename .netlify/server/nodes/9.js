export const index = 9;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/portofolio/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/9.9e848f4c.js',
	'_app/immutable/chunks/scheduler.65fbc1b2.js',
	'_app/immutable/chunks/index.bbb9e424.js'
];
export const stylesheets = [];
export const fonts = [];
