import React from 'react';

interface IButton {
    action: () => void
    className?: string;
    title?: string;
    position?: 'bottom' | 'left' | 'right' | 'top'
    visible?: boolean;
    content?: string;
    component?: any;
}

const IconButton = (props: IButton) => {
    const { action, className = '', visible = true, content, component } = props;
    return visible === true
        ? <section onClick={action} >
            {component || <i className={`${className}`} >{content && <span>{content}</span>}</i>}
        </section>
        : <></>

}

export default IconButton
