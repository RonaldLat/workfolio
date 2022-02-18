<script>
	export let item;
	import { cart } from '../store/products';

  let disabled =false
	function addToCart(item) {
		if ($cart.includes(item)) {
			console.log('item is in cart');
		} else {
			cart.update((data) => {
        disabled=true
				return [...data, item];
			});
		}
	}
</script>

<div class=" rounded p-2 space-y-2  grid justify-items-center bg-slate-50 text-center  place-items-end ">
	<img
		class="bg-slate-200 h-auto w-auto object-contain"
		src="/all_images/{item.name.toLowerCase().replace(/ /g, '_')}.jpg"
		alt={item.name}
	/>
	<a href="/details/{item.name.toLowerCase().replace(/ /g, '-')}" class="text-center text-gray-600 "
		>{item.name}</a
	>
	<p class="text-sm space-x-2 font-semi-bold">
		<span class="">{item.special_price}</span>
		<span class="line-through">{item.old_price}</span>
	</p>
	<button
		on:click={() => {
			addToCart(item);
		}}
    disabled={disabled}
		class="text-lg block disabled:opacity-75 font-semibold py-1 px-3 text-gray-100 hover:text-white bg-gray-700 w-fit rounded-lg hover:shadow-md transition duration-300"
		>+</button
	>
</div>
