import React, { useEffect, useState } from 'react';
import { IConnections, IDropzoneUploadProps, IUploadFileType } from '../types';
import '../../_styles/DropzoneCanvas.scss'
import DropzoneCanvas from '../Utils/DropzoneCanvas';
import { DropzoneItemForm } from '../Utils';
import { deepCopy } from '../../_helpers';

type IFileList = {
    index: number;
    filename: string;
}
interface IProps extends IDropzoneUploadProps {
    connection: IConnections;
    disabled?: boolean;
    onChange?: (files: IUploadFileType[]) => void;
}

const DropZoneForm = (props: IProps) => {
    const { connection, classes, actions } = props;

    const [fileURLList, setFileURLList] = useState<IFileList[]>(props.files.map((filename, index) => ({ index, filename })))
    const [uploadList, setUploadList] = useState<any[]>(props.files.map(() => null))
    // const [isMounted, setIsMounted] = useState(false);


    const height = props.classes?.height && parseInt(props.classes?.height.replace('px', ''))
    const width = props.classes?.width && parseInt(props.classes?.width.replace('px', ''))
    const minHeight = height && height >= 20 && height <= 80 ? height * 3 : null
    const minwidth = width && width >= 20 && width <= 80 ? width * 3 : null

    const onDelete = (ndx: number, data: any) => {
        // console.log('onDelete:', ndx, data)
        const myArray = deepCopy(fileURLList.filter((item) => ndx !== item.index))
        setFileURLList(myArray)
        actions?.onChange && actions?.onChange(myArray)

        setUploadList(myArray.map(() => null))
        // console.log('onDelete:', myArray)

        // actions?.onChange && actions?.onChange({
        //     ndx,
        //     data
        // })
    }

    useEffect(() => {
        // console.log('fileURLList:', fileURLList)
        // isMounted && actions?.onChange && actions?.onChange(fileURLList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fileURLList])

    // useEffect(() => {
    //     setIsMounted(true)
    // }, [])

    useEffect(() => {
        console.log('uploadList:', uploadList)
    }, [uploadList])
    return (
        <div className="synchron-dropzone-upload-container" style={{ ...classes, minHeight: `${minHeight}px` }}>
            {fileURLList.map((item: IFileList, ndx: number) => {
                return <DropzoneItemForm
                    {...props}
                    key={`DropzoneItem${ndx}`}
                    file={{
                        name: item.filename,
                        url: item.filename
                    }}
                    connection={connection}
                    height={minHeight || minwidth ? `${minHeight || minwidth}px` : ''}
                    uploadFile={uploadList[ndx]}
                    actions={{
                        ...props.actions,
                        // onChange: (data: any) => onChange(ndx, data),
                        onSuccess: (data: any) => {
                            console.log('onChange:', ndx, data)
                            actions?.onSuccess && actions.onSuccess({ ndx, data })

                        },
                        onDelete: () => onDelete(ndx, item)
                    }}
                />
            })}

            {fileURLList.length < 5 && <DropzoneCanvas
                {...props}

                onChange={(data) => {
                    setFileURLList(prev => (
                        [...prev,
                        ...data.map((item: any, index: number) => (
                            {
                                index: index + prev.length,
                                filename: URL.createObjectURL(item)
                            }))
                        ])
                    )
                    setUploadList(prev => ([...prev, ...data]))
                }
                }
            />}
        </div>

    )
};
export default DropZoneForm
