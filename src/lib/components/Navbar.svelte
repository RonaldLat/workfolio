<script>
	import Dropdown from 'svelte-atoms/Dropdown.svelte';
	import Button from 'svelte-atoms/Button.svelte';
</script>

<div class=" w-fit rounded-md py-2">
<Dropdown class="w-fit bg-sky-500 rounded-md">
	<Button   class="bg-green-600">Categories</Button>
	<ul slot="dropdown" class="flex flex-col p-4 bg-sky-400">
		<li>
			<a href="/living" class="href">Living</a>
			<a href="/bedroom" class="href">Bedroom</a>
			<a href="/dining" class="href">Dining</a>
		</li>
	</ul>
</Dropdown>

</div>

<style>
	.content {
		padding: 8px;
	}
</style>
