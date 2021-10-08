import React, { Component } from 'react';
import { IConnections, IFile } from '../types';

interface IProps {
    file: IFile | null;
    connection: IConnections;
    abort?: boolean;
    onRatio?: (value: number) => void;
    onUploading?: (value: boolean) => void;
    onAbort?: () => void;
    onError?: (status: number, data: string,) => void;
    onSuccess?: (data?: any) => void;
    onEndTask: () => void;
}

interface IState {
    ratio: number;
    isUploading: boolean;
    file: IFile | null;
    existingFileURL: string | null;
}

class UploadFile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            existingFileURL: null,
            file: null,
            ratio: 0,
            isUploading: false,
        };
    }
    request = new XMLHttpRequest();

    uploadFileWithFetch = async () => {
        this.setState({ isUploading: true });
        const formData = new FormData();
        formData.append(this.props.file?.rawFileData.name, this.props.file?.rawFileData);
        this.request.open('POST', `${this.props.connection.url}`, true);
        Object.keys(this.props.connection.headers).forEach((key) => this.request.setRequestHeader(key, this.props.connection.headers[key]));
        this.request.upload.addEventListener('progress', this.onUploadProgress);

        this.request.onerror = (e) => {
            this.onError(500, e);
        };

        this.request.onabort = () => {
            this.props.onAbort && this.props.onAbort();
            this.onError(this.request.status, 'Process Aborted');
        };

        this.request.onload = () => {
            let response: any;
            try {
                response = { ...JSON.parse(this.request.response), filename: this.props.file?.rawFileData.name };

                if (this.request.status < 300) {
                    this.props.onSuccess && this.props.onSuccess(response);
                } else {
                    this.onError(this.request.status, response);
                }
            } catch {
                this.onError(this.request.status, 'An error occurred while uploading. Please upload another file.');
            } finally {
                this.props.onEndTask();
            }
            this.setState({ isUploading: false });
        };

        this.request.send(formData);
    };

    onError = (status: number, data: any) => {
        this.props.onEndTask();
        this.setState({ ratio: 0 });
        this.setState({ isUploading: false });
        this.request.abort();
        this.props.onError && this.props.onError(status, data);
    };

    componentDidUpdate = () => {
        this.props.onRatio && this.props.onRatio(this.state.ratio);
        this.props.onUploading && this.props.onUploading(this.state.isUploading);
        this.props.abort === true && this.onAbort();
        if (this.props.file !== null && this.props.file !== this.state.file) {
            this.uploadFileWithFetch();
            this.setState({ file: this.props.file })
        }
        // if (this.props.file !== null && this.props.file.name !== this.state.existingFileURL) {
        //     this.uploadFileWithFetch();

        //     this.setState({ existingFileURL: this.props.file.name });

        // }
    }

    onUploadProgress = (e: any) => this.setState({ ratio: e.loaded / e.total });
    onAbort = () => this.request.abort();
    componentWillUnmount = () => this.onAbort();
    componentDidMount = () => console.log('UploadItem Mounted');

    render() {
        return <> </>
    }
}

export default UploadFile;
