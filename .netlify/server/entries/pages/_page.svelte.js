import {
	c as create_ssr_component,
	v as validate_component,
	a as each,
	e as escape,
	b as add_attribute
} from '../../chunks/ssr.js';
import '../../chunks/tweenMe.js';
import { I as Icon } from '../../chunks/Icon.js';
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [['path', { d: 'm9 18 6-6-6-6' }]];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'chevron-right' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const ChevronRight = Chevron_right;
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['polyline', { points: '16 18 22 12 16 6' }],
		['polyline', { points: '8 6 2 12 8 18' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'code' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Code$1 = Code;
const External_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
			}
		],
		['polyline', { points: '15 3 21 3 21 9' }],
		[
			'line',
			{
				x1: '10',
				x2: '21',
				y1: '14',
				y2: '3'
			}
		]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'external-link' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const ExternalLink = External_link;
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="relative flex flex-col-reverse font-[Ubuntu] w-full py-16 lg:pt-0 lg:flex-col lg:pb-0" data-svelte-h="svelte-1p2vf7b"><div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"><svg class="absolute left-0 hidden h-full text-gray-400 transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice"><path d="M50 0H100L50 100H0L50 0Z"></path></svg> <img class="object-cover w-full bg-myColor-100 rounded shadow-sm h-96 lg:rounded-none lg:shadow-none md:h-auto lg:h-full" src="/lat2-smaller.webp" alt=""></div> <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"><div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5"><p class="inline-block w-full py-px mb-4 text-xs font-[Play] font-semibold tracking-wider uppercase">who am i?</p> <h2 class="mb-5 font-[Caudex] text-4xl font-bold first-letter:text-6xl first-letter:text-myColor-600 tracking-widest text-gray-900 sm:text-4xl sm:leading-none">The Tech Enchanter,<br class="hidden md:block"> <span class="inline-block text-deep-violet-accent-400">enchanting with the art of code.</span></h2> <div class="flex-row space-y-2 pr-5 mb-5 text-base text-gray-700 md:text-lg"><p>Hello! I&#39;m Ronald Otieno, a software developer specializing in web development, data
					visualization, and machine learning.</p> <p>With expertise in dynamic web applications and a focus on D3.js for captivating
					visualizations, I&#39;m excited to collaborate on impactful projects. Let&#39;s make a difference
					together!</p></div></div></div></div>`;
});
const Portofolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const projects = [
		{
			name: 'Furniture Place Clone',
			url: 'https://frosty-hopper-d52530.netlify.app/',
			img: 'furniture-palace-clone-pc.webp',
			alt: 'screenshot of Furniture Palace clone Website',
			git: ''
		},
		{
			name: 'Ideal Sofas Website',
			url: 'https://happy-liskov-d56336.netlify.app/',
			img: 'ideal-sofas-pc.webp',
			alt: 'screenshot of Ideal Sofas Website',
			git: ''
		},
		{
			name: 'Dudi Resort website',
			url: '',
			img: 'dr-portofolio.webp',
			alt: 'screenshot of Dudi Resort Website',
			git: ''
		},
		{
			name: 'Milly Cakes website',
			url: '',
			img: 'mc-portofolio.webp',
			alt: 'screenshot of Dudi Resort Website',
			git: ''
		}
	];
	return `<div class="px-4 py-16 mx-auto overflow-x-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-[Ubuntu]"><div data-svelte-h="svelte-24s9h"><p class="inline-block w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left uppercase font-[Play] rounded-full text-gray-700">work</p></div> <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8" data-svelte-h="svelte-1i16t9m"><h2 class="max-w-lg font-[Play] mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"><span class="inline-block mb-1 sm:mb-4">Things I have <span class="text-myColor-500">built</span></span> <div class="h-1 ml-auto duration-300 origin-left transform scale-x-30 group-hover:scale-x-100"></div></h2> <p class="text-gray-700 md:text-lg">Some of personal and professional projects I have worked on.</p></div> <ul class="flex mb-8 overflow-x-auto snap-x lg:grid lg:gap-6 gap-8 lg:row-gap-5 lg:grid-cols-3 lg:row-gap-6 lg:grid-cols-2">${each(
		projects,
		(project) => {
			return `<li class="flex-shrink-0 w-[85%] scroll-ml-6 py-4 px-2 snap-center"><div class="relative overflow-hidden rounded bg-slate-200 drop-shadow-sm drop-shadow-myColor-800 hover:drop-shadow-myColor-400 hover:drop-shadow-sm transition duration-200 transform hover:translate-y-2 hover:shadow-lg"><img class="object-contain w-full h-56 md:h-64 xl:h-80" src="${
				'/' + escape(project.img, true)
			}"${add_attribute(
				'alt',
				project.alt,
				0
			)}> <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75"><p class="text-lg tracking-wide text-gray-200">${escape(
				project.name
			)}</p> <ul class="flex text-gray-200 underline decoration-2 underline-offset-2 gap-6"><li class="text-sm"><a${add_attribute(
				'href',
				project.url,
				0
			)} class="decoration-gray-300 hover:text-myColor-300"><p size="1.5em">${validate_component(
				ExternalLink,
				'ExternalLink'
			).$$render($$result, {}, {}, {})}</p> </a></li> <li class="text-sm"><a${add_attribute(
				'href',
				project.git,
				0
			)} class="decoration-gray-300 hover:text-myColor-300"><p size="1.5em">${validate_component(
				Code$1,
				'Code'
			).$$render($$result, {}, {}, {})}</p></a> </li></ul> </div></div> </li>`;
		}
	)}</ul> <div class="text-center"><a href="/portofolio" aria-label="" class="inline-flex items-center font-semibold underline text-myColor-600 decoration-2 transition-colors duration-200 hover:text-myColor-800">See more
			${validate_component(ChevronRight, 'ChevronRight').$$render($$result, {}, {}, {})}</a></div></div>`;
});
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" data-svelte-h="svelte-je5kcf"><div class="grid gap-10 lg:grid-cols-2"><div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"><div class="max-w-xl mb-6"><div><p class="inline-block font-[Play] w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase rounded-full">tools</p></div> <h2 class="max-w-lg font-[Play] mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">A programmer is<br class="hidden md:block">
					as good as the
					<span class="inline-block text-myColor-500">tools</span> he uses</h2> <p class="text-base text-gray-700 md:text-lg">To be efficient and productive in what I do, I have carefully picked the tools that will
					help me accomplish my tasks fast.</p></div></div> <div class="lg:pl-8"><div class="px-0 grid grid-cols-1 grid-rows-3 gap-2 place-items-start"><div class="flex flex-col gap-4"><img class="object-cover w-20 h-20 rounded shadow-sm sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="js.svg" alt="javascript logo"> <span class="text-xs">Javascript</span></div> <div class="flex gap-4"><div class="flex flex-col"><img class="object-contain w-20 h-20 rounded shadow-sm sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="python.svg" alt="nuxtjs logo"> <span class="text-xs">Python</span></div> <div class="flex flex-col"><img class="object-contain w-20 h-20 rounded shadow-sm row-start-3 sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="vue.svg" alt="vue logo"> <span class="text-xs">Vue</span></div></div> <div class="flex gap-4"><div class="flex flex-col"><img class="object-contain w-20 h-20 rounded shadow-sm row-start-3 sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="ubuntu-4.svg" alt="ubuntu OS logo"> <span class="text-xs">Linux</span></div> <div class="flex flex-col"><img class="object-contain w-20 h-20 rounded shadow-sm row-start-2 sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="d3.svg" alt="tailwind logo"> <span class="text-xs">D3.js</span></div> <div class="flex flex-col"><img class="object-contain w-20 h-20 rounded shadow-sm row-start-3 col-start-3 sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="firebase-logo.svg" alt="firebase logo"> <span class="text-xs">Firebase</span></div> <div class="flex flex-col"><img class="object-contain w-20 h-20 text-black rounded shadow-sm row-start-3 col-start-3 sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="git-black.svg" alt="git logo"> <span class="text-xs">Git</span></div></div></div></div></div></div>`;
});
const DailyStoic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { quote } = $$props;
	if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0) $$bindings.quote(quote);
	return `<div class="bg-gray-900 space-y-2 border border-myColo-600 mx-2 p-2 rounded-md"><p class="text-myColor-400 font-[Play]" data-svelte-h="svelte-1enrva">Daily Stoic</p> <img class="h-20 w-auto rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV854JIL0_j2RTDqxwS1E_RHToQQYProgsw&usqp=CAU" alt="Marcus Aurelius"> <p class="italic font-[Maven] text-myColo-100">${escape(
		quote.text
	)}</p> <p class="text-myColo-50 text-xs">${escape(quote.author)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	const { quote } = data;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `<div class="min-h-screen font-[Ubuntu] bg-myColor-50">${validate_component(
		Home,
		'Home'
	).$$render($$result, {}, {}, {})} ${validate_component(DailyStoic, 'DailyStoic').$$render(
		$$result,
		{ quote },
		{},
		{}
	)} ${validate_component(Portofolio, 'Portofolio').$$render(
		$$result,
		{},
		{},
		{}
	)} ${validate_component(Tools, 'Tools').$$render($$result, {}, {}, {})}</div>`;
});
export { Page as default };
