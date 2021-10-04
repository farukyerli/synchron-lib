import type { IFetchParams } from './types';

export function buildRequestHeader(token?: string): HeadersInit {
    let headersObject: any = {};
    if (token) {
        headersObject = {
            Authorization: 'Bearer ' + token,
        };
    }

    return {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache',
        ...headersObject,
    };
}

// const getErrorMessage: any = (status: number, data: any) => {
//     // console.log(data[0].Message);
//     const _returnValue = ``;
//     if (data?.Errors?.Items?.length) return data.Errors.Items[0].Message;
//     if (data?.Errors) return data.Errors.Message;
//     if (data?.Items && data?.Items[0]) return data.Items[0].Message;
//     if (data?.Message !== '') return data.Message;
//     if (data?.message !== '') return data.Message;
//     if (data?.error) return data.error;
//     if (data.length && data[0]?.Message !== '') return data[0].Message;
//     return _returnValue;
// };

// request interceptor
const fetchRequestInterceptor = (config: IFetchParams, token?: string): IFetchParams => {
    const newConfig = { ...config };
    newConfig.headers = {
        ...buildRequestHeader(token),
        ...newConfig.headers
    };
    return newConfig;
};

interface FetchError {
    data: any;
    status: number;
    headers: any;
    config: IFetchParams;
}

const fetchResponseErrorInterceptor = (error: FetchError) => {
    // if (error.data) {
    //     if (error.status === 401) {
    //         window.sessionStorage.clear();
    //         window.location.href = '/login?ref=' + window.location.pathname;
    //     }

    //     if (error.status === 403) {
    //         console.warn(
    //             'Missing API permissions',
    //             error.config.method?.toUpperCase(),
    //             error.config.url,
    //             error.headers['X-PermissionNeed'],
    //         );
    //     }
    //     let message = getErrorMessage(error.status, error.data);

    //     // console.log(message);
    //     if (message !== '') {

    //     } else {
    //         console.warn('Original ERROR Message : ', error.status, error.data);
    //     }
    // } else {
    //     if (error.data) {
    //         console.warn('Unclassified Error (Message):', error.data);
    //         console.warn('Unclassified Error :', error);
    //         // toastObject = {
    //         //     ...toastObject,
    //         //     message: 'Connection timeout',
    //         // };

    //         // toastMessage(toastObject);
    //     }
    // }
};

const fetchResponseInterceptor = (response: Response): Response => {
    // response.headers.get('X-Obsolete') && console.warn('Obsolete', response.headers);
    // response.headers.get('X-PermissionNeed') && console.warn('Missing API permissions', response.headers);
    return response;
};

export { fetchRequestInterceptor, fetchResponseErrorInterceptor, fetchResponseInterceptor };
