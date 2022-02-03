<script setup lang="ts">
import { menuList } from '@/const/menu.const';

</script>

<template>
  <div>
    <div class="h-[360px] bg-[#FDF6EE] flex justify-center items-center">
      <img
        src="/src/assets/logo.svg"
        alt="SouSou logo"
        class="h-[206px]"
      >
    </div>
    <div>
      <div
        v-for="menu in menuList"
        :key="menu.key"
        class="flex flex-col justify-center items-center bg-[#13545A] h-[144px] border-b border-[#5A8C8C]"
      >
        <div
          class="h-12 w-12 mb-2 bg-[#5a8886]"
          :style="{maskImage: `url('${menu.icon}')`}"
        />
        <h2 class="text-[#5a8886] text-xl">
          {{ menu.name }}
        </h2>
      </div>
    </div>
  </div>
</template>