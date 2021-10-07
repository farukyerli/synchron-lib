import React from 'react';
import { DropzoneUpload } from '../lib';
import { IConnections } from '../lib/Upload/types';
// import { RowUpload } from 'synchron-lib';
// import { RowUpload } from '../dist';

interface IProps {
    connection: IConnections;
    sampleImageURL?: string;
}

const DropzoneUploadExample = (props: IProps) => {
    const { connection: { url, headers }, sampleImageURL } = props;
    // const uploadUrl = `${url}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    // const downloadUrl = `${url}/Download`

    // const [file, setFile] = useState('');

    return (
        <>
            DropzoneUploadExample without file
            <DropzoneUpload
                connection={{ url: url, headers }}
                files={[]}
                // files={[sampleImageURL, sampleImageURL, sampleImageURL, sampleImageURL, sampleImageURL]}

                text={{
                    DeleteButton: "Sil",
                    DownloadButton: "Indir",
                    UploadButton: "Yukle",
                    EditButton: "Degistir",
                    ViewButton: "Goster",
                    AbortButton: "Durdur",
                    DragboxText: 'Dropzone 1 Drag Here'

                }}
                classes={{
                    // minWidth: '80px',
                    // minHeight: '0px',
                    // width: '30px',
                    // height: '60px'
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
            <br />
            DropzoneUploadExample without file
            <DropzoneUpload
                connection={{ url: url, headers }}
                // files={[]}
                files={[sampleImageURL, sampleImageURL, sampleImageURL, sampleImageURL, sampleImageURL]}

                text={{
                    DeleteButton: "Sil",
                    DownloadButton: "Indir",
                    UploadButton: "Yukle",
                    EditButton: "Degistir",
                    ViewButton: "Goster",
                    AbortButton: "Durdur",
                    DragboxText: 'Dropzone 1 Drag Here'

                }}
                classes={{
                    minWidth: '80px',
                    minHeight: '80px',
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
            <br />
            DropzoneUploadExample with 1 file
            <DropzoneUpload
                connection={{ url: url, headers }}
                files={[sampleImageURL]}

                text={{
                    DeleteButton: "Sil",
                    DownloadButton: "Indir",
                    UploadButton: "Yukle",
                    EditButton: "Degistir",
                    ViewButton: "Goster",
                    AbortButton: "Durdur",
                    DragboxText: 'Dropzone 2 Drag Here'


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

            <br />
            DropzoneUploadExample with 2 file
            <DropzoneUpload
                connection={{ url: url, headers }}
                files={[sampleImageURL, sampleImageURL]}

                text={{
                    DeleteButton: "Sil",
                    DownloadButton: "Indir",
                    UploadButton: "Yukle",
                    EditButton: "Degistir",
                    ViewButton: "Goster",
                    AbortButton: "Durdur",
                    DragboxText: 'Dropzone 3 Drag Here'

                }}
                classes={{
                    // minWidth: '80px',
                    // minHeight: '0px',
                    // width: '30px',
                    // height: '40px'
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
        </>

    )
};
export default DropzoneUploadExample
