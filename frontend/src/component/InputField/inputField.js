import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import "./inputField.css";



class InputField extends Component {
    render() {

        const label = this.props.label;
        const value = this.props.value;
        return (
            // <div>
            //     <label className='label-field'>Course</label>
            //     <input className="input-field" type="text" value="initial value" />
            // </div>
            <Form.Group className="input-field-main" controlId="formBasicIndexNumber">
                <Form.Label>{label}</Form.Label>
                <Form.Control type="text" disabled value={value} />
            </Form.Group>
        );
    }
}

export default InputField;