import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function DashboardTopNav() {
  return (
    <Navbar>
      <Container >

        <Navbar.Brand href="#home">UCSC InternHub</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as: <a href="/Staff/Member/Profile.js">C. Chinthana</a> */}
            Signed in as: <p href="/Staff/Member/Profile.js">C. Chinthana</p>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashboardTopNav;
