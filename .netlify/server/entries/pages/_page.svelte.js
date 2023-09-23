import { c as create_ssr_component, v as validate_component } from '../../chunks/ssr.js';
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="w-full" data-svelte-h="svelte-1yo7w5x"><img src="noisy.png" alt=""></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="min-h-screen"><h1 class="text-2xl" data-svelte-h="svelte-d55u6r">Ronald Otieno</h1> ${validate_component(
		Home,
		'Home'
	).$$render($$result, {}, {}, {})}</div>`;
});
export { Page as default };
