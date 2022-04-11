import { readonly, shallowReactive, shallowRef } from 'vue';
import { useApi } from '@/makers/api.maker';
import { RecommendRestaurant } from '@/types/restaurant';

let instance: ReturnType<typeof prepareModule> | undefined = undefined;
let useApiInstance: ReturnType<typeof useApi>;

export function useRestaurantModule() {
  if (!useApiInstance) {
    useApiInstance = useApi();
  }

  return instance ??= prepareModule();
}

function prepareModule() {
  // state
  const state = shallowReactive({
    recommendRestaurantList: shallowRef<RecommendRestaurant[]>([])
  });
  // getter
  const getter = shallowReactive(useGetter());

  function useGetter() {
    // computed or array find data

    return {};
  }

  async function fetchRecommendRestaurantList() {
    const params = {
      $top: 6,
      // random fetch, there are about 4600 items in spot list
      $skip: Math.floor(Math.random() * 4400),
      $filter: 'Picture/PictureUrl1 ne null'
    };
    const data = await useApiInstance.getRestaurantList(params);

    if (!data) {
      console.error('fetchRecommendRestaurantList is null');

      return;
    }

    state.recommendRestaurantList.value = data.slice(0, data.length > 6 ? 6 : data.length) as RecommendRestaurant[];
  }

  return {
    state: readonly(state),
    getter: readonly(getter),
    fetchRecommendRestaurantList
  };
}
