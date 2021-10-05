import React, { Fragment, useEffect } from 'react';
import useAxios from 'axios-hooks';
interface IProps {
    url: string;
    headers: any;
    setLoading?: (value: boolean) => void;
    filename: string;
    ext?: string;
}

export default (props: IProps) => {
    const [{ loading, error }, getDataFromAPI] = useAxios({ responseType: 'blob' }, { manual: true });

    useEffect(() => {
        // console.log('props.url : ', props.url)
        props.url && startDownload({ url: props.url, headers: props.headers });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.url]);

    useEffect(() => {
        props.setLoading && props.setLoading(loading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    useEffect(() => {
        error && console.log('download error : ', error);
    }, [error]);

    const startDownload = async (value: any) => {
        const result: any = await getDataFromAPI(value);
        if (result && result.status === 200) {
            const data = new Blob([result.data], { type: 'application/pdf' });
            const ext = data.type.split('/')[1];
            const docURL = window.URL.createObjectURL(data);
            const tempLink = document.createElement('a');
            tempLink.href = docURL;
            tempLink.target = '_blank';
            tempLink.rel = 'noopener noreferrer';
            tempLink.setAttribute('download', `${props.filename}.${props.ext || ext}`);
            tempLink.click();
        }
    };

    return <Fragment></Fragment>;
};
