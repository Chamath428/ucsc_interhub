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

import CompanyApplicants from "./companyApplicants";
import CompanyAdvertisements from "./companyAdvertisement";
import CompanyManageSupervisors from "./companyManageSupervisor";
import NotFound from "../notFound";
import StudentHome from "../Student/StudentHome";
import CompanyHome from "./companyHome";
import CompanyManageScheduleInterviews from "./companyManageScheduleInterviews";
import CreateAdvertisement from "./companyCreateAdvertisement";
import CoordinatorRegisteredCompanyProfile from "../Coordinator/CoordinatorRegisteredCompanyProfile";
import AnnouncementFullCard from "../../component/Cards/AnnouncementFullCard";
import ViewAdvertisement from "./companyAdvertisementPreview";


function CompanyBase(){


return(
    <div className="App">

    <TopNavTest actor='Company'/>

        <div className="flex">

            <aside className="sidebarArea shadow" id="sidebarArea">
                <SideBar 
                    dashTitle1='Dashboard' dashLink1='Company'
                    dashTitle2='Advertisement' dashLink2='Company/Advertisement'
                    dashTitle3='Applicants' dashLink3='Company/ApplicantsCompany'
                    dashTitle4='Interview' dashLink4='Company/Interview'
                    dashTitle5='Supervisors' dashLink5='Company/Supervisors'
                    dashTitle6='Profile' dashLink6='Company/Profile'
                />
            </aside>

            <main>
                <div className='container pt-5'>

                    <Route exact path="/Company" component={CompanyHome} />

                    <Route exact path="/Company/ApplicantsCompany" component={CompanyApplicants} />

                    <Route exact path="/Company/Supervisors" component={CompanyManageSupervisors} />

                    <Route exact path="/Company/Advertisement" component={CompanyAdvertisements} />

                    <Route exact path="/Company/Interview" component={CompanyManageScheduleInterviews} />

                    <Route exact path="/Company/Create-ad" component={CreateAdvertisement} />

                    <Route exact path="/Company/Profile" component={CoordinatorRegisteredCompanyProfile} />
 
                    {/* Components */}
                    <Route exact path="/Company/AnnouncementPage" component={AnnouncementFullCard} />
                    <Route exact path="/Company/View-Advertisement" component={ViewAdvertisement} />
                
                </div>  
            </main>
        </div>
    </div>
);
}

export default CompanyBase;