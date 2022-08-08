import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import React, { Component } from 'react';

const SMAddStudents = () => {  
return (
  <Container>
    <div className='contain'>
      <Form>
        <h2>Add Students</h2><br />
        <Row className='align-item-center g-5'> 
        <Form.Group className="mb-4 col col-sm-3" controlId="formBasicIndexNumber">
          <Form.Label>Index Number</Form.Label>
          <Form.Control type="number" placeholder="Enter your index number" />
        </Form.Group>
        <Form.Group className="mb-4 ms-4 col col-sm-3" controlId="formBasicRegistrationNumber">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your registration number" />
        </Form.Group>
        </Row>
        <Row className='align-item-center g-5'> 
        <Form.Group className="mb-4 col col-sm-3" controlId="formBasicNIC">
          <Form.Label>NI Number</Form.Label>
          <Form.Control type="text" placeholder="NIC" />
        </Form.Group>
        <Form.Group className="mb-4 ms-4 col col-sm-3" controlId="formBasicNameWithInitials">
          <Form.Label>Name with Initials</Form.Label>
          <Form.Control type="text" placeholder="Enter your name with initials" />
        </Form.Group>
        </Row>
        <Row className='align-item-center g-5'> 
        <Form.Group className="mb-4 col col-sm-3" controlId="formBasicCourse">
        <Form.Label>Course</Form.Label>
              <Form.Select>
                  <option value="1">CS and IS</option>
                  <option value="2">CS</option>
                  <option value="3">IS </option>
              </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4 ms-4 col col-sm-3" controlId="formBasicGPA">
          <Form.Label>GPA</Form.Label>
          <Form.Control type="float" placeholder="GPA" />
        </Form.Group>
        </Row>
        <Button className = "btn-setvisit mt-4 mb-4 col-sm-6" variant="primary" type="submit">
          + Create Student
        </Button>
        <Form.Group className="mb-4 col col-sm-6">
        <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{width: '70px', textAlign: 'center'}}>OR</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>
      <p>You can upload a CSV file that has the above details and create multiple students at once.</p></Form.Group>
      <Button className = "btn-setvisit mt-4 mb-4 col-sm-6" variant="primary" type="submit">
          Upload a CSV file
        </Button>
    </Form>
    </div>
  </Container>

  );
}

export default SMAddStudents;