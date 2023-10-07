import * as universal from '../entries/pages/blog/_page.js';
import * as server from '../entries/pages/blog/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import('../entries/pages/blog/_page.svelte.js'))
    .default);
export { universal };
export const universal_id = 'src/routes/blog/+page.js';
export { server };
export const server_id = 'src/routes/blog/+page.server.js';
export const imports = [
<<<<<<< HEAD
	'_app/immutable/nodes/5.e0c061f4.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js',
	'_app/immutable/chunks/each.fcc43a98.js',
	'_app/immutable/chunks/config.f7cdca80.js',
	'_app/immutable/chunks/utils.9a66bb98.js'
=======
  '_app/immutable/nodes/5.0b8f05f7.js',
  '_app/immutable/chunks/scheduler.65fbc1b2.js',
  '_app/immutable/chunks/index.bbb9e424.js',
  '_app/immutable/chunks/each.e59479a4.js',
  '_app/immutable/chunks/config.f7cdca80.js',
  '_app/immutable/chunks/utils.9a66bb98.js'
>>>>>>> gsap
];
export const stylesheets = [];
export const fonts = [];
