<script>
  import * as config from '$lib/config';
  import BlogCard from '$lib/components/ui/BlogCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<div class="px-3 md:px-5 mx-auto w-full container">
  <h1>Ronald's Blog</h1>

  <ul
    class=" grid grid-cols-1 md:grid-cols-2 w-full mx-auto justify-center place-items-center items-center gap-2 text-center"
  >
    {#each data.posts as post}
      <li class="h-full w-fit px-2 p-1 rounded-sm">
        <a href={`blog/${post.slug}`}>
          <BlogCard {post} />
        </a>
      </li>
    {/each}
  </ul>
</div>
