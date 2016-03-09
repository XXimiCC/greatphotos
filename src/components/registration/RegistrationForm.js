import React from 'react';
import { connect } from 'react-redux';

import { registration } from '../../actions/user';
import {Link} from 'react-router'

import {
    Col,
    Card,
    Row,
    Input,
    Button,
    CardTitle
} from 'react-materialize';

class RegistrationForm extends React.Component {
    render() {
        return (
            <Col m={6} s={12} {...this.props}>
                <Card textClassName='white-text'
                    header={
                        <CardTitle image="" className="indigo white-text login-header">Registration</CardTitle>
                    }
                    actions={[<Link to='/login'>Back to Login</Link>]}>
                    <Row>
                        <Input ref="login" s={12} label="Username" />
                        <Input ref="password" type="password" label="Password" s={12} />
                        <Input ref="rePassword" type="password" label="Re-type password" s={12} />
                        <Input ref="firstName" s={12} label="First name" />
                        <Input ref="lastName" s={12} label="Last name" />
                        <div className="right-align login-bnt-wrapper">
                            <Button  waves='light' className="pink" onClick={this.onClickSignUp.bind(this)}>Sing Up</Button>
                        </div>
                    </Row>
                </Card>
            </Col>
        );
    }

    onClickSignUp(e) {
        let dispatch = this.props.dispatch,
            refs = this.refs,
            user = {
                login: refs.login,
                password: refs.password,
                firstName: refs.firstName,
                lastName: refs.lastName
            };

        dispatch(registration(user));
    }
}


export default connect()(RegistrationForm);
