import React from 'react';
import downloadIcon from '../images/fa-upload.svg';
import removeIcon from '../images/remove2.svg';

interface IProps {
    onClose: () => void;
    image: string;
    downloadButtonTitle?: string;
}

export default (props: IProps) => {
    return (

        <div className="frame-cover modal-photo-view">
            <div className="modal-frame-thumbnails big-img-loading">
                <figure className="modal-body-loading-figure">
                    <img src={removeIcon} className="remove-icon" alt="remove icon" onClick={props.onClose} />
                    <img src={props.image} className="large-truck" alt="truck-large" />
                    <figcaption className="fig-caption">
                        <small>{` `}</small>
                        <button type="button" className="large-caption-button" onClick={() => window.open(props.image)}>
                            <img src={downloadIcon} className="down-icon" alt="" />
                            <span>{props.downloadButtonTitle || `DOWNLOAD`}</span>
                        </button>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}