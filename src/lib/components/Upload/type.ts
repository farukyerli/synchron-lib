export type IConnections = {
    url: string;
    headers?: any;
}

export interface IFiles {
    download: any;
    upload: any;
}

export interface IUploadFilesProps {
    value?: string;
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
    files?: string[];
    previewType?: 'FullScreen' | 'Modal-Type-1';
}