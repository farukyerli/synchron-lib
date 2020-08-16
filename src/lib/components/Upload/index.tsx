import React, { useState, useEffect } from 'react';
import Dropzone from './uploadType/Dropzone';
// import ButtonChoice from './uploadType/ButtonChoice';
import UploadItem from './UploadItem';
import { IUploadFilesProps, IConnections } from './type';

interface IProps extends IUploadFilesProps {
    connection: IConnections;
}

export const UploadFiles = (props: IProps) => {
    const [uploadFiles, setUploadFiles] = useState<any[]>([]);
    const [downloadFiles, setDownloadFiles] = useState<any[]>(props.files || []);
    const [dropzoneVisible, setDropzoneVisible] = useState(props.dropzone || false);

    const onDropZoneChanged = (value: any) => {
        props.multiUpload ? setUploadFiles((prevState) => [...prevState, ...value]) : setUploadFiles([value[0]]);
    };

    useEffect(() => {
        console.log('Upload Files Added : ', uploadFiles);
    }, [uploadFiles]);

    useEffect(() => {
        downloadFiles.map((item) => {
            onDropZoneChanged([item]);
            return null;
        })
        // eslint-disable-next-line
    }, [downloadFiles]);

    const noneVoid = () => { };

    const onSuccess = (data: any) => {
        data.PublicUrl && setDownloadFiles(data.PublicUrl)
        if (props.multiUpload) {
            props.onSuccess && props.onSuccess(data);
        } else {
            props.onSuccess && props.onSuccess(data);
            setDropzoneVisible(false);
        }
    };

    const onChange = (key: number, value: string) => {
        // console.log(key, value)
        !props.multiUpload && setDropzoneVisible(false);
    };

    const onDelete = (filename: string) => {
        const myArray = [...uploadFiles];
        const ndx1 = myArray.findIndex((item) => item.name === filename);
        ndx1 !== -1 && myArray.splice(ndx1, 1);
        const ndx2 = myArray.findIndex((item) => item === filename);
        ndx2 !== -1 && myArray.splice(ndx2, 1);

        props.onDelete && props.onDelete(filename);
        setUploadFiles(myArray);
    };

    useEffect(() => {
        // console.log('Gelen dosyalarin isimleri', props.files)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {dropzoneVisible && <Dropzone {...props} onChange={onDropZoneChanged} buttonVisible={props.dropzoneButton} />}
            {/* {!dropzoneVisible && uploadFiles.length === 0 && <ButtonChoice {...props} onChange={onDropZoneChanged} />} */}
            {uploadFiles.length > 0 &&
                uploadFiles.map((item, ndx: number) => {
                    return (
                        <UploadItem
                            {...props}
                            file={item}
                            key={ndx}
                            headers={props.connection.headers}
                            url={props.connection.url}
                            progressBarSteps={props.progressBarSteps || 10}
                            progressBarType={props.progressBarType || 'Horizontal-1'}
                            onAbort={props.onAbort || noneVoid}
                            onError={props.onError || noneVoid}
                            onDelete={onDelete}
                            onSuccess={onSuccess}
                            onChange={onChange}
                            connection={props.connection}
                        />
                    );
                })}

        </>
    );
};
