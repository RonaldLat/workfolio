import { c as create_ssr_component, a as subscribe, e as each, d as add_attribute, b as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/supabaseClient.js";
import { c as category_links } from "../../chunks/products.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><form><input type="email"> <input type="password"> <button type="submit" data-svelte-h="svelte-1humtp2">sign up</button></form></div> <button data-svelte-h="svelte-a4owlf">fetch</button> ${``}`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $category_links, $$unsubscribe_category_links;
  $$unsubscribe_category_links = subscribe(category_links, (value) => $category_links = value);
  $$unsubscribe_category_links();
  return `<section class="grid place-items-center w-full space-y-6"><div class="text-[#4E5471] bg-no-repeat rounded bg-cover w-full p-4 bg-center max-w-md flex flex-col gap-4 bg-[url('$lib/ui/sofa_grey.png')]" data-svelte-h="svelte-1dt6d6p"><p>High quality sofa <br> started</p> <p><span class="text-2xl font-bold">70%</span> <span>off</span></p></div> <div class="grid md:grid-cols-3 gap-4 w-full bg-[#F2E8CF]">${each($category_links, (category) => {
    return `<a class="w-full relative "${add_attribute("href", "/category" + category.link, 0)}><img${add_attribute("src", "ui/" + category.img, 0)} class="w-full h-full brightness-50 object-fit"${add_attribute("alt", category.title, 0)}> <div class="absolute text-gray-100 top-5 left-4"><p class="uppercase text-xl mb-2">${escape(category.title)}</p> <span class="border p-1 uppercase text-xs border-gray-100" data-svelte-h="svelte-1sv9x9z">explore now</span></div> </a>`;
  })}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300"><h1 data-svelte-h="svelte-2ndf2c">home page</h1> ${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})} ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
