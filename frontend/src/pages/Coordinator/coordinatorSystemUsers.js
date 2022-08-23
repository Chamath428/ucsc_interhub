import React, { Component } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row,Col,Button } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { URL } from '../URL';

import '../../styles/coordinatorSystemUser.css';    

const CoordinatorSystemUsers = () => {

        const[role,setRole]=useState(1);
        const[email,setEmail]=useState("");
        const[first_name,setFirstName]=useState("");
        const[last_name,setLastName]=useState("");
        const [show, setShow] = useState(false);
        const [alertPara,setAlertPara] = useState("User added Successfully!");
        const [variant,setVariant] = useState("success");

        const createStaffMember = (event) =>{
            event.preventDefault();
            axios.post(`${URL}/staffMember/create`,{
                email_address:email,
                first_name:first_name,
                last_name:last_name,
                role:parseInt(role)
            }).then((response)=>{showAlert(response)}).catch(function (error) {
                if (error.response) {
                  setAlertPara("Something went wrong when creating the user!");
                  setVariant("danger");
                  setShow(true);
                }})
        }

        const showAlert=(response)=>{
            setAlertPara("User added Successfully!");
            setVariant("success");
            setShow(true);
           }

        return (
            <div className='containsystemusers mt-5 ms-5' style={{width:'90%'}}>
            <Tabs 
                defaultActiveKey="AllUsers"
                className="SystemUsersTab"
                fill
            >
                <Tab className="SystemUsers mt-5" eventKey="AllUsers" title="All Users">
                <div className='systemusercontain'>

                <h3>System Users</h3>
                <div className='d-flex flex-row-reverse mb-3'>
                    <Form.Group className="mb-1" controlId="formBasicSearchOrganization">
                    <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search Students" /></div>
                    </Form.Group>
                </div>
                <div class="table-wrapper-scroll-y .myscrollbarsystemuser ">
                    <TableView headers={['Name', 'Position', 'Is Active']}
                        list={[['Chamath Chinthana', 'Corrdinator', 'Active'], ['Thilina Madusanka', 'Staff Memner', 'Active'], [ 'Prathiksha Jayakodi', 'Staff Memner', 'Active'], [ 'Sameera Kumara', 'Corrdinator', 'Not Active'], [ 'Ayodya Ranasinghe', 'Corrdinator', 'Not Active'], [ 'Binura Jathilake', 'Staff Memner', 'Active']]}>

                    </TableView>

                </div>


            </div>

                </Tab>
                <Tab className="SystemUsers mt-5" eventKey="AddUsers" title="Add Users">
            
                <div className='addusercontain'>
                <div className='SystemUserLeft'>

                <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{alertPara}</Alert.Heading>
                </Alert>
                    
                <Form onSubmit={createStaffMember}>
                    <h3>Add System Users</h3>

                    <Row className='align-item-center mt-3 g-5 mb-5'>

                        <Form.Group  as={Col} md="6" controlId="formBasicAccount">
                            <Form.Label>Account Types</Form.Label>
                            <Form.Select onChange={(event)=>{setRole(event.target.value)}}>
                                <option value="1">Staff Member</option>
                                <option value="2">Coordinator</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group  as={Col} md="6" controlId="formBasicEmail" onChange={(event)=>{setEmail(event.target.value)}}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email Address" />
                        </Form.Group>

                    </Row>
                    <Row className='align-item-center g-5 mb-5'>
                        <Form.Group  as={Col} md="6" controlId="formBasicEmail" onChange={(event)=>{setFirstName(event.target.value)}}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group  as={Col} md="6" controlId="formBasicName" onChange={(event)=>{setLastName(event.target.value)}}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name " />
                        </Form.Group>
                    </Row>

                    <Form.Group>

                        <p>By clicking on Create Account, system will send an email to the address you entered, allowing the owner of that email to login to the system as a supervisor under your company</p>
                    </Form.Group>

                    <div className='d-flex flex-row-reverse mb-3'>
                        <DashboardButton inside={"+ Create account" } ></DashboardButton>
                    </div>

                </Form>


                </div>
                <div className='SystemUserRight mt-5 ms-5 ps-5'>
                    <Row className='mb-5 mt-5'>
                    
                        <InfoCard title={"No of Active Staff Memners"} count={"27"} icon={"people-fill"} cardWidth={12}></InfoCard>
                    </Row>
                    <Row className='mb-5'>
                        <InfoCard title={"No of Active Coordinators"} count={"15"} icon={"people-fill"} cardWidth={12}></InfoCard>
                    </Row>
                    

                    </div>
                </div>
                </Tab>
            </Tabs>
            </div>   
        );
}

export default CoordinatorSystemUsers;