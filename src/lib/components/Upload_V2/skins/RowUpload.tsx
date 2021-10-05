import React, { useEffect, useState } from 'react';
import { IConnections, IUploadFilesProps, } from '../type';
import './styles/RowUpload.scss'
import Preview from '../Previews'
import IconButton from '../Utils/Button'
import DownloadFile from '../Utils/DownloadFile';
import { loadingIcon } from '../images'

interface IProps extends IUploadFilesProps {
    connection: IConnections;
}

const RowUploadForm = (props: IProps) => {
    const { classes, rowItems, actionButtons, text, connection, files } = props;
    const [showPreview, setShowPreview] = useState<string | null>(null)
    const [fileUrl, setFileUrl] = useState<string>('')
    const [fileName, setFileName] = useState<string>('')
    const [downloadImage, setDownloadImage] = useState<any>(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (files && files.length) {
            setFileUrl(props.files[0])
            setFileName(props.files[0])

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files])




    return (
        <>
            <div className={`component-container ${classes?.componentContainer}`}>
                <section className={`${classes?.section}`}>
                    <div className="columns">{loading
                        ? <img src={loadingIcon} alt={''} />
                        : rowItems?.Column1 ||
                        <IconButton
                            action={() => {
                                actionButtons?.Download && actionButtons.Download(fileUrl);
                                setDownloadImage(fileUrl)
                            }}
                            className={`fas fa-download column1 ${classes?.Column1}`}
                            title={text?.DownloadButton} />

                    }</div>
                    <div className="columns column2">{rowItems?.Column2 || 'Please define description of task '}</div>
                    {rowItems?.Column3 && <div className="columns">{rowItems?.Column3 || 'Free Usage Place 1'}</div>}
                    {rowItems?.Column4 && <div className="columns">{rowItems?.Column4 || 'Free Usage Place 2'}</div>}
                    {(actionButtons?.Delete || actionButtons?.Edit || actionButtons?.View) &&
                        <div className="columns column5">
                            {rowItems?.Column5 || (
                                <>
                                    <IconButton
                                        action={() => {
                                            actionButtons?.View && actionButtons.View('')
                                            setShowPreview('sss')
                                        }}
                                        className="fas fa-eye"
                                        title={text?.ViewButton} />
                                    <IconButton
                                        action={() => actionButtons?.Edit && actionButtons.Edit('')}
                                        className="fas fa-pencil-alt"
                                        title={text?.EditButton} />
                                    <IconButton
                                        action={() => actionButtons?.Delete && actionButtons.Delete('')}
                                        className="fas fa-trash"
                                        title={text?.DeleteButton} />
                                </>
                            )}
                        </div>}
                    {rowItems?.Column6 && <div className="columns" >
                        {rowItems?.Column6 || 'Free Usage Place 3'}
                    </div>}
                </section>
            </div>
            {showPreview && <Preview onClose={() => setShowPreview(null)} image={showPreview} connection={connection}
                file={{
                    name: fileName,
                    url: fileUrl,
                }}
                text={text}
            />}
            {
                downloadImage && <DownloadFile
                    headers={props.connection.headers}
                    url={fileUrl}
                    setLoading={setLoading}
                    filename={fileName || `zz-downloadfile`}
                />
            }
        </>

    )
};


export default RowUploadForm
