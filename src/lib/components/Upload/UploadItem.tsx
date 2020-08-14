import React, { Component } from 'react';
import { Horizontal1 } from './progressBars';
import { IConnections } from './type';

interface IProps {
    file: any;
    url: string;
    headers: any;
    progressBarSteps: number;
    progressBarType: 'Horizontal-1' | 'Horizontal-2';
    onDelete: (error: any) => void;
    onAbort: () => void;
    onError: (e: any, status: number) => void;
    onSuccess: (data: any) => void;
    onChange: (key: number, value: string) => void;
    connection: IConnections;
}

interface IState {
    ratio: number;
    isUploading: boolean;
    requestCancel: boolean;
    aborted: boolean;
    errorMessage: string;
}

class Upload extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ratio: 0,
            isUploading: false,
            requestCancel: false,
            aborted: false,
            errorMessage: '',
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
        this.uploadFileWithFetch();
    };

    render() {
        const itemProps = {
            ratio: this.state.ratio,
            onAbort: () => this.request.abort(),
            onDelete: () => this.props.onDelete(this.props.file.name),
            isUploading: this.state.isUploading,
            file: this.props.file,
            aborted: this.state.aborted,
            onReload: () => {
                this.setState({ aborted: false });
                this.uploadFileWithFetch();
            },
            errorMessage: this.state.errorMessage,
        };
        return (
            <div className="row">
                <div className="col">
                    {this.props.progressBarType === 'Horizontal-1' && <Horizontal1 {...itemProps} />}
                </div>
            </div>
        );
    }
}

export default Upload;
