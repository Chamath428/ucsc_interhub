import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Stack from 'react-bootstrap/Stack';
import CardListItem from '../../component/Cards/CardList';

import ProfilePic from '../../component/Media/ProfilePicture/profilePic';
import BodyCard from '../../component/Cards/bodyCard';
import PrimaryBtn from '../../component/Buttons/primaryBtn';
import InfoBtn from '../../component/Buttons/outlineBtn';
import YoutubeEmbed from '../../component/YoutubeEmbed/youtubeEmbed';

class StudentProfile extends Component {

    render() {
        return(
            <div className='container mt-5 ms-5' style={{width:'90%'}} >

                {/* <Stack direction="horizontal" gap={3} className="d-flex align-items-stretch"> */}

                    <Row>

                        {/* Left side - Profile Pciture and buttons */}

                        <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 alignTop">

                            <Card body>
                                <ProfilePic/>
                                
                                <div className="d-grid gap-2">
                                    <PrimaryBtn text='View my CV'></PrimaryBtn>
                                </div><br />

                                <div className="d-grid gap-2">
                                    <InfoBtn text='Add me to wishlist'></InfoBtn>
                                </div>
                                
                                <div>
                                    <br />
                                    <div className="d-flex justify-content-between">
                                        
                                            <Button variant="outline-primary" style={{marginRight: '5px'}}><i className="bi bi-facebook ms-1"></i></Button>
                                            <Button variant="outline-primary" style={{marginRight: '5px'}}><i className="bi bi-linkedin ms-1"></i></Button>
                                            <Button variant="outline-primary" style={{marginRight: '5px'}}><i className="bi bi-github ms-1"></i></Button>
                                    </div>
                                </div>


                            </Card>

                        </Col>
                            

                        <Col className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 alignTop">
                                <Card body>
                                    <Row>
                                        <h1>Chamath Madushanka</h1>
                                        <h5>BSc. Computer Science</h5>
                                    </Row>
                                    <Row className='m-2'>
                                        <BodyCard bodyText='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,'></BodyCard>
                                    </Row>
                                    
                                    <Row className='m-2'>
                                        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 alignTop">
                       
                                            <CardListItem header='Job Role Preferences' listItem1='Front End Developer' listItem2='Python Developer' listItem3='DevOps Engineer' listItem4='Network Engineer' listItem5='UI UX Designer'></CardListItem>
                                        </Col>

                                        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 alignTop">

                                            <Card body className='flex'>
                                                <YoutubeEmbed embedId="rokGy0huYEA" />
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
    }

export default StudentProfile;

