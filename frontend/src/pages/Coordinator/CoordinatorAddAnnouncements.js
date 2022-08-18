import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row } from 'react-bootstrap';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
// import '../../styles/CoordinatorStudentBulkList.css';
// import '../../styles/CoordinatorStudent.css';


class CoordinatorAddAnnouncements extends Component {

    render() {
        return (


            <Container>
                <div className='contain'>
                    <h3>Announcements</h3>
                    <div className='btn-container'>
                        <Button  > All Announcments </Button>
                        <Button > Add Anouncement </Button>

                    </div>
                    <Form>


                        <Row className='align-item-center g-5 mt-2'>
                            <Form.Group className="mb-4  col-sm-4" controlId="formBasicTitle" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title " />
                            </Form.Group>

                            <Form.Group className="mb-4  col-sm-4" controlId="formBasicAudience">
                                <Form.Label>Audience</Form.Label>
                                <Form.Select>
                                    <option value="1">All</option>
                                    <option value="2">Company</option>
                                    <option value="3">Student</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-1" controlId="Textarea">
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter announcement details" rows={5} style={{ width: '65.7%' }} />
                            </Form.Group>
                        </Row>


                        <Row className=' mt-1'>
                            <Form.Group className="mb-3 col-sm-7" controlId="ClearBtnArea">
                                <DashboardButton inside={"Clear"}  ></DashboardButton>

                            </Form.Group>
                            <Form.Group className="mb-3 col-sm-4 float-right" controlId="PostBtnArea">

                                <DashboardButton inside={"Post"} ></DashboardButton>
                            </Form.Group>
                        </Row>


                    </Form>
                </div>
            </Container>


        );



    }


}

export default CoordinatorAddAnnouncements;

