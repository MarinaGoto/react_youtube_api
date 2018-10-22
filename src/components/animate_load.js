import React from 'react';


const AnimateLoad = ({show}) => {
    const componentClasses = ['example-component'];
    if (show) { componentClasses.push('show'); }

    return (
        <div className={componentClasses.join(' ')}>
        </div>
    );
};

AnimateLoad.propTypes = {
    show: React.PropTypes.bool.isRequired
};


export default AnimateLoad;