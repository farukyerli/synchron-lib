import React from 'react';
import { IConnections, IDropzoneUploadProps, IUploadFileType } from '../types';
import '../../_styles/DropzoneCanvas.scss'
import DropzoneCanvas from '../Utils/DropzoneCanvas';
import { DropzoneItemForm } from '../Utils';


// import uploadIcon from '../images/fa-upload.svg';

interface IProps extends IDropzoneUploadProps {
    connection: IConnections;
    disabled?: boolean;
    onChange?: (files: IUploadFileType[]) => void;
}

const DropZoneForm = (props: IProps) => {
    const { files: fileURLList, connection, classes } = props;

    const height = props.classes?.height && parseInt(props.classes?.height.replace('px', ''))
    const width = props.classes?.width && parseInt(props.classes?.width.replace('px', ''))
    const minHeight = height && height >= 20 && height <= 80 ? height * 3 : null
    const minwidth = width && width >= 20 && width <= 80 ? width * 3 : null

    return (
        <div className="synchron-dropzone-upload-container" style={{ ...classes, minHeight: `${minHeight}px` }}>
            {fileURLList.map((item: string, ndx: number) => {
                return <DropzoneItemForm
                    {...props}
                    key={`DropzoneItem${ndx}`}
                    file={{
                        name: item,
                        url: item
                    }}
                    connection={connection}
                    onDelete={(data) => console.log('onDelete : ', data)}
                    height={`${minHeight || minwidth}px`}
                />
            })}

            {fileURLList.length < 5 && <DropzoneCanvas
                {...props}

                onChange={(data) => { console.log('Selected Files:', data) }}
            />}
        </div>

    )
};
export default DropZoneForm
