import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom';
function AnnouncementCard(props) {
  return (
    <Card className='mt-3 mb-5'>
      <Card.Header>{props.Header}</Card.Header>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        <div className='d-flex flex-row-reverse'>
        {/* <Button variant="primary" >{props.Button}</Button> */}
        <Link to={props.location}><Button variant="primary" className='float-right mr-2'>See More</Button></Link>  
        </div>
      </Card.Body>
    </Card>
  );
}

export default AnnouncementCard;
