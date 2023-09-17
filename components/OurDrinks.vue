<template>
  <section
    id="our_drinks_section"
    class="w-full p-6 lg:pb-20 pt-16 md:pb-10 md:pt-20 lg:pt-10 md:px-4 h-full md:h-screen relative overflow-hidden"
  >
    <h1
      class="text-2xl text-white sm:text-5xl text-center font-semibold pt-2 pb-6 md:pb-10 lg:pt-16"
    >
      {{ $t("OurDrinksTitle1") }}
      <span class="text-amber-600"> {{ $t("OurDrinksTitle2") }} </span>
    </h1>
    <div
      id="our-drinks-container"
      class="flex items-center justify-center sm:max-h-[67vh] overflow-hidden p-6"
    >
      <div class="text-center font-poppins z-10 w-full">
        <div class="w-full md:flex hidden max-w-6xl mx-auto">
          <div class="w-1/2 mr-4">
            <NuxtImg
              format="webp"
              src="assets/our-drinks-item-1.png"
              class="w-full aspect-video"
              :alt="$t('orangeDrink')"
              loading="lazy"
              widht="540"
              height="574"
            />
            <div class="flex pt-6">
              <NuxtImg
                format="webp"
                src="assets/our-drinks-item-2.png"
                class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                :alt="$t('orangeDrinkLeaf')"
                loading="lazy"
                widht="255"
                height="274"
              />
              <NuxtImg
                format="webp"
                src="assets/our-drinks-item-3.png"
                class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                :alt="$t('whiteDrink')"
                loading="lazy"
                widht="255"
                height="274"
              />
            </div>
          </div>

          <div class="w-1/2 ml-4">
            <div class="flex pb-6">
              <NuxtImg
                format="webp"
                src="assets/our-drinks-item-4.png"
                class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                :alt="$t('redDrink')"
                loading="lazy"
                widht="255"
                height="274"
              />
              <NuxtImg
                format="webp"
                src="assets/our-drinks-item-5.png"
                class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                :alt="$t('colorfulDrink')"
                loading="lazy"
                widht="255"
                height="274"
              />
            </div>
            <NuxtImg
              format="webp"
              src="assets/our-drinks-item-6.png"
              class="w-full aspect-video"
              :alt="$t('redDrink')"
              loading="lazy"
              widht="540"
              height="574"
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
                <NuxtImg
                  format="webp"
                  src="assets/our-drinks-item-1.png"
                  class="w-full aspect-video"
                  :alt="$t('orangeDrink')"
                  loading="lazy"
                  widht="540"
                  height="574"
                />
                <div class="flex pt-6">
                  <NuxtImg
                    format="webp"
                    src="assets/our-drinks-item-2.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                    :alt="$t('orangeDrinkLeaf')"
                    loading="lazy"
                    widht="255"
                    height="274"
                  />
                  <NuxtImg
                    format="webp"
                    src="assets/our-drinks-item-3.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                    :alt="$t('whiteDrink')"
                    loading="lazy"
                    widht="255"
                    height="274"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="w-5/6 mx-auto">
                <div class="flex pb-6">
                  <NuxtImg
                    format="webp"
                    src="assets/our-drinks-item-4.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                    :alt="$t('redDrink')"
                    loading="lazy"
                    widht="255"
                    height="274"
                  />
                  <NuxtImg
                    format="webp"
                    src="assets/our-drinks-item-5.png"
                    class="w-1/2 aspect-w-1 aspect-h-1 ml-4"
                    :alt="$t('colorfulDrink')"
                    loading="lazy"
                    widht="255"
                    height="274"
                  />
                </div>
                <NuxtImg
                  format="webp"
                  src="assets/our-drinks-item-6.png"
                  class="w-full aspect-video"
                  :alt="$t('redDrink')"
                  loading="lazy"
                  widht="540"
                  height="574"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>