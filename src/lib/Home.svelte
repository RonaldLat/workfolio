<script>
	import { category_links } from '$lib/store/products';
  import { Button } from "$lib/components/ui/button";
  import Icon from '@iconify/svelte'
</script>

<section class="grid place-items-center w-full space-y-6">
	<div class="py-4 pb-10 space-y-6">
		<h1 class="text-4xl uppercase text-stone-800 font-caudex text-center w-full leading-snug">look & feel <br>smart</h1>
		<p class="text-center text-stone-700 italic capitalize">authorized oraimo dealer</p>
	</div>
	<div
		class="text-myColor-300 bg-no-repeat rounded bg-cover w-full h-72 bg-zinc-700 p-4 bg-center max-w-xl flex flex-col justify-center bg-blend-overlay gap-4 bg-[url('/oraimo/burna-boy-buds.webp')]"
	>
		<p>SpacePods x Burna Boy <br /> ANC True Wireless EarPods</p>
		<p>
      <s>Ksh.8000</s>
			<span class="text-2xl font-bold strike">Ksh.6900</span>
		</p>
	</div>

<div>
<div class="group text-stone-600 font-extrabold text-2xl font-caudex text-center transition duration-300">
SHOP BY CATEGORY
<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-600"></span>
</div>

    <p class="text-gray-800 bg-black mx-auto w-fit my-6 border border-gray-200 px-4 py-6 rounded-md flex items-center justify-center">
    <Button class="bg-gray-400 hover:brightness-50 transition ease-in-out" href="tel:+254714703045">
    <Icon icon="solar:phone-broken" class="mr-2 h-4 w-4"/>
    <span>Call</span>
    </Button>
    <Button class="bg-gray-300 hover:brightness-50 transition ease-in-out" href="https://wa.me/+254714703045?text=I'm%20ordering">
    <Icon icon="mdi:whatsapp" class="mr-2 h-4 w-4"/>
    <span>WhatsApp</span>
    </Button>
    <span class="text-gray-300">to  place order.</span>
    </p>

</div>
	<div class="grid md:grid-cols-2 place-items-center align-center-justify-center  px-0 gap-4 w-full">
		{#each $category_links as category}
			<a class="w-full relative rounded-sm bg-gradient-to-b from-gray-950 to-[#525252] bg-gradient-to-r " href={category.link} data-sveltekit-preload-data="hover">
				<img
					src={'oraimo/' + category.img}
					class="w-auto rounded-md h-auto brightness-50 object-fit object-center hover:brightness-[35%] ease-in duration-75 delay-75"
					alt={category.title}
				/>
				<div class="absolute text-gray-100 top-5 left-4">
					<p class="uppercase text-xl mb-2 text-myColor-1000">{category.title}</p>
					<span class="border font-ubuntu p-1 rounded-sm  capitalize text-xs text-myColor-200 border-myColor-700"
						>explore now</span
					>
				</div>
			</a>
		{/each}
	</div>
</section>
