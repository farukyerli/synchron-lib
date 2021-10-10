import React, { useState } from 'react';
import { IBaseUploadActions, IConnections, imageState, IRowTexts } from '../types';
import ShowImage from '../Utils/ShowImage';
import '../../_styles/FullScreen.scss'
import IconButton from '../Utils/Button';
import { DownloadFile } from '../Utils';
interface IProps {
    connection: IConnections;
    file: {
        name: string;
        url: string;
    };
    onClose: () => void;
    image?: any;
    text?: IRowTexts;
    actions?: IBaseUploadActions;
}

export default (props: IProps) => {
    const { actions } = props;
    // console.log({ props });

    const [image, setImage] = useState('');
    const [abort, setAbort] = useState(false);
    const [downloadImage, setDownloadImage] = useState<any>(null)
    const [showDownloadButton, setShowDownloadButton] = useState(false);

    return (
        <>
            <div className="upload-component-full-screen-frame-cover  full-screen-preview" >
                <div className="large-cover">

                    <div className="large" onClick={() => props.onClose()}>
                        <ShowImage
                            connection={props.connection}
                            file={props.file}
                            setImage={(data: any) => setImage(data)}
                            imageStatus={(value) => value === imageState.Done && setShowDownloadButton(true)}
                            isAborted={abort}
                        />
                    </div>
                    <IconButton
                        action={() => {
                            setAbort(true);
                            props.onClose();
                        }}
                        className="fas fa-times remove-icon"
                        title={props.text?.CloseButton || 'Close'} position='left' />
                    {actions?.Download && <div onClick={() => setDownloadImage(image)}>
                        <IconButton
                            action={() => { }}
                            className="download-container fas fa-download "
                            title={props.text?.DownloadButton} position='right'
                            visible={showDownloadButton}
                        />
                    </div>}
                </div>
            </div>
            <DownloadFile
                file={{
                    url: downloadImage,
                    name: props.file.name || `zz-downloadfile`
                }}
                connection={props.connection}
            />

        </>
    )

};
