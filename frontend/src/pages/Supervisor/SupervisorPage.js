import SideBar from "../../component/Dashboard/SideBar/sideBar";
import TopNav from "../../component/Dashboard/TopNav/topNav";
import TopNavTest from "../../component/Dashboard/TopNav/topNavTest";

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

        <TopNavTest />


        <div className="flex">

            <aside className="sidebarArea shadow" id="sidebarArea">
                <SideBar 
                    dashTitle1='Dashboard' dashLink1='Supervisor'
                    dashTitle2='Interns' dashLink2='Supervisor/Interns'
                    dashTitle3='Reporting' dashLink3='Supervisor/Progress-Reports'
                />
            </aside>
        


            <main>
                <div>
                    <Router>
                        <Route exact path="/Supervisor" component={SupervisorHome} />

                        <Route exact path="/Supervisor/Interns" component={supervisorAssignInterns} />

                        <Route exact path="/Supervisor/Progress-Reports" component={SupervisorProgressReports} />

                        {/* <Route path="*" component={NotFound} /> */}
                    </Router>
                </div>  
            </main>
        </div>
    </div>
);
}

export default SupervisorPage;