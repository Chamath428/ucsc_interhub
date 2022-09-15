import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col, FormGroup } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import TableView from '../../component/Dashboard/Table/tableView';

import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import { useState } from 'react';
import {callServer} from '../authServer';
import Alert from 'react-bootstrap/Alert';

import '../../styles/sMCompanyVisit.css';
import jwt_decode from "jwt-decode";


const SMCompanyVisit = () => {

  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    const authRequest = {
      "method": "post",
      "url": "coordinator/RegisteredCompany",
      "data": {}
    }

    callServer(authRequest).then((response) => {

      response.data.map((item) => {
        setCompanyList(prevState => [...prevState, {
          name: item.name,

        
        }])
      })

    }).catch(function (error) {
      if (error.response) {
        setAlertPara("Something went wrong when creating the user!");
        setVariant("danger");
        setShow(true);
      }
    })
  }, []);


  return (
    <Container>
      <div className='visit' id="visit">
        <div className='VisitLeft'>
          <Form className='container'>
            <h2>Schedule Company Visit</h2><br />
            <Row className='align-item-center mb-5'>
              <Form.Group as={Col} md="9" controlId="formBasicOrganizatio">
                <Form.Label>Organization</Form.Label>
                <Form.Select >
                  <option>Select Organization</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <Form.Group as={Col} md="9" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="Date" placeholder="Select Date" />
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <Form.Group as={Col} md="9" controlId="formBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="Time" placeholder="Select Time" />
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-1'>
              <Form.Group controlId="formInterviewType">
                <Form.Label>Interview Type</Form.Label>
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <Form.Group as={Col} md="9" controlId="formBasicRadio">
                <Form.Check type="radio" label="Onsite" name="VisitType" inline />
                <Form.Check type="radio" label="Online" name="VisitType" inline />
              </Form.Group>
            </Row>
            <Row className='align-item-center mb-4'>
              <FormGroup>
                <Button className='SetVisit' as={Col} md="9" variant="primary" type="submit">
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
              <TableView
                headers={['Company']}
                // list={[['99X'], ['Dialog-Axiata'], ['Cisco-Labs'], ['Virtusa'], ['IFS'], ['The AI Team'], ['Enactor'], ['CodeGen']]}
              list={companyList}
              >

              </TableView>
            </div>

          </div>

        </div>
      </div>
    </Container>

  );
}

export default SMCompanyVisit;