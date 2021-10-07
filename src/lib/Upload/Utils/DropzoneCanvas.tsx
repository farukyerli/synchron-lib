import React, { useState, useRef } from 'react';
import { IDropzoneTexts, IUploadFileType } from '../types';
import '../../_styles/DropzoneCanvas.scss'
import { UploadIcon } from '../../_images';


// import uploadIcon from '../images/fa-upload.svg';

interface IProps {
    disabled?: boolean;
    onChange?: (files: IUploadFileType[]) => void;
    classOnFocus?: string;
    classOnBlur?: string;
    buttonVisible?: boolean;
    text?: IDropzoneTexts;

}
const DropzoneCanvas = (props: IProps) => {
    const { text } = props;
    const [hightlight, setHighlight] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const openFileDialog = () => {
        if (props.disabled) return;
        fileInputRef.current?.click();
    };

    const onFilesAdded = (evt: any) => {
        if (props.disabled) return;
        const files = evt.target.files;
        const array = files;
        props.onChange && props.onChange(array);
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
        props.onChange && props.onChange(array);
        setHighlight(false);
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
        <>
            <div className="synchron-dropzone-upload-area-modal">
                <div
                    className={`upload-box ${hightlight && 'OnDragOver'}`}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onClick={openFileDialog}
                    onMouseOver={() => setHighlight(true)}
                    onMouseOut={() => setHighlight(false)}
                >
                    <div className="upload-icon"><UploadIcon /> </div>
                    <div className="upload-text">{text?.DragboxText || 'Drag here to upload'}</div>
                </div>

            </div>
            <input ref={fileInputRef} style={{ display: "none" }} className="FileInput" type="file" multiple onChange={onFilesAdded} />
        </>

    )
};
export default DropzoneCanvas
