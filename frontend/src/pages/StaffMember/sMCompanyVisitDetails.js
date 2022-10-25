import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col, FormGroup } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import TableView from '../../component/Dashboard/Table/tableView';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import {callServer} from '../authServer';
import Alert from 'react-bootstrap/Alert';

import '../../styles/sMCompanyVisit.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ModalConfirmation from '../../component/Modal/modalConfirmation';

const SMCompanyVisitDetails = (props) => {
    const visitDetails = props.location.state;
    console.log(visitDetails);
    const company = visitDetails.company.name;
    const organizer = visitDetails.pdc.first_name
    const date = visitDetails.date;
    const time = visitDetails.start_time;
    const type = visitDetails.company_visit_types.type;
    const status = visitDetails.company_visit_status_types.status;

  return (
    <Container>
    <div className='my-4 '>
        <div>
            <h5>Visit to</h5>
            <h2>{company}</h2><br />
            <h5>Organized By</h5>
            <h2>{organizer}</h2><br/>

            <Row className='row justify-content-between'>
            <Col  md="3" >
                <Card className='mx-1' border="primary">
                    <Card.Header className='font-weight-bold'><i class="bi bi-calendar mr-2"> </i>Organized By</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{status}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col  md="3" >
                <Card className='mx-1'>
                    <Card.Header className='font-weight-bold'><i class="bi bi-calendar mr-2"> </i>Date</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{date}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col  md="3">
                <Card className='mx-1'>
                    <Card.Header className='font-weight-bold'><i class="bi bi-clock mr-2" /> Time</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{time}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col  md="3">
                <Card className='mx-1'>
                <Card.Header className='font-weight-bold'><i class="bi bi-people-fill mr-2" /> Type</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{type}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            </Row>
            <div className="card h-100 my-3">
                <div className="card-body">
                <Stack direction="horizontal" gap={2}>
                    <div className='ms-auto'>
                    <ModalConfirmation ButtonText="Cancel Event" ButtonColour="outline-danger" Title="Confirm Delete" Body="This action cancel this event and notify the cancelled status to Company and UCSC - PDC Staff Members. Do you wish to continue?" SecondaryButton="Back" PrimaryButton="Cancel Event" PrimaryButtonColour="danger"/>
                    </div>
                    <div className="">
                    <Button variant="primary"><i class="bi bi-check-circle mr-2"></i>Completed</Button>
                    </div>
                </Stack>
                </div>
            </div>
        </div>
    </div>
    </Container>

  );
}

export default SMCompanyVisitDetails;