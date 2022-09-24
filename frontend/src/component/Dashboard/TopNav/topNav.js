import React, { Component } from 'react';
import './topNavStyles.css'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import DashboardButton from '../DashboardButton/dashboardButton';
import InfoBtn from '../../Buttons/outlineBtn';

class TopNav extends Component {
    render() { 

      const headerLink = this.props.headerLink;

        return (

        <nav id="main-navbar" className="mx-3 navbar navbar-expand-lg navbar-light bg-white fixed-top">

         <div className="container-fluid">

           <button
                   className="navbar-toggler"
                   type="button"
                   data-mdb-toggle="collapse"
                   data-mdb-target="#sidebarMenu"
                   aria-controls="sidebarMenu"
                   aria-expanded="false"
                   aria-label="Toggle navigation"
                   >
             <i className="bi bi-list-columns-reverse"></i>
             
           </button>


           <a className="navbar-brand" href={"/"+headerLink}>
            UCSC InternHub
           </a>

           <ul className="navbar-nav ms-auto d-flex flex-row">

          
           {/* <li className="nav-item dropdown">
          <a
             className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
             >
            <img
                 src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                 className="rounded-circle"
                 height="22"
                 alt=""
                 loading="lazy"
                 />
          </a>


          <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
              >
            <li><a className="dropdown-item" href="#">My profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li> */}


      {/* Nav Item - User Information */}

      <li className="nav-item dropdown no-arrow">

          <a className="nav-link dropdown-toggle" id="userDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Chamath Chinthana   </span>
              
              <img className="img-profile rounded-circle"/>
                  <i class="bi bi-person-circle"></i>
          </a>

          {/* <!-- Dropdown - User Information --> */}

          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
              </a>
              <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
              </a>
              <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
              </a>
          </div>
      </li>

        <Nav.Link className='p-0' as={Link} to="/"> <InfoBtn text={'Log Out'}></InfoBtn></Nav.Link>

           </ul>
     
         </div>

       </nav>


        );
    }
}
 
export default TopNav;