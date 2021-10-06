import React, { Component } from 'react';
import { IConnections, imageState, IRowTexts } from '../type';
import { pdfIcon, docIcon, pptIcon, txtIcon, xlsIcon, loadingIcon } from '../images';
import '../../styles/Upload/ShowImage.scss'

interface IProps {
    connection: IConnections;
    file: {
        name: string;
        url: string;
    };
    setImage?: (value: any) => void;
    setType?: (value: string) => void;
    setError?: (value: any) => void;
    onClick?: () => void;
    imageStatus?: (value: number) => void;
    isAborted?: boolean;
    text?: IRowTexts;
}


interface IState {
    file: any;
    status: number;
}

class DownloadImage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            file: null,
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
                    let file = '';
                    switch (type) {
                        case 'pdf':
                            file = pdfIcon;
                            break;
                        case 'doc':
                            file = docIcon;
                            break;
                        case 'docx':
                            file = docIcon;
                            break;
                        case 'xls':
                            file = xlsIcon;
                            break;
                        case 'xlsx':
                            file = xlsIcon;
                            break;
                        case 'txt':
                            file = txtIcon;
                            break;
                        case 'ppt':
                            file = pptIcon;
                            break;
                        default:
                            file = url;
                    }
                    // console.log('Type : ', type, 'file:', file)
                    this.props.setType && this.props.setType(type);
                    this.setState({ file });
                    this.props.setImage && this.props.setImage(file);
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
                    ErrorMessage && console.log('ERROR RESPONSE : ', ErrorMessage);
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
        this.downloadFileWithFetch();
    };

    componentDidUpdate = () => {
        this.props.isAborted && this.request.abort();
        if (this.state.status === imageState.Done || this.state.status === imageState.Problem)
            this.props.imageStatus && this.props.imageStatus(this.state.status)
    }

    render() {
        return (
            <>
                {!this.props.isAborted && (
                    <>
                        {this.state.status === imageState.Problem
                            ? (
                                <div className="error-picture">
                                    <i className="fas fa-exclamation-square " />
                                    <span>{this.props.text?.LoadingError || "Picture couldn't loaded"}</span>
                                </div>
                            )
                            : <img
                                src={
                                    this.state.status === imageState.None || this.state.status === imageState.Loading
                                        ? loadingIcon
                                        : this.state.file
                                }
                                className={`truck-icon ${this.props.isAborted && 'fail'}`}
                                alt="truck-icon"
                                onClick={this.props.onClick}
                            />
                        }
                    </>
                )}
            </>
        );
    }
}

export default DownloadImage;
