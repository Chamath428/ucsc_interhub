import React, { Component, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { callServer } from '../authServer';


import '../../styles/sMStudent.css';

const CoordinatorManageStudents = () => {

    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [studentList, setStudentList] = useState([]);
    const [selectedStudentList, setSelectedStudentList] = useState([]);

    studentList.map((item, index) => {
        if (item.cv) {
            item.cv = "True";
        }
        else {
            item.cv = "False";
        }
    });

    useEffect(() => {
        const authRequest = {
            "method": "post",
            "url": "coordinator/StudentList",
            "data": {}
        }



        callServer(authRequest).then((response) => {

            response.data.map((item) => {
                setStudentList(prevState => [...prevState, {
                    index_number: item.student.index_number,
                    nameStudent: item.student.name,
                    cv: item.student.cv,
                    types: item.interview_status_types.types,
                    nameCompany: item.company.name,

                }])
            })

        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong when creating the user!");
                setVariant("danger");
                setShow(true);
            }
        })

        const authRequestSelectedStudentList = {
            "method": "post",
            "url": "coordinator/SelectedStudentList",
            "data": {}
        }

        callServer(authRequestSelectedStudentList).then((response) => {

            response.data.map((item) => {
                setSelectedStudentList(prevState => [...prevState, {
                    index_number: item.student.index_number,
                    nameStudent: item.student.name,
                    nameCompany: item.company.name,
                    gpa: item.student.gpa,

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
        <div className='containstudent mt-5 ms-5' style={{ width: '90%' }}>
            <Tabs
                defaultActiveKey="StudentList"
                className="ManageStudentTab"
                fill
            >
                <Tab className="StudentTab mt-5" eventKey="StudentList" title="Student List">
                    <div className='contain1'>
                        <div className='d-flex flex-row justify-content-sm-between '>

                            <h3>Manage Students</h3>
                        </div>
                        <div className='addstudent d-flex flex-row-reverse mb-1'>
                            {/* <DashboardButton inside={'+ Add Student'}></DashboardButton> */}

                            <Nav.Link as={Link} to="/Coordinator/Add-student"> <DashboardButton inside={'+ Add Student'}></DashboardButton></Nav.Link>

                        </div>
                        <Container className="mt-2">
                            <Form className='container'>
                                <Row className="mb-1">
                                    <Form.Group as={Col} md controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Course</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>CS and IS</option>
                                            <option>CS</option>
                                            <option>IS</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} sm controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Enrolled</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>All</option>
                                            <option>Selected</option>
                                            <option>Not Selected</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} sm controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option value="1">Index Number</option>
                                            <option value="2">Name</option>
                                            <option value="3">Company</option>

                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                            </Form>

                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <TableView headers={['Index No', 'Name', 'CV', 'Interviews', 'Company']}
                                // list={[['190020432', 'Shanika Jayathunga', 'True', 'None', 'LSEG'], ['190020532', 'Jayani Kulasekara', 'True', 'called', 'Avonet Technologies'], ['190030423', 'Prathiksha Jayakodi', 'False', 'None', 'WSO2'], ['190020455', 'Sameera Kumara', 'True', 'None', 'Dialog Axiata'], ['190027632', 'Ayodya Ranasinghe', 'True', 'None', '99X'], ['190020444', 'Binura Jathilake', 'True', 'called', 'LSEG']]}
                                list={studentList}
                            >

                            </TableView>

                        </div>


                    </div>

                </Tab>
                <Tab className="StudentTab mt-5" eventKey="Selected" title="Selected Students">

                    <div className='contain1'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                            <h3>Students Selections</h3>
                        </div>
                        <div className='d-flex flex-row-reverse mb-1'>
                            <Form.Group className="mb-1" controlId="formBasicSearchOrganization">
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                                    <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div>
                                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search Student" /></div>
                            </Form.Group>
                        </div>
                        <Container className="mt-2">
                            <Form className='container'>
                                <Row className="mb-1">
                                    <Form.Group as={Col} md controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Course</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>CS and IS</option>
                                            <option>CS</option>
                                            <option>IS</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} sm controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Company</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option>All</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} sm controlId="formGridState">
                                        <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                        <Form.Select sm={10} defaultValue="Choose...">
                                            <option value="1">Index Number</option>
                                            <option value="2">Name</option>
                                            <option value="3">Company</option>
                                            <option value="4">GPA</option>

                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                            </Form>

                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar ">
                            <TableView
                                headers={['Index No', 'Name', 'Compnay Selected For', 'GPA']}
                                // list={[['190020432', 'Shanika Jayathunga', 'LSEG', '3.3232'], ['190020532', 'Jayani Kulasekara', 'Avonet Technologies', '3.0231'], ['190030423', 'Prathiksha Jayakodi', 'WSO2', '3.8503'], ['190020455', 'Sameera Kumara', 'Dialog Axiata', '2.3456'], ['190027632', 'Ayodya Ranasinghe', '99X', '2.9998'], ['190020444', 'Binura Jathilake', 'LSEG', '3.5674']]}
                                list={selectedStudentList}
                            >

                            </TableView>

                        </div>


                    </div>
                </Tab>
            </Tabs>
        </div>
    );

    // 
}

export default CoordinatorManageStudents;