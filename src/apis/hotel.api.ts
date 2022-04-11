import { MockPusher, GetApiCb, Params } from '@/types/api';
import { HotelRes } from '@/types/hotel';
import { getHotelRes } from '@/mocks/hotel.mock';

export function useHotelApi(getApi: GetApiCb, onMockPusher: MockPusher) {
  const url = {
    getHotel: '/Tourism/Hotel'
  };

  onMockPusher((mock) => {
    mock.onGet(url.getHotel).reply(200, getHotelRes());
  });

  const getHotelList = <D extends HotelRes>(params: Params) => {
    return getApi<D>(url.getHotel, params).then(res => res);
  };

  return {
    getHotelList
  };
}
