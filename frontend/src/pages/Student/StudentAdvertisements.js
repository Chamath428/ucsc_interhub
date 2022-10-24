import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col, FormLabel } from 'react-bootstrap';
import AdvertisementCard from '../../component/Cards/AdvertismentCard/advertisementCard';
import Wso2Logo from '../../assets/images/wso2Logo.jpg';
import LsegLogo from '../../assets/images/lsegLogo.png';
import N99XLogo from '../../assets/images/99xLogo.png';
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { callServer } from '../authServer';



import '../../styles/sMAdvertisments.css';    


const StudentAdvertisements =()=>{

    const [adds,setAdds] = useState([]);

    useEffect(()=>{
        const data={
            // companyId:jwtDecode(sessionStorage.getItem("accessToken")).id
        }
        const authRequest = {
            "method":"post",
            "url": "student/getAllAdvertiesmentS",
            "data": data
        }

        callServer(authRequest).then((response)=>{
            console.log(response);
            setAdds(response.data);
        }).catch((error)=>{
            console.log(error);
        })

    },[])



        return (
           
            <div className='contain mt-0 ms-5'style={{width:'90%'}}>
                <div className='d-flex flex-row justify-content-sm-between'>

                <h3>Advertisements</h3>
                </div> 
                <div className='d-flex flex-row-reverse mb-3'>
                <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                 <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                 <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                 <Form.Control className="searchbox" type="searchbox text" placeholder="Search Advertisement" /></div>
                </Form.Group>
                </div>
                <Container className="mt-2 mb-5">
                <Form className='container' id='advertisement'>
                    <Row className="mb-3">
                        <Form.Group as={Col} sm controlId="formGridState">
                            <Form.Label className="fw-bold" column sm={5}>Company</Form.Label>
                            <Form.Select sm={10} defaultValue="Choose...">
                                <option>All</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>   

                        <Form.Group as={Col} sm controlId="formGridState">
                            <Form.Label className="fw-bold" column sm={5}>Job Role</Form.Label>
                            <Form.Select sm={10} defaultValue="Choose...">
                            <option value="1">All</option>
                            <option value="2">...</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} sm controlId="formGridState">
                            <Form.Label className="fw-bold" column sm={5}>Technologies</Form.Label>
                            <Form.Select sm={10} defaultValue="Choose...">
                            <option value="1">All</option>
                            <option value="2">...</option>
                            </Form.Select>
                        </Form.Group>
                        
                        
                
                    </Row>   
              </Form>    
               
                </Container>

                <div className="Advertisements ">
                    <Row as={Col} sm>
                     {adds.length==0?(
                <p>You have no Advertisements to show.</p>
                ):(
                  adds.map((add)=>(
                    <AdvertisementCard
                     jobrole={add.job_role}
                     company={add.name}
                    //  status={add.type}
                     logo={LsegLogo}
                     actor="Student">

                     </AdvertisementCard>
                    ))
                )
              }
                    
                   </Row>
                </div>


            </div>

        );
// 
}

export default StudentAdvertisements;