<script setup lang="ts">
import { shallowRef, toRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { RecommendEnum } from '@/enum/common.enum';
import { useSpotModule } from '@/modules/spot.module';
import { useRestaurantModule } from '@/modules/restaurant.module';
import { useHotelModule } from '@/modules/hotel.module';
import { Tourism } from '@/types/tourism';
import { RecommendSpot } from '@/types/spot';
import { RecommendRestaurant } from '@/types/restaurant';
import { RecommendHotel } from '@/types/hotel';

const { state: spotState, fetchRecommendSpotList } = useSpotModule();
const { state: restaurantState, fetchRecommendRestaurantList } = useRestaurantModule();
const { state: hotelState, fetchRecommendHotelList } = useHotelModule();
const recommendSpotList = toRef(spotState, 'recommendSpotList');
const recommendRestaurantList = toRef(restaurantState, 'recommendRestaurantList');
const recommendHotelList = toRef(hotelState, 'recommendHotelList');

void fetchRecommendSpotList().then(() => {
  currentRecommendList.value = recommendList[0].list.value;
});
void fetchRecommendRestaurantList();
void fetchRecommendHotelList();

const { t } = useI18n();

const recommendList = [
  {
    name: t('common.RecommendSpot'),
    key: RecommendEnum.Spot,
    list: recommendSpotList
  },
  {
    name: t('common.RecommendRestaurant'),
    key: RecommendEnum.Restaurant,
    list: recommendRestaurantList
  },
  {
    name: t('common.RecommendHotel'),
    key: RecommendEnum.Hotel,
    list: recommendHotelList
  }
];

const currentRecommendKey = shallowRef(RecommendEnum.Spot);
const currentRecommendList = shallowRef(recommendList[0].list.value);

function changeRecommend(key: RecommendEnum) {
  currentRecommendKey.value = key;
  currentRecommendList.value = recommendList.find(recommend => recommend.key === currentRecommendKey.value)?.list.value ?? [];
}

function recommendItemName(item: Tourism) {
  switch (currentRecommendKey.value) {
    case RecommendEnum.Spot:
      return (item as RecommendSpot).ScenicSpotName;
    case RecommendEnum.Restaurant:
      return (item as RecommendRestaurant).RestaurantName;
    case RecommendEnum.Hotel:
      return (item as RecommendHotel).HotelName;
    default:
      return '';
  }
}

function useDefaultImage(event: Event) {
  (event.target as HTMLImageElement).src = 'src/assets/non-pic.svg';
}

</script>

<template>
  <div>
    <div class="lg:max-w-[667px] bg-black bg-opacity-60 rounded-xl divide-y divide-dark">
      <div class="grid grid-cols-3 gap-x-6 px-8">
        <div
          v-for="(item, index) in recommendList"
          :key="index"
        >
          <div
            class="inline-block cursor-pointer py-3"
            :class="[item.key === currentRecommendKey ? 'text-accent border-b-2 border-b-accent' : 'text-grey-3']"
            @click="changeRecommend(item.key)"
          >
            <div class="flex items-center">
              <div
                class="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 mb-1 mr-1"
                style="mask-image: url('src/assets/ionicon_svg/sparkles-outline.svg')"
                :class="[item.key === currentRecommendKey ? 'bg-accent' : 'bg-grey-3']"
              />
              <span class="text-xs md:text-base lg:text-2xl leading-normal">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-4 p-4 pb-6 lg:p-8">
        <div
          v-for="(item, index) in currentRecommendList"
          :key="index"
          class="flex justify-center"
        >
          <img
            :src="item.Picture.PictureUrl1"
            :alt="recommendItemName(item)"
            rad
            class="bg-cover bg-center w-[120px] md:w-[150px] lg:w-[180px] h-[80px] md:h-[100px] lg:h-[120px] rounded-lg"
            @error="useDefaultImage"
          >
        </div>
      </div>
    </div>
  </div>
</template>
