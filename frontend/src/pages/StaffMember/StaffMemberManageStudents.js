import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button } from "react-bootstrap";
import TableView from "../../component/Dashboard/Table/tableView";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import DashboardButton from "../../component/Dashboard/DashboardButton/dashboardButton";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { callServer } from "../authServer";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import "../../styles/sMStudent.css";
import { InputGroup } from "react-bootstrap";

const StaffMemberManageStudents = () => {
  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  const [allStudentsList, setAllStudentsList] = useState([]);
  const [selectedStudentsList, setSelectedStudentsList] = useState([]);
  const [selectedCourse, setselectedCourse] = useState("0");
  const [selectedStatus, setselectedStatus] = useState("0");
  const [sortedAllStudentList, setSortedAllStudents] = useState("0");
  const [sortedSelectedStudentList, setSortedSelectedStudents] = useState("0");
  const [searchByCourseSelectedList, setselectedCourseSelectedStudents] =
    useState("0");
  const [searchSelectedStudent, setSearchSelectedStudent] = useState("");
  const [category, setCategory] = useState(0);
  const [jobRoles, setJobRoles] = useState([]);

  useEffect(() => {
    const authRequestAllStudents = {
      method: "post",
      url: "staffMember/AllStudents",
      data: {},
    };

    callServer(authRequestAllStudents)
      .then((response) => {
        setAllStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
    const authRequestSelectedStudents = {
      method: "post",
      url: "staffMember/SelectedStudents",
      data: {},
    };

    callServer(authRequestSelectedStudents)
      .then((response) => {
        setSelectedStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  }, []);

  const searchAllStudentsByCourse = (courseNumber) => {
    setselectedCourse(courseNumber);
    const authRequestAllStudentsFilterByCourse = {
      method: "post",
      url: "staffMember/AllStudentsSearchByCourse",
      data: {
        degree: parseInt(courseNumber),
      },
    };

    callServer(authRequestAllStudentsFilterByCourse)
      .then((response) => {
        setAllStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  };
  const searchAllStudentsByStatus = (statusNumber) => {
    setselectedStatus(statusNumber);
    const authRequestAllStudentsFilterByStatus = {
      method: "post",
      url: "staffMember/SearchStudentsSearchByEntrolled",
      data: {
        student_status: parseInt(statusNumber),
      },
    };

    callServer(authRequestAllStudentsFilterByStatus)
      .then((response) => {
        setAllStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  };
  const sortAllStudents = (sortData) => {
    setSortedAllStudents(sortData);
    const authRequestSortAllStudentsFilter = {
      method: "post",
      url: "staffMember/SortAllStudents",
      data: {
        sort_data: parseInt(sortData),
      },
    };

    callServer(authRequestSortAllStudentsFilter)
      .then((response) => {
        setAllStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  };
  const sortSelectedStudents = (sortData) => {
    setSortedSelectedStudents(sortData);
    const authRequestSortSelectedStudentsFilter = {
      method: "post",
      url: "staffMember/SortSelectedStudents",
      data: {
        sort_data: parseInt(sortData),
      },
    };

    callServer(authRequestSortSelectedStudentsFilter)
      .then((response) => {
        setSelectedStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  };

  useEffect(() => {
    const data = {};
    const authJobRoleRequest = {
      method: "post",
      url: "staffMember/getJobRoles",
      data: data,
    };

    callServer(authJobRoleRequest)
      .then((response) => {
        console.log(response.data);
        setJobRoles(
          response.data.map((r) => ({ name: r.job_role, value: r.id }))
        );
      })
      .catch((error) => {
        if (error.response) {
          setAlertPara("Something went wrong when getting the job roles!");
          setVariant("danger");
          setShow(true);
        }
      });
  }, []);

  useEffect(() => {
    console.log(category);
    const authRequestSelectedStudentsFilterByCourse = {
      method: "post",
      url: "staffMember/SelectedStudentsSearchByJobRole",
      data: {
        jobRole: parseInt(category),
      },
    };

    callServer(authRequestSelectedStudentsFilterByCourse)
      .then((response) => {
        console.log("students FETCHED");
        setSelectedStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  }, [category]);

  const searchSelectedStudentByCourse = (courseNumber) => {
    setselectedCourseSelectedStudents(courseNumber);
    const authRequestSelectedStudentsFilterByCourse = {
      method: "post",
      url: "staffMember/SelectedStudentsSearchByCourse",
      data: {
        degree: parseInt(courseNumber),
      },
    };

    callServer(authRequestSelectedStudentsFilterByCourse)
      .then((response) => {
        setSelectedStudentsList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  };

  return (
    <div className="containcompany mt-0 ms-5" style={{ width: "90%" }}>
      <h2 className="mb-4">Manage Student</h2>
      <Tabs defaultActiveKey="StudentList" className="ManageStudentTab">
        <Tab
          className="StudentTab mt-5"
          eventKey="StudentList"
          title="Student List"
        >
          <div className="contain1">
            <Row>
              <Col lg="3" className="ml-0 mr-5">
                <Nav.Link as={Link} to="/Staff/Add-student">
                  {" "}
                  <Button variant="primary" className="mr-5 ml-0">
                    <i class="bi bi-plus-circle mr-2"></i>Add Student
                  </Button>
                </Nav.Link>
              </Col>
            </Row>
            <Container className="mt-2 mx-0 px-0">
              <Form className="container mx-0 px-0">
                <Row className="mb-1 mr-3 mb-5">
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Course
                    </Form.Label>
                    <Form.Select
                      sm={10}
                      defaultValue="Choose..."
                      onChange={(event) => {
                        searchAllStudentsByCourse(event.target.value);
                      }}
                    >
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
                    <Form.Select
                      sm={10}
                      defaultValue="Choose..."
                      onChange={(event) => {
                        searchAllStudentsByStatus(event.target.value);
                      }}
                    >
                      <option value="0">All</option>
                      <option value="1">Selected</option>
                      <option value="2">Not Selected</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} sm controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Sort By
                    </Form.Label>
                    <Form.Select
                      sm={10}
                      defaultValue="Choose..."
                      onChange={(event) => {
                        sortAllStudents(event.target.value);
                      }}
                    >
                      <option value="1">Index Number</option>
                      <option value="2">Name</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </Container>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              {/* <TableView headers = {['Index No','Name','CV','Interviews','Company']}
                                    list={[['190020432','Shanika Jayathunga','True','None','LSEG'],['190020532','Jayani Kulasekara','True','called','Avonet Technologies'],['190030423','Prathiksha Jayakodi','False','None','WSO2'],['190020455','Sameera Kumara','True','None','Dialog Axiata'],['190027632','Ayodya Ranasinghe','True','None','99X'],['190020444','Binura Jathilake','True','called','LSEG']]}>
                                        
                                    </TableView> */}
              <Table style={{ maxHeight: "60vh" }}>
                <thead className="bg-primary text-white thead-primary">
                  <tr>
                    <th>Index Number</th>
                    <th>Registration Number</th>
                    <th>Name</th>
                    <th>Degree</th>
                    <th>Student Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allStudentsList.map((allStudentsList) => (
                    <tr>
                      <Link
                        to={{
                          pathname: "/Staff/StudentDetails",
                          state: allStudentsList,
                        }}
                      >
                        <td>{allStudentsList.index_number}</td>
                      </Link>
                      <td>{allStudentsList.registration_number}</td>
                      <td>{allStudentsList.name}</td>
                      <td>{allStudentsList.student_degree.degree}</td>
                      <td>{allStudentsList.student_status_type.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        <Tab
          className="StudentTab mt-5"
          eventKey="Selected"
          title="Selected Students"
        >
          <div className="announcementcontain mx-0 px-0">
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
                          setSearchSelectedStudent(event.target.value);
                        }}
                      />
                    </InputGroup>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Container className="mt-2 mx-0 px-0">
              <Form className="container mx-0 px-0">
                <Row className="mb-1 mr-3 mb-5">
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Course
                    </Form.Label>
                    <Form.Select
                      sm={10}
                      defaultValue="Choose..."
                      onChange={(event) => {
                        searchSelectedStudentByCourse(event.target.value);
                      }}
                    >
                      <option value="all">All CS and IS</option>
                      <option value="1">CS - 3rd Year</option>
                      <option value="2">IS - 3rd Year</option>
                      <option value="3">CS - 4th Year</option>
                      <option value="4">IS - 4th Year</option>
                    </Form.Select>
                  </Form.Group>

                  

                  <Form.Group as={Col} sm controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Sort By
                    </Form.Label>
                    <Form.Select
                      sm={10}
                      defaultValue="Choose..."
                      onChange={(event) => {
                        sortSelectedStudents(event.target.value);
                      }}
                    >
                      <option value="1">Index Number</option>
                      <option value="2">Name</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} sm controlId="formGridState">
                    {/* <Form.Label className="fw-bold" column sm={5}>
                      Job Category
                    </Form.Label> */}
                    {/* <Form.Select aria-label="Default select example" required onChange={(event) => { setCategory(event.target.value) }}>
                                                    <option value="all">Select Job Category</option>
                                                    {jobRoles.map((jobRole)=>(
                                                        <option value={jobRole.id}>{jobRole.job_role}</option>
                                                    ))}
                                                    

                                                    </Form.Select>  */}
                    {/* <div >{JSON.stringify(jobRoles)}</div> */}
                    {/* {JSON.stringify(jobRoles.map(r=>({name:r.job_role,value:r.id})))} */}
                    {/* <div className="bg-white text-dark">
                    {jobRoles.length > 0 && (
                      <SelectSearch
                      
                        placeholder="Select Job Category"
                        options={jobRoles}
                        search
                        required
                        onChange={(event) => {
                          setCategory(event);
                        }}
                      />
                    )}
                    </div> */}
                  </Form.Group>
                </Row>
              </Form>
            </Container>

            <div className="table-wrapper-scroll-y my-custom-scrollbar ">
              {/* <TableView                            
                                    headers = {['Index No','Name','Compnay Selected For','GPA']}
                                    list={[['190020432','Shanika Jayathunga','LSEG','3.3232'],['190020532','Jayani Kulasekara','Avonet Technologies','3.0231'],['190030423','Prathiksha Jayakodi','WSO2','3.8503'],['190020455','Sameera Kumara','Dialog Axiata','2.3456'],['190027632','Ayodya Ranasinghe','99X','2.9998'],['190020444','Binura Jathilake','LSEG','3.5674']]}>
                                        
                                    </TableView> */}
              <Table style={{ maxHeight: "60vh" }}>
              <thead className='bg-primary text-white thead-primary'>
                  <tr>
                    <th>Index Number</th>
                    <th>Registration Number</th>
                    <th>Name</th>
                    <th>Degree</th>
                    <th>Company</th>
                    <th>Job Role</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedStudentsList
                    .filter((selectedStudentsList) => {
                      if (searchSelectedStudent == "") {
                        return selectedStudentsList;
                      } else if (
                        selectedStudentsList.name
                          .toLowerCase()
                          .includes(searchSelectedStudent.toLowerCase())
                      ) {
                        return selectedStudentsList;
                      }
                    })
                    .map(
                      (selectedStudentsList) => (
                        console.log(selectedStudentsList),
                        (
                          <tr>
                            <Link
                              to={{
                                pathname: "/Staff/StudentDetails",
                                state: selectedStudentsList,
                              }}
                            >
                              <td>{selectedStudentsList.index_number}</td>
                            </Link>
                            <td>{selectedStudentsList.registration_number}</td>
                            <td>{selectedStudentsList.name}</td>
                            <td>
                              {selectedStudentsList.student_degree?.degree}
                            </td>
                            {/* <td>{selectedStudentsList.internships.company_id}</td> */}
                            {selectedStudentsList.internships?.map(
                              (selectedCompany) => (
                                <td>{selectedCompany.company.name}</td>
                              )
                            )}
                            {selectedStudentsList.internships?.map(
                              (selectedJobRole) => (
                                <td>{selectedJobRole.job_roles.job_role}</td>
                                // <td>{selectedJobRole.job_role}</td>
                              )
                            )}
                            {/* <td>{selectedStudentsList.internships.job_role}</td> */}
                          </tr>
                        )
                      )
                    )}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );

  //
};

export default StaffMemberManageStudents;
