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
import StaffMemberManageStudents from "./StaffMemberManageStudents";
import StaffMemberAdvertisements from "./sMAdvertisments";
import StaffMemberManageCompany from "./staffMemberCompany";

function StaffPage(){


return(
    <div className="App">

        <SideBar
        
            dashTitle1='Dashboard' dashLink1='Staff/'
            dashTitle2='Students' dashLink2='Staff/Student'
            dashTitle3='Company' dashLink3='Staff/Company'
            dashTitle4='Advertisement' dashLink4='Staff/Advertisement'

        ></SideBar>

        <TopNav headerLink='Staff'></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route exact path="/Staff" component={StaffMemberHome} />

                <Route exact path="/Staff/Student" component={StaffMemberManageStudents} />

                <Route exact path="/Staff/Company" component={StaffMemberManageCompany} />

                <Route exact path="/Staff/Advertisement" component={StaffMemberAdvertisements} />

                {/* buttons from here */}

                <Route exact path="/Staff/Add-student" component={SMAddStudents} />

                <Route exact path="/Staff/Schedule-Company-Visit" component={SMCompanyVisit} />
                
                {/* <Route path="*" component={NotFound} /> */}


            </div>  
        </main>

    </div>
);
}

export default StaffPage;