<script>
	import { page } from '$app/stores';
	import ProductCard from '$lib/ProductCard.svelte';


	const category = $page.params.categoryName;
	export let data;
	let items = data.categoryData;
</script>

<section>
	<h2
		class="bg-slate-50 capitalize text-center py-6 mb-8 text-2xl tracking-wide font-bold text-gray-700"
	>
		{category} Category
	</h2>
	<div>
		<ul class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-9">
			{#each items as item}
				<li>
					<ProductCard {item} />
				</li>
			{/each}
		</ul>
	</div>
</section>
