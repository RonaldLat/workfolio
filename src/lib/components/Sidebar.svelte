<script>
	import { ChevronFirst } from "lucide-svelte";

	let className = '';
	export { className as class };
</script>

<div class="h-full bg-transparent w-full z-10 {className}">
	<aside class=" w-full h-full border-r-2">
		<a href="/" class="text-2xl">Ronald Otieno</a>
		<nav class="p-12 text-xl">
			<a class="block" href="/">Home</a>
			<a class="block" href="/about">About</a>
			<a class="block" href="#contact">Contact</a>
			<a class="block" href="/projects">Projects</a>
			<a class="block" href="/d3">D3</a>
			<a class="block" href="/blog">Blog</a>
		</nav>
	</aside>
</div>
