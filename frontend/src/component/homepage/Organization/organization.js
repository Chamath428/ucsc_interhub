import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Organization from '../../../assets/images/organization.jpg'
import PrimaryButton from '../PrimaryButton/primaryButtonClass';

class OrganizationComponent extends Component {

    render() { 
        return (
            <Container  className="mb-5">
                <Row className="d-flex flex-row-reverse justify-content-around align-items-center" >
                    <Col lg="5">
                        <h1 id="register">Are You an Organization?</h1>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                    <PrimaryButton inside="Register as an Organization"></PrimaryButton>

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