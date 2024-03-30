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

    let trigger, box;

onMount(() => {
    gsap
  .timeline({
    scrollTrigger: {
      trigger: trigger,
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=150%"
    }
  })
  .to(".box", {
    force3D: true,
    duration: 1,
    xPercent: 100,
    ease: "power1.inOut",
    stagger: { amount: 1 }
  })
  .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
  .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

  });
</script>

<body>
<section bind:this={trigger} class="trigger">
  <span class="down">Scroll<br />Down</span>
  <span class="up">Scroll<br />Up</span>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</section>

</body>

<style>
body {
  --light: #e6f03a;
  --light: #eee;
  --dark: #161616;
}

section {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--light);
}

span {
  position: absolute;
  display: block;
  text-align: center;
  font-size: 50px;
  z-index: 2;
  width: 50%;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--light);
  top: calc(50vh - 56px);

  &.up {
    right: 0;
  }

  &.down {
    left: 0;
  }
}

.box {
  height: 1.2vh;
  width: 50vw;
  margin-bottom: -0.2vh;
  background: var(--dark);
  display: block;
}

</style>
