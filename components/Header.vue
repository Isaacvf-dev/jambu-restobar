<template>
  <header class="w-full bg-slate-900 fixed z-20 text-white">    
    <nav class="max-w-7xl mx-auto p-4 md:flex md:justify-between md:items-center font-semibold">    
      <div class="flex justify-between items-center">
        <a
          class="flex items-center justify-center flex-col font-poppins my-sm"
          href="#home_section"
        >
          <p class="text-xl lg:text-2xl font-semibold">JAMBU</p>
          <p class="text-[8px] lg:text-[10px] mt-[-4px] lg:mt-[-8px] font-normal">RESTO BAR</p>
        </a>
          <!--Mobile Friendly Header-->
        <div class="flex">
          <lang-selector v-if="!isMenuVisible" class="md:hidden"/>
          <div class="md:hidden" @click="showMobileMenu">            
            <svg v-if="!isMenuVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-amber-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-amber-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
                  
          </div>

        </div>  
      </div>
      <div class="bg-slate-900 md:flex md:items-center z-[-1] md:z-auto md:static absolute opacity-90 w-full left-0 md:w-auto pb-6 md:py-0 md:pl-0 "
      :class="{ hidden: !isMenuVisible, block: isMenuVisible }">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index" class="mx-6 md:mx-3 lg:mx-6 my-6 md:my-0">
            <a class="uppercase relative text-sm lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-amber-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" 
            :href="item.link" 
            @click="delaydMobileMenuClick">{{ $t(item.name) }}</a>
          </li>
        </ul>
        <a
        href="https://www.thefork.pt/restaurante/jambu-rest-bar-r805263#booking="
        class="uppercase transition duration-100 delay-75 mx-4 md:mx-3 lg:mx-6 my-8 md:my-0 px-5 lg:px-8 py-1 lg:py-2 bg-amber-600 hover:bg-amber-700 rounded-[120px] text-sm lg:text-xl"
        >{{ $t("reservation") }}</a>
      </div>
      <div class="hidden md:flex items-center">
        <div class="mr-2 lg:mr-4"></div>
        <lang-selector/>
        <div class="border-solid border-white border-l-2">
          <span class="mx-2 lg:mx-4 text-xs lg:text-sm">+351 910 444 333</span>
        </div>
        <a
          href="https://www.thefork.pt/restaurante/jambu-rest-bar-r805263#booking="
          class="uppercase transition duration-100 delay-75 px-5 lg:px-8 py-1 lg:py-2 bg-amber-600 hover:bg-amber-700 rounded-[120px] text-sm lg:text-xl"
          >{{ $t("reservation") }}</a
        >
      </div>
    </nav>
  </header>
</template>


<script setup lang="ts">
import { ref } from "vue";
interface menuItems {  
  name: string;
  link: string;
}

const menuItems: menuItems[] = [
  { name: "about", link: "#about_section" },
  { name: "menu", link: "#menu_section" },
  { name: "gallery", link: "#our_drinks_section" },
  { name: "information", link: "#info_section" },
]

let isMenuVisible = ref(false)

let showMobileMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}

const clickDelay = 600

let delaydMobileMenuClick = () => {
  setTimeout( () => {
    showMobileMenu()
  }, clickDelay )
}

</script>