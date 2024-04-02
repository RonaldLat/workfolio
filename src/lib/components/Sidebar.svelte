<script>
  import { ChevronFirst } from 'lucide-svelte';

  let className = '';
  export { className as class };
  export let route;
</script>

<div class="h-full bg-transparent w-full z-10 {className}">
  <aside class=" w-full h-full border-r-2 text-gray-100">
    <nav class="p-12 text-xl space-y-4">
      <a class="block" class:text-white={(route = '/')} href="/">Home</a>
      <a class="block" href="/about">About</a>
      <a class="block" href="#contact">Contact</a>
      <a class="block" href="/blog">Blog</a>
    </nav>
  </aside>
</div>
