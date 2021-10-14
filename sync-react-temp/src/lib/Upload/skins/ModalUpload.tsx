import React, { } from 'react';
import type { IConnections, IModalUploadProps, } from '../types';
import '../../_styles/ModalUpload.scss'
// import { PieLoading, UploadItem, DownloadFile, IconButton, SelectUploadFiles } from '../Utils';
// import { FullScreen } from '../Previews'
// import { LoadingIcon } from '../../_images'

interface IProps extends IModalUploadProps {
    connection: IConnections;
}


const ModalUploadForm = (props: IProps) => {


    return (
        <div className="synchron-upload-modal-container">

        </div>

    )
};
export default ModalUploadForm
