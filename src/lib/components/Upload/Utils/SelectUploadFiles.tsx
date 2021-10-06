import React, { useEffect, useRef } from 'react';
import { IUploadFileType } from '../type';

interface IProps {
    open: boolean;
    disabled?: boolean;
    multiple?: boolean;
    onChange: (files: IUploadFileType[]) => void;
}

export default (props: IProps) => {
    const { open, multiple = false } = props;
    const fileInputRef = useRef<HTMLInputElement>(null);

    const openFileDialog = () => {
        if (props.disabled) return;
        fileInputRef.current?.click();
    };

    const onFilesAdded = (evt: any) => {
        if (props.disabled) return;
        const files: IUploadFileType[] = evt.target.files;
        props.onChange(files);
    };

    useEffect(() => {
        openFileDialog()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    return (
        <input
            ref={fileInputRef}
            style={{ display: 'none' }}
            type="file"
            multiple={multiple}
            onChange={onFilesAdded}
        />

    );
};
