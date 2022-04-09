import { inject, App } from 'vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MockCb, GetApi } from '@/types/api';
import { useSpotApi } from '@/apis/spot.api';
import { useRestaurantApi } from '@/apis/restaurant.api';

export const apiProvideKey = Symbol('api');

export function prepareApi(app: App) {
  const api = axios.create({
    timeout: 60000,
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2'
  });
  let mock: MockAdapter | null = null;
  const onMockStack: MockCb[] = [];
  const onMockPusher = (cb: MockCb) => {
    onMockStack.push(cb);
  };

  const homeApi = useSpotApi(getApi, onMockPusher);
  const restaurantApi = useRestaurantApi(getApi, onMockPusher);

  function withMock() {
    mock = new MockAdapter(api, { delayResponse: 1000, onNoMatch: 'throwException' });

    onMockStack.forEach(cb => cb(mock!));
  }

  function getApi<D>(url: string, params?: Record<string, any>): GetApi<D> {
    const data = {
      ...params,
      $format: 'JSON'
    };

    return api.get<D>(url, { params: data }).then(res => {
      return res.data;
    }).catch(err => {
      console.error('api catch error', err);

      return null;
    });
  }

  const instance = {
    mock,
    provideKey: apiProvideKey,
    ...homeApi,
    ...restaurantApi,
    withMock
  };

  app.provide(apiProvideKey, instance);

  app.config.globalProperties.$api = instance;

  return instance;
}

type PrepareApi = ReturnType<typeof prepareApi>;
export type InjectApi = Omit<PrepareApi, 'mock' | 'provideKey' | 'withMock'>;

export function useApi(app?: App): InjectApi {
  return app?.config.globalProperties.$api ?? inject<InjectApi>(apiProvideKey)!;
}
