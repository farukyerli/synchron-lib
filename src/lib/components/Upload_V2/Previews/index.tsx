import React from 'react';
import { IConnections, IFile, IRowTexts } from '../type';
import FullScreen from './FullScreen'

interface IProps {
    onClose: () => void;
    connection: IConnections;
    file: IFile;
    image?: any;
    text?: IRowTexts

}

const UploadPreviewForm = (props: IProps) => {
    return (
        <FullScreen
            {...props}

        />

    )
};
export default UploadPreviewForm
