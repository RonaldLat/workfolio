import { c as create_ssr_component, a as subscribe, b as escape, d as add_attribute, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { a as cart } from "../../../../chunks/products.js";
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cart;
  $$unsubscribe_cart = subscribe(cart, (value) => value);
  let { item } = $$props;
  const imgurl = item.name.toLowerCase().replace(/ /g, "_");
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$unsubscribe_cart();
  return `<div class="rounded p-2 space-y-2 grid justify-items-center bg-slate-50 text-center place-items-end "><img class="bg-slate-200 h-auto w-auto object-contain" src="${escape("$lib/bedroom/" + imgurl + ".jpg", true) + "}"}"${add_attribute("alt", item.name, 0)}> <a href="${"/details/" + escape(item.name.toLowerCase().replace(/ /g, "-"), true)}" class="text-center text-gray-600 ">${escape(item.name)}</a> <p class="text-sm space-x-2 font-semi-bold"><span class="">${escape(item.special_price)}</span> <span class="line-through">${escape(item.old_price)}</span></p> <button ${""} class="text-lg block disabled:opacity-75 font-semibold py-1 px-3 text-gray-100 hover:text-white bg-gray-700 w-fit rounded-lg hover:shadow-md transition duration-300">+</button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const category = $page.params.categoryName;
  let { data } = $$props;
  let items = data.categoryData;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<section><h2 class="bg-slate-50 capitalize text-center py-6 mb-8 text-2xl tracking-wide font-bold text-gray-700">${escape(category)} Category</h2> <div><ul class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-9">${each(items, (item) => {
    return `<li>${validate_component(ProductCard, "ProductCard").$$render($$result, { item }, {}, {})} </li>`;
  })}</ul></div></section>`;
});
export {
  Page as default
};
