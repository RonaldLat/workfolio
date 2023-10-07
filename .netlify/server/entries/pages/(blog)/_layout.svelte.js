import {
  c as create_ssr_component,
  e as escape,
  v as validate_component
} from '../../../chunks/ssr.js';
import { t as title } from '../../../chunks/config.js';
/* empty css                   */ const Footer = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    return `<footer><p class="">${escape(title)} © ${escape(
      /* @__PURE__ */ new Date().getFullYear()
    )}</p></footer>`;
  }
);
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="/"><b>${escape(
    title
  )}</b></a></nav> <ul data-svelte-h="svelte-17hauk5"><li>about</li></ul>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="text-gray-800" data-svelte-h="svelte-1d01ms7">blog layout</p> ${validate_component(
    Header,
    'Header'
  ).$$render($$result, {}, {}, {})} <main class="bg-sky-200 w-full">${
    slots.default ? slots.default({}) : ``
  }</main> ${validate_component(Footer, 'Footer').$$render(
    $$result,
    {},
    {},
    {}
  )}`;
});
export { Layout as default };
