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
                className="ManageApplicantTab ms-5 mt-5"
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
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Interview Called</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>Called</option>
                                                    <option>Not Called</option>
                                                </Form.Select>
                                            </Form.Group>  
                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                    <TableView headers = {['Name','Job Role','Respond','Interviews', 'Wishlist']}
                                    list={[['Shanika Jayathunga','Software Engineering','Accepted','Called',<i class="bi bi-bookmark-fill"></i>],['Jayani Kulasekara','UI/UX Designer','Rejected','Called',<i class="bi bi-bookmark-fill"></i>],['Prathiksha Jayakodi','Network Engineer','False','None',<i class="bi bi-bookmark"></i>],['Sameera Kumara','Project Manager','True','None',<i class="bi bi-bookmark-fill"></i>],['Ayodya Ranasinghe','Software Engineering','True','None',<i class="bi bi-bookmark"></i>],['Binura Jathilake','Business Analyst','True','Called',<i class="bi bi-bookmark-fill"></i>]]}>
                                        
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
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Interview Called</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>Called</option>
                                                    <option>Not Called</option>
                                                </Form.Select>
                                            </Form.Group> 

                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <TableView headers = {['Name','Job Role','Respond','Interviews']}
                                    list={[['Shanika Jayathunga','Software Engineering','Accepted','Called'],['Jayani Kulasekara','UI/UX Designer','Rejected','Called'],['Sameera Kumara','Project Manager','True','None'],['Binura Jathilake','Business Analyst','True','Called']]}>
                                        
                            </TableView>  
                        
                        </div>


                    </div>

                </Tab>
                <Tab className="ApplicantTab" eventKey="Selected" title="Selected Students">
            
                    <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                        <h3>Selected Students</h3>
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
                                            
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Job Role</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group> 

                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <TableView headers = {['Name','Job Role','Supervisor']}
                                    list={[['Shanika Jayathunga','Software Engineering','W.D.Warnaweera'],['Jayani Kulasekara','UI/UX Designer','S.E.Nissanka'],['Sameera Kumara','Project Manager','A.Abeweera'],['Binura Jathilake','Business Analyst','W.D.Warnaweera']]}>
                                        
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