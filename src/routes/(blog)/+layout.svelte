<script>
	import Footer from '$lib/components/blog/Footer.svelte';
	import Header from '$lib/components/blog/Header.svelte';
      import "../../app.css";

</script>

<p class=" text-gray-800">blog layout</p>
<Header />
<main class="bg-sky-200 w-full">
	<slot />
</main>
<Footer />
