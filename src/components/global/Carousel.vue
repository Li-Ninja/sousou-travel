<script setup lang="ts">
import { ref } from 'vue';

const imageList = ref([1, 2, 3, 4, 5, 6]);
const image = ref(imageList.value[0]);

function changeImage(imageNumber: number) {
  image.value = imageNumber;
}

function getImageUrl() {
  return `url('src/assets/banner/${image.value}.jpg')`;
}

(function autoChangeImage() {
  setTimeout(() => {
    changeImage(image.value === imageList.value.length ? imageList.value[0] : ++image.value);
    autoChangeImage();
  }, 5000);
})();

</script>

<template>
  <div>
    <div class="fixed top-24 right-1/2 translate-x-1/2 lg:top-72 lg:right-12 z-20 grid grid-cols-6 gap-x-4 lg:block">
      <div
        v-for="item in imageList"
        :key="item"
        class="h-3 w-3 rounded-full cursor-pointer mb-4"
        :class="[image === item ? ' border-2 border-grey-3' : 'bg-grey-3 opacity-50']"
        @click="changeImage(item)"
      />
    </div>
    <div class="h-full fixed inset-0 bg-cover bg-center bg-no-repeat bg-black/50 -z-10" />
    <div
      class="h-full fixed inset-0 bg-cover bg-center bg-no-repeat -z-20 ease-in-out duration-300"
      :style="{backgroundImage: getImageUrl()}"
    />
  </div>
</template>