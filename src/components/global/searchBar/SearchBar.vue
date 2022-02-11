<script setup lang="ts">
import { ref } from 'vue';

const searchData = ref({
  city: undefined
});

</script>

<template>
  <div class="flex">
    <div class="relative text-xl leading-snug inline-flex mr-8">
      <div class="relative">
        <select
          v-model="searchData.city"
          class="text-[#B3B0AC] px-6 py-4 w-80 rounded-l-lg bg-no-repeat appearance-none bg-right"
          :aria-label="$t('common.IWantToGo')"
        >
          <option
            selected
            disabled
            hidden
            value="undefined"
          >
            {{ $t('common.IWantToGo') }}
          </option>
          <option value="1">
            1
          </option>
        </select>
        <div
          class="absolute w-6 h-6 right-6 top-1/2 -translate-y-1/2 bg-[#CCCCCC]"
          style="mask-image: url('src/assets/ionicon_svg/caret-down-outline.svg')"
        />
      </div>
      <input
        class="w-80 px-[37px] py-4 rounded-r-lg"
        type="text"
        :placeholder="$t('common.EnterKeyWord')"
      >
      <span class="absolute w-[2px] h-9 bg-[#CCCCCC] inset-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
    <button class="text-2xl font-medium leading-normal px-12 py-3 text-[#FDF6EE] bg-gradient-to-r from-[#EB6522] to-[#F57C2C] rounded-lg">
      {{ $t('common.Search') }}
    </button>
  </div>
</template>