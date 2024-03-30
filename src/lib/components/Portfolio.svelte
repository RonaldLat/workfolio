<script>
 // import { ChevronRight, Code, ExternalLink } from 'lucide-svelte';
  import { scroll, animate, ScrollOffset} from 'motion'
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
      description: ''
    },

    {
      name: 'Ideal Sofas Website',
      url: 'https://happy-liskov-d56336.netlify.app/',
      img: 'ideal-sofas-pc.webp',
      alt: 'screenshot of Ideal Sofas Website',
      git: '',
      description: ''
    },

    {
      name: 'Dudi Resort website',
      url: '',
      img: 'dr-portofolio.webp',
      alt: 'screenshot of Dudi Resort Website',
      git: ''
    },

  ];

    let trigger, container;

onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + '.container'.offsetWidth
  }
});


  });
</script>



<div class="container">
  <div class="description panel blue">
    <div><h1>Horizontal snapping sections (simple)</h1>
      <p>Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the sections in an organic way based on the velocity. The snapping occurs based on the natural ending position after momentum is applied, not a simplistic "wherever it is when the user stops".</p>
      <div class="scroll-down">Scroll down<div class="arrow"></div></div>
    </div>
  </div>


  <section class="panel red">
    ONE
  </section>
  <section class="panel orange">
    TWO
  </section>
  <section class="panel purple">
    THREE
  </section>
  <section class="panel green">
    FOUR
  </section>
  <section class="panel gray">
    FIVE
  </section>

</div>



<header>
  <a href="https://greensock.com/scrolltrigger">
    <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
  </a>
</header>

<style>

.container {
	width: 400%;
	height: 100vh;
	display: flex;
	flex-wrap: nowrap;
}

.firstContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: yellow;
}

.lastContainer {
  display: flex;
  height: 100vh;
  background: yellow;
}
</style>
