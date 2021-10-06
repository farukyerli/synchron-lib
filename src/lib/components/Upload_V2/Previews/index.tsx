import React from 'react';
import { IConnections, IRowTexts } from '../type';
import FullScreen from './FullScreen'

interface IProps {
    onClose: () => void;
    connection: IConnections;
    file: {
        name: string;
        url: string;
    };
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
