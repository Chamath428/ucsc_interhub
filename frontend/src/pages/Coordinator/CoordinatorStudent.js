import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css'


class CoordinatorStudent extends Component {

    render() {
        return (
            <div className='contain'>

                <h3>Manage Students</h3>
                <div className='btn-container'>
                    <Button > View </Button>
                    <Button > Add bulk students </Button>
                    <Button > Evaluation </Button>
                </div>
                <div className='dropdown-container'>
                    <div className='dropdown1'>          
                        <label className='btn-label'>Course</label>
                        <Form.Select>
                            <option value="1">CS and IS</option>
                            <option value="2">CS</option>
                            <option value="3">IS </option>
                        </Form.Select>
                    </div>
                    <div className='dropdown2'>
                        <label className='btn-label'>Enrolled</label>
                        <Form.Select>
                            <option value="1">ALL</option>
                            <option value="2">IS</option>
                            <option value="3">CS and IS</option>
                        </Form.Select>
                    </div>
                </div>
            </div>

        );
    }

}

export default CoordinatorStudent;