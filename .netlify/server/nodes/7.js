import * as universal from '../entries/pages/d3/_page.js';

export const index = 7;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import('../entries/pages/d3/_page.svelte.js'))
    .default);
export { universal };
export const universal_id = 'src/routes/d3/+page.js';
export const imports = [
<<<<<<< HEAD
	'_app/immutable/nodes/7.796c9dd1.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js',
	'_app/immutable/chunks/transform.97276be4.js',
	'_app/immutable/chunks/each.fcc43a98.js',
	'_app/immutable/chunks/Icon.85806294.js'
=======
  '_app/immutable/nodes/7.f0a02be0.js',
  '_app/immutable/chunks/scheduler.65fbc1b2.js',
  '_app/immutable/chunks/index.bbb9e424.js',
  '_app/immutable/chunks/each.e59479a4.js',
  '_app/immutable/chunks/index.00edf7ea.js'
>>>>>>> gsap
];
export const stylesheets = [];
export const fonts = [];
