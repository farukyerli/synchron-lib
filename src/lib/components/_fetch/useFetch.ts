import { useEffect, useReducer, useState } from 'react';
// import { getMainApiBaseUrl } from '_helpers';
import { fetchRequestInterceptor, fetchResponseErrorInterceptor, fetchResponseInterceptor } from './config';
import { IFetchParams, IFetchAction, InitialFetchParam, InitialFetchAction } from './types';

const useFetch = <T>(InitialValue1?: IFetchParams | string, InitialValue2?: IFetchAction) => {
    const evaluatedInitialFetchParams =
        typeof InitialValue1 === 'string'
            ? { ...InitialFetchParam, url: InitialValue1 }
            : { ...InitialFetchParam, ...InitialValue1 };

    // const [params, setParams] = useState<IFetchParams>(evaluatedInitialFetchParams || InitialFetchParam);
    const [action, setAction] = useState<IFetchAction>({ ...InitialFetchAction, ...InitialValue2 });
    interface IState {
        data?: T | any;
        error?: any;
        loading?: boolean;
        response?: any;
        aborted?: boolean;
    }
    const initialState: IState = {
        data: null,
        error: null,
        loading: false,
        response: null,
        aborted: false,
    };
    const controller = new AbortController();
    const signal = controller.signal;
    const [state, dispatch] = useReducer((oldState: IFetchParams, newState: any) => {
        return { ...oldState, ...newState };
    }, initialState);

    useEffect(() => {
        !action.manual && startFetchData(evaluatedInitialFetchParams);
        // console.log(InitialValue1, evaluatedInitialFetchParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [action]);

    const initiateManualAsync = async (value1?: IFetchParams | string) => {
        const evaluatedFetchParams = value1
            ? typeof value1 === 'string'
                ? { ...evaluatedInitialFetchParams, url: value1 }
                : { ...evaluatedInitialFetchParams, ...value1 }
            : { ...evaluatedInitialFetchParams };

        // value2 && setAction((prevState) => ({ ...prevState, ...value2 }));
        return await startFetchData(evaluatedFetchParams);
    };

    const abortFetch = (logEnabled?: boolean) => {
        try {
            try {
                controller.abort();
            } catch {
                logEnabled && console.log('Fetch Aborted without initilization');
            }
            dispatch({ loading: false, aborted: false });
        } catch { }
    };

    const startFetchData = async (p: IFetchParams) => {
        p.loading !== false && dispatch({ loading: true });
        const originalURL = p?.url?.includes('https://');

        let url: string;
        originalURL ? (url = p.url || '') : (url = (p.baseURL || '') + p.url);
        const headers = { ...p.headers };

        const defaultParams =
            p.method === 'GET'
                ? {
                    headers,
                    method: p.method,
                    signal,
                    mode: p.mode,
                }
                : {
                    headers,
                    method: p.method,
                    body: JSON.stringify(p.data),
                    signal,
                    mode: p.mode,
                };
        const fetchParams = action.interceptRequest ? fetchRequestInterceptor(defaultParams) : defaultParams;
        // console.log(originalURL, url, headers, p.headers);
        // console.log(fetchParams, p);
        let interval;
        if (action?.timeout) {
            interval = setTimeout(() => {
                // console.warn('Timeout Activated ....', url);
                abortFetch(true);
            }, action.timeout);
        }

        const returnValue = fetch(url, fetchParams)
            .then(async (rawResponse) => {
                const response: any = action.interceptResponse ? fetchResponseInterceptor(rawResponse) : rawResponse;
                let data: any;
                try {
                    data = await response.json();
                } catch {
                    data = response.body;
                }
                // console.log('RESPONSE status', response.status);
                if (response.status < 300) {
                    dispatch({ loading: false, response, data });
                    const shappedData: T = data;
                    response['data'] = shappedData;
                    if (response.headers['Content-Type'] === 'text/plain') {
                        return response.text();
                    } else {
                        return response;
                    }
                } else {
                    //   logError(url, fetchParams, response, data);
                    dispatch({ loading: false, error: data, response });
                    response['data'] = data;
                    action.interceptErrors &&
                        fetchResponseErrorInterceptor({
                            data,
                            status: response.status,
                            headers: response.headers,
                            config: fetchParams,
                        });
                    return response;
                }
            })
            .catch((error) => {
                // logError(url, fetchParams, error, '', 'CATCH CASE');
                dispatch({ loading: false, error });
                // error['data'] = error?.response?.body;
                return { ...error, data: error?.response?.body };
            });
        if (action?.timeout) {
            interval && clearTimeout(interval);
        }
        setAction((prevState) => ({ ...prevState, manual: true }));
        return returnValue;
    };

    // const logError = (url: string, fetchParams: IFetchParams, error: Response, data: string, origin: string) => {
    //     console.error('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    //     console.warn(url);
    //     console.warn(fetchParams);
    //     console.warn('FETCH Data:', data);
    //     console.error('FETCH Response:', error);
    //     console.error('ERROR ORIGIN:', origin);
    //     console.error('==========================================================`');
    // };

    useEffect(() => {
        return () => {
            abortFetch();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [state, initiateManualAsync, abortFetch];
};

export default useFetch;
