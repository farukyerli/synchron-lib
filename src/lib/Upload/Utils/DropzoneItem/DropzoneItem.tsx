import React, { useEffect, useState } from 'react';
import '../../../_styles/DropzoneCanvas.scss'
import { FullScreen } from '../../Previews';
import { IConnections, IDropzoneClasses, IDropzoneTexts, IFile, imageState, IUploadActions } from '../../types';
import ShowImage from '../ShowImage';
import UploadItem from '../UploadItem';

interface IProps {
    connection: IConnections;
    file: {
        name: string;
        url: string;
    };
    image?: any;
    text?: IDropzoneTexts;
    actions?: IUploadActions;
    onDelete: (value: string) => void;
    details?: boolean;
    classes?: IDropzoneClasses;
    height?: string;


}

const DropzoneItemForm = (props: IProps) => {
    const { details, connection, text, actions, onDelete } = props;
    const [fileUrl, setFileUrl] = useState<string>('')
    const [fileName, setFileName] = useState<string>('')
    const [image, setImage] = useState('');
    const [abort, setAbort] = useState(false);
    const [status, setStatus] = useState<number>(imageState.None)
    const [showPreview, setShowPreview] = useState<string | null>(null)
    const [uploading, setUploading] = useState(false);
    const [uploadedRatio, setUploadedRatio] = useState<number>(0);
    const [file, setFile] = useState<IFile | null>(null)

    useEffect(() => {
        setFileUrl(props.file.url)
        setFileName(props.file.name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file])


    const customProps = props?.height ? {
        //  height: this.props?.height,
        width: props?.height
    } : {};
    return (
        <>
            <div className="synchron-dropzone-upload-item-container" style={{ ...customProps }} >
                <div className="preview" >
                    <ShowImage
                        height={props.height}
                        connection={props.connection}
                        file={props.file}
                        setImage={(data: any) => setImage(data)}
                        imageStatus={(value) => setStatus(value)}
                        isAborted={abort}
                        size='small'
                        onClick={() => {
                            // e.preventDefault();

                            setShowPreview(image)
                        }}
                    />
                    {status === imageState.Done &&
                        <div className="delete-button-container">
                            <div className="delete-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onDelete(fileName)
                                }}
                            ><i className="fas fa-times" /></div>
                        </div>}
                </div>
                {details && <div className="bottom-bar">

                </div>
                }
            </div>
            {showPreview && <FullScreen
                onClose={() => setShowPreview(null)}
                image={showPreview}
                connection={connection}
                file={{
                    name: fileName,
                    url: fileUrl,
                }}
                text={text}
                actions={actions}
            />}

            <UploadItem
                connection={connection}
                file={file}
                abort={abort}
                onEndTask={() => {
                    setFile(null);
                    setAbort(false);
                }}
                onRatio={(value: number) => setUploadedRatio(value)}
                onUploading={(value: boolean) => setUploading(value)}
                onAbort={() => actions?.onAbort && actions.onAbort(fileName)}
                onError={actions?.onError}
                onSuccess={actions?.onSuccess}

            />
        </>

    )
};
export default DropzoneItemForm
