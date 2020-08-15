export type IFiles = {
    laslastModified: number | null;
    lastModifiedDate: Date | null;
    name: string | null;
    size: number | null;
    type: string | null;
}
export type IConnections = {
    url: string;
    headers?: any;
}

export interface IUploadFilesProps  {
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
}