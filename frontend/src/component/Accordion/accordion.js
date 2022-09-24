import Accordion from 'react-bootstrap/Accordion';
import InfoBtn from '../Buttons/outlineBtn';
import PrimaryBtn from '../Buttons/primaryBtn';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import modalInterviewReject from '../Modal/modalCenter';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalInterviewRejection from '../Modal/modalCenter';
import Form from 'react-bootstrap/Form';

function AccordionItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Accordion >
        
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.Header}</Accordion.Header>
        <Accordion.Body>
          {props.body}
          <br /><br />
          
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className='card1 mb-4'>
                <Card.Header>{props.card1heading}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card1context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

            <Col>
              <Card style={{ width: '18rem' }} className='card2 mb-4'>
                <Card.Header>{props.card2heading}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card2context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

          </Row>


          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className='card3 mb-4'>
                <Card.Header>{props.card3heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card3context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

            <Col>
              <Card style={{ width: '18rem' }} className='card4 mb-4'>
                <Card.Header>{props.card4heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card4context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

          </Row>
          
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}



          <div style={{marginRight: '5px', display: 'inline'}}>
          <PrimaryBtn text={props.PrimaryBtn} onClick={props.PrimaryBtnLink}></PrimaryBtn>
          </div>
          {/* <InfoBtn text={props.InfoBtn} link={handleShow}></InfoBtn> */}
          <Button variant="outline-danger" onClick={handleShow}>Decline</Button>{' '}

          {/* modal start */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm decline with a message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>State a reason to decline the offer</Form.Label>
                <Form.Control as="textarea" placeholder='Enter your message briefly' rows={3} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Back
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Send message
              </Button>
            </Modal.Footer>
          </Modal>          
          {/* modal end */}

        </Accordion.Body>

      </Accordion.Item>
      <br />
    </Accordion>
  );
}

export default AccordionItem;