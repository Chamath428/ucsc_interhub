import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

function ApplyforRoleButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

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

        <Form >
          <div>
            <Form.Group className="mb-3" controlId="programStartDate">
              <Form.Label>Select only PDF File</Form.Label>
              <Row><Col lg="4"><Form.Control type="file"/></Col></Row>
            </Form.Group>
            
          </div>
          <hr />
            <Row className="float-right ">
              <Col className='mt-1'>
                <Button variant="secondary" onClick={handleClose} >
                    Back
                </Button>{' '}
                <Button variant="primary" type="submit">
                  Apply for the role
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

export default ApplyforRoleButton;
 