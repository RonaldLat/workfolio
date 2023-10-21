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
      git: ''
    },

    {
      name: 'Ideal Sofas Website',
      url: 'https://happy-liskov-d56336.netlify.app/',
      img: 'ideal-sofas-pc.webp',
      alt: 'screenshot of Ideal Sofas Website',
      git: ''
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
    }
  ];
  onMount(()=>{
    gsap.registerPlugin(ScrollTrigger);
      let scroll_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.factsContainer',
            start: "top center",
            // pin: true,
            scrub: true,
            end: "+=300",
            // markers: true,
        }
    }),
        facts = [...document.querySelectorAll('.fact')]
    scroll_tl.to('.factsContainer h2', {
        scale: 1.5,
        duration: 1,
        ease: "slow"
    })
    scroll_tl.to(facts, {
        xPercent: -85 * (facts.length - 1),
        scrollTrigger: {
            trigger: ".factsContainer_sm",
            start: "center center",
            pin: true,
            // horizontal: true,
            // pinSpacing:false,
            // markers: true,
            scrub: 1,
            snap: 1 / (facts.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            // end: () => `+=${smallFactsContainer.offsetWidth}`
            end: () => `+=4320`
        }
    });
      })
</script>

 <div class="wrapper">
   <div class="factsContainer">
   <h2>Few Facts about me</h2>
   <div class="factsContainer_sm">
     <div class="fact">
       <h3>3 words to describe me: </h3>
       <img src="https://source.unsplash.com/random" alt="">
       <h3>Creative , Adventourous , Hardworking</h3>
     </div>
     <div class="fact">
       <h3>Where are you most likely to be found</h3>
       <img src="https://source.unsplash.com/random" alt="">
       <h3>With my head in the fridge</h3>
     </div>
     <div class="fact">
       <h3>Favourite Music Artist</h3>
       <img src="https://source.unsplash.com/random" alt="">
       <h3>Kygo</h3>
     </div>
     <div class="fact">
       <h3>Favourite Sport</h3>
       <img src="https://source.unsplash.com/random" alt="">
       <h3>Swimming</h3>
     </div>
   </div>
</div>
   <div class="socialContainer">
     <h3>Well</h3>
   </div>
</div>

<style>
* {
  margin : 0;
  padding : 0;
}

.wrapper {
	min-height: 100vh;
    overflow-x: hidden;
}

.factsContainer {
    padding: 0em 2em;
    text-align: center;
    line-height: 10vh;
}

.factsContainer h2 {
    font-size: 1.8em;
    transform: scale(0);
    padding: 2em 0em;
    margin-bottom: 15vh;
    color: #F0C368;
}

.factsContainer_sm {
    display: flex;
    width: 300vw;
}

.fact {
    display: flex;
    flex-direction: column;
    height: 40vh;
    flex: 1;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
    color: #F0C368;
}

.fact img {
    width: 25vw;
    height: 25vh;
    margin: 1em;
}

.socialContainer{
  width: 100vw;
  height: 100vh;
}
</style>
