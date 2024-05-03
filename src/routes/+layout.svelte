<script>
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Categories from '$lib/category_links.svelte';
	import Cart from '$lib/Cart.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import { onNavigate } from '$app/navigation';
  import { page } from '$app/stores';

  const route = $page.route;

  onNavigate(() => {
    showSideNav = false;
  });
  let showSideNav = false;

  const toggleSideNav = () => (showSideNav = !showSideNav);

	export let data;
</script>


  <div
    class="fixed z-20 top-0 left-0 h-full w-1/2 md:w-1/2 bg-myColor-700 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300"
    class:translate-x-0={showSideNav}
    class:-translate-x-full={!showSideNav}
  >
    <!-- Your side navigation content goes here -->
    <button
      class="p-2 text-3xl text-white fixed bottom-1 right-1"
      on:click={toggleSideNav}
    >
    close
    </button>
    <!-- Add other side navigation content -->
    <Sidebar {route} />
    <!-- Toggle button within the side navigation menu -->
  </div>
<main

	class=" container mx-auto py-4 max-w-5xl font-poppipns px-2 md:px-0 min-h-screen relative bg-gray-100"
>
	<header class="w-full z-50 fixed top-0 left-0 gap-x-2">
		<div class="bg-transparent">

			<Navbar {toggleSideNav} />
		</div>
	</header>
	{#key data.pathname}
		<div in:fly={{ x: -30, duration: 200, delay: 150 }} out:fly={{ x: -30, duration: 150 }} class="pt-10">
			<slot />
		</div>
	{/key}
</main>
<Footer class="bg-black text-sky-200"/>
