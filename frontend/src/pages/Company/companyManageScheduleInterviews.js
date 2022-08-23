import React, { Component,useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col,Button} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import { Accordion } from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import AccordionItem from '../../component/Accordion/accordion';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard'; 
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import AnnouncementCard from '../../component/Cards/announcementCard';


import '../../styles/companyManageScheduleInterviews.css';    

const CompanyManageScheduleInterviews = () => {  
    const [value, onChange] = useState(new Date());
    const [valueCalendar, onChangeCalendar] = useState(new Date());
  
    const [dateVal, onChangeDate] = useState(new Date());
    const [timeVal, onChangeTime] = useState(new Date());

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
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
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