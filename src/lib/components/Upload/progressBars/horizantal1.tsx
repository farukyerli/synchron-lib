import React from 'react';
import { IUploadFilesProps } from '../type';

interface IProps extends IUploadFilesProps {
    ratio: number;
    isUploading: boolean;
    onAbort: () => void;
    onDelete: () => void;
    onReload: () => void;
    file: any;
    aborted: boolean;
    errorMessage: string;
    onPreview: () => void;
}


const getShortFileName = (data: any, value?: number) => {
    let returnValue = data;
    const tmpValue = value || 20;
    if (data.substring(0, 8) === 'https://')
        returnValue = data.substring(8, data.length)
    if (data.substring(0, 7) === 'http://')
        returnValue = data.substring(7, data.length)

    returnValue = `${returnValue.substring(0, tmpValue - 10)}${'....'}${returnValue.substring(data.length - 20, data.length)}`

    return returnValue;
}


export default (props: IProps) => {
    const { ratio, onAbort, isUploading, onDelete, aborted, onReload, errorMessage, file } = props;

    return (
        <div className="upload-area version-1">
            <div className="title">{props.title ? props.title : file.name || getShortFileName(file, 40)}</div>
            {isUploading ? (
                <>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${(ratio * 100).toFixed(0)}%` }}
                        ></div>
                    </div>
                    <div className="status">Uploading {`${(ratio * 100).toFixed(0)}%  .`}</div>
                    <div className="actions">
                        <i className="far fa-stop-circle" onClick={() => onAbort()}></i>
                    </div>
                </>
            ) : (
                    <div className="actions">
                        {aborted ? (
                            <>
                                <i className="fas fa-exclamation-circle" style={{ color: 'red' }}>
                                    {errorMessage}
                                </i>
                                <i className="fas fa-redo" onClick={onReload}></i>
                            </>
                        ) : (
                                <>
                                    <i className="fas fa-eye" onClick={props.onPreview}></i>
                                    <i className="fas fa-trash" onClick={() => onDelete()}></i>
                                </>
                            )}
                    </div>
                )}
        </div>
    );
};
