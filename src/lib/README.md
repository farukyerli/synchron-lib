Synchron React Component Packages

common definition
```es6
const ApiKey = 'Bearer __API_KEY_TOKEN_VS__'
const APP_URL = 'https://your_server.com';
const headers = {
    authorization: ApiKey,
}
```
## Single Upload component

```es6
import React, { useState } from 'react';
import { RowUpload } from '@equalizer/synchron-lib';
import { IRowUpload } from '@equalizer/synchron-lib-types';

const RowUploadExampleForm = (props: IProps) => {
    const uploadUrl = `${APP_URL}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    const downloadUrl = `${APP_URL}/Download`

    const [file, setFile] = useState('');

    return (
        <>
            <RowUpload
                connection={{ url: uploadUrl, headers }}
                files={[file]}
                rowItems={{
                    Column3: <>Deneme</>, // string or REactNode can be used in all Colunmns.
                    Column4: 'Free usage area',
                    // Column5: '4.', // Ebedded buttons area 
                    Column6: 'last column customization' 
                }}
                text={{
                    DeleteButton: "Delete",
                    DownloadButton: "Download",
                    UploadButton: "Upload",
                    EditButton: "Change",
                    ViewButton: "Preview",
                    AbortButton: "Cancel",
                }}
                tools={{
                    PieChartLoading: {
                        backgroundColor: '#030303',
                        // backgroundColor?: string;
                        // foregroundColor?: string;
                        // width?: string;
                        // height?: string;
                    }
                }}
                actions={{
                    View: (data) => console.log('View Pressed : ', data),
                    Delete: (data) => console.log('Delete Pressed : ', data),
                    Edit: (data) => console.log('Edit Pressed : ', data),
                    Download: (data) => console.log('Download Pressed : ', data),
                    Upload: (data) => console.log('Upload Pressed : ', data),

                    onSuccess: ((data) => {
                        console.log('Success : ', data)
                        setFile(`${downloadUrl}/${data.UploadId}`)
                    }),
                    onAbort: (() => { console.log('Aborted') }),
                    onDelete: ((data) => {
                        console.log('Deleted :', data)
                        setFile('')
                    }),
                    onError: (s, d) => console.log('error:', s, d),
                }}
            />
        </>
    )
};
export default RowUploadExampleForm
```

## Dropzone Upload Component

```es6
import React, { useState } from 'react';
import { DropzoneUpload } from '@equalizer/synchron-lib';
import { IConnections } from '@equalizer/synchron-lib-types';


const DropzoneUploadExample = (props: IProps) => {
    const uploadUrl = `${APP_URL}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    const downloadUrl = `${APP_URL}/Download`
    const uploadUrl = `${APP_URL}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    const [fileURLList,
        // setFileURLList
    ] = useState<string[]>([]) // download url list

    return (
        <>
            DropzoneUploadExample without file
            <DropzoneUpload
                connection={{ url: uploadUrl, headers }}
                files={fileURLList}
                classes={{
                    // width: '40px',
                    // height: '40px',
                    errorStyles: {
                        // color: 'blue',
                        fontSize: '10px'
                    }
                }}
                text={{
                    DragboxText: 'Dropzone 1 Drag Here'
                }}
               // thumbnailSize={100}
                refreshOnFilesChange={true}
                inititalFiles={fileURLList || []}
                actions={{
                    View: (data) => console.log('View Pressed : ', data),
                    Download: (data) => console.log('Download Pressed : ', data),
                    onSuccess: ((data) => { console.log('onSuccess : ', data) }),
                    onChange: ((data) => { console.log('onChange : ', data) }),
                    onAbort: (() => { console.log('Aborted') }),
                    onDelete: ((data) => { console.log('Deleted :', data) }),
                    onError: (s, d) => console.log('error:', s, d),
                    onDirty: ((data) => { console.log('onDirty:', data) }),
                }}
            />
        </>
    )
};
export default DropzoneUploadExample

```

## Download Component

```es6
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { DownloadFile } from '@equalizer/synchron-lib';
import { IConnections } from '@equalizer/synchron-lib-types';

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
```


## Show Image or File Component

Recognozed non image file types : pdf, xls,xlsx,doc,docx,ppt and txt. System will show icon. 

```es6
import React from 'react';
import { ShowImage } from '@equalizer/synchron-lib';
import { IConnections } from '@equalizer/synchron-lib-types';

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
                onError={(status, data) => console.log(status, data)}
                onLoading={(value) => console.log('Loading:', value)}
                imageStatus={(value) => console.log('imageStatus:', value)}
                onClick={() => console.log('imageClicked:')}

                className="test"
                styles={{}}
            />
        </div>

    )
};
export default ShowImageExample
```