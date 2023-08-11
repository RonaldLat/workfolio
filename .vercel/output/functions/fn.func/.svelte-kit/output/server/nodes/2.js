

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3a3ec35a.js","_app/immutable/chunks/scheduler.d3beae7d.js","_app/immutable/chunks/index.af8cfb0a.js","_app/immutable/chunks/supabaseClient.90111ed0.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/products.348e33fd.js","_app/immutable/chunks/index.41200950.js"];
export const stylesheets = [];
export const fonts = [];
