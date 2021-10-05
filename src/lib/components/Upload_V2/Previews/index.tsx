import React from 'react';
import { IConnections, IFile } from '../type';
import FullScreen from './FullScreen'

interface IProps {
    onClose: () => void;
    connection: IConnections;
    file: IFile;
    image?: any;

}

const UploadPreviewForm = (props: IProps) => {
    return (
        <FullScreen
            {...props}

        />

    )
};
export default UploadPreviewForm
