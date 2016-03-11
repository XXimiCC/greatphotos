import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/user';
import {Link} from 'react-router'
import Input from './Input';
import {Form} from 'formsy-react';
import {loginCanSubmit, loginResetPassword} from '../actions/user';
import Loader from './Loader';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.onValid = this.onValid.bind(this);
        this.onInvalid = this.onInvalid.bind(this);
    }

    componentDidUpdate() {



    }

    componentDidUpdate() {
        let dispatch = this.props.dispatch;

        if (this.props.resetPassword) {
            this.refs.password.resetValue();
            dispatch(loginResetPassword(false));
        }
        if (this.props.errors) {
            this.refs.form.updateInputsWithError({
                password: this.props.errors
            });
        }
    }

    render() {
        let errors = this.props.errors,
            loading = this.props.loading;

        return (
            <Form ref="form" className="col s12 m6" onValid={this.onValid} onInvalid={this.onInvalid}
                  onValidSubmit={this.submit} {...this.props}>
                <div className='card'>
                    <div className="card-image white-text">
                        <span className="card-title indigo white-text login-header">Login</span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <Input name='username' id='username' label='User name'
                                   validationError='User name is required' required/>
                            <Input showErrors={this.props.errors} ref='password' type='password' name='password' id='password' label='Password' required/>

                            <div className="right-align p-r-10">
                                <button type="submit" className="pink waves-effect waves-light btn"
                                        disabled={!this.props.canSubmit || loading}>
                                    {!loading ? 'Sign In' : <Loader size='small'/>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <Link to='/registration'>REGISTER</Link>
                    </div>
                </div>
            </Form>
        );
    }

    onValid() {
        this.props.dispatch(loginCanSubmit(true));
    }

    onInvalid() {
        this.props.dispatch(loginCanSubmit(false));
    }

    submit() {
        let dispatch = this.props.dispatch,
            formValues = this.refs.form.model,
            {username, password} = formValues;

        dispatch(login(username, password));
    }
}

function mapStateToProps(state) {
    return state.get('loginForm').toJS();
}


export default connect(mapStateToProps)(LoginForm);
