---
title:
author: Ronald Otieno
date: 2023--
layout: blog
published: false
excerpt:
---
## Download the zip

## Update vite.config.js file
```js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
    // --- ✁ snip
  ssr: {
    noExternal: [
      'gsap',
      '@gsap/member',
    ],
  },
});

```
## Import and register  modules
```js
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

```
