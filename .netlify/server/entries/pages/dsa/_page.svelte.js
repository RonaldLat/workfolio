import { c as create_ssr_component, b as add_attribute, a as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const BinarySearch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".controls.svelte-16ohf36.svelte-16ohf36{position:absolute;bottom:4%;left:4%;font-size:1rem;font-weight:bold;text-transform:uppercase;letter-spacing:1px}.parent.svelte-16ohf36.svelte-16ohf36{width:400px;display:grid;gap:1rem;margin-bottom:1rem;padding:1rem;background-color:hsl(220 20% 24%);box-shadow:0 0 10px hsl(0 0% 0% / 10%);border:1px solid hsl(220 20% 28%);border-radius:1rem;overflow:hidden}.parent.svelte-16ohf36>span.svelte-16ohf36{font-weight:700;font-size:2rem}.parent.svelte-16ohf36>.child.svelte-16ohf36{padding:1rem;background-color:hsl(220 20% 28%);box-shadow:0 0 10px hsl(0 0% 0% / 10%);border:1px solid hsl(220 20% 32%);border-radius:1rem}",
  map: null
};
const BinarySearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let parent = true;
  let children = [1, 2];
  $$result.css.add(css$1);
  return `<div class="controls svelte-16ohf36"><label><input type="checkbox"${add_attribute("checked", parent, 1)}>
    Parent</label></div> ${`<div class="parent svelte-16ohf36"><span class="svelte-16ohf36" data-svelte-h="svelte-jtgwhe">Parent</span> ${each(children, (child) => {
    return `<div class="child svelte-16ohf36" data-svelte-h="svelte-ps5zx4">Child
      </div>`;
  })} <button data-svelte-h="svelte-vl3uo0">Add</button></div>`}`;
});
const Dijkstras_svelte_svelte_type_style_lang = "";
const css = {
  code: ".notifications.svelte-1r0agn5.svelte-1r0agn5{position:relative}.notifications.svelte-1r0agn5>.count.svelte-1r0agn5{width:48px;height:48px;position:absolute;top:-10px;right:-10px;display:grid;place-content:center;padding:2rem;font-size:2rem;font-weight:700;color:tomato;background-color:white;border-radius:50%}.notifications.svelte-1r0agn5>.bell.svelte-1r0agn5{width:140px;height:140px}",
  map: null
};
const Dijkstras = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notifications = 0;
  $$result.css.add(css);
  return `<div class="notifications svelte-1r0agn5"><div class="count svelte-1r0agn5"><span>${escape(notifications)}</span></div> <svg class="bell svelte-1r0agn5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1vdxp5p">Data Structures and Algorithms</h2> ${validate_component(BinarySearch, "BinarySearch").$$render($$result, {}, {}, {})} ${validate_component(Dijkstras, "Dijkstras").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
