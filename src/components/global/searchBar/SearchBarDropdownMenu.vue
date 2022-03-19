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
const emits = defineEmits(['update:modelValue', 'update-city']);

const isShow = shallowRef(props.modelValue);

watch(() => props.modelValue, (val: boolean) => {
  isShow.value = val;
});

watch(() => isShow.value, () => {
  emits('update:modelValue', isShow.value);
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

function handleSelectedDistrict(key: number | undefined) {
  selectedDistrict.value = key;
  emits('update-city', selectedCity.value ?? undefined, selectedDistrict.value ?? undefined);
  isShow.value = false;
}

</script>

<template>
  <div v-if="isShow">
    <!-- @click.stop can avoid close dropdownMenu when click on menu but didn't click on button -->
    <div
      class="relative bg-white rounded-lg pt-3 pb-6 px-8 w-[736px]"
      @click.stop=""
    >
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
          @click.stop="handleSelectedArea(area.key)"
        >
          <div class="flex">
            <div class="flex flex-col justify-center justify-items-center">
              <div
                class="bg-dark w-6 h-6 inline-block mr-1"
                style="mask-image: url('src/assets/ionicon_svg/location-outline.svg')"
              />
            </div>
            <span class="text-2xl leading-normal text-dark">
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
          :class="selectedCity === city.key ? 'text-secondary' : 'text-dark hover:text-primary-hover active:text-secondary'"
          @click.stop="changeSelectedCity(city.key)"
        >
          <span class="text-2xl leading-normal font-normal">
            {{ city.name }}
          </span>
        </div>
      </div>
      <!-- district -->
      <div>
        <div class="inline-flex items-center mb-2">
          <div class="text-secondary text-base m-1">
            {{ $t('area.TheCityDistrict') }}
          </div>
          <div
            class="w-5 h-5 bg-secondary"
            style="mask-image: url('src/assets/ionicon_svg/caret-down-outline.svg')"
          />
        </div>
        <div class="grid grid-cols-5 gap-4 bg-[#F7F7F7] p-6 rounded-lg">
          <div
            class="cursor-pointer ease-out duration-300 text-xl leading-normal"
            :class="!selectedDistrict ? 'text-secondary' : 'text-dark hover:text-primary-hover active:text-secondary'"
            @click.stop="handleSelectedDistrict(undefined)"
          >
            {{ $t('area.AllDistrict') }}
          </div>
          <div
            v-for="district in theCityDistrictList"
            :key="district.zipCode"
            class="cursor-pointer ease-out duration-300"
            :class="selectedDistrict === district.zipCode ? 'text-secondary' : 'text-dark hover:text-primary-hover active:text-secondary'"
            @click.stop="handleSelectedDistrict(district.zipCode)"
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