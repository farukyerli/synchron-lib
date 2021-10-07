import React, { useEffect, useState } from 'react';
import { IConnections, IFile, IUploadFilesProps, } from '../types';
import '../../_styles/ModalUpload.scss'
// import { PieLoading, UploadItem, DownloadFile, IconButton, SelectUploadFiles } from '../Utils';
// import { FullScreen } from '../Previews'
// import { LoadingIcon } from '../../_images'

interface IProps extends IUploadFilesProps {
    connection: IConnections;
}


const ModalUploadForm = (props: IProps) => {


    return (
        <div className="synchron-upload-modal-container">

        </div>

    )
};
export default ModalUploadForm
