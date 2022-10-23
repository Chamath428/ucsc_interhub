import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col, FormGroup } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import TableView from '../../component/Dashboard/Table/tableView';
import Table from 'react-bootstrap/Table';

import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import {callServer} from '../authServer';
import Alert from 'react-bootstrap/Alert';

import '../../styles/sMCompanyVisit.css';
import jwt_decode from "jwt-decode";


const SMCompanyVisit = () => {

  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  const [companyList, setCompanyList] = useState([]);
  const[companyName,setCompanyName] = useState("");
  const[companyID,setCompanyID] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const[visitType,setVisitType] = useState("");

  useEffect(() => {
    const authAciveRequest = {
      "method": "post",
      "url": "staffMember/ActiveCompany",
      "data": {}
    }

    callServer(authAciveRequest).then((response) => {
      setCompanyList(response.data);

    }).catch(function (error) {
      if (error.response) {
        setAlertPara("Something went wrong when creating the user!");
        setVariant("danger");
        setShow(true);
        
      }
    })
  }, []);
  const scheduleCompanyVisit = (event) => {
    event.preventDefault();
    console.log(1232);
    const dataScheduldeCompany = {
      company_id: companyID,
      email_address:jwt_decode(sessionStorage.getItem("accessToken")).id,
      date:date,
      start_time:startTime,
      company_visit_type:visitType,
      status: 1
    }
    const authRequest = {
      "method": "post",
      "url": "staffMember/scheduleCompanyVisit",
      "data": dataScheduldeCompany
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
    setAlertPara("Company Visit Added Successfully!");
    setVariant("success");
    setShow(true);
  }
  return (
    <Container>
            <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>{alertPara}</Alert.Heading>
            </Alert>
      <div className='visit' id="visit">
        <div className='VisitLeft'>
          <Form className='container'>
            <h2>Schedule Company Visit</h2><br />
            <Row className='align-item-center mb-5'>
              <Form.Group as={Col} md="9" controlId="formBasicOrganizatio">
                <Form.Label>Company</Form.Label>
                <Form.Control type="company" placeholder="Select Company" value={companyName} readOnly />
                {/* <input type='hidden' value={companyID}></input> */}
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <Form.Group as={Col} md="9" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="Date" placeholder="Select Date" onChange={(event) => { setDate(event.target.value) }} />
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <Form.Group as={Col} md="9" controlId="formBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="Time" placeholder="Select Time" onChange={(event) => { setStartTime(event.target.value) }} />
              </Form.Group>
            </Row>
            <Row className='align-item-center'>
              <Form.Group controlId="formInterviewType">
                <Form.Label>Visit Type</Form.Label>
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <Form.Group as={Col} md="9" controlId="formBasicRadio">
                <Form.Check type="radio" label="Onsite" name="VisitType" value="Onsite" onChange={e=>setVisitType(2)} inline />
                <Form.Check type="radio" label="Online" name="VisitType" value="Online" onChange={e=>setVisitType(1)} inline />
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <FormGroup>
                <Button className='SetVisit' as={Col} md="9" variant="primary" type="submit" onClick={scheduleCompanyVisit}>
                  Set Visit
                </Button>
              </FormGroup>
            </Row>

          </Form>
        </div>

        <div className='VisitRight d-flex-align-item-center mt-2'>


          <div className='VisitRightRight'>
            <h7>Companies that aren't schedule company visit anymore</h7>

            <Form.Group as={Col} md="8" className="companysearch mb-3 mt-3" controlId="formBasicSearchOrganization">
              <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div>
                <Form.Control type="searchbox text" className="companysearchbox" placeholder="Search organization" /></div>
            </Form.Group>

            <div className="table-wrapper-scroll-y my-custom-scrollbar-visit ">
            <Table style={{ maxHeight: '60vh' }}>
              <thead>
                <tr>
                  <th>Comapny</th>
                </tr>
              </thead>
              <tbody>
            
                 {companyList.map((company)=>(
                  <tr ><button className='companyNameList' onClick={()=> {
                    // console.log(company.company_id);
                    setCompanyName(company.name)
                    setCompanyID(company.company_id)
                  }}>{company.name}</button></tr>
                 ))
                 }
                 
              </tbody>
             
               
            </Table>
            </div>

          </div>

        </div>
      </div>
    </Container>

  );
}

export default SMCompanyVisit;