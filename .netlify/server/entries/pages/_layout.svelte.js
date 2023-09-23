import {
	c as create_ssr_component,
	e as escape,
	f as compute_rest_props,
	h as spread,
	i as escape_object,
	j as escape_attribute_value,
	a as each,
	v as validate_component
} from '../../chunks/ssr.js';
/* empty css                */ const void_element_names =
	/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
	return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { class: className = '' } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `<div class="${
		'h-full bg-sky-500 w-full ' + escape(className, true)
	}"><aside class="w-full h-full border-r-2" data-svelte-h="svelte-1dhbc4r"><a href="/" class="text-2xl">Ronald Otieno</a> <nav class="p-12 text-xl"><a class="block" href="/">Home</a> <a class="block" href="#contact">Contact</a> <a class="block" href="/projects">Projects</a> <a class="block" href="/blog">Blog</a></nav></aside></div>`;
});
const defaultAttributes = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	'stroke-width': 2,
	'stroke-linecap': 'round',
	'stroke-linejoin': 'round'
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		'name',
		'color',
		'size',
		'strokeWidth',
		'absoluteStrokeWidth',
		'iconNode'
	]);
	let { name } = $$props;
	let { color = 'currentColor' } = $$props;
	let { size = 24 } = $$props;
	let { strokeWidth = 2 } = $$props;
	let { absoluteStrokeWidth = false } = $$props;
	let { iconNode } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
		$$bindings.strokeWidth(strokeWidth);
	if (
		$$props.absoluteStrokeWidth === void 0 &&
		$$bindings.absoluteStrokeWidth &&
		absoluteStrokeWidth !== void 0
	)
		$$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
	if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
		$$bindings.iconNode(iconNode);
	return `<svg${spread(
		[
			escape_object(defaultAttributes),
			escape_object($$restProps),
			{ width: escape_attribute_value(size) },
			{ height: escape_attribute_value(size) },
			{ stroke: escape_attribute_value(color) },
			{
				'stroke-width': escape_attribute_value(
					absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth
				)
			},
			{
				class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ''}`)
			}
		],
		{}
	)}>${each(iconNode, ([tag, attrs]) => {
		return `${((tag$1) => {
			return tag$1
				? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? '' : ``}${
						is_void(tag$1) ? '' : `</${tag$1}>`
				  }`
				: '';
		})(tag)}`;
	})}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'
			}
		],
		['path', { d: 'M9 18c-4.51 2-5-2-7-2' }]
	];
	return `${validate_component(Icon$1, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'github' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Github$1 = Github;
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
			}
		],
		[
			'rect',
			{
				width: '4',
				height: '12',
				x: '2',
				y: '9'
			}
		],
		['circle', { cx: '4', cy: '4', r: '2' }]
	];
	return `${validate_component(Icon$1, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'linkedin' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Linkedin$1 = Linkedin;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'line',
			{
				x1: '4',
				x2: '20',
				y1: '12',
				y2: '12'
			}
		],
		[
			'line',
			{
				x1: '4',
				x2: '20',
				y1: '6',
				y2: '6'
			}
		],
		[
			'line',
			{
				x1: '4',
				x2: '20',
				y1: '18',
				y2: '18'
			}
		]
	];
	return `${validate_component(Icon$1, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'menu' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Menu$1 = Menu;
const Newspaper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2'
			}
		],
		['path', { d: 'M18 14h-8' }],
		['path', { d: 'M15 18h-5' }],
		['path', { d: 'M10 6h8v4h-8V6Z' }]
	];
	return `${validate_component(Icon$1, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'newspaper' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Newspaper$1 = Newspaper;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `<div class="${[
		'fixed top-0 left-0 h-full w-64 bg-emerald-200 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300',
		' -translate-x-full'
	]
		.join(' ')
		.trim()}"> <button class="p-2 bg-blue-500 text-white" data-svelte-h="svelte-1m9qw5z">Toggle SideNav</button>  ${validate_component(
		Sidebar,
		'Sidebar'
	).$$render(
		$$result,
		{},
		{},
		{}
	)}  <button class="p-2 bg-red-500 text-white" data-svelte-h="svelte-af7o7w">Close SideNav</button></div> <main class="mb-36 mx-auto w-full">${
		slots.default ? slots.default({}) : ``
	}</main> <nav class="fixed bottom-0 left-0 p-2 bg-blue-500 text-white flex flex-row items-center w-full justify-evenly"><button class="">${validate_component(
		Menu$1,
		'Menu'
	).$$render($$result, {}, {}, {})}</button> ${validate_component(Linkedin$1, 'Linkedin').$$render(
		$$result,
		{},
		{},
		{}
	)} ${validate_component(Github$1, 'Github').$$render(
		$$result,
		{},
		{},
		{}
	)} <a href="/blog" class="">${validate_component(Newspaper$1, 'Newspaper').$$render(
		$$result,
		{},
		{},
		{}
	)}Blog</a></nav>`;
});
export { Layout as default };
