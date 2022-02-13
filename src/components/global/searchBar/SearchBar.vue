<script lang="ts" setup>
import { ref, shallowRef } from 'vue';
import SearchBarDropdownMenu from './SearchBarDropdownMenu.vue';

const searchData = ref({
  city: undefined
});

const isShow = shallowRef(false);

function showMenu() {
  isShow.value = !isShow.value;
}

</script>

<template>
  <div class="flex relative">
    <div class="relative text-xl leading-snug inline-flex mr-8 bg-white rounded-lg">
      <div class="relative">
        <div class="text-[#B3B0AC] px-6 py-4 w-80">
          <span v-if="searchData.city">
            {{ searchData.city }}
          </span>
          <span v-else>
            {{ $t('common.IWantToGo') }}
          </span>
        </div>
        <div class="absolute w-6 h-full right-6 top-0">
          <div
            class="relative h-full cursor-pointer group"
            @click="showMenu()"
          >
            <div
              class="absolute w-6 h-6 top-1/2 -translate-y-1/2 ease-out duration-300"
              :class="isShow ? 'bg-[#26A69A]' :'bg-[#CCCCCC] group-hover:bg-[#498C8C] group-active:bg-[#26A69A]'"
              style="mask-image: url('src/assets/ionicon_svg/caret-down-outline.svg')"
            />
          </div>
        </div>
      </div>
      <input
        class="w-80 px-[37px] py-4 rounded-r-lg"
        type="text"
        :placeholder="$t('common.EnterKeyWord')"
      >
      <span class="absolute w-[2px] h-9 bg-[#CCCCCC] inset-1/2 -translate-x-1/2 -translate-y-1/2" />
      <SearchBarDropdownMenu
        v-model="isShow"
        class="absolute w-full top-20 mt-1"
      />
    </div>
    <button class="text-2xl font-medium leading-normal px-12 py-3 text-[#FDF6EE] bg-gradient-to-r from-[#EB6522] to-[#F57C2C] rounded-lg">
      {{ $t('common.Search') }}
    </button>
  </div>
</template>