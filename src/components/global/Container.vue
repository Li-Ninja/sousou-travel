<script setup lang="ts">
import Menu from '@/components/global/Menu.vue';

</script>

<template>
  <div class="mx-auto h-screen">
    <div class="flex flex-wrap h-full">
      <div class="hidden lg:block lg:w-[170px] bg-[#13545A]">
        <Menu />
      </div>
      <div class="flex-auto bg-red-300">
        <router-view />
      </div>
    </div>
  </div>
</template>