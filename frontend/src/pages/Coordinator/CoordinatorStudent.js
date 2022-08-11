import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css';

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
                        <Row className='align-items-baseline flex justify-content-between'>
                            <Form.Group className="col col-sm-1">
                                <Form.Label className='btn-label'><b>Course</b></Form.Label>
                            </Form.Group>
                            <Form.Group className="col col-sm-2 me-5">
                                <Form.Select>
                                    <option value="1">CS and IS</option>
                                    <option value="2">CS</option>
                                    <option value="3">IS </option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="col col-sm-1">
                                <Form.Label className='btn-label'><b>Company</b></Form.Label>
                            </Form.Group>
                            <Form.Group className="col col-sm-3 me-5"><Form.Select>
                                <option value="1">ALL</option>
                                {/* <option value="2">IS</option>
                       <option value="3">CS and IS</option> */}
                            </Form.Select></Form.Group>


                            <Form.Group className="col col-sm-1">
                                <Form.Label className='btn-label'><b>Sort By</b></Form.Label>
                            </Form.Group>
                            <Form.Group className="col col-sm-2"><Form.Select>
                                <option value="1">Index Number</option>
                                <option value="2">Name</option>
                                <option value="3">Company</option>
                                <option value="4">GPA</option>
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