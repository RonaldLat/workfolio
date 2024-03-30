<script>
  import { formatDate } from '$lib/utils.js';

  export let data;
  console.log('slug',data);
</script>

<svelte:head>
  <title>{data.meta.title}</title>
   <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content="A constant inclusion on lists of forests to see before you die here's how to see the real thing." />
  <meta property="og:url" content="http://www.cnn.com/2014/08/11/travel/sagano-bamboo-forest/" />
  <meta property="og:site_name" content="CNN.com" />
  <meta property="article:published_time" content="2014-08-12T00:01:56+00:00" />
  <meta property="article:author" content="CNN Karla Cripps" />
</svelte:head>

<div
  class="px-3 md:px-5 w-full bg-transparent pb-28 min-h-screen py-8 flex flex-col items-center justify-center relative overflow-hidden lg:py-12"
>
  <article
    class="prose text-gray-800 prose-h1:font-[Maven] prose-h2:font-[Caudex] w-full bg-transparent"
  >
    <hgroup>
      <h1 class="">{data.meta.title}</h1>
      <p>Published at {formatDate(data.meta.date)}</p>
    </hgroup>
    <img src="/blogImages/{data.meta.banner}" alt="" class="w-full h-auto rounded-md object-center object-cover">
    <!-- render the post -->
    <svelte:component this={data.content} />
    <div />
  </article>
</div>
