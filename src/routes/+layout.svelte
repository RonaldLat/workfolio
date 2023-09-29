<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
	import { fade, fly } from 'svelte/transition';
    import { onNavigate } from '$app/navigation';
	import { Menu, Linkedin, Github, Newspaper, ChevronFirst, } from 'lucide-svelte';
	import TheFooter from '$lib/components/TheFooter.svelte';

import {page} from '$app/stores'
const route =$page.route
	export let data;

    onNavigate(()=>{showSideNav = false})
	let showSideNav = false;

    const toggleSideNav =()=> showSideNav = !showSideNav;
</script>

<div
	class="fixed z-20 top-0 left-0 h-full w-1/2 bg-myColor-500 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300 "
	class:translate-x-0={showSideNav}
	class:-translate-x-full={!showSideNav}
>
	<!-- Your side navigation content goes here -->
	<button class="p-2 text-3xl text-white fixed bottom-1 right-1 " on:click={toggleSideNav}>
    <ChevronFirst/>
    </button>
	<!-- Add other side navigation content -->
	<Sidebar {route} />
	<!-- Toggle button within the side navigation menu -->
</div>
		<a href="/" class="cursor-pointer hover:bg-mycolor-600 transition ease-in duration-150 delay-150 text-2xl fixed top-1 left-1 text-myColor-400">Ronald </a>

{#key data.currentRoute}
	<main
         in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}
		class="  mx-auto w-full min-h-screen font-[Poppins]"
	>
		<slot />
	</main>
{/key}

<nav
	class="fixed bottom-0 left-0 px-5 py-2 bg-myColor-500 h-13 text-gray-50 flex flex-row items-center w-full justify-between  transition  ease-in "
    class:bg-gray-900={showSideNav}
>
	<button class="" on:click={toggleSideNav}><Menu /></button>
	<Linkedin />
	<a href="https://github.com/RonaldLat" class=""><Github /></a>
	<a href="/blog" class="flex  items-center"><Newspaper /><span class="text-xs">Blog</span></a>
</nav>
<TheFooter/>
