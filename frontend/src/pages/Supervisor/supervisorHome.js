import React, { Component } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import CoordinatorCard from '../../component/Dashboard/CoordinatorCard/coordinatorCard';
import HorizontalCard from '../../component/Dashboard/HorizontalCard/horizontalCard';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import Stack from 'react-bootstrap/Stack';
class SupervisorHome extends Component {

    render() { 
        return (
            <div className='container mt-5 ms-5' style={{width:'90%'}} >
            <Stack gap={5}>
                <Row>
                <Row><h1>Dashboard</h1></Row>
                <Row>
                    <InfoCard title={"Total Interns"} count={"3"}></InfoCard>
                    <InfoCard title={"Progress Reports"} count={"4"}></InfoCard>
                    <InfoCard title={"Week"} count={"6"}></InfoCard>
                </Row>
                </Row>
                
                <Row>
                    <h2>Interns</h2>
                    <Col lg='4'><HorizontalCard></HorizontalCard></Col>
                    <Col lg='4'><HorizontalCard></HorizontalCard></Col>
                    <Col lg='4'><HorizontalCard></HorizontalCard></Col>
                </Row>
            </Stack>
            </div>
        );
    }
}
 
export default SupervisorHome;