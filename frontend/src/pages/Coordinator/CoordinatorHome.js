import React, { Component } from 'react';
import CoordinatorCard from '../../component/Dashboard/CoordinatorCard/coordinatorCard';
import '../../styles/CoordinatorHome.css'
import { Row, Card, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';

import PieChart from '../../component/Charts/pieChart';
import ApexCharts from "../../component/Charts/aphexChart";



import { Chart } from 'react-charts'

class CoordinatorHome extends Component {

    render() {
        return (


            <Container className="coordinator-home">
                <Row className='cart-contain'>
                    <CoordinatorCard title={"View Students"} count={"275"} icon={"people-fill"} cardWidth={3}></CoordinatorCard>
                    <CoordinatorCard title={"View Companies"} count={"52"} icon={"building"} cardWidth={3}></CoordinatorCard>
                    <CoordinatorCard title={"Manage Interns "} count={"225"} icon={"person-check-fill"} cardWidth={3}></CoordinatorCard>
                    <CoordinatorCard title={"Post Announcement"} count={"53"} icon={"file-earmark-text-fill"} cardWidth={3}></CoordinatorCard>
                </Row>

                <Row className="chart-contain" >

                    <PieChart />
                    <ApexCharts />
                    <PieChart />


                </Row>
            </Container>





        );
    }

}

export default CoordinatorHome;