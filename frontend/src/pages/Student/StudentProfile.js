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
            <Container>

                {/* <Stack direction="horizontal" gap={3} className="d-flex align-items-stretch"> */}
                    <Row>
                        <Col sm={2} className="alignTop">

                            <Card body>
                                <ProfilePic/>
                                
                                <div className="d-grid gap-2">
                                    <PrimaryBtn text='View my CV'></PrimaryBtn>
                                </div><br />

                                <div className="d-grid gap-2">
                                    <InfoBtn text='Send me an email'></InfoBtn>
                                </div>
                                
                                <div>
                                    <br />
                                    <div className="d-flex justify-content-between">
                                        
                                            <Button variant="outline-primary" style={{marginRight: '5px'}}><i className="bi bi-facebook ms-1"></i></Button>
                                            <Button variant="outline-primary" style={{marginRight: '5px'}}><i className="bi bi-linkedin ms-1"></i></Button>
                                            <Button variant="outline-primary" style={{marginRight: '5px'}}><i className="bi bi-github ms-1"></i></Button>
                                    </div>
                                </div>

                                <br />

                            </Card>

                        </Col>
                            

                        <Col sm={10} className="alignTop">
                                <Card body>
                                    <Row>
                                        <h1>Chamath Madushanka</h1>
                                        <h5>BSc. Computer Science</h5>
                                        <hr />
                                    </Row>
                                    <Row>
                                        <BodyCard bodyText='description'></BodyCard>
                                    </Row>
                                    
                                    <Stack direction="horizontal" gap={3}>                        
                                        <CardListItem header='Job Role Preferences' listItem1='Front End Developer' listItem2='Python Developer' listItem3='DevOps Engineer'></CardListItem>

                                        <CardListItem header='Academic' listItem1='Qualification 1' listItem2='Qualification 2' listItem3='Qualification 3'></CardListItem>
                                    
                                    </Stack>
                                </Card>
                                
                        </Col>
                    </Row>
                {/* </Stack> */}
                    <Row>
                        <Col><br />
                            {/* <Stack direction="horizontal" gap={3}> */}

                                <Card body>
                                    <YoutubeEmbed embedId="rokGy0huYEA" />
                                </Card>
                        </Col>
                        

                    </Row>

                
                
            </Container>
        );
    }
    }

export default StudentProfile;

