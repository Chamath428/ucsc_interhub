import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Card, Row,Col, Button} from 'react-bootstrap';
import PrimaryBtn from '../../Buttons/primaryBtn';
import InfoBtn from '../../Buttons/outlineBtn';
import DashboardButton from '../../Dashboard/DashboardButton/dashboardButton';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


import './advertisementCard.css';

function AdvertisementCard(props) {
  return ( 
    <div className="AdvertisementCard"> 
      <Container className='pb-4'>
      <Card className='cardAD'>          
          <Row>
            <Col md="4">
              <Card.Img className ="cardImage" variant="center"  src={props.logo} />
            </Col>
            <Col md="7">
              <Card.Body>
              <Card.Title>{props.jobrole}</Card.Title>
              <Card.Text> 
              Company Name : {props.company}
              </Card.Text>
              <div className="ButtonSet">
                 {/* <Button className="button1 me-3" variant='outline-primary'>Bookmark</Button> */}
                  {/* <DashboardButton inside={'View more'}></DashboardButton> */}

                  <Nav.Link as={Link} to="/Student/View-advertisement"> <DashboardButton inside={'View More'}></DashboardButton></Nav.Link>
 
                  { /*<Button className="button1" variant="primary">View more</Button> */}
              </div>
              </Card.Body> 
            </Col>
          </Row>
        </Card>       
        </Container>
        </div>
        );
        }
export default AdvertisementCard;  