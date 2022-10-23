import React, { Component,useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col,Button} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import AccordionCompany from '../../component/Accordion/accordianCompany';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard'; 
import 'react-calendar/dist/Calendar.css';
import AnnouncementCard from '../../component/Cards/announcementCard';
import jwtDecode from 'jwt-decode';
import { callServer } from '../authServer';
import '../../styles/studentInterview.css'
import moment from 'moment';


import '../../styles/companyManageScheduleInterviews.css';    

const CompanyManageScheduleInterviews = () => {  
    const [date, setDate] = useState(new Date());
    const [valueCalendar, onChangeCalendar] = useState(new Date());
    const[interviews,setInterviews]  = useState([]);
    const [allDates,setAllDates]=useState([]);
    const [applicants,setApplicants]=useState([]);
  
    const [dateVal, onChangeDate] = useState(new Date());
    const [timeVal, onChangeTime] = useState(new Date());
    

      useEffect(()=>{
        
        const data ={
          companyId:jwtDecode(sessionStorage.getItem("accessToken")).id
        }

        const authRequest = {
          "method":"post",
          "url":"organization/getAllInterviews",
          "data":data
        }

        callServer(authRequest).then((response)=>{
          setInterviews(response.data[0]);
          setAllDates(response.data[1]);
          setApplicants(response.data[2]);
        }).catch((error)=>{
          console.log(error);
        })

      },[])

      const onDateChange = (newDate) => {
        setDate(newDate);
        const data={
          selectedDate:moment(newDate).format('YYYY-MM-DD'),
          companyId:jwtDecode(sessionStorage.getItem("accessToken")).id
        }
        const authRequest = {
          "method": "post",
          "url": "organization/getSelectedInterviews",
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

      const markAsDone=(interview_id,interview_index)=>{
        const data ={
          interviewId:interview_id
        }

        const authRequest={
          "method":"post",
          "url":"organization/markAsDone",
          "data":data
        }

        callServer(authRequest).then((response)=>{
          const interviews_copy = [...interviews];
          interviews_copy[interview_index].status="Done";
          setInterviews(interviews_copy);
        }).catch((error)=>{
          console.log(error);
        })
      }

      const cancelInterview = (interview_id,interview_index)=>{
        const data ={
          interviewId:interview_id
        }

        const authRequest={
          "method":"post",
          "url":"organization/cancelInterview",
          "data":data
        }

        callServer(authRequest).then((response)=>{
          const interviews_copy = [...interviews];
          interviews_copy[interview_index].status="Canceled";
          setInterviews(interviews_copy);
        }).catch((error)=>{
          console.log(error);
        })
      }

        return (
            <div className='containinterview mt-5 ms-5'style={{width:'90%'}}>
            <Tabs 
                defaultActiveKey="ScheduledInterviews"
                className="ManageInterviewTab"
                fill
            >
                <Tab className="InterviewTab" eventKey="ScheduledInterviews" title="Scheduled Interviews">
                <div className='contain-interview'>
                        <div className='d-flex flex-row justify-content-sm-between mt-5 mb-5'>

                            <h3>Scheduled Interviews</h3> 
                        </div>
                        
        <Container className='mt-3'>
          <Row>
            <Col sm={7}>

              {interviews.length==0?
                <p>No interviews to show</p>
                :interviews.map((interview)=>(
              <AccordionCompany Header={interview.name} body='Job Role Preference: Software Engineer'
              
              card1heading='Interview Time'
              card1context={interview.start_time}

              card2heading='Interview Date'
              card2context={interview.date}

              card3heading='Interview Type'
              card3context={interview.type}
              
              card4heading='Student Email Address'
              card4context={interview.email}

              card5heading='Interview status'
              card5context={interview.status}

              PrimaryBtn='Done'
              interview_id={interview.interview_id}
              interview_index={interviews.indexOf(interview)}
              status={(interview.status=='Done'||interview.status=='Declined'||interview.status=='Canceled')?'1':''}
              markAsDone={markAsDone}
              cancelInterview={cancelInterview}
              
              ></AccordionCompany>
                ))
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
                </Tab>
                <Tab className="InterviewTab" eventKey="ScheduleInterviews" title="Schedule Interviews">
            
                    <div className='contain-interview'>
                        <div className='d-flex flex-row justify-content-sm-between mt-5 mb-5'>

                        <h3>Schedule an interview</h3>
                        </div> 
                        <div className='row mt-3'>
            
            <div className="card col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-3">
                <Form>
                  <div className='row mt-4 ms-2'>
                  <h5>Select a candidate to schedule an interview with</h5>

                    <div className='col-9 mt-2'>
                      <Form.Group className="mb-3" controlId="jobTitle">
                  
                          <Form.Select aria-label="Default select example">
                            <option>Select A Name</option>
                            {applicants.map((applicant)=>(
                              <option value={applicant.index_number}>{applicant.name}</option>
                            ))}
                            {/* <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> */}
                          </Form.Select> 

                      </Form.Group>
                    </div>

                    <div className='col-3 mt-2'>
                    <Button variant="primary" >Apply</Button>{' '}                  
                    </div>
                  </div>
                </Form>

                <div className='row mt-3 mb-3 p-3 pt-4'>
              
                  <div className="row gutters mb-4">
                    
                      <h5>Fill the interview details</h5>

                      <div className="form-group">
                        <div className='row'>
                          
                        </div> 
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <label for="changeTime0" className='mt-3'>Pick Interview Date</label>
                              <Col sm="10">
                              <DatePicker onChange={onChangeDate} value={dateVal} />                  
                              </Col>
                          </Form.Group> 

                      
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <label for="changeTime0" className='mt-3'>Pick start time</label>
                            <Col sm="10">
                            <TimePicker onChange={onChangeTime} value={timeVal} />  
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <label for="changeTime0" className='mt-3'>Pick end time</label>
                            <Col sm="10">
                            <TimePicker onChange={onChangeTime} value={timeVal} />  
                            </Col>
                          </Form.Group>

                      </div>
                  </div>
                
                {/* Choose the interview method */}
                <div className='row gutters'>
                      <Form>
                        <h5>Choose the interview method</h5>
                        {['radio'].map((type) => (
                          <div key={`inline-${type}`} className="mt-1 mb-3">
                            <Form.Check
                              inline
                              label="Physical"
                              name="interviewMethod"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              label="Online"
                              name="interviewMethod"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              inline
                              label="Will be informed later"
                              name="interviewMethod"
                              type={type}
                              id={`inline-${type}-3`}
                            />
                          </div>
                        ))}
                         <div className='row gutters'>
          <div className="card-body h-100 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-3">
                   
                      <Stack direction="horizontal" gap={2}>

                          <div className="bg-light ms-auto">
                              <button type="button" id="submit" name="submit" className="btn btn-secondary mr-3">Cancel</button>
                          </div>


                          <div className="bg-light">
                              <button type="button" id="submit" name="submit" className="btn btn-primary ml-3">Schedule Interview</button>

                          </div>
                      </Stack>
                            
                        </div>
                        
                    </div>
                    </Form> 
                </div>
                  
                {/* end of left side column */}
                </div>  
            </div>

            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12 mt-3">
              
                <Card body>
                    <Calendar onChange={onChangeCalendar} value={valueCalendar} className="w-100 border-0"/> 
                  </Card>

                <AnnouncementCard Header='Friday, 26th August 10.00am' Title='Mr. D.S. Senananayake' Button='View'/>

                <AnnouncementCard Header='Friday, 26th August 3.00pm' Title='Mrs. R.D. Bandaranayake' Button='View'/>

            </div>

            

          </div>

         
                    
                    </div>

                </Tab>
            </Tabs>
            </div>   
        );
     }
// 


export default CompanyManageScheduleInterviews;