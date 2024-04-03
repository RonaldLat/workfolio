<script>
    import { scroll, animate, ScrollOffset } from "motion"
    import { onMount } from "svelte";

    const content =[
    {name: 'Internal divisions focus on imports export all precious metals , poultry food products direct distribution '},
    {name: 'Top expert in fuel oil distribution around the world in partnerships with over 6000 refineries , and holding fuel farms'},
    {name: "Top expert team in international development of engineering service's  of infrastructure roadway , new bridge development"},
    {name:'State of art AI technology, smart safe city developmen,t international private contracts, source government services and security contracts programs provider'}
    ]

let images =[]
onMount(()=>{
        images = Array.from(document.querySelectorAll('.motion'));

console.log(images)

images.forEach((image) => {
  scroll(
    animate(image, { clipPath: ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"] }),
    { target: image, offset: ScrollOffset.Enter }
  );
});

    })
</script>

  <p class="motion full-bleed text-center"><span class="debugwrapper"><img src="https://images.squarespace-cdn.com/content/v1/5e3ed69fea6c273a7a82981d/1617723630131-NNNXQ0Y66ZF3LISUGAVT/kelly-kiernan-wK5czayU1t0-unsplash.jpg?format=1500w" alt="" title="" width="1080" height="720" class="revealing-image" id="revealing-image" /></span><br /><a href="https://unsplash.com/photos/px_1j-m59i8">polar bear walking</a> by <a href="https://unsplash.com/@dtbosse">daniel bosse</a></p>

  <p class="motion full-bleed text-center"><span class="debugwrapper"><img src="https://images.squarespace-cdn.com/content/v1/5e3ed69fea6c273a7a82981d/1617723630131-NNNXQ0Y66ZF3LISUGAVT/kelly-kiernan-wK5czayU1t0-unsplash.jpg?format=1500w" alt="" title="" width="1080" height="720" class="revealing-image" id="revealing-image" /></span><br /><a href="https://unsplash.com/photos/px_1j-m59i8">polar bear walking</a> by <a href="https://unsplash.com/@dtbosse">daniel bosse</a></p>
  <p class="motion">nam pulvinar congue condimentum. pellentesque fringilla ante sed massa tincidunt feugiat. nulla bibendum est eros, non malesuada dolor vehicula in. morbi eu cursus arcu. phasellus ultricies ornare lorem, non interdum orci condimentum eu. donec condimentum condimentum ligula ut placerat. vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. quisque orci velit, mattis et nibh non, tempor finibus erat. nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. nunc vehicula imperdiet leo in vulputate. quisque quis dolor orci.</p>



<div class="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-5 py-14">
{#each content as data}

    <div class="rounded-xl bg-white p-6 text-center shadow-xl moton ">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-myColor-400 shadow-lg shadow-myColor-500/40">
      </div>
      <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 capitalize">content one</h1>
      <p class="px-4 text-gray-500">{data.name}</p>
    </div>
{/each}
</div>
