<script lang="ts" setup>
import { inject, ref, watch, shallowRef, ShallowRef } from 'vue';
import SearchBarDropdownMenu from './SearchBarDropdownMenu.vue';
import SearchBarDropdownMobileMenu from './SearchBarDropdownMobileMenu.vue';

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
  <div class="grid lg:grid-cols-2 relative max-w-screen-2xl">
    <!-- desktop search block -->
    <div class="relative hidden lg:grid grid-cols-2 text-xl leading-snug mr-8 px-6 py-4 bg-white rounded-lg">
      <div
        class="relative cursor-pointer group"
        @click.stop="updateShowDropdownMenu()"
      >
        <div class="text-grey-3">
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
            :class="showDropdownMenu ? 'bg-cyan-4' :'bg-[#CCCCCC] group-hover:bg-primary-hover group-active:bg-cyan-4'"
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
    <!-- mobile search block -->
    <div
      class="relative lg:hidden text-base leading-normal px-4 py-3 mb-4 bg-white rounded-lg"
      @click.stop="updateShowDropdownMenu()"
    >
      <div class="relative group">
        <div class="text-grey-3">
          <span v-if="searchData.city">
            {{ searchData.city }}
          </span>
          <span v-else>
            {{ $t('common.IWantToGo') }}
          </span>
        </div>
      </div>
      <div class="absolute w-6 h-full right-6 top-0">
        <div
          class="absolute w-6 h-6 top-1/2 -translate-y-1/2 ease-out duration-300"
          :class="showDropdownMenu ? 'bg-cyan-4' :'bg-[#CCCCCC] group-hover:bg-primary-hover group-active:bg-cyan-4'"
          style="mask-image: url('src/assets/ionicon_svg/caret-down-outline.svg')"
        />
      </div>
      <SearchBarDropdownMobileMenu v-model="showDropdownMenu" />
    </div>
    <!-- search button -->
    <div>
      <button class="w-full lg:w-auto text-2xl font-medium leading-normal px-12 py-3 text-[#FDF6EE] bg-gradient-to-r from-dark-orange to-accent rounded-lg">
        {{ $t('common.Search') }}
      </button>
    </div>
  </div>
</template>