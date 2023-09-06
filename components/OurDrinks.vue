<template>
  <section
    id="our_drinks_section"
    class="w-full h-[100vh] bg-[url('assets/MenuBackground.png')] bg-cover bg-center bg-no-repeat bg-slate-950 relative overflow-hidden"
  >
    <div
      id="our-drinks-container"
      class="flex items-center justify-center h-full overflow-hidden p-6"
    >
      <div class="text-white text-center font-poppins z-10 w-full">
        <h1 class="text-5xl mb-6 font-semibold mb-14">Nossos <span class="text-amber-600">Drinks</span></h1>
        <div class="w-full flex max-w-6xl mx-auto">
          <div class="w-1/2 mr-4">
            <img
              src="assets/our-drinks-item-1.png"
              class="w-full aspect-video"
              alt=""
            />
            <div class="flex mt-6">
              <img
                src="assets/our-drinks-item-2.png"
                class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                alt=""
              />
              <img
                src="assets/our-drinks-item-3.png"
                class="w-1/2 aspect-w-1 aspect-h-1"
                alt=""
              />
            </div>
          </div>

          <div class="w-1/2 ml-4">
            <div class="flex mb-6">
              <img
                src="assets/our-drinks-item-4.png"
                class="w-1/2 aspect-w-1 aspect-h-1 mr-auto"
                alt=""
              />
              <img
                src="assets/our-drinks-item-5.png"
                class="w-1/2 aspect-w-1 aspect-h-1"
                alt=""
              />
            </div>
            <img
              src="assets/our-drinks-item-6.png"
              class="w-full aspect-video"
              alt=""
            />
          </div>
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