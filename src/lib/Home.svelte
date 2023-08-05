<script>
	import { category_links } from '$lib/store/products';
</script>

<section class="grid place-items-center w-full space-y-6">
	<div
		class="text-[#4E5471] bg-no-repeat rounded bg-cover w-full p-4 bg-center max-w-md flex flex-col gap-4 bg-[url('$lib/ui/sofa_grey.png')]"
	>
		<p>High quality sofa <br /> started</p>
		<p>
			<span class="text-2xl font-bold">70%</span> <span>off</span>
		</p>
	</div>

	<div class="grid md:grid-cols-3 gap-4 w-full bg-[#F2E8CF]">
		{#each $category_links as category}
			<a class="w-full relative " href={'/category'+category.link}>
				<img src={'ui/' + category.img} class="w-full h-full brightness-50 object-fit" alt={category.title} />
				<div class="absolute text-gray-100  top-5 left-4">
					<p class="uppercase text-xl mb-2">{category.title}</p>
					<span class="border p-1 uppercase text-xs border-gray-100">explore now</span>
				</div>
			</a>
		{/each}
	</div>
</section>
