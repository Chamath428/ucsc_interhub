import React, { Component, useState } from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';
import '../styles/loginStyles.css';
import HandShake from '../assets/images/company.gif'
import DashboardButton from '../component/Dashboard/DashboardButton/dashboardButton';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import NavBarOnlyLogo from '../component/homepage/NavBarOnlyLogo/navBarOnlyLogo';
import LoginNavBar from '../component/homepage/HomeNavBar/loginNavBar';
import { userLogin } from './authServer';
import Setauthtokens from './authServer';

const Login = ()=> {

        const[username,setUsername] = useState("");
        const[password,setPassword] = useState("");
        const [show, setShow] = useState(false);
        const [alertPara,setAlertPara] = useState("Loged in Successfully!");
        const [variant,setVariant] = useState("success");
        const history = useHistory();

        const handleSubmit = (event) =>{
            event.preventDefault();
            const data = {
                username:username,
                password:password
            }
            const authRequest={
                "method":"post",
                "url":"user/login",
                "data" :data
            }
            userLogin(authRequest).then((response)=>{
                showAlert(response)
                Setauthtokens(response.data.accessToken,response.data.refreshToekn);
                history.push("/".concat(response.data.role));
            }).catch(function (error) {
                if (error.response) {
                  setAlertPara(error.response.data.message);
                  setVariant("danger");
                  setShow(true);
                }})
        }

        const showAlert=(response)=>{
            setAlertPara(response.data.role);
            setVariant("success");
            setShow(true);
            console.log();
           }

        return (
            <div>
            <Container className="login-container shadow-lg bg-body form-container px-0">
            <LoginNavBar />
                <Row className="login-row d-flex justify-content-around align-items-center" >
                    <Col lg="6" className="left-column d-flex flex-column justify-content-center align-items-center text-center pl-0 ml-0" >

                            <img className='m-0 align-items-left' src={HandShake} />
                            <div className='py-2 px-2 mb-2'>
                                <h2>Hundreds Of Job Opportunities Waiting For You!</h2>
                            </div>
                    </Col>

                    <Col lg="5" className="right-column d-flex justify-content-center align-items-center mr-4 px-0">
                    <div className="form-div  p-3 mr-2 d-flex flex-column gap-4 text-center shadow-none  ">
                        <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>{alertPara}</Alert.Heading>
                        </Alert>

                        <h2 className='mt-0'>Login</h2>
                            <Form onSubmit={handleSubmit}>
                                <div className=' d-flex flex-column gap-3'>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Username or Index-Number" onChange={(event)=>{setUsername(event.target.value)}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
                                    </Form.Group>
                                    
                                    <div className='d-flex justify-content-between ml-4'>
                                        <div className='align-items-center'>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Remember Me"
                                            />
                                        </div>

                                    </div>

                                    <div className="d-grid">   
                                    <DashboardButton inside={'Login'}></DashboardButton>
                                    </div>
                                    <div className="text-md-center">
                                                <a href="#">Forgot Password</a>
                                        </div>
                                </div>
                            </Form>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        );
}
 
export default Login;