import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import HomeNavBar from '../component/homepage/HomeNavBar/homeNavBar';
import DashNav from '../component/Dashboard/DashNav';
import DashSideNavigation from '../component/Dashboard/DashSideNavigation';
import DashboardMenu from '../component/Dashboard/DashMenu';

class Dashboard extends Component {
    
    render() { 
        return (
            <div>
                <div className="shadow-sm p-3 mb-5 bg-white rounded"><DashNav /></div>
                <Container>
                    <Row>
                        <Col xs={3}><div className="shadow-sm p-3 mb-5 bg-white rounded"><DashSideNavigation /></div></Col>
                        <Col><DashboardMenu /></Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
 
export default Dashboard;