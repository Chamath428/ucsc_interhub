import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col, FormLabel } from 'react-bootstrap';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import AdvertisementCard from '../../component/Cards/AdvertismentCard/advertisementCard';
import LsegLogo from '../../assets/images/lsegLogo.png';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { callServer } from '../authServer';
  
const CompanyAdvertisements =()=>{

        const [adds,setAdds] = useState([]);
        
        useEffect(()=>{
            const data={
                companyId:jwtDecode(sessionStorage.getItem("accessToken")).id
            }
            const authRequest = {
                "method":"post",
                "url": "organization/getAllAdvertiesmentS",
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
           
            <div className="containcompany mt-0 ms-5" style={{ width: "90%" }}>
      <h2 className="mb-4">Your Advertisements</h2>
                <div className='d-flex mb-3 mt-1'>

                    <Nav.Link as={Link} to="/Company/Create-ad"><Button variant='primary'><i class="bi bi-plus-circle mr-2"></i>Create a new advertisement</Button> </Nav.Link>

                </div>
                <div className='d-flex flex-row justify-content-sm-between mt-5 '>

                <h4>Posted Advertisements</h4>
                </div> 
                <div className="Advertisements mt-5">
                    <Row as={Col} sm>
                     {adds.length==0?(
                <p>You have no Advertisements to show.</p>
                ):(
                  adds.map((add)=>(
                    <AdvertisementCard
                     title={add.title}
                     jobrole={add.job_role}
                     status={add.type}
                     logo={LsegLogo}
                     actor="Company"
                     data={add.advertisement_id}            
                     >

                     </AdvertisementCard>
                    ))
                )
              }
                    
                   </Row>
                </div>


            </div>

        );

}

export default CompanyAdvertisements;