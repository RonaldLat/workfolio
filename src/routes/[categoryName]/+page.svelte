<script>
	import { page } from '$app/stores';
	import ProductCard from '$lib/ProductCard.svelte';


	const category = $page.params.categoryName;
	export let data;
	let items = data.categoryData;
</script>

<section>
	<h2
		class="bg-slate-50 rounded-md capitalize text-center py-6 mb-8 text-2xl tracking-wide font-bold text-gray-700"
	>
		{category} Category
	</h2>
	<div class="mx-auto">
		<ul class="  w-full  grid grid-cols-1 gap-y-12 place-items-center justify-center items-center md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 ">
			{#each items as item}
				<li >
					<ProductCard {item} />
				</li>
			{/each}
		</ul>
	</div>
</section>
