import MockAdapter from 'axios-mock-adapter';

type MockCb = (mock: MockAdapter) => void;

type MockPusher = (cb: MockCb) => void;

type Params = Record<string, any>;

type GetApi<D> = Promise<D | null>;

type GetApiCb = <D>(url: string, params?: Params) => GetApi<D>;
