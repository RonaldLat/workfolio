<script>
	import { formatDate } from '$lib/utils.js';

	export let data;
	console.log(data.meta);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="article" />
</svelte:head>

<div
	class="w-full bg-lime-50 min-h-screen py-8 flex flex-col items-center justify-center relative overflow-hidden -z-10 lg:py-12"
>
	<article class="prose w-full">
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published at {formatDate(data.meta.date)}</p>
		</hgroup>
		<!-- render the post -->
		<svelte:component this={data.content} />
		<div />
	</article>
</div>
