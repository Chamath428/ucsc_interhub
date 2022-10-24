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

          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className='card5 mb-4'>
                <Card.Header>{props.card5heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card5context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

          </Row>


          <div style={{marginRight: '5px', display: 'inline'}}>
          <Button variant="primary" disabled={props.status} onClick={()=>props.markAsDone(props.interview_id,props.interview_index)}>{props.PrimaryBtn}</Button>
          </div>
          {/* <InfoBtn text={props.InfoBtn} link={handleShow}></InfoBtn> */}
          <Button variant="outline-danger" disabled={props.status} onClick={handleShow}>Cancel</Button>

          {/* modal start */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure want to cancel the  interview?</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="danger" onClick={
                ()=>{
                  props.cancelInterview(props.interview_id,props.interview_index)
                  handleClose();
                }
                }>
                Yes
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