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

import './App.css';

function App() {
  return (
    <div className="App">
    
      {/* <Router> */}
      {/* <div className="App"> */}

        <div className="content">
          {/* <DashboardTopNav />
          <DashSideNavigation /> */}
          <Login></Login>
          {/* <Switch>

            <Route exact path="/DashboardMenu">
              <DashboardMenu />
            </Route>

            <Route exact path="/StudentHome">
              <DashboardMenu />
              <StudentHome />
            </Route>

             <Route exact path="/Internship">
              <DashboardMenu />
              <StudentInternship />
            </Route>

            <Route exact path="/Announcement">
              <DashboardMenu />
              <StudentAnnouncement />
            </Route>

            <Route exact path="/Interviews">
              <DashboardMenu />
              <StudentInterviews />
            </Route>

            <Route exact path="/Settings">
              <DashboardMenu />
             <StudentSettings />
            </Route>

          </Switch> */}
        </div>

          
      {/* </div> */}
    {/* </Router> */}
      {/* <HomePage />*/}

    </div>
  );
}

export default App;
