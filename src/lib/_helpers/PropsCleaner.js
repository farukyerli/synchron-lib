// eslint-disable-next-line no-use-before-define
import React from 'react';

const propsCleaner = (Component) =>
    class MakeCounter extends React.Component {
        render() {
            const newProps = { ...this.props };
            delete newProps['thumbnailSize'];
            delete newProps['showDetails'];
            return <Component {...newProps} />;
        }
    };

export default propsCleaner;
