<script>
  import { business}  from '$lib/store/details'
  import { Button } from "$lib/components/ui/button";
  import Icon from '@iconify/svelte'
 // import {bakeries} from '$lib/bakeries.js'

	import { onMount } from 'svelte';

	let items = [];
  //console.log(bakeries)

	onMount(async () => {
		const res = await fetch(`bedroom.json`);
		let data = await res.json();
		items = data;
    console.log('Home:',items)
	});

</script>

<section class="grid place-items-center w-full space-y-6">
<Button>Hello</Button>
<pre>
</pre>
</section>
