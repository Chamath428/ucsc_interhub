import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';

import '../../styles/supervisorAssignInterns.css';

class SupervisorAssignInterns extends Component {
    state = {  } 
    render() { 
        return (
                    <div className='contain'>

                        <Container className="mt-2">

                            <div className='d-flex flex-row justify-content-between top-area'>              
                                <h3>Assigned Interns</h3>
                                <Form.Group className="mb-3 search-area" controlId="formBasicSearchOrganization">
                                    <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                                    <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                                </Form.Group>
                            </div>

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
                                        <Form.Label className="fw-bold" column sm={2}>State</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>   

                                    <Form.Group as={Col} sm controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={2}>State</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>   
                            </Form>

                            <div className="table-wrapper-scroll-y my-custom-scrollbar ">
                                    <TableView headers={['Name','Course']} list={[['Kamal Deshapriya','CS'],
                                                                                  ['Mamal Anurudda','CS'],
                                                                                  ['Sudam Perera','CS'],
                                                                                  ['Anjana Weerapuran','IS'],
                                                                                  ['Gimahani Kixmal','IS'],
                                                                                ]}>
                                        
                                    </TableView>
                           
                            </div>

                        </Container>
                    </div>
        );
    }
}
 
export default SupervisorAssignInterns;