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


function SubmitModalReport() {
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const params = new URLSearchParams({
  //   contact: this.ContactPerson,
  //   phoneNumber: this.PhoneNumber,
  //   email: this.Email
  // }).toString();


  // const [alertPara, setAlertPara] = useState("Student Added Successfully!");
  // const [variant, setVariant] = useState("success");

  // const [uploadCVFile,setCVFile] = useState();

  // const uploadCV=()=>{

  //   const cvData = new FormData();    
  //       cvData.append('cv',uploadCVFile)
  //       cvData.append('addId',parseInt(adData.advertisement_id))
  //       cvData.append('comId',parseInt(adData.company_id))
    
  //   const authCVRequest = {
  //     "method": "post",
  //     "url": "student/uploadCV/"+parseInt(jwt_decode(sessionStorage.getItem("accessToken")).id),
  //     "data": cvData,
  //     headers:{ 'Content-Type': 'multipart/form-data'}
  //   }
  //   callServer(authCVRequest).then((response) => {}).catch(function (error) {
  //     if (error.response) {
  //       setAlertPara("Something went wrong when uploading CSV File");
  //       setVariant("danger");
  //       setShow(true);
  //     }
  //   })
  // }


  return (
    <>

      <Button variant="primary" active className=''  onClick={handleShow}>
        Upload Weekly Report
      </Button>{' '}

      <Modal show={show} onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       >
        <Modal.Header closeButton>
          <Modal.Title>Upload report</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pl-4'>
        <Form >
          <div>
            <Form.Group className="mb-3" controlId="programStartDate">
              <Form.Label>Select only PDF File</Form.Label>
              <Row><Col lg="4"><Form.Control type="file" accept="application/pdf" onChange={(event)=> {
                      console.log(event.target.files)
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
                  
                <Button variant="primary" type="submit">
                  Submit Report
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

export default SubmitModalReport;
 