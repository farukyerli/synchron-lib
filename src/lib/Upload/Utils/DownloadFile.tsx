import React, { Component } from 'react';
import { IDownloadFileProps, imageState } from '../types';
import '../../_styles/ShowImage.scss'

interface IState {
    fileName: string;
    fileURL: string | null;
    status: number;
}

const initialFileName = 'SynchronFile';
class DownloadImage extends Component<IDownloadFileProps, IState> {
    constructor(props: IDownloadFileProps) {
        super(props);
        this.state = {
            fileName: initialFileName,
            fileURL: null,
            status: imageState.None,
        };
    }

    request = new XMLHttpRequest();

    onError = (status: number, data: any) => {
        this.setState({ fileURL: null, fileName: initialFileName });
        this.setState({ status: imageState.Problem });
        this.props.onLoading && this.props.onLoading(false);
        this.props.onError && this.props.onError(status, data);

    }

    downloadFileWithFetch = (fileURL: string) => {
        this.request.open('GET', `${fileURL}`, true);
        Object.keys(this.props.connection.headers).map((key) => {
            this.request.setRequestHeader(key, this.props.connection.headers[key]);
            return null;
        });
        this.request.responseType = 'blob';
        this.setState({ status: imageState.Loading });
        this.props.onLoading && this.props.onLoading(true);
        this.request.onerror = (e) => {

            this.onError(500, e)
        }

        this.request.onload = (e) => {
            switch (this.request.status) {
                case 200: {
                    const docURL = URL.createObjectURL(this.request.response);
                    const ext: string = this.request.response.type.split('/')[1];
                    // console.log('Downloaded ..', type, type.indexOf('word'));

                    const tempLink = document.createElement('a');
                    tempLink.href = docURL;
                    tempLink.target = '_blank';
                    tempLink.rel = 'noopener noreferrer';
                    tempLink.setAttribute('download', `${this.state.fileName}.${ext}`);
                    tempLink.click()

                    // this.setState({ file });
                    this.setState({ status: imageState.Done });
                    this.props.onLoading && this.props.onLoading(false);

                    break;
                }

                default: {
                    this.onError(this.request.status, e)

                }
            }

        };
        // this.state.status !== imageState.Done && this.setState({ status: imageState.Problem });

        this.request.send(null);
    };

    componentWillUnmount = () => {
        this.request.abort();
    };

    componentDidMount = () => {
        // this.downloadFileWithFetch();
    };

    componentDidUpdate = () => {
        this.props.isAborted && this.request.abort();
        if (this.state.status === imageState.Done || this.state.status === imageState.Problem)
            this.props.imageStatus && this.props.imageStatus(this.state.status)

        !this.props.file && this.setState({ fileURL: null })
        if (this.props.file && this.props.file.url !== this.state.fileURL && this.state.status === imageState.None) {
            this.setState({ fileURL: this.props.file.url, fileName: this.props.file.name || initialFileName })
            this.props.file.url && this.downloadFileWithFetch(this.props.file.url);
        } else {
            // this.setState({ fileURL: null })
        }


    }

    render() {
        return <></>
    }
}

export default DownloadImage;
