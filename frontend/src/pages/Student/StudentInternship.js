import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import DashboardTabs from '../../component/Dashboard/Tabs/dashboardTabs';
import DashboardMenu from '../../component/Dashboard/Tabs/dashboardMenu';
import DashCards from '../../component/Cards/dashCard';
import Stack from 'react-bootstrap/Stack';
import BodyCard from '../../component/Cards/bodyCard';
import LinkCard from '../../component/Cards/linksCard';
import NavBarPill from '../../component/Navs/navBar';
import AnnouncementCard from '../../component/Cards/announcementCard';
import HorizontalCard from '../../component/Dashboard/HorizontalCard/horizontalCard';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';


const StudentInternship = () => {  

  const [value, onChange] = useState(new Date());

return (
  <Container >

        {/* main cards */}
        <div className='container pt-5'>

          <h3>My Internship</h3>

          <Stack direction="horizontal" gap={2} className='d-flex justify-content-between mt-4'>

            <InfoCard title='Employer' count='Synopsys' icon='building' cardWidth='3'></InfoCard>
            <InfoCard title='Duration' count='7 Weeks' icon='person-fill' cardWidth='3'></InfoCard>
            <InfoCard title='Supervisor' count='M. Bodhinayake' icon='calendar-check-fill' cardWidth='3'></InfoCard>

          </Stack>

        </div>

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
            <Button>Add weekly report</Button>
          </div>
        </Stack>

        </Card>

        <h3>Announcements</h3>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 8.00 pm | 30.07.2022' Title='DevOps Session at Creative Software' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

      </div>

      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt-5 pt-3">
        <Card body>
          <Calendar onChange={onChange} value={value} className="w-100 border-0"/> 
        </Card> 

        <AnnouncementCard Header='Event' Title='IEEE Techno Meetup: Introdcution to Kubernets' Text='This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>    

        <AnnouncementCard Header='Event' Title='IEEE Techno Meetup: Introdcution to Kubernets' Text='This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>    

      </div>

      </div>

        </Container>


  </Container>

  );
}

export default StudentInternship;