import {
<<<<<<< HEAD
	c as create_ssr_component,
	e as escape,
	a as each,
	b as add_attribute,
	v as validate_component
=======
  c as create_ssr_component,
  e as escape,
  a as each,
  b as add_attribute
>>>>>>> gsap
} from '../../../chunks/ssr.js';
import { t as title } from '../../../chunks/config.js';
import { f as formatDate } from '../../../chunks/utils.js';
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	return ` <div class="max-w-md text-left w-full rounded-3xl p-px text-gray-800 bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800"><div class="flex flex-col hover:bg-myColor-200 transition delay-150 duration-150 ease-in-out gap-3 justify-end rounded-[calc(1.5rem-1px)] p-10 bg-myColor-50 ark:bg-gray-900"><h2 class="text-2xl text-bold font-[Caudex] text-gray-900">${escape(
		post.title
	)}</h2> <p class="text-md font-[Roboto]">${escape(
		post.excerpt
	)}</p> <h1 class="text-gray-700 text-sm font-[Play]">${escape(
		formatDate(post.date)
	)}</h1> <div class="mt-8 flex gap-4 items-center hidden" data-svelte-h="svelte-1qcykrt"><img class="h-12 w-12 rounded-full" src="" alt=""> <div><h3 class="text-lg font-medium">Oketa Fred</h3> <span class="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
<<<<<<< HEAD
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `${
		(($$result.head += `<!-- HEAD_svelte-fbczdu_START -->${
			(($$result.title = `<title>${escape(title)}</title>`), '')
		}<!-- HEAD_svelte-fbczdu_END -->`),
		'')
	} <div class="px-3 md:px-5 mx-auto w-full container"><h1 data-svelte-h="svelte-rrgtaa">Ronald&#39;s Blog</h1> <ul class="grid grid-cols-1 md:grid-cols-2 w-full mx-auto justify-center place-items-center items-center gap-2 text-center">${each(
		data.posts,
		(post) => {
			return `<li class="h-full w-fit px-2 p-1 rounded-sm"><a${add_attribute(
				'href',
				`blog/${post.slug}`,
				0
			)}>${validate_component(BlogCard, 'BlogCard').$$render(
				$$result,
				{ post },
				{},
				{}
			)}</a> </li>`;
		}
	)}</ul></div>`;
=======
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="text-gray-800" data-svelte-h="svelte-i4ruc1">Blog home page</h1> ${
    (($$result.head += `<!-- HEAD_svelte-fbczdu_START -->${
      (($$result.title = `<title>${escape(title)}</title>`), '')
    }<!-- HEAD_svelte-fbczdu_END -->`),
    '')
  } <div class="container"><h1 data-svelte-h="svelte-rrgtaa">Ronald&#39;s Blog</h1> <ul class="flex flex-col justify-center items-center gap-2 text-center">${each(
    data.posts,
    (post) => {
      return `<li class="bg-sky-200 w-fit px-2 p-1 rounded-sm"><a${add_attribute(
        'href',
        `blog/${post.slug}`,
        0
      )}><h1>${escape(post.title)}</h1> <h1>${escape(
        formatDate(post.date)
      )}</h1> </a></li> <hr>`;
    }
  )}</ul></div>`;
>>>>>>> gsap
});
export { Page as default };
