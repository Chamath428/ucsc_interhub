import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';

import '../../styles/companyManageSuppervisors.css';

class CompanyManageSupervisors extends Component {

    render() {
        return (
            <div className='containsupervisor mt-5 ms-5' style={{width:'90%'}}>
            <Tabs 
                defaultActiveKey="CreateSupervsor"
                className="ManageSupervisorTab"
                fill
            >
                <Tab className="SupervisorTab mt-5" eventKey="CreateSupervsor" title="Create a new supervisor account">
                <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between '>

                            <h3>Create Supervisor</h3> 
                        </div>
                        
                        <Container className="mt-5">
                        <Form className='container'>
                            <Row className="mb-1">
                                <Form.Group as={Col} md controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email Address" />
                                </Form.Group>
                                
                                <Form.Group as={Col} sm controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>   
                            </Row> 
                            <div className='mt-5 SupervisorText'>
                            By clicking on Create Account, system will send an email to the address you entered, allowing the owner of that email to login to the system as a supervisor under your company.
                            </div> 
                            <div className='suppervisorcreate d-flex flex-row-reverse mt-5 mb-1'>
                            <DashboardButton inside='Create Account ->'></DashboardButton>
                            </div>
                        </Form>    
                    
                        </Container>

                    </div>

                </Tab>
                <Tab className="SupervisorTab mt-5" eventKey="ManageSupervisors" title="Manage Supervisors">
            
                    <div className='contain'>
                        <div className='d-flex flex-row mb-4'>

                        <h3>Manage Supervisors</h3>
                        </div> 
                            <Row className='AssignSupervisorSearch g-4'>
                                 <Form.Group as={Col} sm controlId="formBasicSearchOrganization">
                                 <Form.Label className="fw-bold" column sm={10}>Select a Supervisor</Form.Label>   
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                                <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                                <Form.Control column sm={10} className="searchbox" type="searchbox text" placeholder="Search Supervisor" /></div>
                                </Form.Group>
                                <Col className='assignto' sm={2}><h8 >Assign to</h8></Col>
                               
                                <Form.Group as={Col} sm controlId="formBasicSearchOrganization">
                                <Form.Label className="fw-bold" column sm={10}>Select an Intern</Form.Label>  
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                                <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                                <Form.Control column sm={10} className="searchbox" type="searchbox text" placeholder="Search Intern" /></div>
                                </Form.Group>
                            </Row>
                            <div className='suppervisorcreate d-flex flex-row mt-4 mb-4'>      
                            <DashboardButton inside={'Assign->'}></DashboardButton>
                            </div>
                       
                            <h4>Assigned Supervisors</h4>
                            <div className="table-wrapper-scroll-y my-custom-scrollbar-supervisor ">
                                    <TableView headers = {['Name','Job Role','Supervisor']}
                                    list={[['Shanika Jayathunga','Software Engineering','W.D.Warnaweera'],['Jayani Kulasekara','UI/UX Designer','S.E.Nissanka'],['Sameera Kumara','Project Manager','A.Abeweera'],['Binura Jathilake','Business Analyst','W.D.Warnaweera']]}>
                                        
                            </TableView>  
   
                        </div>


                    </div>
                </Tab>
            </Tabs>  
            </div> 
        );
    }
// 
}

export default CompanyManageSupervisors;