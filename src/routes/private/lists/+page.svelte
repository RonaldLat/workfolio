<script lang="ts">
  import DataTable from "./data-table.svelte";

  export let data;
  let {leads, leads2 } = data;
  console.log('superman', data)
</script>

<div class="  mx-auto py-10">
  <DataTable leads={leads2}/>
</div>
