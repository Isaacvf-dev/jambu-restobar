<template>
  <header class="w-full bg-slate-900 fixed z-20 text-white">
    <nav class="p-4 md:flex md:justify-between md:items-center font-semibold">
      <div class="flex justify-between items-center">
        <a
          class="ml-6 flex items-center justify-center flex-col font-poppins my-sm"
          href="#home_section"
        >
          <p class="text-[24px] font-semibold">JAMBU</p>
          <p class="text-[10px] mt-[-8px] font-normal">RESTO BAR</p>
        </a>
      </div>
      <div>
        <ul
          class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-3 md:pl-0 px-3"
          :class="{ hidden: !isMenuVisible, block: isMenuVisible }"
        >
          <li class="mx-6 my-6 md:my-0 border-amber-600 hover:border-b-2">
            <a class="uppercase" href="#about_section">{{ $t("about") }}</a>
          </li>
          <li class="mx-6 my-6 md:my-0 border-amber-600 hover:border-b-2">
            <a class="uppercase" href="#menu_section">{{ $t("menu") }}</a>
          </li>
          <li class="mx-6 my-6 md:my-0 border-amber-600 hover:border-b-2">
            <a class="uppercase" href="#our_drinks_section">{{ $t("gallery") }}</a>
          </li>
          <li class="mx-6 my-6 md:my-0 border-amber-600 hover:border-b-2">
            <a class="uppercase" href="#info_section">{{
              $t("information")
            }}</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center">
        <div class="mr-4"></div>
        <lang-selector/>
        <div class="border-solid border-white border-l-2">
          <span class="mx-4 text-sm">+351 910 444 333</span>
        </div>
        <a
          href="https://www.thefork.pt/restaurante/jambu-rest-bar-r805263#booking="
          class="uppercase hover:bg-amber-700 transition duration-100 delay-75 px-8 py-2 bg-amber-600 rounded-[120px]"
          >{{ $t("reservation") }}</a
        >
      </div>
    </nav>
  </header>
</template>


<script setup lang="ts">
import { ref } from "vue";

</script>