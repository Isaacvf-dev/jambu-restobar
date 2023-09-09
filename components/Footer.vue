<template>
  <section id="footer_section" class="w-full bg-slate-950 relative">
    <div
      id="footer-container"
      class="h-full py-20 max-w-7xl flex mx-auto justify-between"
    >
      <div class="text-white font-poppins px-6 flex flex-col justify-between">
        <div>
          <div class="flex mb-6">
            <Logo />
          </div>
          <div class="flex mb-8">
            <a href="https://wa.me/351910444333" class="mr-6">
              <img src="assets/whatsapp.png" alt="" />
            </a>
            <a href="https://www.instagram.com/jamburestobar.pt/" class="mr-6">
              <img src="assets/instagram.png" alt="" />
            </a>
          </div>
          <div class="mb-8">
            <p class="font-semibold mb-3">HORÁRIOS DE FUNCIONAMENTO</p>
            <div class="flex ">
              <div class="mr-10">
                <p>Terça e Quinta</p>
                <p>06:00 pm às 11:00pm</p>
              </div>
              <div>
                <p>Sexta e Sábado</p>
                <p>06:00 pm às 02:00pm</p>
              </div>
            </div>
          </div>
          <div>
            <a href="https://www.livroreclamacoes.pt/Inicio/"><img src="assets/complaint-book.png" alt="" width="200" /></a>
          </div>
        </div>
        <div class="relative">
          <p>© 2023 Restaurants. All Right Reserved. Developed by Raydan</p>
        </div>
      </div>
      <div class="px-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12017.77884929511!2d-8.6046952!3d41.1466465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24653b30148869%3A0x22f7c9b79ae460ab!2sJambu%20Resto!5e0!3m2!1spt-BR!2spt!4v1694269251824!5m2!1spt-BR!2spt"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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