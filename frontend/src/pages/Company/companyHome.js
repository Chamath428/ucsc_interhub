import Button from 'react-bootstrap/Button';
import { Nav,Row,Col } from 'react-bootstrap';
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
import AdvertisementCard from '../../component/Cards/AdvertismentCard/advertisementCard';
import LsegLogo from '../../assets/images/lsegLogo.png';


const CompanyHome = () => {  
return (

        <div className='contain mt-5 ms-5' style={{width :'90%'}}>
        <div className='container'>

    <h3>Company Home</h3>

    <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

      <InfoCard count='10' title='Advertisement' cardWidth='3' icon='newspaper'/>
      <InfoCard count='38' title='Applicants' cardWidth='3' icon='person-plus-fill'/>
      <InfoCard count='12' title='Interviews' cardWidth='3' icon='megaphone-fill'/>
      <InfoCard count='8' title='Interns' cardWidth='3' icon='people-fill'/>

    </Stack>

  </div>
  <Container className='mt-5'>


      <h3>Published Advertisement</h3>
      <div className="Advertisements mt-5 ms-5">
        <Row as={Col} sm>       
          <AdvertisementCard jobrole="Software Engineer" company="LSEG" logo={LsegLogo}></AdvertisementCard>
          <AdvertisementCard jobrole="Network Engineer" company="LSEG" logo={LsegLogo}></AdvertisementCard>
          <AdvertisementCard jobrole="DevOps Engineer" company="LSEG" logo={LsegLogo}></AdvertisementCard>
          <AdvertisementCard jobrole="Project Manager      .." company="LSEG" logo={LsegLogo}></AdvertisementCard>
        </Row>
      </div>


      <div className='mt-5'>
      <h3>Announcements</h3>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='Progress Report Submission are due on 30th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 8.00 pm | 30.07.2022' Title='DevOps Session at Creative Software' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        <AnnouncementCard Header='Posted at: 3.00 pm | 01.08.2022' Title='All Students are required to submit the evaluations reports by 9th of August' Text='lease note that there will be lectures and other academic activities on August 8 (Monday) and August 9 (Tuesday), despite that week has been declared as the mid semester break in the academic calendar. This is to compensate for the two Mondays that we missed at the beginning of the semester.' Button='View More'></AnnouncementCard>

        </div>
    </Container>
    </div>
        
  );
}

export default CompanyHome;