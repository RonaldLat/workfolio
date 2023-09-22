<script>
  import Sidebar from '$lib/components/Sidebar.svelte';
    import "../app.css";

import {Menu, Linkedin, Github} from 'lucide-svelte'
  let showSideNav = false;


  function toggleSideNav() {
    showSideNav = !showSideNav;
  }
</script>

<div
  class="fixed top-0 left-0 h-full w-64 bg-emerald-200 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300 "
  class:translate-x-0={showSideNav}
  class:-translate-x-full={!showSideNav}
>
  <!-- Your side navigation content goes here -->
  <button class="p-2 bg-blue-500 text-white" on:click={toggleSideNav}>Toggle SideNav</button>
  <!-- Add other side navigation content -->
<Sidebar/>
  <!-- Toggle button within the side navigation menu -->
  <button class="p-2 bg-red-500 text-white" on:click={toggleSideNav}>Close SideNav</button>
</div>
<slot/>
<nav class="fixed bottom-0 left-0 p-2 bg-blue-500 text-white flex flex-row w-full justify-evenly">
<button class="" on:click={toggleSideNav}><Menu/></button>
<Linkedin/>
<Github/>
</nav>

