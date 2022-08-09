import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState, useEffect} from "react";

function NavBarOnlyLogo() {

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar  fixed="top"  key={expand} bg="light"  expand={expand} className="shadow p-2 bg-body rounded mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={{fontWeight:'bold'}}>UCSC InternHub</Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarOnlyLogo;