<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
//  export const load = async ({ url }) => ({ props: { url } });
  /** @type {import('./$types').PageLoad} */
  export async function load({ url }) {
  return {
    currentPath: url.pathname,
  };
};

</script>

<script>
  import PageTransition from '$lib/PageTransition.svelte';
	import '../app.css';
	import Categories from '$lib/category_links.svelte';
	import Cart from '$lib/Cart.svelte';

  export let url;
</script>

<main
	class="bg-gradient-to-r px-4 md:px-6 container  mx-auto py-6 max-w-6xl min-h-screen   relative from-gray-100 to-gray-300"
>
	<header class="w-full z-50 ">
		<Categories />
		<Cart />
	</header>
  <PageTransition {url}>
	<slot></slot >
  </PageTransition>
</main>
