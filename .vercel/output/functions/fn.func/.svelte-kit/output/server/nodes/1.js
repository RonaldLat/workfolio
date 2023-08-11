

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6d677c81.js","_app/immutable/chunks/scheduler.d3beae7d.js","_app/immutable/chunks/index.af8cfb0a.js","_app/immutable/chunks/stores.d3fa26b3.js","_app/immutable/chunks/singletons.8c830515.js","_app/immutable/chunks/index.41200950.js"];
export const stylesheets = [];
export const fonts = [];
