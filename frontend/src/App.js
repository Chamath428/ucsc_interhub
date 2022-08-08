import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage';
import HomeNavBar from './component/homepage/HomeNavBar/homeNavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

 import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import StudentHome from './pages/Student/StudentHome';
import StudentAnnouncement from './pages/Student/StudentAnnouncement';
import StudentInternship from './pages/Student/StudentInternship';
import StudentInterviews from './pages/Student/StudentInterviews';
import StudentSettings from './pages/Student/StudentSettings';
import DashSideNavigation from './component/Dashboard/DashSideNavigation';
import DashboardTopNav from './component/Dashboard/DashNav';
import DashboardMenu from './component/Dashboard/DashMenu';
import CoordinatorHome from './pages/Coordinator/CoordinatorHome';
import CoordinatorStudent from './pages/Coordinator/CoordinatorStudent';
import CoordinatorStudentBulkList from './pages/Coordinator/CoordinatorStudentBulkList';
import CoordinatorCompany from './pages/Coordinator/CoordinatorCompany';
import CoordinatorCompanyPending from './pages/Coordinator/CoordinatorCompanyPending';
import StaffMemberStudentSelections from './pages/StaffMember/sMStudenSelection';
import StaffMemberStudents from './pages/StaffMember/sMStudent';
import StaffMemberHome from './pages/StaffMember/staffMemberHome';
import SMAddStudents from './pages/StaffMember/sMAddStudents';
import SideBar from './component/Dashboard/SideBar/sideBar';
import TopNav from './component/Dashboard/TopNav/topNav';
import SMCompanyVisit from "./pages/StaffMember/sMCompanyVisit";
import SMRegisteredOrganization from './pages/StaffMember/sMRegisteredOrganization';
import SMNewOrganization from './pages/StaffMember/sMNewOrganization';
import StaffMembertHome from './pages/StaffMember/sMAddStudents';
import SupervisorHome from './pages/Supervisor/supervisorHome';



import './App.css';


function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <TopNav></TopNav>  
      <main className='pt-5'>
      <div className="pt-5" style={{paddingLeft:'20px'}}>
            <SupervisorHome></SupervisorHome>
      </div>
    </main>
      
    </div>
  );
}

export default App;


