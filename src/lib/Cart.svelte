<script>
	import Icon from '@iconify/svelte';
	import { cart } from '$lib/store/products.js';
	import { goto } from '$app/navigation';
  import { Button } from "$lib/components/ui/button";
    console.log($cart)
</script>


<Button
    class=" bg-zinc-400"
	  on:click={() => goto('/cart')}>
	<Icon icon="mdi:cart-outline" class="inline-flex text-stone-900  text-2xl" />
{$cart.length}
</Button>
