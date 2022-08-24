import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Organization from '../../../assets/images/organization.jpg'
import PrimaryButton from '../PrimaryButton/primaryButtonClass';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DashboardButton from '../../Dashboard/DashboardButton/dashboardButton';
import Nav from 'react-bootstrap/Nav';


class OrganizationComponent extends Component {

    render() { 
        return (
            <Container  className="mb-5">
                <Row className="d-flex flex-row-reverse justify-content-around align-items-center" >
                    <Col lg="5">
                        <h1 id="register">Are You an Organization?</h1>
                        
                        <p>The new company registrations for UCSC, Industry partnership, are now open for those interested in the programs below, organized by the Professional Development Center (PDC) in UCSC. The internship program is offered to both Computer Science(CS) and Information Systems (IS) undergraduates in their third year second semester. This is a 5-6 months program. The students will be placed in different IT companies (registered under the UCSC internship program) to give exposure to the practical use of the knowledge acquired from the university curriculum. The next batch of interns will be available tentatively from mid-August 2021.</p>

                    {/* <Button href="\pages\signup.js" inside="Register as an Organization"></Button> */}

                    <Nav.Link as={Link} to="/register"> <DashboardButton inside={'Register as an organisation'}></DashboardButton></Nav.Link>
 

                    </Col>
                    <Col lg="5">
                        <img src={Organization} className='img-fluid shadow-4' style={{width:'600px'}}></img>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default OrganizationComponent;