import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Stack from 'react-bootstrap/Stack';
import CardListItem from '../../component/Cards/CardList';
import { Route } from 'react-router-dom'
import ProfilePic from '../../component/Media/ProfilePicture/profilePic';
import BodyCard from '../../component/Cards/bodyCard';
import PrimaryBtn from '../../component/Buttons/primaryBtn';
import InfoBtn from '../../component/Buttons/outlineBtn';
import YoutubeEmbed from '../../component/YoutubeEmbed/youtubeEmbed';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { callServer } from '../authServer';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ApplyforRoleButton from '../../component/Modal/modalApplyJob';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';

const ViewAdvertisement = (props) => {  
  console.log(props.location.state)

  const [value, onChange] = useState(new Date());

  // Bookmark button constants
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const [adds,setAdds] = useState([]);

  useEffect(()=>{
      const data={
          addId:props.location.state
      }
      const authRequest = {
          "method":"post",
          "url": "student/getAdvertisementPreview",
          "data": data
      }

      callServer(authRequest).then((response)=>{
          console.log(response);
          setAdds(response.data[0]);
      }).catch((error)=>{
          console.log(error);
      })

  },[])

return (
  <Container >

  {/* main cards */}
  <div className='container pt-5 mb-5'>
    <h5 className='mb-3'>View Advertisement</h5>
    <Row>

      {/* Left side - Profile Pciture and buttons */}
      <Col className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 alignTop">
        <Card body>
          <Row>
            <Col lg='12'>
                <Row>
                <h1>Job Title</h1>
                </Row>
                <Row>
                {/* advertisement_id: 9
                job_description: "maru job eka"
                job_role: "Software Engineer"
                name: "LSEG"
                requested_interns: 2
                technologies: "java"
                type: "Published" */}
                  <Col md="auto">
                  <h6><i class="bi bi-tag mr-2"></i>{adds.job_role}</h6>
                  </Col>
                  <Col md="auto">
                  <h6><i class="bi bi-award mr-2"></i>{adds.technologies}</h6>
                  </Col>
                  <Col md="auto">
                  <h6><i class="bi bi-person mr-2"></i>{adds.requested_interns} Positions</h6>
                  </Col>
                </Row>
            </Col>
          </Row>
          {/* Top Buttons */}
          <Row className='my-2'>
            <Col lg='4'>
                {/* Use composition and render a Route for Edit Profile button */}
                <ApplyforRoleButton />
                <ToggleButton  
                  className='my-1 ml-3'
                  id="jobBookmark-check"
                  type="checkbox"
                  variant="outline-primary"
                  checked={checked}
                  value="1"
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  <i class="bi bi-bookmark-plus"></i>  {/* Bookmark icon */}
                </ToggleButton>
            </Col>
          </Row>
          <hr />
          {/* Job Description */}
          <Row className='mx-0 my-3 '>
            <Card className='border-0 mx-0'>
              <Card.Body className='mx-0'>
                <Card.Title>Job Description</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                {adds.job_description}                
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Row>
          {/* Other job qualifications */}
          <Row className='mx-0 my-3 mx-3 mb-5'>
            <Col lg='12'>
              {/* <Card>
                <Card.Header>Job Qualifications</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Qualification - 1</ListGroup.Item>
                  <ListGroup.Item>Qualification - 2</ListGroup.Item>
                </ListGroup>
              </Card> */}
            </Col>
          </Row>
          {/* Job Advertisement Video */}
          <Row className='m-2'>
              <Col className="alignTop">
              <Figure>
                  <Figure.Image
                    // width={auto}
                    // height={auto}
                    alt="Advertisement Image"
                    src="http://www.topjobs.lk/logo/0000000271/1015cTopjobs%20Version%20o%20SE,SSE%20o%20Salesforce%20o%20Absi.jpg"
                  />
                  <Figure.Caption>
                    Advertisement for SE
                  </Figure.Caption>
                </Figure>
              </Col>
          </Row>
              {/* Job Advertisement Image */}
              <Row className='m-2'>
              <Col className="alignTop">
              <Figure>
                <YoutubeEmbed embedId="rokGy0huYEA" />
                </Figure>
              </Col>
          </Row>
        </Card>
              
      </Col>

      {/* Righ tSide - Company Info */}
      <Col className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 alignTop">
        <Card body className='mb-0 pb-1'>
          <p>Posted by</p>
          <Figure className='mb-0'>
            <Figure.Image
              width={50}
              height={50}
              alt="171x180"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQG8bdX5sQ24KQ/company-logo_200_200/0/1620025336126?e=1674691200&v=beta&t=kPOUrRlckOzp95zQUpH_K0qzHQGe7gOX7udRwH1Wqmw"
            />
          </Figure>
          <h4>{adds.name}</h4>
          {/* <ProfilePic/> */}      
          <div className="d-grid gap-2 mt-4 mb-0">
              {/* <Button variant='secondary'>View Company Offers</Button> */}
              <Button variant='outline-secondary'><i class="bi bi-linkedin mr-2"></i>LinkedIn</Button>

          </div>
        </Card>
      </Col>

    </Row>
  </div>
  </Container>
  );
}

export default ViewAdvertisement;