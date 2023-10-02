<script>
    import {gsap} from 'gsap'
	import { onMount } from 'svelte';
    onMount(()=>{
    gsap.to(".green",  {
    scale: 0.1,
    y: 60,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    delay: 1,
    stagger: {
      amount: 1.5,
      grid: "auto",
      from: "center"
    }
  });

        })

</script>
<style>
#demo {
  max-width: 600px;
  margin: 0 auto;
}
.box {
  margin: 0px 1.5% 1.5% 0px;
  border-radius: 0;
}
h1, h2 {
  font-weight: 400;
}

</style>

<div id="demo"><h2>GSAP 3 Stagger Demo</h2>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
  <div class="box green"></div>
</div>
