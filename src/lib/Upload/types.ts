import { ReactNode } from "react";

export type IConnections = {
    url: string;
    headers?: any;
}

export interface IFile {
    name: string;
    type?: string;
    rawFileData?: any;
    status?: number;
}
export interface IUploadFileType {
    lastModified: number; // Timestamp
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}

export interface IBaseClasses {
    componentContainer?: string;
}
export interface IRowClasses extends IBaseClasses {
    section?: string;
    footer?: string;
    Column1?: string;
    Column2?: string;
    Column3?: string;
    Column4?: string;
    Column5?: string;
    Column6?: string;
}

export interface IDropzoneClasses extends IBaseClasses {
    activeColor?: string;
    passiveColor?: string;
    disabledColor?: string;
    width?: string;
    height?: string;
    minWidth?: string;
    minHeight?: string;
}
export interface IModalClasses extends IBaseClasses { }
export interface IUploadActions {
    View?: (data: any) => void;
    Edit?: (data: any) => void;
    Delete?: (data: any) => void
    Download?: (data: any) => void
    Upload?: (data: any) => void

    onAbort?: (fileName?: string) => void;
    onError?: (status: number, data: string) => void;
    onSuccess?: (data?: any) => void;
    onDelete?: (fileName?: string) => void;
}

export interface IRowItems {
    Column1?: string | ReactNode;
    Column2?: string | ReactNode;
    Column3?: string | ReactNode;
    Column4?: string | ReactNode;
    Column5?: string | ReactNode;
    Column6?: string | ReactNode;
}

interface IBaseTexts {
    DownloadButton?: string;
    UploadButton?: string;
    ViewButton?: string;
    EditButton?: string;
    AbortButton?: string;
    DeleteButton?: string;
    CloseButton?: string;
    LoadingError?: string;
    UploadText?: string;
}
export interface IRowTexts extends IBaseTexts { }
export interface IModalTexts extends IBaseTexts { }

export interface IDropzoneTexts extends IBaseTexts {
    DragboxText?: string;
}

export const imageState = {
    None: 0,
    Loading: 1,
    Done: 2,
    Problem: 3
}
interface IBaseGraphs {
    backgroundColor?: string;
    foregroundColor?: string;
    width?: string;
    height?: string;
}
export interface IPieChartLoading extends IBaseGraphs {

}
export interface IUploadTools {
    PieChartLoading?: IPieChartLoading
}


interface IBaseUploadProps {
    actions?: IUploadActions;
    files: string[];
    tools?: IUploadTools;
}
export interface IRowUploadProps extends IBaseUploadProps {
    classes?: IRowClasses;
    rowItems?: IRowItems;
    text?: IRowTexts;
    // progressBarType?: 'Horizontal-1' | 'Horizontal-2';
}

export interface IModalUploadProps extends IBaseUploadProps {
    classes?: IModalClasses;
    text?: IModalTexts;
    // progressBarType?: 'Horizontal-1' | 'Horizontal-2';
}
export interface IDropzoneUploadProps extends IBaseUploadProps {
    classes?: IDropzoneClasses;
    text?: IDropzoneTexts;
    details?: boolean;

}

// export interface IUploadFilesProps {
//     value?: string;
//     skintype?: 'dropzone' | 'row' | 'modal';
//     classes?: IClasses;
//     rowItems?: IRowItems;
//     actions?: IUploadActions;
//     text?: IRowTexts;
//     files: string[];
//     tools?: IUploadTools;




//     progressBarSteps?: number;
//     progressBarType?: 'Horizontal-1' | 'Horizontal-2';
//     multiUpload?: boolean;
//     dropzone?: boolean;
//     dropzoneButton?: boolean;
//     title?: string;
//     upLoadText?: string;
//     buttonTitle?: string;
//     previewType?: 'FullScreen' | 'Modal-Type-1';

// }