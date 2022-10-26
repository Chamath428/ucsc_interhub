import Button from 'react-bootstrap/Button';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard'; 
import Container from 'react-bootstrap/esm/Container';
import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import { Accordion } from 'react-bootstrap';
// import AccordionItem from '../../component/Accordion/accordion';
import AccordionItemPast from '../../component/Accordion/accordionPastInterview';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabSelector from '../../component/Tab/tabs';
import StudentInterviews from './StudentInterviews';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { callServer } from '../authServer';
import moment from 'moment'
import jwt_decode from "jwt-decode";
import '../../styles/studentInterview.css'
import StudentAvailability from './StudentAvailability';

function StudentPassedInterviews() {
  const [value, onChange] = useState(new Date());

  const [date, setDate] = useState();
  const [interviews,setInterviews]= useState([]);
  const indexNum = jwt_decode(sessionStorage.getItem("accessToken")).id;
  const [allDates,setAllDates]=useState([]);

  useEffect(()=>{
    const data = {
      indexNumber:indexNum
    }
    const authRequest={
      "method": "post",
      "url": "student/getAllPastInterviews",
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
      "url": "student/getSelectedPastInterviews",
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

  // const acceptInterview =(interview_id,interview_index)=>{
  //   const data={
  //     interviewId:interview_id
  //   }
  //   const authRequest = {
  //     "method": "post",
  //     "url": "student/acceptInterview",
  //     "data": data
  //   }
  //   callServer(authRequest).then(
  //     (response)=>{
  //       const interviews_copy = [...interviews];
  //       interviews_copy[interview_index].status="Accepted";
  //       setInterviews(interviews_copy);
  //     }).catch(
  //       (error)=>{console.log(error)}
  //     )
  // }

  // const declineInterview=(interview_id,decline_messagge,interview_index)=>{
  //   const data={
  //     interviewId:interview_id,
  //     decline_messagge:decline_messagge
  //   }
  //   const authRequest = {
  //     "method": "post",
  //     "url": "student/declineInterview",
  //     "data": data
  //   }
  //   callServer(authRequest).then(
  //     (response)=>{
  //       const interviews_copy = [...interviews];
  //       interviews_copy[interview_index].status="Declined";
  //       setInterviews(interviews_copy);
  //     }).catch(
  //       (error)=>{console.log(error)}
  //     )
  // }

  return (
    <div>
        <div>

        <h4>Interview History</h4><br />

          <Row>
            <Col sm={7}>


            {interviews.length==0?(
                <p>You have no Interviews to show.</p>
                ):(
                  interviews.map((interview)=>(
                    
              <AccordionItemPast Header={interview.name} 
                card1heading='Event Time'
                card1context={interview.start_time}

                card2heading='Event Date'
                card2context={interview.date}

                card3heading='Event Location'
                card3context={interview.type}
                
                card4heading='Contact Number'
                card4context={interview.telephone_no}

                ></AccordionItemPast>
                  
                  ))
                )
              }
            
            </Col>
            
            <Col sm={5} style={{width:'100%'}} >

              <Card body className='mx-2'>
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



      </div>
    </div>

  );
}

export default StudentPassedInterviews;

