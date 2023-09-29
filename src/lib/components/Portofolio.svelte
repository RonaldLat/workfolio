<script>
	import { ChevronRight, Code, ExternalLink } from "lucide-svelte";

      const projects= [
        {
          name: 'Furniture Place Clone',
          url: 'https://frosty-hopper-d52530.netlify.app/',
          img: 'furniture-palace-clone-pc.webp',
          alt: 'screenshot of Furniture Palace clone Website',
          git: '',
        },

        {
          name: 'Ideal Sofas Website',
          url: 'https://happy-liskov-d56336.netlify.app/',
          img: 'ideal-sofas-pc.webp',
          alt: 'screenshot of Ideal Sofas Website',
          git: '',
        },

        {
          name: 'Dudi Resort website',
          url: '',
          img: 'dr-portofolio.webp',
          alt: 'screenshot of Dudi Resort Website',
          git: '',
        },

        {
          name: 'Milly Cakes website',
          url: '',
          img: 'mc-portofolio.webp',
          alt: 'screenshot of Dudi Resort Website',
          git: '',
        },

      ]
</script>
  <div
    class="px-4 py-16 mx-auto overflow-x-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-[Ubuntu]"
  >
    <div>
      <p
        class="inline-block w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left uppercase font-[Play] rounded-full text-gray-700"
      >
        work
      </p>
    </div>

    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="max-w-lg font-[Play] mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
      >
        <span class="inline-block mb-1 sm:mb-4">
          Things I have <span class="text-myColor-500">built </span></span
        >
        <div
          class="h-1 ml-auto duration-300 origin-left transform scale-x-30 group-hover:scale-x-100"
        ></div>
      </h2>
      <p class="text-gray-700 md:text-lg">
        Some of personal and professional projects I have worked on.
      </p>
    </div>

    <ul
      class="flex mb-8 overflow-x-auto snap-x lg:grid lg:gap-6 gap-8 lg:row-gap-5 lg:grid-cols-3 lg:row-gap-6 lg:grid-cols-2"
    >
    {#each projects as project }
      <li
        class="flex-shrink-0 w-[85%] scroll-ml-6 py-4 px-2 snap-center"
      >
        <div
          class="relative overflow-hidden rounded bg-slate-200 drop-shadow-sm drop-shadow-myColor-800 hover:drop-shadow-myColor-400 hover:drop-shadow-sm transition duration-200 transform hover:translate-y-2 hover:shadow-lg"
        >
          <img
            class="object-contain w-full h-56 md:h-64 xl:h-80 "
            src="/{project.img}"
            alt="{project.alt}"
          />
          <div
            class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75"
          >
            <p class="text-lg tracking-wide text-gray-200">
              { project.name }
            </p>

            <ul
              class="flex text-gray-200 underline decoration-2 underline-offset-2 gap-6"
            >
              <li class="text-sm">
                <a href="{project.url}" class="decoration-gray-300 hover:text-myColor-300">
                  <p  size="1.5em"><ExternalLink/></p>
                </a>
              </li>
              <li class="text-sm">
                <a href="{project.git}" class="decoration-gray-300 hover:text-myColor-300">
                  <p  size="1.5em"><Code/></p>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </li>
      {/each}
    </ul>
    <div class="text-center">
      <a
        href="/portofolio"
        aria-label=""
        class="inline-flex items-center font-semibold underline text-myColor-600 decoration-2 transition-colors duration-200 hover:text-myColor-800"
      >
        See more
        <ChevronRight/>
      </a>
    </div>
  </div>
