<script>
  import Home from '$lib/components/ui/Home.svelte';
  import Portofolio from '$lib/components/Portofolio.svelte';
  import Tools from '$lib/components/Tools.svelte';
  import DailyStoic from '$lib/components/DailyStoic.svelte';
  export let data;

  const { quote } = data;
</script>

<div class="min-h-screen font-[Ubuntu] bg-myColor-50 px-2 lg:px-4">
  <Home />
  <DailyStoic {quote} />
  <Portofolio />
  <Tools />
</div>
