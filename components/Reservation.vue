<template>
  <section
    id="reservation_section"
    class="w-full min-h-[255px] md:min-h-[275px] 	 bg-cover bg-center bg-no-repeat bg-slate-950 bg-[url('assets/reservation-background.png')] relative overflow-hidden"
  >
    <div
      id="reservation-container"
      class="flex flex-col md:flex-row items-center justify-center md:justify-evenly overflow-hidden p-8 md:p-16"
    >
      <div class="text-white text-center md:text-left font-poppins z-10 max-w-3xl">
        <h1 class="text-amber-600 text-xl md:text-3xl lg:text-5xl mb-2 font-semibold">
          Comemore e divirta-se em <br />um dos melhores restaurantes
        </h1>
        <p class="text-base md:text-lg lg:text-xl">Faça sua reserva e aproveite nossas promoções</p>
      </div>
      <div class="mt-6 md:mt-0">
        <NuxtLink
          to="https://www.thefork.pt/restaurante/jambu-rest-bar-r805263#booking="
          target="_blank"
          class="text-sm md:text-lg  lg:text-xl ml-auto mr-auto uppercase hover:bg-amber-700 text-white font-semibold transition duration-100 delay-75 px-7 lg:px-10 py-3 lg:py-4 bg-amber-600 rounded-[120px]"
          >
          RESERVE JÁ
        </NuxtLink>

      </div>
    </div>
  </section>
</template> 

<style scoped>
</style>