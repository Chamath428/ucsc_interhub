import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col, FormLabel } from 'react-bootstrap';
import AdvertisementCard from '../../component/Cards/AdvertismentCard/advertisementCard';
import Wso2Logo from '../../assets/images/wso2Logo.jpg';
import LsegLogo from '../../assets/images/lsegLogo.png';
import N99XLogo from '../../assets/images/99xLogo.png';



import '../../styles/sMAdvertisments.css';    


class StaffMemberAdvertisements extends Component {

    render() {
        return (
           
            <div className='contain'>
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
                        <AdvertisementCard jobrole="SE" company="LSEG" logo={LsegLogo}></AdvertisementCard>
                        <AdvertisementCard jobrole="SE" company="WS02" logo={Wso2Logo}></AdvertisementCard>  
                        <AdvertisementCard jobrole="Network Engineer" company="LSEG" logo={LsegLogo}></AdvertisementCard>  
                        <AdvertisementCard jobrole="UI/UX Designer" company=" 99X" logo={N99XLogo}></AdvertisementCard>   
 
                   </Row>
                </div>


            </div>

        );
    }
// 
}

export default StaffMemberAdvertisements;