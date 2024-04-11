<script>
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Categories from '$lib/category_links.svelte';
	import Cart from '$lib/Cart.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import Footer2 from '$lib/components/Footer2.svelte';

	export let data;
</script>

<div class="overflow-hidden">

<main

	class=" container mx-auto py-4 max-w-5xl font-poppins f  px-2 md:px-0 min-h-screen relative bg-slate-100 overflow-hidden"
>
	<header class="w-full z-50 fixed top-0 left-0 gap-x-2">
		<div class="bg-transparent">

			<Navbar />
		</div>
	</header>
	{#key data.pathname}
		<div in:fly={{ x: -30, duration: 200, delay: 150 }} out:fly={{ x: -30, duration: 150 }} class="pt-10">
			<slot />
		</div>
	{/key}
</main>
<Footer2 />

</div>
