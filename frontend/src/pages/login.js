import React, { Component } from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';
import '../styles/loginStyles.css';
import HandShake from '../assets/images/company.gif'
import PrimaryButton from '../component/homepage/PrimaryButton/primaryButtonClass';
import HomeNavBar from '../component/homepage/HomeNavBar/homeNavBar';
class Login extends Component {


    render() { 
        return (
            <div>
            <Container className="login-container shadow bg-body rounded form-container">
                <Row className="login-row d-flex justify-content-around align-items-center" >
                    <Col lg="6" className="left-column d-flex flex-column justify-content-center align-items-center text-center">

                            <img src={HandShake} />
                            <div className=''>
                                <h2>Thousands Of Job Opportunities Waiting For You!</h2>
                            </div>
                    </Col>

                    <Col lg="6" className="right-column d-flex justify-content-center align-items-center">
                    <div className="form-div  p-3 d-flex flex-column gap-4 text-center">
                        <h2>Hello Again!</h2>
                            <Form>
                                <div className=' d-flex flex-column gap-3'>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Username or Index-Number" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Remember Me"
                                            />
                                        </div>
                                        <div className="text-md-right">
                                                <a href="#">Forgot Password</a>
                                        </div>
                                    </div>

                                    <div className="d-grid">
                                        <PrimaryButton inside={'Login'}></PrimaryButton>
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
}
 
export default Login;