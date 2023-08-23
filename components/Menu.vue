<template>
  <section class="w-full h-full sm:h-screen bg-[url('assets/MenuBackground.png')] bg-slate-950">
    <h1 class="text-amber-600 text-2xl sm:text-5xl text-center font-normal pt-3 lg:pt-6">Menu</h1>
    <div id="menu-container" class="sm:flex flex-row justify-center sm:max-h-[85vh] gap-5 sm:gap-20 pt-4 sm:pt-10">
      <div class=" flex flex-col">
        <img src="assets/menu-image-01.png" class="h-52 sm:h-2/5 object-cover pb-2" alt="Descrição da imagem">
        <div class="flex justify-evenly gap-2 sm:h-3/5">
          <div class="flex flex-col w-full h-2/6 sm:h-full">
            <img src="assets/menu-image-02.png" class="object-center object-cover h-28 sm:h-2/4 pb-1" alt="Descrição da imagem" >
            <img src="assets/menu-image-03.png" class="object-bottom object-cover h-28 sm:h-2/4 pt-1" alt="Descrição da imagem" >
          </div>          
          <img src="assets/menu-image-04.png" class="h-56 sm:h-full w-1/2 object-center object-cover" alt="Descrição da imagem">         

        </div>
               
      </div>
      <div class="">
        <div class="max-w-md w-4/5 sm:w-full m-auto h-full flex flex-col pb-2 pt-8 sm:pt-0 ">          
          <div class="relative h-1/5 pl-24 pt-2 pb-4 pr-8 mb-6 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <img src="assets/menu-item-01.png" alt="Descrição da imagem" class="absolute top-0 left-0 w-2/6 sm:w-1/5 -ml-4 -mt-4">          
            <h3 class="text-sm sm:text-xl text-amber-600 pb-1">Bolinho de Costela</h3>
            <p class="text-xs sm:text-sm text-white">São uma verdadeira tentação gastronômica para os amantes de sabores intensos e texturas irresistíveis.</p>
          </div>
          <div class="relative h-1/5 pl-24 pt-2 pb-4 pr-8 mb-6 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <img src="assets/menu-item-02.png" alt="Descrição da imagem" class="absolute top-0 left-0 w-2/6 sm:w-1/5 -ml-4 -mt-4">          
            <h3 class="text-sm sm:text-xl text-amber-600 pb-1">Mix Jambu</h3>
            <p class="text-xs sm:text-sm text-white">O nosso mix com 3 tapas da casa, uma seleção irresistível que promete encantar.</p>
          </div>
          <div class="relative h-1/5 pl-24 pt-2 pb-4 pr-8 mb-6 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <img src="assets/menu-item-03.png" alt="Descrição da imagem" class="absolute top-0 left-0 w-2/6 sm:w-1/5 -ml-4 -mt-4">          
            <h3 class="text-sm sm:text-xl text-amber-600 pb-1">Porção de Acarajés</h3>
            <p class="text-xs sm:text-sm text-white">Seleção de 10 mini acarajés, uma iguaria brasileira cheia de sabor e tradição.</p>
          </div>
          <div class="relative h-1/5 pl-24 pt-2 pb-4 pr-8 mb-6 bg-slate-900 rounded-tr-md rounded-bl-md rounded-br-3xl">
            <img src="assets/menu-item-04.png" alt="Descrição da imagem" class="absolute top-0 left-0 w-2/6 sm:w-1/5 -ml-4 -mt-4">          
            <h3 class="text-sm sm:text-xl text-amber-600 pb-1">Trio Nordestino</h3>
            <p class="text-xs sm:text-sm text-white">A crocância das batatas fritas se funde com a carne seca e o sabor aconchegante do molho de queijos.</p>
          </div>        
                    
          <button class="bg-amber-600 text-xs sm:text-sm text-white w-fit -mt-2 pt-1 pb-1 pl-2 pr-2 rounded-3xl self-center">Menu Completo</button>
        </div>
       
      </div>
    </div>
  </section>
</template>