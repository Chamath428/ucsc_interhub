import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import React, { Component } from 'react';

const SMAddStudents = () => {  
return (
  <Container>
    <div className='contain'>
      <Form>
        <h2>Add Students</h2><br />
        
        <Form.Group className="mb-3" controlId="formBasicIndexNumber">
          <Form.Label>Index Number</Form.Label>
          <Form.Control type="number" placeholder="Enter your index number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRegistrationNumber">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your registration number" />
        </Form.Group>

        </Row>
        <Row className='align-item-center g-5'> 
        <Form.Group className="mb-4 col col-sm-3" controlId="formBasicNIC">
          <Form.Label>NI Number</Form.Label>

          <Form.Control type="text" placeholder="NIC" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNameWithInitials">
          <Form.Label>Name with Initials</Form.Label>
          <Form.Control type="number" placeholder="Enter your name with initials" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCourse">
        <Form.Label>Course</Form.Label>
                        <Form.Select>
                            <option value="1">CS and IS</option>
                            <option value="2">CS</option>
                            <option value="3">IS </option>
                        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGPA">
          <Form.Label>GPA</Form.Label>
          <Form.Control type="float" placeholder="GPA" />
        </Form.Group>
        <Button variant="primary" type="submit">
          +Create Student
        </Button>
        {/* <h6>OR</h6> */}
    </Form>
    </div>
  </Container>

  );
}

export default SMAddStudents;