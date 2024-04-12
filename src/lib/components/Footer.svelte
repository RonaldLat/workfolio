<script>
	import Logo from "./Logo.svelte";
  import { Button } from "$lib/components/ui/button";
  import Icon from '@iconify/svelte'


	let className = '';
	export { className as class };
</script>

<footer class="w-full mx-auto   shadow    {className} rounded-tl-md rounded-tr-md">
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between gap-5">
			<a href="/" class="flex flex-row justify-between text-myColor-1000  items-center w-full  mb-4 sm:mb-0">
                <Logo class="h-9 hidden  w-fit mr-4"/>
                <p class="text-2xl font-semibold">TJ</p>
				<span class="font-ubuntu self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>The Jujari</span
				>
			</a>
			<ul
				class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 hidden"
			>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">About</a>
				</li>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
				</li>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
				</li>
				<li>
					<a href="#" class="hover:underline">Contact</a>
				</li>
			</ul>
		</div>

    <p class="text-gray-800 bg-black mx-auto w-fit my-6 border border-b-myColor-1000 border-r-0 border-l-0 border-t-0  px-4 py-6 rounded-md grid grid-cols-4 md:grid-cols-3 items-center justify-center place-items-center gap-4">
    <Button class="bg-gray-400 hover:brightness-50 transition ease-in-out" href="tel:+254714703045">
    <Icon icon="solar:phone-broken" class="mr-2 h-4 w-4"/>
    <span>Call</span>
    </Button>
    <Button class="bg-gray-300 hover:brightness-50 transition ease-in-out " href="https://wa.me/+254714703045?text=I'm%20ordering">
    <Icon icon="mdi:whatsapp" class="mr-2 h-4 w-4"/>
    <span>WhatsApp</span>
    </Button>

    <span class="text-gray-400 col-span-2">to  place order.</span>
    </p>

		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

		<span class="block text-sm text-gray-500 text-xs sm:text-center dark:text-gray-400"
			>© 2024 <a href="https://ronaldotieno.netlify.com" target="_blank" class="hover:underline  whitespace-nowrap">The Jujari™ by <span class="text-myColor-1000 font-ubuntu hover:cursor-pointer">Ronald Otieno.</span></a>   <span
		>

	</div>
</footer>
