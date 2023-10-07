<<<<<<< HEAD
import { c as create_ssr_component, s as subscribe, e as escape } from '../../chunks/ssr.js';
import { p as page } from '../../chunks/stores.js';
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	$$unsubscribe_page();
	return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
=======
import {
  g as getContext,
  c as create_ssr_component,
  s as subscribe,
  e as escape
} from '../../chunks/ssr.js';
const getStores = () => {
  const stores = getContext('__svelte__');
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => ($page = value));
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape(
    $page.error?.message
  )}</p>`;
>>>>>>> gsap
});
export { Error as default };
