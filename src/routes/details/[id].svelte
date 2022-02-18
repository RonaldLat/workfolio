<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { name } from '../../store/products';

	const param = $page.params.id;
	let item = {};
	let all_items = [];

	/*onMount(async () => {*/
	/*const res = await fetch(`/bedroom.json`);*/
	/*let data = await res.json()*/
	/*});*/
	const urls = ['/bedroom.json', '/outdoor.json'];

	onMount(() => {
		Promise.all(urls.map((url) => fetch(url).then((r) => r.json()))).then((results) => {
			/*all_items = results.reduce((a, b) => a.concat(b), []);*/
			all_items = results.flat();

			item = all_items.filter((x) => x.name.toLowerCase() === param.replace(/-/g, ' '));
			item = item[0];
			console.log(item);

			console.log(all_items);
		});
	});
</script>

<div>
	<img
		class="w-64 object-cover rounded-t-md"
		src={'/all_images' + param.replace(/-/g, '_') + '.jpg'}
		alt=""
	/>
	<div class="flex flex-col gap-4 text-left">
		<h3>{item.name}</h3>
		<h4>Details</h4>
		<p>{item.complete_description}</p>
	</div>
</div>
