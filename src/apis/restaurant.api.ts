import { MockPusher, GetApiCb, Params } from '@/types/api';
import { RestaurantRes } from '@/types/restaurant';
import { getRestaurantRes } from '@/mocks/restaurant.mock';

export function useRestaurantApi(getApi: GetApiCb, onMockPusher: MockPusher) {
  const url = {
    getRestaurant: '/Tourism/Restaurant'
  };

  onMockPusher((mock) => {
    mock.onGet(url.getRestaurant).reply(200, getRestaurantRes());
  });

  const getRestaurantList = <D extends RestaurantRes>(params: Params) => {
    return getApi<D>(url.getRestaurant, params).then(res => res);
  };

  return {
    getRestaurantList
  };
}
