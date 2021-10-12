
import {
    IRowUploadProps,
    IDropzoneUploadProps,
    IModalUploadProps,
    IConnections as IConn,
    IDownloadFileProps

} from './Upload/types';

export type IConnections = IConn
export interface IRowUpload extends IRowUploadProps {
    connection: IConnections;
}
export interface IDropzoneUpload extends IDropzoneUploadProps {
    connection: IConnections;
}
export interface IModalUpload extends IModalUploadProps {
    connection: IConnections;
}
export interface IDownloadFile extends IDownloadFileProps {
    connection: IConnections;
}



