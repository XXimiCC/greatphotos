import React from 'react';


//Class for wrap content into display center
class CenterContentWrapper extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className="valign-wrapper full-screen">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CenterContentWrapper;
