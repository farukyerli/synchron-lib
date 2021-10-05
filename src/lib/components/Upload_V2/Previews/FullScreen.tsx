import React, { useState, useEffect } from 'react';
import { IConnections, IFile, IRowTexts } from '../type';
import { truckIcon } from '../images';
import ShowImage from '../Utils/ShowImage';
import './FullScreen.scss'
import IconButton from '../Utils/Button';

interface IProps {
    connection: IConnections;
    file: IFile;
    onClose: () => void;
    image?: any;
    text?: IRowTexts;
}

export default (props: IProps) => {
    // console.log({ props });

    const [image, setImage] = useState(truckIcon);
    const [abort, setAbort] = useState(false);

    // const [extImage, setExtImage] = useState(false);

    // const getImage = async () => {
    //     const tmpImage = await downloader({
    //         file: props.file.url,
    //         connection: props.connection,
    //         type: props.file.type,
    //     });
    //     console.log(tmpImage);
    //     // setImage(tmpImage || truckIcon);
    // };

    // useEffect(() => {
    //     if (!isImage(props.file.type)) {
    //         setExtImage(true);
    //         getImage();
    //         // console.log('Full Screen', props.file.data.data);
    //     } else {
    //         props.image ? setImage(props.image) : image === truckIcon && getImage();
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // const downloadImage = async () => {
    //     const link = document.createElement('a');
    //     // @ts-ignore
    //     link.href = image;
    //     link.setAttribute('download', props.file.name);
    //     document.body.appendChild(link);
    //     link.click();
    // };

    /*
    const startDownload = async () => {
        const result: any = await axios.get(image);
        if (result && result.status === 200) {
            // const data = new Blob([result.data], { type: `application/${props.fileType || 'pdf'}` });
            const data = new Blob([result.data], { type: `image/${props.fileType || 'pdf'}` });
            const ext = props.fileType || data.type.split('/')[1];
            const docURL = window.URL.createObjectURL(data);
            const tempLink = document.createElement('a');
            tempLink.href = docURL;
            tempLink.target = '_blank';
            tempLink.rel = 'noopener noreferrer';
            tempLink.setAttribute('download', `zz-file-download.${ext}`);
            tempLink.click();
        }
    };
    */

    // useEffect(() => {
    //     if (extImage) {
    //         const pdfWindow = window.open();
    //         // @ts-ignore
    //         pdfWindow && (pdfWindow.location.href = image);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [image]);
    return (
        <>
            <div className="upload-component-full-screen-frame-cover  full-screen-preview" onClick={() => props.onClose()}>
                <div className="large-cover">
                    <IconButton
                        action={() => {
                            setAbort(true);
                            props.onClose();
                        }}
                        className="fas fa-times remove-icon"
                        title={props.text?.CloseButton || 'Close'} position='left' />

                    <IconButton
                        action={() => window.open(props.image)}
                        className="download-container fas fa-download "
                        title={props.text?.DownloadButton} position='right' />

                    <div className="large">
                        <ShowImage
                            connection={props.connection}
                            file={props.file}
                            // onClick={() => console.log('Clicked')}
                            setImage={(data: any) => setImage(data)}
                            // setType={(data) => console.log('Type :', data)}
                            isAborted={abort}
                        />
                    </div>

                </div>
            </div>
            <DownloadFile
                headers={headers}
                url={`${downloadURL}/${props.imageId}`}
                setLoading={props.setLoading}
                filename={props.filename || `zz-downloadfile`}
            />
        </>
    )

};
