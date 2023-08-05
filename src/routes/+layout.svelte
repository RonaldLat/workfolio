
<script>
      import { fly } from "svelte/transition";
	import '../app.css';
	import Categories from '$lib/category_links.svelte';
	import Cart from '$lib/Cart.svelte';

  export let data;
</script>

<main
	class="bg-gradient-to-r px-4 md:px-6 container  mx-auto py-6 max-w-6xl min-h-screen   relative from-gray-100 to-gray-300"
>
	<header class="w-full z-50 ">
		<Categories />
		<Cart />
	</header>
  {#key data.pathname}
  <div
    in:fly={{ x: -30, duration: 200, delay: 150 }}
    out:fly={{ x: -30, duration: 150 }}
  >
    <slot />
  </div>
{/key}
</main>
