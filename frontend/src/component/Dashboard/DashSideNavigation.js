// import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Container from "react-bootstrap/esm/Container";

function DashSideNavigation() {
    // const inside=this.props.inside;

    return (
        <Container className="d-flex justify-content-start">
            
        <Nav variant="pills" className="flex-column">
            {/* <Link to="/Dashboard">Dashboard</Link>
            <Link  to="/Internship">Internship</Link> */}
{/* <Nav.Link as={Link} to="/contact">anywords</Nav.Link> */}

            <Nav.Link as={Link} eventKey="/StudentHome" to="/StudentHome">Dashboard</Nav.Link>

            <Nav.Link as={Link} eventKey="/Internship" to="/Internship">Internship</Nav.Link>

            <Nav.Link as={Link} eventKey="/Announcement" to="/Announcement">Announcement</Nav.Link>

            <Nav.Link as={Link} eventKey="/Interviews" to="/Interviews">Interviews</Nav.Link>

            <Nav.Link as={Link} eventKey="/Settings" to="/Settings">Settings</Nav.Link>

            {/* <Nav.Link eventKey="StudentHome"><Link to="/StudentHome">Dashboard</Link></Nav.Link>
            <Nav.Link eventKey="Internship"><Link to="/Internship">Internship</Link></Nav.Link>
            <Nav.Link eventKey="Announcement"><Link to="/Announcement">Announcement</Link></Nav.Link>
            <Nav.Link eventKey="Interviews"><Link to="/Interviews">Interviews</Link></Nav.Link>
            <Nav.Link eventKey="Settings"><Link to="/Settings">Settings</Link></Nav.Link> */}

            {/* <NavLink id="RouterNavLink" style={None} to="/contact">anywords</NavLink> */}
        </Nav>
        </Container>
    );
}

export default DashSideNavigation;