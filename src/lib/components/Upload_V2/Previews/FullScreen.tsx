import React, { useState, useEffect } from 'react';
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
    const [extention, setExtention] = useState(undefined);
    const [abort, setAbort] = useState(false);
    const [downloadImage, setDownloadImage] = useState<any>(null)
    const [showDownloadButton, setShowDownloadButton] = useState(false);

    useEffect(() => {
        console.log('image:', image)
    }, [image])
    useEffect(() => {
        console.log('extention:', extention)
    }, [extention])
    useEffect(() => {
        console.log('downloadImage:', downloadImage)
    }, [downloadImage])

    useEffect(() => {
        // extention && image && setDownloadImage(image)
    }, [extention, image])
    return (
        <>
            <div className="upload-component-full-screen-frame-cover  full-screen-preview" >
                <div className="large-cover">
                    <IconButton
                        action={() => {
                            setAbort(true);
                            props.onClose();
                        }}
                        className="fas fa-times remove-icon"
                        title={props.text?.CloseButton || 'Close'} position='left' />
                    <div onClick={() => {
                        extention && image && setDownloadImage(image)

                    }}>
                        <IconButton
                            action={() => { }}
                            className="download-container fas fa-download "
                            title={props.text?.DownloadButton} position='right'
                            visible={showDownloadButton}
                        />
                    </div>

                    <div className="large">
                        <ShowImage
                            connection={props.connection}
                            file={props.file}
                            // onClick={() => console.log('Clicked')}
                            setImage={(data: any) => setImage(data)}
                            imageStatus={(value) => value === imageState.Done && setShowDownloadButton(true)}
                            // setImage={(data: any) => setDownloadImage(data)}
                            // setType={(data) => console.log('Type :', data)}
                            setType={(data: any) => setExtention(data)}
                            isAborted={abort}
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
                    ext={extention}
                />
            }

        </>
    )

};
