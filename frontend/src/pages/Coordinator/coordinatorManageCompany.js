import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col,FormGroup,Button } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


import '../../styles/sMCompany.css';    

class CoordinatorManageCompany extends Component {

    render() {
        return (
            <div className='containcompany mt-5 ms-5'style={{width:'90%'}}>
            <Tabs 
                defaultActiveKey="RegisteredCompany"
                className="ManageCompanyTab"
                fill
            >
                <Tab className="CompanyTab mt-5" eventKey="RegisteredCompany" title="Registered Comapanies">
                <div className='contain1'>
                <div className='d-flex flex-row justify-content-sm-between'>

                <h3>Registered Organizations</h3>
                
                <Form.Group className="mt-3 mb-3" controlId="formBasicSearchOrganization">
                 <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                 <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                 <Form.Control className="searchbox" type="searchbox text" placeholder="Search organization" /></div>
                </Form.Group>
                </div>
                

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                    <TableView headers = {['Company','Contact No','Company Registration Number']}
                            list={[['WSO2','0114-222642','8342132'],['99x','0114-432345','7895421'],['LSEG','0112-212321','6543211'],['Avonet-Technologies','0112-123987','8435232'],['CiscoLab','0114-222611','8222132'],['Dialog-Axiata','0113-443245','8895421'],['IFS','0112-542321','7543211'],['Virtusa','0112-663987','8835132']]}>
                              
                                
                    </TableView>
                   
                </div>
                </div>

            </Tab>
            <Tab className="CompanyTab mt-5" eventKey="Pending Companies" title="Pending Companies">
            
            <div className='contain1'>
                <div className='d-flex flex-row justify-content-sm-between'>

                <h3>New Organizations</h3>
                
               <Form.Group className="mt-3 mb-3" controlId="formBasicSearchOrganization">
                 <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                 <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                 <Form.Control className="searchbox" type="searchbox text" placeholder="Search organization" /></div>
                </Form.Group>
                </div>
                

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                    <TableView headers = {['Company','Contact No','Company Registration Number']}
                    list={[['Ntrylab','0114-560642','8453212'],['Xempler','0112-234322','8433215'],['JavaLab','0113-234321','8223212'],['KriatWeb','0112-123987','2345321']]}>
                        
                        
                    </TableView>
                   
                </div>
            </div>
            </Tab>
            <Tab className="CompanyTab mt-5" eventKey="CompanyVisit" title="Company Visit">
            
            <div className='contain'>
                        {/* <div className='d-flex flex-row justify-content-sm-between '> */}

                            <h3>Scheduled Company Visits</h3> 
                        {/* </div> */}
                        <div className='addcompanyvisit d-flex flex-row-reverse mb-1'>

                        <Nav.Link as={Link} to="/Staff/Schedule-Company-Visit"> <DashboardButton inside={'+ Schedule Company Visit'}></DashboardButton></Nav.Link>

                        </div>
                        <Container className="mt-2">
                        <Form className='container'>
                                        <Row className="mb-1">
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Visit Type</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>Online</option>
                                                    <option>Onsite</option>
                                                </Form.Select>
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Visited</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>Visited</option>
                                                    <option>Not Visited</option>
                                                </Form.Select>
                                            </Form.Group>   

                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                <option value="1">Date</option>
                                                <option value="2">Company</option>
                                                
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                    <TableView headers = {['Company','Date','Time','Visit Type','Visited']}
                                    list={[['LSEG','2022/07/03','09.00a.m.','Onsite','Yes'],['Avonet Technologies','2022/07/06','02.00a.m.','Onsite','Yes'],['WSO2','2022/07/07','09.00a.m.','Online','Yes'],['Dialog Axiata','2022/07/07','11.00a.m.','Onsine','No'],['99X','2022/07/07','11.00a.m.','Online','No']]}>
                                        
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

export default CoordinatorManageCompany;