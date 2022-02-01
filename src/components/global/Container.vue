<script setup lang="ts">
// script

</script>

<template>
  <div class="mx-auto h-screen">
    <div class="flex flex-wrap h-full">
      <div class="hidden lg:block lg:w-[170px] bg-slate-500">
        menu
      </div>
      <div class="flex-auto bg-red-300">
        <router-view />
      </div>
    </div>
  </div>
</template>