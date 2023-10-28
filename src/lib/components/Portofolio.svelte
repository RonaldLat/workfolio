<script>
  import { ChevronRight, Code, ExternalLink } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  const projects = [
    {
      name: 'Furniture Place Clone',
      url: 'https://frosty-hopper-d52530.netlify.app/',
      img: 'furniture-palace-clone-pc.webp',
      alt: 'screenshot of Furniture Palace clone Website',
      git: '',
      description: '',
    },

    {
      name: 'Ideal Sofas Website',
      url: 'https://happy-liskov-d56336.netlify.app/',
      img: 'ideal-sofas-pc.webp',
      alt: 'screenshot of Ideal Sofas Website',
      git: ''
      description: '',
    },

    {
      name: 'Dudi Resort website',
      url: '',
      img: 'dr-portofolio.webp',
      alt: 'screenshot of Dudi Resort Website',
      git: ''
    },

    {
      name: 'Milly Cakes website',
      url: '',
      img: 'mc-portofolio.webp',
      alt: 'screenshot of Dudi Resort Website',
      git: ''
      description: '',
    }
  ];
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray('.slide');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-sliders',
        pin: '.main',
        pinSpacing: true,
        scrub: 1,
        end: '+=3000'
      }
    });

    gsap.to('.next-block', {
      // backgroundColor: 'tomato',
      scrollTrigger: {
        trigger: '.next-block',
        pinnedContainer: '.main',
        start: 'top 50%',
        toggleActions: 'play none reset none'
      }
    });
  });
</script>

<div class="main">
  <div class="horizontal-sliders w-[500%] ">
    {#each projects as project}
      <!-- component -->
      <div class="slide w-full max-w-lg py-4 px-8  shadow-lg rounded-lg my-20 flex flex-col justify-center">
        <div class=" w-full justify-center md:justify-end -mt-16">
          <img
            class="w-5/6 h-auto object-cover rounded-md border-2 border-indigo-500"
            src="{project.img}"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
          <p class="mt-2 text-gray-600">{project.name}</p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">{project.git}</a>
        </div>
      </div>
    {/each}
  </div>
  <div class="next-block bg-myColor-50 hidden">this is next block</div>
</div>

<style>
  * {
    margin: 0;
  }
  .main {
    overflow-x: hidden;
  }
  .horizontal-sliders {
    display: flex;
    flex-wrap: no-wrap;
    /* width: 500%; */
    overflow-x: hidden;
  }
  .slide {
    height: 80vh;
    /* width: 100%; */
  }
  .slide:nth-child(2n) {
    /* background-color: aqua; */
  }
  .next-block {
    height: 100vh;
  }
</style>
