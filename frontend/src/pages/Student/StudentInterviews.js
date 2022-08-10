import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

<<<<<<< Updated upstream
const StudentInterviews = () => {  
return (
  <Container>
      <Form>
        <h2>Interviews</h2><br />
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  </Container>
=======

function StudentInterviews() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='container pt-5'>

        <h2>Your Interview Schedule</h2><br />

          <Card body>
            <Calendar onChange={onChange} value={value} className="w-100 border-0"/>
          </Card><br/>

          <AccordionItem Header='Synopsys' body='Details about the calling'></AccordionItem>
          <AccordionItem Header='WSO2' body='Details about the calling'></AccordionItem>

      </div>
    </div>
>>>>>>> Stashed changes
  );
}

export default StudentInterviews;