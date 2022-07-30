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
import SideBar from './component/Dashboard/SideBar/sideBar';
import TopNav from './component/Dashboard/TopNav/topNav';


import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <TopNav></TopNav>
      <main >
      <div className="container pt-5">
            <CoordinatorStudent></CoordinatorStudent>
      </div>
    </main>
      
    </div>
  );
}

export default App;


