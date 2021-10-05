import { ReactNode } from "react";

export type IConnections = {
    url: string;
    headers?: any;
}

export interface IFile {
    name: string;
    url: string;
    type?: string;
    data?: any;
    // custom: any;
    status?: number;
}
export interface IUploadFileType {
    lastModified: number; // Timestamp
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}

export interface IClasses {
    componentContainer?: string;
    section?: string;
    footer?: string;
    Column1?: string;
    Column2?: string;
    Column3?: string;
    Column4?: string;
    Column5?: string;
    Column6?: string;
}

export interface IUploadActions {
    View?: (data: any) => void;
    Edit?: (data: any) => void;
    Delete?: (data: any) => void
    Download?: (data: any) => void
    Upload?: (data: any) => void
}

export interface IRowItems {
    Column1?: string | ReactNode;
    Column2?: string | ReactNode;
    Column3?: string | ReactNode;
    Column4?: string | ReactNode;
    Column5?: string | ReactNode;
    Column6?: string | ReactNode;
}

export interface IRowTexts {
    DownloadButton?: string;
    UploadButton?: string;
    ViewButton?: string;
    EditButton?: string;
    DeleteButton?: string;
    CloseButton?: string;
    LoadingError?: string;
    UploadText?: string;

}
export const imageState = {
    None: 0,
    Loading: 1,
    Done: 2,
    Problem: 3
}
export interface IUploadFilesProps {
    value?: string;
    skintype?: 'dropzone' | 'row' | 'modal';
    classes?: IClasses;
    rowItems?: IRowItems;
    actionButtons?: IUploadActions;
    text?: IRowTexts;
    files: string[];




    onAbort?: () => void;
    onError?: (data: string, status: number) => void;
    onSuccess?: (data?: any) => void;
    onDelete?: (fileName?: any) => void;
    progressBarSteps?: number;
    progressBarType?: 'Horizontal-1' | 'Horizontal-2';
    multiUpload?: boolean;
    dropzone?: boolean;
    dropzoneButton?: boolean;
    title?: string;
    upLoadText?: string;
    buttonTitle?: string;
    previewType?: 'FullScreen' | 'Modal-Type-1';

}