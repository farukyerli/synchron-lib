type IStateAction = {
    onDelete: string;
    onReset: string;
    onUpload: string;
}
export const stateAction: IStateAction = {
    onDelete: 'onDelete',
    onReset: 'onReset',
    onUpload: 'onUpload'
}
export interface IState {
    fileURLList: IFileList[];
    uploadList: any[];
}

export type IActions = { type: string, payload: IState }


export type IFileList = {
    index: number;
    filename: string;
}
