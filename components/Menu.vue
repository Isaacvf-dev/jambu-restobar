<template>
  <section class="w-full h-auto bg-[url('assets/MenuBackground.png')] bg-slate-950  md:py-12 lg:py-10">
    <h1 class="text-amber-600 text-5xl text-center font-normal">Menu</h1>
    <div id="menu-container" class="flex flex-row justify-center  gap-20 mt-20">
      <div class=" flex flex-col gap-2" style="max-height: 80vh">
        <img src="assets/menu-image-01.png" style="height: 40%; width: 100%;  object-fit: cover" alt="Descrição da imagem">
        <div class="flex justify-evenly gap-2" style="height: 55%; width: 100%;">
          <div class="flex flex-col gap-3" style="height: 100%; width: 50%;">
            <img src="assets/menu-image-02.png" style="height: 50%; object-fit: cover" alt="Descrição da imagem" >
            <img src="assets/menu-image-03.png" style="height: 50%; object-fit: cover" alt="Descrição da imagem" >
          </div>
          <div style="width: 50%;">
            <img src="assets/menu-image-04.png" style="height: 100%; width: 100%; object-fit: cover" alt="Descrição da imagem">
          </div>

        </div>
               
      </div>
      <div class=" max-w-md bg-cyan-600 flex">
        <div class="max-w-md flex" style="height: 177px">
          <div>
            <img src="assets/menu-item-01.png" alt="Descrição da imagem" class="">
          </div>
          <div class="bg-slate-900">
            <h3 class="text-xl text-amber-600">Bolinho de Costela</h3>
            <p class="text-sm text-white">São uma verdadeira tentação gastronômica para os amantes de sabores intensos e texturas irresistíveis.</p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
</template>