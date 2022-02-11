<script setup lang="ts">
import SearchBar from '@/components/global/searchBar/SearchBar.vue';

</script>

<template>
  <div>
    <div class="text-white mb-[72px]">
      <div class="text-5xl font-bold leading-normal mb-2 lg:mb-6 ">
        {{ $t('common.HeaderTitle') }}
      </div>
      <div class="text-[34px] font-medium leading-snug">
        <div>
          {{ $t('common.HeaderContent1') }}
        </div>
        <div>
          {{ $t('common.HeaderContent2') }}
        </div>
      </div>
    </div>
    <SearchBar />
  </div>
</template>