<script>
	import Auth from '$lib/Auth.svelte';
	import Home from '$lib/Home.svelte';
	import Featured from '$lib/components/Featured.svelte';
	import ProductForm from '$lib/ProductForm.svelte';

  export let data;
</script>

<main class="bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300">

	<Home />
<Featured {data}/>
</main>
