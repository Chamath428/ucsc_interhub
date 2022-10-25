import React, { Component, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col, FormGroup, Button } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { URL } from '../URL';
import { callServer } from '../authServer';

import '../../styles/sMCompany.css';
import SMCompanyVisitDetails from './sMCompanyVisitDetails';


const StaffMemberManageCompany = () => {


    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [activeRegisteredCompanyList, setActiveRegisteredCompanyList] = useState([]);
    const [inactiveRegisteredCompanyList, setInactiveRegisteredCompanyList] = useState([]);
    const [pendingCompanyList, setPendingCompanyList] = useState([]);
    const [companyVisitList, setCompanyVisitList] = useState([]);


    useEffect(() => {

        const authRequestActiveRegistered = {
            "method": "post",
            "url": "staffMember/ActiveRegisteredCompany",
            "data": {}
        }

        callServer(authRequestActiveRegistered).then((response) => {

            // response.data.map((item) => {
            //     setRegisteredCompanyList(prevState => [...prevState, {
            //         name: item.name,
            //         telephone_no: item.company_contacts[0].telephone_no,
            //         registration_number: item.registration_number
            //     }])
            // })
            setActiveRegisteredCompanyList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
        const authRequestInactiveRegistered = {
            "method": "post",
            "url": "staffMember/InactiveRegisteredCompany",
            "data": {}
        }

        callServer(authRequestInactiveRegistered).then((response) => {

            setInactiveRegisteredCompanyList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
        const authRequestPending = {
            "method": "post",
            "url": "staffMember/PendingCompany",
            "data": {}
        }

        callServer(authRequestPending).then((response) => {
            // response.data.map((item) => {
            //     setPendingCompanyList(prevState => [...prevState, {
            //         name: item.name,
            //         telephone_no: item.company_contacts[0].telephone_no,
            //         registration_number: item.registration_number
            //     }])
            // })
            setPendingCompanyList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })

        const authRequestCompanyVisit = {
            "method": "post",
            "url": "staffMember/CompanyVisit",
            "data": {}
        }
        callServer(authRequestCompanyVisit).then((response) => {
            setCompanyVisitList(response.data) 
           
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })


    }, []);
    const fff = (com)=>{
        console.log(com);
     
      }
    return (
        <div className='containcompany mt-5 ms-5' style={{ width: '90%' }}>
            <Tabs
                defaultActiveKey="ActiveRegisteredCompany"
                className="ManageCompanyTab"
                fill

            >
                <Tab className="CompanyTab mt-5" eventKey="ActiveRegisteredCompany" title="Active Registered Comapanies">
                    <div className='contain1'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                            <h3>Active Registered Companies</h3>

                            <Form.Group className="mt-3 mb-3" controlId="formBasicSearchOrganization">
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div>
                                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search organization" /></div>
                            </Form.Group>
                        </div>


                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                // list={[['WSO2', '0114-222642', '8342132'], ['99x', '0114-432345', '7895421'], ['LSEG', '0112-212321', '6543211'], ['Avonet-Technologies', '0112-123987', '8435232'], ['CiscoLab', '0114-222611', '8222132'], ['Dialog-Axiata', '0113-443245', '8895421'], ['IFS', '0112-542321', '7543211'], ['Virtusa', '0112-663987', '8835132']]}
                                list={registeredCompanyList}
                            >


                            </TableView> */}
                            <Table style={{ maxHeight: '60vh' }}>
                                <thead>
                                    <tr>
                                        <th>Comapny</th>
                                        <th>Contact No</th>
                                        <th>Company Registration Number</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                 {activeRegisteredCompanyList.map((activeRegisteredCompanyList)=>(
                                    <tr >
                                        
                                        <td>{activeRegisteredCompanyList.name}</td>
                                        {activeRegisteredCompanyList.company_contacts.map((contactActiveCompanies)=>(
                                                <td>{contactActiveCompanies.telephone_no}</td>
                                        ))}
                                        <td>{activeRegisteredCompanyList.registration_number}</td>
                                    
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table>

                        </div>
                    </div>

                </Tab>
                <Tab className="CompanyTab mt-5" eventKey="InactiveRegisteredCompany" title="Inactive Registered Comapanies">
                    <div className='contain1'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                            <h3>Inactive Registered Companies</h3>

                            <Form.Group className="mt-3 mb-3" controlId="formBasicSearchOrganization">
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div>
                                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search organization" /></div>
                            </Form.Group>
                        </div>


                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                // list={[['WSO2', '0114-222642', '8342132'], ['99x', '0114-432345', '7895421'], ['LSEG', '0112-212321', '6543211'], ['Avonet-Technologies', '0112-123987', '8435232'], ['CiscoLab', '0114-222611', '8222132'], ['Dialog-Axiata', '0113-443245', '8895421'], ['IFS', '0112-542321', '7543211'], ['Virtusa', '0112-663987', '8835132']]}
                                list={registeredCompanyList}
                            >


                            </TableView> */}
                            <Table style={{ maxHeight: '60vh' }}>
                                <thead>
                                    <tr>
                                        <th>Comapny</th>
                                        <th>Contact No</th>
                                        <th>Company Registration Number</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                 {inactiveRegisteredCompanyList.map((inactiveRegisteredCompanyList)=>(
                                    <tr >
                                        
                                        <td>{inactiveRegisteredCompanyList.name}</td>
                                        {inactiveRegisteredCompanyList.company_contacts.map((contactInactiveCompanies)=>(
                                                <td>{contactInactiveCompanies.telephone_no}</td>
                                        ))}
                                        <td>{inactiveRegisteredCompanyList.registration_number}</td>
                                    
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table>

                        </div>
                    </div>

                </Tab>
                <Tab className="CompanyTab mt-5" eventKey="Pending Companies" title="Pending Companies" >

                    <div className='contain1'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                            <h3>New Companies</h3>

                            <Form.Group className="mt-3 mb-3" controlId="formBasicSearchOrganization">
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div>
                                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search organization" /></div>
                            </Form.Group>
                        </div>


                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                // list={[['Ntrylab', '0114-560642', '8453212'], ['Xempler', '0112-234322', '8433215'], ['JavaLab', '0113-234321', '8223212'], ['KriatWeb', '0112-123987', '2345321']]}
                                list={pendingCompanyList}
                            >


                            </TableView> */}
                             <Table style={{ maxHeight: '60vh' }}>
                                <thead>
                                    <tr>
                                        <th>Comapny</th>
                                        <th>Contact No</th>
                                        <th>Company Registration Number</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                 {pendingCompanyList.map((pendingCompanyList)=>(
                                    <tr >
                                        
                                        <td>{pendingCompanyList.name}</td>
                                        {pendingCompanyList.company_contacts.map((contactPendingCompanies)=>(
                                                <td>{contactPendingCompanies.telephone_no}</td>
                                        ))}
                                        <td>{pendingCompanyList.registration_number}</td>
                                    
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table>

                        </div>
                    </div>
                </Tab>
                <Tab className="CompanyTab mt-5" eventKey="CompanyVisit" title="Company Visit">

                    <div className='contain'>
                        {/* <div className='d-flex flex-row justify-content-sm-between '> */}
                        <Row>
                            <Col lg="6">
                            <h3>Scheduled Company Visits</h3>
                            {/* </div> */}
                            </Col>
                            <Col lg="6">
                            <div className='addcompanyvisit d-flex flex-row-reverse'>
                            <Nav.Link as={Link} to="/Staff/Schedule-Company-Visit"> <Button variant='primary'>+ Schedule Company Visit</Button></Nav.Link>
                            </div>
                            </Col>
                        </Row>

                        <Container className="mt-0">
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
                            {/* <TableView headers={['Company', 'Date', 'Time', 'Visit Type', 'Visit Status']}
                                // list={[['LSEG', '2022/07/03', '09.00a.m.', 'Onsite', 'Yes'], ['Avonet Technologies', '2022/07/06', '02.00a.m.', 'Onsite', 'Yes'], ['WSO2', '2022/07/07', '09.00a.m.', 'Online', 'Yes'], ['Dialog Axiata', '2022/07/07', '11.00a.m.', 'Onsine', 'No'], ['99X', '2022/07/07', '11.00a.m.', 'Online', 'No']]}
                                list={companyVisitList}
                            >

                            </TableView> */}
                             <Table style={{ maxHeight: '60vh' }}>
                                <thead>
                                    <tr>
                                        <th>Comapny</th>
                                        <th>Organized By</th>
                                        <th>Date</th>
                                        <th>Start Time</th>
                                        <th>Visit Type</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {companyVisitList.map((companyList)=>(
                                    <tr >
                                        <td>{companyList.company.name}</td>
                                        <td>{companyList.pdc.first_name}</td >
                                        <td>{companyList.date}</td>
                                        <td>{companyList.start_time}</td>
                                        <td>{companyList.company_visit_types.type}</td>
                                        <td>{companyList.company_visit_status_types.status}</td>
                                    
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table>

                        </div>



                    </div>

                </Tab>
                <Tab className="CompanyTab mt-5" eventKey="VisitDetails" title="Visit Details">                  
                <SMCompanyVisitDetails/>                 
                </Tab>
            </Tabs>
        </div>
    );


}

export default StaffMemberManageCompany;