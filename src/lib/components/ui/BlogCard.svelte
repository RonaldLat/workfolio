<script>
	import { formatDate } from '$lib/utils.js';
	export let post;
</script>

<!-- component -->
<div
	class="max-w-md text-left w-full rounded-3xl p-px text-gray-800 bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800"
>
	<div
		class="flex flex-col hover:bg-myColor-200 transition delay-150 duration-150 ease-in-out gap-3 justify-end rounded-[calc(1.5rem-1px)] p-10 bg-myColor-50 ark:bg-gray-900"
	>
		<h2 class="text-2xl text-bold font-[Caudex] text-gray-900">{post.title}</h2>
		<p class="text-md font-[Roboto]">{post.excerpt}</p>
		<h1 class="text-gray-700 text-sm font-[Play]">{formatDate(post.date)}</h1>

		<div class="mt-8 flex gap-4 items-center hidden">
			<img class="h-12 w-12 rounded-full" src="" alt="" />
			<div>
				<h3 class="text-lg font-medium">Oketa Fred</h3>
				<span class="text-sm tracking-wide text-gray-600 dark:text-gray-400"
					>Fullstack Developer</span
				>
			</div>
		</div>
	</div>
</div>
