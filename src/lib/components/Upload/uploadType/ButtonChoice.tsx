import React, { useRef } from 'react';
import { IUploadFilesProps } from '../type';

interface IProps extends IUploadFilesProps {
    disabled?: boolean;
    onChange: (files: any) => void;

}

export default (props: IProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const openFileDialog = () => {
        if (props.disabled) return;
        fileInputRef.current?.click();
    };

    const onFilesAdded = (evt: any) => {
        if (props.disabled) return;
        const files: any[] = evt.target.files;
        const array = fileListToArray(files || []);
        props.onChange(array);
    };

    const fileListToArray = (list: any) => {
        const array: any[] = [];
        Object.keys(list).map((key) => {
            array.push(list[key]);
            return null;
        });
        return array;
    };

    return (
        <div className="row">
            <div className="col">
                <div className="upload-area version-1">
                    <div className="title">{props.upLoadText || 'Please choose file ..'}</div>
                    <div className="actions">
                        <button onClick={openFileDialog}>{props.buttonTitle || 'BROWSE'}</button>
                    </div>
                </div>
                <input
                    ref={fileInputRef}
                    // className="FileInput"
                    style={{ display: 'none' }}
                    type="file"
                    multiple
                    onChange={onFilesAdded}
                />
            </div>
        </div>
    );
};
