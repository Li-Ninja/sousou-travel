<script setup lang="ts">
import { computed, shallowRef, watch, ShallowRef } from 'vue';
import { areaList } from '@/const/area.const';
import { districtList } from '@/const/district.const';
import { CityEnum, DirectionEnum } from '@/enum/area.enum';

const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {
  modelValue: false
});
const emits = defineEmits(['update:modelValue']);

const localValue = shallowRef(props.modelValue);

watch(() => props.modelValue, (val: boolean) => {
  localValue.value = val;
});

watch(() => localValue.value, () => {
  emits('update:modelValue', localValue.value);
});

/** selected area */
const selectedArea = shallowRef(DirectionEnum.North);

function handleSelectedArea(key: DirectionEnum) {
  selectedArea.value = key;
  changeSelectedCity(areaList.find(area => area.key === selectedArea.value)?.list[0]?.key);
}

/** selected city */
const selectedCity: ShallowRef<CityEnum | undefined> = shallowRef(areaList[0]?.list[0]?.key);
const cityList = computed(() => areaList.find(area => area.key === selectedArea.value)?.list || []);

function changeSelectedCity(key: CityEnum | undefined) {
  selectedCity.value = key;
}

/** selected district */
const selectedDistrict: ShallowRef<number | undefined> = shallowRef(undefined);
const theCityDistrictList = computed(() => districtList.find(district => district.key === selectedCity.value)?.list || []);

function changeSelectedDistrict(key: number | undefined) {
  selectedDistrict.value = key;
}

</script>

<template>
  <div v-if="localValue">
    <!-- TODO w-600px 暫時的 -->
    <div class="relative w-[600px] bg-white rounded-lg pt-3 pb-6 px-8">
      <div
        name="triangle"
        class="
          border-r-[15px] border-l-[15px] border-b-[20px] border-r-transparent border-l-transparent border-b-white
          absolute inline-flex left-12 -top-5
        "
      />
      <!-- area -->
      <div class="flex justify-between border-b border-b-[#F7F7F7]">
        <div
          v-for="area in areaList"
          :key="area.key"
          class="cursor-pointer ease-out duration-300"
          :class="{'shadow-[0_2px_0_0_rgba(38,166,154,1)]': selectedArea === area.key}"
          @click="handleSelectedArea(area.key)"
        >
          <div class="flex">
            <div class="flex flex-col justify-center justify-items-center">
              <div
                class="bg-[#2E2D2C] w-6 h-6 inline-block mr-1"
                style="mask-image: url('src/assets/ionicon_svg/location-outline.svg')"
              />
            </div>
            <span class="text-2xl leading-normal text-[#2E2D2C]">
              {{ area.name }}
            </span>
          </div>
        </div>
      </div>
      <!-- city -->
      <div class="grid grid-cols-5 p-6">
        <div
          v-for="city in cityList"
          :key="city.key"
          class="cursor-pointer ease-out duration-300"
          :class="selectedCity === city.key ? 'text-[#26A69A]' : 'text-[#2E2D2C] hover:text-[#498C8C] active:text-[#26A69A]'"
          @click="changeSelectedCity(city.key)"
        >
          <span class="text-2xl leading-normal font-normal">
            {{ city.name }}
          </span>
        </div>
      </div>
      <!-- district -->
      <div>
        <div class="inline-flex items-center mb-2">
          <div class="text-[#26A69A] text-base m-1">
            {{ $t('area.TheCityDistrict') }}
          </div>
          <div
            class="w-5 h-5 bg-[#26A69A]"
            style="mask-image: url('src/assets/ionicon_svg/caret-down-outline.svg')"
          />
        </div>
        <div class="grid grid-cols-5 gap-4 bg-[#F7F7F7] p-6 rounded-lg">
          <div
            class="cursor-pointer ease-out duration-300 text-xl leading-normal"
            :class="!selectedDistrict ? 'text-[#26A69A]' : 'text-[#2E2D2C] hover:text-[#498C8C] active:text-[#26A69A]'"
            @click="changeSelectedDistrict(undefined)"
          >
            {{ $t('area.AllDistrict') }}
          </div>
          <div
            v-for="district in theCityDistrictList"
            :key="district.zipCode"
            class="cursor-pointer ease-out duration-300"
            :class="selectedDistrict === district.zipCode ? 'text-[#26A69A]' : 'text-[#2E2D2C] hover:text-[#498C8C] active:text-[#26A69A]'"
            @click="changeSelectedDistrict(district.zipCode)"
          >
            <span class="text-xl leading-normal">
              {{ district.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>