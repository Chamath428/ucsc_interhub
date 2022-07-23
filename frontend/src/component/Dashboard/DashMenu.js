import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


function DashboardMenu() {
  return (
    <Container>
      <br />
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/StudentHome">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Internship">Internship</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Announcement">Announcement</Nav.Link>
      </Nav.Item>

    </Nav>
      <br />
    </Container>
  );
}

export default DashboardMenu;