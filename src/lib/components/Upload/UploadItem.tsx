import React, { Component } from 'react';
import { Horizontal1 } from './progressBars';
import { IConnections, IUploadFilesProps } from './type';
import { FullScreen, Modal1 } from './preview';

interface IProps extends IUploadFilesProps {
    file: any;
    url: string;
    headers: any;
    onChange: (key: number, value: string) => void;
    connection: IConnections;
    filename?: string;
    viewMode?: boolean;
}

interface IState {
    ratio: number;
    isUploading: boolean;
    requestCancel: boolean;
    aborted: boolean;
    errorMessage: string;
    isModalOpen: boolean;
}

class UploadFile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ratio: 0,
            isUploading: false,
            requestCancel: false,
            aborted: false,
            errorMessage: '',
            isModalOpen: false,
        };
    }
    request = new XMLHttpRequest();
    onUploadProgress = (e: any) => {
        this.setState({ ratio: e.loaded / e.total });
        this.props.onChange(1, 'Uploading Start');
    };

    uploadFileWithFetch = async () => {
        this.setState({ errorMessage: '' });
        this.setState({ isUploading: true });
        const formData = new FormData();
        formData.append(this.props.file.name, this.props.file);
        this.request.open('POST', this.props.url, true);
        Object.keys(this.props.connection.headers).map((key) => {
            this.request.setRequestHeader(key, this.props.connection.headers[key]);
            return null;
        });

        this.request.upload.addEventListener('progress', this.onUploadProgress);

        this.request.onload = (e) => {
            // console.log('Upload Status : ', this.request.status, this.request.response);
            if (this.request.status < 300) {
                const response = { ...JSON.parse(this.request.response), filename: this.props.file.name };
                // response.filename = this.props.file.name;
                this.props.onSuccess && this.props.onSuccess(response);
            } else {
                this.onError(this.request.status, this.request.readyState);
            }
            this.setState({ isUploading: false });
        };
        this.request.onerror = (e) => {
            // console.log('Error Status : ', this.request.status, this.request.response);
            this.onError(this.request.status, this.request);
            this.setState({ isUploading: false });
        };
        this.request.onabort = () => {
            // console.log('** The request was aborted');
            this.setState({ errorMessage: 'Aborted' });
            this.setState({ isUploading: false });
            this.setState({ aborted: true });
            this.props.onAbort && this.props.onAbort();
        };
        // send POST request to server
        this.request.send(formData);
    };

    onError = (status: number, data: any) => {
        let message = '';
        switch (status) {
            case 401:
                message = 'Unauthorized Access';
                break;
            case 422:
                message = 'File too larga';
                break;
            default:
                message = 'Upload Problem';
        }
        this.setState({ errorMessage: message });
        this.setState({ aborted: true });
        this.props.onError && this.props.onError(message, status);
    };

    componentDidMount = () => {
        // console.log('<><><><>', this.props.file);
        this.props.onChange(0, 'Mounted');
        this.props.file && this.props.file.name && this.uploadFileWithFetch();
    };

    onDelete = () => {
        const deletedName = this.props.file.name ? this.props.file.name : this.props.file;
        this.props.onDelete && this.props.onDelete(deletedName);
    };

    onClose = () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        const itemProps = {
            ...this.props,
            ratio: this.state.ratio,
            onAbort: () => this.request.abort(),
            onDelete: this.onDelete,
            isUploading: this.state.isUploading,
            file: this.props.file,
            aborted: this.state.aborted,
            onReload: () => {
                this.setState({ aborted: false });
                this.uploadFileWithFetch();
            },
            errorMessage: this.state.errorMessage,
            onPreview: () => { this.setState({ isModalOpen: true }) },
        };
        console.log('File Type : ', typeof (this.props.file))

        return (
            <div className="row">
                <div className="col">
                    {this.props.progressBarType === 'Horizontal-1' && <Horizontal1 {...itemProps} />}
                </div>
                {this.state.isModalOpen && this.props.previewType === 'FullScreen' &&
                    <FullScreen {...itemProps} onClose={this.onClose} image={this.props.file || ''} />
                }

                {this.state.isModalOpen && this.props.previewType === 'Modal-Type-1' &&
                    <Modal1
                        {...this.props}
                        onClose={this.onClose}
                        image={typeof (this.props.file) === "string"
                            ? this.props.file
                            : URL.createObjectURL(new Blob([this.props.file]))
                        } />
                }
            </div>
        );
    }
}

export default UploadFile;
