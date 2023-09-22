import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import {mdsvex} from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'; // 👈import our mdsvex config

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
   preprocess: [
     vitePreprocess(),
     mdsvex(mdsvexConfig) // 👈 add mdsvex with mdsvex configuration options
        ],

	kit: {
		adapter: adapter()
	},
	//preprocess: vitePreprocess()
};
export default config;
