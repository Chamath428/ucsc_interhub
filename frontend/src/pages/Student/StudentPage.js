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
import TopNavTest from "../../component/Dashboard/TopNav/topNavTest";
import { Container } from "react-bootstrap";
import StudentPassedInterviews from "./StudentPassedInterviews";
import AnnouncementFullCard from "../../component/Cards/AnnouncementFullCard";
import StudentAdvertisements from "./StudentAdvertisements";

function StudentBase(){


return(
    <div className="App">

        <TopNavTest />

        <div className="flex">

            <aside className="sidebarArea shadow" id="sidebarArea">
                <SideBar 
                     dashTitle1='Dashboard' dashLink1='Student'
                     dashTitle2='Advertisements' dashLink2='Student/Advertisement'
                     dashTitle3='Interviews' dashLink3='Student/Interviews'
                     dashTitle4='Internship' dashLink4='Student/Internship'
                     dashTitle5='My Profile' dashLink5='Student/Profile'
                />
            </aside>

            <div>

                <div>
                    <main>
                    

                            <Route exact path="/Student" component={StudentHome} />

                            <Route exact path="/Student/Internship" component={StudentInternship} />

                            <Route exact path="/Student/Interviews" component={StudentInterviews} />

                            <Route exact path="/Student/Profile" component={StudentProfile} />

                            <Route exact path="/Student/Edit-Profile" component={StudentEditProfile} />

                            <Route exact path="/Student/Advertisement" component={StudentAdvertisements} />

                            <Route exact path="/Student/View-advertisement" component={ViewAdvertisement} />

                            <Route exact path="/Student/View-company-profile" component={CoordinatorRegisteredCompanyProfile} />
                        
                            <Route exact path="/Student/StudentPassedInterviews" component={StudentPassedInterviews} />

                            {/* Components */}
                            <Route exact path="/Student/AnnouncementPage" component={AnnouncementFullCard} />


                            {/* <Route exact path="*" component={NotFound} /> */}

            
                    </main>

                </div>

            </div>
                    
        </div>

    </div>
);
}

export default StudentBase;