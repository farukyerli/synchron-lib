
import {
    IRowItems, IRowTexts, IRowUploadProps,
    IUploadActions as MyUploadActions,
    IConnections as IConn
} from './Upload/types';

import RowUpload from './Upload/skins/RowUpload';
import ModalUpload from './Upload/skins/ModalUpload';
import DropzoneUpload from './Upload/skins/DropzoneUpload';

export type IRowUpload = IRowUploadProps
export type IUploadItems = IRowItems
export type IUploadTexts = IRowTexts
export type IUploadActions = MyUploadActions
export type IConnections = IConn
export { RowUpload, ModalUpload, DropzoneUpload }