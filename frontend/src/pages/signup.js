import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import DashboardButton from '../component/Dashboard/DashboardButton/dashboardButton';
import NavBarOnlyLogo from '../component/homepage/NavBarOnlyLogo/navBarOnlyLogo';
import axios from 'axios';
import { URL } from './URL';
import '../styles/Signup.css';
import { useHistory } from 'react-router-dom';
import { registerCompany } from './authServer';

function Signup() {

    const [validated, setValidated] = useState(false);
    const [name,setName] = useState("77x");
    const [stablishedDate,setStablishedDate] = useState("");
    const [registerationNumber,setRegisterationNumber] = useState("regnum");
    const [address,setAddress] = useState("test address");
    const [number,setNumber] = useState(111111111);
    const [faxNumber,setFaxNumber] = useState(22222);
    const [partners,setpartners] = useState("");
    const [clients,setClients] = useState("");
    const [companyLink,setCompanyLink] = useState("test link");
    const [details,setDetails] = useState("test details");
    const [primaryContactName,setPrimaryContactName] = useState("test contract name");
    const [email,setEmail] = useState("testemail@g.com");
    const [landTelephone,setLandTelephone] = useState();
    const [mobiTelephone,setMobiTelephone] = useState(333333333);
    const [numberOfEmployees,setNumberOfEmployees] = useState(100);
    const [numberOfProjectManagers,setNumberOfProjectManagers] = useState(20);
    const [numberOfTechLeads,setNumberOfTechLeads] = useState(20);
    const [username,setUserName] = useState("test username");
    const [password,setPassword] = useState("password");
    const [confirmPassword,setConfirmPassword] = useState("password");
    const [show, setShow] = useState(false);
    const [alertPara,setAlertPara] = useState("Organization Registered Successfully!");
    const [variant,setVariant] = useState("success");

    const [isRegisteredOtherUni,setIsRegisteredOtherUni] = useState(1);
    const history = useHistory();


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const registerOrganization = (event)=>{
        event.preventDefault();
    
    const  data={name:name,
            registration_number:registerationNumber,
            date_of_establishment:stablishedDate,  
            address:address,
            telephone_no:parseInt(number),
            fax_no:parseInt(faxNumber),
            partners:partners,
            client:clients,
            website:companyLink,
            description:details,
            primaryContactName:primaryContactName,  //this is the name of the hr in the db
            email:email,
            mobile_no:parseInt(mobiTelephone),
            landline_no:parseInt(landTelephone),
            no_of_employees:parseInt(numberOfEmployees),
            no_of_project_managers:parseInt(numberOfProjectManagers),
            no_of_tech_leads:parseInt(numberOfTechLeads),
            username:username,
            password:password,
            confirm_password:confirmPassword,
            is_registered_other_uni:parseInt(isRegisteredOtherUni)};
            const authRequest = {
                "method": "post",
                "url": "user/register",
                "data": data
              }

            registerCompany(authRequest).then((response)=>{
                history.push("/registered");
            }).catch(function (error) {
            if (error.response) {
              setAlertPara("Something went wrong when registering the organization!");
              setVariant("danger");
              setShow(true);
            }})
    }

    const showAlert=(response)=>{
        setAlertPara("Organization Registered Successfully!");
        setVariant("success");
        setShow(true);
       }

  return (
    
<Container className="shadow p-4 bg-body rounded form-container">
<NavBarOnlyLogo></NavBarOnlyLogo>
      <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertPara}</Alert.Heading>
      </Alert>

    <Form noValidate validated={validated} onSubmit={registerOrganization}>

        <Row className="justify-content-md-between">
            <h2>Register as an Organizations/Company</h2>
            <Col lg={6} className="mt-5">
                <h4 className='mb-4'>Details of the Company</h4>
                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Organization/Company Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(event)=>{setName(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                        <Form.Label>Date of Stablishment</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            onChange={(event)=>{setStablishedDate(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the date of stablishment.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Company Registration Number</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(event)=>{setRegisterationNumber(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the registration number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                        <Form.Label>Current Address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(event)=>{setAddress(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the current address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Telephone Number</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            onChange={(event)=>{setNumber(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the telephone number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                    <Form.Label>Fax Number</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(event)=>{setFaxNumber(event.target.value)}}
                    />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                    <Form.Label>Partners (If any)</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(event)=>{setpartners(event.target.value)}}
                    />
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                    <Form.Label>Clients (Optional)</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(event)=>{setClients(event.target.value)}}
                    />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Company Website Link</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(event)=>{setCompanyLink(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide the website link.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3">
                    <Form.Group as={Col} xl="12" className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Organization/Company Details</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={3}
                        onChange={(event)=>{setDetails(event.target.value)}}
                        />
                    </Form.Group>
                </Row>

                
                <Row className="mb-4">
                    <h4 className='mb-4'>Details of the Main Contact</h4>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Name of the primary contact</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={(event)=>{setPrimaryContactName(event.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the primary contact name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={(event)=>{setEmail(event.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Telephone No (Landline)</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(event)=>{setLandTelephone(event.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the telephone number (Landline).
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Telephone No (Mobile)</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                onChange={(event)=>{setMobiTelephone(event.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the Telephone No (Mobile).
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                </Row>

            </Col>

            <Col lg={6} className="mt-5">
                <Row>
                    <h4 className='mb-4'>Employee Hierarchy</h4>
                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Number of Employees</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                onChange={(event)=>{setNumberOfEmployees(event.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the number of employees.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Number of Project Managers</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                onChange={(event)=>{setNumberOfProjectManagers(event.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the number of project managers.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} xl="6" controlId="validationCustom01">
                            <Form.Label>Number of Tech Leads</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                onChange={(event)=>{setNumberOfTechLeads(event.target.value)}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the number of tech leads.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                   
                </Row>
                
                {/* User details starts here */}
                
                <Row className="mb-4">
                    <h4 className='mb-4'>User Details</h4>

                    <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom01">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(event)=>{setUserName(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a username.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={(event)=>{setPassword(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xl="6" controlId="validationCustom02">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={(event)=>{setConfirmPassword(event.target.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a confirm password.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                        <Form.Group as={Col} xl="12" controlId="validationCustom01">
                            <Form.Label className="fw-bold">Specify whether the company/organization has been offered industry placement for any other universities/educational institutes before. </Form.Label>
                            {[ 'radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3 float-end">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    checked
                                    onChange={(event)=>{setIsRegisteredOtherUni(1)}}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={(event)=>{setIsRegisteredOtherUni(0)}}
                                />
                                </div>
                            ))}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3" >
                        <div className='d-flex flex-row-reverse'>
                            <DashboardButton inside={'Submit'}></DashboardButton>
                        </div>
                    </Row>

                </Row>

                {/* User deails ends here */}

            </Col>
        </Row>

        </Form>

    </Container>
  );
}

export default Signup;