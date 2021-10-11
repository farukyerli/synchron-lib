import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { DownloadFile } from '../lib';
import type { IConnections } from '../lib/Upload/types';
// import DownloadFile from '@equalizer/synchron-lib';

interface IProps {
    connection: IConnections;
    sampleImageURL: string;

}


const DownloadFileExample = (props: IProps) => {
    const [downloadUrl, setDownloadURL] = useState<string | null>(null)
    return (
        <div>
            <Button
                variant='contained'
                onClick={() => setDownloadURL(props.sampleImageURL)}

            >Download File</Button>
            <DownloadFile
                connection={props.connection}
                file={{
                    name: 'TestFile',
                    url: downloadUrl
                }}
                onError={(status, data) => console.log(status, data)}
                onLoading={(value) => console.log('Loading:', value)}
                imageStatus={(value) => console.log('imageStatus:', value)}
            />
        </div>

    )
};
export default DownloadFileExample
