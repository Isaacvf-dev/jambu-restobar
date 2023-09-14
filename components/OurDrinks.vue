<template>
  <section
    id="our_drinks_section"
    class="w-full pb-5 pt-12 md:pt-20 md:pb-10 md:px-4 h-full bg-[url('public/assets/menu-background.png')] bg-cover bg-center bg-no-repeat bg-slate-950 relative overflow-hidden"
  >
    <div
      id="our-drinks-container"
      class="flex items-center justify-center h-full overflow-hidden p-6"
    >
      <div class="text-white text-center font-poppins z-10 w-full">
        <h1 class="md:text-5xl text-4xl mb-6 font-semibold">
          {{ $t('OurDrinksTitle1') }} <span class="text-amber-600"> {{ $t('OurDrinksTitle2') }} </span>
        </h1>
        <div class="w-full md:flex hidden max-w-6xl mx-auto ">
          <div class="w-1/2 mr-4">
            <NuxtImg format="webp"
              src="assets/our-drinks-item-1.png"
              class="w-full aspect-video"
              alt=""
              loading="lazy"
            />
            <div class="flex pt-6">
              <NuxtImg format="webp"
                src="assets/our-drinks-item-2.png"
                class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                alt=""
                loading="lazy"
              />
              <NuxtImg format="webp"
                src="assets/our-drinks-item-3.png"
                class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          <div class="w-1/2 ml-4">
            <div class="flex pb-6">
              <NuxtImg format="webp"
                src="assets/our-drinks-item-4.png"
                class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                alt=""
                loading="lazy"
              />
              <NuxtImg format="webp"
                src="assets/our-drinks-item-5.png"
                class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                alt=""
                loading="lazy"
              />
            </div>
            <NuxtImg format="webp"
              src="assets/our-drinks-item-6.png"
              class="w-full aspect-video"
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        <div class="md:hidden">
          <Swiper
            :modules="[SwiperAutoplay, SwiperNavigation]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide>
              <div class="w-5/6 mx-auto">
                <NuxtImg format="webp"
                  src="assets/our-drinks-item-1.png"
                  class="w-full aspect-video"
                  alt=""
                  loading="lazy"
                />
                <div class="flex pt-6">
                  <NuxtImg format="webp"
                    src="assets/our-drinks-item-2.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                    alt=""
                    loading="lazy"
                  />
                  <NuxtImg format="webp"
                    src="assets/our-drinks-item-3.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="w-5/6 mx-auto">
                <div class="flex pb-6">
                  <NuxtImg format="webp"
                    src="assets/our-drinks-item-4.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                    alt=""
                    loading="lazy"
                  />
                  <NuxtImg format="webp"
                    src="assets/our-drinks-item-5.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <NuxtImg format="webp"
                  src="assets/our-drinks-item-6.png"
                  class="w-full aspect-video"
                  alt=""
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>