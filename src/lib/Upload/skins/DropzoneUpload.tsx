import React from 'react';
import { IConnections, IDropzoneUploadProps, IUploadFileType } from '../types';
import '../../_styles/Dropzone.scss'
import DropzoneCanvas from '../Utils/DropzoneCanvas';


// import uploadIcon from '../images/fa-upload.svg';

interface IProps extends IDropzoneUploadProps {
    connection: IConnections;
    disabled?: boolean;
    upLoadText?: string;
    onChange?: (files: IUploadFileType[]) => void;
    classOnFocus?: string;
    classOnBlur?: string;
    buttonVisible?: boolean;
    buttonTitle?: string;
    dragBoxText?: string;
}

const DropZoneForm = (props: IProps) => {



    return (
        <div >
            <DropzoneCanvas
                onChange={(data) => { console.log('Selected Files:', data) }}
            />
        </div>

    )
};
export default DropZoneForm
