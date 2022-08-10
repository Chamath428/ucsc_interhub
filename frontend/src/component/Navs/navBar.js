import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBarPill(props) {

    return (
    
    <Nav fill variant="tabs">

      <Nav.Item>
        <Nav.Link as={Link} to={"/"+props.link1}>{props.Heading1}</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
      <Nav.Link as={Link} to={"/"+props.link2}>{props.Heading2}</Nav.Link>
      </Nav.Item>
      
    </Nav>

    );
}

export default NavBarPill;