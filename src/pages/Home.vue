<script setup lang="ts">
import Header from '@/components/global/Header.vue';

</script>

<template>
  <div
    class="h-full relative p-24"
  >
    <Header />
    <div class="h-full absolute top-0 inset-x-0 bg-cover bg-center bg-no-repeat bg-black/50 -z-10" />
    <div
      class="h-full absolute top-0 inset-x-0 bg-cover bg-center bg-no-repeat -z-20"
      :style="{backgroundImage: `url('src/assets/banner/1.jpg')`}"
    />
  </div>
</template>