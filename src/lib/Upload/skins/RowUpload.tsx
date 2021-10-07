import React, { useEffect, useState } from 'react';
import { IConnections, IFile, IUploadFilesProps, } from '../type';
import '../../_styles/RowUpload.scss'
import { PieLoading, UploadItem, DownloadFile, IconButton, SelectUploadFiles } from '../Utils';
import { FullScreen } from '../Previews'
import { LoadingIcon } from '../../_images'

interface IProps extends IUploadFilesProps {
    connection: IConnections;
}

const RowUploadForm = (props: IProps) => {
    const { classes, rowItems, actions, text, connection, files } = props;
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



    const DownloadSection = () => {
        if (downloading)
            return <LoadingIcon />

        return rowItems?.Column1 ||
            <IconButton
                action={() => {
                    actions?.Download && actions.Download(fileUrl);
                    setDownloadImage(fileUrl)
                }}
                className={`fas fa-download column1 ${classes?.Column1}`}
                title={text?.DownloadButton} />
    }

    const UploadSection = () => {
        if (uploading)
            return <PieLoading
                ratio={uploadedRatio}
            // ratio={0.7}
            />

        return rowItems?.Column1 ||
            <IconButton
                action={() => {
                    actions?.Upload && actions.Upload(fileUrl);
                    setShowUpload(!showUpload)
                }}
                className={`fas fa-upload column1 ${classes?.Column1}`}
                title={text?.UploadButton} />
    }

    return (
        <>
            <div className={`component-container ${classes?.componentContainer}`}>
                <section className={`${classes?.section}`}>
                    <div className="columns">{fileName ? DownloadSection() : UploadSection()}</div>
                    <div className="columns column2">{rowItems?.Column2 || 'Please define description of task '}</div>
                    {rowItems?.Column3 && <div className="columns">{rowItems?.Column3 || 'Free Usage Place 1'}</div>}
                    {rowItems?.Column4 && <div className="columns">{rowItems?.Column4 || 'Free Usage Place 2'}</div>}

                    <div className="columns column5">
                        {rowItems?.Column5 || (
                            <>
                                <IconButton
                                    action={() => {
                                        actions?.View && actions.View('')
                                        setShowPreview('1')
                                    }}
                                    className="fas fa-eye"
                                    title={text?.ViewButton}
                                    visible={actions?.View !== undefined && fileName !== ''}
                                />
                                <IconButton
                                    action={() => actions?.Edit && actions.Edit('')}
                                    className="fas fa-pencil-alt"
                                    title={text?.EditButton}
                                    visible={actions?.Edit !== undefined && fileName !== ''}
                                />
                                <IconButton
                                    action={() => {
                                        actions?.Delete && actions.Delete(fileName);
                                        actions?.onDelete && actions.onDelete(fileName)
                                    }}
                                    className="fas fa-trash"
                                    title={text?.DeleteButton}
                                    visible={actions?.Delete !== undefined && fileName !== ''}
                                />
                            </>
                        )}
                        {uploading && <IconButton
                            action={() => setAbort(true)}
                            className="fas fa-times abort"
                            title={text?.AbortButton} />
                        }
                    </div>
                    {rowItems?.Column6 && <div className="columns" >
                        {rowItems?.Column6 || 'Free Usage Place 3'}
                    </div>}
                </section>
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
            />}
            {
                downloadImage && <DownloadFile
                    file={{
                        url: fileUrl,
                        name: fileName || `zz-downloadfile`
                    }}
                    connection={props.connection}
                    setLoading={setDownloading}
                />
            }
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


export default RowUploadForm
