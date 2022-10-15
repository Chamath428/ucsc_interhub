import React, { Component, useState } from 'react';
import NavBarOnlyLogo from '../component/homepage/NavBarOnlyLogo/navBarOnlyLogo';
import {Container,Row,Col,Form} from 'react-bootstrap';
import HandShake2 from '../assets/images/Agreement.gif';
import '../styles/registeredPage.css';
import DashboardButton from '../component/Dashboard/DashboardButton/dashboardButton';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const RegisteredPage=()=>{

    return(
            <div className="registered-container shadow-lg mb-5 bg-body rounded">
                <NavBarOnlyLogo></NavBarOnlyLogo>
                <Row className="registered-row d-flex justify-content-around align-items-center" >
                    <img src={HandShake2} />
                    <h3>Thanks for registering!</h3>
                    <p>We are considering your request and will send you an email soon.</p>
                    <Nav.Link as={Link} to="/"> <DashboardButton inside={'Back to Home Page'}></DashboardButton></Nav.Link>
                </Row>
            </div>

    )
}

export default RegisteredPage;