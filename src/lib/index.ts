import {
    IUploadFilesProps,
    IRowItems, IRowTexts,
    IUploadActions as MyUploadActions,
    IConnections as IConn
} from './Upload/types';

import RowUpload from './Upload/skins/RowUpload';


export { RowUpload }
export type IUploadFiles = IUploadFilesProps;
export type IUploadItems = IRowItems
export type IUploadTexts = IRowTexts
export type IUploadActions = MyUploadActions
export type IConnections = IConn
