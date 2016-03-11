import React from 'react';
import Formsy from 'formsy-react';


const Input = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        type: React.PropTypes.oneOf([
            'text',
            'email',
            'password',
            'date',
            'range',
            'number',
            'url',
            'checkbox',
            'radio'
        ]),
        wrapperClassName: React.PropTypes.string
    },


    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue(event) {
        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    },
    render() {

        // Set a specific className based on the validation
        // state of this component. showRequired() is true
        // when the value is empty and the required prop is
        // passed to the input. showError() is true when the
        // value typed is invalid

        let className = 'validate ' + (this.props.className || ' ') + ((this.showError() || (this.props.showErrors && this.isPristine())) ? 'invalid' : '');

        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        const errorMessage = this.getErrorMessage();

        return (
            <div className={this.props.wrapperClassName || 'input-field col s12'}>
                <input
                    type={this.props.type || 'text'}
                    name={this.props.name}
                    onChange={this.changeValue}
                    value={this.getValue()}
                    checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
                    className={className}
                    id={this.props.id}
                    />
                <label htmlFor={this.props.id} data-error={errorMessage || 'wrong'}>{this.props.label}</label>
            </div>
        );
    }
});

export default Input;