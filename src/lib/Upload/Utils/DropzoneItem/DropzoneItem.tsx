import React, { useEffect, useState } from 'react';
import '../../../_styles/DropzoneCanvas.scss'
import { FullScreen } from '../../Previews';
import { IConnections, IDropzoneClasses, IDropzoneTexts, IDropzoneUploadActions, IFile, imageState } from '../../types';
import ShowImage from '../ShowImage';
import UploadItem from '../UploadItem';

interface IProps {
    uploadFile: any;
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
    height?: string;

}

const DropzoneItemForm = (props: IProps) => {
    const { showDetails, connection, text, actions } = props;
    const [image, setImage] = useState('');
    const [abort, setAbort] = useState(false);
    const [status, setStatus] = useState<number>(imageState.None)
    const [showPreview, setShowPreview] = useState<string | null>(null)
    // const [uploading, setUploading] = useState(false);
    // const [uploadedRatio, setUploadedRatio] = useState<number>(0);
    const [uploadFile, setUploadFile] = useState<IFile | null>(null)

    // useEffect(() => {
    //     uploadFile && console.log('uploadFile:', uploadFile)
    // }, [uploadFile])

    useEffect(() => {
        // console.log('props.uploadFile:', props.uploadFile)
        props.uploadFile && setUploadFile({
            name: props.uploadFile.name,
            rawFileData: props.uploadFile
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.uploadFile])


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
                        onClick={() => setShowPreview(image)}
                    />
                    {status === imageState.Done && actions?.onDelete &&
                        <div className="delete-button-container">
                            <div className="delete-button"
                                onClick={(e) => actions?.onDelete && actions.onDelete(props.file.name)}
                            ><i className="fas fa-times" /></div>
                        </div>}
                </div>
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
                // onUploading={(value: boolean) => setUploading(value)}
                onAbort={() => actions?.onAbort && actions.onAbort(props.file.name)}
                onError={actions?.onError}
                onSuccess={actions?.onSuccess}

            />
        </>

    )
};
export default DropzoneItemForm
