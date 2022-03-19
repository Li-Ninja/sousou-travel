<script setup lang="ts">
import { provide, shallowRef } from 'vue';
import Menu from '@/components/global/Menu.vue';
import MobileMenu from '@/components/global/MobileMenu.vue';

const showDropdownMenu = shallowRef(false);

provide('showDropdownMenu', showDropdownMenu);
provide('openDropdownMenu', openDropdownMenu);

function closeDropdownMenu() {
  showDropdownMenu.value = false;
}

function openDropdownMenu() {
  showDropdownMenu.value = true;
}

</script>

<template>
  <div
    class="mx-auto h-screen"
    @click="showDropdownMenu && closeDropdownMenu()"
  >
    <div class="flex flex-col lg:flex-row h-full">
      <div class="hidden lg:block lg:w-[170px] bg-primary">
        <Menu />
      </div>
      <div class="flex-auto pb-[60px] lg:pb-0">
        <router-view />
      </div>
      <div class="lg:hidden fixed bottom-0 inset-x-0">
        <MobileMenu />
      </div>
    </div>
  </div>
</template>