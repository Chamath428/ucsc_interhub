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
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


import '../../styles/companyManageScheduleInterviews.css';    

const CompanyManageScheduleInterviews = () => {  
    const [date, setDate] = useState(new Date());
    const [valueCalendar, onChangeCalendar] = useState(new Date());
    const [interviews,setInterviews]  = useState([]);
    const [allDates,setAllDates]=useState([]);
    const [applicants,setApplicants]=useState([]);
    const [indexNumber,setIndexNumber] = useState(0);
    const [studentInterviews,setStudentInterviews] = useState([]);
    const [studentDates,setStudentDates] = useState([]);
    const [interviewDate,setInterviewDate]=useState();
    const [interviewTime,setInterviewTime]=useState();
    const [interviewType,setInterviewType]=useState(0);
    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("Interview Added Successfully!");
    const [variant, setVariant] = useState("success");
  
    const [dateVal, onChangeDate] = useState(new Date());
    const [timeVal, onChangeTime] = useState(new Date());
    const history = useHistory();
    

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

      const getStudentInterviews=(index_number)=>{
        setIndexNumber(index_number);
        const data ={
          indexNumber:parseInt(index_number)
        }

        const authRequest={
          "method":"post",
          "url":"student/getAllInterviews",
          "data":data
        }

        callServer(authRequest).then((response)=>{
          setStudentInterviews(response.data[0]);
          setStudentDates(response.data[1]);
        }).catch((error)=>{
          console.log(error);
        })
      }

      const createInterview=()=>{
          if(parseInt(indexNumber)==0){
              setAlertPara("Please select an applicant!");
              setVariant("danger");
              setShow(true);
          }else if(timeCheck(timeVal)){
              setAlertPara("Applicant already has an interview at the selected time!");
              setVariant("danger");
              setShow(true);
          }else if(interviewType==0){
            setAlertPara("Please select an interview type!");
            setVariant("danger");
            setShow(true);
          }else{
            const data ={
              indexNumber:parseInt(indexNumber),
              time:timeVal,
              date:moment(dateVal).format('YYYY-MM-DD'),
              companyId:jwtDecode(sessionStorage.getItem("accessToken")).id,
              type:parseInt(interviewType)
            }

            const authRequest={
              "method":"post",
              "url":"organization/createInterview",
              "data":data
            }

            callServer(authRequest).then((response)=>{
              window.location.reload(false);
            }).catch((error)=>{
              setAlertPara("Something went wrong when creating the interview!");
              setVariant("danger");
              setShow(true);
            })
          }
      }

      function timeCheck(selectedTime){
        let boo=false;
        studentInterviews.map((studentInterview)=>{
          if(studentInterview.start_time==selectedTime){
            console.log(studentInterview.start_time)
            boo= true;
          }   
        })
        return boo
      }


      const showAlert = (response) => {
        setAlertPara("Interview Added Successfully!");
        setVariant("success");
        setShow(true);
      }

        return (
            <div className='containinterview mt-0 ms-5'style={{width:'90%'}}>
                            <h2 className="mb-4">Manage Interviews</h2>

            <Tabs 
                defaultActiveKey="ScheduledInterviews"
                className="ManageInterviewTab"
                
            >
                <Tab className="InterviewTab" eventKey="ScheduledInterviews" title="Scheduled Interviews">
                <div className='contain-interview'>
                
                        
        <Container className='mt-5'>
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
                        <div className='d-flex flex-row justify-content-sm-between mt-4 mb-2'>

                        </div> 
                        <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>{alertPara}</Alert.Heading>
                      </Alert>
                        <div className='row'>
            
            <div className="card col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-3">
                <Form>
                  <div className='row mt-4 ms-2'>
                  <h5>Select a candidate to schedule an interview with</h5>

                    <div className='col-9 mt-2'>
                      <Form.Group className="mb-3" controlId="jobTitle">
                  
                          <Form.Select aria-label="Default select example" onChange={(event) => { getStudentInterviews(event.target.value) }}>
                            <option value="0">Select A Name</option>
                            {applicants.map((applicant)=>(
                              <option value={applicant.index_number}>{applicant.name}</option>
                            ))}
                          </Form.Select> 

                      </Form.Group>
                    </div>

                  </div>
                </Form>

                <div className='row mt-3 mb-3 p-3 pt-4'>
                    <Form>
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
                            <TimePicker onChange={onChangeTime} disableClock value={timeVal} />    
                            </Col>
                          </Form.Group>


                      </div>
                  </div>
                
                {/* Choose the interview method */}
                <div className='row gutters'>

                        <h5>Choose the interview method</h5>
                        {['radio'].map((type) => (
                          <div key={`inline-${type}`} className="mt-1 mb-3">
                            <Form.Check
                              inline
                              label="Online"
                              name="interviewMethod"
                              type={type}
                              value="1"
                              onClick={(event) => { setInterviewType(event.target.value)}}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              label="Onsite"
                              name="interviewMethod"
                              type={type}
                              value="2"
                              onClick={(event) => { setInterviewType(event.target.value)}}
                              id={`inline-${type}-2`}
                            />
                          </div>
                        ))}
                    <div className='row gutters '>
                       <div className="card-body h-100 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-3">
                   
                      <Stack direction="horizontal" gap={2}>

                         
                              <button type="button" id="submit" onClick={createInterview} name="submit" className="btn btn-primary">Schedule Interview</button>
                      </Stack>
                            
                        </div>
                        
                    </div>
                   
                </div>
                </Form> 
                {/* end of left side column */}
                </div>  
            </div>

            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12 mt-3">
              
                <Card body>
                    <Calendar 
                    onChange={onChangeCalendar} 
                    value={valueCalendar} 
                    className="w-100 border-0"
                    
                    tileClassName={({ date, view }) => {
                      if(studentDates.find(x=>x.date===moment(date).format("YYYY-MM-DD"))){
                       return  'highlight-red'
                      }
                    }}

                    /> 
                  </Card>
                
                <Card className='mt-2 p-2'>
                <h5 className='mx-3 my-2'>Other interviews of the student</h5>

                {studentInterviews.length==0?
                <p>No interviews to show</p>
                :studentInterviews.map((studentInterview)=>(
                  <AnnouncementCard Header={studentInterview.date} Title={`Starting Time:${studentInterview.start_time}`} Button='View'/>
                ))}

                </Card>

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