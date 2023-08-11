import * as universal from '../entries/pages/category/_categoryName_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/category/_categoryName_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/category/[categoryName]/+page.js";
export const imports = ["_app/immutable/nodes/4.df115207.js","_app/immutable/chunks/supabaseClient.90111ed0.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.d3beae7d.js","_app/immutable/chunks/index.af8cfb0a.js","_app/immutable/chunks/products.348e33fd.js","_app/immutable/chunks/index.41200950.js","_app/immutable/chunks/stores.7aba5978.js","_app/immutable/chunks/singletons.09663172.js"];
export const stylesheets = [];
export const fonts = [];
