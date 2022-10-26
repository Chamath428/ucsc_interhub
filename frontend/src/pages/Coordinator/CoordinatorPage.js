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
import CoordinatorManageCompany from "./coordinatorManageCompany";
import CoordinatorManageStudents from "./coordinatorManageStudents";
import SMAddStudents from "../StaffMember/sMAddStudents";
import SMCompanyVisit from "../StaffMember/sMCompanyVisit";
import CoordinatorProgram from "./CoordinatorProgram";
import AnnouncementFullCard from "../../component/Cards/AnnouncementFullCard";
import CompanyPendingProfile from "../Company/companyPendingPage";
import StaffPage from "../StaffMember/StaffMemberPage";
import StaffProfile from "../StaffMember/sMProfile";

function CoordinatorPage()
{

return(
    <div className="App">

    <TopNavTest actor='Coordinator' Name='V. Rathnayake'/>

        <div className="flex">

            <aside className="sidebarArea shadow" id="sidebarArea">
                <SideBar 

                    dashTitle1='Dashboard' dashLink1='Coordinator/'
                    dashTitle2='Student' dashLink2='Coordinator/Student'
                    dashTitle3='Company' dashLink3='Coordinator/Company'
                    dashTitle4='Manage Staff' dashLink4='Coordinator/System-User'
                    dashTitle5='Announcement' dashLink5='Coordinator/Announcement'                    
                    dashTitle6='Program' dashLink6='Coordinator/Program'
                />

            </aside>

            <main>
                <div className='container pt-5'>
                
                    <Route exact path="/Coordinator" component={CoordinatorHome} />

                    <Route exact path="/Coordinator/Student" component={CoordinatorManageStudents} />

                    <Route exact path="/Coordinator/Company" component={CoordinatorManageCompany} />

                    <Route exact path="/Coordinator/System-User" component={CoordinatorSystemUsers} /> 

                    <Route exact path="/Coordinator/Announcement" component={CoordinatorAnnouncements} />

                    {/* <Route path="*" component={NotFound} /> */}

                    <Route exact path="/Coordinator/Add-student" component={SMAddStudents} />

                    <Route exact path="/Coordinator/Schedule-Company-Visit" component={SMCompanyVisit} />

                    <Route exact path="/Coordinator/Company-Profile" component={CoordinatorRegisteredCompanyProfile} />

                    <Route exact path="/Coordinator/Program" component={CoordinatorProgram} />
                        
                    {/* Components */}
                    <Route exact path="/Coordinator/AnnouncementPage" component={AnnouncementFullCard} />   
                    <Route exact path="/Coordinator/CompanyPending" component={CompanyPendingProfile} />
                    <Route exact path="/Coordinator/StaffProfile" component={StaffProfile} />

                </div>  
            </main>
        </div>
    </div>
);
}

export default CoordinatorPage;