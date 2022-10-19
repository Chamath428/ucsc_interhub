import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import CoordinatorCard from '../../component/Dashboard/CoordinatorCard/coordinatorCard';
import Button from 'react-bootstrap/Button';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Chart } from 'react-charts'
import Logo from '../../component/CompanyLOgo/companyLogo';
import JobPositionsCard from '../../component/Cards/jobPositionsCard';
import '../../styles/CoordinatorRegisteredCompanyProfile.css'


class CoordinatorRegisteredCompanyProfile extends Component {

    render() {
        return (

            <Container className='contain mt-0 ms-5' style={{ width: '95%' }}>
                {/* picture, name and description */}
                <Row >
                    <Col md="auto">
                        <Logo></Logo>
                    </Col>
                    <Col>
                        <Row className='mb-2'>
                            <Col><h2>SyscoLABS</h2>
                            </Col>
                            <Col>
                            <Route render={({ history}) => (
                                <Button variant="primary" className='float-right mr-2'  onClick={() => { history.push('/Student/Edit-Profile') }}>Edit Profile</Button>
                             )}/> 
                            <Button variant="outline-danger" className='float-right mr-2' onClick={() => window.location = 'deactivate'}>Deactivate</Button>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <p>
                                Technology and the need to eat have shaped human civilization for eons - starting from the humble fire that first taught us how to cook our food millions of years ago, to present-day digital techscapes that enable complex systems to feed billions.
                            </p>
                        </Row>
                    </Col>
                </Row>
                {/* button group */}
                <Row style={{ width: '100%' }}>

                <Row>
                    {/* {listItem1 && <ListGroup.Item>{listItem1}</ListGroup.Item>} */}
                    <Col><Button  onClick={() => window.location = 'https://ucsc.cmb.ac.lk/'} variant="outline-primary" className="btn btn-default w-100">Visit our website</Button>{' '} </Col>
                    <Col><Button onClick={() => window.location = 'mailto:yourmail@domain.com'} variant="outline-primary" className="btn btn-default w-100">Email Us</Button>{' '}</Col>
                    <Col><Button variant="outline-primary" className="btn btn-default w-100">Call Us - Line 1</Button>{' '}</Col>
                    <Col><Button variant="outline-primary" className="btn btn-default w-100">Call Us - Line 2</Button>{' '} </Col>
                    <Col><Button variant="outline-primary" className="btn btn-default w-100">More info</Button>{' '}</Col>
                </Row>
                    {/* <Col>
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
                    </Col> */}

                </Row>


                <Row className="Available-Positions mt-5">
                    <Row className="mb-0">
                        <h3> Available Positions</h3>
                    </Row>

                    <div className="overflow-auto mt-0" style={{ width: '100%', maxHeight: '41vh', marginBottom: '50px' }}>
                        <Row>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' Button='View'></JobPositionsCard>
                            <JobPositionsCard Header='Job Position' Text='Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' Button='View'></JobPositionsCard>

                        </Row>
                    </div>



                </Row>
            </Container>


        );
    }

}

export default CoordinatorRegisteredCompanyProfile;