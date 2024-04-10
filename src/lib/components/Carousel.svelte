<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
	import { category_links } from '$lib/store/products';
  console.log(category_links)
</script>

<Carousel.Root
opts={{
    loop: true
}}
class="w-full max-w-[80%] mx-auto" >
  <Carousel.Content>
    {#each $category_links as category (category.title) }
      <Carousel.Item>
        <div class="p-1 ">
          <Card.Root style="background-image: url('/files/{category.img}')" class="  p-1 bg-center bg-cover bg-slate-600 bg-blend-overlay bg-no-repeat">
            <Card.Content
              class="flex flex-col gap-3 aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold text-gray-100 bg-blend-overlay">{category.title}</span>
					<span class="border font-ubuntu p-1 transition-all hover:bg-myColor-300 bg-myColor-200 rounded-sm  capitalize text-xs text-myColor-700 border-myColor-700"
						><a href="{category.link}">explore now</a></span
					>
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
