import React, { Component,useEffect, useState  } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col,Button } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { callServer } from '../authServer';

import '../../styles/sMStudent.css';    

const StaffMemberManageStudents = () => {
    
    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("User added Successfully!");
    const [variant, setVariant] = useState("success");
    const [allStudentsList, setAllStudentsList] = useState([]);
    const [selectedStudentsList, setSelectedStudentsList] = useState([]);
    const[selectedCourse,setselectedCourse] = useState("0");
    const[selectedStatus,setselectedStatus] = useState("0");
    const[sortedAllStudentList,setSortedAllStudents] = useState("0");
    const[searchByCourseSelectedList,searchSelectedStudentsByCourse] = useState();
    
    useEffect(() => {

        const authRequestAllStudents = {
            "method": "post",
            "url": "staffMember/AllStudents",
            "data": {}
        }

        callServer(authRequestAllStudents).then((response) => {

            setAllStudentsList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
        const authRequestSelectedStudents = {
            "method": "post",
            "url": "staffMember/SelectedStudents",
            "data": {}
        }

        callServer(authRequestSelectedStudents).then((response) => {

            setSelectedStudentsList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
    }, []);

    const searchAllStudentsByCourse = (courseNumber)=>{
        setselectedCourse(courseNumber)
        const authRequestAllStudentsFilterByCourse = {
            "method": "post",
            "url": "staffMember/AllStudentsSearchByCourse",
            "data": {
                degree:parseInt(courseNumber)
            }
        }

        callServer(authRequestAllStudentsFilterByCourse).then((response) => {
            setAllStudentsList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
    }
    const searchAllStudentsByStatus = (statusNumber)=>{
        setselectedStatus(statusNumber)
        const authRequestAllStudentsFilterByStatus = {
            "method": "post",
            "url": "staffMember/SearchStudentsSearchByEntrolled",
            "data": {
                student_status:parseInt(statusNumber)
            }
        }

        callServer(authRequestAllStudentsFilterByStatus).then((response) => {
            setAllStudentsList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
    }
    const sortAllStudents = (sortData)=>{
        setSortedAllStudents(sortData)
        const authRequestSortAllStudentsFilter = {
            "method": "post",
            "url": "staffMember/SortAllStudents",
            "data": {
                sort_data:parseInt(sortData)
            }
        }

        callServer(authRequestSortAllStudentsFilter).then((response) => {
            setAllStudentsList(response.data);
        }).catch(function (error) {
            if (error.response) {
                setAlertPara("Something went wrong!");
                setVariant("danger");
                setShow(true);
            }
        })
    }
        return (
            <div className='containstudent mt-5 ms-5'style={{width:'90%'}}>
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

                            <Nav.Link as={Link} to="/Staff/Add-student"> <DashboardButton inside={'+ Add Student'}></DashboardButton></Nav.Link>

                        </div>
                        <Container className="mt-2">
                        <Form className='container'>
                                        <Row className="mb-1">
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Course</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose..." onChange={(event) => { searchAllStudentsByCourse(event.target.value) }}>
                                                    <option value="0">All CS and IS</option>
                                                    <option value="1">CS - 3rd Year</option>
                                                    <option value="2">IS - 3rd Year</option>
                                                    <option value="3">CS - 4th Year</option>
                                                    <option value="4">IS - 4th Year</option>
                                                </Form.Select>
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5} >Enrolled</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose..." onChange={(event) => { searchAllStudentsByStatus(event.target.value) }}>
                                                    <option value="0">All</option>
                                                    <option value="1">Selected</option>
                                                    <option value="2">Not Selected</option>
                                                </Form.Select>
                                            </Form.Group>   

                                            <Form.Group as={Col} sm controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Sort By</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose..." onChange={(event) => { sortAllStudents(event.target.value) }}>
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
                           <Table style={{ maxHeight: '60vh' }}>
                                <thead>
                                    <tr>
                                        <th>Index Number</th>
                                        <th>Registration Number</th>
                                        <th>Name</th>
                                        <th>Degree</th>
                                        <th>Student Status</th>         
                                    </tr>
                                </thead>
                                <tbody>
                                 {allStudentsList.map((allStudentsList)=>(
                                    <tr >
                                        
                                        <td>{allStudentsList.index_number}</td>
                                        <td>{allStudentsList.registration_number}</td>
                                        <td>{allStudentsList.name}</td>
                                        <td>{allStudentsList.degree}</td>
                                        <td>{allStudentsList.student_status}</td>
                                    
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table>         
                        
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
                                                <Form.Label className="fw-bold" column sm={5} >Course</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option value="all">All CS and IS</option>
                                                    <option value="1">CS - 3rd Year</option>
                                                    <option value="2">IS - 3rd Year</option>
                                                    <option value="3">CS - 4th Year</option>
                                                    <option value="4">IS - 4th Year</option>
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
                                    {/* <TableView                            
                                    headers = {['Index No','Name','Compnay Selected For','GPA']}
                                    list={[['190020432','Shanika Jayathunga','LSEG','3.3232'],['190020532','Jayani Kulasekara','Avonet Technologies','3.0231'],['190030423','Prathiksha Jayakodi','WSO2','3.8503'],['190020455','Sameera Kumara','Dialog Axiata','2.3456'],['190027632','Ayodya Ranasinghe','99X','2.9998'],['190020444','Binura Jathilake','LSEG','3.5674']]}>
                                        
                                    </TableView> */}
                            <Table style={{ maxHeight: '60vh' }}>
                                <thead>
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
                                {selectedStudentsList.map((selectedStudentsList)=>(
                                    console.log(selectedStudentsList),
                                    <tr >
                                        
                                        <td>{selectedStudentsList.index_number}</td>
                                        <td>{selectedStudentsList.registration_number}</td>
                                        <td>{selectedStudentsList.name}</td>
                                        <td>{selectedStudentsList.degree}</td>
                                        {/* <td>{selectedStudentsList.internships.company_id}</td> */}
                                        {selectedStudentsList.internships.map((selectedCompany)=>(
                                                <td>{selectedCompany.company.name}</td>
                                        ))}
                                        {selectedStudentsList.internships.map((selectedJobRole)=>(
                                                <td>{selectedJobRole.job_roles.job_role}</td>
                                                // <td>{selectedJobRole.job_role}</td>
                                        ))}
                                        {/* <td>{selectedStudentsList.internships.job_role}</td> */}
                                       
                                    
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table>
   
                        </div>


                    </div>
                </Tab>
            </Tabs>
            </div>   
        );

// 
}

export default StaffMemberManageStudents;