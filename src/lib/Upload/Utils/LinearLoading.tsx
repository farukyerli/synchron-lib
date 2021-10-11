import React from 'react';
import type { ILinearLoading } from '../types';
import '../../_styles/LinearLoading.scss'

const LinearLoading = (props: ILinearLoading) => {
    const { ratio = 30, backgroundColor = '#fff', foregroundColor = '#1a908d' } = props;
    return (
        <div className="LinearLoading" style={{ backgroundColor }}>
            <div className={`percent ${props?.className || ''}`}>{props.uploadingText || 'Uploading'}</div>
            <div className={`bar`} style={{ width: `${ratio * 100}%`, backgroundColor: foregroundColor }}></div>
        </div>
    )
};
export default LinearLoading
