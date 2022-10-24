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
import StaffMemberHome from "./staffMemberHome";
import SMAddStudents from "./sMAddStudents";
import SMCompanyVisit from "./sMCompanyVisit";
import SMNewOrganization from "./sMNewOrganization";
import SMRegisteredOrganization from "./sMRegisteredOrganization";
import StaffMemberStudents from "./sMStudenSelection";
import StaffMemberManageStudents from "./StaffMemberManageStudents";
import StaffMemberAdvertisements from "./sMAdvertisments";
import StaffMemberManageCompany from "./staffMemberCompany";
import StaffProfile from "./sMProfile";
import AnnouncementFullCard from "../../component/Cards/AnnouncementFullCard";
import ViewAdvertisement from "../Company/companyAdvertisementPreview";

function StaffPage(){


return(
    <div className="App">

        <TopNavTest />

        <div className="flex">

            <aside className="sidebarArea shadow" id="sidebarArea">
                <SideBar 
        
                    dashTitle1='Dashboard' dashLink1='Staff/'
                    dashTitle2='Students' dashLink2='Staff/Student'
                    dashTitle3='Company' dashLink3='Staff/Company'
                    dashTitle4='Advertisement' dashLink4='Staff/Advertisement'
                    dashTitle5='Profile' dashLink5='Staff/Profile'
                />
            </aside>
    
            <main>
                <div className='container pt-5'>

                    <Route exact path="/Staff" component={StaffMemberHome} />

                    <Route exact path="/Staff/Student" component={StaffMemberManageStudents} />

                    <Route exact path="/Staff/Company" component={StaffMemberManageCompany} />

                    <Route exact path="/Staff/Advertisement" component={StaffMemberAdvertisements} />

                    {/* Components */}
                    <Route exact path="/Staff/AnnouncementPage" component={AnnouncementFullCard} />
                    <Route exact path="/Staff/View-advertisement" component={ViewAdvertisement} />

                    {/* buttons from here */}

                    <Route exact path="/Staff/Add-student" component={SMAddStudents} />

                    <Route exact path="/Staff/Schedule-Company-Visit" component={SMCompanyVisit} />

                    <Route exact path="/Staff/Profile" component={StaffProfile} />
                    
                    {/* <Route path="*" component={NotFound} /> */}


                </div>  
            </main>
        </div>
    </div>
);
}

export default StaffPage;