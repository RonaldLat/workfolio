<script>
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '../app.postcss';
  import { fade, fly } from 'svelte/transition';
  import { onNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { Bounce } from 'gsap/gsap-core';
  import Icon from '@iconify/svelte'

  import TheFooter from '$lib/components/TheFooter.svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';
  export let data;

  let topBar;
  let topBarx;

  $: onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap
      .from(topBar, {
        yPercent: -100,
        opacity: 0,
        paused: true,
        ease: 'elastic',
        duration: 0.2
      })
      .progress(1);

    ScrollTrigger.create({
      trigger: topBar,
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? tl.play() : tl.reverse();
      }
    });
  });

  const route = $page.route;

  onNavigate(() => {
    showSideNav = false;
  });
  let showSideNav = false;

  const toggleSideNav = () => (showSideNav = !showSideNav);
</script>

<div class="min-h-screen font-[Poppins] overflow-visible bg-myColor-50">
  <div
    class="fixed z-20 top-0 left-0 h-full w-full md:w-1/2 bg-myColor-800 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300"
    class:translate-x-0={showSideNav}
    class:-translate-x-full={!showSideNav}
  >
    <!-- Your side navigation content goes here -->
    <button
      class="p-2 text-3xl text-white fixed bottom-1 right-1"
      on:click={toggleSideNav}
    >
      chrolet first icon
    </button>
    <!-- Add other side navigation content -->
    <Sidebar {route} />
    <!-- Toggle button within the side navigation menu -->
  </div>

  {#key data.currentRoute}
    <main
      in:fade={{ duration: 200, delay: 200 }}
      out:fade={{ duration: 200 }}
      class="    mx-auto w-full min-h-screen font-[Poppins] px-2 lg:px-5 py-16 overflow-hidden"
    >
      <slot />
    </main>
  {/key}

  <nav
    class="fixed z-30 top-2 left-0 px-3 py-0.5 bg-transparent text-gray-50 h-13  border-gray-400  font-extrabold flex flex-row items-center w-full justify-between transition ease-in"
    class:bg-gray-900={showSideNav}
  >
    <div class="flex w-full gap-3">
      <button
        class="hover:text-myColor-50 transition duration-100 delay-75"
        on:click={toggleSideNav}><Icon icon='mdi-light:menu' class="text-3xl" /></button
      >
    </div>

  </nav>
  <TheFooter />
</div>
