<template>
  <section id="menu_section" class="relative w-full flex flex-col justify-center p-6 lg:pb-20 pt-16  md:pb-10 md:pt-20 lg:pt-10 h-full md:h-screen">
    <h1 class="text-amber-600 text-2xl sm:text-3xl lg:text-4xl text-center font-semibold pt-2 pb-6 md:pb-10 lg:pt-16 z-10"> {{ $t('menuTitle') }} </h1>
    <div id="menu-container" class="w-full sm:flex flex-row justify-evenly lg:justify-center lg:px-8 sm:max-h-[67vh] pt-4 sm:pt-6 md:pb-4 z-10">
      <div class=" flex flex-col w-full max-w-xl">
        <NuxtImg format="webp"  src="assets/menu-image-01.png" loading="lazy" class="h-52 sm:h-2/5 object-cover pb-2" :alt=" $t('greenDish') " />
        <div class="flex justify-evenly gap-2 sm:h-3/5">
          <div class="flex flex-col w-full h-2/6 sm:h-full">
            <NuxtImg format="webp" src="assets/menu-image-02.png" loading="lazy" class="object-center object-cover h-28 sm:h-2/4 pb-1" :alt=" $t('breadDish') " />
            <NuxtImg src="assets/menu-image-03.png" loading="lazy" class="object-bottom object-cover h-28 sm:h-2/4 pt-1" :alt=" $t('hamgurguerDish') " />
          </div>          
          <NuxtImg format="webp" src="assets/menu-image-04.png" loading="lazy" class="h-56 sm:h-full w-1/2 object-center object-cover" :alt=" $t('shrimpDish2') " />         
        </div>
      </div>
      <div class="md:pl-10 lg:pl-4 py-10 md:py-0 md:min-w-[55%]	 md:min-w-fit">
        <div class="max-w-lg w-4/5 sm:w-fit m-auto md:mr-6 h-full flex flex-col gap-4 sm:justify-evenly  pt-8 sm:pt-0 ">          
          <div class="relative md:h-1/4 pl-24 md:pl-16 lg:pl-24 pt-2 pb-4 pr-6 md:pr-3 lg:pr-8  bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg format="webp" src="assets/menu-item-01.png" loading="lazy" :alt=" $t('ribCroquetes') " class="absolute top-0 left-0 w-2/6 md:w-1/5 -ml-4 -mt-4" />          
            <h3 class="text-sm lg:text-xl text-amber-600 pb-1"> {{ $t('menuItemTitle1') }} </h3>
            <p class="text-xs lg:text-base  text-white"> {{ $t('menuItemDescription1') }} </p>
          </div>
          <div class="relative md:h-1/4 pl-24 md:pl-16 lg:pl-24 pt-2 pb-4 pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg format="webp" src="assets/menu-item-02.png" loading="lazy" :alt=" $t('jambuMix') " class="absolute top-0 left-0 w-2/6 md:w-1/5 -ml-4 -mt-4"/>          
            <h3 class="text-sm lg:text-xl text-amber-600 pb-1"> {{ $t('menuItemTitle2') }} </h3>
            <p class="text-xs lg:text-base text-white"> {{ $t('menuItemDescription2') }} </p>
          </div>
          <div class="relative md:h-1/4 pl-24 md:pl-16 lg:pl-24 pt-2 pb-4 pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg format="webp" src="assets/menu-item-03.png" loading="lazy" :alt=" $t('acarajePlatter') " class="absolute top-0 left-0 w-2/6 md:w-1/5 -ml-4 -mt-4"/>          
            <h3 class="text-sm  lg:text-xl text-amber-600 pb-1"> {{ $t('menuItemTitle3') }} </h3>
            <p class="text-xs lg:text-base text-white"> {{ $t('menuItemDescription3') }} </p>
          </div>
          <div class="relative md:h-1/4 pl-24 md:pl-16 lg:pl-24 pt-2 pb-4 pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg format="webp" src="assets/menu-item-04.png" loading="lazy" :alt=" $t('northeasternDish') " class="absolute top-0 left-0 w-2/6 md:w-1/5 -ml-4 -mt-4"/>          
            <h3 class="text-sm lg:text-xl text-amber-600 pb-1"> {{ $t('menuItemTitle4') }} </h3>
            <p class="text-xs lg:text-base text-white"> {{ $t('menuItemDescription4') }} </p>
          </div>        
                    
          <button class="bg-amber-600 hover:bg-amber-500 transition duration-100 delay-75 text-xs lg:text-sm text-slate-900 w-fit pt-1 pb-1 lg:px-5 px-2 rounded-3xl self-center font-semibold "> {{ $t('MenuButton') }} </button>
        </div>
       
      </div>
    </div>
  </section>
</template>