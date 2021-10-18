import React, { } from 'react';
import { ModalUpload } from '../lib';
import type { IConnections } from '../lib/Upload/types';
// import { RowUpload } from 'synchron-lib';
// import { RowUpload } from '../dist';

interface IProps {
    connection: IConnections;
    sampleImageURL?: string;
}

const ModalUploadExample = (props: IProps) => {
    const { connection: { url, headers } } = props;
    // const uploadUrl = `${url}/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642`
    // const downloadUrl = `${url}/Download`

    // const [file, setFile] = useState('');

    return (
        <>
            Modal Upload without file
            <ModalUpload
                connection={{ url: url, headers }}

                // files={[img]}
                files={[]}

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
        </>

    )
};
export default ModalUploadExample
