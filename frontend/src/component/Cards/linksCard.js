import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function LinkCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>{props.Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle>
        <Card.Text>
        {props.cardBody}
        </Card.Text>
        <Link to={{pathname:'/Student/View-advertisement', state:props.data}}>
        <Button variant = "primary">View More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default LinkCard;