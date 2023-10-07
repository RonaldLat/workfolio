import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import('../entries/pages/_layout.svelte.js'))
    .default);
export { universal };
export const universal_id = 'src/routes/+layout.js';
export const imports = [
<<<<<<< HEAD
	'_app/immutable/nodes/0.214a0f41.js',
	'_app/immutable/chunks/scheduler.ef4e60ca.js',
	'_app/immutable/chunks/index.0af481dd.js',
	'_app/immutable/chunks/singletons.bf6e1906.js',
	'_app/immutable/chunks/stores.3af53535.js',
	'_app/immutable/chunks/Icon.85806294.js',
	'_app/immutable/chunks/each.fcc43a98.js'
=======
  '_app/immutable/nodes/0.672fc369.js',
  '_app/immutable/chunks/scheduler.65fbc1b2.js',
  '_app/immutable/chunks/index.bbb9e424.js',
  '_app/immutable/chunks/index.00edf7ea.js',
  '_app/immutable/chunks/singletons.9bdd93a8.js',
  '_app/immutable/chunks/Icon.9b89fbd2.js',
  '_app/immutable/chunks/each.e59479a4.js'
>>>>>>> gsap
];
export const stylesheets = ['_app/immutable/assets/app.78681a0c.css'];
export const fonts = [];
