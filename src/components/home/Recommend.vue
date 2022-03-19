<script setup lang="ts">
import { computed, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { RecommendEnum } from '@/enum/common.enum';

const { t } = useI18n();

const recommendList = [
  {
    name: t('common.RecommendSpot'),
    key: RecommendEnum.Spot,
    list: [
      {
        city: '臺中市',
        name: '勤美誠品',
        image: 'https://picsum.photos/900/600'
      },
      {
        city: '臺南市',
        name: '花園夜市',
        image: 'https://picsum.photos/900/601'
      },
      {
        city: '台北市',
        name: '101',
        image: 'https://picsum.photos/900/602'
      },
      {
        city: '臺中市',
        name: '一中街',
        image: 'https://picsum.photos/900/603'
      },
      {
        city: '臺中市',
        name: '逢甲夜市',
        image: 'https://picsum.photos/900/604'
      },
      {
        city: '台東市',
        name: '熱氣球',
        image: 'https://picsum.photos/900/605'
      }
    ]
  },
  {
    name: t('common.RecommendRestaurant'),
    key: RecommendEnum.Restaurant,
    list: [
      {
        city: '臺中市',
        name: '勤美誠品',
        image: 'https://picsum.photos/900/606'
      },
      {
        city: '臺南市',
        name: '花園夜市',
        image: 'https://picsum.photos/900/607'
      },
      {
        city: '台北市',
        name: '101',
        image: 'https://picsum.photos/900/608'
      },
      {
        city: '臺中市',
        name: '一中街',
        image: 'https://picsum.photos/900/609'
      },
      {
        city: '臺中市',
        name: '逢甲夜市',
        image: 'https://picsum.photos/900/610'
      },
      {
        city: '台東市',
        name: '熱氣球',
        image: 'https://picsum.photos/900/611'
      }
    ]
  },
  {
    name: t('common.RecommendHotel'),
    key: RecommendEnum.Hotel,
    list: [
      {
        city: '臺中市',
        name: '勤美誠品',
        image: 'https://picsum.photos/900/620'
      },
      {
        city: '臺南市',
        name: '花園夜市',
        image: 'https://picsum.photos/900/621'
      },
      {
        city: '台北市',
        name: '101',
        image: 'https://picsum.photos/900/622'
      },
      {
        city: '臺中市',
        name: '一中街',
        image: 'https://picsum.photos/900/623'
      },
      {
        city: '臺中市',
        name: '逢甲夜市',
        image: 'https://picsum.photos/900/624'
      },
      {
        city: '台東市',
        name: '熱氣球',
        image: 'https://picsum.photos/900/625'
      }
    ]
  }
];

const currentRecommendKey = shallowRef(RecommendEnum.Spot);
const currentRecommendList = computed(() => recommendList.find(recommend => recommend.key === currentRecommendKey.value)?.list);

function changeRecommend(key: RecommendEnum) {
  currentRecommendKey.value = key;
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
            :src="item.image"
            :alt="item.name"
            rad
            class="bg-cover bg-center w-[120px] md:w-[150px] lg:w-[180px] h-auto rounded-lg"
          >
        </div>
      </div>
    </div>
  </div>
</template>