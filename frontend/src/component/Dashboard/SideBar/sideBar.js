import React, { Component } from 'react';
import './sideBarStyles.css';
// import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Container from "react-bootstrap/esm/Container";

import { Button } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

// import { Link, useLocation } from "react-router-dom";
// import user1 from "../../../assets/images/users/user4.jpg";
// import probg from "../../../assets/images/bg/download.jpg";

import { useLocation } from "react-router-dom";

// class SideBar extends Component {
const SideBar = (props) =>{


  return (
      
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text">UCSC InternHub</div>
    </a>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0"/>

    {/* <!-- Nav Item - Dashboard --> */}
    {/* <li className="nav-item active">
        <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li> */}
    <nav id="sidebarMenu" defaultActiveKey={'/'+props.dashLink1}>

    <script>$(".dash").trigger('click');</script>
    
    {props.dashTitle1 && <li className="nav-item" >         
    
    <hr className="sidebar-divider"/>

    <Nav.Link className="dash nav-link"  as={Link}  eventKey={'/'+props.dashLink1} to={'/'+props.dashLink1} >{props.dashTitle1}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    
    {props.dashTitle2 && <li className="nav-item" > 
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink2} to={'/'+props.dashLink2} >{props.dashTitle2}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle3 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink3} to={'/'+props.dashLink3} >{props.dashTitle3}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle4 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink4} to={'/'+props.dashLink4} >{props.dashTitle4}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle5 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink5} to={'/'+props.dashLink5} >{props.dashTitle5}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle6 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink6} to={'/'+props.dashLink6} >{props.dashTitle6}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle7 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink7} to={'/'+props.dashLink7} >{props.dashTitle7}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle8 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink8} to={'/'+props.dashLink8} >{props.dashTitle8}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle8 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink8} to={'/'+props.dashLink8} >{props.dashTitle8}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}


    {props.dashTitle9 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink9} to={'/'+props.dashLink9} >{props.dashTitle9}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

    {props.dashTitle10 && <li className="nav-item ">
    <hr className="sidebar-divider"/>

    <Nav.Link as={Link} eventKey={'/'+props.dashLink10} to={'/'+props.dashLink10} >{props.dashTitle10}</Nav.Link>

    <hr className="sidebar-divider"/>

    </li>}

<div>
    {/* <!-- Heading --> */}
    {/* <div className="sidebar-heading">
        Interface
    </div> */}

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    {/* <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="bi bi-compass"></i>
            <span>Components</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li> */}

    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
    {/* <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <a className="collapse-item" href="utilities-color.html">Colors</a>
                <a className="collapse-item" href="utilities-border.html">Borders</a>
                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                <a className="collapse-item" href="utilities-other.html">Other</a>
            </div>
        </div>
    </li> */}

    {/* <!-- Divider --> */}
    {/* <hr className="sidebar-divider"/> */}

    {/* <!-- Heading --> */}
    {/* <div className="sidebar-heading">
        Addons
    </div> */}

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    {/* <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="login.html">Login</a>
                <a className="collapse-item" href="register.html">Register</a>
                <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <a className="collapse-item" href="404.html">404 Page</a>
                <a className="collapse-item" href="blank.html">Blank Page</a>
            </div>
        </div>
    </li> */}

    {/* <!-- Nav Item - Charts --> */}
    {/* <li className="nav-item">
        <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
    </li> */}

    {/* <!-- Nav Item - Tables --> */}
    {/* <li className="nav-item">
        <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li> */}

    {/* <!-- Divider --> */}
    {/* <hr className="sidebar-divider d-none d-md-block"/> */}

    {/* <!-- Sidebar Toggler (Sidebar) --> */}
    {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div> */}

</div>

    </nav>

    </ul>

  );
};

 
export default SideBar;