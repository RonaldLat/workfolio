export const index = 3;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import('../entries/pages/_page.svelte.js'))
    .default);
export const imports = [
  '_app/immutable/nodes/3.51c64508.js',
  '_app/immutable/chunks/scheduler.65fbc1b2.js',
  '_app/immutable/chunks/index.bbb9e424.js',
  '_app/immutable/chunks/each.e59479a4.js',
  '_app/immutable/chunks/Icon.9b89fbd2.js'
];
export const stylesheets = [];
export const fonts = [];
