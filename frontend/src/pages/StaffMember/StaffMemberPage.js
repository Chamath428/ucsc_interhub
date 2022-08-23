import SideBar from "../../component/Dashboard/SideBar/sideBar";
import TopNav from "../../component/Dashboard/TopNav/topNav";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import NotFound from "../notFound";
import StaffMemberHome from "./staffMemberHome";
import StaffMemberManageStudents from "./StaffMemberManageStudents";
import StaffMemberManageCompany from "./staffMemberCompany";
import StaffMemberAdvertisements from "./sMAdvertisments";

function StaffPage(){


return(
    <div className="App">

        <SideBar
            dashTitle1='Dashboard' dashLink1='Staff/Home'
            dashTitle2='Students' dashLink2='Staff/Students'
            dashTitle3='Company' dashLink3='Staff/Company'
            dashTitle4='Advertisement' dashLink4='Staff/Advertisement'
            dashTitle5='Progress Report' dashLink5='Staff/Reg-organization'
        ></SideBar>

        <TopNav></TopNav>
    
        <main>
            <div className='container pt-5'>

                <Route path="/Staff/Home" component={StaffMemberHome} />
                <Route path="/Staff/Students" component={StaffMemberManageStudents} />
                <Route path="/Staff/Company" component={StaffMemberManageCompany} />
                <Route path="/Staff/Advertisement" component={StaffMemberAdvertisements} />

                <Route path="*" component={NotFound} />

            </div>  
        </main>

    </div>
);
}

export default StaffPage;