import Card from 'react-bootstrap/Card';

function LinkCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>{props.Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle>
        <Card.Text>
        {props.cardBody}
        </Card.Text>
        <Card.Link href="#">{props.Link}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default LinkCard;