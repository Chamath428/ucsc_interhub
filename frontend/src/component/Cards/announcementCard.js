import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AnnouncementCard(props) {
  return (
    <Card className='mt-3 mb-5'>
      <Card.Header>{props.Header}</Card.Header>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        <Button variant="primary">{props.Button}</Button>
      </Card.Body>
    </Card>
  );
}

export default AnnouncementCard;