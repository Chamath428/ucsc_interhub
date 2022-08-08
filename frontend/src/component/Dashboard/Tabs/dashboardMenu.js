import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import StudentHome from '../../../pages/Student/StudentHome';

class DashboardMenu extends Component {

  render ()
  {
    const menuName= this.props.menuName;

    return (

        <Nav.Link eventKey={menuName}>{menuName}</Nav.Link>
     
    );
  }
}

export default DashboardMenu;