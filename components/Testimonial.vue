<template>
  <section
    id="testimonial_section"
    class="w-full  md:min-h-[550px] bg-cover bg-center bg-no-repeat bg-slate-950 bg-[url('assets/testimonial-background.png')] relative overflow-hidden "
  >
    <div
      id="testimonial-container"
      class="flex items-center justify-between h-full p-6 max-w-7xl mx-auto"
    >
      <div class="columns-3 md:flex hidden mt-20">
        <div
          class="text-white w-1/3 p-[35px] card text-center flex flex-col items-center mr-4 h-auto"
        >
          <div>
            <NuxtImg class="perfil" src="assets/testimonial-01.png" alt="" />
          </div>
          <p class="font-bold text-xl">Ni Marques</p>
          <div class="flex mb-4">
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
          </div>
          <p class="italic">
            Espetacular! Sabe aquele lugar que você queria encontrar, comer com
            vontade, lugar agradável, bonito, com ótimos drinks?! Pois lá eu
            achei. Fiquei surpreso! O lugar é novo e superou minhas
            expectativas. Recomendo, vou voltar e levar mais gente com certeza!
          </p>
        </div>

        <div
          class="text-white w-1/3 p-[35px] card text-center flex flex-col items-center h-auto mr-4"
        >
          <div>
            <NuxtImg class="perfil" src="assets/testimonial-02.png" alt="" />
          </div>
          <p class="font-bold text-xl">Valter F</p>
          <div class="flex mb-4">
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
          </div>
          <p class="italic">
            Excelente atendimento, decoração de bom gosto, boa música e ambiente
            aconchegante. Quanto aos pratos: melhor acarajé e abará que já
            experimentei no Porto, além dos acompanhamentos que estavam todos
            deliciosos, especialmente o camarão. Saí de lá já pensando em
            voltar.
          </p>
        </div>

        <div
          class="text-white w-1/3 p-[35px] card text-center flex flex-col items-center h-auto"
        >
          <div>
            <NuxtImg class="perfil" src="assets/testimonial-03.png" alt="" />
          </div>
          <p class="font-bold text-xl">Rui P</p>
          <div class="flex mb-4">
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
            <NuxtImg src="assets/star.svg" alt="" />
          </div>
          <p class="italic">
            Lugar excelente, cheio de boa gente e um ambiente espetacular… a
            comida foi simplesmente espetacular e diferente … Recomendo 100% a
            experiencia do Jambu !
          </p>
        </div>
      </div>

      <div class="md:hidden w-11/12 mx-auto mt-8">
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
            <div
              class="text-white card p-5 mt-20 text-center mr-4 w-full flex flex-col items-center"
            >
              <div>
                <NuxtImg class="perfil" src="assets/testimonial-01.png" alt="" />
              </div>
              <p class="font-bold text-xl">Ni Marques</p>
              <div class="flex mb-4 mx-auto">
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
              </div>
              <p class="italic">
                Espetacular! Sabe aquele lugar que você queria encontrar, comer
                com vontade, lugar agradável, bonito, com ótimos drinks?! Pois
                lá eu achei. Fiquei surpreso! O lugar é novo e superou minhas
                expectativas. Recomendo, vou voltar e levar mais gente com
                certeza!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="text-white card p-5 mt-20 text-center flex flex-col items-center h-auto"
            >
              <div>
                <NuxtImg class="perfil" src="assets/testimonial-02.png" alt="" />
              </div>
              <p class="font-bold text-xl">Valter F</p>
              <div class="flex mb-4">
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
              </div>
              <p class="italic">
                Excelente atendimento, decoração de bom gosto, boa música e
                ambiente aconchegante. Quanto aos pratos: melhor acarajé e abará
                que já experimentei no Porto, além dos acompanhamentos que
                estavam todos deliciosos, especialmente o camarão. Saí de lá já
                pensando em voltar.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="text-white card p-5 mt-20 text-center flex flex-col items-center h-auto"
            >
              <div>
                <NuxtImg class="perfil" src="assets/testimonial-03.png" alt="" />
              </div>
              <p class="font-bold text-xl">Rui P</p>
              <div class="flex mb-4">
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
                <NuxtImg src="assets/star.svg" alt="" />
              </div>
              <p class="italic">
                Lugar excelente, cheio de boa gente e um ambiente espetacular… a
                comida foi simplesmente espetacular e diferente … Recomendo 100%
                a experiencia do Jambu !
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template> 

<style scoped>
.card {
  background: rgba(217, 217, 217, 0.49);
  border-radius: 20px;
}

.perfil {
  margin-top: -94px;
}
</style>