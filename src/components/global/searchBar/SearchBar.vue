<script lang="ts" setup>
import { inject, ref, watch, shallowRef, ShallowRef } from 'vue';
import SearchBarDropdownMenu from './SearchBarDropdownMenu.vue';

const searchData = ref({
  city: undefined
});

const showDropdownMenu = shallowRef(false);

function updateShowDropdownMenu() {
  showDropdownMenu.value = !showDropdownMenu.value;
}

const injectShowDropdownMenu = inject('showDropdownMenu') as ShallowRef<boolean>;
const openDropdownMenu = inject('openDropdownMenu') as () => void;

watch(showDropdownMenu, () => {
  if (showDropdownMenu.value) {
    void openDropdownMenu();
  }
});

watch(injectShowDropdownMenu, () => {
  showDropdownMenu.value = injectShowDropdownMenu.value;
});

</script>

<template>
  <div class="grid grid-cols-2 relative">
    <div class="relative text-xl leading-snug grid grid-cols-2 mr-8 px-6 py-4 bg-white rounded-lg">
      <div
        class="relative cursor-pointer group"
        @click.stop="updateShowDropdownMenu()"
      >
        <div class="text-[#B3B0AC]">
          <span v-if="searchData.city">
            {{ searchData.city }}
          </span>
          <span v-else>
            {{ $t('common.IWantToGo') }}
          </span>
        </div>
        <div class="absolute w-6 h-full right-6 top-0">
          <div
            class="absolute w-6 h-6 top-1/2 -translate-y-1/2 ease-out duration-300"
            :class="showDropdownMenu ? 'bg-[#26A69A]' :'bg-[#CCCCCC] group-hover:bg-[#498C8C] group-active:bg-[#26A69A]'"
            style="mask-image: url('src/assets/ionicon_svg/caret-down-outline.svg')"
          />
        </div>
      </div>
      <input
        class="rounded-r-lg ml-6"
        type="text"
        :placeholder="$t('common.EnterKeyWord')"
      >
      <span class="absolute w-[2px] h-9 bg-[#CCCCCC] inset-1/2 -translate-x-1/2 -translate-y-1/2" />
      <SearchBarDropdownMenu
        v-model="showDropdownMenu"
        class="absolute w-full top-20 mt-1"
      />
    </div>
    <div>
      <button class="text-2xl font-medium leading-normal px-12 py-3 text-[#FDF6EE] bg-gradient-to-r from-[#EB6522] to-[#F57C2C] rounded-lg">
        {{ $t('common.Search') }}
      </button>
    </div>
  </div>
</template>