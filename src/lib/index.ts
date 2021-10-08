import {
    IModalUploadProps, IRowUploadProps, IDropzoneUploadProps,
    IRowItems, IRowTexts,
    IConnections as IConn
} from './Upload/types';

import RowUpload from './Upload/skins/RowUpload';
import ModalUpload from './Upload/skins/ModalUpload';
import DropzoneUpload from './Upload/skins/DropzoneUpload';


export { RowUpload, ModalUpload, DropzoneUpload }
export type IModalUpload = IModalUploadProps;
export type IRowUpload = IRowUploadProps;
export type IDropzoneUpload = IDropzoneUploadProps;
export type IUploadItems = IRowItems
export type IUploadTexts = IRowTexts
export type IConnections = IConn
