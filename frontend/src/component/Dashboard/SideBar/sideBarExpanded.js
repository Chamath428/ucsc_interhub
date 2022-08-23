import React from "react";
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './sideBarExpanded.css';

export const SideBar = ({ sideNavExpanded, setSideNavExpanded }) => {
    return (
        <>

            <SideNav className="sideBarExpanded"
                style={{
                     backgroundColor: 'gray',
                     position:'fixed',
                     color:'blue',
                     top: 0,
                     left: 0,
                     bottom: 0,
                     boxShadow: '0 2px 2px rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%)',
                     borderRight: '1px solid #0d6efd',
                     zIndex:600,
                     padding:'58px 0 0',
                     
                    }}
                onToggle={() => {
                    setSideNavExpanded(!sideNavExpanded);
                }}
                expanded={sideNavExpanded}
                
            >
                <SideNav.Toggle />

                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">

                        <NavText>Main dashboard</NavText>
                    </NavItem>
                    <NavItem eventKey="Webiste-traffic">

                        <NavText>Webiste traffic</NavText>
                    </NavItem>
                    <NavItem eventKey="Password">

                        <NavText>Password</NavText>
                    </NavItem>
                    <NavItem eventKey="Analytics">

                        <NavText>Analytics</NavText>
                    </NavItem>
                    <NavItem eventKey="SEO">

                        <NavText>SEO</NavText>
                    </NavItem>
                    <NavItem eventKey="Orders">

                        <NavText>Orders</NavText>
                    </NavItem>
                    <NavItem eventKey="International">

                        <NavText>International</NavText>
                    </NavItem>
                    <NavItem eventKey="Partners">

                        <NavText>Partners</NavText>
                    </NavItem>
                    <NavItem eventKey="Calendar">

                        <NavText>Calendar</NavText>
                    </NavItem>
                    <NavItem eventKey="Users">

                        <NavText>Users</NavText>
                    </NavItem>
                    <NavItem eventKey="Sales">

                        <NavText>Sales</NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>


        </>
    );

    
};

export default SideBar;
