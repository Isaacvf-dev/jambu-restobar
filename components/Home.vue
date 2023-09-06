<template>
    <section
      id="home_section"
      class="w-full h-[100vh] bg-cover bg-center bg-no-repeat bg-[url('assets/HomeBackground.png')] bg-slate-950"
    >
      <div id="home-container" class="flex items-center justify-center h-full">
        <div class="text-white text-center font-poppins">
          <p class="text-[42px] font-normal title shadow-orange ">JAMBU</p>
          <p class="text-[86px] font-semibold mt-[-32px] subtitle shadow-orange ">RESTO BAR</p>
          <p class="flex items-center justify-center mt-[-16px]">
              <span class="cerquilha mx-2"></span>
              <span class="text-lg">Music, Food, Tapas and Drinks</span>
              <span class="cerquilha mx-2"></span></p>
        </div>
      </div>
    </section>
</template> 

<style scoped>
 .shadow-orange {
    text-shadow: 0px 0px 12px #E27E01;
 }

 .title {
    font-weight: 400;
 }

 .subtitle {
    font-weight: 500;
 }

 .cerquilha {
  width: 60px;
  height: 2px;
  background-color: white;
  display: block;
 }
</style>