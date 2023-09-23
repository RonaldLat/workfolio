import * as universal from '../entries/pages/blog/_page.js';
import * as server from '../entries/pages/blog/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default);
export { universal };
export const universal_id = 'src/routes/blog/+page.js';
export { server };
export const server_id = 'src/routes/blog/+page.server.js';
export const imports = [
	'_app/immutable/nodes/5.9810318c.js',
	'_app/immutable/chunks/scheduler.4738fa35.js',
	'_app/immutable/chunks/index.52a0b440.js',
	'_app/immutable/chunks/each.e59479a4.js',
	'_app/immutable/chunks/config.f7cdca80.js',
	'_app/immutable/chunks/utils.9a66bb98.js'
];
export const stylesheets = [];
export const fonts = [];
