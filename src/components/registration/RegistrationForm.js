import React from 'react';
import { connect } from 'react-redux';

import { registration } from '../../actions/user';
import {Link} from 'react-router'

class RegistrationForm extends React.Component {
    render() {
        return (
            <div className="col s12 m6" {...this.props}>
                <div className='white-text card'>
                    <div className="card-image">
                        <span className="card-title indigo white-text login-header">Registration</span>
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
                            <div className="input-field col s12">
                                <input ref="password" id="rePassword" type="password" className="validate" />
                                <label htmlFor="rePassword">Re-type password</label>
                            </div>
                            <div className="input-field col s12">
                                <input ref="firstName" id="firstName" type="text" className="validate" />
                                <label htmlFor="firstName">First name</label>
                            </div>
                            <div className="input-field col s12">
                                <input ref="lastName" id="lastName" type="text" className="validate" />
                                <label htmlFor="lastName">Last name</label>
                            </div>
                            <div className="right-align login-bnt-wrapper">
                                <button  className="pink waves-effect waves-light btn" onClick={this.onClickSignUp.bind(this)}>Sing Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <Link to='/login'>Back to Login</Link>
                    </div>
                </div>
            </div>
        );
    }

    onClickSignUp() {
        let dispatch = this.props.dispatch,
            refs = this.refs,
            user = {
                username: refs.username.value,
                password: refs.password.value,
                firstName: refs.firstName.value,
                lastName: refs.lastName.value
            };

        dispatch(registration(user));
    }
}


function select(state) {
    return {
        user: state.get('user').toJS()
    }
}

export default connect(select)(RegistrationForm);
