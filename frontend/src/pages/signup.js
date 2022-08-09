import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/Signup.css';
import PrimaryButton from '../component/homepage/PrimaryButton/primaryButtonClass';

function Signup() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

  return (
<Container className="shadow p-4 bg-body rounded form-container">

    <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Row className="justify-content-md-between">
            <h2>Register as an Organizations/Company</h2>
            <Col lg={6} className="mt-5">
                <h4 className='mb-4'>Details of the Company</h4>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Organization/Company Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                        <Form.Label>Date of Stablishment</Form.Label>
                        <Form.Control
                            required
                            type="date"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the date of stablishment.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Company Registration Number</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the registration number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                        <Form.Label>Current Address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the current address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Telephone Number</Form.Label>
                        <Form.Control
                            required
                            type="number"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the telephone number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                    <Form.Label>Fax Number</Form.Label>
                    <Form.Control
                        type="text"
                    />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                    <Form.Label>Partners (If any)</Form.Label>
                    <Form.Control
                        type="text"
                    />
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                    <Form.Label>Clients (Optional)</Form.Label>
                    <Form.Control
                        type="text"
                    />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Company Website Link</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the website link.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3">
                    <Form.Group as={Col} xl="12" className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Organization/Company Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>

            </Col>

            <Col lg={6} className="mt-5">

                <Row className="mb-4">
                    <h4 className='mb-4'>Details of the Main Contact</h4>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Name of the primary contact</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the primary contact name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Telephone No (Landline)</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the telephone number (Landline).
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Telephone No (Mobile)</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the Telephone No (Mobile).
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                </Row>

                <Row>
                    <h4 className='mb-4'>Employee Hierarchy</h4>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Number of Employees</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the number of employees.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Number of Project Managers</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the number of project managers.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Number of Tech Leads</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the number of tech leads.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} xl="12" controlId="validationCustom01">
                            <Form.Label className="fw-bold">Specify whether the company/organization has been offered industry placement for any other universities/educational institutes before. </Form.Label>
                            {[ 'radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3 float-end">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    checked
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                            ))}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3" >
                        <div className='d-flex flex-row-reverse'>
                            <PrimaryButton inside={'Submit'}></PrimaryButton>
                        </div>
                    </Row>

                </Row>
            </Col>
        </Row>

        </Form>

    </Container>
  );
}

export default Signup;