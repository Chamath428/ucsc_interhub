import React, { Component } from 'react';
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col, Button } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import jwtDecode from 'jwt-decode';
import { callServer } from '../authServer';

import '../../styles/companyApplicant.css';    

const CompanyApplicants =()=> {

    const [applicantList,setApplicantList]=useState([]);
    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("Applicants fetched Successfully!");
    const [variant, setVariant] = useState("success");
    const [indexNumber,setIndexNumber]=useState(0);
    const [wishlistApplicants,setWishListApplicants] = useState([]);

    useEffect(()=>{
        const data ={
            companyId:jwtDecode(sessionStorage.getItem("accessToken")).id
          }
          const authRequest = {
            "method":"post",
            "url":"organization/getAllApplicants",
            "data":data
          }

        callServer(authRequest).then((response)=>{
            setApplicantList(response.data[0])
            setWishListApplicants(response.data[1]);
        }).catch((error)=>{
            setAlertPara("Something went wrong while getting students!");
            setVariant("danger");
            setShow(true);
        })
    },[]);

    const handleWishList = (index_number,advertisement_id,is_wish_list)=>{
        const data={
            index_number:index_number,
            advertisement_id:advertisement_id,
            is_wish_list:is_wish_list
        }
        const authRequest = {
            "method":"post",
            "url":"organization/handleWishlist",
            "data":data
          }
          callServer(authRequest).then((response)=>{
            window.location.reload(false);
          }).catch((error)=>{
            console.log(error)
          })
    }

        return (
            <Tabs 
                defaultActiveKey="AllApplicants"
                className="ManageApplicantTab ms-5 mt-5"
                fill
            >
                <Tab className="ApplicantTab" eventKey="AllApplicants" title="All Applicants">
                <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between '>

                            <h3>All Applicants</h3> 
                        </div>
                        <Container className="mt-3">
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
                                            
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Job Role</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Interview Called</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>Called</option>
                                                    <option>Not Called</option>
                                                </Form.Select>
                                            </Form.Group>  
                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table style={{ maxHeight: '60vh' }}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Applied Advertiesment</th>
                                        <th>Wishlist</th>      
                                    </tr>
                                </thead>
                                <tbody>
                                 {applicantList.map((applicant)=>(
                                    <tr >
                                        
                                        <td>{applicant.name}</td>
                                        <td>{applicant.title}</td>
                                        <td>{applicant.is_wish_list==0?<Button type='button' onClick={() => {handleWishList(applicant.index_number,applicant.advertisement_id,1) }} variant="primary">Add to WishList</Button>:<Button onClick={() => { handleWishList(applicant.index_number,applicant.advertisement_id,0) }} variant="danger">Remove from WishList</Button>}</td>
                                    
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table>                      
                        </div>
                    </div>

                </Tab>
                <Tab className="ApplicantTab" eventKey="WishList" title="Wish List">
                <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between '>

                            <h3>Wish List</h3> 
                        </div>
                        <Container className="mt-3">
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
                                            
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Job Role</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group> 
                                            <Form.Group as={Col} md controlId="formGridState">
                                                <Form.Label className="fw-bold" column sm={5}>Interview Called</Form.Label>
                                                <Form.Select sm={10} defaultValue="Choose...">
                                                    <option>All</option>
                                                    <option>Called</option>
                                                    <option>Not Called</option>
                                                </Form.Select>
                                            </Form.Group> 

                                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table style={{ maxHeight: '60vh' }}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Applied Advertiesment</th>
                                        <th>Wishlist</th>      
                                    </tr>
                                </thead>
                                <tbody>
                                 {wishlistApplicants.map((wisApplicant)=>(
                                    <tr >
                                        
                                        <td>{wisApplicant.name}</td>
                                        <td>{wisApplicant.title}</td>                    
                                        <td><Button type='button' onClick={() => {handleWishList(wisApplicant.index_number,wisApplicant.advertisement_id,0) }} variant="danger">Remove from WishList</Button></td>
                                    </tr>
                                    

                                 ))}
                                    
                                </tbody>
                            
                            
                            </Table> 
                        
                        </div>


                    </div>

                </Tab>
                <Tab className="ApplicantTab" eventKey="Selected" title="Selected Interns">
            
                    <div className='contain'>
                        <div className='d-flex flex-row justify-content-sm-between'>

                        <h3>Selected Interns</h3>
                        </div> 
                        <div className='d-flex flex-row-reverse mb-1'>
                        
                        </div>
                        <Container className="mt-2">
                        <Form className='container'>
                        <Row className="mb-1 col-12  align-items-end">
                            
                            <Col>
                            <Form.Group as={Col} md controlId="formGridState">
                                <Form.Label className="fw-bold" column sm={5}>Job Role</Form.Label>
                                <Form.Select sm={10} defaultValue="Choose...">
                                    <option>All</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>
                            </Col>

                            <Col className='align-items-end'>
                            <Form.Group controlId="formBasicSearchOrganization">
                                <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                                <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                                <Form.Control className="searchbox" type="searchbox text" placeholder="Search Intern" /></div>
                            </Form.Group> 
                            </Col>
                        </Row>   
                                    </Form>    
                    
                        </Container>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <TableView headers = {['Name','Job Role','Supervisor']}
                                    list={[['Shanika Jayathunga','Software Engineering','W.D.Warnaweera'],['Jayani Kulasekara','UI/UX Designer','S.E.Nissanka'],['Sameera Kumara','Project Manager','A.Abeweera'],['Binura Jathilake','Business Analyst','W.D.Warnaweera']]}>
                                        
                            </TableView>  
                        
                        </div>


                    </div>
                </Tab>
            </Tabs>   
        );
    }
// 

export default CompanyApplicants;