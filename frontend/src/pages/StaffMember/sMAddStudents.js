import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import React, { Component } from 'react';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import { URL } from '../URL';
import axios from 'axios';
import '../../styles/staffMemberAddStudents.css';
import { useState } from 'react';
import { callServer } from '../authServer';

const SMAddStudents = () => {

  const [indexNumber, setIndexNumber] = useState();
  const [registerationNumber, setRegisterationNumber] = useState("");
  const [nic, setNIC] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState(1);
  const [gpa, setGPA] = useState("");
  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("Student Added Successfully!");
  const [variant, setVariant] = useState("success");
  const [uploadCSVFile,setCSVFile] = useState();

  const createStudent = (event) => {
    event.preventDefault();
    const data = {
      index_number: parseInt(indexNumber),
      registration_number: registerationNumber,
      name: name,
      degree: parseInt(course),
      gpa: gpa,
      program_id: 1
    }

    // const uploadCSV = (event) => {
    //   event.preventDefault();
    //   const data2 = FileReader();
      // {
      //   index_number: parseInt(indexNumber),
      //   registration_number: registerationNumber,
      //   name: name,
      //   degree: parseInt(course),
      //   gpa: gpa,
      //   program_id: 1
      // }
    const authRequest = {
      "method": "post",
      "url": "student/create",
      "data": data
    }
    callServer(authRequest).then((response) => { showAlert(response) }).catch(function (error) {
      if (error.response) {
        setAlertPara("Something went wrong when creating the student!");
        setVariant("danger");
        setShow(true);
      }
    })
  }

  const showAlert = (response) => {
    setAlertPara("Student Added Successfully!");
    setVariant("success");
    setShow(true);
  }

//Upload CSV file
// const authCSVRequest = {
//   "method": "post",
//   "url": "student/uploadCSV",
//   "data": data,
//   headers:{ 'Content-Type': 'multipart/form-data'}
// }
// callServer(authCSVRequest).then((response) => { showAlert(response) }).catch(function (error) {
//   if (error.response) {
//     setAlertPara("Something went wrong when uploading CSV File");
//     setVariant("danger");
//     setShow(true);
//   }
// })



  return (
    <Container>
      <div className='contain mt-5 ms-5' style={{ width: '90%' }}>
        <Row>
          <div className='left'>
            <div className='mb-5'>
              <h2>Add Students</h2>
            </div>

            <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>{alertPara}</Alert.Heading>
            </Alert>

            <Form onSubmit={createStudent}>
              <Row className='align-item-center mb-3 g-5'>
                <Form.Group as={Col} md="6" controlId="formBasicIndexNumber">
                  <Form.Label>Index Number</Form.Label>
                  <Form.Control type="number" required placeholder="Enter your index number" onChange={(event) => { setIndexNumber(event.target.value) }} />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formBasicRegistrationNumber">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control type="text" required placeholder="Enter your registration number" onChange={(event) => { setRegisterationNumber(event.target.value) }} />
                </Form.Group>
              </Row>
              <Row className='align-item-center mb-3 g-5'>
                <Form.Group as={Col} md="6" controlId="formBasicNIC">
                  <Form.Label>NIC Number</Form.Label>
                  <Form.Control type="text" required placeholder="NIC" onChange={(event) => { setNIC(event.target.value) }} />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formBasicNameWithInitials">
                  <Form.Label>Name with Initials</Form.Label>
                  <Form.Control type="text" required placeholder="Enter your name with initials" onChange={(event) => { setName(event.target.value) }} />
                </Form.Group>
              </Row>
              <Row className='align-item-center mb-3 g-5'>
                <Form.Group as={Col} md="6" controlId="formBasicCourse">
                  <Form.Label>Course</Form.Label>
                  <Form.Select onChange={(event) => { setCourse(event.target.value) }}>
                    <option value="1">CS - 3rd Year</option>
                    <option value="2">IS - 3rd Year</option>
                    <option value="3">CS - 4th Year</option>
                    <option value="4">IS - 4th Year</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formBasicGPA">
                  <Form.Label>GPA</Form.Label>
                  <Form.Control type="number" required placeholder="GPA" onChange={(event) => { setGPA(event.target.value) }} />
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
              
            </Form>
           
            <Form >
            <Form.Group as={Col} md="8" controlId="profilePicture" className="mb-3">
                  <Form.Label>Choose CSV File</Form.Label>
                  <Form.Control type="file" accept="*/csv" onChange={(event)=> {
                      console.log(event.target.files)
                      setCSVFile(event.target.files[0])
                      }} />
              </Form.Group>
                <div className='d-flex flex-row-reverse mb-3'>
                <DashboardButton inside={'Upload CSV File'} ></DashboardButton>
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

export default SMAddStudents;