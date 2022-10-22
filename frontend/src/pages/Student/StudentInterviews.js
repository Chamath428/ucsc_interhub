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
import StudentPassedInterviews from './StudentPassedInterviews';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import modalInterviewReject from '../../component/Modal/modalCenter';
import { callServer } from '../authServer';
import moment from 'moment'
import jwt_decode from "jwt-decode";
import '../../styles/studentInterview.css'
import StudentAvailability from './StudentAvailability';

function StudentInterviews() {
  const [date, setDate] = useState();
  const [interviews,setInterviews]= useState([]);
  const indexNum = jwt_decode(sessionStorage.getItem("accessToken")).id;
  const [allDates,setAllDates]=useState([]);

  const mark = [
    '04-03-2020',
    '03-03-2020',
    '05-03-2020'
]

  useEffect(()=>{
    const data = {
      indexNumber:indexNum
    }
    const authRequest={
      "method": "post",
      "url": "student/getAllInterviews",
      "data": data
    }

    callServer(authRequest).then((response)=>{
      setInterviews(response.data[0]);
      setAllDates(response.data[1]);
      console.log(allDates);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);
 
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

  const acceptInterview =(interview_id,interview_index)=>{
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
        const interviews_copy = [...interviews];
        interviews_copy[interview_index].status="Accepted";
        setInterviews(interviews_copy);
      }).catch(
        (error)=>{console.log(error)}
      )
  }

  const declineInterview=(interview_id,decline_messagge,interview_index)=>{
    const data={
      interviewId:interview_id,
      decline_messagge:decline_messagge
    }
    const authRequest = {
      "method": "post",
      "url": "student/declineInterview",
      "data": data
    }
    callServer(authRequest).then(
      (response)=>{
        const interviews_copy = [...interviews];
        interviews_copy[interview_index].status="Declined";
        setInterviews(interviews_copy);
      }).catch(
        (error)=>{console.log(error)}
      )
  }

  return (
    <div>
      <div className='container pt-5'>
      <h2 className='mb-5'>Interviews</h2> 
      <Tabs
      defaultActiveKey="yourInterview"
      id="justify-tab-example"
      className="mb-3 TabsStyle"
            
      >

      <Tab eventKey="yourInterview" title="Your Interviews" >
        <div className=''><br />

          <h3>Your Interviews</h3><br />

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
                declineInterview={declineInterview}
                interviewId={interview.interview_id}
                interview_index={interviews.indexOf(interview)}
                status={interview.status=='Pending response'?'':'1'}
                declined={interview.status=='Declined'?'1':''}

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

                    tileClassName={({ date, view }) => {
                      if(allDates.find(x=>x.date===moment(date).format("YYYY-MM-DD"))){
                       return  'highlight'
                      }
                    }}

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

      <Tab eventKey="pastInterview" title="Past Interviews">
        <br />
        <StudentPassedInterviews />
        <br />
      </Tab>

      <Tab eventKey="yourAvailability" title="Your Availability">
        <br />
        <StudentAvailability />
        <br />
      </Tab>
      
      </Tabs>

      </div>
    </div>

  );
}

export default StudentInterviews;

