import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';

import Stack from 'react-bootstrap/Stack';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import DateTimePicker from 'react-datetime-picker';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AnnouncementCard from '../../component/Cards/announcementCard';



const CompanyScheduleInterview = () => {  
  const [valueCalendar, onChangeCalendar] = useState(new Date());

  const [dateVal, onChangeDate] = useState(new Date());
  const [timeVal, onChangeTime] = useState(new Date());

return (
  <Container >

        {/* main cards */}
        <div className='container pt-5'>

          <h3>Schedule an interview</h3>

          <div className='row'>
          
            <div className="card col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-3">
                <Form>
                  <div className='row mt-3 ms-2'>
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

          <div className='row gutters'>
          <div className="card col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-3">

              <div className="h-100">
                    <div className="card-body">

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
              </div>
              
          </div>
        
        </div>

  </Container>

  );
}

export default CompanyScheduleInterview;