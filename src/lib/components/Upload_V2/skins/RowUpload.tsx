import React, { useState } from 'react';
import { IConnections, IUploadFilesProps, } from '../type';
import { Tooltip } from '@material-ui/core';
import './styles/RowUpload.scss'
import Preview from '../Previews'


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
                        <Button
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
                                    <Button
                                        action={() => {
                                            actionButtons?.View && actionButtons.View('')
                                            setShowPreview('sss')
                                        }}
                                        className="fas fa-eye"
                                        title={text?.ViewButton} />
                                    <Button
                                        action={() => actionButtons?.Edit && actionButtons.Edit('')}
                                        className="fas fa-pencil-alt"
                                        title={text?.EditButton} />
                                    <Button
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
                }} />}
        </>

    )
};

interface IButton {
    action: () => void
    className: string;
    title?: string;
}

const Button = (props: IButton) => {
    const { action, className, title } = props;
    return <Tooltip title={title || ''}>
        <i className={`${className}`} onClick={action} />
    </Tooltip>
}

export default RowUploadForm
