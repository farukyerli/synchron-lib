import React, { useState, useRef } from 'react';

interface IProps {
    disabled?: boolean;
    upLoadText?: string;
    onChange: (files: any) => void;
    classOnFocus?: string;
    classOnBlur?: string;
    buttonVisible?: boolean;
    buttonTitle?: string;
    dragBoxText?: string;
}

export default (props: IProps) => {
    const [hightlight, setHighlight] = useState(false)
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

    const onDragOver = (evt: any) => {
        evt.preventDefault();
        if (props.disabled) return;
        setHighlight(true);
    };

    const onDragLeave = () => {
        setHighlight(false);
    };

    const onDrop = (evt: any) => {
        evt.preventDefault();
        if (props.disabled) return;
        const files = evt.dataTransfer.files;
        const array = fileListToArray(files);
        props.onChange(array);
        setHighlight(false);
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
                    <div className="upload-area-modal">
                        <div className={`upload-box ${hightlight && 'OnDragOver'}`}
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                            onClick={openFileDialog}
                            onMouseOver={() => setHighlight(true)}
                            onMouseOut={() => setHighlight(false)}
                        >
                            <i className="fas fa-upload"></i>
                            <div className="upload-text">{props.dragBoxText || 'Drag here to upload'}</div>
                        </div>
                        {props.buttonVisible && <>
                            <div className="upload-division">
                                <div className="upload-division-line"></div>
                                <div className="upload-division-text">OR</div>
                                <div className="upload-division-line"></div>
                            </div>
                            <div className="actions">
                                <button onClick={openFileDialog}>{props.buttonTitle || 'BROWSE COMPUTER'}</button>

                            </div>
                        </>}
                        <input
                            ref={fileInputRef}
                            className="FileInput"
                            type="file"
                            multiple
                            onChange={onFilesAdded}

                        />
                    </div>
                </div>
            </div>
    )
}