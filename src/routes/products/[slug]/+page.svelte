<script>
import Icon from '@iconify/svelte'


	export let data;
  const {product } = data;
</script>



<section class="min-h-screen bg-transparent text-gray-950 text-left pb-20">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center">
            <img class="object-contain object-center rounded-md lg:w-1/2 lg:mx-6 w-full h-96  lg:h-[36rem]" src="/files/{product.imageUrl}" alt="">

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

                <h1 class="text-3xl font-semibold text-gray-800  lg:text-3xl lg:w-96 uppercase">
                    {product.name}
                </h1>
            <div class="bg-myColor-100 py-3 px-1 max-w-lg">
            <p class="space-x-5"><span class="text-xl font-semibold">Price:</span>  <span> Ksh.{product.price}</span> <del>Ksh.{product.old_price}</del></p>
            </div>

                <p class="max-w-lg mt-6 text-gray-800  ">{product.description}</p>


            </div>
        </div>
    </div>
          <div class="mx-auto w-full max-w-sm mt-20">
          <a href="https://wa.me/+254723717089" target="_blank" class="flex justify-center items-center gap-0.5 bg-myColor-100 rounded-lg py-5 border border-myColor-300">
          <Icon icon="logos:whatsapp-icon" class="text-4xl"/>
          <span class="text-xl">Order Now</span>
          </a>
          </div>
</section>

