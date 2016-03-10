import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/user';
import {Link} from 'react-router'

class LoginForm extends React.Component {
    render() {
        return (
            <div className="col s12 m6" {...this.props}>
                <div className='card white-text'>
                    <div className="card-image">
                        <span className="card-title indigo white-text login-header">Login</span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input ref="username" id="username" type="text" className="validate" />
                                <label htmlFor="username">User name</label>
                            </div>
                            <div className="input-field col s12">
                                <input ref="password" id="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="right-align login-bnt-wrapper">
                                <button className="pink waves-effect waves-light btn" onClick={this.onClickSignIn.bind(this)}>Sign In</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <Link to='/registration'>REGISTER</Link>
                    </div>
                </div>
            </div>
        );
    }

    onClickSignIn() {
        let dispatch = this.props.dispatch,
            refs = this.refs,
            username = refs.username.value,
            password = refs.password.value;

        dispatch(login(username, password));
    }
}


export default connect()(LoginForm);
