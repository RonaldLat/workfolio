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
        //paddingTop: [null, 0],
        //paddingLeft: '1.5rem',
        //paddingBottom: '0.5rem',
        //alignItems: 'center',
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
        clipPath: ['inset(0% 50% 0% 50%)', 'inset(0% 0% 0% 0%)'],
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
  class="fixed z-10 py-8 px-3 top-0 left-0 w-screen h-[calc(100vh-0px)] grid grid-rows-1 place-items-center text-center  bg-[url('/choates.jpg')] bg-blend-overlay bg-cover bg-center bg-[#6b6b6b]"
>
  <div class="hidde absolute inset-0 bg-[black] opacity-40 rounded-md"></div>
  <div
    class="absolute inset-0 font-bold  flex flex-col items-center justify-center  w-full bg-gren-300 font-[Play] text-5xl text-gray-50  z-9  "
  >
    <p bind:this={title1} class="pt-0 text-5xl">USA : THE CHOATES </p>
  </div>
  <p
    class="hidden w-full items-start bg-sky-400 h-full  text-gray-300   text-5xl   "
  >
FAMILY OF COMPANIES LLC
  </p>
</div>

  <div class="min-h-screen mt-96">
  </div>

