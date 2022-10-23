import React, { Component, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import "../../styles/CoordinatorStudent.css";
import "../../styles/CoordinatorCompany.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import TableView from "../../component/Dashboard/Table/tableView";
import Stack from "react-bootstrap/Stack";
import InfoCard from "../../component/Dashboard/InfoCard/infoCard";
import LinkCard from "../../component/Cards/linksCard";
import Badge from "react-bootstrap/Badge";
import AccordionItem from "../../component/Accordion/accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CoordinatorCard from "../../component/Dashboard/CoordinatorCard/coordinatorCard";
import ProgramDeleteModal from "../../component/Modal/modalProgramDelete";
import ProgramCreateModal from "../../component/Modal/modalProgramCreate";
import { callServer } from "../authServer";
import Table from "react-bootstrap/Table";
import { useState } from "react";

const CoordinatorProgram = () => {
    // const barStatus = this.props.barStatus;
    // const barStatus = 60;
    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [allProgrameList, setAllProgrameList] = useState([]);
    const [currentProgrameDetails, currentProgrameDetailsList] = useState([]);
    const [count, countList] = useState([]);


    allProgrameList.map((item, index) => {
        if (item.is_active == 1) {
            item.is_active = "Active";
        } else {
            item.is_active = "Ended";
        }
    });

    currentProgrameDetails.map((item, index) => {
        if (item.is_active == 1) {
            item.is_active = "Active";
        } else {
            item.is_active = "Ended";
        }
    });
    currentProgrameDetails.map((item, index) => {
        if (item.end_date == '') {
            item.end_date = "Not Yet";
        }
    });
    useEffect(() => {
        const authRequest = {
            method: "post",
            url: "coordinator/AllPrograms",
            data: {},
        };

        callServer(authRequest)
            .then((response) => {
                response.data.map((item) => {
                    setAllProgrameList((prevState) => [
                        ...prevState,
                        {
                            batch_no: item.batch_no,
                            start_date: item.start_date,
                            end_date: item.end_date,
                            status: item.internship_program_status.type,
                            is_active: item.is_active,
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

        const authRequestCurrentPrograme = {
            method: "post",
            url: "coordinator/CurrentProgramDetails",
            data: {},
        };

        callServer(authRequestCurrentPrograme)
            .then((response) => {
                countList(response.data[1].program_id);
                response.data[0].map((item) => {
                    currentProgrameDetailsList((prevState) => [
                        ...prevState,
                        {
                            start_date: item.start_date,
                            end_date: item.end_date,
                            is_active:item.is_active,
                            status: item.internship_program_status.type,
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
        <div className="contain ms-5 mt-0" style={{ width: "90%" }}>
            <h3>Program Settings</h3>

            {/* <div className='container'> */}

            <Tabs defaultActiveKey="CurrentProgram" className="AnnouncementsTab" fill>
                <Tab
                    className="ProgramTab"
                    eventKey="CurrentProgram"
                    title="Current Program"
                >
                    <Container>
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <h4>Current Placement Program</h4>
                                {""}
                            </Col>
                            <Col>
                                <ProgramCreateModal />{" "}
                            </Col>
                        </Row>

                        {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3"> */}

                        {currentProgrameDetails.map((currentProgrameDetails) => (
                            <>
                                <Row className="card-contain mt-5">
                                    <CoordinatorCard
                                        title={"Total Students"}
                                        count={count}
                                        icon={"people-fill"}
                                        cardWidth={4}
                                    ></CoordinatorCard>
                                    <CoordinatorCard
                                        title={"Total Companies"}
                                        count={"182"}
                                        icon={"building"}
                                        cardWidth={4}
                                    ></CoordinatorCard>
                                    <CoordinatorCard
                                        title={"Currently Status"}
                                        count={currentProgrameDetails.is_active}
                                        icon={"people"}
                                        cardWidth={4}
                                    ></CoordinatorCard>
                                </Row>
                                <Row className="card-contain mt-4">
                                    <CoordinatorCard
                                        title={"Start Date"}
                                        count={currentProgrameDetails.start_date}
                                        icon={"calendar-plus"}
                                        cardWidth={4}
                                    ></CoordinatorCard>
                                    <CoordinatorCard
                                        title={"End Date"}
                                        count={currentProgrameDetails.end_date}
                                        icon={"calendar-x"}
                                        cardWidth={4}
                                    ></CoordinatorCard>
                                    <CoordinatorCard
                                        title={"Employed Parse"}
                                        count={currentProgrameDetails.status}
                                        icon={"person-check"}
                                        cardWidth={4}
                                    ></CoordinatorCard>
                                </Row>
                            </>
                        ))}

                        {/* </div> */}
                        <Row className="justify-content-md-center">
                            <Col className="mt-5">
                                <div className="float-right mr-4">
                                    <ProgramDeleteModal />
                                </div>
                                <Button variant="primary" active className="float-right mr-4">
                                    More Details
                                </Button>{" "}
                            </Col>
                        </Row>
                    </Container>
                </Tab>

                <Tab className="ProgramTab" eventKey="AllPrograms" title="All Programs">
                    <h4 className="mt-5 mb-4">Current Placement Program</h4>

                    <div class="table-wrapper-scroll-y table-scrollba ">
                        {/* <TableView>

                        </TableView> */}
                        {/* <TableView headers={['#', 'Start date', 'End date', 'Status']}
                            list={[['1', '06.10.2022', '06.10.2022', 'Active'], ['2', '06.10.2022', '06.10.2022', 'Ended'], ['3', '06.10.2022', '06.10.2022', 'Ended']]}>

                        </TableView> */}

                        <Table style={{ maxHeight: "60vh" }}>
                            <thead>
                                <tr>
                                    <th>Batch No</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th>Is Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProgrameList.map((allProgrameList) => (
                                    <tr>
                                        <td>{allProgrameList.batch_no}</td>
                                        <td>{allProgrameList.start_date}</td>
                                        <td>{allProgrameList.end_date}</td>
                                        <td>{allProgrameList.status}</td>
                                        <td>{allProgrameList.is_active}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Tab>
            </Tabs>

            {/* </div> */}
        </div>
    );
};

export default CoordinatorProgram;
