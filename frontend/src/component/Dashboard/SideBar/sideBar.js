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
                    <span>Dashboard</span>
                  </a>

                  <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                    <span>Interns</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action py-2 ripple"><span>Progress Reports</span></a>
                </div>
              </div>
            </nav>

            {/* end of sidenav */}
          
    </div>

      

        );
    }
}
 
export default SideBar;