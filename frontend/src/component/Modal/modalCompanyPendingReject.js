import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function CompanyRejectButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <Button variant='outline-danger' className='mr-2 ml-4' onClick={handleShow}><i class="bi bi-x-circle mr-2"></i>Decline</Button>{' '}


      <Modal show={show} onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       >
        <Modal.Header closeButton>
          <Modal.Title>Send company a reject message</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pl-4'>

        <Form >
          <div>
            <Form.Group controlId="programStartDate">
              <Row><Col>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Your Message"
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
                <Button variant="danger" type="submit">
                  Send Reject Message
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

export default CompanyRejectButton;
 