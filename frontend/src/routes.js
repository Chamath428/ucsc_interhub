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
import PrivateRoute from "./context/RequireAuth";

function PageRouting()
{
    return(

        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Signup} />

            <PrivateRoute allowedRole="Student" path="/Student">  <StudentBase/> </PrivateRoute>
            <PrivateRoute allowedRole="Supervisor" path="/Supervisor"> <SupervisorPage/> </PrivateRoute>
            <PrivateRoute allowedRole="Staff" path="/Staff"> <StaffPage/> </PrivateRoute>
            <PrivateRoute allowedRole="Coordinator" path="/Coordinator"> <CoordinatorPage/></PrivateRoute>
            <PrivateRoute allowedRole="Company" path="/Company"><CompanyBase/> </PrivateRoute>

        </Router>
        
    );

}

export default PageRouting;