import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
function AnnouncementFullCard() {
  let history = useHistory();

  return (
    <Container className="my-5 mt-5">
      <h2 className="mb-3 mt-5">Announcement</h2>
      <Card>
        <Card.Header>Posted at: 8.00 pm | 30.07.2022</Card.Header>
        <Card.Body>
          <Card.Title>DevOps Session at Creative Software</Card.Title>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Card.Text>
          <div className="d-flex flex-row-reverse">
            <Button
              variant="primary"
              className="float-right mr-2"
              onClick={() => history.goBack()}
            >
                <i class="bi bi-arrow-left mr-2"></i>
              Back
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AnnouncementFullCard;
