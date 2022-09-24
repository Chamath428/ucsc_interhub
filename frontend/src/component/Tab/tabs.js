import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StudentInterviews from '../../pages/Student/StudentInterviews';

function TabSelector(props) {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >

    {/* 1st tab */}

      {props.tabLink1 && <Tab link={Link} eventKey={'/'+props.tabLink1} title={'"'+props.tabHeader1+'"'}>
            <props.component1 />

      </Tab>}

    {/* 2nd tab */}

    {props.tabLink2 && <Tab link={Link} eventKey={'/'+props.tabLink2} title={'"'+props.tabHeader2+'"'}>
            <p>tab 2 content</p>
      </Tab>}


    {/* 1st tab */}

    {props.tabLink3 && <Tab link={Link} eventKey={'/'+props.tabLink3} title={'"'+props.tabHeader3+'"'}>
            <p>tab 3 content</p>
      </Tab>}


      {/* <Tab eventKey="contact" title="Contact">
        <p>Test</p>
      </Tab> */}

    </Tabs>
  );
}

export default TabSelector;