import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/homePage';
import HomeNavBar from './component/homepage/HomeNavBar/homeNavBar';


import 'bootstrap/dist/css/bootstrap.min.css';

// import React from "react";



import NavBarOnlyLogo from './component/homepage/NavBarOnlyLogo/navBarOnlyLogo';

import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import StudentHome from './pages/Student/StudentHome';
import StudentProfile from './pages/Student/StudentProfile';
import StudentAnnouncement from './pages/Student/StudentAnnouncement';
import StudentInternship from './pages/Student/StudentInternship';
import StudentInterviews from './pages/Student/StudentInterviews';
import StudentSettings from './pages/Student/StudentSettings';
import DashSideNavigation from './component/Dashboard/DashSideNavigation';
import DashboardTopNav from './component/Dashboard/DashNav';
import DashboardMenu from './component/Dashboard/DashMenu';
import CoordinatorHome from './pages/Coordinator/CoordinatorHome';
import CoordinatorStudent from './pages/Coordinator/CoordinatorStudent';
import CoordinatorAddStudent from './pages/Coordinator/CoordinatorAddStudent';
import CoordinatorCompany from './pages/Coordinator/CoordinatorCompany';
import CoordinatorUsersSetting from './pages/Coordinator/CoordinatorUsersSetting';
import CoordinatorCompanyPending from './pages/Coordinator/CoordinatorCompanyPending';
import CoordinatorAddUserSetting from './pages/Coordinator/CoordinatorAddUserSetting';
import CoordinatorAddAnnouncements from './pages/Coordinator/CoordinatorAddAnnouncements';
import CoordinatorViewAnnounsments from './pages/Coordinator/CoordinatorViewAnnounsments';
import CoordinatorAnnouncements from './pages/Coordinator/coordinatorAnnouncements';

import CoordinatorRegisteredCompanyProfile from './pages/Coordinator/CoordinatorRegisteredCompanyProfile';
import CoordinatorCompanyProfileDetails from './pages/Coordinator/CoordinatorCompanyProfileDetails';


import SupervisorHome from './pages/Supervisor/supervisorHome';


import SideBar from './component/Dashboard/SideBar/sideBar';
// import SideBarExpanded from './component/Dashboard/SideBar/sideBarExpanded';
import TopNav from './component/Dashboard/TopNav/topNav';


import StaffMemberStudentSelections from './pages/StaffMember/sMStudenSelection';
import StaffMemberStudents from './pages/StaffMember/sMStudent';
import StaffMemberHome from './pages/StaffMember/staffMemberHome';
import SMAddStudents from './pages/StaffMember/sMAddStudents';
import SMCompanyVisit from "./pages/StaffMember/sMCompanyVisit";
import SMRegisteredOrganization from './pages/StaffMember/sMRegisteredOrganization';
import SMNewOrganization from './pages/StaffMember/sMNewOrganization';
import StaffMemberAdvertisements from './pages/StaffMember/sMAdvertisments';
import StaffMemberManageStudents from './pages/StaffMember/StaffMemberManageStudents';
import StaffMemberManageCompany from './pages/StaffMember/staffMemberCompany';

import CompanyAdvertisements from './pages/Company/companyAdvertisement';
import CompanyApplicants from './pages/Company/companyApplicants';
import CompanyManageStudents from './pages/Company/companyManageSupervisor';
import CompanyManageSupervisors from './pages/Company/companyManageSupervisor';
import PageRouting from './routes';


import './App.css';

function App() {

  // const [sideNavExpanded, setSideNavExpanded] = React.useState(true);

  // function handleResize() {

  //   if (window.innerWidth <= 1005) {
  //     setSideNavExpanded(false);


  //   }
  // }

  // React.useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   handleResize(); 

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); 

  // const contentStyle = {
  //   marginLeft: sideNavExpanded ? "250px" : "70px", 
  //   transition: "margin 0.2s ease"
  // };

  return (

    <div className="App">
      
          <PageRouting/>
          {/* <StudentHome></StudentHome> */}
          {/* <StudentAnnouncement></StudentAnnouncement> */}
          {/* <StudentInternship></StudentInternship> */}
          {/* <StudentInterviews></StudentInterviews> */}

          {/* <CoordinatorHome></CoordinatorHome> */}
          {/* <CoordinatorCompany></CoordinatorCompany> */}
          {/* <CoordinatorCompanyProfileDetails></CoordinatorCompanyProfileDetails> */}
          {/* <CoordinatorCompanyPending></CoordinatorCompanyPending> */}

          {/* <StudentProfile></StudentProfile> */}

          {/* <CoordinatorStudent></CoordinatorStudent> */}
          {/* <CoordinatorAddStudent></CoordinatorAddStudent> */}
          {/* <CoordinatorUsersSetting></CoordinatorUsersSetting> */}
          {/* <CoordinatorAddUserSetting></CoordinatorAddUserSetting> */}

          {/* <CoordinatorAddAnnouncements></CoordinatorAddAnnouncements>  */}
          {/* <CoordinatorViewAnnounsments></CoordinatorViewAnnounsments> */}
          {/* <CoordinatorAnnouncements></CoordinatorAnnouncements> */}
          {/* <CoordinatorRegisteredCompanyProfile></CoordinatorRegisteredCompanyProfile> */}


          {/* <SMAddStudents></SMAddStudents> */}
          {/* <StaffMemberAdvertisements></StaffMemberAdvertisements> */}
          {/* <StaffMemberManageCompany></StaffMemberManageCompany> */}
          {/* <StaffMemberStudentSelections></StaffMemberStudentSelections> */}
          {/* <StaffMemberHome></StaffMemberHome> */}
          {/* <StaffMemberManageStudents></StaffMemberManageStudents> */}

          {/* <StaffMemberManageCompany></StaffMemberManageCompany> */}


          {/* <SMCompanyVisit></SMCompanyVisit> */}


          {/* <CompanyManageSupervisors></CompanyManageSupervisors> */}


          {/* <SupervisorHome></SupervisorHome> */}
         
       
        </div>
  );
}

export default App;


