import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './homeNavBarStyles.css'
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function HomeNavBar() {

  const [bg, setBG] = useState("transparent");
  const [navli, setNavLi] = useState("nav-li1");
  const [mt,setMT] = useState("mt-3 mb-3");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheckDown = window.scrollY > 20
      const scrollCheckUp = window.scrollY < 20
      if (scrollCheckDown) {
        setBG("white");
        setNavLi("nav-li2");
        setMT("mt-0 mb-3");
      }if(scrollCheckUp){
        setBG("transparent");
        setNavLi("nav-li1");
        setMT("mt-3 mb-3");
      }
    })
  })

  

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar fixed="top"  key={expand} bg={bg}  expand={expand} className={mt}>
          <Container fluid>
            <Navbar.Brand href="/" style={{fontWeight:'bold'}}>UCSC InternHub</Navbar.Brand>
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
                  <Nav.Link className={navli} id="nav-li" href="#howDoesItWork">How does it work?</Nav.Link>
                  <Nav.Link className={navli} id="nav-li" href="#faqs">FAQs</Nav.Link>
                  <Nav.Link className={navli} id="nav-li" href="#register">Register as an Organizations</Nav.Link>
                  <Nav.Link as={Link} className={navli} id="nav-li" to="/login">Login</Nav.Link>
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