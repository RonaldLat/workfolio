<script>
  import { scroll, animate, ScrollOffset } from 'motion';
  import { onMount } from 'svelte';

  let  image;

  onMount(() => {

    scroll(
      animate(image, {
        clipPath: ['inset(0% 60% 0% 50%)', 'inset(0% 0% 0% 0%)']
      }),

      {
        offset: ['10vh', '70vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    ),
      { target: image, offset: ScrollOffset.Enter };
  });
</script>
    <p class="w-full  mb-14">
      <img class="-z-10 w-full h-[80vh] " bind:this={image} src="js.svg" alt="" />
    </p>

