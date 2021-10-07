Synchron React Component Packages

## Upload component

```es6

import React from 'react';
import { RowUpload } from 'synchron-lib';

import './_assests/fontawesome/scss/fontawesome.scss';
import './_assests/fontawesome/scss/solid.scss';

interface IProps {

}

const NewForm = (props: IProps) => {
    return (
        <RowUpload
                    connection={{ url: APP_URL, headers }}
                    files={[]}
                    previewType="FullScreen"
                    skintype="row"
                    rowItems={{
                        // Column3: <>Deneme</>,
                        // Column4: '4.',
                        // Column6: ''
                    }}
                    text={{
                        DeleteButton: "Delete",
                        DownloadButton: "Download",
                        UploadButton: "Upload",
                        EditButton: "Edit",
                        ViewButton: "View",
                        AbortButton: "Cancel"
                    }}
                    tools={{
                        PieChartLoading: {
                            backgroundColor: '#030303'
                        }
                    }}
                    actions={{
                        View: (data) => console.log('View Pressed : ', data),
                        Delete: (data) => console.log('Delete Pressed : ', data),
                        Edit: (data) => console.log('Edit Pressed : ', data),
                        Download: (data) => console.log('Download Pressed : ', data),
                        Upload: (data) => console.log('Upload Pressed : ', data),

                        onSuccess: ((data) => { console.log('Success : ', data) }),
                        onAbort: (() => { console.log('Aborted') }),
                        onDelete: ((data) => { console.log('Deleted :', data) }),
                        onError: (s, d) => console.log('error:', s, d),
                    }}
                /> 
        
    )
};
export default NewForm



```


