import { readonly, shallowReactive, shallowRef } from 'vue';
import { useApi } from '@/makers/api.maker';
import { RecommendSpot } from '@/types/spot';

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
    recommendSpotList: shallowRef<RecommendSpot[]>([])
  });
  // getter
  const getter = shallowReactive(useGetter());

  function useGetter() {
    // computed or array find data

    return {};
  }

  async function fetchRecommendSpotList() {
    const params = {
      $top: 6,
      // random fetch, there are about 5190 items in spot list
      $skip: Math.floor(Math.random() * 5000),
      $filter: 'Picture/PictureUrl1 ne null'
    };
    const data = await useApiInstance.getSpotList(params);

    if (!data) {
      console.error('fetchRecommendSpotList is null');

      return;
    }

    state.recommendSpotList.value = data.slice(0, data.length > 6 ? 6 : data.length) as RecommendSpot[];
  }

  return {
    state: readonly(state),
    getter: readonly(getter),
    fetchRecommendSpotList
  };
}
