import Button from 'react-bootstrap/Button';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard'; 
import Container from 'react-bootstrap/esm/Container';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import { Accordion } from 'react-bootstrap';
import AccordionItem from '../../component/Accordion/accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentPassedInterviews from './StudentPassedInterviews';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import modalInterviewReject from '../../component/Modal/modalCenter';

function StudentInterviews() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='container pt-5'>

      <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3 TabsStyle"
      variant="pills"
      >

      <Tab eventKey="home" title="Your Interviews" >
        <div><br />

          <h2>Your Interviews</h2><br />

          <Container>
            <Row>
              <Col sm={7}>
              
                <AccordionItem Header='Synopsys' body='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. '
                
                card1heading='Event Time'
                card1context='10.00 am'

                card2heading='Event Date'
                card2context='23rd of August 2022'

                card3heading='Event Location'
                card3context='Via Zoom'
                
                card4heading='Contact Number'
                card4context='0112 456 987'

                PrimaryBtn='Accept Invitation'

                InfoBtn = 'Decline'
                InfoBtnLink = 'handleShow'

                ></AccordionItem>

                <AccordionItem Header='WSO2' body='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. '

                card1heading='Event Time'
                card1context='10.00 am'

                card2heading='Event Date'
                card2context='23rd of August 2022'

                card3heading='Event Location'
                card3context='No. 34A, Penny Lane, Liverpool'

                card4heading='Contact Number'
                card4context='0112 456 987'

                PrimaryBtn='Accept Invitation'

                InfoBtn = 'Decline'

                ></AccordionItem>
              
              </Col>
              
              <Col sm={5}>

                <Card body>
                  <Calendar onChange={onChange} value={value} className="w-100 border-0"/> 
                </Card>

                <div className='d-flex pt-4 justify-content-between' >

                    <InfoCard title='Total Callings' count='05' icon='calendar-event' cardWidth='12'></InfoCard> 

                </div>

                <div className='d-flex pt-4 justify-content-between' >
                
                    <InfoCard title='Callings in this week' count='05' icon='telephone-inbound-fill' cardWidth='12' className='border-1'></InfoCard> 
                </div>

              </Col>
            </Row>
          </Container>

        </div>
      </Tab>

      <Tab eventKey="profile" title="Past Interviews">
        <br />
        <StudentPassedInterviews />
      </Tab>
      
      </Tabs>



      </div>
    </div>

  );
}

export default StudentInterviews;

