<script setup lang="ts">
import TopContent from '@/components/global/TopContent.vue';
import Recommend from '@/components/home/Recommend.vue';
import About from '@/components/home/About.vue';
import SearchBar from '@/components/global/searchBar/SearchBar.vue';

</script>

<template>
  <div class="h-full relative">
    <!-- desktop -->
    <div class="hidden lg:block h-full p-24 pb-14">
      <div class="h-full relative">
        <TopContent class="mb-[72px]" />
        <SearchBar />
        <div class="absolute bottom-0 left-0 right-0 lg:flex">
          <Recommend class="lex-auto mr-6" />
          <About class="hidden lg:block flex-auto" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="block lg:hidden h-full px-5 py-7">
      <div class="flex justify-center text-white text-5xl mb-7">
        SOUSOÜ
      </div>
      <Recommend class="mb-8" />
      <TopContent class="mb-8" />
      <SearchBar />
    </div>

    <!-- background image -->
    <div class="h-full absolute top-0 inset-x-0 bg-cover bg-center bg-no-repeat bg-black/50 -z-10" />
    <div
      class="h-full absolute top-0 inset-x-0 bg-cover bg-center bg-no-repeat -z-20"
      :style="{backgroundImage: `url('src/assets/banner/1.jpg')`}"
    />
  </div>
</template>