import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';

class SupervisorProgressReports extends Component {
    state = {  } 
    render() { 
        return (
            <div className='contain'>

                        <Container className="mt-2">

                            <div className='d-flex flex-row justify-content-between top-area'>              
                                <h3>Progress Reports</h3>
                                <Form.Group className="mb-3 search-area" controlId="formBasicSearchOrganization">
                                    <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                                    <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                                </Form.Group>
                            </div>

                            <Form className='container'>
                                <div className='d-flex flex-row-reverse'>
                                <Row>
                                    <Form.Group as={Col} sm={{ order: 'last' }} controlId="formGridState">
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            label="Approved Reports"
                                        />
                                    </Form.Group>
                                </Row>
                                </div>   
                            </Form>

                            <div className="table-wrapper-scroll-y my-custom-scrollbar ">
                                    <TableView headers={['Intern Name','Status','Deadline']} list={[['Kamal Deshapriya','Pending to Approve','2023/7/2'],
                                                                                  ['Mamal Anurudda','Pending to Approve','2023/7/2'],
                                                                                  ['Sudam Perera','Pending to Approve','2023/7/2'],
                                                                                  ['Anjana Weerapuran','Pending to Approve','2023/7/2'],
                                                                                  ['Gimahani Kixmal','Pending to Approve','2023/7/2'],
                                                                                ]}>
                                        
                                    </TableView>
                           
                            </div>
                        </Container>
                    </div>
        );
    }
}
 
export default SupervisorProgressReports;