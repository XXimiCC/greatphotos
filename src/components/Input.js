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
        wrapperClassName: React.PropTypes.string,
        /** Force error output **/
        showErrors: React.PropTypes.bool
    },


    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue(event) {
        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    },
    render() {
        const errorMessage = this.getErrorMessage();

        let className = (this.props.className || ' ') + (this.props.className || ' ') +
            (this.showRequired() ? 'required' : (this.showError() && !this.isPristine()) ? 'invalid' : '');

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
                <label htmlFor={this.props.id} data-error={errorMessage}>{this.props.label}</label>
            </div>
        );
    }
});

export default Input;