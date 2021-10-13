import React from 'react';
import { ShowImage } from '../lib';
import type { IConnections } from '../lib/Upload/types';
interface IProps {
    connection: IConnections;
    sampleImageURL: string;

}

const ShowImageExample = (props: IProps) => {
    return (
        <div style={{ width: '200px', border: 'red 1px solid' }}>
            <ShowImage
                connection={props.connection}
                file={{
                    name: 'TestFile',
                    url: props.sampleImageURL
                }}
                // onError={(status, data) => console.log(status, data)}
                // onLoading={(value) => console.log('Loading:', value)}
                // imageStatus={(value) => console.log('imageStatus:', value)}
                // onClick={() => console.log('imageClicked:')}

                className="show-image-custom"
                styles={{}}
            />
        </div>

    )
};
export default ShowImageExample
