<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { menuList } from '@/const/menu.const';
import { MenuKeyEnum } from '@/enum/menu.enum';

const route = useRoute();
const router = useRouter();

function toThePage(key: MenuKeyEnum) {
  void router.push({ name: key });
}

</script>

<template>
  <div>
    <div
      class="h-[360px] bg-light-orange flex justify-center items-center cursor-pointer"
      @click="toThePage(MenuKeyEnum.Home)"
    >
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
        class="flex flex-col justify-center items-center group
        bg-primary h-[144px] border-b border-primary-hover cursor-pointer"
      >
        <div
          class="h-12 w-12 mb-2 bg-green-1 ease-out duration-300"
          :style="{maskImage: `url('${menu.icon}')`}"
          :class="[menu.key === route.name ? 'bg-secondary' : 'group-hover:bg-primary-hover group-active:bg-secondary']"
          @click="toThePage(menu.key)"
        />
        <h2
          class="text-xl text-green-1 ease-out duration-300"
          :class="[menu.key === route.name ? 'text-secondary' : 'group-hover:text-primary-hover group-active:text-secondary']"
        >
          {{ menu.name }}
        </h2>
      </div>
    </div>
  </div>
</template>