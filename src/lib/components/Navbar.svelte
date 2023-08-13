<script>
	import Icon from '@iconify/svelte';
	import Dropdown from 'svelte-atoms/Dropdown.svelte';
	import Button from 'svelte-atoms/Button.svelte';
	import Auth from '$lib/Auth.svelte';
	import { currentUser } from '$lib/store/authState.js';
	import { goto } from '$app/navigation';

	const navigateTo = () => {
		goto(`/account/${$currentUser}`);
	};
</script>

<div class="flex flex-row flex-wrap justify-between px-2 items-center">
	<a href="/">
		<Icon icon="mdi:home" class="text-white text-3xl" />
	</a>

	<div class=" w-fit rounded-md py-2">
		<Dropdown class="w-fit bg-sky-500 rounded-md">
			<Button class="bg-green-600">Categories</Button>
			<ul slot="dropdown" class="flex flex-col p-4 bg-sky-400">
				<li>
					<a href="/living" class="href">Living</a>
					<a href="/bedroom" class="href">Bedroom</a>
					<a href="/dining" class="href">Dining</a>
				</li>
			</ul>
		</Dropdown>
	</div>
	{#if $currentUser}
		<p on:click|preventDefault={navigateTo}>Welcome {$currentUser}</p>
	{/if}
	<Auth />
</div>

<style>
	.content {
		padding: 8px;
	}
</style>
