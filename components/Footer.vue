<template>
  <section id="footer_section" class="w-full bg-slate-950 relative">
    <div
      id="footer-container"
      class="h-full py-10 md:py-20 max-w-7xl md:flex md:flex-row-reverse mx-auto justify-between"
    >
      <div class="px-6 md:w-1/2 w-full mx-auto md:mb-1 mb-10">
        <iframe
          id="iframe-google-maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12017.77884929511!2d-8.6046952!3d41.1466465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24653b30148869%3A0x22f7c9b79ae460ab!2sJambu%20Resto!5e0!3m2!1spt-BR!2spt!4v1694269251824!5m2!1spt-BR!2spt"
          class="w-full h-auto"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="text-white font-poppins px-6 flex flex-col justify-between md:text-left text-center">
        <div>
          <div class="flex mb-6">
            <Logo class="md:mx-0 mx-auto" />
          </div>
          <div class="flex mb-8"> 
            <NuxtLink to="https://wa.me/351910444333" target="_blank" class="mr-6 md:ml-0 ml-auto">
              <NuxtImg loading="lazy" src="assets/whatsapp.png" alt="" />
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com/jamburestobar.pt/" target="_blank" class="md:mr-0 mr-auto">
              <NuxtImg loading="lazy" src="assets/instagram.png" alt="" />
            </NuxtLink>
          </div>
          <div class="mb-8">
            <p class="font-semibold mb-3">HORÁRIOS DE FUNCIONAMENTO</p>
            <div class="md:flex inline">
              <div class="md:mr-10">
                <p>Terça e Quinta</p>
                <p>06:00 pm às 11:00pm</p>
              </div>
              <div class="md:mt-0 mt-2">
                <p>Sexta e Sábado</p>
                <p>06:00 pm às 02:00pm</p>
              </div>
            </div>
          </div>
          <div>
            <NuxtLink to="https://www.livroreclamacoes.pt/Inicio/" target="_blank"
              ><NuxtImg src="assets/complaint-book.png" alt="" width="200" loading="lazy"
               class="md:mx-0 mx-auto"
            /></NuxtLink>
          </div>
        </div>
        <div class="relative mt-8 md:text-left text-center">
          <p>© 2023 Jambu. All Right Reserved. Developed by Raydan</p>
        </div>
      </div>
    </div>
  </section>
</template> 

<style scoped>
#iframe-google-maps {
  min-height: 450px;
}

@media (max-width: 600px) {
#iframe-google-maps {
  min-height: 350px;
}
}
</style>