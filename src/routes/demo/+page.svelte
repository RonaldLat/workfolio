<script>
  import { scroll, animate, ScrollOffset } from 'motion';
  import { onMount } from 'svelte';

  let header, content, title1, title2, image;

  onMount(() => {
    scroll(
      animate(header, {
        backgroundPosition: ['50% 0', '50% 100%'],
        backgroundColor: [null, 'black'],
        height: [null, `1.0rem`],
        fontSize: ['calc(4vw + 1em)', 'calc(1vw + 1em)']
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(title1, {
        paddingTop: [null, 0],
        paddingLeft: '1.5rem',
        paddingBottom: '0.5rem',
        alignItems: 'center'
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(title2, {
        opacity: 0
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(image, {
        clipPath: ['inset(0% 60% 0% 50%)', 'inset(0% 0% 0% 0%)']
      }),

      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    ),
      { target: image, offset: ScrollOffset.Enter };
  });
</script>

<div>
  <!-- @TODO: Have https://github.com/flackr/scroll-timeline/pull/52 merged and from then on load the “official” build -->
  <div
    bind:this={header}
    class="fixed py-8 px-3 top-0 left-0 w-screen h-[calc(100vh-29px)] grid grid-rows-2 place-items-center text-4xl text-left bg-gray-800 bg-[url(lat2-smaller.webp)] bg-blend-overlay bg-cover bg-center"
    id="sticky-parallax-header"
  >
    <p
      bind:this={title1}
      class="h-full w-full font-bold font[Play] text-5xl text-gray-50 flex items-center"
    >
      Ronald Otieno
    </p>
    <p
      bind:this={title2}
      class=" self-end w-full h-full text-gray-300 pr-5 pb-14 italic flex text-center items-end justify-end"
    >
      Software Developer
    </p>
  </div>

  <div bind:this={content} id="content">
    <p>
      Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
      aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
      molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit
      cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam
      tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.
    </p>

    <p class="">
      <img bind:this={image} src="js.svg" alt="" />
    </p>

    <p>
      Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa
      tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula
      in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum
      orci condimentum eu. Donec condimentum condimentum ligula ut placerat.
      Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis.
      Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam
      tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta
      quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis
      dolor orci.
    </p>

    <p>
      Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus
      venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt,
      faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna
      et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id
      ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula.
      Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id
      mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet,
      hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien
      ipsum viverra justo, id cursus metus nisi quis enim.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis
      turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor
      ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci.
      Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor
      cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Praesent in leo at tellus ultricies laoreet.
    </p>

    <p>
      Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
      aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
      molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit
      cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam
      tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis
      turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor
      ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci.
      Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor
      cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Praesent in leo at tellus ultricies laoreet.
    </p>

    <p>
      Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
      aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
      molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit
      cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam
      tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.
    </p>

    <p>
      Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam
      efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada
      est ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum.
      Mauris ac orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis
      pulvinar dui, non dictum justo tellus a urna. Morbi suscipit et odio a
      feugiat. Sed dui nisi, iaculis a lacus posuere, dictum laoreet felis.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos.
    </p>

    <p>
      Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa
      tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula
      in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum
      orci condimentum eu. Donec condimentum condimentum ligula ut placerat.
      Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis.
      Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam
      tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta
      quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis
      dolor orci.
    </p>

    <p>
      Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus
      venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt,
      faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna
      et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id
      ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula.
      Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id
      mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet,
      hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien
      ipsum viverra justo, id cursus metus nisi quis enim.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis
      turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor
      ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci.
      Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor
      cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Praesent in leo at tellus ultricies laoreet.
    </p>

    <p>
      Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
      aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
      molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit
      cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam
      tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.
    </p>

    <p>
      Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam
      efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada
      est ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum.
      Mauris ac orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis
      pulvinar dui, non dictum justo tellus a urna. Morbi suscipit et odio a
      feugiat. Sed dui nisi, iaculis a lacus posuere, dictum laoreet felis.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos.
    </p>

    <p>
      Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa
      tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula
      in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum
      orci condimentum eu. Donec condimentum condimentum ligula ut placerat.
      Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis.
      Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam
      tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta
      quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis
      dolor orci.
    </p>

    <p>
      Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus
      venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt,
      faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna
      et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id
      ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula.
      Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id
      mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet,
      hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien
      ipsum viverra justo, id cursus metus nisi quis enim.
    </p>
  </div>
  <!-- @TODO: Have https://github.com/flackr/scroll-timeline/pull/52 merged and from then on load the “official” build -->
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis
    turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor
    ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci.
    Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus.
    Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    Praesent in leo at tellus ultricies laoreet.
  </p>

  <p>
    Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque, aliquam
    id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut molestie mi
    tempus vel. Etiam vitae velit eget massa scelerisque hendrerit cursus vel
    justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam tempor
    molestie. Mauris eget lectus leo. Etiam id porta turpis.
  </p>

  <p>
    Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam
    efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est
    ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum. Mauris ac
    orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar
    dui, non dictum justo tellus a urna. Morbi suscipit et odio a feugiat. Sed
    dui nisi, iaculis a lacus posuere, dictum laoreet felis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
  </p>

  <p>
    Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa
    tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in.
    Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci
    condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum
    id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci
    velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non
    commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci.
    Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.
  </p>

  <p>
    Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis
    euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at,
    finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus.
    Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi
    fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis
    pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed
    purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas
    feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus
    metus nisi quis enim.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis
    turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor
    ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci.
    Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus.
    Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    Praesent in leo at tellus ultricies laoreet.
  </p>

  <p>
    Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque, aliquam
    id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut molestie mi
    tempus vel. Etiam vitae velit eget massa scelerisque hendrerit cursus vel
    justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam tempor
    molestie. Mauris eget lectus leo. Etiam id porta turpis.
  </p>

  <p>
    Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam
    efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est
    ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum. Mauris ac
    orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar
    dui, non dictum justo tellus a urna. Morbi suscipit et odio a feugiat. Sed
    dui nisi, iaculis a lacus posuere, dictum laoreet felis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
  </p>

  <p>
    Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa
    tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in.
    Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci
    condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum
    id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci
    velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non
    commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci.
    Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.
  </p>

  <p>
    Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis
    euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at,
    finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus.
    Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi
    fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis
    pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed
    purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas
    feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus
    metus nisi quis enim.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis
    turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor
    ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci.
    Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus.
    Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    Praesent in leo at tellus ultricies laoreet.
  </p>
</div>

<style>
  #content {
    padding-top: 1em;
    margin: 0 auto 0;
    width: 80vw;
    max-width: 60em;
    margin-top: 100vh;
  }
</style>
