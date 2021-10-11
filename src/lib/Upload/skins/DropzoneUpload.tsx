import React, { useEffect, useReducer, useState } from 'react';
import type { IConnections, IDropzoneUploadProps, IUploadFileType } from '../types';
import '../../_styles/DropzoneCanvas.scss'
import DropzoneCanvas from '../Utils/DropzoneCanvas';
import { DropzoneItemForm } from '../Utils';
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
        case stateAction.onReset:
            return {
                fileURLList: [...action.payload.fileURLList],
                uploadList: [...action.payload.uploadList]
            }
        default:
            break;
    }
    return state;
}


const DropZoneForm = (props: IProps) => {
    const { connection, classes, actions, refreshOnFilesChange = false } = props;
    const initState = (): IState => {
        return ({
            fileURLList: props.files.map((filename, index) => ({ index, filename })),
            uploadList: props.files.map(() => null)
        })
    }
    const [state, dispatch] = useReducer(reducer, initState());
    const [isMounted, setIsMounted] = useState(false);

    const onDelete = (index: number, data: any) => {
        const myArray = state.fileURLList.filter((item, ndx) => ndx !== index)
        // const myArray = deepCopy(state.fileURLList.filter((item, ndx) => ndx !== item.index))
        actions?.onDelete && actions?.onDelete(data)

        dispatch({
            type: stateAction.onDelete, payload: {
                fileURLList: myArray,
                uploadList: myArray.map(() => null)
            }
        })
    }

    useEffect(() => {
        if (refreshOnFilesChange || state.fileURLList.length === 0) {
            dispatch({
                type: stateAction.onReset,
                payload: {
                    fileURLList: props.files.map((filename, index) => ({ index, filename })),
                    uploadList: props.files.map(() => null)
                }
            })
            // console.log('props changed', props.files);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.files])

    useEffect(() => {
        const isDirty = props.inititalFiles ? compare(props?.inititalFiles, state.fileURLList) : true;
        actions?.onDirty && actions?.onDirty(isDirty)
        isMounted && actions?.onChange && actions?.onChange(state.fileURLList)


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.fileURLList])


    useEffect(() => {
        setIsMounted(true)
    }, [])

    const compare = (a: string[], b: IFileList[]): boolean => {
        if (a.length !== b.length)
            return true;
        let _returnValue = false;
        a.forEach((item) => {
            if (b.findIndex((x) => x.filename === item) === -1)
                _returnValue = true;
        })
        return _returnValue;
    };


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
                            onSuccess: (data: any) => {
                                actions?.onDirty && actions?.onDirty(true);
                                actions?.onSuccess && actions.onSuccess({ ndx, data });
                            },
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
