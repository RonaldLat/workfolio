<script>
	import ProductCard3 from "$lib/ProductCard3.svelte";

	export let data;
	let { products } = data;

	console.log(products);
</script>

<section class="">

<div class="text-gray-800  text-center py-10">
	<h1 class="font-bold font-caudex text-3xl uppercase">featured products</h1>
</div>

<div
	class="overflow-hidden w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 md:gap-x-14 mt-10 mb-5 "
>
	{#each products as product}
		<ProductCard3 image="/files/{product.imageUrl}" name={product.name} id={product.id} category={product.category} price={product.price} old_price={product.old_price}/>
	{/each}
</div>
</section>
