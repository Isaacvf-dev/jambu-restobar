<template>
  <section
    id="about_section"
    class="w-full md:h-full lg:h-screen pt-16 md:pt-24 md:pb-10 bg-[url('assets/MenuBackground.png')] bg-cover bg-center bg-no-repeat bg-slate-950 relative overflow-hidden"
  >
    <div
      id="about-container"
      class="md:flex items-center justify-center h-full overflow-hidden px-6"
    >
      <div class="text-white text-center font-poppins md:w-1/2 p-4 md:p-6 xl:p-20">
        <h1 class="md:text-5xl text-4xl mb-6 font-semibold md:mb-10">
          Filosofia <span class="text-amber-600">&</span> Cozinha
        </h1>
        <p class="lg:text-lg text-base mb-2">
          Bem-vindo ao saboroso encontro de culturas culinárias no coração do
          Porto! No nosso restaurante, cada prato é uma viagem sensorial única,
          onde ingredientes tradicionais e inspirações contemporâneas se fundem
          em harmonia. Se você busca uma experiência gastronômica autêntica e
          apaixonante, aqui é o seu destino.
        </p>
        <p class="lg:text-lg text-base">
          Nossa dedicação à qualidade, aliada a um ambiente acolhedor e
          descontraído, fará você se sentir em casa desde o primeiro momento.
          Junte-se a nós e celebre o encontro de paladares e culturas em uma
          experiência culinária que irá cativar seus sentidos e deixar você
          ansioso para voltar. Venha desfrutar da nossa paixão pelo sabor e
          tornar cada momento memorável.
        </p>
      </div>
      <div class="md:w-1/2 xl:columns-3 columns-2 w-5/6 mx-auto gap-2 my-4">
        <NuxtImg src="assets/about-item-1.png" alt="" class="mx-auto"/>
        <NuxtImg src="assets/about-item-2.png" alt="" class="mt-4 mx-auto" />
        <NuxtImg src="assets/about-item-3.png" alt=""  class="mx-auto"/>
        <NuxtImg src="assets/about-item-4.png" alt="" class="mt-4 mx-auto" />
        <NuxtImg src="assets/about-item-5.png" alt="" class="xl:block hidden" />
        <NuxtImg src="assets/about-item-6.png" alt="" class="mt-4 xl:block hidden" />
      </div>
    </div>
  </section>
</template> 
