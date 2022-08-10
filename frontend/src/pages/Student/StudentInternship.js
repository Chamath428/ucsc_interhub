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

const StudentInternship = () => {  
return (
  <Container >

        {/* main cards */}
        <div className='container pt-5'>
        <h3>My Internship</h3>

          <Stack direction="horizontal" gap={2} className='d-flex justify-content-between mt-4'>

            <InfoCard title='Employer' count='Synopsys' icon='building'></InfoCard>
            <InfoCard title='Duration' count='7 Weeks' icon='person-fill'></InfoCard>
            <InfoCard title='Supervisor' count='M. Bodhinayake' icon='calendar-check-fill'></InfoCard>

          </Stack>

        </div>

        {/* applied cards */}
        <Container className='mt-5'>

        {/* <NavBarPill Heading1='Announcements' link1='announcements' Heading2='Events' link2='events'></NavBarPill> */}


        <h3>Announcements</h3>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 8.00 pm | 30.07.2022' Title='DevOps Session at Creative Software' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        </Container>


  </Container>

  );
}

export default StudentInternship;