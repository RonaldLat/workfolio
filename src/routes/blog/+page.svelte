<script>
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<h1 class="text-gray-800">Blog home page</h1>
<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<div class="container">
	<h1>Ronald's Blog</h1>

	<ul class="flex flex-col justify-center items-center gap-2 text-center">
		{#each data.posts as post}
			<li class="bg-sky-200 w-fit px-2 p-1 rounded-sm">
				<a href={`blog/${post.slug}`}>
					<h1>{post.title}</h1>
					<h1>{formatDate(post.date)}</h1>
				</a>
			</li>
			<hr />
		{/each}
	</ul>
</div>
