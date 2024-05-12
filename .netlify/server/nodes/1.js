

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a8bf41f3.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/stores.93998613.js","_app/immutable/chunks/singletons.52f8b75b.js","_app/immutable/chunks/index.9162b484.js"];
export const stylesheets = [];
export const fonts = [];
