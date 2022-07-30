import React, { Component } from 'react';
import './sideBarStyles.css';



class SideBar extends Component {

    render() { 
        return (

          <div>

            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
              <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                  <a href="#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                    <span>Main dashboard</span>
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

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Sales</span></a>

                </div>
              </div>
            </nav>

            {/* end of sidenav */}
          
    </div>

      

        );
    }
}
 
export default SideBar;