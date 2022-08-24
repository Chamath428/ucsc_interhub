import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import { URL } from '../URL';
import { useState } from 'react';
import axios from 'axios';

import '../../styles/companyManageSuppervisors.css';


const CompanyManageSupervisors = () => {

        const[email,setEmail] = useState("");
        const[name,setName]=useState("");
        const [show, setShow] = useState(false);
        const [alertPara,setAlertPara] = useState("Supervisor added successfully!");
        const [variant,setVariant] = useState("success");

        const createSupervisor = (event)=>{
            event.preventDefault();
            axios.post(`${URL}/supervisor/create`,{
                email:email,
                name:name,
                company_id:39
            }).then((response)=>{showAlert(response)}).catch(function (error) {
                if (error.response) {
                  setAlertPara("Something went wrong when creating the supervisor!");
                  setVariant("danger");
                  setShow(true);
                }})
        }

        const showAlert=(response)=>{
            setAlertPara("Supervisor added successfully!");
            setVariant("success");
            setShow(true);
           }

        return (
            <div className='containsupervisor mt-5 ms-5' style={{width:'90%'}}>
            <Tabs 
                defaultActiveKey="CreateSupervsor"
                className="ManageSupervisorTab"
                fill
            >
                <Tab className="SupervisorTab mt-5" eventKey="CreateSupervsor" title="Create a New Supervisor Account">
                <div className='contain-supervisor1'>
                        <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>{alertPara}</Alert.Heading>
                        </Alert>
                        <div className='d-flex flex-row justify-content-sm-between '>
                            <h3>Create Supervisor</h3> 
                        </div>
                        
                        <Container className="mt-5">
                        <Form className='container' onSubmit = {createSupervisor}>
                            <Row className="mb-1">
                                <Form.Group as={Col} md controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>Email Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email Address" onChange={(event)=>{setEmail(event.target.value)}} />
                                </Form.Group>
                                <Col className='assignto' sm={2}></Col>
                                <Form.Group as={Col} sm controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5} >Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>{setName(event.target.value)}}/>
                                </Form.Group>   
                            </Row> 
                            <div className='mt-5 SupervisorText'>
                            By clicking on Create Account, system will send an email to the address you entered, allowing the owner of that email to login to the system as a supervisor under your company.
                            </div> 
                            <div className='suppervisorcreate d-flex flex-row-reverse mt-5 mb-1'>
                            <DashboardButton inside='+ Create Account'></DashboardButton>
                            </div>
                        </Form>    
                    
                        </Container>

                    </div>

                </Tab>
                <Tab className="SupervisorTab mt-5" eventKey="ManageSupervisors" title="Manage Supervisors">
            
                    <div className='contain-supervisor2'>
                        <div className='d-flex flex-row mb-5'>

                        <h3>Manage Supervisors</h3>
                        </div> 
                        <div className='ms-3 me-3'>
                            <Row className='AssignSupervisorSearch g-4'>
                                 <Form.Group as={Col} sm controlId="formBasicSearchOrganization">
                                 <Form.Label className="fw-bold" column sm={8}>Select a Supervisor</Form.Label>   
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                                <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                                <Form.Control column sm={8} className="searchbox" type="searchbox text" placeholder="Search Supervisor" /></div>
                                </Form.Group>
                                <Col className='assignto' sm={2}></Col>
                                {/* <Col className='assignto' sm={2}><h8 >Assign to</h8></Col> */}
                               
                                <Form.Group as={Col} sm controlId="formBasicSearchOrganization">
                                <Form.Label className="fw-bold" column sm={8}>Select an Intern</Form.Label>  
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                                <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                                <Form.Control column sm={8} className="searchbox" type="searchbox text" placeholder="Search Intern" /></div>
                                </Form.Group>
                            </Row>
                            <div className='suppervisorcreate d-flex flex-row-reverse mt-4 mb-4'>      
                            <DashboardButton inside={'Assign'}></DashboardButton>
                            </div>
                       
                            <h4>Assigned Supervisors</h4>
                            <div className="table-wrapper-scroll-y my-custom-scrollbar-supervisor ">
                                    <TableView headers = {['Name','Job Role','Supervisor']}
                                    list={[['Shanika Jayathunga','Software Engineering','W.D.Warnaweera'],['Jayani Kulasekara','UI/UX Designer','S.E.Nissanka'],['Sameera Kumara','Project Manager','A.Abeweera'],['Binura Jathilake','Business Analyst','W.D.Warnaweera']]}>
                                        
                            </TableView>  
   
                        </div>
                        </div>

                    </div>
                </Tab>
            </Tabs>  
            </div> 
        );
    }

export default CompanyManageSupervisors;