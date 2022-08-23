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

function CoordinatorPage(){


return(
    <div className="App">

        <SideBar

            dashTitle1='Dashboard' dashLink1='Coordinator/Home'
            dashTitle2='Companies' dashLink2='Coordinator/Manage-companies'
            dashTitle3='Students' dashLink3='Coordinator/Student-list'
            dashTitle4='Announcement' dashLink4='Coordinator/Add-announcement'
            dashTitle5='Settings' dashLink5='Coordinator/Settings'

        ></SideBar>

        <TopNav></TopNav>
    
        <main>
            <div className='container pt-5'>
{/* done */}
                <Route path="/Coordinator/Add-announcement" component={CoordinatorAddAnnouncements} />

                <Route path="/Coordinator/Add-student" component={CoordinatorStudentBulkList} />

                <Route path="/Coordinator/Add-staff" component={CoordinatorAddUserSetting} />

{/* done */}
                <Route path="/Coordinator/Manage-companies" component={CoordinatorCompany} /> 

                <Route path="/Coordinator/Manage-pending-companies" component={CoordinatorCompanyPending} />

                <Route path="/Coordinator/Company-profile" component={CoordinatorCompanyProfileDetails} />

{/* done */}
                <Route path="/Coordinator/Home" component={CoordinatorHome} />

                <Route path="/Coordinator/Reg-company-profile" component={CoordinatorRegisteredCompanyProfile} />

{/* done */}
                <Route path="/Coordinator/Student-list" component={CoordinatorStudent} />
{/* done */}
                <Route path="/Coordinator/Settings" component={CoordinatorUsersSetting} />

                <Route path="/Coordinator/Announcements" component={CoordinatorViewAnnounsments} />

                <Route path="*" component={NotFound} />

            </div>  
        </main>

    </div>
);
}

export default CoordinatorPage;