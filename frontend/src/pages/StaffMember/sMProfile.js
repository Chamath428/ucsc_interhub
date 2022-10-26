import React, { Component, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Stack from 'react-bootstrap/Stack';
import CardListItem from '../../component/Cards/CardList';
import { Route, useHistory } from 'react-router-dom'
import ProfilePic from '../../component/Media/ProfilePicture/profilePic';
import BodyCard from '../../component/Cards/bodyCard';
import PrimaryBtn from '../../component/Buttons/primaryBtn';
import InfoBtn from '../../component/Buttons/outlineBtn';
import YoutubeEmbed from '../../component/YoutubeEmbed/youtubeEmbed';
import { callServer } from "../authServer";
import jwtDecode from "jwt-decode";


const StaffProfile = (props) => {

    let history = useHistory();
    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [profileData,setProfileData] = useState([]);

    const staffId = props.location.state;
    console.log(staffId)
    useEffect(()=>{
        const data ={
            userId:(staffId?staffId:jwtDecode(sessionStorage.getItem("accessToken")).id)
        };
        const authRequest = {
            method: "post",
            url: "staffMember/getProfileData",
            data: data,
          };

          callServer(authRequest).then((response) => {
            setProfileData(response.data);
            },).catch((error)=>{
                console.log(error);
            })

        },[]);


    const deactiveAccounts = (event) => {
        event.preventDefault();

        const data = {
            // email: email,

        };

        const authRequest = {
            method: "post",
            url: "coordinator/deactiveAccounts",
            data: data,
        };
        callServer(authRequest)
            .then((response) => {
                showAlert(response);
            })
            .catch(function (error) {
                if (error.response) {
                    setAlertPara("Something went wrong deactive accounts!");
                    setVariant("danger");
                    setShow(true);
                }
            });
        history.goBack();
    };
    const showAlert = (response) => {
        setAlertPara("Deactivate Successfully!");
        setVariant("success");
        setShow(true);
    };
    return (
        <div className='container mt-5 ms-5' style={{ width: '90%' }} >

            {/* <Stack direction="horizontal" gap={3} className="d-flex align-items-stretch"> */}


            <Row>

                {/* Left side - Profile Pciture and buttons */}

                <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">

                    <Card body>
                        <ProfilePic url="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg" />
                        <div className="d-grid gap-3">
                            <Button onClick={() => window.location = 'mailto:yourmail@domain.com'} variant="outline-primary" className="btn btn-default w-100">{profileData.email_address}</Button>
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
                                <h1>{profileData.first_name}</h1>
                                <h5>{profileData.first_name}</h5>
                            </Col>
                            <Col lg='5' >
                                {/* Use composition and render a Route for Edit Profile button */}

                                <Button variant="outline-danger" className='float-right mr-2' onClick={deactiveAccounts} >Deactivate</Button>


                            </Col>
                        </Row>
                        {/* <Row className='mt-2 ml-2 mr-2'>
                                    <BodyCard bodyText='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,'></BodyCard>
                                </Row> */}


                    </Card>

                </Col>
            </Row>

        </div>
    );
};


export default StaffProfile;

