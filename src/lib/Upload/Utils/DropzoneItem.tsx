import React, { useEffect, useState } from 'react';
import '../../_styles/DropzoneCanvas.scss'
import { FullScreen } from '../Previews';
import { IConnections, IDropzoneClasses, IDropzoneTexts, IDropzoneUploadActions, IFile, imageState } from '../types';
import ShowImage from './ShowImage';
import UploadItem from './UploadItem';

interface IProps {
    uploadFile: any;
    uploadParameters?: string[];
    uploadMethod?: 'POST' | 'PUT';
    connection: IConnections;
    file: {
        name: string;
        url: string;
    };
    image?: any;
    text?: IDropzoneTexts;
    actions?: IDropzoneUploadActions;
    showDetails?: boolean;
    classes?: IDropzoneClasses;
    thumbnailSize?: number;
    readOnly?: boolean;

}

const DropzoneItemForm = (props: IProps) => {
    const { showDetails, connection, text, actions, classes, uploadMethod = 'POST', readOnly = false } = props;
    const [image, setImage] = useState('');
    const [abort, setAbort] = useState(false);
    const [status, setStatus] = useState<number>(imageState.None);
    const [showPreview, setShowPreview] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    // const [uploadedRatio, setUploadedRatio] = useState<number>(0);
    const [uploadFile, setUploadFile] = useState<IFile | null>(null);
    const [isProblemExists, setIsProblemExists] = useState(false);


    useEffect(() => {
        props.uploadFile && setUploadFile({
            name: props.uploadFile.name,
            rawFileData: props.uploadFile
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.uploadFile])


    return (
        <>
            <div className="synchron-dropzone-upload-item-container"
            >
                <div className="preview" >
                    <ShowImage
                        thumbnailSize={props.thumbnailSize}
                        connection={props.connection}
                        file={props.file}
                        onImage={(data: any) => setImage(data)}
                        imageStatus={(value) => setStatus(value)}
                        isAborted={abort}
                        size='small'
                        onClick={() => setShowPreview(image)}
                        isProblemExists={isProblemExists}
                        isUploading={uploading}
                        classes={classes}
                        readOnly={readOnly}

                    />

                </div>
                {(status === imageState.Done || isProblemExists) && !readOnly && !uploading &&
                    <div className="delete-button-container">
                        <div className="delete-button"
                            onClick={(e) => actions?.onDelete && actions.onDelete(props.file.name)}
                        ><i className="fas fa-times" /></div>
                    </div>}
                {showDetails && <div className="bottom-bar">

                </div>
                }
            </div>
            {showPreview && <FullScreen
                onClose={() => setShowPreview(null)}
                image={showPreview}
                connection={connection}
                file={props.file}
                text={text}
                actions={actions}
            />}

            <UploadItem
                connection={connection}
                file={uploadFile}
                abort={abort}
                onEndTask={() => {
                    setUploadFile(null);
                    setAbort(false);
                }}
                // onRatio={(value: number) => setUploadedRatio(value)}
                onUploading={(value: boolean) => setUploading(value)}
                onAbort={() => actions?.onAbort && actions.onAbort(props.file.name)}
                onError={(state: number, data: any) => {
                    actions?.onError && actions.onError(state, data)
                    setIsProblemExists(true);
                }}
                onSuccess={actions?.onSuccess}
                uploadParameters={props.uploadParameters}
                uploadMethod={uploadMethod}

            />
        </>

    )
};
export default DropzoneItemForm
