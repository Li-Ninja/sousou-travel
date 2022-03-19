<script setup lang="ts">
import { computed, shallowRef, watch, ShallowRef } from 'vue';
import PlaceSelect from '@/components/global/PlaceSelect.vue';
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
  handleSelectedCity();
}

/** selected city */
const selectedCity: ShallowRef<CityEnum | undefined> = shallowRef(areaList[0]?.list[0]?.key);
const cityList = computed(() => areaList.find(area => area.key === selectedArea.value)?.list || []);

function handleSelectedCity() {
  changeSelectedCity();
  changeSelectedDistrict();
}

function changeSelectedCity(key = areaList.find(area => area.key === selectedArea.value)?.list[0]?.key) {
  selectedCity.value = key;
}

watch(selectedCity, () => {
  changeSelectedDistrict();
});

/** selected district */
const theCityDistrictList = computed(() => districtList.find(district => district.key === selectedCity.value)?.list || []);
const selectedDistrict: ShallowRef<number | undefined> = shallowRef(theCityDistrictList.value[0]?.zipCode);

function changeSelectedDistrict(key = theCityDistrictList.value[0]?.zipCode) {
  selectedDistrict.value = key;
}

/** confirm button */
function onConfirm() {
  emits('update-city', selectedCity.value ?? '');
  isShow.value = false;
}

</script>

<template>
  <div v-if="isShow">
    <div
      class="fixed inset-0 flex flex-col justify-center p-48"
    >
      <!-- @click.stop can avoid close dropdownMenu when click on menu but didn't click on button -->
      <div
        class="bg-grey-1 rounded-lg p-6"
        @click.stop=""
      >
        <!-- area -->
        <div class="grid grid-cols-2 mb-8">
          <div
            v-for="area in areaList"
            :key="area.key"
            class="cursor-pointer ease-out duration-300"
            :class="{'shadow-[0_2px_0_0_rgba(38,166,154,1)]': selectedArea === area.key}"
            @click.stop="handleSelectedArea(area.key)"
          >
            <div class="flex justify-center">
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

        <PlaceSelect
          v-model:cityKey="selectedCity"
          class="mb-8"
          :list="cityList"
        />

        <PlaceSelect
          v-if="selectedDistrict"
          v-model:zipCode="selectedDistrict"
          class="mb-8"
          :list="theCityDistrictList"
        />

        <button
          class="w-full lg:w-auto text-2xl font-medium leading-normal px-12 py-3
        text-light-orange bg-gradient-to-r from-dark-orange to-accent rounded-lg"
          @click="onConfirm"
        >
          {{ $t('common.Confirm') }}
        </button>
      </div>
    </div>
  </div>
</template>