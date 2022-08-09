import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import StudentHome from '../../../pages/Student/StudentHome';
import DashboardMenu from './dashboardMenu';

class DashboardTabs extends Component {

  render ()
  {
    const tabHeading = this.props.tabHeading;
    const tabHeading1 = this.props.tabHeading1;
    const tabHeading2 = this.props.tabHeading2;

    return (

    <Nav fill variant="tabs" defaultActiveKey="StudentHome">

      <Nav.Link eventKey="StudentHome">{tabHeading}</Nav.Link>
      <Nav.Link eventKey="Function1">{tabHeading1}</Nav.Link>
      <Nav.Link eventKey="Function2">{tabHeading2}</Nav.Link>
     
    </Nav>
    
    );
  }
}

export default DashboardTabs;