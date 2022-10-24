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

class StaffProfile extends Component {

    render() {

        return(
            <div className='container mt-5 ms-5' style={{width:'90%'}} >

                {/* <Stack direction="horizontal" gap={3} className="d-flex align-items-stretch"> */}

                    <Row>

                        {/* Left side - Profile Pciture and buttons */}

                        <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">

                            <Card body>
                                <ProfilePic url="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"/>
                                <div className="d-grid gap-3">
                                    <Button onClick={() => window.location = 'mailto:yourmail@domain.com'} variant="outline-primary" className="btn btn-default w-100">kgg@ucsc.amb.ac.lk</Button>
                                    <Button onClick={() => window.location = 'mailto:yourmail@domain.com'} variant="outline-primary" className="btn btn-default w-100">Visit PDC website</Button>
                                </div>
                                <div>
                                   
                                </div>
                            </Card>
                        </Col>   

                        <Col className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 alignTop">
                            <Card body>
                                <Row>
                                    <Col lg='7'>
                                        <h1>Staff Member Name</h1>
                                        <h5>Staff Member Position</h5>
                                    </Col>
                                    <Col lg='5' >
                                        {/* Use composition and render a Route for Edit Profile button */}
                                        <Button variant="outline-danger" className='float-right mr-2'   onClick={() => window.location = 'https://ucsc.cmb.ac.lk/'}>Deactivate</Button>
                                    </Col>
                                </Row>
                                <Row className='mt-2 ml-2 mr-2'>
                                    <BodyCard bodyText='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,'></BodyCard>
                                </Row>
                                
                                
                            </Card>
                                
                        </Col>
                    </Row>


                
                
            </div>
        );
    }
    }

export default StaffProfile;

