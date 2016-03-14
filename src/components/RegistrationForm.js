import React from 'react';
import { connect } from 'react-redux';

import { registration } from '../actions/user';
import {Link} from 'react-router'
import {Form} from 'formsy-react';
import {registrationCanSubmit, registrationSetErrors} from '../actions/user';
import Loader from './Loader';
import Input from './Input';

class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.onValid = this.onValid.bind(this);
        this.onInvalid = this.onInvalid.bind(this);
    }

    componentDidUpdate() {
        let dispatch = this.props.dispatch;

        if (this.props.errors) {
            this.refs.form.updateInputsWithError(this.props.errors);
            dispatch(registrationSetErrors(null));
        }
    }

    render() {
        let loading = this.props.loading;

        return (
            <Form ref="form" className="col s12 m6"
                {...this.props}
                 onValid={this.onValid}
                 onInvalid={this.onInvalid}
                 onValidSubmit={this.submit}>
                <div className='card'>
                    <div className="card-image white-text">
                        <span className="card-title indigo white-text login-header">Registration</span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <Input name='username' id='username' label='User name' required/>
                            <Input type="password" name='password' id='password' label='Password' required />
                            <Input type="password" name='rePassword' id='rePassword' label='Re-type password'
                                   validationErrors={{equalsField:'Passwords must match'}} validations="equalsField:password"/>
                            <Input name='firstName' id='firstName' label='First name' required/>
                            <Input name='lastName' id='lastName' label='Last name' required/>
                            <div className="right-align p-r-10">
                                <button className="pink waves-effect waves-light btn"
                                        disabled={!this.props.canSubmit || loading}>
                                    {!loading ? 'Sign Up' : <Loader size='small'/>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <Link to='/login'>Back to Login</Link>
                    </div>
                </div>
            </Form>
        );
    }

    onValid() {
        this.props.dispatch(registrationCanSubmit(true));
    }

    onInvalid() {
        this.props.dispatch(registrationCanSubmit(false));
    }

    submit(model) {
        let dispatch = this.props.dispatch,
            user = Object.assign({}, model);

        delete user.rePassword;

        dispatch(registration(user));
    }
}


function mapStateToProps(state) {
    return state.get('registrationForm').toJS();
}

export default connect(mapStateToProps)(RegistrationForm);
