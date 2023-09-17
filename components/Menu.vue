<template>
  <section
    id="menu_section"
    class="relative w-full flex flex-col justify-center p-6 lg:pb-20 pt-16 sm:pt-8 md:pb-10 md:pt-20 lg:pt-10  lg:h-screen"
  >
    <h1
      class="text-amber-600 text-4xl md:text-5xl text-center font-semibold pt-2 pb-6 md:pb-10 lg:pt-16 z-10"
    >
      {{ $t("menuTitle") }}
    </h1>
    <div
      id="menu-container"
      class="w-full sm:flex flex-row md:flex-col lg:flex-row justify-evenly lg:justify-center lg:px-8  pt-4 sm:pt-0 md:pb-4 z-10"
    >
      <div class="flex-col w-full max-w-xl hidden md:flex mx-auto">
        <NuxtImg
          format="webp"
          src="assets/menu-image-01.png"
          loading="lazy"
          class="h-52 sm:h-2/5 object-cover pb-2"
          :alt="$t('greenDish')"
        />
        <div class="flex justify-evenly gap-2 sm:h-3/5">
          <div class="flex flex-col w-full h-2/6 sm:h-full">
            <NuxtImg
              format="webp"
              src="assets/menu-image-02.png"
              loading="lazy"
              class="object-center object-cover h-28 sm:h-2/4 pb-1"
              :alt="$t('breadDish')"
            />
            <NuxtImg
              src="assets/menu-image-03.png"
              loading="lazy"
              class="object-bottom object-cover h-28 sm:h-2/4 pt-1"
              :alt="$t('hamgurguerDish')"
            />
          </div>
          <NuxtImg
            format="webp"
            src="assets/menu-image-04.png"
            loading="lazy"
            class="h-56 sm:h-full w-1/2 object-center object-cover"
            :alt="$t('shrimpDish2')"
          />
        </div>
      </div>
      <div class="md:pl-10 lg:pl-4 pb-6 md:py-0 mx-auto md:mt-8">
        <div
          class="md:max-w-lg w-4/5 sm:w-fit m-auto md:mr-6 flex flex-col gap-4 sm:justify-evenly sm:pt-0 sm:grid sm:grid-cols-2 md:block" 
        >
          <div
            class="mt-10 md:mt-6 relative md:h-1/4 md:pl-24 md:pl-16 lg:pl-24 pt-2 p-4 sm:p-6 mb:pb-4 md:pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-3xl md:rounded-br-3xl"
          >
            <NuxtImg
              format="webp"
              src="assets/menu-item-01.png"
              loading="lazy"
              :alt="$t('ribCroquetes')"
              class="w-1/2 md:absolute md:top-0 md:left-0 md:w-1/5 md:-ml-4 md:-mt-4 mx-auto md:mx-0 -mt-8"
            />
            <h3
              class="text-xl text-amber-600 pb-1 text-center md:text-left font-semibold"
            >
              {{ $t("menuItemTitle1") }}
            </h3>
            <p class="text-base text-white hidden sm:block">
              {{ $t("menuItemDescription1") }}
            </p>
          </div>
          <div
            class="mt-10 md:mt-6 relative md:h-1/4 md:pl-24 md:pl-16 lg:pl-24 pt-2 p-4 sm:p-6 mb:pb-4 md:pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-3xl md:rounded-br-3xl"
          >
            <NuxtImg
              format="webp"
              src="assets/menu-item-02.png"
              loading="lazy"
              :alt="$t('jambuMix')"
              class="w-1/2 md:absolute md:top-0 md:left-0 md:w-1/5 md:-ml-4 md:-mt-4 mx-auto md:mx-0 -mt-8"
            />
            <h3
              class="text-xl text-amber-600 pb-1 text-center md:text-left font-semibold"
            >
              {{ $t("menuItemTitle2") }}
            </h3>
            <p class="text-base text-white hidden sm:block">
              {{ $t("menuItemDescription2") }}
            </p>
          </div>
          <div
            class="mt-10 md:mt-6 relative md:h-1/4 md:pl-24 md:pl-16 lg:pl-24 pt-2 p-4 sm:p-6 mb:pb-4 md:pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-3xl md:rounded-br-3xl"
          >
            <NuxtImg
              format="webp"
              src="assets/menu-item-03.png"
              loading="lazy"
              :alt="$t('acarajePlatter')"
              class="w-1/2 md:absolute md:top-0 md:left-0 md:w-1/5 md:-ml-4 md:-mt-4 mx-auto md:mx-0 -mt-8"
            />
            <h3
              class="text-xl text-amber-600 pb-1 text-center md:text-left font-semibold"
            >
              {{ $t("menuItemTitle3") }}
            </h3>
            <p class="text-base text-white hidden sm:block">
              {{ $t("menuItemDescription3") }}
            </p>
          </div>
          <div
            class="mt-10 md:mt-6 relative md:h-1/4 md:pl-24 md:pl-16 lg:pl-24 pt-2 p-4 sm:p-6 mb:pb-4 md:pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-3xl md:rounded-br-3xl"
          >
            <NuxtImg
              format="webp"
              src="assets/menu-item-04.png"
              loading="lazy"
              :alt="$t('northeasternDish')"
              class="w-1/2 md:absolute md:top-0 md:left-0 md:w-1/5 md:-ml-4 md:-mt-4 mx-auto md:mx-0 -mt-8"
            />
            <h3
              class="text-xl text-amber-600 pb-1 text-center md:text-left font-semibold"
            >
              {{ $t("menuItemTitle4") }}
            </h3>
            <p class="text-base text-white hidden sm:block">
              {{ $t("menuItemDescription4") }}
            </p>
          </div>
        </div>
        <div class="flex ">
          <NuxtLink
            to=""
            target="_blank"
            class="text-sm md:text-lg lg:text-xl uppercase hover:bg-amber-500 text-slate-900 font-semibold transition duration-100 delay-75 px-7 lg:px-10 py-3 lg:py-4 bg-amber-600 rounded-[120px] mt-6 mx-auto self-center"
          >
            {{ $t("MenuButton") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>