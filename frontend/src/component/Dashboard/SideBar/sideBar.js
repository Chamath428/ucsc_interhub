import React, { Component } from 'react';
import './sideBarStyles.css';
// import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Container from "react-bootstrap/esm/Container";

class SideBar extends Component {


    render() { 

      const dashTitle1 = this.props.dashTitle1;
      const dashLink1 = this.props.dashLink1;
      
      const dashTitle2 = this.props.dashTitle2;
      const dashLink2 = this.props.dashLink2;
      
      const dashTitle3 = this.props.dashTitle3;
      const dashLink3 = this.props.dashLink3;
      
      const dashTitle4 = this.props.dashTitle4;
      const dashLink4 = this.props.dashLink4;
      
      const dashTitle5 = this.props.dashTitle5;
      const dashLink5 = this.props.dashLink5;

      const dashTitle6 = this.props.dashTitle6;
      const dashLink6 = this.props.dashLink6;


        return (

          <div>

            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
              <div className="position-sticky">

                <div className="list-group list-group-flush mx-3 mt-4">

                  <Nav.Link className="list-group-item list-group-item-action py-2 ripple active mb-3"  as={Link} eventKey={'/'+dashLink1} to={'/'+dashLink1} >{dashTitle1}</Nav.Link>

                  {dashLink2 && <Nav.Link  className="list-group-item list-group-item-action py-2 ripple active mb-3" as={Link} to={'/'+dashLink2} >{dashTitle2}</Nav.Link>}

                  {dashLink3 && <Nav.Link  className="list-group-item list-group-item-action py-2 ripple active mb-3" as={Link} to={'/'+dashLink3} >{dashTitle3}</Nav.Link>}

                  {dashLink4 && <Nav.Link  className="list-group-item list-group-item-action py-2 ripple active mb-3" as={Link} to={'/'+dashLink4} >{dashTitle4}</Nav.Link>}

                  {dashLink5 &&<Nav.Link  className="list-group-item list-group-item-action py-2 ripple active mb-3" as={Link} to={'/'+dashLink5} >{dashTitle5}</Nav.Link>}

                  {dashLink6 && <Nav.Link  className="list-group-item list-group-item-action py-2 ripple active mb-3" as={Link} to={'/'+dashLink6} >{dashTitle6}</Nav.Link>}

                  {/* <a href="#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                    <span>Student Home</span>
                  </a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                    <span>Webiste traffic</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Password</span></a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Analytics</span></a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                    <span>SEO</span>
                  </a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Orders</span></a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>International</span></a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Partners</span></a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Calendar</span></a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Users</span></a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Sales</span></a> */}

                </div>
              </div>
            </nav>

            {/* end of sidenav */}
          
    </div>

      

        );
    }
}
 
export default SideBar;