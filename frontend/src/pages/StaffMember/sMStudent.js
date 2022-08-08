import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';

// import '../../styles/sMStudent.css';


class StaffMemberStudents extends Component {

    render() {
        return (
            <div className='contain'>
                <div className='d-flex flex-row justify-content-sm-between'>

                <h3>Students</h3>
                <Button className='addstudent'>+ Add Student</Button>
                </div>
                <Container className="mt-2">
                <Form className='container'>
                <Row className='align-items-baseline flex justify-content-between'>
                    <Form.Group  className="col col-sm-1">
                        <Form.Label className='btn-label'><b>Course</b></Form.Label>
                    </Form.Group>
                    <Form.Group  className="col col-sm-2 me-5">
                        <Form.Select>
                            <option value="1">CS and IS</option>
                            <option value="2">CS</option>
                            <option value="3">IS </option>
                        </Form.Select>
                    </Form.Group>
                   
                    <Form.Group  className="col col-sm-1">
                        <Form.Label className='btn-label'><b>Company</b></Form.Label>
                    </Form.Group>
                        <Form.Group  className="col col-sm-3 me-5"><Form.Select>
                            <option value="1">ALL</option>
                            {/* <option value="2">IS</option>
                            <option value="3">CS and IS</option> */}
                        </Form.Select></Form.Group>
                   
                    
                    <Form.Group  className="col col-sm-1">
                        <Form.Label className='btn-label'><b>Sort By</b></Form.Label>
                    </Form.Group>
                    <Form.Group  className="col col-sm-2"><Form.Select>
                            <option value="1">Index Number</option>
                            <option value="2">Name</option>
                            <option value="3">Company</option>
                            <option value="4">GPA</option>
                        </Form.Select>
                    </Form.Group>
                        </Row>   
                </Form>
                </Container>

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <TableView>
                                
                            </TableView>
                   
                </div>


            </div>

        );
    }
// 
}

export default StaffMemberStudents;