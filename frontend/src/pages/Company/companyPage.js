import SideBar from "../../component/Dashboard/SideBar/sideBar";
import TopNav from "../../component/Dashboard/TopNav/topNav";


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
import CompanyScheduleInterview from "./companyScheduleInterview";
import CreateAdvertisement from "./companyCreateAdvertisement";

function CompanyBase(){


return(
    <div className="App">

        <SideBar
            dashTitle1='Dashboard' dashLink1='Company'
            dashTitle2='Applicants' dashLink2='Company/ApplicantsCompany'
            dashTitle3='Supervisors' dashLink3='Company/Supervisors'
            dashTitle4='Advertisement' dashLink4='Company/Advertisement'
            dashTitle5='Interview' dashLink5='Company/Interview'

        ></SideBar>

        <TopNav headerLink='Company'></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route exact path="/Company" component={CompanyHome} />

                <Route exact path="/Company/ApplicantsCompany" component={CompanyApplicants} />

                <Route exact path="/Company/Supervisors" component={CompanyManageSupervisors} />

                <Route exact path="/Company/Advertisement" component={CompanyAdvertisements} />

                <Route exact path="/Company/Interview" component={CompanyScheduleInterview} />

                <Route exact path="/Company/Create-ad" component={CreateAdvertisement} />


            </div>  
        </main>

    </div>
);
}

export default CompanyBase;