import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css';
import Col from 'react-bootstrap/Col';

import { Row } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';



class CoordinatorStudent extends Component {

    render() {
        return (



            <div className='contain'>
                <h3>Manage Students</h3>

                <div className='d-flex flex-row justify-content-sm-between'>

                    <div className='btn-container'>
                        <Button  > View </Button>
                        <Button > Add New students </Button>

                    </div>

                    <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                        <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                            <div className='searchico text-center p-2'><i className="bi bi-search"></i></div>
                            <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                    </Form.Group>
                </div>
                <Container className="mt-2">
                    <Form className='container'>
                        <Row className="mb-3">
                            <Form.Group as={Col} md controlId="formGridState">
                                <Form.Label className="fw-bold" column sm={2}>Course</Form.Label>
                                <Form.Select sm={10} defaultValue="Choose...">
                                    <option>CS and IS</option>
                                    <option>CS</option>
                                    <option>IS</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} sm controlId="formGridState">
                                <Form.Label className="fw-bold" column sm={2}>Enrolled</Form.Label>
                                <Form.Select sm={10} defaultValue="Choose...">
                                    <option>All</option>
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} sm controlId="formGridState">
                                <Form.Label className="fw-bold" column sm={2}>Sort By</Form.Label>
                                <Form.Select sm={10} defaultValue="Choose...">
                                    <option>Index Number</option>
                                    <option>Name</option>
                                    <option>Company</option>
                                    <option>GPA</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form>

                </Container>

                <div class="table-wrapper-scroll-y table-scrollba ">
                    <TableView>

                    </TableView>

                </div>


            </div>


        );
    }

}

export default CoordinatorStudent;