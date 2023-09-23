import { init } from '../serverless.js';

export const handler = init(
	(() => {
		function __memo(fn) {
			let value;
			return () => (value ??= value = fn());
		}

		return {
			appDir: '_app',
			appPath: '_app',
			assets: new Set(['favicon.png', 'noisy.png']),
			mimeTypes: { '.png': 'image/png' },
			_: {
				client: {
					start: '_app/immutable/entry/start.9eeecbef.js',
					app: '_app/immutable/entry/app.d751cb1a.js',
					imports: [
						'_app/immutable/entry/start.9eeecbef.js',
						'_app/immutable/chunks/scheduler.4738fa35.js',
						'_app/immutable/chunks/singletons.f3988683.js',
						'_app/immutable/entry/app.d751cb1a.js',
						'_app/immutable/chunks/preload-helper.a4192956.js',
						'_app/immutable/chunks/scheduler.4738fa35.js',
						'_app/immutable/chunks/index.52a0b440.js'
					],
					stylesheets: [],
					fonts: []
				},
				nodes: [
					__memo(() => import('../server/nodes/0.js')),
					__memo(() => import('../server/nodes/1.js')),
					__memo(() => import('../server/nodes/3.js')),
					__memo(() => import('../server/nodes/4.js')),
					__memo(() => import('../server/nodes/5.js')),
					__memo(() => import('../server/nodes/6.js')),
					__memo(() => import('../server/nodes/7.js')),
					__memo(() => import('../server/nodes/8.js'))
				],
				routes: [
					{
						id: '/',
						pattern: /^\/$/,
						params: [],
						page: { layouts: [0], errors: [1], leaf: 2 },
						endpoint: null
					},
					{
						id: '/(app)/about',
						pattern: /^\/about\/?$/,
						params: [],
						page: { layouts: [0], errors: [1], leaf: 3 },
						endpoint: null
					},
					{
						id: '/api/posts',
						pattern: /^\/api\/posts\/?$/,
						params: [],
						page: null,
						endpoint: __memo(() => import('../server/entries/endpoints/api/posts/_server.ts.js'))
					},
					{
						id: '/blog',
						pattern: /^\/blog\/?$/,
						params: [],
						page: { layouts: [0], errors: [1], leaf: 4 },
						endpoint: null
					},
					{
						id: '/blog/[slug]',
						pattern: /^\/blog\/([^/]+?)\/?$/,
						params: [{ name: 'slug', optional: false, rest: false, chained: false }],
						page: { layouts: [0], errors: [1], leaf: 5 },
						endpoint: null
					},
					{
						id: '/d3',
						pattern: /^\/d3\/?$/,
						params: [],
						page: { layouts: [0], errors: [1], leaf: 6 },
						endpoint: null
					},
					{
						id: '/projects',
						pattern: /^\/projects\/?$/,
						params: [],
						page: { layouts: [0], errors: [1], leaf: 7 },
						endpoint: null
					}
				],
				matchers: async () => {
					return {};
				}
			}
		};
	})()
);
