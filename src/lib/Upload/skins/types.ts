type IStateAction = {
    onDelete: string;
    onSuccess: string;
    onUpload: string;
}
export const stateAction: IStateAction = {
    onDelete: 'onDelete',
    onSuccess: 'onSuccess',
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
