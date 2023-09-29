

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d67ac6c5.js","_app/immutable/chunks/scheduler.65fbc1b2.js","_app/immutable/chunks/index.bbb9e424.js","_app/immutable/chunks/singletons.9bdd93a8.js"];
export const stylesheets = [];
export const fonts = [];
