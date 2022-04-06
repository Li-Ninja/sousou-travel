import { computed, readonly, shallowReactive, shallowRef } from 'vue';
import { useApi } from '@/makers/api.maker';
import { Picture, RecommendSpot, SpotRes } from '@/types/spot';

let instance: ReturnType<typeof prepareModule> | undefined = undefined;
let useApiInstance: ReturnType<typeof useApi>;

export function useSpotModule() {
  if (!useApiInstance) {
    useApiInstance = useApi();
  }

  return instance ??= prepareModule();
}

function prepareModule() {
  // state
  const state = shallowReactive({
    spotList: shallowRef<SpotRes>([])
  });
  // getter
  const getter = shallowReactive(useGetter());

  function useGetter() {
    // computed or array find data
    const recommendSpotList = computed(() => {
      const list: RecommendSpot[] = [];

      state.spotList.value.forEach(spot => {
        if (spot.ScenicSpotName && spot.Picture && spot.Picture.PictureUrl1) {
          const obj = {
            ...spot,
            Picture: spot.Picture as Picture
          };

          list.push(obj);
        }
      });

      if (list.length < 6) {
        setTimeout(() => {
          void fetchRecommendSpotList();
        }, 1000);

        return list.slice(0, list.length);
      }

      return list.slice(0, 6);
    });

    return {
      recommendSpotList
    };
  }

  async function fetchRecommendSpotList() {
    const params = {
      $top: 20,
      // random fetch, there are about 5190 items in spot list
      $skip: Math.floor(Math.random() * 5000)
    };
    const data = await useApiInstance.getSpotList(params);

    if (!data) {
      console.error('fetchRecommendSpotList is null');

      return;
    }

    state.spotList.value = data;
  }

  return {
    state: readonly(state),
    getter: readonly(getter),
    fetchRecommendSpotList
  };
}
