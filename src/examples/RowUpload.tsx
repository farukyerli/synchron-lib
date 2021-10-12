import React, { useState } from 'react';
import type { IConnections } from '../lib/Upload/types';
import { RowUpload } from '../lib';
import { Button } from '@material-ui/core';
import './custom.scss'
// import { RowUpload } from '@equalizer/synchron-lib';
// import { IConnections } from '@equalizer/synchron-lib-types';

interface IProps {
    connection: IConnections;
    sampleImageURL: string;
}

const RowUploadExampleForm = (props: IProps) => {
    const { connection: { url, headers } } = props;
    const uploadUrl = `${url}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    const downloadUrl = `${url}/Download`

    const [file, setFile] = useState('');

    const MyButton = (
        <>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </>)
    return (
        <div className='row-upload-example-form'>
            <RowUpload
                connection={{ url: uploadUrl, headers }}

                // title="Test Title"
                files={[file]}
                uploadPreview='Linear'
                // files={[]}
                classes={{
                    Column1: 'mycol1',
                    Column5: 'mycol5'
                }}

                rowItems={{
                    // Column1: <></>,
                    // Column2: <>Deneme</>,
                    // Column3: <>Deneme</>,
                    // Column4: MyButton,
                    // Column6: 'mn lnlnlnl'
                }}
                text={{
                    DeleteButton: "Sil",
                    DownloadButton: "Indir",
                    UploadButton: "Yukle",
                    EditButton: "Degistir",
                    ViewButton: "Goster",
                    AbortButton: "Durdur",
                    ErrorDownload: 'INDIRME HATASI',
                    ErrorUpload: 'YUKLEME HATASI'
                }}
                tools={{
                    PieChartLoading: {
                        backgroundColor: '#030303'
                    },
                    LinearLoading: {
                        ratio: 30,
                        foregroundColor: 'red',
                        uploadingText: 'Upload'
                    }
                }}
                actions={{
                    View: (data) => console.log('View Pressed : ', data),
                    Delete: (data) => console.log('Delete Pressed : ', data),
                    Edit: (data) => console.log('Edit Pressed : ', data),
                    Download: (data) => console.log('Download Pressed : ', data),
                    Upload: (data) => console.log('Upload Pressed : ', data),

                    onUploading: ((data) => { console.log('onUploading : ', data) }),
                    onError: (s, d) => console.log('error:', s, d),
                    // onRatio: (s) => console.log('onRatio:', s),
                    onSuccess: ((data) => {
                        console.log('Success : ', data)
                        setFile(`${downloadUrl}/${data.UploadId}`)
                    }),
                    onAbort: (() => { console.log('Aborted') }),
                    onDelete: ((data) => {
                        console.log('Deleted :', data)
                        setFile('')
                    }),
                }}
            />
        </div>
    )
};
export default RowUploadExampleForm
