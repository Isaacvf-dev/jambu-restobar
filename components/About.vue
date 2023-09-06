<template>
  <section
    id="about_section"
    class="w-full h-[100vh] bg-[url('assets/MenuBackground.png')] bg-cover bg-center bg-no-repeat bg-slate-950 relative overflow-hidden"
  >
    <div id="about-container" class="flex items-center justify-center h-full overflow-hidden p-6">
      <div class="flex absolute background-top">
        <img src="assets/about-item-4.png" alt="" class="" />
        <img src="assets/about-item-5.png" alt="" class="" />
        <img src="assets/about-item-6.png" alt="" class="" />
      </div>
      <div class="text-white text-center font-poppins z-10 max-w-2xl	">
        <h1 class="text-5xl mb-6 font-semibold">Sobre</h1>
        <p class="text-lg mb-2">
          Bem-vindo ao saboroso encontro de culturas culinárias no coração do
          Porto! No nosso restaurante, cada prato é uma viagem sensorial única,
          onde ingredientes tradicionais e inspirações contemporâneas se fundem
          em harmonia. Se você busca uma experiência gastronômica autêntica e
          apaixonante, aqui é o seu destino.
        </p>
        <p class="text-lg">
          Nossa dedicação à qualidade, aliada a um ambiente acolhedor e
          descontraído, fará você se sentir em casa desde o primeiro momento.
          Junte-se a nós e celebre o encontro de paladares e culturas em uma
          experiência culinária que irá cativar seus sentidos e deixar você
          ansioso para voltar. Venha desfrutar da nossa paixão pelo sabor e
          tornar cada momento memorável.
        </p>
      </div>
      <div class="flex absolute background-bottom">
        <img src="assets/about-item-1.png" alt="" class="" />
        <img src="assets/about-item-2.png" alt="" class="" />
        <img src="assets/about-item-3.png" alt="" class="" />
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