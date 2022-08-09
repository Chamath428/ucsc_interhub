import React, { Component } from 'react';
import './topNavStyles.css'

class TopNav extends Component {
    render() { 
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

           <a className="navbar-brand" href="#">
            UCSC InterHub
           </a>

           <ul className="navbar-nav ms-auto d-flex flex-row">

           <li className="nav-item dropdown">
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
        </li>

           </ul>
     
         </div>

       </nav>


        );
    }
}
 
export default TopNav;