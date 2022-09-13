import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col, FormGroup } from 'react-bootstrap';
import React, { Component } from 'react';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import TableView from '../../component/Dashboard/Table/tableView';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import { useState } from 'react';
import {callServer} from '../authServer';
import Alert from 'react-bootstrap/Alert';
import '../../styles/sMCompanyVisit.css';
import jwt_decode from "jwt-decode";

const SMCompanyVisit = () => {  

  const [company,setCompany] = useState();
  const [date,setDate] = useState();
  const [time,setTime] = useState();
  const [interviewType,setInterviewType] = useState();
  const [show, setShow] = useState(false);
  const [alertPara,setAlertPara] = useState("Company Visit Scheduled Successfully!");
  const [variant,setVariant] = useState("success");

  const createCompanyVisit = (event) =>{
    event.preventDefault();
    const data ={
      company_id:1,  //company
      email_address:jwt_decode(sessionStorage.getItem("accessToken")).id,
      date:date,
      start_time:time,
      company_visit_type:parseInt(interviewType)//parseInt(interviewType),
      
    };
    console.log(jwt_decode(sessionStorage.getItem("accessToken")).id);
    const authRequest = {
      "method":"post",
      "url":"staffMember/scheduleCompanyVisit",
      "data" :data
    }
    callServer(authRequest).then((response)=>{showAlert(response)}).catch(function (error) {
      if (error.response) {
        setAlertPara("Something Wrong!");
        setVariant("danger");
        setShow(true);
      }})
  }

const showAlert=(response)=>{
  setAlertPara("Company Visit Scheduled Successfully!");
  setVariant("success");
  setShow(true);
 }
return (
  <Container>
    <div className='visit' id="visit">
      <div className='VisitLeft'>
      <h2>Schedule Company Visit</h2><br />
      <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertPara}</Alert.Heading>
      </Alert>
      <Form className='container' onSubmit= {createCompanyVisit}>
       
        <Row className='align-item-center mb-5'> 
          <Form.Group as={Col} md="9" controlId="formBasicCompany">          
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Select Company" onChange={(event)=>{setCompany(event.target.value)}}  />
            {/* <Form.Select onChange={(event)=>{setCompany(event.target.value)}} >
              <option value= "1">Company 1</option>
              <option value= "2">Company 2</option>

            </Form.Select> */}
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-4'> 
          <Form.Group as={Col} md="9" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="Date" placeholder="Select Date" onChange={(event)=>{setDate(event.target.value)}}  />
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-4'> 
          <Form.Group as={Col} md="9" controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="Time" placeholder="Select Time" onChange={(event)=>{setTime(event.target.value)}} />
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-1'> 
          <Form.Group controlId="formInterviewType">
          <Form.Label>Interview Type</Form.Label>
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-4'>  
          <Form.Group as={Col} md="9" controlId="formBasicRadio">
            <Form.Check type="radio" label="Onsite" value={1} name="VisitType" inline onClick={(event)=>{setInterviewType(event.target.value)}}/>
            <Form.Check type="radio" label="Online" value={2} name="VisitType" inline onClick={(event)=>{setInterviewType(event.target.value)}}/>
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-4'>
          <FormGroup>
          <DashboardButton inside={'+ Create Student'}></DashboardButton>
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
          <TableView                            
            headers = {['Company']}
            list={[['99X'],['Dialog-Axiata'],['Cisco-Labs'],['Virtusa'],['IFS'],['The AI Team'],['Enactor'],['CodeGen']]}>
              
          </TableView>
      </div>                    
                   
      </div>
        
    </div>
  </div>
  </Container>

  );
}

export default SMCompanyVisit;