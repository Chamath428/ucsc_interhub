import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row } from 'react-bootstrap';
import React, { Component } from 'react';

import '../../styles/sMStudent.css';

const SMCompanyVisit = () => {  
return (
  <Container>
    <div className='contain'>
      <Form className='container'>
        <h2>Schedule Company Visit</h2><br />
        
        <Form.Group className="mb-4 col-sm-4" controlId="formBasicOrganization">
          <Form.Label>Organization</Form.Label>
          <Form.Select >
            <option>Select Organization</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4 col-sm-4" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="Date" placeholder="Select Date" />
        </Form.Group>
        <Form.Group className="mb-4 " controlId="formBasicTime">
          <Form.Label>Time</Form.Label>
          
            <Row className='align-item-center'> 
                <Form.Group controlId="formBasicEmail" className="col col-sm-2">
                  <Form.Control type="time" placeholder="Select start time"/>
                </Form.Group> To
                <Form.Group controlId="formBasicEmail" className="col col-sm-2">
                  <Form.Control type="time" placeholder="Select end time" /> 
                </Form.Group>
              </Row>
        </Form.Group>
        <Form.Group className="mb-4 " controlId="formInterviewType">
        <Form.Label>Interview Type</Form.Label></Form.Group>
        <Form.Group className="mb-4 flex-row" controlId="formBasicRadio">

          <Form.Check type="radio" label="Onsite" inline/>
          <Form.Check type="radio" label="Online" inline/>
        </Form.Group>
       
          <Button className = "btn-setvisit mb-4 col-sm-4" variant="primary" type="submit">
            Set Visit
          </Button>
       
    </Form>
    </div>
  </Container>

  );
}

export default SMCompanyVisit;