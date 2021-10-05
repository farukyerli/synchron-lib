import { Tooltip } from '@material-ui/core';
import React from 'react';

interface IButton {
    action: () => void
    className: string;
    title?: string;
    position?: 'bottom' | 'left' | 'right' | 'top'
}

const IconButton = (props: IButton) => {
    const { action, className, title } = props;
    return <Tooltip title={title || ''} placement={props.position || 'bottom'}>
        <i className={`${className}`} onClick={action} />
    </Tooltip>
}

export default IconButton
