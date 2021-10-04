import React from 'react';
import { IUploadFilesProps, IConnections } from './type';
import Dropzone from './skins/Dropzone';
import RowUpload from './skins/RowUpload';
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
        return (
            <RowUpload
                {...props}

            // onChange={(data) => console.log(data[0].name)}
            />

        )

    return (
        <Dropzone
            {...props}

            onChange={(data) => console.log(data[0].name)}
        />

    )
};


export default UploadComponentForm
