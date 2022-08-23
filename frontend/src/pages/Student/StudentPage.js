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

function StudentBase(){


return(
    <div className="App">

        <SideBar
            dashTitle1='Dashboard' dashLink1='Student/Home'
            dashTitle2='Internship' dashLink2='Student/Internship'
            dashTitle3='Internviews' dashLink3='Student/Interviews'
            dashTitle4='My Profile' dashLink4='Student/Profile'
            dashTitle5='Edit Profile' dashLink5='Student/Edit-Profile'
        ></SideBar>

        <TopNav></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route path="/Student/Home" component={StudentHome} />

                <Route path="/Student/Internship" component={StudentInterviews} />

                <Route path="/Student/Interviews" component={StudentInternship} />

                <Route path="/Student/Profile" component={StudentProfile} />

                <Route path="/Student/Edit-Profile" component={StudentEditProfile} />

                <Route path="*" component={NotFound} />


            </div>  
        </main>

    </div>
);
}

export default StudentBase;