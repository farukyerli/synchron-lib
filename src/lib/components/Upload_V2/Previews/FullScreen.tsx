import React, { useState } from 'react';
import { IConnections, IFile, imageState, IRowTexts } from '../type';
import ShowImage from '../Utils/ShowImage';
import './FullScreen.scss'
import IconButton from '../Utils/Button';
import DownloadFile from '../Utils/DownloadFile';

interface IProps {
    connection: IConnections;
    file: IFile;
    onClose: () => void;
    image?: any;
    text?: IRowTexts;
}

export default (props: IProps) => {
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
                            // onClick={() => console.log('Clicked')}
                            setImage={(data: any) => setImage(data)}
                            imageStatus={(value) => value === imageState.Done && setShowDownloadButton(true)}
                            // setImage={(data: any) => setDownloadImage(data)}
                            // setType={(data) => console.log('Type :', data)}
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
                    <div onClick={() => setDownloadImage(image)}>
                        <IconButton
                            action={() => { }}
                            className="download-container fas fa-download "
                            title={props.text?.DownloadButton} position='right'
                            visible={showDownloadButton}
                        />
                    </div>
                </div>
            </div>
            {
                downloadImage && <DownloadFile
                    headers={props.connection.headers}
                    url={downloadImage}
                    // setLoading={(value) => value === false && setDownloadImage(null)}
                    filename={props.file.name || `zz-downloadfile`}
                // ext={extention}
                />
            }

        </>
    )

};
