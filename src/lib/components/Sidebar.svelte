<script>

  let className = '';
  export { className as class };
  export let route;
</script>

<div class="h-full bg-transparent w-full z-10 {className}">
  <aside class=" w-full h-full border-r-2 text-gray-100">
    <nav class="p-12 text-xl space-y-4">
      <a class="block" class:text-white={(route = '/')} href="/">Home</a>
      <a class="block" href="/group">Groups</a>
      <a class="block" href="/report">Report</a>
      <a class="block" href="/account">Account</a>
      <a class="block" href="/register2">Register</a>
    </nav>
  </aside>
</div>

