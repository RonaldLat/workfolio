

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.58407826.js","_app/immutable/chunks/scheduler.d3beae7d.js","_app/immutable/chunks/index.af8cfb0a.js","_app/immutable/chunks/supabaseClient.90111ed0.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
export const stylesheets = [];
export const fonts = [];
