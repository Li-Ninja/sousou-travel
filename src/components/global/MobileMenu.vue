<script setup lang="ts">
import { mobileMenuList } from '@/const/menu.const';

</script>

<template>
  <div class="flex flex-row">
    <div
      v-for="menu in mobileMenuList"
      :key="menu.key"
      class="flex flex-col grow justify-center items-center bg-[#13545A] h-[60px] border-b border-[#5A8C8C]"
    >
      <div
        class="h-6 w-6 mb-1 bg-[#5a8886]"
        :style="{maskImage: `url('${menu.icon}')`}"
      />
      <h2 class="text-[#5a8886] text-xs">
        {{ menu.name }}
      </h2>
    </div>
  </div>
</template>