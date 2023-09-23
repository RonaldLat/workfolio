<script>
	import PracticeD3 from '$lib/components/d3/PracticeD3.svelte';
    export let data


</script>

<div class="min-h-screen w-full">
	<h1 class="text-2xl bold">D3 Playground</h1>
	<PracticeD3 salaries={data.salaries} />
</div>
