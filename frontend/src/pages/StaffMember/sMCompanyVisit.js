import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col, FormGroup } from 'react-bootstrap';
import React, { Component } from 'react';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import TableView from '../../component/Dashboard/Table/tableView';

import '../../styles/sMCompanyVisit.css';

const SMCompanyVisit = () => {  
return (
  <Container>
    <div className='visit ms-5' id="visit">
      <div className='VisitLeft'>
      <Form className='container'>
        <h2>Schedule Company Visit</h2><br />
        <Row className='align-item-center mb-4'> 
          <Form.Group as={Col} md="10" controlId="formBasicOrganizatio">          
            <Form.Label>Organization</Form.Label>
            <Form.Select >
              <option>Select Organization</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-4'> 
          <Form.Group as={Col} md="10" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="Date" placeholder="Select Date" />
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-4'> 
          <Form.Group as={Col} md="10" controlId="formBasicTime">
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
          <Form.Group as={Col} md="10" controlId="formBasicRadio">
            <Form.Check type="radio" label="Onsite" name="VisitType" inline/>
            <Form.Check type="radio" label="Online" name="VisitType" inline/>
          </Form.Group>
        </Row>
        <Row className='align-item-center mb-4'>
          <FormGroup>
            <Button className='SetVisit' as={Col} md="10" variant="primary" type="submit">
              Set Visit
            </Button>
          </FormGroup> 
        </Row>
       
    </Form>
    </div>
   
    <div className='VisitRight d-flex-align-item-center'>
      <div className='VisitRightCenter'>
        <Row className='mb-4 mt-5'>
          
          <InfoCard title={"Scheduled Company Visits"} count={"50"} icon={"people-fill"} cardWidth={8}></InfoCard>
        </Row>
        <Row className='mb-4'>
          <InfoCard title={"Upcoming Company Visits"} count={"20"} icon={"people-fill"} cardWidth={8}></InfoCard>
        </Row>
        <Row className='mb-4'>
          <InfoCard title={"Rest Companies"} count={"136"} icon={"people-fill"} cardWidth={8}></InfoCard>
        </Row>
    
      </div>
    
      <div className='VisitRightRight'> 
      <h6>Companies that aren't schedule company visit anymore</h6>
      <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
          <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
          <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
          <Form.Control type="searchbox text" placeholder="Search organization" /></div>
      </Form.Group>
      <div className="table-wrapper-scroll-y my-custom-scrollbar-visit ">
          <TableView                            
          headers = {['Company']}
          list={[['99X'],['Dialog-Axiata'],['Cisco-Labs'],['Virtusa'],['IFS'],['The AI Team'],['Enactor'],['CodeGEn']]}>
              
          </TableView>
      </div>                    
                   
      </div>
        
    </div>
  </div>
  </Container>

  );
}

export default SMCompanyVisit;