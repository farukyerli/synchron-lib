import { fetchRequestInterceptor, fetchResponseErrorInterceptor, fetchResponseInterceptor } from './config';
import { InitialFetchParam } from './types';

const syncFetch = <T>(path: string, p = InitialFetchParam) => {
    const originalURL = p?.url?.includes('https://');

    let url: string;
    originalURL ? (url = p.url || '') : (url = (p.baseURL || '') + path);
    const headers = { ...p.headers };
    const fetchParams = fetchRequestInterceptor(
        p.method === 'GET'
            ? {
                headers,
                method: p.method,
                mode: p.mode,
            }
            : {
                headers,
                method: p.method,
                body: JSON.stringify(p.data),
                mode: p.mode,
            },
    );
    // console.log(originalURL, url, headers, p.headers);
    // console.log(fetchParams, p);

    const returnValue = fetch(url, fetchParams)
        .then(async (rawResponse) => {
            const response: any = fetchResponseInterceptor(rawResponse);
            let data: any;
            try {
                data = await response.json();
            } catch {
                data = response.body;
            }
            // console.log('RESPONSE status', response.status);
            if (response.status < 300) {
                const shappedData: T = data;
                response['data'] = shappedData;
                if (response.headers['Content-Type'] === 'text/plain') {
                    return response.text();
                } else {
                    return response;
                }
            } else {
                //   logError(url, fetchParams, response, data);
                response['data'] = data;
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
            error['data'] = error?.response?.body;
            return error;
        });
    return returnValue;
};

export default syncFetch;
