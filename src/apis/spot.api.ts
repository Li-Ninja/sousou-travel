import { MockPusher, GetApiCb, Params } from '@/types/api';
import { SpotRes } from '@/types/spot';
import { getSpotRes } from '@/mocks/spot.mock';

export function useSpotApi(getApi: GetApiCb, onMockPusher: MockPusher) {
  const url = {
    getSpot: '/Tourism/ScenicSpot'
  };

  onMockPusher((mock) => {
    mock.onGet(url.getSpot).reply(200, getSpotRes());
  });

  const getSpotList = <D extends SpotRes>(params: Params) => {
    return getApi<D>(url.getSpot, params).then(res => res);
  };

  return {
    getSpotList
  };
}
