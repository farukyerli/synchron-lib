import React, { useEffect, useState } from 'react';
import type { IConnections, IFile, IRowUploadProps, } from '../types';
import '../../_styles/RowUpload.scss'
import { PieLoading, UploadItem, DownloadFile, IconButton, SelectUploadFiles, LinearLoading } from '../Utils';
import { FullScreen } from '../Previews'
import { DeleteIcon, DownloadIcon, EditIcon, LoadingIcon, UploadIcon, ViewIcon, LoadingSpinners, ErrorIcon } from '../../_images'

interface IProps extends IRowUploadProps {
    connection: IConnections;
}

const RowUploadForm = (props: IProps) => {
    const { classes, rowItems, actions, text, connection, files, uploadMethod = 'POST', uploadPreview = 'Pie' } = props;
    const [showPreview, setShowPreview] = useState<string | null>(null)
    const [fileUrl, setFileUrl] = useState<string>('')
    const [fileName, setFileName] = useState<string>('')
    const [downloadImage, setDownloadImage] = useState<any>(null)
    const [showUpload, setShowUpload] = useState(false)
    const [downloading, setDownloading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [abort, setAbort] = useState(false);
    const [uploadedRatio, setUploadedRatio] = useState<number>(0);
    const [file, setFile] = useState<IFile | null>(null)


    useEffect(() => {
        if (files && files.length) {
            setFileUrl(props.files[0])
            setFileName(props.files[0])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files])

    useEffect(() => {
        actions?.onUploading && actions.onUploading(uploading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploading])



    const column1DownloadSection = () => {
        if (downloading)
            return <LoadingIcon />

        return rowItems?.Column1 ||
            <IconButton
                action={() => {
                    actions?.Download && actions.Download(fileUrl);
                    setDownloadImage(fileUrl)
                }}
                className={`column1 ${classes?.Column1}`}
                title={text?.DownloadButton}
                component={<DownloadIcon />}
            />
    }

    const column1UploadSection = () => {
        if (uploading && uploadPreview === 'Linear')
            return <LoadingSpinners />

        if (uploading && uploadPreview === 'Pie')
            return <PieLoading ratio={uploadedRatio} />

        return rowItems?.Column1 ||
            <IconButton
                action={() => {
                    actions?.Upload && actions.Upload(fileUrl);
                    setShowUpload(!showUpload)
                }}

                // className={`column1 ${classes?.Column1}`}
                title={text?.UploadButton}
                component={<UploadIcon />}
            />

    }

    const column2UploadSection = () => {
        if (uploading && uploadPreview === 'Linear')
            return <LinearLoading ratio={uploadedRatio}  {...props.tools?.LinearLoading} />

        return rowItems?.Column2 || 'Please define description of task '


    }

    return (
        <>
            <div className={`row-upload-component-container  ${classes?.componentContainer}`}>
                <section className={`${classes?.section}`}>
                    {(actions?.Download || actions?.Upload)
                        && < div className={`columns column1 ${classes?.Column1 || ''}`}>
                            {fileName ? column1DownloadSection() : column1UploadSection()}
                        </div>
                    }
                    <div className={`columns column2  ${classes?.Column2 || ''}`}> {column2UploadSection()}</div>
                    {rowItems?.Column3 && <div className={`columns column3  ${classes?.Column3 || ''}`}>{rowItems?.Column3}</div>}
                    {rowItems?.Column4 && <div className={`columns column4  ${classes?.Column4 || ''}`}>{rowItems?.Column4}</div>}

                    <div className={`columns column5  ${classes?.Column5 || ''}`}>
                        {rowItems?.Column5 || (
                            <>

                                <IconButton
                                    action={() => actions?.Edit && actions.Edit('')}
                                    title={text?.EditButton}
                                    visible={(actions?.Edit
                                        ? fileName !== ''
                                        : false)}
                                    component={<EditIcon />}
                                />
                                <IconButton
                                    action={() => {
                                        actions?.Delete && actions.Delete(fileName);
                                        actions?.onDelete && actions.onDelete(fileName)
                                    }}
                                    title={text?.DeleteButton}
                                    visible={(actions?.Delete
                                        ? fileName !== ''
                                        : false)}
                                    component={<DeleteIcon />}

                                />
                                <IconButton
                                    action={() => {
                                        actions?.View && actions.View('')
                                        setShowPreview('1')
                                    }}
                                    visible={(actions?.View
                                        ? fileName !== ''
                                        : false)}
                                    component={<ViewIcon />}
                                />
                            </>
                        )}
                        {uploading && <IconButton
                            action={() => setAbort(true)}
                            className="fas fa-times abort"
                            title={text?.AbortButton}
                            component={<ErrorIcon />}
                        />
                        }
                    </div>
                    {rowItems?.Column6 && <div className={`columns column6  ${classes?.Column6 || ''}`}>{rowItems?.Column6}</div>}

                </section>
            </div >
            {showPreview && <FullScreen
                {...props}
                onClose={() => setShowPreview(null)}
                image={showPreview}
                connection={connection}
                className={classes?.preview?.fullscreen}
                file={{
                    name: fileName,
                    url: fileUrl,
                }}
                text={text}
                actions={actions}
            />}
            <DownloadFile
                file={{
                    url: downloadImage,
                    name: fileName || `zz-downloadfile`
                }}
                connection={props.connection}
                onLoading={setDownloading}
            />

            <SelectUploadFiles
                onChange={(data) => setFile({ name: data[0].name, rawFileData: data[0] })}
                open={showUpload}
            />

            <UploadItem
                connection={connection}
                file={file}
                abort={abort}
                onEndTask={() => {
                    setFile(null);
                    setAbort(false);
                    setUploading(false)
                }}
                onRatio={(value: number) => {
                    setUploadedRatio(value)
                    actions?.onRatio && actions.onRatio(value)
                }}
                onUploading={(value: boolean) => file && setUploading(value)}
                onAbort={() => actions?.onAbort && actions.onAbort(fileName)}
                onError={actions?.onError}
                onSuccess={actions?.onSuccess}
                uploadMethod={uploadMethod}

            />

        </>

    )
};


export default RowUploadForm
