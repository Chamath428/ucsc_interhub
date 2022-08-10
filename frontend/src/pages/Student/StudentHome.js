import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const StudentHome = () => {  
return (
<<<<<<< Updated upstream
  <Container>
      <Form>
        <h2>Student Home</h2><br />
        
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
=======
  <Container >

        {/* main cards */}
        <div className='container pt-5'>
        <h3>Student Home</h3>

          <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

            <DashCards Title='1/3' SubTitle='Pitching Stage' BgColour='primary' colourCaps='Primary' txtColour='white'/>
            <DashCards Title='104' SubTitle='Vacancies' BgColour='primary' colourCaps='Primary' txtColour='white'/>
            <DashCards Title='104' SubTitle='Available Companies' BgColour='primary' colourCaps='Primary' txtColour='white'/>
            <DashCards Title='104' SubTitle='Available Companies' BgColour='primary' colourCaps='Primary' txtColour='white'/>

          </Stack>

        </div>


        {/* applied cards */}
        <Container className='mt-5'>

        <h3>Applied Vacancies</h3>

          <Stack direction="horizontal" gap={4} className='d-flex justify-content-between mt-4'>

            <LinkCard Title='Synopsys' subTitle='Software Engineer' Link='Visit Page'/>
            <LinkCard Title='Enactor' subTitle='Software Engineer' Link='Visit Page'/>
            <LinkCard Title='99x' subTitle='Software Engineer' Link='Visit Page'/>
            <LinkCard Title='LSEG' subTitle='Software Engineer' Link='Visit Page'/>

          </Stack>

        </Container>


>>>>>>> Stashed changes
  </Container>

  );
}

export default StudentHome;