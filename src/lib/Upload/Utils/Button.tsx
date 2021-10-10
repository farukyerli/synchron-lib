import { Tooltip } from '@material-ui/core';
import React from 'react';

interface IButton {
    action: () => void
    className: string;
    title?: string;
    position?: 'bottom' | 'left' | 'right' | 'top'
    visible?: boolean;
}

const IconButton = (props: IButton) => {
    const { action, className, title, visible = true } = props;
    return visible === true
        ? <div onClick={action}>
            <Tooltip title={title || ''} placement={props.position || 'bottom'}>
                <i className={`${className}`} />
            </Tooltip>
        </div>
        : <></>

}

export default IconButton
