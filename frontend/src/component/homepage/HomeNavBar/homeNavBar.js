import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './homeNavBarStyles.css'
import React, {useState, useEffect} from "react";

function HomeNavBar() {

  const [bg, setBG] = useState("transparent");
  const [navli, setNavLi] = useState("nav-li1");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheckDown = window.scrollY > 20
      const scrollCheckUp = window.scrollY < 20
      if (scrollCheckDown) {
        setBG("light");
        setNavLi("nav-li2");
      }if(scrollCheckUp){
        setBG("transparent");
        setNavLi("nav-li1");
      }
    })
  })

  

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar sticky="top"  key={expand} bg={bg}  expand={expand} className="mb-3">
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
                  <Nav.Link className={navli} id="nav-li" href="#action2">How does it work?</Nav.Link>
                  <Nav.Link className={navli} id="nav-li" href="#action2">FAQs</Nav.Link>
                  <Nav.Link className={navli} id="nav-li" href="#action2">Register as an Organizations</Nav.Link>
                  <Nav.Link className={navli} id="nav-li" href="#action2">Login</Nav.Link>
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