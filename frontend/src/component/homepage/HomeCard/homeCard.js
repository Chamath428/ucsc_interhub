import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (
    <>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className="text-center fw-bold">Card Title</Card.Title>
        <Card.Text className="text-center">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default HomeCard;

// text - center -> to make the text center
// fw-bold -> to make the text bold