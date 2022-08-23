import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Card } from 'react-bootstrap';
import AccordionItem from '../../component/Accordion/accordion';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import AnnouncementCard from '../../component/Cards/announcementCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../../styles/staffMemberHome.css';


function StaffMemberHome() {
        const [value, onChange] = useState(new Date());

    
        return (
            <div id= 'Staffhome' className='contain ms-5 mt-5'>
                <div className='top'>
                    <div className='d-flex flex-row justify-content-sm-between'>

                        <h3>Dashboard</h3>
                    </div> 
                    <div className='SMCard'>
                        <Row>
                            <InfoCard title={"Total Students"} count={"275"} icon={"people-fill"} cardWidth={3}></InfoCard>
                            <InfoCard title={"Total Organizations"} count={"232"} icon={"building"} cardWidth={3}></InfoCard>
                            <InfoCard title={"Selected Students"} count={"25"} icon={"person-check-fill"} cardWidth={3}></InfoCard>
                            <InfoCard title={"Progress Reports"} count={"247/285"} icon={"file-earmark-text-fill"} cardWidth={3}></InfoCard>
                        </Row>

                    </div>
                </div>
                <div className='bottom mt-5'>
                    
                    <div className='bottom-left'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                            <h3>Announcements</h3>
                        </div>
                        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

                        <AnnouncementCard Header='Posted at: 8.00 pm | 30.07.2022' Title='DevOps Session at Creative Software' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

                        
                    </div>
                    <div className='bottom-right'>
                        <div className='d-flex flex-row justify-content-sm-between mb-3'>

                            <h3>Upcoming Company Visits</h3>
                        </div>
                            <Card body >
                                <Calendar onChange={onChange} value={value} className="w-100 border-0"/>
                            </Card>
                       
                            <br/>
                       
                            <AccordionItem Header='WSO2' card1heading='Date' card1context='2022-08-25' card2heading='Time' card2context='10.00A.M.' card3heading='Visit Type' card3context='Online' PrimaryBtn='Action' InfoBtn='Dismiss' ></AccordionItem>
                            <AccordionItem Header='LSEG'  card1heading='Date' card1context='2022-08-25' card2heading='Time' card2context='01.00P.M.' card3heading='Visit Type' card3context='Onsite' PrimaryBtn='Action' InfoBtn='Dismiss'></AccordionItem>
                            <AccordionItem Header='Avonet Technologies'  card1heading='Date' card1context='2022-08-25' card2heading='Time' card2context='03.00P.M.' card3heading='Visit Type' card3context='Online' PrimaryBtn='Action' InfoBtn='Dismiss'></AccordionItem>
                        
                    </div>
                </div>
            </div>
        );
    }


export default StaffMemberHome;