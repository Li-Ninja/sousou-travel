<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { mobileMenuList } from '@/const/menu.const';
import { MenuKeyEnum } from '@/enum/menu.enum';

const route = useRoute();
const router = useRouter();

function toThePage(key: MenuKeyEnum) {
  void router.push({ name: key });
}

</script>

<template>
  <div class="flex flex-row">
    <div
      v-for="menu in mobileMenuList"
      :key="menu.key"
      class="flex flex-col grow justify-center items-center group
      bg-[#13545A] h-[60px] border-b border-[#5A8C8C] cursor-pointer"
      @click="toThePage(menu.key)"
    >
      <div
        class="h-6 w-6 mb-1 bg-[#5a8886] ease-out duration-300"
        :style="{maskImage: `url('${menu.icon}')`}"
        :class="[menu.key === route.name ? 'bg-[#26A69A]' : 'group-hover:bg-[#498C8C] group-active:bg-[#26A69A]']"
      />
      <h2
        class="text-[#5a8886] text-xs ease-out duration-300"
        :class="[menu.key === route.name ? 'text-[#26A69A]' : 'group-hover:text-[#498C8C] group-active:text-[#26A69A]']"
      >
        {{ menu.name }}
      </h2>
    </div>
  </div>
</template>