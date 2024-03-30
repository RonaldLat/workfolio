<script>
  import { formatDate } from '$lib/utils.js';

  export let data;
  console.log('slug',data);
</script>

<svelte:head>
  <title>{data.meta.title}</title>
   <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.excerpt} />
  <meta property="og:url" content={data.currentRoute} />
  <meta property="og:site_name" content="ByteBox" />
  <meta property="article:published_time" content={data.meta.date}/>
  <meta property="article:author" content="Ronald Otieno" />
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
