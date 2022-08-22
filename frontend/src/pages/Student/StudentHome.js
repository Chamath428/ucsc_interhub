import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import DashboardTabs from '../../component/Dashboard/Tabs/dashboardTabs';
import DashboardMenu from '../../component/Dashboard/Tabs/dashboardMenu';
import DashCards from '../../component/Cards/dashCard';
import Stack from 'react-bootstrap/Stack';
import BodyCard from '../../component/Cards/bodyCard';
import LinkCard from '../../component/Cards/linksCard';

const StudentHome = () => {
  return (

    <>
      <div className='container pt-5'>

        <h3>Student Home</h3>

        <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

          <DashCards Title='1/3' SubTitle='Pitching Stage' BgColour='primary' colourCaps='Primary' txtColour='white' />
          <DashCards Title='104' SubTitle='Vacancies' BgColour='primary' colourCaps='Primary' txtColour='white' />
          <DashCards Title='104' SubTitle='Available Companies' BgColour='primary' colourCaps='Primary' txtColour='white' />
          <DashCards Title='104' SubTitle='Available Companies' BgColour='primary' colourCaps='Primary' txtColour='white' />

        </Stack>

      </div><Container className='mt-5'>

        <h3>Applied Vacancies</h3>

        <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

          <LinkCard Title='Synopsys' subTitle='Software Engineer' Link='Visit Page' />
          <LinkCard Title='Enactor' subTitle='Software Engineer' Link='Visit Page' />
          <LinkCard Title='99x' subTitle='Software Engineer' Link='Visit Page' />
          <LinkCard Title='LSEG' subTitle='Software Engineer' Link='Visit Page' />

        </Stack>

      </Container></>


  );
}

export default StudentHome;