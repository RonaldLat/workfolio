<script>
	import Home from '$lib/Home.svelte';
	import Featured from '$lib/components/Featured.svelte';
  import Footer2 from '$lib/components/Footer2.svelte';

  export let data;
</script>

<main class="bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300">

	<Home />
<Featured {data}/>
</main>
