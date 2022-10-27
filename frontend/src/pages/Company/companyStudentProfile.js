import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { useState,useEffect } from 'react';
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
import { callServer } from '../authServer';

const CompanyStudentProfile =(props)=> {


    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState(
      "Applicants data fetched Successfully!"
    );
    const [variant, setVariant] = useState("success");
        const [profileData,setProfileData] = useState([]);

        useEffect(() => {
            const data = {
              studentId: props.location.state.index_number,
              advertisement_id:props.location.state.advertisement_id
            };
            const authRequest = {
              method: "post",
              url: "organization/getApplicantProfile",
              data: data,
            };
        
            callServer(authRequest)
              .then((response) => {
                setProfileData(response.data[0]);
              })
              .catch((error) => {
                setAlertPara("Something went wrong while getting applicant data!");
                setVariant("danger");
                setShow(true);
              });
          }, []);

        return(
            <div className='container mt-5 ms-5' style={{width:'90%'}} >

                {/* <Stack direction="horizontal" gap={3} className="d-flex align-items-stretch"> */}

                    <Row>

                        {/* Left side - Profile Pciture and buttons */}

                        <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 alignTop">

                            <Card body>
                                <ProfilePic url="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                                
                                <div className="d-grid gap-2">
                                    <a href={profileData.cv} download={profileData.cv}><Button className='w-100 ' variant='primary'>View my CV</Button></a>
                                    {/* <Button variant='primary'>View my CV</Button> */}
                                </div><br />

                                <div className="d-grid gap-2">
                                    <Button variant='secondary'><i class="bi bi-bookmark-plus mr-2"></i>Wishlist Me</Button>
                                </div>
                                
                                <div>
                                    <br />
                                    <div className="d-flex justify-content-between">
                                        
                                            <Button variant="outline-primary" className=''><i className="bi bi-facebook mx-2"></i></Button>
                                            <Button variant="outline-primary" className=''><i className="bi bi-linkedin mx-2"></i></Button>
                                            <Button variant="outline-primary" className=''><i className="bi bi-github mx-2"></i></Button>
                                    </div>
                                </div>


                            </Card>

                        </Col>
                            

                        <Col className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 alignTop">
                                <Card body>
                                    <Row>
                                        <Col lg='7'>
                                            <h1>{profileData.name}</h1>
                                            <h5>{profileData.degree}</h5>
                                        </Col>
                                    </Row>
                                    <Row className='m-2'>
                                        <BodyCard bodyText={profileData.about_me}></BodyCard>
                                    </Row>
                                    
                                    <Row className='m-2'>
                                        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 alignTop">
                       
                                            <CardListItem header='Job Role Preferences' listItem1='Front End Developer' listItem2='Python Developer' listItem3='DevOps Engineer' listItem4='Network Engineer' listItem5='UI UX Designer'></CardListItem>
                                        </Col>

                                        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 alignTop">

                                            <Card body className='flex'>
                                                {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
                                                <video controls="true" width = '200' src='http://localhost:5000/5f1c4a77-515c-485a-b644-038c47d5775d-2022-07-30-12-49-07.mkv'></video>
                                            </Card>

                                        </Col>                                        
                                    </Row>
                                </Card>
                                
                        </Col>
                    </Row>
                {/* </Stack> */}
                    <Row>
                        <Col><br />
                            {/* <Stack direction="horizontal" gap={3}> */}

                                
                        </Col>
                        

                    </Row>

                
                
            </div>
        );
    }

export default CompanyStudentProfile;

