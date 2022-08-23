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


const CreateAdvertisement = () => {  

  const [value, onChange] = useState(new Date());

return (
  <Container >

        {/* main cards */}
        <div className='container pt-5'>

          <h3>Create Advertisment</h3>

          <div className='row gutters'>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              <Form>
                <Form.Group className="mb-3" controlId="jobTitle">
                  <Form.Label>Job Title</Form.Label>
                  
                  <Form.Control type="email" placeholder="Job Title" />
                </Form.Group>
              </Form>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              <Form>
                <Form.Label>No. of vacancies available</Form.Label>
                
                <Form.Select aria-label="Default select example">
                  <option>Select Job Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>              
              </Form>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              <Form>
                <Form.Group className="mb-3" controlId="vacancyCount">
                  <Form.Label>No. of vacancies available</Form.Label>
                  <Form.Control type="email" placeholder="Insert Number Only" />
                </Form.Group>
              </Form>
            </div>

          </div>


          <div className='row gutters'>
            <div className="col-12 mt-3">
            <Form.Group className="mb-3" controlId="Job Description">
              <Form.Label>Job Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </div>

          </div>

          <div className='row gutters'>
           
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
              <Form>
                <Form.Group className="mb-3" controlId="job Qualifications">
                  <Form.Label>Job Qualifications</Form.Label>
                  
                  <Form.Control type="email" placeholder="Job Qualifications" />
                </Form.Group>
              </Form>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
              <Form>
                <Form.Label>Technologies Seeking</Form.Label>
                
                <Form.Select aria-label="technologiesRequired">
                  <option>Select Technologies Needed</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>              
              </Form>
            </div>


          </div>


          <div className='row gutters'>
            
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
              
              <Card body>

                <h5>Video</h5>

                <div className='row gutters'>
                  
                  <Form>
                    <div className='row align-items-center'>
                      <div className="col-9">

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          <Form.Label>Insert YoutTube Embed ID</Form.Label>
                          <Form.Control type="email" placeholder="Enter the embed ID Only" />
                          
                        </Form.Group> 
                      </div>

                      <div className="col-3 pt-4">

                        <Button variant="primary" type="submit">
                          Insert Video
                        </Button>
                        
                      </div>

                      </div>


                  </Form>

                  <div className="col-12 mt-3">

                    <Card body className='m-3'>
                    <Figure>
                      <Figure.Image
                        
                        alt="171x180"
                        src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
                      />
                    </Figure>
                    </Card>
                  </div>
                </div>

              </Card>
            
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
              <Card body>

              <h5>Image</h5>
              <Form.Label>Insert your image</Form.Label>

              <div className='row gutters m-1'>
                
                {/* <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Insert YoutTube Embed ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter the embed ID Only" />
                  
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Insert Video
                  </Button>
                </Form> */}

                <Button variant='primary'>Add Image</Button>

              </div>

                <div className='row gutters'>

                  <div className="col-12 mt-3 ">
                    <Card body className='m-3'>
                    <Figure>
                      <Figure.Image
                        
                        alt="171x180"
                        src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
                      />
                    </Figure>
                    </Card>
                  </div>


                </div>

              </Card>

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
                              <button type="button" id="submit" name="submit" className="btn btn-primary ml-3">Post Advertisement</button>

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

export default CreateAdvertisement;