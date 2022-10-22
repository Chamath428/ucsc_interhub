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
                        <AdvertisementCard jobrole="Software Engineer" company="LSEG" logo={"https://media-exp1.licdn.com/dms/image/C4D0BAQGdXLeDAzp0wQ/company-logo_200_200/0/1663662838677?e=1674086400&v=beta&t=JjYvke6yO54by4vRIwHvhRcP3t5forhBEkwaJT_h0-Y"}></AdvertisementCard>
                        <AdvertisementCard jobrole="Business Analyst" company="WS02" logo={"https://media-exp1.licdn.com/dms/image/C4D0BAQFchI_Xw-FFhQ/company-logo_200_200/0/1597299923263?e=1674086400&v=beta&t=oMQPkPhslR6mS12UDEXJPOT4stztPeVd0ZcfUqWh0f4"}></AdvertisementCard>  
                        <AdvertisementCard jobrole="Quality Assurance" company="Rootcode Labs" logo={"https://media-exp1.licdn.com/dms/image/C560BAQGHuvWnG93BTA/company-logo_200_200/0/1602658902214?e=1674086400&v=beta&t=9J-q16QC9x56gfmYNTzNsxffpUoshhUnNp-_rbid0i0"}></AdvertisementCard>  
                        <AdvertisementCard jobrole="Software Engineer" company=" 99X" logo={"https://media-exp1.licdn.com/dms/image/C560BAQEVg8fDYKXBCw/company-logo_200_200/0/1601228756308?e=1674086400&v=beta&t=HmQvFNB1BWTxS1_NXhFGEroQidebf-pBAaSazQSqKPY"}></AdvertisementCard>   
 
                   </Row>
                </div>


            </div>

        );
    }
// 
}

export default StaffMemberAdvertisements;