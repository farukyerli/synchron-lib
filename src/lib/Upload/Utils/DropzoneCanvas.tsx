import React, { useState, useRef, useEffect } from 'react';
import { IDropzoneClasses, IDropzoneTexts, IUploadFileType } from '../types';
import '../../_styles/DropzoneCanvas.scss'
import { UploadIcon } from '../../_images';


// import uploadIcon from '../images/fa-upload.svg';

interface IProps {
    disabled?: boolean;
    onChange?: (files: IUploadFileType[]) => void;
    text?: IDropzoneTexts;
    classes?: IDropzoneClasses;

}
const DropzoneCanvas = (props: IProps) => {
    const { text, classes, disabled } = props;
    const [hightlight, setHighlight] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imgColor, setImgColor] = useState(classes?.passiveColor || '#D2D2D2')

    const openFileDialog = () => {
        if (props.disabled) return;
        fileInputRef.current?.click();
    };

    const onFilesAdded = (evt: any) => {
        if (disabled) return;
        const files = evt.target.files;
        const array = fileListToArray(files);
        props.onChange && props.onChange(array);
    };

    const onDragOver = (evt: any) => {
        evt.preventDefault();
        if (disabled) return;
        setHighlight(true);

    };

    const onDragLeave = () => {
        setHighlight(false);
    };

    useEffect(() => {
        hightlight && !disabled
            ? setImgColor(classes?.activeColor || '#38b1d6')
            : setImgColor(classes?.passiveColor || '#D2D2D2')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hightlight])

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
            <div className="synchron-dropzone-upload-canvas-container">
                <div
                    className={`upload-box ${!disabled && hightlight && 'OnDragOver'}`}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onClick={openFileDialog}
                    onMouseOver={() => setHighlight(true)}
                    onMouseOut={() => setHighlight(false)}
                    style={{ opacity: disabled ? 0.3 : 1 }}
                >
                    <div className="upload-icon"><UploadIcon {...props} color={imgColor} className="upload-icon" /> </div>
                    <div className={`upload-text ${!disabled && hightlight && 'active'}`} >
                        {text?.DragboxText || 'Drag here to upload'}
                    </div>
                </div>

            </div>
            <input ref={fileInputRef} style={{ display: "none" }} className="FileInput" type="file" multiple onChange={onFilesAdded} />
        </>

    )
};
export default DropzoneCanvas
