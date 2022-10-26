import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Alert, Button } from "react-bootstrap";
import TableView from "../../component/Dashboard/Table/tableView";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DashboardButton from "../../component/Dashboard/DashboardButton/dashboardButton";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { callServer } from "../authServer";
import Table from "react-bootstrap/Table";
import { InputGroup } from "react-bootstrap";
import "../../styles/sMStudent.css";

const CoordinatorManageStudents = () => {

    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [studentList, setStudentList] = useState([]);
    const [selectedStudentList, setSelectedStudentList] = useState([]);
    const [searchSelectStudent, setSearchSelectStudent] = useState("");
    const [selectedCourse, setselectedCourse] = useState("0");

    // const [sort, setSort] = useState(1);

    // const [studentSortList, studentSortList1] = useState([]);


    studentList.map((item, index) => {
        if (item.cv) {
            item.cv = "True";
        } else {
            item.cv = "False";
        }
    });

    useEffect(() => {
        const authRequest = {
            method: "post",
            url: "coordinator/StudentList",
            data: {},
        };

        callServer(authRequest)
            .then((response) => {
                response.data.map((item) => {
                    setStudentList((prevState) => [
                        ...prevState,
                        {
                            index_number: item.student.index_number,
                            nameStudent: item.student.name,
                            cv: item.student.cv,
                            types: item.interview_status_types.status,
                            nameCompany: item.company.name,
                        },
                    ]);
                });
            })
            .catch(function (error) {
                if (error.response) {
                    setAlertPara("Something went wrong when creating the user!");
                    setVariant("danger");
                    setShow(true);
                }
            });


        const authRequestSelectedStudentList = {
            method: "post",
            url: "coordinator/SelectedStudentList",
            data: {},
        };

        callServer(authRequestSelectedStudentList)
            .then((response) => {
                response.data.map((item) => {
                    setSelectedStudentList((prevState) => [
                        ...prevState,
                        {
                            index_number: item.student.index_number,
                            nameStudent: item.student.name,
                            nameCompany: item.company.name,
                            gpa: item.student.gpa,
                        },
                    ]);
                });
            })
            .catch(function (error) {
                if (error.response) {
                    setAlertPara("Something went wrong when creating the user!");
                    setVariant("danger");
                    setShow(true);
                }
            });
    }, []);

    // const Fun = (event) => {
    //     if (studentList) {
    //         const sort = event.target.value;

    //         if (sort == 1) {
    //             setStudentList(
    //                 studentList.sort((a, b) => a.index_number - b.index_number)
    //             );
    //             alert("1");
    //             console.log(studentList);
    //         }
    //         if (sort == 2) {
    //             setStudentList(
    //                 studentList.sort((a, b) => (a.nameStudent > b.nameStudent ? 1 : -1))
    //             );
    //             alert("2");
    //             console.log(studentList);
    //         }
    //         if (sort == 3) {
    //             setStudentList(
    //                 sort((a, b) => (a.nameCompany > b.nameCompany ? 1 : -1))
    //             );
    //             alert("3");
    //             console.log(studentList);
    //         }
    //     }
    // };


    const searchAllStudentsByCourse = (courseNumber) => {
        setselectedCourse(courseNumber)
        const authRequestAllStudentsFilterByCourse = {
            "method": "post",
            "url": "coordinator/AllStudentsSearchByCourse",
            "data": {
                degree: parseInt(courseNumber)
            }
        }

        callServer(authRequestAllStudentsFilterByCourse).then((response) => {
            setStudentList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
    }
    console.log(selectedCourse)

    // const Fun = (event) => {
    //     if (studentList) {
    //         const sort = event.target.value;

    return (
        <div className="containstudent mt-0 ms-5" style={{ width: "90%" }}>
            <h2 className="mb-4">Manage Students</h2>


            <Tabs defaultActiveKey="StudentList" className="ManageStudentTab">
                <Tab
                    className="StudentTab mt-5"
                    eventKey="StudentList"
                    title="Student List"
                >
                    <div className="announcementcontain mx-0 px-0">


                        <Nav.Link as={Link} to="/Coordinator/Add-student">
                            {" "}
                            <DashboardButton inside={"+ Add Student"}></DashboardButton>
                        </Nav.Link>
                    </div >
                    <Container className="mt-2">
                        <Form className="container">
                            <Row className="mb-1">
                                <Form.Group as={Col} md controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>
                                        Course
                                    </Form.Label>
                                    <Form.Select sm={10} defaultValue="Choose..." onChange={(event) => { searchAllStudentsByCourse(event.target.value) }}>
                                        <option value="0">All CS and IS</option>
                                        <option value="1">CS - 3rd Year</option>
                                        <option value="2">IS - 3rd Year</option>
                                        <option value="3">CS - 4th Year</option>
                                        <option value="4">IS - 4th Year</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} sm controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>
                                        Enrolled
                                    </Form.Label>
                                    <Form.Select sm={10} defaultValue="Choose...">
                                        <option>All</option>
                                        <option>Selected</option>
                                        <option>Not Selected</option>
                                    </Form.Select>
                                </Form.Group>


                                <Form.Group as={Col} sm controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>
                                        Sort By
                                    </Form.Label>
                                    <Form.Select
                                        sm={10}
                                        defaultValue="Choose..."
                                    // onChange={Fun}
                                    >
                                        <option value="1">Index Number</option>
                                        <option value="2">Name</option>
                                        <option value="3">Company</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Container>


                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table style={{ maxHeight: "60vh" }}>
                            <thead className='bg-primary text-white thead-primary'>
                                <tr>
                                    <th>Index No</th>
                                    <th>Name</th>
                                    <th>CV</th>
                                    <th>Interviews</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.map((studentList) => (
                                    <tr>
                                        <td>{studentList.index_number}</td>
                                        <td>{studentList.nameStudent}</td>
                                        <td>{studentList.cv}</td>
                                        <td>{studentList.types}</td>
                                        <td>{studentList.nameCompany}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                
            </Tab>
            <Tab
                className="StudentTab mt-5"
                eventKey="Selected"
                title="Selected Students"
            >
                <div className="announcementcontain">
                    <Row>
                        <Col lg="4">
                            <Form.Group
                                className="mb-1"
                                controlId="formBasicSearchOrganization"
                            >
                                <div className="d-flex flex-row align-item-center justify-content-center text-center">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text
                                            id="basic-addon1"
                                            className="bg-primary text-white"
                                        >
                                            <i class="bi bi-search"></i>
                                        </InputGroup.Text>


                                        <Form.Control
                                            className="searchbox"
                                            type="searchbox text"
                                            placeholder="Search Student"
                                            onChange={(event) => {
                                                setSearchSelectStudent(event.target.value);
                                            }}
                                        />
                                    </InputGroup >
                                </div >
                            </Form.Group >
                        </Col >
                    </Row >
                    <Container className="mt-2 mx-0 px-0">
                        <Form className="container mx-0 px-0">
                            <Row>
                                <Form.Group as={Col} md controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>
                                        Course
                                    </Form.Label>
                                    <Form.Select sm={10} defaultValue="Choose...">
                                        <option>CS and IS</option>
                                        <option>CS</option>
                                        <option>IS</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} sm controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>
                                        Company
                                    </Form.Label>
                                    <Form.Select sm={10} defaultValue="Choose...">
                                        <option>All</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} sm controlId="formGridState">
                                    <Form.Label className="fw-bold" column sm={5}>
                                        Sort By
                                    </Form.Label>
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
                        <Table style={{ maxHeight: "60vh" }}>
                            <thead className='bg-primary text-white thead-primary'>
                                <tr>
                                    <th>Index No</th>
                                    <th>Name</th>
                                    <th>Compnay Selected For</th>
                                    <th>GPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedStudentList
                                    .filter((selectedStudentList) => {
                                        if (searchSelectStudent == "") {
                                            return selectedStudentList;
                                        } else if (
                                            selectedStudentList.name
                                                .toLowerCase()
                                                .includes(searchSelectStudent.toLowerCase())
                                        ) {
                                            return selectedStudentList;
                                        }
                                    })
                                    .map((selectedStudentList) => (
                                        <tr>
                                            <td>{selectedStudentList.index_number}</td>
                                            <td>{selectedStudentList.nameStudent}</td>
                                            <td>{selectedStudentList.nameCompany}</td>
                                            <td>{selectedStudentList.gpa}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </div>
                </div >
            </Tab >
        </Tabs >
    </div >
  );

};

export default CoordinatorManageStudents;
