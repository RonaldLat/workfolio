

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dsa/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.d7eadcfc.js","_app/immutable/chunks/scheduler.65fbc1b2.js","_app/immutable/chunks/index.bbb9e424.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.00edf7ea.js"];
export const stylesheets = ["_app/immutable/assets/8.f73915a6.css"];
export const fonts = [];
