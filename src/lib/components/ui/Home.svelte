<script>
  import { gFade } from '$lib/gsapAnimations/tweenMe';
</script>

<div
  class="relative flex flex-col-reverse font-[Ubuntu] w-full py-16 lg:pt-0 lg:flex-col lg:pb-0"
>
  <div
    class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
  >
    <svg
      class="absolute left-0 hidden h-full text-gray-400 transform -translate-x-1/2 lg:block"
      viewBox="0 0 100 100"
      fill="currentColor"
      preserveAspectRatio="none slice"
    >
      <path d="M50 0H100L50 100H0L50 0Z" />
    </svg>
    <img
      class="object-cover w-full bg-myColor-100 rounded shadow-sm h-96 lg:rounded-none lg:shadow-none md:h-auto lg:h-full"
      src="/lat2-smaller.webp"
      alt=""
    />
  </div>
  <div
    class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
  >
    <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
      <p
        class="inline-block w-full py-px mb-4 text-xs font-[Play] font-semibold tracking-wider uppercase"
      >
        who am i?
      </p>
      <h2
        class="mb-5 font-[Maven] text-4xl font-extrabold first-letter:text-6xl first-letter:text-myColor-600 tracking-widest text-gray-900 sm:text-4xl sm:leading-none"
      >
        Building intelligent sytems,<br class="hidden md:block" />
        <span class="inline-block text-deep-violet-accent-400"
          >one line at a time.</span
        >
      </h2>
      <div
        class="flex-row space-y-2 pr-5 mb-5 text-base text-gray-700 md:text-lg"
      >
        <p>
          Hello! I'm Ronald Otieno, a software developer specializing in web
          development, data visualization, and machine learning.
        </p>
        <p>
          With expertise in dynamic web applications and a focus on D3.js for
          captivating visualizations, I'm excited to collaborate on impactful
          projects. Let's make a difference together!
        </p>
      </div>
    </div>
  </div>
</div>
