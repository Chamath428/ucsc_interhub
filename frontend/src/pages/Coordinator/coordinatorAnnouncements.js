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




import '../../styles/coordinatorAnnouncements.css';

const CoordinatorAnnouncements = () => {

    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [announcementList, setAnnouncementList] = useState([]);

    useEffect(() => {
        const authRequest = {
            "method": "post",
            "url": "coordinator/Announcements",
            "data": {}
        }

         callServer(authRequest).then((response) => {
          
            response.data.map((item)=> {
                setAnnouncementList(prevState => [...prevState, {
                    title: item.title,
                    type:item.announcement_types.type
                }])
            })

        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong when creating the user!");
                setVariant("danger");
                setShow(true);
            }
        })
    }, []);



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

                        <div class="table-wrapper-scroll-y myscrollbarannouncement ">

                            <TableView headers={['Title', 'Visibility']}
                                // list={[['Cool Project', '11', 'All'], ['Thing No One Wants to Do', '2', 'Student'], ['Site Revamp', '49', 'Company'], ['New Logo Design', '33 ', 'All'], ['Accessibility Updates', '4', 'Company'], ['Color Variations', '55', 'Student']]}
                                list={announcementList}
                                >

                            </TableView>
                        </div>
                    </div>

                </Tab>
                <Tab className="Announcements mt-5" eventKey="AddAnnouncement" title="Add Announcements">

                    <div className='addannouncementcontain'>
                        <div className='AnnouncementLeft'>
                            <h3>Announcements</h3>

                            <Form>


                                <Row className='align-item-center g-5 mt-2'>
                                    <Form.Group className="mb-4  col-sm-6" controlId="formBasicTitle" >
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter title " />
                                    </Form.Group>

                                    <Form.Group className="mb-4  col-sm-6" controlId="formBasicAudience">
                                        <Form.Label>Audience</Form.Label>
                                        <Form.Select>
                                            <option value="1">All</option>
                                            <option value="2">Company</option>
                                            <option value="3">Student</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-1" controlId="Textarea">
                                        <Form.Label>Anouncement Body</Form.Label>

                                        <div className="editor " style={{ height: '40vh', borderStyle: 'outset' }}>
                                            <TextEditor />
                                        </div>

                                        {/* <Form.Control as="textarea" placeholder="Write your announcement" rows={5} style={{ width: '65.7%' }} /> */}
                                    </Form.Group>
                                </Row>


                                <Row className=' mt-1'>
                                    <Form.Group className="mb-3 col-sm-10" controlId="ClearBtnArea">
                                        <DashboardButton inside={"Clear"}  ></DashboardButton>

                                    </Form.Group>
                                    <Form.Group className="mb-3 col-sm-1" controlId="PostBtnArea">

                                        <DashboardButton inside={"Post"} ></DashboardButton>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </div>
                        <div className='AnnouncementRight mt-5 ms-5 ps-5'>
                            <Row className='mb-5 mt-5'>

                                <InfoCard title={"No of Active Students "} count={"45"} icon={"people-fill"} cardWidth={12}></InfoCard>
                            </Row>
                            <Row className='mb-5'>
                                <InfoCard title={"No of Active Company "} count={"26"} icon={"people-fill"} cardWidth={12}></InfoCard>
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