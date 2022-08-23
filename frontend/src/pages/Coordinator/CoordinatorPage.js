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
import StaffMemberManageStudents from "../StaffMember/StaffMemberManageStudents";
import StaffMemberManageCompany from "../StaffMember/staffMemberCompany";

function CoordinatorPage(){


return(
    <div className="App">

        <SideBar

            dashTitle1='Dashboard' dashLink1='Coordinator/Home'
            dashTitle2='Student' dashLink2='Coordinator/Student'
            dashTitle3='Company' dashLink3='Coordinator/Company'
            dashTitle4='Manage Staff' dashLink4='Coordinator/System-user'
            dashTitle5='Announcements' dashLink5='Coordinator/Announcement'

        ></SideBar>

        <TopNav></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route path="/Coordinator/Home" component={CoordinatorHome} />

                <Route path="/Coordinator/Student" component={StaffMemberManageStudents} />

                <Route path="/Coordinator/Company" component={StaffMemberManageCompany} />

                <Route path="/Coordinator/System-user" component={CoordinatorUsersSetting} />

                <Route path="/Coordinator/Announcement" component={CoordinatorAddAnnouncements} /> 

               

                <Route path="*" component={NotFound} />

            </div>  
        </main>

    </div>
);
}

export default CoordinatorPage;