<script setup lang="ts">
import Menu from '@/components/global/Menu.vue';
import MobileMenu from '@/components/global/MobileMenu.vue';

</script>

<template>
  <div class="mx-auto h-screen">
    <div class="flex flex-col lg:flex-row flex-wrap h-full">
      <div class="hidden lg:block lg:w-[170px] bg-[#13545A]">
        <Menu />
      </div>
      <div class="flex-auto">
        <router-view />
      </div>
      <div class="lg:hidden">
        <MobileMenu />
      </div>
    </div>
  </div>
</template>