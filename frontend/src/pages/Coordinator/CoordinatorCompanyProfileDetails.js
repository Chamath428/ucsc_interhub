import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { Chart } from 'react-charts'
import Logo from '../../component/CompanyLOgo/companyLogo';
import InputField from '../../component/InputField/inputField';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import '../../styles/CoordinatorRegisteredCompanyProfile.css'


class CoordinatorCompanyProfileDetails extends Component {

    render() {
        return (

            <Container className='contain' style={{ width: '90%' }}>
                <Row >
                    <Col md="auto">
                        <Logo></Logo>
                    </Col>
                    <Col>
                        <Row><h3>SyscoLABS</h3></Row>
                        <Row style={{ width: '100%' }}>
                            <p>
                                Technology and the need to eat have shaped human civilization for eons - starting from the humble fire that first taught us how to cook our food millions of years ago, to present-day digital techscapes that enable complex systems to feed billions.


                            </p>
                        </Row>

                    </Col>
                </Row>
                <Row className="detail-of-company mt-5">
                    <Row><h3>Details of the Company</h3></Row>
                    <Row>

                        <Col>  <InputField label="Organization/Company Name" value="99X" /> </Col>
                        <Col>   <InputField label="Date of Establishment " value="2022/08/20" /></Col>

                    </Row>
                    <Row>
                        <Col><InputField label="Company Registration Number" value="R11" /></Col>
                        <Col><InputField label="Current Address" value=" 65 Walukarama Rd, Colombo 00300" /></Col>
                    </Row>
                    <Row>
                        <Col><InputField label="Telephone Number" value="0114 721 194" /></Col>
                        <Col><InputField label="Fax Number" value="+47 982 42 529." /></Col>
                    </Row>
                    <Row>
                        <Col><InputField label="Partners (If any)" value="No" /></Col>
                        <Col><InputField label="Clients (Optional)" value="No" /></Col>
                    </Row>
                    <Row>
                        <Col><InputField label="Company Website Link" value="https://99x.io/" /></Col>

                    </Row>
                    <Row>
                        <InputField label="sample denata" value="https://99x.io/" />
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
                        <Col><InputField label="Number of Employees" value="1405" /></Col>
                        <Col><InputField label="Number of Project Managers" value="20" /></Col>

                    </Row>
                    <Row>
                        <Col><InputField label="Number of Tech Leads" value="50" /></Col>

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

}

export default CoordinatorCompanyProfileDetails;