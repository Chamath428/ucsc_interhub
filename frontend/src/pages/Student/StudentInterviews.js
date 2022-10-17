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
import { callServer } from '../authServer';
import moment from 'moment'
import jwt_decode from "jwt-decode";

function StudentInterviews() {
  const [date, setDate] = useState();
  const [interviews,setInterviews]= useState([]);
  const indexNum = jwt_decode(sessionStorage.getItem("accessToken")).id;
 
  const onDateChange = (newDate) => {
    setDate(newDate);
    const data={
      selectedDate:moment(newDate).format('YYYY-MM-DD'),
      indexNumber:indexNum
    }
    const authRequest = {
      "method": "post",
      "url": "student/getSelectedInterviews",
      "data": data
    }
    callServer(authRequest).then(
      (response)=>{
        setInterviews(response.data)
      }
      ).catch(
        (error)=>{console.log(error)}
      )
  }

  const acceptInterview =(interview_id)=>{
    const data={
      interviewId:interview_id
    }
    const authRequest = {
      "method": "post",
      "url": "student/acceptInterview",
      "data": data
    }
    callServer(authRequest).then(
      (response)=>{
        console.log(response)
      }).catch(
        (error)=>{console.log(error)}
      )
  }

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

              {interviews.length==0?(
                <p>You have no Interviews to show.</p>
                ):(
                  interviews.map((interview)=>(
                    
                    <AccordionItem Header={interview.name} body='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. '
                
                card1heading='Event Time'
                card1context={interview.start_time}

                card2heading='Event Date'
                card2context={interview.date}

                card3heading='Event Location'
                card3context={interview.type}
                
                card4heading='Contact Number'
                card4context={interview.telephone_no}

                card5heading='Interview status'
                card5context={interview.status}

                PrimaryBtn='Accept Invitation'
                acceptInterview={acceptInterview}
                interviewId={interview.interview_id}
                status={interview.status=='Pending response'?'':'1'}

                InfoBtn = 'Decline'
                InfoBtnLink = 'handleShow'

                ></AccordionItem>
                  
                  ))
                )
              }
                            
              </Col>
              
              <Col sm={5}>

                <Card body>
                    <Calendar
                    onChange={onDateChange}
                    value={date}
                    showNeighboringMonth={false}
                    locale={"UTC"}
                    className="w-100 border-0"
                  />  
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

