import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

function ProgramCreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button variant="primary" active className='float-right mr-4'  onClick={handleShow}>
        + Create New Placement Program
      </Button>{' '}

      <Modal show={show} onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       >
        <Modal.Header closeButton>
          <Modal.Title>Create a new placement program</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pl-4'>This action will reset the system to default status and let you add the new batch of students. However, existing companies will stay on the system.

        <br />

        <Form >
          <div>
            <Form.Group className="mt-3" controlId="programStartDate">
              <Form.Label>Start Date</Form.Label>
              <Row><Col lg="4"><Form.Control type="date"/></Col></Row>
            </Form.Group>
            <Form.Group className="mt-3 pr-5" controlId="notifyCompanies">
              <Form.Check type="checkbox" label="Notify companies about new industrial placement program" />
            </Form.Group>
          </div>
          <hr />
            <Row className="float-right ">
              <Col className='mt-1'>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>{' '}
                <Button variant="primary" type="submit">
                  Create New Program
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

export default ProgramCreateModal;
 