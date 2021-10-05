export interface IFetchParams {
    url?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'OPTION' | 'DELETE';
    data?: any;
    baseURL?: string | null;
    headers?: any;
    body?: any;
    signal?: any;
    mode?: 'no-cors' | 'cors';
    loading?: boolean;
}

export const InitialFetchParam: IFetchParams = {
    url: '',
    method: 'GET',
    data: null,
    baseURL: null,
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors',
    loading: true,
};

export interface IFetchAction {
    manual?: boolean;
    interceptErrors?: boolean;
    interceptRequest?: boolean;
    interceptResponse?: boolean;
    timeout?: number;
}

export const InitialFetchAction: IFetchAction = {
    manual: false,
    interceptErrors: true,
    interceptRequest: true,
    interceptResponse: true,
    timeout: 0,
};
