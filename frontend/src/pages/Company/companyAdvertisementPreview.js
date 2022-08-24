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
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import PrimaryBtn from '../../component/Buttons/primaryBtn';
import InfoBtn from '../../component/Buttons/outlineBtn';
import CardListItem from '../../component/Cards/CardList';
import ProfilePic from '../../component/Media/ProfilePicture/profilePic';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import { Link } from 'react-router-dom';

const ViewAdvertisement = () => {  

  const [value, onChange] = useState(new Date());

return (
  <Container >

        {/* main cards */}
        <div className='container pt-5'>

          <div className='col-2'>
              <Figure>
                    <Figure.Image
                      
                      alt="171x180"
                      src="https://www.lseg.com/sites/all/themes/lseg_responsive/logo.svg"
                    />
                    
              </Figure>
          </div>

          <div className='col-xl-10'>
              <h3>Vacancy for Associate Software Engineer</h3>
              <h5>LSEG Technology</h5>
          </div>

          <div className='row'>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 mt-3 ">

            <div className="d-grid gap-2">
                <PrimaryBtn text='Apply Now'></PrimaryBtn>
                                </div><br />    
                
                                <Nav.Link as={Link} to="/Student/View-company-profile"> <DashboardButton inside={'View Company Profile'}></DashboardButton></Nav.Link>


            </div>
            
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-3 ">

              <BodyCard bodyText='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never'></BodyCard>
          
            </div>
          </div>

          <div className='row gutters'>
            
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 mt-3 ">
              <Card body>
                <Figure>
                  <Figure.Image
                    
                    alt="171x180"
                    src="https://www.studentscircles.com/wp-content/uploads/2022/06/LSEG-Careers-2022.jpg"
                  />
                  
                </Figure>
              </Card>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
            
              <CardListItem header='Requirements' 
              listItem1='Sound knowledge in basic web developement technologies' 
              listItem2='Ability to work with a team' 
              listItem3='Communication Skills'
              >

              </CardListItem>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3col-sm-6 col-12 mt-3">
              <CardListItem header='Technologies' 
                listItem1='HTML, CSS, JavaScript' 
                listItem2='Front End library (React, Vue)' 
                listItem3='Database theories'
                >

                </CardListItem>
            </div>

          </div>


        

          <div className='row gutters'>
                
            <div className="col-12 mt-3 mb-5">
              <div className="card h-100">
                    <div className="card-body">

                      <Stack direction="horizontal" gap={2}>

                          <div className="bg-light border ms-auto">
                              <button type="button" id="submit" name="submit" className="btn btn-secondary mr-3">Cancel</button>
                          </div>

                          <div className="vr" />

                          <div className="bg-light border">
                              <button type="button" id="submit" name="submit" className="btn btn-primary ml-3">Apply</button>

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

export default ViewAdvertisement;