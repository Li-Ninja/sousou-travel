import { readonly, shallowReactive, shallowRef } from 'vue';
import { useApi } from '@/makers/api.maker';
import { RecommendHotel } from '@/types/hotel';

let instance: ReturnType<typeof prepareModule> | undefined = undefined;
let useApiInstance: ReturnType<typeof useApi>;

export function useHotelModule() {
  if (!useApiInstance) {
    useApiInstance = useApi();
  }

  return instance ??= prepareModule();
}

function prepareModule() {
  // state
  const state = shallowReactive({
    recommendHotelList: shallowRef<RecommendHotel[]>([])
  });
  // getter
  const getter = shallowReactive(useGetter());

  function useGetter() {
    // computed or array find data

    return {};
  }

  async function fetchRecommendHotelList() {
    const params = {
      $top: 6,
      // random fetch, there are about 11624 items in spot list
      $skip: Math.floor(Math.random() * 10000),
      $filter: 'Picture/PictureUrl1 ne null'
    };
    const data = await useApiInstance.getHotelList(params);

    if (!data) {
      console.error('fetchRecommendHotelList is null');

      return;
    }

    state.recommendHotelList.value = data.slice(0, data.length > 6 ? 6 : data.length) as RecommendHotel[];
  }

  return {
    state: readonly(state),
    getter: readonly(getter),
    fetchRecommendHotelList
  };
}
