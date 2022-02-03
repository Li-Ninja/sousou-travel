<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { MenuKeyEnum } from '@/enum/menu.enum';

const { t } = useI18n();

const menuList = [
  {
    key: MenuKeyEnum.Spot,
    name: t(`menu.${MenuKeyEnum.Spot}`),
    icon: 'src/assets/ionicon_svg/map-outline.svg'
  },
  {
    key: MenuKeyEnum.Restaurant,
    name: t(`menu.${MenuKeyEnum.Restaurant}`),
    icon: 'src/assets/ionicon_svg/restaurant-outline.svg'
  },
  {
    key: MenuKeyEnum.Hotel,
    name: t(`menu.${MenuKeyEnum.Hotel}`),
    icon: 'src/assets/ionicon_svg/bed-outline.svg'
  },
  {
    key: MenuKeyEnum.Activity,
    name: t(`menu.${MenuKeyEnum.Activity}`),
    icon: 'src/assets/ionicon_svg/bulb-outline.svg'
  },
  {
    key: MenuKeyEnum.Schedule,
    name: t(`menu.${MenuKeyEnum.Schedule}`),
    icon: 'src/assets/ionicon_svg/footsteps-outline.svg'
  }
];

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