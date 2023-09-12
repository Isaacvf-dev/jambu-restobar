<template>
  <section
    id="our_place_section"
    class="w-full lg:h-[100vh]  bg-cover bg-center bg-no-repeat bg-slate-950 relative "
  >
    <div
      id="our-place-container"
      class="flex items-center justify-center h-full p-6 py-10"
    >
      <div class="text-white text-center font-poppins w-full">
        <h1 class="md:text-5xl text-4xl mb-6 font-semibold md:mb-20">
          {{ $t('HowToFindTitle1') }} <span class="text-amber-600"> {{ $t('HowToFindTitle2') }} </span>
        </h1>
        <div class="w-full flex max-w-7xl mx-auto justify-center ">
          <video class="w-1/4 aspect-w-1 aspect-h-1 mx-8 md:block hidden" controls autoplay muted>
            <source src="assets/video1.mp4" poster="assets/poster-video-1.png" type="video/mp4">
            Your browser does not support the video tag.
          </video>

          <video class="md:w-1/4 w-5/6 aspect-square md:aspect-w-1 md:aspect-h-2 mx-8" controls autoplay muted>
            <source src="assets/video2.mp4" poster="assets/poster-video-2.png" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
</template> 

<style scoped>

</style>