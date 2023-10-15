<script>
  import { Avatar, TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  let tabSet = 0;
</script>

<h1>Projects</h1>
<Avatar src="lat2-smaller.webp" />

<TabGroup>
  <Tab bind:group={tabSet} name="tab1" value={0}>
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <span>(label 1)</span>
  </Tab>
  <Tab bind:group={tabSet} name="tab2" value={1}>(label 2)</Tab>
  <Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
  <!-- Tab Panels --->
  <svelte:fragment slot="panel">
    {#if tabSet === 0}
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {:else if tabSet === 1}
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {:else if tabSet === 2}
      (tab panel 3 contents)
      <span
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span
      >
    {/if}
  </svelte:fragment>
</TabGroup>
