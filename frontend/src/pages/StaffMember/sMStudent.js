import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';

import '../../styles/sMStudent.css';


class StaffMemberStudents extends Component {

    render() {
        return (
            <div className='contain'>
                <div className='d-flex flex-row justify-content-sm-between '>

                    <h3>Manage Students</h3> 
                </div>
                <div className='d-flex flex-row-reverse mb-3'>
                    <DashboardButton inside={'+ Add Student'}></DashboardButton>
                </div>
                <Container className="mt-2">
                <Form className='container'>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Course</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>CS and IS</option>
                                            <option>CS</option>
                                            <option>IS</option>
                                        </Form.Select>
                                    </Form.Group>
                                    
                                    <Form.Group as={Col} sm controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Entrolled</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>All</option>
                                            <option>Selected</option>
                                            <option>Not Selected</option>
                                        </Form.Select>
                                    </Form.Group>   

                                    <Form.Group as={Col} sm controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                        <option value="1">Index Number</option>
                                        <option value="2">Name</option>
                                        <option value="3">Company</option>
                                        
                                        </Form.Select>
                                    </Form.Group>
                                </Row>   
                            </Form>    
               
                </Container>

                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <TableView headers = {['Index No','Name','CV','Interviews','Company']}
                            list={[['190020432','Shanika Jayathunga','True','None','LSEG'],['190020532','Jayani Kulasekara','True','called','Avonet Technologies'],['190030423','Prathiksha Jayakodi','False','None','WSO2'],['190020455','Sameera Kumara','True','None','Dialog Axiata'],['190027632','Ayodya Ranasinghe','True','None','99X'],['190020444','Binura Jathilake','True','called','LSEG']]}>
                                
                            </TableView>
                   
                </div>


            </div>

        );
    }
// 
}

export default StaffMemberStudents;