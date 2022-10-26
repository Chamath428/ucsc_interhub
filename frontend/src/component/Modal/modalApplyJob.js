// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
// import Alert from 'react-bootstrap/Alert';
// import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useState } from 'react';
import { callServer } from '../../pages/authServer'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory,Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ApplyforRoleButton({adData}) {
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const params = new URLSearchParams({
  //   contact: this.ContactPerson,
  //   phoneNumber: this.PhoneNumber,
  //   email: this.Email
  // }).toString();


  const [alertPara, setAlertPara] = useState("Student Added Successfully!");
  const [variant, setVariant] = useState("success");

  const [uploadCVFile,setCVFile] = useState();

  const uploadCV=()=>{

    const cvData = new FormData();    
        cvData.append('cv',uploadCVFile)
        cvData.append('addId',parseInt(adData.advertisement_id))
        cvData.append('comId',parseInt(adData.company_id))
    
    const authCVRequest = {
      "method": "post",
      "url": "student/uploadCV/"+parseInt(jwt_decode(sessionStorage.getItem("accessToken")).id),
      "data": cvData,
      headers:{ 'Content-Type': 'multipart/form-data'}
    }
    callServer(authCVRequest).then((response) => {
      setShow(false);
    }).catch(function (error) {
      if (error.response) {
        setAlertPara("Something went wrong when uploading CSV File");
        setVariant("danger");
        setShow(true);
      }
    })

    const showAlert = (response) => {
      setAlertPara("Profile Update Successfully!");
      setVariant("success");
      setShow(true);
    }
  }


  return (
    <>
                {/* <Alert variant={variant} show={show} onClose={() => setShow(true)} dismissible>
              <Alert.Heading>{alertPara}</Alert.Heading>
            </Alert> */}

      <Button variant="primary" active className=''  onClick={handleShow}>
        Apply for role
      </Button>{' '}

      <Modal show={show} onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       >
        <Modal.Header closeButton>
          <Modal.Title>Upload your CV to apply</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pl-4'>
        <p>{adData.advertisement_id}{adData.company_id}</p>
        <Form >
          <div>
            <Form.Group className="mb-3" controlId="programStartDate">
              <Form.Label>Select only PDF File</Form.Label>
              <Row><Col lg="4"><Form.Control type="file" accept="application/pdf" onChange={(event)=> {
                      console.log(event.target.files)
                      setCVFile(event.target.files[0])
                      }} /></Col></Row>
            </Form.Group>
            
          </div>
          <hr />
            <Row className="float-right ">
              <Col className='mt-1'>
                <Button variant="secondary" onClick={handleClose} >
                    Back
                </Button>{' '}
                {/* <Link to={{pathname:'/'+props.actor+'/View-advertisement', state:props.data}}> */}
                  
                <Button variant="primary" type="button" onClick={uploadCV}>
                  Apply for the role
                </Button>
              

                {/* </Link> */}

              </Col>
            </Row>
          </Form>


        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
          

          
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ApplyforRoleButton;
 