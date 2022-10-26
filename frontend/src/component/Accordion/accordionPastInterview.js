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

function AccordionItemPast(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [declineMessagge,setDeclineMessage] = useState("");

  return (
    <Accordion >
        
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.Header}</Accordion.Header>
        <Accordion.Body>
          {props.body}
          <br /><br />
          
          <Row>
            <Col>
              {props.card1heading && <Card style={{ width: '18rem' }} className='card1 mb-4'>
                <Card.Header>{props.card1heading}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card1context}</ListGroup.Item>

                </ListGroup>
              </Card>}
            </Col>

            <Col>
              {props.card2heading && <Card style={{ width: '18rem' }} className='card2 mb-4'>
                <Card.Header>{props.card2heading}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card2context}</ListGroup.Item>

                </ListGroup>
              </Card> } 
            </Col>

          </Row>


          <Row>
            <Col>
              {props.card3heading && <Card style={{ width: '18rem' }} className='card3 mb-4'>
                <Card.Header>{props.card3heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card3context}</ListGroup.Item>

                </ListGroup>
              </Card> }
            </Col>

            <Col>
              {props.card4heading && <Card style={{ width: '18rem' }} className='card4 mb-4'>
                <Card.Header>{props.card4heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card4context}</ListGroup.Item>

                </ListGroup>
              </Card> }  
            </Col>

          </Row>

          <Row>
            <Col>
              {props.card5heading && <Card style={{ width: '18rem' }} className='card5 mb-4'>
                <Card.Header>{props.card5heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card5context}</ListGroup.Item>

                </ListGroup>
              </Card> } 
            </Col>

          </Row>
          
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

        </Accordion.Body>

      </Accordion.Item>
      <br />
    </Accordion>
  );
}

export default AccordionItemPast;