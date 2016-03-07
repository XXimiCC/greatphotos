import React from 'react';

import {Row} from 'react-materialize';

class CenterContentWrapper extends React.Component {
    render() {
        return (
            <Row>
                <div className="valign-wrapper full-screen">
                    {this.props.children}
                </div>
            </Row>
        );
    }
}

export default CenterContentWrapper;
