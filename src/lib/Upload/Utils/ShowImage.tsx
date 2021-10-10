import React, { Component } from 'react';
import { IBaseClasses, IShowImagesProps, imageState } from '../types';
import { PdfIcon, DocIcon, PptIcon, TxtIcon, XlsIcon, LoadingIcon } from '../../_images';
import '../../_styles/ShowImage.scss'

interface IProps extends IShowImagesProps {

    // setImage?: (value: any) => void;
    onImage?: (value: string) => void;
    classes?: IBaseClasses;
    isProblemExists?: boolean;
    size?: 'full' | 'small'
    thumbnailSize?: number;
    isUploading?: boolean;
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

    onError = (status: number, data: any) => {
        this.setState({ file: null });
        this.setState({ status: imageState.Problem });
        this.props.onLoading && this.props.onLoading(false);
        this.props.onError && this.props.onError(status, data);

    }

    downloadFileWithFetch = () => {
        this.request.open('GET', `${this.props.file.url}`, true);
        this.props.onLoading && this.props.onLoading(true);
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
        this.request.onerror = (e) => {

            this.onError(500, e)
        }


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

                    this.setState({ fileType: type });
                    this.setState({ file: url });
                    this.props.onImage && this.props.onImage(url);
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

    customProps = this.props.size === 'small'
        ? { maxWidth: `${this.props?.thumbnailSize}px` || '170px' }
        : { width: '90%' }

    renderIcon = (props: any) => {
        return <div className={`${this.props.size === 'small' ? ' small' : ''} `}
        >

            {props}
        </div>
    }

    renderThumbnail = (type: string, file: string) => {
        switch (type) {
            case 'pdf':
                return this.renderIcon(<PdfIcon />);
            case 'doc':
                return this.renderIcon(<DocIcon />);
            case 'docx':
                return this.renderIcon(<DocIcon />);
            case 'xls':
                return this.renderIcon(<XlsIcon />);
            case 'xlsx':
                return this.renderIcon(<XlsIcon />);
            case 'txt':
                return this.renderIcon(<TxtIcon />);
            case 'ppt':
                return this.renderIcon(<PptIcon />);
            default:
                return <img
                    src={this.state.file}
                    style={{ ...this.customProps }}
                    className={`${this.props.size === 'small' ? ' small' : ''} `
                    }
                    alt=""

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
                                        className={`loaded-image${this.props.isAborted ? ' fail' : ''}${this.props.size === 'small' ? ' small' : ''} ${this.props.className || ''}`}
                                        onClick={this.props.onClick}
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
