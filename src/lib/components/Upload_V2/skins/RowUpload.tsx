import React, { useState } from 'react';
import { IConnections, IUploadFilesProps, } from '../type';
import './styles/RowUpload.scss'
import Preview from '../Previews'
import IconButton from '../Utils/Button'

interface IProps extends IUploadFilesProps {
    connection: IConnections;
}

const RowUploadForm = (props: IProps) => {
    const { classes, rowItems, actionButtons, text, connection, files } = props;
    const [showPreview, setShowPreview] = useState<string | null>(null)




    return (
        <>
            <div className={`component-container ${classes?.componentContainer}`}>
                <section className={`${classes?.section}`}>
                    <div className="columns">{rowItems?.Column1 ||
                        <IconButton
                            action={() => actionButtons?.Download && actionButtons.Download('')}
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
                    name: files[0],
                    url: files[0],
                }}
                text={text}
            />}
        </>

    )
};


export default RowUploadForm
