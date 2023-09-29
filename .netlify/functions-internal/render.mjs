import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3dcarousel/img1.jpg","3dcarousel/img2.jpg","3dcarousel/img3.jpg","3dcarousel/img4.jpg","3dcarousel/img5.jpg","3dcarousel/img6.jpg","3dcarousel/img7.jpg","3dcarousel/img8.jpg","3dcarousel/img9.jpg","css.svg","d3.svg","dark-portofolio.webp","dark-website.webp","dr-portofolio.webp","dynamic.webp","favicon.ico","favicon.png","favicon.webp","firebase-logo.svg","firebase-vertical.svg","folder-structure.webp","furniture-palace-clone-pc.webp","furniture-palace-clone.webp","git-black.svg","git-red.svg","github.svg","ideal-sofas-pc.webp","ideal-sofas.jpeg","js.svg","lat2-smaller.webp","map.webp","mc-portofolio.webp","noisy.png","nuxt-content-blog.webp","nuxt-logo-dark.svg","nuxt-logo-dark.webp","png_20211129_170850_0000.webp","python.png","python.svg","seo.webp","tailwind-play-cdn.webp","tailwind.svg","tailwindcss-default-colours.webp","tailwindv3.webp","tmux.webp","toronto.webp","ubuntu-4.svg","vue.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".ico":"image/vnd.microsoft.icon",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a482ec7c.js","app":"_app/immutable/entry/app.78793477.js","imports":["_app/immutable/entry/start.a482ec7c.js","_app/immutable/chunks/scheduler.65fbc1b2.js","_app/immutable/chunks/singletons.9bdd93a8.js","_app/immutable/entry/app.78793477.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.65fbc1b2.js","_app/immutable/chunks/index.bbb9e424.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/posts/_server.ts.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/d3",
				pattern: /^\/d3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/dsa",
				pattern: /^\/dsa\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/portofolio",
				pattern: /^\/portofolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
