import { c as create_ssr_component, a as subscribe, e as each, b as escape, v as validate_component } from "../../chunks/ssr.js";
import { c as category_links, a as cart } from "../../chunks/products.js";
const app = "";
const Category_links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $category_links, $$unsubscribe_category_links;
  $$unsubscribe_category_links = subscribe(category_links, (value) => $category_links = value);
  $$unsubscribe_category_links();
  return `<ul class="bg-transparent w-full px-3 gap-3 overflow-x-scroll px-5 text-lg flex capitalize justify-around">${each($category_links, (category) => {
    return `<li class="${[
      "bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-1 rounded text-gray-50",
      "active"
    ].join(" ").trim()}"><a class="line-clamp-1" href="${"/category" + escape(category.link, true)}">${escape(category.title)}</a> </li>`;
  })}</ul>`;
});
const Cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_cart = subscribe(cart, (value) => $cart = value);
  $$unsubscribe_cart();
  return `<div class="px-3 py-2 mx-auto rounded bg-slate-700 w-fit text-center text-white font-bold"><p class="tex-center">${escape($cart.length)}</p></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="bg-gradient-to-r px-4 md:px-6 container mx-auto py-6 max-w-6xl min-h-screen relative from-gray-100 to-gray-300"><header class="w-full z-50 ">${validate_component(Category_links, "Categories").$$render($$result, {}, {}, {})} ${validate_component(Cart, "Cart").$$render($$result, {}, {}, {})}</header> <div>${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Layout as default
};
