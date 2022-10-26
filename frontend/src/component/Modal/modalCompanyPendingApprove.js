import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { callServer } from "../../pages/authServer";

const CompanyApproveButton =(props)=> {
  const[approveCompanyRequests,setApproveCompanyRequests] = useState("0");
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.id);

  const ApproveRequest = (companyId)=>{
    setApproveCompanyRequests(companyId)
    const authRequest = {
        "method": "post",
        "url": "staffMember/AcceptCompanyRequest",
        "data": {
            id:parseInt(companyId)
        }
    }

    callServer(authRequest).then((response) => {
    }).catch(function (error) {
        if (error.response) {
            setAlertPara("Something went wrong!");
            setVariant("danger");
            setShow(true);
        }
    })
}
  return (
    <>

    <Button variant='primary' className='mr-0 ml-2' onClick={handleShow}><i class="bi bi-check-circle mr-2"></i>Approve</Button>{' '}


      <Modal show={show} onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       >
        <Modal.Header>
          <Modal.Title>Notify Company of Approval</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pl-4'>

        <Form >
          <div>
            <Form.Group controlId="programStartDate">
              <Row><Col>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Your Message (not required)"
                style={{ height: '100px' }}
              >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
                </Col>
              </Row>
            </Form.Group>
            
          </div>
            <Row className="float-right ">
              <Col className='mt-1'>
                <Button variant="secondary" onClick={handleClose} >
                    Back
                </Button>{' '}
                <Button variant="primary" type="submit" >
                    Notify Approval
                </Button>
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

export default CompanyApproveButton;
 