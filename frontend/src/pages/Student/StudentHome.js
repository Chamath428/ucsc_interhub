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
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { callServer } from '../authServer';


const StudentHome = () => {  

  const [adds,setAdds] = useState([]);
  const [announce,setAnnounce] = useState([]);

  useEffect(()=>{
      const data={
          index_number:jwtDecode(sessionStorage.getItem("accessToken")).id
      }
      const authRequest = {
          "method":"post",
          "url": "student/getAllAdvertiesmentApplied",
          "data": data
      }

      callServer(authRequest).then((response)=>{
          console.log(response);
          setAdds(response.data);
      }).catch((error)=>{
          console.log(error);
      })


      const announcedata={
        // index_number:jwtDecode(sessionStorage.getItem("accessToken")).id
    }
    const authAnnounceRequest = {
        "method":"post",
        "url": "student/getAllAnnouncements",
        "data": {}
    }

    callServer(authAnnounceRequest).then((response)=>{
        console.log(response);
        setAnnounce(response.data);
    }).catch((error)=>{
        console.log(error);
    })



  },[])



return (
  <div className="contain mt-5 ms-5" style={{ width: "90%" }}>
  <div className="container">
    <h2 className="mb-4">Student Home</h2>
    
            <Stack
          direction="horizontal"
          gap={4}
          className="d-flex justify-content-between mt-4"
        >
          <InfoCard
            count="2/3"
            title="Second Round"
            cardWidth="4"
            icon="pie-chart-fill"
          />
          <InfoCard
            count="6"
            title="Vacancies"
            cardWidth="4"
            icon="person-plus-fill"
          />
          <InfoCard
            count="4"
            title="Interviews"
            cardWidth="4"
            icon="megaphone-fill"
          />
        </Stack>
      

        <Container className='mt-5'>

      <h3>Applied Vacancies</h3>

      <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

                {adds.length==0?(
                <p>You have no Advertisements to show.</p>
                ):(
                  adds.map((add)=>(

        <LinkCard Title={add.name} subTitle={add.job_role}  data={add.advertisement_id} />

        ))
        )
      }

      </Stack>

      <div className='mt-5'>
      <h3>Announcements</h3>

      {announce.length==0?(
                <p>You have no Advertisements to show.</p>
                ):(
                  announce.map((ann)=>(

        <AnnouncementCard Time= {ann.time} Date= {ann.date} Title= {ann.title} Text={ann.body}></AnnouncementCard>

        ))
        )
      }

        </div>
      </Container>
  </div>
  </div>
  );
};

export default StudentHome;