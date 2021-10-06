import React from 'react';
import { IUploadFilesProps, IConnections } from './type';
import Dropzone from './skins/Dropzone';
import RowUpload from './skins/RowUpload';
import ModalUpload from './skins/ModalUpload';
import '../../styles/fontawesome/scss/fontawesome.scss';
import '../../styles/fontawesome/scss/light.scss';
import '../../styles/fontawesome/scss/regular.scss';
import '../../styles/fontawesome/scss/brands.scss';
import '../../styles/fontawesome/scss/solid.scss';
import '../../styles/fontawesome/scss/duotone.scss';

interface IProps extends IUploadFilesProps {
    connection: IConnections;
}

const UploadComponentForm = (props: IProps) => {
    const { skintype } = props;


    if (skintype === 'row')
        return <RowUpload {...props} />

    if (skintype === 'modal')
        return <ModalUpload {...props} />
    return <Dropzone {...props} />

};


export default UploadComponentForm
