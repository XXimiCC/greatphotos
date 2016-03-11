import React from 'react';

class Loader extends React.Component {
    render() {
        let size = this.props.size,
            className = `preloader-wrapper active ${size}`;

        return (
            <div className={className}>
                <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;
