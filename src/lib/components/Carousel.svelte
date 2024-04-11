<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
	import { category_links } from '$lib/store/products';
	import { makes } from '$lib/store/products';
  import Icon from '@iconify/svelte'

  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  console.log(category_links)
</script>

<div class="mt-20 text-center space-y-8">
<span class=" uppercase group text-stone-600 font-extrabold text-2xl font-caudex transition duration-300 ">
Top makes
<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-600"></span>
</span>
</div>
<Carousel.Root
opts={{
    loop: true
}}
class="w-full max-w-[80%] mx-auto" >
  <Carousel.Content>
    {#each $makes as make (make.title) }
      <Carousel.Item>
        <div class="p-1 ">
          <Card.Root style="background-image: url('/files/{make.img}')" class="  p-1 bg-center bg-cover bg-slate-600 bg-blend-overlay bg-no-repeat">
            <Card.Content
              class="flex flex-col gap-3 aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold text-gray-100 bg-blend-overlay underline decoration-myColor-500 capitalize tracking-wide">{make.title}</span>
					<span class="border font-ubuntu p-1 transition-all hover:bg-myColor-300 bg-myColor-200 rounded-sm  capitalize text-xs text-myColor-700 border-myColor-700 hidden"
						><a href="/">explore now</a></span
					>
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <p class="text-center text-3xl w-full">. . .</p>
</Carousel.Root>


<Collapsible.Root class="w-full space-y-2 mx-auto py-14">
  <div class="flex items-center justify-center w-full max-w-md mx-auto space-x-4 px-4 bg-myColor-200 py-3 rounded-md">
    <h4 class="text-2xl font-semibold capitalize text-center">shop by category</h4>
    <Collapsible.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
        <Icon icon="heroicons:chevron-up-down" class=" text-gray-950 text-3xl inline-block  rounded-sm " />
        <span class="sr-only">Toggle</span>
      </Button>
    </Collapsible.Trigger>
  </div>
  <Collapsible.Content class="space-y-2 w-full ">
{#each $category_links as category }
        <div class="p-1 h-auto mx-auto w-full max-w-md  ">
          <div style="background-image: url('/files/{category.img}')" class="  p-1 bg-center bg-cover bg-slate-600 bg-blend-overlay bg-no-repeat rounded-md">
            <div
              class="flex flex-col gap-3  items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold text-gray-100 bg-blend-overlay">{category.title}</span>
					<span class="border font-ubuntu p-1 transition-all hover:bg-myColor-300 bg-myColor-200 rounded-sm  capitalize text-xs text-myColor-700 border-myColor-700"
						><a href="{category.link}">explore now</a></span
					>
            </div>
          </div>
        </div>

{/each}
  </Collapsible.Content>
</Collapsible.Root>
