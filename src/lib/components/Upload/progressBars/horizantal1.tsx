import React from 'react';
interface IProps {
    ratio: number;
    isUploading: boolean;
    onAbort: () => void;
    onDelete: () => void;
    onReload: () => void;
    file: any;
    aborted: boolean;
}

export default ({ ratio, onAbort, isUploading, file, onDelete, aborted, onReload }: IProps) => {
    return (
        <div className="upload-area version-1">
            <div className="title">{file.name}</div>
            {isUploading ? (<>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: `${(ratio * 100).toFixed(0)}%` }}></div>

                </div>
                <div className="status">Uploading {`${(ratio * 100).toFixed(0)}%  .`}
                </div>
                <div className="actions">
                    <i className="far fa-stop-circle" onClick={() => onAbort()}></i>
                </div>

            </>) :
                (<div className="actions">
                    {aborted
                        ? <>
                            <i className="fas fa-exclamation-circle" style={{ color: "red" }}>ABORTED</i>
                            <i className="fas fa-redo" onClick={onReload}></i>
                        </>
                        : <>
                            <i className="fas fa-eye"></i>
                            <i className="fas fa-trash" onClick={() => onDelete()}></i>
                        </>}
                </div>
                )}
        </div>

    )
}