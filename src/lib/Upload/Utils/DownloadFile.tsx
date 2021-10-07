import React, { Component } from 'react';
import { IConnections, imageState } from '../types';
import '../../_styles/ShowImage.scss'

interface IProps {
    connection: IConnections;
    file: {
        name: string;
        url: string;
    };
    setLoading?: (value: boolean) => void;

    imageStatus?: (value: number) => void;
    setError?: (value: any) => void;
    isAborted?: boolean;

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
        this.props.setLoading && this.props.setLoading(true);
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
                    tempLink.setAttribute('download', `${this.props.file.name}.${ext}`);
                    tempLink.click()

                    // this.setState({ file });
                    this.setState({ status: imageState.Done });
                    this.props.setLoading && this.props.setLoading(false);

                    break;
                }

                case 406: {
                    this.setState({ file: null });
                    // console.log('Download error: ', this.request.status, this.request.statusText);
                    this.setState({ status: imageState.Problem });
                    this.props.setLoading && this.props.setLoading(false);
                    break;
                }

                default: {
                    const ErrorMessage: any = this.request.response;
                    ErrorMessage && console.log('ERROR RESPONSE : ', ErrorMessage);
                    ErrorMessage && this.props.setError && this.props.setError(ErrorMessage);
                    this.setState({ file: null });
                    this.setState({ status: imageState.Problem });
                    this.props.setLoading && this.props.setLoading(false);
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

            </>
        );
    }
}

export default DownloadImage;
