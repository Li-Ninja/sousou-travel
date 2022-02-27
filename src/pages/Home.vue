<script setup lang="ts">
import Header from '@/components/global/Header.vue';
import Recommend from '@/components/home/Recommend.vue';
import About from '@/components/home/About.vue';

</script>

<template>
  <div class="h-full">
    <div class="h-full p-5 lg:p-24 lg:pb-14">
      <div class="h-full relative">
        <Header />
        <div class="absolute bottom-0 left-0 right-0 lg:flex">
          <Recommend class="lg:flex-auto" />
          <About class="hidden lg:block flex-auto" />
        </div>
      </div>
    </div>
    <div class="h-full absolute top-0 inset-x-0 bg-cover bg-center bg-no-repeat bg-black/50 -z-10" />
    <div
      class="h-full absolute top-0 inset-x-0 bg-cover bg-center bg-no-repeat -z-20"
      :style="{backgroundImage: `url('src/assets/banner/1.jpg')`}"
    />
  </div>
</template>