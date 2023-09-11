<template>
  <section
    id="our_place_section"
    class="w-full lg:h-[100vh] bg-[url('assets/MenuBackground.png')] bg-cover bg-center bg-no-repeat bg-slate-950 relative overflow-hidden pb-5 pt-16 md:pb-10 md:px-4"
  >
    <div
      id="our-place-container"
      class="flex items-center justify-center h-full overflow-hidden p-6"
    >
      <div class="text-white text-center font-poppins w-full">
        <h1 class="md:text-5xl text-4xl mb-8 font-semibold lg:mb-20">
          Nosso <span class="text-amber-600">Espaço</span>
        </h1>
        <div class="md:hidden">
          <Swiper
            :modules="[SwiperAutoplay, SwiperNavigation ]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide>
              <NuxtImg
                src="assets/our-place-item-1.png"
                class="aspect-square mx-auto"
                alt=""
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg
                src="assets/our-place-item-2.png"
                class="aspect-square mx-auto"
                alt=""
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg
                src="assets/our-place-item-3.png"
                class="aspect-square mx-auto"
                alt=""
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="w-full md:flex md: justify-evenly max-w-7xl mx-auto hidden md:px-8">
          <NuxtImg
            src="assets/our-place-item-1.png"
            class="w-1/3 aspect-w-1 aspect-h-2"
            alt=""
            loading="lazy"
          />
          <NuxtImg
            src="assets/our-place-item-2.png"
            class="w-1/3 aspect-w-1 aspect-h-2 mx-8"
            alt=""
            loading="lazy"
          />
          <NuxtImg
            src="assets/our-place-item-3.png"
            class="w-1/3 aspect-w-1 aspect-h-2"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template> 

<style scoped>
.background-bottom {
  bottom: 0;
  left: 0;
}

.background-top {
  top: 0;
  right: 0;
}
</style>