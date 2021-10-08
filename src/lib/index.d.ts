
import {
    IRowItems, IRowTexts, IRowUploadProps, IDropzoneUploadProps, IModalUploadProps,
    IConnections as IConn
} from './Upload/types';


export const RowUpload: IRowUploadProps;
export const DropzoneUpload: IModalUploadProps;
export const ModalUpload: IDropzoneUploadProps;

export type IRowUpload = IRowUploadProps
export type IDropzoneUpload = IDropzoneUploadProps
export type IModalUpload = IModalUploadProps
export type IUploadItems = IRowItems
export type IUploadTexts = IRowTexts
export type IConnections = IConn