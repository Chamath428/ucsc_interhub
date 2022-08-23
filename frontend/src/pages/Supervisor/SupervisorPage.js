import SideBar from "../../component/Dashboard/SideBar/sideBar";
import TopNav from "../../component/Dashboard/TopNav/topNav";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SupervisorHome from "./supervisorHome";
import supervisorAssignInterns from "./supervisorAssignInterns";
import SupervisorProgressReports from "./supervisorProgressReports";
import NotFound from "../notFound";

function SupervisorPage(){


return(
    <div className="App">

        <SideBar
            dashTitle1='Dashboard' dashLink1='Supervisor'
            dashTitle2='Interns' dashLink2='Supervisor/Interns'
            dashTitle3='Reporting' dashLink3='Supervisor/Progress-Reports'
            
        ></SideBar>

        <TopNav headerLink='Supervisor'></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route exact path="/Supervisor" component={SupervisorHome} />

                <Route exact path="/Supervisor/Interns" component={supervisorAssignInterns} />

                <Route exact path="/Supervisor/Progress-Reports" component={SupervisorProgressReports} />

                {/* <Route path="*" component={NotFound} /> */}

            </div>  
        </main>

    </div>
);
}

export default SupervisorPage;