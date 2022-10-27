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

const StudentProfile =(props)=>{
    const MemberDetails = props.location.state;
    const name = MemberDetails.name;
    const degree = MemberDetails.student_degree.degree;

   
        return(
            <div className='container mt-5 ms-5' style={{width:'90%'}} >

                {/* <Stack direction="horizontal" gap={3} className="d-flex align-items-stretch"> */}

                    <Row>

                        {/* Left side - Profile Pciture and buttons */}

                        <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 alignTop">

                            <Card body>
                                <ProfilePic url="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                                
                                <div className="d-grid gap-2">
                                    <Button variant='primary'>View my CV</Button>
                                </div><br />

                                {/* <div className="d-grid gap-2">
                                    <Button variant='secondary'><i class="bi bi-bookmark-plus mr-2"></i>Wishlist Me</Button>
                                </div> */}
                                
                                <div>
                                    <br />
                                    <div className="d-flex justify-content-between">
                                        
                                            <Button variant="outline-primary" className=''><i className="bi bi-facebook mx-3"></i></Button>
                                            <Button variant="outline-primary" className=''><i className="bi bi-linkedin mx-3"></i></Button>
                                            <Button variant="outline-primary" className=''><i className="bi bi-github mx-3"></i></Button>
                                    </div>
                                </div>


                            </Card>

                        </Col>
                            

                        <Col className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 alignTop">
                                <Card body>
                                    <Row>
                                        <Col lg='7'>
                                            <h1>{name}</h1>
                                            <h5>{degree}</h5>
                                        </Col>
                                        <Col lg='5' >
                                            {/* Use composition and render a Route for Edit Profile button */}
                                            {/* <Route render={({ history}) => (
                                            <Button variant="primary" className='float-right mr-2'  onClick={() => { history.push('/Student/Edit-Profile') }}>Edit Profile</Button>
                                            )}/> */}
                                            {/* <Button variant="outline-danger" className='float-right mr-2'   onClick={() => window.location = 'https://ucsc.cmb.ac.lk/'}>Deactivate</Button> */}
                                        </Col>
                                    </Row>
                                    <Row className='m-2'>
                                        <BodyCard bodyText='I am a Self-Motivated and Hard-Working undergraduate who is able
to adjust to new situations and problems with confidence. With
trustworthy and good listening skills, easy to collaborate with
people. And also, I am a quick learner and always eager to learn new
skills when achieving company goals.'></BodyCard>
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

export default StudentProfile;

