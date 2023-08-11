

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_userId_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.717593cb.js","_app/immutable/chunks/scheduler.d3beae7d.js","_app/immutable/chunks/index.af8cfb0a.js","_app/immutable/chunks/stores.7aba5978.js","_app/immutable/chunks/singletons.09663172.js","_app/immutable/chunks/index.41200950.js"];
export const stylesheets = [];
export const fonts = [];
