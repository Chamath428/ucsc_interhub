import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import DashboardTabs from '../../component/Dashboard/Tabs/dashboardTabs';
import DashboardMenu from '../../component/Dashboard/Tabs/dashboardMenu';
import DashCards from '../../component/Cards/dashCard';
import Stack from 'react-bootstrap/Stack';
import BodyCard from '../../component/Cards/bodyCard';
import LinkCard from '../../component/Cards/linksCard';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import AnnouncementCard from '../../component/Cards/announcementCard';

const StudentHome = () => {  
return (

        <div className='contain mt-5 ms-5' style={{width :'90%'}}>
        <div className='container'>

    <h3>Student Home</h3>

    <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

      <InfoCard count='1/3' title='Pitching Stage' cardWidth='4' icon='pie-chart-fill'/>
      <InfoCard count='20' title='Vacancies' cardWidth='4' icon='person-plus-fill'/>
      <InfoCard count='3' title='Interviews' cardWidth='4' icon='megaphone-fill'/>
    
    </Stack>

  </div><Container className='mt-5'>

      <h3>Applied Vacancies</h3>

      <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

        <LinkCard Title='Synopsys' subTitle='Software Engineer' Link='Visit Page' />
        <LinkCard Title='Enactor' subTitle='Software Engineer' Link='Visit Page' />
        <LinkCard Title='99x' subTitle='Software Engineer' Link='Visit Page' />
        <LinkCard Title='LSEG' subTitle='Software Engineer' Link='Visit Page' />

      </Stack>

      <div className='mt-5'>
      <h3>Announcements</h3>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' location='/Student/AnnouncementPage'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 8.00 pm | 30.07.2022' Title='DevOps Session at Creative Software' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' location='/Student/AnnouncementPage'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' location='/Student/AnnouncementPage'></AnnouncementCard>

        </div>
    </Container>
    </div>
        
  );
}

export default StudentHome;