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
        
            dashTitle1='Dashboard' dashLink1='Staff/'
            dashTitle2='Add Students' dashLink2='Staff/Add-students'
            dashTitle3='Company Visits' dashLink3='Staff/Company-visit'
            dashTitle4='New Organization' dashLink4='Staff/New-organization'
            dashTitle5='Register Organization' dashLink5='Staff/Reg-organization'
            dashTitle6='Student Selection' dashLink6='Staff/Student-selections'

        ></SideBar>

        <TopNav headerLink='Staff'></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route exact path="/Staff" component={StaffMemberHome} />

                <Route exact path="/Staff/Add-students" component={SMAddStudents} />

                <Route exact path="/Staff/Company-visit" component={SMCompanyVisit} />

                <Route exact path="/Staff/New-organization" component={SMNewOrganization} />

                <Route exact path="/Staff/Reg-organization" component={SMRegisteredOrganization} />

                <Route exact path="/Staff/Student-selections" component={StaffMemberStudents} />
            
                {/* <Route path="*" component={NotFound} /> */}


            </div>  
        </main>

    </div>
);
}

export default StaffPage;