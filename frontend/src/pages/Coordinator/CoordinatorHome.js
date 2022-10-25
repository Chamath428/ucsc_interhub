import React, { Component, useEffect, useState } from 'react';
import CoordinatorCard from '../../component/Dashboard/CoordinatorCard/coordinatorCard';
import '../../styles/CoordinatorHome.css'
import { Row, Card, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import PieChart from '../../component/Charts/pieChart';
import ApexCharts from "../../component/Charts/aphexChart";
import { callServer } from "../authServer";

import { Chart } from 'react-charts'

const CoordinatorHome = () => {

    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [CardDetails, setCardDetails] = useState([]);

    useEffect(() => {
        const authRequest = {
            method: "post",
            url: "coordinator/homeCardDetails",
            data: {},
        };

        callServer(authRequest)
            .then((response) => {
                

                response.data.map((item) => {
                    setCardDetails((prevState) => [
                        ...prevState,
                        {
                            countAnnousment: item.announcement_id,
                            countActiveCompany: item.company_id,
                            countStudent: item.index_number,

                        },
                    ]);

                });
            })
            .catch(function (error) {
                if (error.response) {
                    setAlertPara("Something went wrong!");
                    setVariant("danger");
                    setShow(true);
                }
            });
    }, []);


    return (


        <Container className="mt-0 ms-4" style={{ width: '99%' }}>
            <Row className="ms-1 mb-3">
                <h3>Dashboard</h3>
            </Row>
            <Row className='card-contain'>
                {CardDetails.map((CardDetails) => (
                    <>

                        <CoordinatorCard title={"View Students"} count={CardDetails.countStudent} icon={"people-fill"} cardWidth={3}></CoordinatorCard>
                        <CoordinatorCard title={"View Companies"} count={CardDetails.countActiveCompany} icon={"building"} cardWidth={3}></CoordinatorCard>
                        <CoordinatorCard title={"Manage Interns "} count={"225"} icon={"person-check-fill"} cardWidth={3}></CoordinatorCard>
                        <CoordinatorCard title={"Post Announcement"} count={CardDetails.countAnnousment} icon={"file-earmark-text-fill"} cardWidth={3}></CoordinatorCard>

                    </>
                ))}

            </Row>
            <Row className="chart-contain" >

                <Col> <PieChart header={"Selected Students"} valRegistered={100} valNotRegistered={90} /></Col>
                <Col>  <ApexCharts header={"View No of student Companywise"} Numbers={[30, 12, 10]} companyName={['IFS', 'Cisco Labs', 'LSEG']} /></Col>
                <Col> <PieChart header={"Registered Company"} valRegistered={40} valNotRegistered={12} /></Col>

            </Row>
        </Container>



    );
};

export default CoordinatorHome;