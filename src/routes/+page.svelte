<script>
	import Home from '$lib/Home.svelte';

	export let data;
	console.log('Root page', data.session);
</script>

<main class="bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300">
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
	{:else}
		<p class="text-rose-600 text-center">not loggen in home page</p>
	{/if}

	<Home />
</main>
