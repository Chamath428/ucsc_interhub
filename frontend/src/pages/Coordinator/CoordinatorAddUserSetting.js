import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row } from 'react-bootstrap';
// import '../../styles/CoordinatorStudentBulkList.css';
// import '../../styles/CoordinatorStudent.css';


class CoordinatorAddUserSetting extends Component {

    render() {
        return (


            <Container>
                <div className='contain'>

                    <div className='btn-container'>
                        <Button  > All Users</Button>
                        <Button > Add Users </Button>

                    </div>
                    <Form>
                        <h3>Add System Users</h3>

                        <Row className='align-item-center g-5'>

                            <Form.Group className="mb-4 col col-sm-3" controlId="formBasicAccount">
                                <Form.Label>Account Types</Form.Label>
                                <Form.Select>
                                    <option value="1">Staff Member</option>
                                    <option value="2">Coordinator</option>
                                    <option value="3">Student</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className='align-item-center g-5'>
                            <Form.Group className="mb-4 col col-sm-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email address" />
                            </Form.Group>
                            <Form.Group className="mb-4 ms-4 col col-sm-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name " />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-4 col col-sm-6">

                            <p>By clicking on Create Account, system will send an email to the address you entered, allowing the owner of that email to login to the system as a supervisor under your company</p>
                        </Form.Group>
                        <Button className="btn-setvisit mt-4 mb-4 m-1 ml-0 col-sm-3" variant="primary" type="submit">
                            Reset
                        </Button>
                        <Button className="btn-setvisit mt-4 mb-4 m-1 col-sm-3 " variant="primary" type="submit">
                        Create account  <i class="bi bi-arrow-right"></i>
                        </Button>
                    </Form>
                </div>
            </Container>


        );



    }


}

export default CoordinatorAddUserSetting;

