import SideBar from "../../component/Dashboard/SideBar/sideBar";
import TopNav from "../../component/Dashboard/TopNav/topNav";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import StudentHome from "./StudentHome";
import StudentInterviews from "./StudentInterviews";
import StudentInternship from "./StudentInternship";
import StudentProfile from "./StudentProfile";
import StudentEditProfile from "./StudentSettings";
import NotFound from "../notFound";
import StaffMemberAdvertisements from "../StaffMember/sMAdvertisments";
import ViewAdvertisement from "../Company/companyAdvertisementPreview";
import CoordinatorRegisteredCompanyProfile from "../Coordinator/CoordinatorRegisteredCompanyProfile";

function StudentBase(){


return(
    <div className="App">

        <SideBar
            dashTitle1='Dashboard' dashLink1='Student/'
            dashTitle2='Advertisements' dashLink2='Student/Advertisement'
            dashTitle3='Interviews' dashLink3='Student/Interviews'
            dashTitle4='Internship' dashLink4='Student/Internship'
            dashTitle5='My Profile' dashLink5='Student/Profile'
            dashTitle6='Edit Profile' dashLink6='Student/Edit-Profile'
        ></SideBar>

        <TopNav headerLink='Student'></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route exact path="/Student" component={StudentHome} />

                <Route exact path="/Student/Internship" component={StudentInternship} />

                <Route exact path="/Student/Interviews" component={StudentInterviews} />

                <Route exact path="/Student/Profile" component={StudentProfile} />

                <Route exact path="/Student/Edit-Profile" component={StudentEditProfile} />

                <Route exact path="/Student/Advertisement" component={StaffMemberAdvertisements} />

                <Route exact path="/Student/View-advertisement" component={ViewAdvertisement} />

                <Route exact path="/Student/View-company-profile" component={CoordinatorRegisteredCompanyProfile} />

                {/* <Route path="*" component={NotFound} /> */}

            </div>  
        
        </main>

    </div>
);
}

export default StudentBase;