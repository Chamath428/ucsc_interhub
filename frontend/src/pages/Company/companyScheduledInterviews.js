import Button from 'react-bootstrap/Button';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard'; 
import Container from 'react-bootstrap/esm/Container';
import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import { Accordion } from 'react-bootstrap';
import AccordionItem from '../../component/Accordion/accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jwtDecode from 'jwt-decode';
import { callServer } from '../authServer';

function CompanyScheduledInterviews() {
  const [value, onChange] = useState(new Date());
  const[interviews,setInterviews]  = useState([]);

  useEffect(()=>{
    console.log("inside effec");
    const authRequest = {
      "method":"post",
      "url":"organization/getAllInterviews",
      "data":data
    }

    callServer(authRequest).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })

  },[])

  return (
    <div>
      <div className='container pt-5'>


        <h2>Not in use Scheduled Interviews</h2><br />

        <Container>
          <Row>
            <Col sm={7}>
            
              <AccordionItem Header='Mr. S. A. Dissanayake' body='Job Role Preference: Software Engineer'
              
              card1heading='Interview Time'
              card1context='10.00 am'

              card2heading='Interview Date'
              card2context='23rd of August 2022'

              card3heading='Interview Type'
              card3context='Via Zoom'
              
              card4heading='Contact Number'
              card4context='0112 456 987'

              PrimaryBtn='Done'

              InfoBtn = 'Decline'
              
              ></AccordionItem>

              <AccordionItem Header='Ms. F. Shazna' body='Job Role Preference: Business Analyst'

              card1heading='Interview Time'
              card1context='10.00 am'

              card2heading='Interview Date'
              card2context='23rd of August 2022'

              card3heading='Interview Type'
              card3context='On SIte'

              card4heading='Contact Number'
              card4context='0112 456 987'

              PrimaryBtn='Done'

              InfoBtn = 'Decline'

              ></AccordionItem>

              <AccordionItem Header='Ms. S. Athapaththu' body='Job Role Preference: U/UX Engineer'

              card1heading='Interview Time'
              card1context='10.00 am'

              card2heading='Interview Date'
              card2context='23rd of August 2022'

              card3heading='Interview Type'
              card3context='On SIte'

              card4heading='Contact Number'
              card4context='0112 456 987'

              PrimaryBtn='Done'

              InfoBtn = 'Decline'

              ></AccordionItem>
            
            </Col>
            
            <Col sm={5}>

              <Card body>
                <Calendar onChange={onChange} value={value} className="w-100 border-0"/> 
              </Card>

              <div className='d-flex pt-4 justify-content-between' >

                  <InfoCard title='Total Interviews' count='05' icon='calendar-event' cardWidth='12'></InfoCard> 

              </div>

              <div className='d-flex pt-4 justify-content-between' >
               
                  <InfoCard title='Responded' count='05' icon='telephone-inbound-fill' cardWidth='12' className='border-1'></InfoCard> 
              </div>

              <div className='d-flex pt-4 justify-content-between' >
               
               <InfoCard title='Finished' count='05' icon='check-circle-fill' cardWidth='12' className='border-1'></InfoCard> 
           </div>

            </Col>
          </Row>
        </Container>



      </div>
    </div>

  );
}

export default CompanyScheduledInterviews;

