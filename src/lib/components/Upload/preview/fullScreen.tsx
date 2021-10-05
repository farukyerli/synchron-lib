import React from 'react';
import downloadIcon from 'images/UploadFiles/fa-upload.svg';
import removeIcon from 'images/UploadFiles/remove2.svg';

interface IProps {
    onClose: () => void;
    image: string;
    downloadButtonTitle?: string;
}

export default (props: IProps) => {
    console.log('Full Screen', props)
    return (

        <div className="frame-cover full-screen-preview">
            <div className="large-cover">
                <div className="large">
                    <img src={removeIcon} className="remove-icon" alt="remove icon" onClick={props.onClose} />
                    <img src={props.image} className="large-truck" alt="truck-large" />
                    <div className="large-caption">
                        <small>{` `}</small>
                        <button type="button" className="large-caption-button" onClick={() => window.open(props.image)}>
                            <img src={downloadIcon} className="down-icon" alt="" />
                            <span>{props.downloadButtonTitle || `DOWNLOAD`}</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}