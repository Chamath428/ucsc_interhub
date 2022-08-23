import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./sideBarExpanded.css"

export const SideBar = ({ sideNavExpanded, setSideNavExpanded }) => {
  return (
    <>
      <SideNav className="sideNavExpandedMain" 
        onToggle={() => {
          setSideNavExpanded(!sideNavExpanded);
          
        }}
        expanded={sideNavExpanded}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{color:'black'}}>Main dashboard</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Webiste traffi</NavText>

          </NavItem>

          <NavItem eventKey="Password">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Password</NavText>

          </NavItem>

          <NavItem eventKey="Analytics">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Analytics</NavText>

          </NavItem>
          <NavItem eventKey="SEO">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>SEO</NavText>


          </NavItem>

          <NavItem eventKey="Orders">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Orders</NavText>
          </NavItem>
          <NavItem eventKey="International">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>International</NavText>
          </NavItem>

          <NavItem eventKey="Partners">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Partners</NavText>
          </NavItem>
          <NavItem eventKey="Partners">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Calendar</NavText>
          </NavItem>
          <NavItem eventKey="Users">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Users</NavText>
          </NavItem>
          <NavItem eventKey="Sales">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{color:'black'}}>Sales</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
};

export default SideBar;
