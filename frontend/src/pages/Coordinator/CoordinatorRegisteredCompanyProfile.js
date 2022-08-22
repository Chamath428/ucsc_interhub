import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import CoordinatorCard from '../../component/Dashboard/CoordinatorCard/coordinatorCard';


import { Chart } from 'react-charts'
import Logo from '../../component/CompanyLOgo/companyLogo';
import JobPositionsCard from '../../component/Cards/jobPositionsCard';
import '../../styles/CoordinatorRegisteredCompanyProfile.css'


class CoordinatorRegisteredCompanyProfile extends Component {

    render() {
        return (

            <Container className='contain' style={{ width: '95%' }}>
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
                <Row style={{ width: '100%' }}>
                    <Col>
                        <Nav.Item class="nav-links">
                            <Nav.Link  href="#"><i class="bi bi-envelope"></i> hr@syscolabs.com</Nav.Link>
                        </Nav.Item>
                    </Col>

                    <Col> <i class="bi bi-telephone"></i>  011-2485745 </Col>

                    <Col><i class="bi bi-telephone"></i>  011-2485746</Col>
                    <Col>
                        <Nav.Item class="nav-links">
                            <Nav.Link  eventKey="link-2" href="#"><i class="bi bi-globe"></i> syscolabs.com</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col >
                        <Nav.Item class="nav-links">
                            <Nav.Link  eventKey="link-2" href="#">More Details</Nav.Link>
                        </Nav.Item>
                    </Col>

                </Row>


                <Row className="Available-Positions mt-5">
                    <Row className="mb-3">
                        <h3> Available Positions</h3>
                    </Row>

                    <div class="overflow-auto" style={{ width: '100%', maxHeight: '50vh', marginBottom: '50px' }}>
                        <Row >
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi' Button='View'></JobPositionsCard>

                        </Row>
                    </div>



                </Row>
            </Container>


        );
    }

}

export default CoordinatorRegisteredCompanyProfile;