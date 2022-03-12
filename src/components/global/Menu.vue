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
      class="h-[360px] bg-[#FDF6EE] flex justify-center items-center cursor-pointer"
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
        bg-[#13545A] h-[144px] border-b border-[#5A8C8C] cursor-pointer"
      >
        <div
          class="h-12 w-12 mb-2 bg-[#5a8886] ease-out duration-300"
          :style="{maskImage: `url('${menu.icon}')`}"
          :class="[menu.key === route.name ? 'bg-[#26A69A]' : 'group-hover:bg-[#498C8C] group-active:bg-[#26A69A]']"
          @click="toThePage(menu.key)"
        />
        <h2
          class="text-xl text-[#5a8886] ease-out duration-300"
          :class="[menu.key === route.name ? 'text-[#26A69A]' : 'group-hover:text-[#498C8C] group-active:text-[#26A69A]']"
        >
          {{ menu.name }}
        </h2>
      </div>
    </div>
  </div>
</template>