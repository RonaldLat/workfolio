

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e5f73b54.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/stores.c9a6ee3a.js","_app/immutable/chunks/singletons.eea56fca.js","_app/immutable/chunks/index.e49d0d70.js"];
export const stylesheets = [];
export const fonts = [];
