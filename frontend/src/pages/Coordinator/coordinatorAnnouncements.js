import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col,Button } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';

import '../../styles/coordinatorAnnouncements.css';    

class CoordinatorAnnouncements extends Component {

    render() {
        return (
            <div className='containAnnouncements mt-5 ms-5' style={{width:'90%'}}>
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
                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search By Title"/></div>
                    </Form.Group>
                </div>

                        <div class="table-wrapper-scroll-y myscrollbarannouncement ">

                            <TableView headers={['Title', 'Views', 'Visibility']}
                                list={[['Cool Project', '11', 'All'], ['Thing No One Wants to Do', '2', 'Student'], ['Site Revamp', '49', 'Company'], ['New Logo Design', '33 ', 'All'], ['Accessibility Updates', '4', 'Company'] ,['Color Variations', '55', 'Student']]}>

                            </TableView>
                        </div>
                    </div>

                </Tab>
                <Tab className="Announcements mt-5" eventKey="AddAnnouncement" title="Add Announcements">
            
                <div className='addannouncementcontain'>
                <div className='AnnouncementLeft'>
                <Form>
                    <h3>Add Announcements</h3>

                    <Row className='align-item-center mt-3 g-5 mb-5'>

                        <Form.Group  as={Col} md="12" controlId="formBasicAccount">
                            <Form.Label>Account Types</Form.Label>
                            <Form.Select>
                                <option value="1">Staff Member</option>
                                <option value="2">Coordinator</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className='align-item-center g-5 mb-5'>
                        <Form.Group  as={Col} md="6" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Address" />
                        </Form.Group>
                        <Form.Group  as={Col} md="6" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name " />
                        </Form.Group>
                    </Row>

                    <Form.Group>

                        <p>By clicking on Create Account, system will send an email to the address you entered, allowing the owner of that email to login to the system as a supervisor under your company</p>
                    </Form.Group>

                    {/* <Button className="btn-setvisit mt-4 mb-4 m-1 col-sm-3 " variant="primary" type="submit">
                        Create account  <i class="bi bi-arrow-right"></i>
                    </Button> */}

                    <div className='d-flex flex-row-reverse mb-3'>
                        <DashboardButton inside={"+ Create account" } ></DashboardButton>
                    </div>
                </Form>
                </div>
                <div className='AnnouncementRight mt-5 ms-5 ps-5'>
                    <Row className='mb-5 mt-5'>
                    
                        <InfoCard title={"Total Registered Students in this Year"} count={"275"} icon={"people-fill"} cardWidth={10}></InfoCard>
                    </Row>
                    <Row className='mb-5'>
                        <InfoCard title={"Total Registered Students in Previous Year"} count={"260"} icon={"people-fill"} cardWidth={10}></InfoCard>
                    </Row>
                    

                    </div>
                </div>
                </Tab>
            </Tabs>
            </div>   
        );
    }
// 
}

export default CoordinatorAnnouncements;