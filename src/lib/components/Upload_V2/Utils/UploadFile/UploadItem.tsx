import React, { Component } from 'react';
import { IConnections, IUploadFilesProps, IFile } from '../../type';

interface IProps extends IUploadFilesProps {
    file: IFile;
    connection: IConnections;
    onRatio?: (value: number) => void;
    onUploading?: (value: boolean) => void;
}

interface IState {
    ratio: number;
    isUploading: boolean;
    requestCancel: boolean;
    aborted: boolean;
    errorMessage: string;
    uploaded: boolean;
    image: any;
    fileType: string;
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
            uploaded: false,
            image: null,
            fileType: '',
        };
    }
    request = new XMLHttpRequest();
    onUploadProgress = (e: any) => {
        this.setState({ ratio: e.loaded / e.total });
    };

    uploadFileWithFetch = async () => {
        this.setState({ errorMessage: '' });
        this.setState({ isUploading: true });
        const formData = new FormData();
        formData.append(this.props.file.data.name, this.props.file.data);
        this.request.open('POST', `${this.props.connection.url}`, true);
        Object.keys(this.props.connection.headers).map((key) => {
            this.request.setRequestHeader(key, this.props.connection.headers[key]);
            return null;
        });

        this.request.upload.addEventListener('progress', this.onUploadProgress);

        this.request.onload = (e) => {
            let response: any;
            let ErrorMessage: any;
            try {
                response = { ...JSON.parse(this.request.response), filename: this.props.file.data.name };

                if (this.request.status < 300) {
                    this.props.onSuccess && this.props.onSuccess(response);
                    this.setState({ uploaded: true });
                } else {
                    try {
                        // console.log(response);
                        ErrorMessage = response.Items[0].Message;
                    } catch {
                        try {
                            // console.log(response);
                            ErrorMessage = response.Message;
                        } catch {
                            ErrorMessage = 'Some upload error : ';
                            // console.log(ErrorMessage, this.request.status, response);
                        }
                    }
                    // this.onError(this.request.status, ErrorMessage);
                    this.onError(
                        this.request.status,
                        'Під час завантаження виникла помилка.Будь ласка, завантажте інший файл.',
                    );
                    // console.log(ErrorMessage);
                    this.setState({ ratio: 0 });
                    // this.props.onCancel && this.props.onCancel();
                }
            } catch {
                ErrorMessage = 'File is biger than expected...';
                this.onError(this.request.status, ErrorMessage);
                this.setState({ isUploading: false });
                return;
            }
            this.setState({ isUploading: false });
        };
        this.request.onerror = (e) => {
            // console.log('Error Status : ', this.request.status, this.request.response);
            this.onError(this.request.status, this.request);
        };
        this.request.onabort = () => {
            this.props.onAbort && this.props.onAbort();
            this.onError(this.request.status, 'Process Aborted');
        };
        this.request.send(formData);
    };

    onError = (status: number, data: any) => {
        let message = '';
        switch (status) {
            case 401:
                data ? (message = data) : (message = 'Unauthorized Access');
                break;
            case 422:
                data ? (message = data) : (message = 'File too large');
                break;
            default:
                data ? (message = data) : (message = 'Upload Problem');
        }
        this.setState({ uploaded: false });
        this.setState({ ratio: 0 });
        this.setState({ errorMessage: message });
        this.setState({ aborted: true });
        this.setState({ isUploading: false });
        this.request.abort();
        this.props.onError && this.props.onError(message, status);
    };

    componentDidMount = () => {
        // console.log('<><><><>', this.props.file.data);
        this.props.file.data && this.props.file.data.name && this.uploadFileWithFetch();
    };

    componentDidUpdate = () => {
        this.props.onRatio && this.props.onRatio(this.state.ratio);
        this.props.onUploading && this.props.onUploading(this.state.isUploading);
    }


    componentWillUnmount = () => {
        this.onAbort();
        // console.log('Upload Item will Umounted');
    };

    onAbort = () => {
        this.request.abort();
        // console.log('Request Aboted');
    };

    render() {
        // const itemProps = {
        //     ...this.props,
        //     ratio: this.state.ratio,
        //     onAbort: () => this.request.abort(),
        //     onDelete: this.onDelete,
        //     isUploading: this.state.isUploading,
        //     file: this.props.file,
        //     aborted: this.state.aborted,
        //     onReload: () => {
        //         this.setState({ aborted: false });
        //         this.uploadFileWithFetch();
        //     },
        //     errorMessage: this.state.errorMessage,
        //     onPreview: (image?: any, type?: string) => {
        //         // console.log({image, type, previewType: this.props.previewType});
        //         image && this.setState({ image });
        //         type && this.setState({ fileType: type });
        //         this.setState({ isModalOpen: true });
        //     },
        //     connection: this.props.connection,
        //     uploaded: this.state.uploaded,
        // };
        // // console.log('File Type : ', typeof this.props.file.data);

        return <> </>
    }
}

export default UploadFile;
