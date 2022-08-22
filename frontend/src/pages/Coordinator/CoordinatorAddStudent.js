import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';

// import '../../styles/CoordinatorStudentBulkList.css';
// import '../../styles/CoordinatorStudent.css';


class CoordinatorStudentBulkList extends Component {

  render() {
    return (





      <Container>
        <div className='contain'>

          <div className='btn-container'>
            <Button  > View </Button>
            <Button > Add New students </Button>

          </div>
          <Row>
            <div className='left'>
              <Form>
                <div className='mb-5'>
                  <h2>Add Students</h2>
                </div>
                <Row className='align-item-center mb-3 g-5'>
                  <Form.Group as={Col} md="6" controlId="formBasicIndexNumber">
                    <Form.Label>Index Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter your index number" />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formBasicRegistrationNumber">
                    <Form.Label>Registration Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your registration number" />
                  </Form.Group>
                </Row>
                <Row className='align-item-center mb-3 g-5'>
                  <Form.Group as={Col} md="6" controlId="formBasicNIC">
                    <Form.Label>NIC Number</Form.Label>
                    <Form.Control type="text" placeholder="NIC" />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formBasicNameWithInitials">
                    <Form.Label>Name with Initials</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name with initials" />
                  </Form.Group>
                </Row>
                <Row className='align-item-center mb-3 g-5'>
                  <Form.Group as={Col} md="6" controlId="formBasicCourse">
                    <Form.Label>Course</Form.Label>
                    <Form.Select>
                      <option value="1">CS and IS</option>
                      <option value="2">CS</option>
                      <option value="3">IS </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formBasicGPA">
                    <Form.Label>GPA</Form.Label>
                    <Form.Control type="float" placeholder="GPA" />
                  </Form.Group>
                </Row>
                <div className='d-flex flex-row-reverse mb-3'>
                  <DashboardButton inside={'+ Create Student'}></DashboardButton>
                </div>
                <Form.Group className="mb-4 col col-sm-12">
                  <div
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                  >
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />

                    <div>
                      <p style={{ textAlign: 'center' }}>OR</p>
                    </div>

                    <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                  </div>
                  <p>You can upload a CSV file that has the above details and create multiple students at once.</p></Form.Group>
                <div className='d-flex flex-row-reverse mb-3'>
                  <DashboardButton inside={'Upload a CV File'}></DashboardButton>
                </div>
              </Form>
            </div>
            <div className='right' id="right">
              <Row className='mb-5 mt-5'>

                <InfoCard title={"Total Registered Students in this Year"} count={"275"} icon={"people-fill"} cardWidth={10}></InfoCard>
              </Row>
              <Row className='mb-5'>
                <InfoCard title={"Total Registered Students in Previous Year"} count={"260"} icon={"people-fill"} cardWidth={10}></InfoCard>
              </Row>


            </div>
          </Row>
        </div>
      </Container>


    );



  }


}

export default CoordinatorStudentBulkList;

