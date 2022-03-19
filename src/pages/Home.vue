<script setup lang="ts">
import TopContent from '@/components/global/TopContent.vue';
import Carousel from '@/components/global/Carousel.vue';
import Recommend from '@/components/home/Recommend.vue';
import About from '@/components/home/About.vue';
import SearchBar from '@/components/global/searchBar/SearchBar.vue';
import { LanguageEnum } from '@/enum/common.enum';

function changeLanguage() {
  const nowLanguage = localStorage.getItem('language');

  switch (nowLanguage) {
    case LanguageEnum['zh-tw']:
      localStorage.setItem('language', LanguageEnum.en);
      break;
    case LanguageEnum.en:
      localStorage.setItem('language', LanguageEnum['zh-tw']);
      break;
    default:
      localStorage.setItem('language', LanguageEnum.en);
      break;
  }

  location.reload();
}

</script>

<template>
  <div class="h-full relative">
    <!-- language option -->
    <div
      class="w-6 h-6 lg:w-7 lg:h-7 bg-green-1 hover:bg-secondary ease-out duration-300
        cursor-pointer absolute top-5 right-5 lg:top-18 lg:right-12"
      style="mask-image: url('src/assets/ionicon_svg/language-outline.svg')"
      @click="changeLanguage()"
    />

    <!-- desktop -->
    <div class="hidden lg:block h-full p-12 xl:p-24 pb-14">
      <div class="h-full relative flex flex-col justify-between">
        <div class="mb-12">
          <TopContent class="mb-[72px]" />
          <SearchBar class="absolute z-10" />
        </div>
        <div class="flex justify-between">
          <Recommend class="mr-12" />
          <About class="mr-14 xl:mr-24" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="flex flex-col justify-between lg:hidden h-full px-5 py-7">
      <div class="flex justify-center text-white text-5xl mb-12">
        SOUSOÜ
      </div>
      <div class="grow mb-8 flex flex-col justify-center">
        <Recommend />
      </div>
      <div>
        <TopContent class="mb-8" />
        <SearchBar />
      </div>
    </div>

    <!-- background image -->
    <Carousel />
  </div>
</template>
