<script>
  import { scroll, animate, ScrollOffset } from 'motion';
  import { onMount } from 'svelte';

  let header, content, title1, title2, image;

  onMount(() => {
    scroll(
      animate(header, {
        backgroundPosition: ['50% 0', '50% 100%'],
        backgroundColor: [null, '#292929'],
        height: [null, `0.5rem`],
        //filter: ['brightness(100%)','brightness(50%)'],
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(title1, {
        paddingTop: [null, 0],
        paddingLeft: '1.5rem',
        paddingBottom: '0.5rem',
        alignItems: 'center',
        fontSize: [null, '1.5rem']
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(title2, {
        opacity: 0,
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(image, {
        clipPath: ['inset(0% 60% 0% 50%)', 'inset(0% 0% 0% 0%)'],
      }),
      {
        offset: ['0vh', '90vh'] ,
      }
    ),
      { target: image, offset: ScrollOffset.enter };
  });
</script>

<div
  bind:this={header}
  class="fixed z-10 py-8 px-3 top-0 left-0 w-screen h-[calc(100vh-29px)] grid grid-rows-6 place-items-center text-left  bg-[url('/choates.jpg')] bg-blend-overlay bg-cover bg-center"
  id="sticky-parallax-header"
>
  <p
    bind:this={title1}
    class="h-full w-full font-bold font[Play] text-5xl text-gray-50 flex items-center"
  >
    USA:THE CHOATES
  </p>
  <p
    bind:this={title2}
    class=" self-nd w-full h-full text-gray-300 pr-5 pb-4  flex text-5xl   items-nd jstify-end"
  >
FAMILY OF COMPANIES LLC
  </p>
</div>

  <div class="min-h-screen mt-96">
  </div>

<style>
  #content {
    max-width: 60em;
    margin-top: 100vh;
  }
</style>
