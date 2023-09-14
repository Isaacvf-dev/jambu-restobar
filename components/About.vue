<template>
  <section
    id="about_section"
    class="w-full md:h-full lg:h-screen pt-16 md:pt-24 md:pb-10 bg-[url('public/assets/menu-background.png')] bg-cover bg-center bg-no-repeat bg-slate-950 relative overflow-hidden"
  >
    <div
      id="about-container"
      class="md:flex items-center justify-center h-full overflow-hidden px-6"
    >
      <div class="text-white text-center font-poppins md:w-1/2 p-4 md:p-6 xl:p-20">
        <h1 class="md:text-5xl text-4xl mb-6 font-semibold md:mb-10">
          {{ $t("aboutTitle1") }} <span class="text-amber-600">&</span> {{ $t("aboutTitle2") }}
        </h1>
        <p class="lg:text-lg text-base mb-2">
          {{ $t("aboutParagraph1") }}
        </p>
        <p class="lg:text-lg text-base">
          {{ $t("aboutParagraph2") }}
        </p>
      </div>
      <div class="md:w-1/2 xl:columns-3 columns-2 w-5/6 mx-auto gap-2 my-4">
        <NuxtImg format="webp" src="assets/about-item-1.png" alt="" class="mx-auto"/>
        <NuxtImg format="webp" src="assets/about-item-2.png" alt="" class="mt-4 mx-auto" />
        <NuxtImg format="webp" src="assets/about-item-3.png" alt=""  class="mx-auto"/>
        <NuxtImg format="webp" src="assets/about-item-4.png" alt="" class="mt-4 mx-auto" />
        <NuxtImg format="webp" src="assets/about-item-5.png" alt="" class="xl:block hidden" />
        <NuxtImg format="webp" src="assets/about-item-6.png" alt="" class="mt-4 xl:block hidden" />
      </div>
    </div>
  </section>
</template> 
