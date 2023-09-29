import {
	c as create_ssr_component,
	e as escape,
	a as each,
	b as add_attribute
} from '../../../chunks/ssr.js';
import { t as title } from '../../../chunks/config.js';
import { f as formatDate } from '../../../chunks/utils.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
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
			)}><h1>${escape(post.title)}</h1> <h1>${escape(formatDate(post.date))}</h1> </a></li> <hr>`;
		}
	)}</ul></div>`;
});
export { Page as default };
