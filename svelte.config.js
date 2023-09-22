import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
      highlight: {
      }
		}) // 👈 add mdsvex with mdsvex configuration options
	],

	kit: {
		adapter: adapter()
	},
	//preprocess: vitePreprocess()
	vitePlugin: {
		inspector: true
	}
};
export default config;
