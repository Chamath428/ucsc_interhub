import Accordion from 'react-bootstrap/Accordion';
import InfoBtn from '../Buttons/outlineBtn';
import PrimaryBtn from '../Buttons/primaryBtn';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AccordionItem(props) {
  return (
    <Accordion >
        
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.Header}</Accordion.Header>
        <Accordion.Body>
          {props.body}
          <br /><br />


          
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className='mb-4'>
                <Card.Header>{props.card1heading}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card1context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

            <Col>
              <Card style={{ width: '18rem' }} className='mb-4'>
                <Card.Header>{props.card2heading}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card2context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

          </Row>


          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className='mb-4'>
                <Card.Header>{props.card3heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card3context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

            <Col>
              <Card style={{ width: '18rem' }} className='mb-4'>
                <Card.Header>{props.card4heading}</Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>{props.card4context}</ListGroup.Item>

                </ListGroup>
              </Card>   
            </Col>

          </Row>
          
          

          <div style={{marginRight: '5px', display: 'inline'}}>
          <PrimaryBtn text={props.PrimaryBtn} onClick={props.PrimaryBtnLink}></PrimaryBtn>
          </div>
          <InfoBtn text={props.InfoBtn} onClick={props.InfoBtnLink}></InfoBtn>

        </Accordion.Body>

      </Accordion.Item>
      <br />
    </Accordion>
  );
}

export default AccordionItem;