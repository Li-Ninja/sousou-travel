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
  <div class="flex flex-row max-h-[60px]">
    <div
      v-for="menu in mobileMenuList"
      :key="menu.key"
      class="flex flex-col grow justify-center items-center group
      bg-primary h-[60px] border-b border-primary-hover cursor-pointer"
      @click="toThePage(menu.key)"
    >
      <div
        class="h-6 w-6 mb-1 bg-green-1 ease-out duration-300"
        :style="{maskImage: `url('${menu.icon}')`}"
        :class="[menu.key === route.name ? 'bg-secondary' : 'group-hover:bg-primary-hover group-active:bg-secondary']"
      />
      <h2
        class="text-green-1 text-xs ease-out duration-300"
        :class="[menu.key === route.name ? 'text-secondary' : 'group-hover:text-primary-hover group-active:text-secondary']"
      >
        {{ menu.name }}
      </h2>
    </div>
  </div>
</template>