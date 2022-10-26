import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import AnnouncementCard from '../../component/Cards/announcementCard';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import SubmitModalReport from '../../component/Modal/modalSubmitReport';
import Row from 'react-bootstrap/Row';
const StudentInternship = () => {  

  const [value, onChange] = useState(new Date());

return (
  <div className="contain mt-5 ms-5" style={{ width: "90%" }}>
  <div className="container">

  <h2 className="mb-4">My Internship</h2>

        <Container className="mt-2 mx-0 px-0">
              <div className="container mx-0 px-0 mb-4 mt-3 mr-4">
                <Row className="mb-1 mr-3">

          <InfoCard title='Employer' count='Synopsys' icon='building' cardWidth='4'></InfoCard>
          <InfoCard title='Duration' count='7 Weeks' icon='person-fill' cardWidth='4'></InfoCard>
          <InfoCard title='Supervisor' count='M. Bodhinayake' icon='calendar-check-fill' cardWidth='4'></InfoCard>

        </Row>
        </div>
        </Container>

        {/* applied cards */}
        <Container className='mt-5'>

        {/* <NavBarPill Heading1='Announcements' link1='announcements' Heading2='Events' link2='events'></NavBarPill> */}

      <div className='row gutters'>
      <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12 mt-3">

        <h3>Reporting</h3>
        
        <Card body className='mt-3 mb-5'>
        <Stack direction="horizontal" gap={3}>
          <div >
            <p className="align-middle pt-3">Submission Due on: <b>20th August, 11.59pm</b></p>
          </div>
          {/* <div className="bg-light border ms-auto">Second item</div> */}
          <div className="bg-light border ms-auto">
            <SubmitModalReport />
          </div>
        </Stack>

        </Card>

        <h3>Announcements</h3>

        {/* Announcement cards */}
        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='Progress Report Submission are due on 30th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' location='AnnouncementPage'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 8.00 pm | 30.07.2022' Title='DevOps Session at Creative Software' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' location='AnnouncementPage'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' location='AnnouncementPage'></AnnouncementCard>

      </div>

      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt-5 pt-3">
        <Card body className='mt-4'>
          <Calendar onChange={onChange} value={value} className="w-100 border-0"/> 
        </Card> 

        <AnnouncementCard Header='Event' Title='IEEE Techno Meetup: Introdcution to Kubernets' Text='This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>    

        <AnnouncementCard Header='Event' Title='IEEE Techno Meetup: Introdcution to Kubernets' Text='This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>    

      </div>

      </div>

      </Container>


  </div>
  </div>
  );
}

export default StudentInternship;