export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import('../entries/pages/(blog)/_layout.svelte.js')
  ).default);
export const imports = [
  '_app/immutable/nodes/2.29298b3e.js',
  '_app/immutable/chunks/scheduler.65fbc1b2.js',
  '_app/immutable/chunks/index.bbb9e424.js',
  '_app/immutable/chunks/config.f7cdca80.js'
];
export const stylesheets = ['_app/immutable/assets/app.e4280869.css'];
export const fonts = [];
