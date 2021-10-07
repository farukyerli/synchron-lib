import React from 'react';
import { RowUpload } from '../lib';
import { IConnections } from '../lib/Upload/types';
// import { RowUpload } from 'synchron-lib';
// import { RowUpload } from '../dist';

interface IProps {
    connection: IConnections;
    sampleImageURL?: string;
}

const RowUploadExampleForm = (props: IProps) => {
    const { connection: { url, headers }, sampleImageURL } = props;
    return (
        <>
            RowUpload without file
            <RowUpload
                connection={{ url: url, headers }}

                // files={[img]}
                files={[]}
                previewType="FullScreen"


                skintype="row"
                rowItems={{
                    // Column3: <>Deneme</>,
                    Column4: '4.',
                    Column6: 'llnlnlknl'
                }}
                text={{
                    DeleteButton: "Sil",
                    DownloadButton: "Indir",
                    UploadButton: "Yukle",
                    EditButton: "Degistir",
                    ViewButton: "Goster",
                    AbortButton: "Durdur",

                }}
                tools={{
                    PieChartLoading: {
                        backgroundColor: '#030303',


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
            <br />
            RowUpload with file
            <RowUpload
                connection={{ url: url, headers }}

                // title="Test Title"
                upLoadText="Upload Document"
                files={[sampleImageURL]}
                // files={[]}
                previewType="FullScreen"


                skintype="row"
                rowItems={{
                    Column2: <>Deneme</>,
                    Column3: <>Deneme</>,
                    // Column4: '4.',
                    Column6: 'mn lnlnlnl'
                }}
                text={{
                    DeleteButton: "Sil",
                    DownloadButton: "Indir",
                    UploadButton: "Yukle",
                    EditButton: "Degistir",
                    ViewButton: "Goster",
                    AbortButton: "Durdur"
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
        </>

    )
};
export default RowUploadExampleForm
