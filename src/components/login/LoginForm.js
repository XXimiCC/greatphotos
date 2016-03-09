import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/user';
import {Link} from 'react-router'

import {
    Col,
    Card,
    Row,
    Input,
    Button,
    CardTitle
} from 'react-materialize';

class LoginForm extends React.Component {
    render() {


        return (
            <Col m={6} s={12} {...this.props}>
                <Card textClassName='white-text'
                    header={
                        <CardTitle image="" className="indigo white-text login-header">Login</CardTitle>
                    }
                    actions={[<Link to='/registration'>REGISTER</Link>]}>
                    <Row>
                        <Input ref="username" s={12} label="User name" />
                        <Input ref="password" type="password" label="Password" s={12} />
                        <div className="right-align login-bnt-wrapper">
                            <Button  waves='light' className="pink" onClick={this.onClickSignIn.bind(this)}>Sign In</Button>
                        </div>
                    </Row>
                </Card>
            </Col>

        );
    }

    onClickSignIn(e) {
        let dispatch = this.props.dispatch,
            {username, password} = this.refs;

        dispatch(login(username, password));
    }
}


export default connect()(LoginForm);
