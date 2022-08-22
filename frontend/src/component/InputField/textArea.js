import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import "./inputField.css";



class TextArea extends Component {
    render() {

        const label = this.props.label;
        const value = this.props.value;
        return (
            // <div>
            //     <label className='label-field'>Course</label>
            //     <input className="input-field" type="text" value="initial value" />
            // </div>
            <Form.Group className="text-area-main" controlId="formBasicIndexNumber">
                <Form.Label>{label}</Form.Label>

                <Form.Control as="textarea"  disabled value={value} rows={5} className="text-area-body" />
            </Form.Group>
        );
    }
}

export default TextArea;


