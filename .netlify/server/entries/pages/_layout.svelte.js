import {
  c as create_ssr_component,
  v as validate_component,
  e as escape
} from '../../chunks/ssr.js';
/* empty css                */ import { I as Icon } from '../../chunks/Icon.js';
const Chevron_first = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    const iconNode = [
      ['path', { d: 'm17 18-6-6 6-6' }],
      ['path', { d: 'M7 6v12' }]
    ];
    return `${validate_component(Icon, 'Icon').$$render(
      $$result,
      Object.assign({}, { name: 'chevron-first' }, $$props, { iconNode }),
      {},
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  }
);
const ChevronFirst = Chevron_first;
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
  return `${validate_component(Icon, 'Icon').$$render(
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
const Linkedin = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
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
    return `${validate_component(Icon, 'Icon').$$render(
      $$result,
      Object.assign({}, { name: 'linkedin' }, $$props, { iconNode }),
      {},
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  }
);
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
  return `${validate_component(Icon, 'Icon').$$render(
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
const Newspaper = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
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
    return `${validate_component(Icon, 'Icon').$$render(
      $$result,
      Object.assign({}, { name: 'newspaper' }, $$props, { iconNode }),
      {},
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  }
);
const Newspaper$1 = Newspaper;
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = '' } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div class="${
    'h-full bg-transparent w-full z-10 ' + escape(className, true)
  }"><aside class="w-full h-full border-r-2" data-svelte-h="svelte-1vg1mst"><a href="/" class="text-2xl">Ronald Otieno</a> <nav class="p-12 text-xl"><a class="block" href="/">Home</a> <a class="block" href="/about">About</a> <a class="block" href="#contact">Contact</a> <a class="block" href="/projects">Projects</a> <a class="block" href="/d3">D3</a> <a class="block" href="/blog">Blog</a></nav></aside></div>`;
});
function client_method(key) {
  {
    if (
      key === 'before_navigate' ||
      key === 'after_navigate' ||
      key === 'on_navigate'
    ) {
      return () => {};
    } else {
      const name_lookup = {
        disable_scroll_handling: 'disableScrollHandling',
        preload_data: 'preloadData',
        preload_code: 'preloadCode',
        invalidate_all: 'invalidateAll'
      };
      return () => {
        throw new Error(
          `Cannot call ${name_lookup[key] ?? key}(...) on the server`
        );
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method('on_navigate');
const TheFooter = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    return `<footer class="flex flex-col w-full px-4 py-16 text-gray-200 bg-myColor-950 md:px-24 lg:px-8 lg:py-20 gap-2 "><p class="text-sm font-bold tracking-wide text-gray-200 uppercase" data-svelte-h="svelte-19is8q1">subscribe</p> <p class="text-gray-400" data-svelte-h="svelte-17v96m4">Subscribe to my newsletter to get regular content I publish on my blog.</p> <div class="max-w-md pt-3" data-svelte-h="svelte-b7in65"></div> <ul class="flex font-[Play] capitalize gap-3 text-myColor-300" data-svelte-h="svelte-11cbbvs"><li><a href="/">Home</a></li> <li><a href="portofolio">Portofolio</a></li> <li><a href="/blog">Blog</a></li></ul> <p class="text-sm text-gray-500">© ${escape(
      /* @__PURE__ */ new Date().getFullYear()
    )} Ronald Otieno. All Rights Reserved.</p></footer>`;
  }
);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  onNavigate(() => {
    showSideNav = false;
  });
  let showSideNav = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${[
    'fixed z-20 top-0 left-0 h-full w-64 bg-myColor-500 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300 ',
    (showSideNav ? 'translate-x-0' : '') +
      ' ' +
      (!showSideNav ? '-translate-x-full' : '')
  ]
    .join(' ')
    .trim()}"> <button class="p-2 text-3xl text-white fixed bottom-1 right-1 ">${validate_component(
    ChevronFirst,
    'ChevronFirst'
  ).$$render($$result, {}, {}, {})}</button>  ${validate_component(
    Sidebar,
    'Sidebar'
  ).$$render(
    $$result,
    {},
    {},
    {}
  )} </div> <main class="mb-36 mx-auto w-full min-h-screen font-[Poppins]">${
    slots.default ? slots.default({}) : ``
  }</main> <nav class="${[
    'fixed bottom-0 left-0 p-2 bg-myColor-500 h-13 text-white flex flex-row items-center w-full justify-evenly transition ease-in ',
    showSideNav ? 'bg-gray-900' : ''
  ]
    .join(' ')
    .trim()}"><button class="">${validate_component(Menu$1, 'Menu').$$render(
    $$result,
    {},
    {},
    {}
  )}</button> ${validate_component(Linkedin$1, 'Linkedin').$$render(
    $$result,
    {},
    {},
    {}
  )} ${validate_component(Github$1, 'Github').$$render(
    $$result,
    {},
    {},
    {}
  )} <a href="/blog" class="">${validate_component(
    Newspaper$1,
    'Newspaper'
  ).$$render($$result, {}, {}, {})}Blog</a></nav> ${validate_component(
    TheFooter,
    'TheFooter'
  ).$$render($$result, {}, {}, {})}`;
});
export { Layout as default };
