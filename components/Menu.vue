<template>
  <section id="menu_section" class="w-full flex flex-col justify-center p-6 pt-16 md:pb-10 md:pt-20  h-full md:h-screen bg-[url('public/assets/menu-background.png')] bg-slate-950">
    <h1 class="text-amber-600 text-2xl sm:text-5xl text-center font-semibold mb-6 md:mb-10 lg:pt-6">Menu</h1>
    <div id="menu-container" class="w-full sm:flex flex-row justify-evenly lg:px-8 sm:max-h-[70vh]  pt-4 sm:pt-6 md:pb-4">
      <div class=" flex flex-col w-full max-w-3xl ">
        <NuxtImg src="assets/menu-image-01.png" loading="lazy" class="h-52 sm:h-2/5 object-cover pb-2" alt="Prato do menu" />
        <div class="flex justify-evenly gap-2 sm:h-3/5">
          <div class="flex flex-col w-full h-2/6 sm:h-full">
            <NuxtImg src="assets/menu-image-02.png" loading="lazy" class="object-center object-cover h-28 sm:h-2/4 pb-1" alt="Prato do menu" />
            <NuxtImg src="assets/menu-image-03.png" loading="lazy" class="object-bottom object-cover h-28 sm:h-2/4 pt-1" alt="Prato do menu" />
          </div>          
          <NuxtImg src="assets/menu-image-04.png" loading="lazy" class="h-56 sm:h-full w-1/2 object-center object-cover" alt="Prato do menu" />         
        </div>
      </div>
      <div class="md:pl-10 py-10 md:py-0">
        <div class="max-w-md w-4/5 sm:w-fit m-auto md:mr-6 h-full flex flex-col gap-4 sm:justify-evenly pt-8 sm:pt-0 ">          
          <div class="relative h-1/5 lg:h-1/4 pl-24 pt-2 pb-4 pr-6 lg:pr-8  bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg src="assets/menu-item-01.png" loading="lazy" alt="Imagem do bolinho de costela" class="absolute top-0 left-0 w-2/6 lg:w-1/5 -ml-4 -mt-4" />          
            <h3 class="text-sm md:text-lg lg:text-xl text-amber-600 pb-1">Bolinho de Costela</h3>
            <p class="text-xs lg:text-base text-white">São uma verdadeira tentação gastronômica para os amantes de sabores intensos e texturas irresistíveis.</p>
          </div>
          <div class="relative h-1/5 lg:h-1/4 pl-24 pt-2 pb-4 pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg src="assets/menu-item-02.png" loading="lazy" alt="Imagem do Mix Jambu" class="absolute top-0 left-0 w-2/6 lg:w-1/5 -ml-4 -mt-4"/>          
            <h3 class="text-sm md:text-lg lg:text-xl text-amber-600 pb-1">Mix Jambu</h3>
            <p class="text-xs lg:text-base text-white">O nosso mix com 3 tapas da casa, uma seleção irresistível que promete encantar.</p>
          </div>
          <div class="relative h-1/5 lg:h-1/4 pl-24 pt-2 pb-4 pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg src="assets/menu-item-03.png" loading="lazy" alt="Imagem da porção de acarajé" class="absolute top-0 left-0 w-2/6 lg:w-1/5 -ml-4 -mt-4"/>          
            <h3 class="text-sm md:text-lg lg:text-xl text-amber-600 pb-1">Porção de Acarajés</h3>
            <p class="text-xs lg:text-base text-white">Seleção de 10 mini acarajés, uma iguaria brasileira cheia de sabor e tradição.</p>
          </div>
          <div class="relative h-1/5 lg:h-1/4 pl-24 pt-2 pb-4 pr-6 lg:pr-8 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <NuxtImg src="assets/menu-item-04.png" loading="lazy" alt="Imagem do trio nordestino" class="absolute top-0 left-0 w-2/6 lg:w-1/5 -ml-4 -mt-4"/>          
            <h3 class="text-sm md:text-lg lg:text-xl text-amber-600 pb-1">Trio Nordestino</h3>
            <p class="text-xs lg:text-base text-white">A crocância das batatas fritas se funde com a carne seca e o sabor aconchegante do molho de queijos.</p>
          </div>        
                    
          <button class="bg-amber-600 hover:bg-amber-700 transition duration-100 delay-75 text-xs sm:text-sm lg:text-base text-white w-fit pt-1 lg:p-2 pb-1 lg:px-6 px-2 rounded-3xl self-center font-semibold ">Menu Completo</button>
        </div>
       
      </div>
    </div>
  </section>
</template>