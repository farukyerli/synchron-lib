import React, { Component } from 'react';
import { IBaseClasses, IBaseTexts, IConnections, imageState } from '../types';
import { PdfIcon, DocIcon, PptIcon, TxtIcon, XlsIcon, LoadingIcon } from '../../_images';
import '../../_styles/ShowImage.scss'

interface IProps {
    connection: IConnections;
    file: {
        name: string;
        url: string;
    };
    setImage?: (value: any) => void;
    setType?: (value: string) => void;
    setError?: (value: any) => void;
    onClick?: (action?: 'download' | 'preview') => void;
    imageStatus?: (value: number) => void;
    classes?: IBaseClasses;
    isProblemExists?: boolean;
    isAborted?: boolean;
    isUploading?: boolean;
    text?: IBaseTexts;
    size?: 'full' | 'small'
    thumbnailSize?: number;
}


interface IState {
    file: any;
    existingFileURL: string | null;
    status: number;
    fileType: string;
}

class DownloadImage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            file: null,
            existingFileURL: null,
            fileType: '',
            status: imageState.None,
        };
    }

    request = new XMLHttpRequest();

    downloadFileWithFetch = () => {
        this.request.open('GET', `${this.props.file.url}`, true);
        Object.keys(this.props.connection.headers).map((key) => {
            this.request.setRequestHeader(key, this.props.connection.headers[key]);
            return null;
        });
        this.request.responseType = 'blob';
        this.setState({ status: imageState.Loading });
        this.request.onerror = (e) => {
            console.log('ERROR RESPONSE : ', e);
            this.setState({ file: null });
            this.setState({ status: imageState.Problem });
        };

        this.request.onload = (e) => {
            switch (this.request.status) {
                case 200: {
                    // const newBlob = new Blob([this.request.response]);
                    const url = URL.createObjectURL(this.request.response);
                    // console.log('Downloaded url..', url);
                    let type: string = this.request.response.type.split('/')[1];
                    // console.log('Downloaded ..', type, type.indexOf('word'));
                    type === 'msword' && (type = 'doc');
                    type === 'vnd.openxmlformats-officedocument.wordprocessingml.document' && (type = 'docx');
                    // type.indexOf('word') !== -1 && (type = 'docx');

                    // console.log('Type : ', type, 'file:', file)
                    this.props.setType && this.props.setType(type);
                    this.setState({ fileType: type });
                    this.setState({ file: url });
                    this.props.setImage && this.props.setImage(url);
                    this.setState({ status: imageState.Done });

                    break;
                }

                case 406: {
                    this.setState({ file: null });
                    // console.log('Download error: ', this.request.status, this.request.statusText);
                    this.setState({ status: imageState.Problem });
                    break;
                }

                default: {
                    const ErrorMessage: any = this.request.response;
                    // ErrorMessage && console.log('ERROR RESPONSE : ', ErrorMessage);
                    ErrorMessage && this.props.setError && this.props.setError(ErrorMessage);
                    this.setState({ file: null });
                    this.setState({ status: imageState.Problem });
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
        this.state.existingFileURL === null && this.downloadFileWithFetch();
        this.setState({ existingFileURL: this.props.file.url });
    };

    componentDidUpdate = () => {
        // console.log('this.state.status :', this.state.status)
        this.props.isAborted && this.request.abort();
        if (this.state.status === imageState.Done || this.state.status === imageState.Problem)
            this.props.imageStatus && this.props.imageStatus(this.state.status)
        if (this.props.file.url !== this.state.existingFileURL) {
            this.downloadFileWithFetch();
            this.setState({ existingFileURL: this.props.file.url });

        }

        this.props.isProblemExists &&
            this.state.status !== imageState.Problem
            && this.setState({ status: imageState.Problem });
    }

    customProps = { width: this.props.size === 'small' ? `${this.props?.thumbnailSize}px` : '100%' };

    renderThumbnail = (type: string, file: string) => {
        switch (type) {
            case 'pdf':
                return <PdfIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            // return <PdfIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            case 'doc':
                return <DocIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            case 'docx':
                return <DocIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            case 'xls':
                return <XlsIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            case 'xlsx':
                return <XlsIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            case 'txt':
                return <TxtIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            case 'ppt':
                return <PptIcon style={{ fontSize: this.props?.thumbnailSize }} />;
            default:
                return <img
                    src={this.state.file}
                    className={`loaded-image ${this.props.isAborted && 'fail'} ${this.props.size === 'small' && 'small'}`}
                    alt=""
                    style={{ ...this.customProps }}

                />;
        }
    }

    render() {

        return (
            <>
                {!this.props.isAborted && (
                    <>
                        {this.state.status === imageState.Problem
                            ? (
                                <div
                                    className={`error-picture ${this.props.size === 'small' && 'small'}`}
                                    style={{ ...this.customProps, ...this.props.classes?.errorStyles }}
                                >
                                    <i className={`fas fa-exclamation-square ${this.props.size === 'small' && 'small'}`} />
                                    {this.props.size === 'small' &&
                                        <span>{this.props.text?.ErrorDownload || "Picture couldn't uploaded "}</span>}

                                    {this.props.size !== 'small'
                                        && <span>{this.props.text?.ErrorUpload || "Picture couldn't loaded"}</span>}
                                </div>
                            )
                            : this.state.status === imageState.None || this.state.status === imageState.Loading || this.props.isUploading
                                ? <LoadingIcon style={{ ...this.customProps }} />

                                : (
                                    <div
                                        className={`loaded-image 
                                        ${this.props.isAborted && 'fail'}
                                        ${this.props.size === 'small' && 'small'}`}
                                        onClick={() => this.props.onClick && this.props.onClick('preview')}
                                    >
                                        {this.renderThumbnail(this.state.fileType, this.state.file)}
                                    </div>
                                )
                        }
                    </>
                )}
            </>
        );
    }
}

export default DownloadImage;
