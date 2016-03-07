require('normalize.css');
require('styles/App.css');

import React from 'react';

import {Row, Input} from 'react-materialize';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
        <Row>
          <Input placeholder="Placeholder" s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
        </Row>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
