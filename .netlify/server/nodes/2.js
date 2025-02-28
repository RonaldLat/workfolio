import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.0128de59.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/tweenMe.86cf3cfd.js","_app/immutable/chunks/ScrollTrigger.1fe021b6.js","_app/immutable/chunks/each.af864823.js","_app/immutable/chunks/BlogCard.85bc1cb7.js","_app/immutable/chunks/utils.9a66bb98.js"];
export const stylesheets = ["_app/immutable/assets/2.bfead2bb.css"];
export const fonts = [];
