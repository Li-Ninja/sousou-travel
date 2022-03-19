<script setup lang="ts">
import { computed, shallowRef, watch, ShallowRef } from 'vue';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CityEnum } from '@/enum/area.enum';
import {  City, District } from '@/types/common';

/**
 * cant't use modelValue: CityEnum | number,
 * when other components use PlaceSelect.vue,
 * it will only get the first type.
 * use two props value to get CityEnum's key or District's zipCode.
 */
const props = withDefaults(defineProps<{
  cityKey?: CityEnum
  zipCode?: number
  list: (City | District)[]
}>(), {
  cityKey: undefined,
  zipCode: undefined,
  list: undefined
});
const emits = defineEmits(['update:cityKey', 'update:zipCode']);
const selected: ShallowRef<CityEnum | number> = shallowRef(props.cityKey || props.zipCode);

watch(() => props.cityKey, (val: CityEnum) => {
  selected.value = val;
});

watch(() => props.zipCode, (val: number) => {
  selected.value = val;
});

watch(() => selected.value, () => {
  props.cityKey ?
    emits('update:cityKey', selected.value) :
    emits('update:zipCode', selected.value);
});

function isDistrict(object: City | District): object is District {
  return 'zipCode' in object;
}

function isEqualSelected(place: City | District) {
  return isDistrict(place) ? (place.zipCode === selected.value) : (place.key === selected.value);
}

const placeName = computed(
  () => props.list.find(
    place => isEqualSelected(place))?.name);

function changeSelected(place: City | District) {
  selected.value = isDistrict(place) ? place.zipCode : place.key;
}

</script>

<template>
  <Listbox as="div">
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
        <span class="flex items-center">
          <span class="ml-3 block truncate">
            {{ placeName }}
          </span>
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption
            v-for="city in list"
            :key="city.name"
            as="template"
          >
            <li
              :class="[isEqualSelected(city) ? 'text-white bg-primary' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']"
              @click="changeSelected(city)"
            >
              <div class="flex items-center">
                <span :class="[isEqualSelected(city) ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ city.name }}
                </span>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>