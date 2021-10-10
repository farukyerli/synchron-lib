import type {
    IModalUploadProps, IRowUploadProps, IDropzoneUploadProps,
    IRowItems, IRowTexts,
    IConnections as IConn,
    IDownloadFileProps

} from './Upload/types';

import RowUpload from './Upload/skins/RowUpload';
import ModalUpload from './Upload/skins/ModalUpload';
import DropzoneUpload from './Upload/skins/DropzoneUpload';
import DownloadFile from './Upload/Utils/DownloadFile';


export { RowUpload, ModalUpload, DropzoneUpload, DownloadFile }
export type IModalUpload = IModalUploadProps;
export type IRowUpload = IRowUploadProps;
export type IDropzoneUpload = IDropzoneUploadProps;
export type IUploadItems = IRowItems
export type IUploadTexts = IRowTexts
export type IConnections = IConn
export type IDownloadFile = IDownloadFileProps