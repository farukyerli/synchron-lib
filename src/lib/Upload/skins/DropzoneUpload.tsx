import React, { useEffect, useReducer, useState } from 'react';
import type { IConnections, IDropzoneUploadProps, IUploadFileType } from '../types';
import '../../_styles/DropzoneCanvas.scss'
import DropzoneCanvas from '../Utils/DropzoneCanvas';
import { DropzoneItemForm } from '../Utils';
import { deepCopy } from '../../_helpers';
import { IActions, IFileList, IState, stateAction } from './types';


interface IProps extends IDropzoneUploadProps {
    connection: IConnections;
    disabled?: boolean;
    onChange?: (files: IUploadFileType[]) => void;
}

function reducer(state: IState, action: IActions): IState {
    switch (action.type) {
        case stateAction.onDelete:
            return { ...action.payload }
        case stateAction.onUpload:
            return {
                ...state,
                fileURLList: [...state.fileURLList, ...action.payload.fileURLList],
                uploadList: [...state.uploadList, ...action.payload.uploadList]
            }
        default:
            break;
    }
    return state;
}


const DropZoneForm = (props: IProps) => {
    const { connection, classes, actions } = props;
    const initState: IState = {
        fileURLList: props.files.map((filename, index) => ({ index, filename })),
        uploadList: props.files.map(() => null)
    }
    const [state, dispatch] = useReducer(reducer, initState);
    const [isMounted, setIsMounted] = useState(false);

    const onDelete = (ndx: number, data: any) => {
        const myArray = deepCopy(state.fileURLList.filter((item) => ndx !== item.index))
        dispatch({
            type: stateAction.onDelete, payload: {
                fileURLList: myArray,
                uploadList: myArray.map(() => null)
            }
        })
        actions?.onDelete && actions?.onDelete({ ndx, data })
    }

    useEffect(() => {
        isMounted && actions?.onChange && actions?.onChange(state.fileURLList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.fileURLList])


    useEffect(() => {
        setIsMounted(true)
    }, [])


    return (
        <div className="synchron-dropzone-upload-container"
            style={{
                ...classes,
            }}
        >
            {
                state.fileURLList.map((item: IFileList, ndx: number) => {
                    return <DropzoneItemForm
                        {...props}
                        key={`DropzoneItem${ndx}`}
                        file={{
                            name: item.filename,
                            url: item.filename
                        }}
                        connection={connection}
                        uploadFile={state.uploadList[ndx]}
                        actions={{
                            ...props.actions,
                            onSuccess: (data: any) => actions?.onSuccess && actions.onSuccess({ ndx, data }),
                            onDelete: () => onDelete(ndx, item)
                        }}
                    />
                })
            }

            {state.fileURLList.length < 5 && <DropzoneCanvas
                {...props}
                onChange={(data) => {
                    dispatch({
                        type: stateAction.onUpload, payload: {
                            fileURLList: [
                                ...data.map((item: any, index: number) => (
                                    {
                                        index: index + state.fileURLList.length,
                                        filename: URL.createObjectURL(item)
                                    }))]
                            ,
                            uploadList: [...data]
                        }
                    })
                }
                }
            />}
        </div >

    )
};
export default DropZoneForm
