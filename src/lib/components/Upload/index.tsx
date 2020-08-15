import React, { useState, useEffect } from 'react';
import Dropzone from './uploadType/Dropzone';
import ButtonChoice from './uploadType/ButtonChoice';
import UploadItem from './UploadItem';
import {IUploadFilesProps, IConnections } from './type';

interface IProps extends IUploadFilesProps {
    connection: IConnections;
}

export const UploadFiles = (props: IProps) => {
    const [files, setFiles] = useState<any[]>([]);
    const [dropzoneVisible, setDropzoneVisible] = useState(props.dropzone || false);

    const onDropZoneChanged = (value: any) => {
        props.multiUpload ? setFiles((prevState) => [...prevState, ...value]) : setFiles([value[0]]);
    };

    useEffect(() => {
        // console.log('Files Added : ', files);
    }, [files]);

    const noneVoid = () => { };

    const onSuccess = (data: any) => {
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
        const myArray = [...files];
        const ndx = myArray.findIndex((item) => item.name === filename);
        myArray.splice(ndx, 1);
        props.onDelete && props.onDelete(filename);
        setFiles(myArray);
    };

    return (
        <>
            {dropzoneVisible && <Dropzone onChange={onDropZoneChanged} buttonVisible={props.dropzoneButton} />}
            {!dropzoneVisible && files.length === 0 && <ButtonChoice onChange={onDropZoneChanged} />}
            {files.length > 0 &&
                files.map((item, ndx: number) => {
                    return (
                        <UploadItem
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
