import React, { Component, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col, Button } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import TextEditor from '../../component/TextEditor/textEditor';
import axios from 'axios';
import { URL } from '../URL';
import { callServer } from '../authServer';
import Alert from 'react-bootstrap/Alert';
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";


import '../../styles/coordinatorAnnouncements.css';
// const { SearchBar } = Search;

// const ClearButton = props => {
//     const handleClick = () => {
//         props.onSearch("");
//         props.clearAllFilter();
//     };
//     return (
//         <Button
//             variant="secondary"
//             onClick={handleClick}
//             style={{
//                 fontSize: "16px",
//                 padding: "5px",
//                 margin: "10px",
//                 height: "40px"
//             }}
//         >
//             Clear
//         </Button>
//     );
// };
const CoordinatorAnnouncements = () => {


    const [type, setType] = useState(1);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [announcementList, setAnnouncementList] = useState([]);
    // search bar creating




    useEffect(() => {
        const authRequest = {
            "method": "post",
            "url": "coordinator/Announcements",
            "data": {}
        }

        callServer(authRequest).then((response) => {

            response.data.map((item) => {
                setAnnouncementList(prevState => [...prevState, {
                    title: item.title,
                    type: item.announcement_types.type
                }])
            })


        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
    }, []);

    const createNewAnnouncements = (event) => {
        event.preventDefault();

        const data = {
            type: parseInt(type),
            title: title,
            body: body,
            email_address: "coordinator@g.com",

        }

        const authRequest = {
            "method": "post",
            "url": "coordinator/createAnnouncements",
            "data": data
        }
        callServer(authRequest).then((response) => { showAlert(response) }).catch(function (error) {

            if (error.response) {
                setAlertPara("Something went wrong when creating the announcement!");
                setVariant("danger");
                setShow(true);
            }
        })
    }
    const showAlert = (response) => {
        setAlertPara("Announcement added Successfully!");
        setVariant("success");
        setShow(true);
    }

    return (
        <div className='containAnnouncements mt-5 ms-5' style={{ width: '90%' }}>
            <Tabs
                defaultActiveKey="AllAnnouncements"
                className="AnnouncementsTab"
                fill
            >
                <Tab className="Announcements mt-5" eventKey="AllAnnouncements" title="All Announcements">
                    <div className='announcementcontain'>
                        <h3>All Announcements</h3>

                        <div className='d-flex flex-row-reverse mb-3'>
                            <Form.Group className="mb-1" controlId="formBasicSearchOrganization">
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div>
                                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search By Title" /></div>
                            </Form.Group>
                        </div>
                        {/* <ToolkitProvider
                            bootstrap4
                            keyField="prce"
                            data={this.products}
                            columns={this.columns}
                            search
                        > */}
                        <div class="table-wrapper-scroll-y myscrollbarannouncement ">
                            {/* <SearchBar
                                    // {...props.searchProps}
                                    style={{ width: "400px", height: "40px" }}
                                />
                                <ClearButton
                                    // {...props.searchProps}
                                    clearAllFilter={this.clearAllFilter}
                                /> */}
                            <TableView headers={['Title', 'Visibility']}
                                // list={[['Cool Project', '11', 'All'], ['Thing No One Wants to Do', '2', 'Student'], ['Site Revamp', '49', 'Company'], ['New Logo Design', '33 ', 'All'], ['Accessibility Updates', '4', 'Company'], ['Color Variations', '55', 'Student']]}
                                list={announcementList}
                            // {...props.baseProps}
                            // filter={filterFactory()}
                            // noDataIndication="There is no solution"
                            >

                            </TableView>
                        </div>
                        {/* </ToolkitProvider> */}

                    </div>

                </Tab>

                <Tab className="Announcements mt-5" eventKey="CompanyAnnouncements" title="Company Announcements">
                    <div className='announcementcontain'>
                        <h3>Company Announcements</h3>

                        <div className='d-flex flex-row-reverse mb-3'>
                            <Form.Group className="mb-1" controlId="formBasicSearchOrganization">
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div>
                                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search By Title" /></div>
                            </Form.Group>
                        </div>
                        {/* <ToolkitProvider
                            bootstrap4
                            keyField="prce"
                            data={this.products}
                            columns={this.columns}
                            search
                        > */}
                        <div class="table-wrapper-scroll-y myscrollbarannouncement ">
                            {/* <SearchBar
                                    // {...props.searchProps}
                                    style={{ width: "400px", height: "40px" }}
                                />
                                <ClearButton
                                    // {...props.searchProps}
                                    clearAllFilter={this.clearAllFilter}
                                /> */}
                            <TableView headers={['Title', 'Visibility']}
                                // list={[['Cool Project', '11', 'All'], ['Thing No One Wants to Do', '2', 'Student'], ['Site Revamp', '49', 'Company'], ['New Logo Design', '33 ', 'All'], ['Accessibility Updates', '4', 'Company'], ['Color Variations', '55', 'Student']]}
                                list={announcementList}
                            // {...props.baseProps}
                            // filter={filterFactory()}
                            // noDataIndication="There is no solution"
                            >

                            </TableView>
                        </div>
                        {/* </ToolkitProvider> */}

                    </div>

                </Tab>

                <Tab className="Announcements mt-5" eventKey="AddAnnouncement" title="Add Announcements">

                    <div className='addannouncementcontain'>
                        <div className='AnnouncementLeft'>
                            <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>{alertPara}</Alert.Heading>
                            </Alert>
                            <h3>Add an announcement</h3>

                            <Form onSubmit={createNewAnnouncements}>


                                <Row className='align-item-center g-5 mt-2'>
                                    <Form.Group className="mb-4  col-sm-8" controlId="formBasicTitle" onChange={(event) => { setTitle(event.target.value) }} >
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter title " />
                                    </Form.Group>

                                    <Form.Group className="mb-4  col-sm-4" controlId="formBasicAudience">
                                        <Form.Label>Audience</Form.Label>
                                        <Form.Select onChange={(event) => { setType(event.target.value) }}>
                                            <option value="1">All</option>
                                            <option value="2">Company</option>
                                            <option value="3">Student</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-1" controlId="Textarea" onChange={(event) => { setBody(event.target.value) }}  >
                                        <Form.Label>Anouncement Body</Form.Label>

                                        <div className="editor " >
                                            {/* <TextEditor /> */}
                                            <Form.Control as="textarea" placeholder="Write your announcement" rows={5} style={{ height: '40vh', borderStyle: 'outset' }} />

                                        </div>

                                    </Form.Group>
                                </Row>


                                <Row className=' mt-1'>
                                    {/* <Form.Group className="mb-3 col-sm-10" controlId="ClearBtnArea">
                                        <DashboardButton inside={"Clear"}  ></DashboardButton>

                                    </Form.Group> */}
                                    <Form.Group className="mb-3 col-sm-1" controlId="PostBtnArea">

                                        <DashboardButton inside={"Post"} ></DashboardButton>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </div>
                        <div className='AnnouncementRight mt-5 ms-5 ps-5'>
                            <Row className='mb-5 mt-5'>
                                <Col>
                                <InfoCard title={"No of Active Students "} count={"45"} icon={"people-fill"} cardWidth={12}></InfoCard>
                                </Col>
                            </Row>
                            <Row className='mb-5'>
                                <Col>
                                <InfoCard title={"No of Active Company "} count={"26"} icon={"people-fill"} cardWidth={12}></InfoCard>
                                </Col>
                            </Row>


                        </div>
                    </div>
                </Tab>
                
            </Tabs>
        </div>
    );

    // 
}

export default CoordinatorAnnouncements;