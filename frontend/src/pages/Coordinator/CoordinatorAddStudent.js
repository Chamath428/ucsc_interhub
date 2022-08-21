import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row } from 'react-bootstrap';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
// import '../../styles/CoordinatorStudentBulkList.css';
// import '../../styles/CoordinatorStudent.css';


class CoordinatorStudentBulkList extends Component {

  render() {
    return (
      // <div className='contain'>

      //     <h3>Manage Students</h3>
      //     <div className='btn-container'>
      //         <Button> View </Button>
      //         <Button > Add bulk students </Button>
      //         <Button > Evaluation </Button>
      //     </div>
      //     <div className='dropdown-container'>
      //         <div className='dropdown1'>
      //             <label className='btn-label'>Course</label>
      //             <Form.Select>
      //                 <option value="1">CS and IS</option>
      //                 <option value="2">CS</option>
      //                 <option value="3">IS </option>
      //             </Form.Select>
      //         </div>
      //         <div className='dropdown2'>
      //             <label className='btn-label'>Enrolled</label>
      //             <Form.Select>
      //                 <option value="1">ALL</option>
      //                 <option value="2">IS</option>
      //                 <option value="3">CS and IS</option>
      //             </Form.Select>
      //         </div>
      //     </div>

      //     <div className='add-bulk'>
      //         <a href="#" className="add-student-herf">Add Students</a>
      //         <Button > Add CSV file </Button>

      //     </div>

      // </div>

      <Container>
        <div className='contain'>

          <div className='btn-container'>
            <Button  > View </Button>
            <Button > Add New students </Button>

          </div>
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
                <Form.Label>NIC Number</Form.Label>
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
            {/* <Button className="btn-setvisit mt-4 mb-4 col-sm-6" variant="primary" type="submit">
              + Create Student
            </Button> */}
            
            <div>
            <DashboardButton inside={"+Create Student"}></DashboardButton>
            </div>
            <Form.Group className="mb-4 col col-sm-6">
              <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
              >
                <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />

                <div>
                  <p style={{ width: '70px', textAlign: 'center' }}>OR</p>
                </div>

                <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
              </div>
              <p>You can upload a CSV file that has the above details and create multiple students at once.</p></Form.Group>
            {/* <Button className="btn-setvisit mt-4 mb-4 col-sm-6" variant="primary" type="submit">
              Upload a CSV file
            </Button> */}

            <div>
            <DashboardButton inside={"Upload a CSV file"} ></DashboardButton>
            </div>
          </Form>
        </div>
      </Container>


    );



  }


}

export default CoordinatorStudentBulkList;

