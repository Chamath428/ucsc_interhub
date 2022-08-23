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
import CoordinatorAddAnnouncements from "./CoordinatorAddAnnouncements";
import CoordinatorStudentBulkList from "./CoordinatorAddStudent";
import CoordinatorAddUserSetting from "./CoordinatorAddUserSetting";
import CoordinatorCompany from "./CoordinatorCompany";
import CoordinatorCompanyPending from "./CoordinatorCompanyPending";
import CoordinatorCompanyProfileDetails from "./CoordinatorCompanyProfileDetails";
import CoordinatorHome from "./CoordinatorHome";
import CoordinatorRegisteredCompanyProfile from "./CoordinatorRegisteredCompanyProfile";
import CoordinatorStudent from "./CoordinatorStudent";
import CoordinatorUsersSetting from "./CoordinatorUsersSetting";
import CoordinatorViewAnnounsments from "./CoordinatorViewAnnounsments";
import StaffMemberStudents from "../StaffMember/sMStudenSelection";

import CoordinatorSystemUsers from "./coordinatorSystemUsers";
import CoordinatorAnnouncements from "./coordinatorAnnouncements";
import StaffMemberManageStudents from "../StaffMember/StaffMemberManageStudents";
import StaffMemberManageCompany from "../StaffMember/staffMemberCompany";


function CoordinatorPage(){


return(
    <div className="App">

        <SideBar

            dashTitle1='Dashboard' dashLink1='Coordinator/'
            dashTitle2='Companies' dashLink2='Coordinator/Student'
            dashTitle3='Students' dashLink3='Coordinator/Company'
            dashTitle4='Announcement' dashLink4='Coordinator/System-User'
            dashTitle5='Settings' dashLink5='Coordinator/Announcement'


        ></SideBar>

        <TopNav headerLink='Coordinator'></TopNav>
    
        <main>
            <div className='container pt-5'>
            
                <Route exact path="/Coordinator" component={CoordinatorHome} />

                <Route exact path="/Coordinator/Student" component={StaffMemberStudents} />

                <Route exact path="/Coordinator/Company" component={CoordinatorCompany} />

                <Route exact path="/Coordinator/System-User" component={CoordinatorUsersSetting} /> 

                <Route exact path="/Coordinator/Announcement" component={CoordinatorAddAnnouncements} />

                {/* <Route path="*" component={NotFound} /> */}


            </div>  
        </main>

    </div>
);
}

export default CoordinatorPage;