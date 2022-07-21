import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './homeNavBarStyles.css'

function HomeNavBar() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">UCSC InternHub</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                UCSC InternHub
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="nav-li" href="#action1">Home</Nav.Link>
                  <Nav.Link className="nav-li" href="#action2">How does it work?</Nav.Link>
                  <Nav.Link className="nav-li" href="#action2">About PDC</Nav.Link>
                  <Nav.Link className="nav-li" href="#action2">Organizations</Nav.Link>
                  <Nav.Link className="nav-li" href="#action2">Internship Process</Nav.Link>
                  <Nav.Link className="nav-li" href="#action2">Register as an Organizations</Nav.Link>
                  <Nav.Link className="nav-li" href="#action2">Login</Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default HomeNavBar;