<script>
	import Home from '$lib/Home.svelte';

  export let data;
  const {leads, } = data;

</script>

<main class="bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300">
<pre>
{leads}
</pre>
<ul>
{#if leads}
<p>{leads.data.length} prospects</p>
{#each leads.data as lead }
<li class="bg-slate-400 p-1 rounded-sm w-full my-2 text-sm  max-w-md">
<p><span class=" font-semibold">Name: </span><span>{lead.name}</span></p>
<p> <span class="font-semibold">Phone: </span><a href="tel:{lead.phone_number}" class=" w-fit underline text-sky-600">{lead.phone_number}</a></p>
<p class="">Website: {lead.website}</p>
<p class="">Verified: {lead.verified}</p>
<span>Called: </span><input type="checkbox">
</li>

{/each}
{/if}
</ul>
	<Home />
</main>
