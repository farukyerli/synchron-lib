import React, { useRef } from 'react';

interface IProps {
    disabled?: boolean;
    upLoadText?: string;
    onChange: (files: any) => void;
    buttonTitle?: string;
}

export default (props: IProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const openFileDialog = () => {
        if (props.disabled) return;
        fileInputRef.current?.click();
    };

    const onFilesAdded = (evt: any) => {
        if (props.disabled) return;
        const files = evt.target.files;
        const array = fileListToArray(files);
        props.onChange(array);
    };

    const fileListToArray = (list: any) => {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

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
                    style={{ display: "none" }}
                    type="file"
                    multiple
                    onChange={onFilesAdded}

                />
            </div>
        </div>

    )
}