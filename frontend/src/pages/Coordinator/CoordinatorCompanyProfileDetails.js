import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { Chart } from 'react-charts'
import Logo from '../../component/CompanyLOgo/companyLogo';
import InputField from '../../component/InputField/inputField';
import TextArea from '../../component/InputField/textArea';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';



const CoordinatorCompanyProfileDetails = (props) => {
    const CompanyDetails = props.location.state;
    console.log(CompanyDetails);
    const company = CompanyDetails.name;
    const regNo = CompanyDetails.registration_number;
    const date_of_establishment= CompanyDetails.date_of_establishment;
    const description = CompanyDetails.description;
    const website = CompanyDetails.website;
    const address = CompanyDetails.address;
    const fax_no = CompanyDetails.fax_no;
    const no_of_employees = CompanyDetails.no_of_employees;
    const no_of_tech_leads = CompanyDetails.no_of_tech_leads;
    const no_of_project_managers = CompanyDetails.no_of_project_managers;
    
 
        return (

            <Container className='contain mt-5 ms-5' style={{ width: '90%' }}>
                <Row >
                    <Col md="auto">
                        <Logo></Logo>
                    </Col>
                    <Col>
                        <Row><h3>{company}</h3></Row>
                        <Row style={{ width: '100%' }}>
                            <p>
                                {description}

                            </p>
                        </Row>

                    </Col>
                </Row>
                <Row className="detail-of-company mt-5">
                    <Row><h3>Details of the Company</h3></Row>
                    <Row>

                        <Col>  <InputField label="Organization/Company Name" value={company} /> </Col>
                        <Col>   <InputField label="Date of Establishment " value={date_of_establishment} /></Col>

                    </Row>
                    <Row>
                        <Col><InputField label="Company Registration Number" value={regNo} /></Col>
                        <Col><InputField label="Current Address" value={address} /></Col>
                    </Row>
                    <Row>
                        <Col><InputField label="Telephone Number" value="0114 721 194" /></Col>
                        <Col><InputField label="Fax Number" value={fax_no} /></Col>
                    </Row>
                    <Row>
                        <Col><InputField label="Partners (If any)" value="No" /></Col>
                        <Col><InputField label="Clients (Optional)" value="No" /></Col>
                    </Row>
                    <Row>
                        <Col><InputField label="Company Website Link" value={fax_no} /></Col>

                    </Row>
                    <Row>
                       
                        <TextArea  label="Company Description" value={description} />
                    </Row>

                </Row>

                <Row class="Details-of-the-Main-Contact">

                    <Row><h3>Details of the Main Contact </h3></Row>
                    <Row>
                        <Col><InputField label="Name of the primary contact" value="Thilina Madusanka" /></Col>
                        <Col><InputField label="Email" value="hello@99x.io" /></Col>

                    </Row>
                    <Row>
                        <Col><InputField label="Telephone No (Landline)" value="011-4949491" /></Col>
                        <Col><InputField label="Telephone No (Mobile)" value="071-2222224" /></Col>

                    </Row>


                </Row>

                <Row class="Employee-Hierarchy">

                    <Row><h3>Employee Hierarchy </h3></Row>
                    <Row>
                        <Col><InputField label="Number of Employees" value={no_of_employees} /></Col>
                        <Col><InputField label="Number of Project Managers" value={no_of_project_managers} /></Col>

                    </Row>
                    <Row>
                        <Col><InputField label="Number of Tech Leads" value={no_of_tech_leads} /></Col>

                    </Row>

                </Row>

                <Row className="Condition">
                    <p>
                        Specify whether the company/organization has been offered industry placement for any other universities/educational institutes before.
                    </p>


                </Row>
                <Row className="mb-5">
                    <Col md="auto">
                        <label>
                            <input type="checkbox"
                                checked="checked"
                                
                            />
                            Yes
                        </label>
                    </Col>
                    <Col>
                        <label>
                            <input type="checkbox"
                                disabled="disabled"
                            />
                            No
                        </label>
                    </Col>




                </Row>
                <Row className="mb-5" style={{display: 'flex',justifyContent: 'spaceBetween'}}>

                    <Col className="mb-5">  <DashboardButton inside={"Reject"} ></DashboardButton></Col>

                    <Col md="auto" style={{marginRight:'5%'}}> <DashboardButton inside={"Accept"} ></DashboardButton></Col>


                </Row>



            </Container>


        );
    }


export default CoordinatorCompanyProfileDetails;