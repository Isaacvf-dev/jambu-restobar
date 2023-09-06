<template>
  <section
    id="our_place_section"
    class="w-full h-[100vh] bg-[url('assets/MenuBackground.png')] bg-cover bg-center bg-no-repeat bg-slate-950 relative overflow-hidden"
  >
    <div
      id="our-place-container"
      class="flex items-center justify-center h-full overflow-hidden p-6"
    >
      <div class="text-white text-center font-poppins z-10 w-full">
        <h1 class="text-5xl mb-6 font-semibold mb-14">
          Nosso <span class="text-amber-600">Espaço</span>
        </h1>
        <div class="w-full flex max-w-7xl mx-auto">
            <img
              src="assets/our-place-item-1.png"
              class="w-1/3 aspect-w-1 aspect-h-2"
              alt=""
            />
            <img
              src="assets/our-place-item-2.png"
              class="w-1/3 aspect-w-1 aspect-h-2 mx-8"
              alt=""
            />
            <img
              src="assets/our-place-item-3.png"
              class="w-1/3 aspect-w-1 aspect-h-2"
              alt=""
            />
        </div>
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