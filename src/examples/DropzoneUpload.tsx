import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { DropzoneUpload, IConnections } from '../lib';
// import { DropzoneUpload } from '@equalizer/synchron-lib';
// import { IConnections } from '@equalizer/synchron-lib-types';
// import { DropzoneUpload } from '../_dist/app';
// import { IConnections } from '../_dist/types';
// import { RowUpload } from '../dist';

interface IProps {
    connection: IConnections;
    sampleImageURL?: string[];
}

const DropzoneUploadExample = (props: IProps) => {
    const { connection: { url, headers },
        sampleImageURL
    } = props;
    const uploadUrl = `${url}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    const [fileURLList,
        setFileURLList
    ] = useState<string[]>([])

    // const downloadUrl = `${url}/Download`
    // const [file, setFile] = useState('');

    // useEffect(() => {
    //     // console.log('Example fileURLList: ', fileURLList)
    // }, [fileURLList])

    return (
        <> <br />

            <Button
                variant='contained'
                onClick={() => setFileURLList(sampleImageURL || [])}

            >Assign Files</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
                variant='contained'
                onClick={() => setFileURLList([])}

            >Delete  Files</Button>
            <br />
            <br />
            DropzoneUploadExample without file
            <DropzoneUpload
                connection={{ url: uploadUrl, headers }}
                uploadParameters={['param1=value1', 'param2=value2']}
                uploadMethod='POST' // 'PUT'
                // files={[]}
                files={fileURLList || []}
                classes={{
                    // width: '40px',
                    // height: '40px',
                    errorStyles: {
                        // color: 'blue',
                        fontSize: '10px'
                    },
                    preview: {
                        fullscreen: 'show-image-custom'
                    }

                }}
                text={{
                    DragboxText: 'Dropzone 1 Drag Here',


                }}
                // thumbnailSize={100}
                // showDetails
                refreshOnFilesChange={true}
                inititalFiles={fileURLList || []}
                // readOnly
                actions={{
                    View: (data) => console.log('View Pressed : ', data),
                    Download: (data) => console.log('Download Pressed : ', data),
                    onSuccess: ((data) => { console.log('onSuccess : ', data) }),
                    // onChange: ((data) => { console.log('onChange : ', data) }),
                    // onAbort: (() => { console.log('Aborted') }),
                    onDelete: ((data) => { console.log('Deleted :', data) }),
                    // onError: (s, d) => console.log('error:', s, d),
                    // onDirty: ((data) => { console.log('onDirty:', data) }),
                }}
            />

        </>

    )
};
export default DropzoneUploadExample
