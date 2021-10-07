import React, { useState } from 'react';
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
    const uploadUrl = `${url}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    const downloadUrl = `${url}/Download`

    const [file, setFile] = useState('');

    return (
        <>
            RowUpload without file
            <RowUpload
                connection={{ url: uploadUrl, headers }}

                // files={[img]}
                files={[file]}




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
            <br />
            RowUpload with file
            <RowUpload
                connection={{ url: uploadUrl, headers }}

                // title="Test Title"
                files={[sampleImageURL]}
                // files={[]}


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
