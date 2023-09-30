<script>
	export let quote;
</script>

<div class="bg-gray-900 space-y-2 border border-myColo-600 mx-2 p-2 rounded-md">
	<p class="text-myColo-400 font-[Play]">Daily Stoic</p>
	<img
		class="h-20 w-auto rounded-md"
		src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV854JIL0_j2RTDqxwS1E_RHToQQYProgsw&usqp=CAU"
		alt="Marcus Aurelius"
	/>
	<p class="italic font-[Maven] text-myColo-100">{quote.text}</p>
	<p class="text-myColo-50 text-xs">{quote.author}</p>
</div>
