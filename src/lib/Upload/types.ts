import type { ReactNode } from "react";

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
    errorStyles?: any;
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
export interface IBaseUploadActions {
    View?: (data: any) => void;
    Edit?: (data: any) => void;
    Delete?: (data: any) => void
    Download?: (data: any) => void
    Upload?: (data: any) => void
    onAbort?: (fileName?: string) => void;
    onError?: (status: number, data: string) => void;
    onDelete?: (fileName?: string) => void;
    onRatio?: (value: number) => void;
    onUploading?: (value: boolean) => void;
}
export interface IRowUploadActions extends IBaseUploadActions {
    onSuccess?: (data?: any) => void;

}
export interface IDropzoneUploadActions extends IBaseUploadActions {
    onChange?: (data?: any[]) => void;
    onSuccess?: (data?: any) => void;
    onDelete?: (data?: any) => void;
    onDirty?: (value: boolean) => void;

}
export interface IModalUploadActions extends IBaseUploadActions {
    onSuccess?: (data?: any) => void;

}
export interface IRowItems {
    Column1?: string | ReactNode;
    Column2?: string | ReactNode;
    Column3?: string | ReactNode;
    Column4?: string | ReactNode;
    Column5?: string | ReactNode;
    Column6?: string | ReactNode;
}

export interface IBaseTexts {
    DownloadButton?: string;
    UploadButton?: string;
    ViewButton?: string;
    EditButton?: string;
    AbortButton?: string;
    DeleteButton?: string;
    CloseButton?: string;
    LoadingError?: string;
    UploadText?: string;
    ErrorUpload?: string;
    ErrorDownload?: string;
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
    className?: string;
}
export interface IPieChartLoading extends IBaseGraphs {
    width?: string;
    height?: string;

}

export interface ILinearLoading extends IBaseGraphs {
    ratio?: number;
    uploadingText?: string;
}
export interface IUploadTools {
    PieChartLoading?: IPieChartLoading;
    LinearLoading?: ILinearLoading;
}


interface IBaseUploadProps {
    files: string[];
    uploadParameters?: string[];
    uploadMethod?: 'POST' | 'PUT';
    uploadPreview?: 'Linear' | 'Pie';
    tools?: IUploadTools;
    readOnly?: boolean;
}
export interface IRowUploadProps extends IBaseUploadProps {
    classes?: IRowClasses;
    rowItems?: IRowItems;
    text?: IRowTexts;
    actions?: IRowUploadActions;
    // progressBarType?: 'Horizontal-1' | 'Horizontal-2';
}

export interface IModalUploadProps extends IBaseUploadProps {
    classes?: IModalClasses;
    text?: IModalTexts;
    actions?: IModalUploadActions;
    // progressBarType?: 'Horizontal-1' | 'Horizontal-2';
}
export interface IDropzoneUploadProps extends IBaseUploadProps {
    classes?: IDropzoneClasses;
    text?: IDropzoneTexts;
    showDetails?: boolean;
    actions?: IDropzoneUploadActions;
    thumbnailSize?: number;
    refreshOnFilesChange?: boolean;
    inititalFiles?: string[];
    maxFiles?: 1 | 2 | 3 | 4 | 5
}

export interface IDownloadFileProps {
    connection: IConnections;
    file: {
        name: string | null;
        url: string | null;
    };
    onLoading?: (value: boolean) => void;
    onError?: (status: number, data: any) => void;
    imageStatus?: (value: number) => void;
    isAborted?: boolean;
}

export interface IShowImagesProps {
    connection: IConnections;
    file: {
        name?: string;
        url: string;
    };
    isAborted?: boolean;
    text?: IBaseTexts;
    onError?: (status: number, data: any) => void;
    onLoading?: (value: boolean) => void;
    imageStatus?: (value: number) => void;
    onClick?: () => void;
    className?: string;
    styles?: any;



}