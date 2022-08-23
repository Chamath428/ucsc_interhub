import SideBar from "../../component/Dashboard/SideBar/sideBar";
import TopNav from "../../component/Dashboard/TopNav/topNav";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import NotFound from "../notFound";
import StaffMemberHome from "./staffMemberHome";
import SMAddStudents from "./sMAddStudents";
import SMCompanyVisit from "./sMCompanyVisit";
import SMNewOrganization from "./sMNewOrganization";
import SMRegisteredOrganization from "./sMRegisteredOrganization";
import StaffMemberStudents from "./sMStudenSelection";

function StaffPage(){


return(
    <div className="App">

        <SideBar
            dashTitle1='Dashboard' dashLink1='Staff/Home'
            dashTitle2='Add Students' dashLink2='Staff/Add-students'
            dashTitle3='Company Visits' dashLink3='Staff/Company-visit'
            dashTitle4='New Organization' dashLink4='Staff/New-organization'
            dashTitle5='Register Organization' dashLink5='Staff/Reg-organization'
            dashTitle6='Student Selection' dashLink6='Staff/Student-selections'
        ></SideBar>

        <TopNav></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route path="/Staff/Home" component={StaffMemberHome} />

                <Route path="/Staff/Add-students" component={SMAddStudents} />

                <Route path="/Staff/Company-visit" component={SMCompanyVisit} />

                <Route path="/Staff/New-organization" component={SMNewOrganization} />

                <Route path="/Staff/Reg-organization" component={SMRegisteredOrganization} />

                <Route path="/Staff/Student-selections" component={StaffMemberStudents} />

                

                <Route path="*" component={NotFound} />

            </div>  
        </main>

    </div>
);
}

export default StaffPage;