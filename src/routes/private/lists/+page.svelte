<script lang="ts">
  import DataTable from "./data-table.svelte";

  export let data;
  let {leads} = data;
</script>

<div class="container mx-auto py-10">
  <DataTable leads={leads.data}/>
</div>
