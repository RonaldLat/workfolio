<script>
import { scroll, animate, ScrollOffset } from "motion"
    import { onMount } from "svelte";

let images =[]
onMount(()=>{
        images = Array.from(document.querySelectorAll('p'));

console.log(images)

images.forEach((image) => {
  scroll(
    animate(image, { clipPath: ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"] }),
    { target: image, offset: ScrollOffset.Enter }
  );
});

    })
</script>

<main>
  <h1>the polar bear</h1>






  <p>Internal divisions focus on imports export all precious metals , poultry food products direct distribution </p>

  <p>Top expert in fuel oil distribution around the world in partnerships with over 6000 refineries , and holding fuel farms
</p>
  <p>Top expert team in international development of engineering service's  of infrastructure roadway , new bridge development

</p>
  <p>Top 5 startup development team in the area of new commercial industrial building affordable housing community , hospitals and cities

</p>
  <p>State of art AI technology, smart safe city developmen,t international private contracts, source government services and security contracts programs provider
</p>

  <p class="full-bleed text-center"><span class="debugwrapper"><img src="https://images.squarespace-cdn.com/content/v1/5e3ed69fea6c273a7a82981d/1617723630131-NNNXQ0Y66ZF3LISUGAVT/kelly-kiernan-wK5czayU1t0-unsplash.jpg?format=1500w" alt="" title="" width="1080" height="720" class="revealing-image" id="revealing-image" /></span><br /><a href="https://unsplash.com/photos/px_1j-m59i8">polar bear walking</a> by <a href="https://unsplash.com/@dtbosse">daniel bosse</a></p>

  <p class="full-bleed text-center"><span class="debugwrapper"><img src="https://images.squarespace-cdn.com/content/v1/5e3ed69fea6c273a7a82981d/1617723630131-NNNXQ0Y66ZF3LISUGAVT/kelly-kiernan-wK5czayU1t0-unsplash.jpg?format=1500w" alt="" title="" width="1080" height="720" class="revealing-image" id="revealing-image" /></span><br /><a href="https://unsplash.com/photos/px_1j-m59i8">polar bear walking</a> by <a href="https://unsplash.com/@dtbosse">daniel bosse</a></p>
  <p>nam pulvinar congue condimentum. pellentesque fringilla ante sed massa tincidunt feugiat. nulla bibendum est eros, non malesuada dolor vehicula in. morbi eu cursus arcu. phasellus ultricies ornare lorem, non interdum orci condimentum eu. donec condimentum condimentum ligula ut placerat. vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. quisque orci velit, mattis et nibh non, tempor finibus erat. nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. nunc vehicula imperdiet leo in vulputate. quisque quis dolor orci.</p>

  <p>curabitur ultrices fringilla libero sit amet porta. nulla rhoncus venenatis euismod. praesent non interdum sem. nunc in nibh tincidunt, faucibus sem at, finibus turpis. nullam vel odio blandit, tincidunt urna et, luctus lectus. vivamus porta sem vitae turpis interdum porta eu id ligula. fusce non nisi fringilla, malesuada metus ut, imperdiet ligula. nunc quis lorem nibh. duis pharetra magna vestibulum metus convallis, id mollis ligula vulputate. sed purus est, consectetur non suscipit sit amet, hendrerit at dolor. maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus metus nisi quis enim.</p>

  <p>duis nec nisi a eros dictum euismod nec non enim. donec augue neque, aliquam id finibus a, volutpat ut ligula. nam feugiat odio elit, ut molestie mi tempus vel. etiam vitae velit eget massa scelerisque hendrerit cursus vel justo. sed eget euismod lectus. morbi tincidunt diam ac diam tempor molestie. mauris eget lectus leo. etiam id porta turpis.</p>

  <p>aenean ac pellentesque ante. in hac habitasse platea dictumst. nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est ipsum tempor nisi. phasellus auctor et turpis ultrices fermentum. mauris ac orci sapien. quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar dui, non dictum justo tellus a urna. morbi suscipit et odio a feugiat. sed dui nisi, iaculis a lacus posuere, dictum laoreet felis. class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

  <p>duis nec nisi a eros dictum euismod nec non enim. donec augue neque, aliquam id finibus a, volutpat ut ligula. nam feugiat odio elit, ut molestie mi tempus vel. etiam vitae velit eget massa scelerisque hendrerit cursus vel justo. sed eget euismod lectus. morbi tincidunt diam ac diam tempor molestie. mauris eget lectus leo. etiam id porta turpis.</p>

  <p>aenean ac pellentesque ante. in hac habitasse platea dictumst. nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est ipsum tempor nisi. phasellus auctor et turpis ultrices fermentum. mauris ac orci sapien. quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar dui, non dictum justo tellus a urna. morbi suscipit et odio a feugiat. sed dui nisi, iaculis a lacus posuere, dictum laoreet felis. class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
</main>

<style></style>
