import { c as create_ssr_component, v as validate_component } from '../../../chunks/ssr.js';
import { Q as QuickSort } from '../../../chunks/QuickSort.js';
const BreathingGrids_svelte_svelte_type_style_lang = '';
const css = {
	code: '#demo.svelte-1k31jwd{max-width:600px;margin:0 auto}.box.svelte-1k31jwd{margin:0px 1.5% 1.5% 0px;border-radius:0}h2.svelte-1k31jwd{font-weight:400}',
	map: null
};
const BreathingGrids = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<div id="demo" class="svelte-1k31jwd" data-svelte-h="svelte-1y4p0r2"><h2 class="svelte-1k31jwd">GSAP 3 Stagger Demo</h2> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div> <div class="box green svelte-1k31jwd"></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 data-svelte-h="svelte-1vdxp5p">Data Structures and Algorithms</h2> ${validate_component(
		QuickSort,
		'QuickSort'
	).$$render($$result, {}, {}, {})} ${validate_component(BreathingGrids, 'BreathingGrids').$$render(
		$$result,
		{},
		{},
		{}
	)}`;
});
export { Page as default };
