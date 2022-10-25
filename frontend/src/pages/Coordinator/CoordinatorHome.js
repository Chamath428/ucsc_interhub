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
    const [chartDetails, setChartDetails] = useState([]);

    // console.log(CardDetails[0])
    // var totalStudent = 0;
    // var totalCompany = 0;
    // var totalCs = 0;
    // var selectCs = 0;
    // var totalIs = 0;
    // var selectIs = 0;



    // if (CardDetails.length > 0) {
    //     totalStudent = CardDetails[0].countStudent;
    //     totalCompany = CardDetails[0].countActiveCompany;

    // }
    // if (chartDetails.length > 0) {
    //     totalCs = chartDetails.csTotal;
    //     selectCs = chartDetails.selectTotalCs;
    //     totalIs = chartDetails.isTotal;
    //     selectIs = chartDetails.selectTotalIs;

    // }

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

        const getChartData = {
            method: "post",
            url: "coordinator/getChartData",
            data: {},
        };

        callServer(getChartData)
            .then((response) => {

                response.data.map((item) => {
                    setChartDetails((prevState) => [
                        ...prevState,
                        {
                            csTotal: item.totalCsStu,
                            selectTotalCs: item.totalSelectedCsStu,
                            isTotal: item.totalIsStu,
                            selectTotalIs: item.totalSelectedIsStu,
                            totalStudent: item.totalStudent,
                            totalSelectStudent: item.totalSelectedStu,




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
                {chartDetails.map((chartDetails) => (
                    <>

                        <Col> <PieChart header={"Selected Cs Students"} valSelected={parseInt(chartDetails.selectTotalCs)} valAll={parseInt(chartDetails.csTotal)} /></Col>
                        <Col> <PieChart header={"Selected Is Students"} valSelected={parseInt(chartDetails.selectTotalIs)} valAll={parseInt(chartDetails.isTotal)} /></Col>
                        <Col>  <ApexCharts header={"View Overall"} Numbers={[parseInt(chartDetails.totalStudent),parseInt(chartDetails.totalSelectStudent)]} companyName={['Total student', 'Selected student', ]} /></Col>


                    </>
                ))}



            </Row>
        </Container>



    );



};
export default CoordinatorHome;