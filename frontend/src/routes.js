import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import HomePage from './pages/homePage';
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Signup from "./pages/signup";
import StudentHome from "./pages/Student/StudentHome";
import StudentInternship from "./pages/Student/StudentInternship";
import StudentBase from "./pages/Student/StudentPage";
import StudentProfile from "./pages/Student/StudentProfile";
import SupervisorHome from "./pages/Supervisor/supervisorHome";
import SupervisorPage from "./pages/Supervisor/SupervisorPage";
import StaffPage from "./pages/StaffMember/StaffMemberPage";
import CoordinatorPage from "./pages/Coordinator/CoordinatorPage";
import CompanyBase from "./pages/Company/companyPage";
import RegisteredPage from "./pages/registeredPage";

function PageRouting()
{
    return(

        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Signup} />
            <Route path="/registered" component={RegisteredPage}/>

            <Route path="/Student" component={StudentBase} />
            <Route path="/Supervisor" component={SupervisorPage} />
            <Route path="/Staff" component={StaffPage} />
            <Route path="/Coordinator" component={CoordinatorPage} />
            <Route path="/Company" component={CompanyBase} />

        </Router>
        
    );

}

export default PageRouting;