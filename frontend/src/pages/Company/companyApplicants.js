import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';

import '../../styles/companyApplicant.css';    

class CompanyApplicants extends Component {

    render() {
        return (
            <Tabs 
                defaultActiveKey="AllApplicants"
                className="ApplicantTab ms-5 mt-5"
                fill
            >
                <Tab className="ApplicantTab" eventKey="AllApplicants" title="All Applicants">
                <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between '>

                            <h3>Applicants</h3> 
                        </div>
                        <Container className="mt-2">
                        <Form className='container'>
                                        <Row className="mb-1">
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Course</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>CS and IS</option>
                                                    <option>CS</option>
                                                    <option>IS</option>
                                                </Form.Select>
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Job Role</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group> 

                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                <option value="1">GPA</option>
                                                <option value="2">Name</option>
                                                
                                                
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                    <TableView headers = {['Name','Respond','Message', 'Wishlist']}
                                    list={[['Shanika Jayathunga','Accepted','Called'],['Jayani Kulasekara','Rejected','called'],['Prathiksha Jayakodi','False','None'],['Sameera Kumara','True','None'],['Ayodya Ranasinghe','True','None'],['Binura Jathilake','True','called']]}>
                                        
                                    </TableView>                       
                        </div>
                    </div>

                </Tab>
                <Tab className="ApplicantTab" eventKey="WishList" title="Wish List">
                <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between '>

                            <h3>Applicants</h3> 
                        </div>
                        <Container className="mt-2">
                        <Form className='container'>
                                        <Row className="mb-1">
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Course</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>CS and IS</option>
                                                    <option>CS</option>
                                                    <option>IS</option>
                                                </Form.Select>
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Job Role</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group> 

                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                <option value="1">GPA</option>
                                                <option value="2">Name</option>
                                                
                                                
                                                </Form.Select>
                                            </Form.Group>
                                            
                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                    <TableView headers = {['Name','Respond','Message']}
                                    list={[['Shanika Jayathunga','Accepted','Called'],['Jayani Kulasekara','Rejected','called'],['Prathiksha Jayakodi','False','None'],['Sameera Kumara','True','None'],['Ayodya Ranasinghe','True','None'],['Binura Jathilake','True','called']]}>
                                        
                                    </TableView>
                        
                        </div>


                    </div>

                </Tab>
                <Tab className="ApplicantTab" eventKey="Selected" title="Selected Students">
            
                    <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                        <h3>Students Selections</h3>
                        </div> 
                        <div className='d-flex flex-row-reverse mb-1'>
                        <Form.Group className="mb-1" controlId="formBasicSearchOrganization">
                        <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                        <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                        <Form.Control className="searchbox" type="searchbox text" placeholder="Search Student" /></div>
                        </Form.Group>
                        </div>
                        <Container className="mt-2">
                        <Form className='container'>
                                        <Row className="mb-1">
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Course</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>CS and IS</option>
                                                    <option>CS</option>
                                                    <option>IS</option>
                                                </Form.Select>
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Company</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>   

                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                <option value="1">Index Number</option>
                                                <option value="2">Name</option>
                                                <option value="3">Company</option>
                                                <option value="4">GPA</option>
                                                
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar ">
                                    <TableView                            
                                    headers = {['Index No','Name','Compnay Selected For','GPA']}
                                    list={[['190020432','Shanika Jayathunga','LSEG','3.3232'],['190020532','Jayani Kulasekara','Avonet Technologies','3.0231'],['190030423','Prathiksha Jayakodi','WSO2','3.8503'],['190020455','Sameera Kumara','Dialog Axiata','2.3456'],['190027632','Ayodya Ranasinghe','99X','2.9998'],['190020444','Binura Jathilake','LSEG','3.5674']]}>
                                        
                                    </TableView>
   
                        </div>


                    </div>
                </Tab>
            </Tabs>   
        );
    }
// 
}

export default CompanyApplicants;