import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Card, Row,Col, Button} from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import DashboardButton from '../../Dashboard/DashboardButton/dashboardButton';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom/cjs/react-router-dom';
import './advertisementCard.css';
import ViewAdvertisement from '../../../pages/Company/companyAdvertisementPreview';

function AdvertisementCard(props) {
  return (
    
    <Card className='mb-3 align-items-stretch'>
      <Row className='align-items-center '>
        <Col lg={1} className='  justify-content-center'>
          {/* <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Gold_star_on_blue.gif" />{' '} */}
          <Figure  className=' justify-content-center mb-0 mt-2 ml-0'>
            <Figure.Image 
              src={props.logo}
              width={50}
              height={50}
            />
          </Figure>
        </Col>
        <Col lg={4} className='  font-weight-bold'>
        <span>{props.jobrole}</span>
        </Col >
        <Col lg={3}>
        <span>{props.company}</span>
        </Col>
        <Col lg={2} className=' '>
        <span>Remote</span>
        </Col>
        <Col lg={1} className='px-1'>
        <Route render={({ history}) => (
        <Button size='sm' variant="primary" className='px-4' onClick={() => { history.push('/Student/View-advertisement') }}>View</Button>
        )}/>
        </Col>
        <Col lg={1}>
        <Button size='sm' variant="outline-primary" className='mr-4 pt-1' ><i class="bi bi-bookmark"></i></Button>
        </Col>
      </Row>
    </Card>
    
    // <div className="AdvertisementCard"> 
    //   <Container className='pb-4'>
    //   <Card className='cardAD'>          
    //       <Row>
    //         <Col md="4">
    //           <Card.Img className ="cardImage" variant="center"  src={props.logo} />
    //         </Col>
    //         <Col md="7">
    //           <Card.Body>
    //           <Card.Title>{props.jobrole}</Card.Title>
    //           <Card.Text> 
    //           Company Name : {props.company}
    //           </Card.Text>
    //           <div className="ButtonSet">
    //              {/* <Button className="button1 me-3" variant='outline-primary'>Bookmark</Button> */}
    //               {/* <DashboardButton inside={'View more'}></DashboardButton> */}

    //               <Nav.Link as={Link} to="/Student/View-advertisement"> <DashboardButton inside={'View More'}></DashboardButton></Nav.Link>
 
    //               { /*<Button className="button1" variant="primary">View more</Button> */}
    //           </div>
    //           </Card.Body> 
    //         </Col>
    //       </Row>
    //     </Card>       
    //     </Container>
    //     </div>
        );
        }
export default AdvertisementCard;  