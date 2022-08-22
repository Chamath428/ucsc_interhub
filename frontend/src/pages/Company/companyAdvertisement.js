import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row,Col, FormLabel } from 'react-bootstrap';
import DashboardButton from '../../component/Dashboard/DashboardButton/dashboardButton';
import AdvertisementCard from '../../component/Cards/AdvertismentCard/advertisementCard';
import LsegLogo from '../../assets/images/lsegLogo.png';
  
class CompanyAdvertisements extends Component {

    render() {
        return (
           
            <div className='contain'>
                <div className='d-flex flex-row justify-content-sm-between mt-5 '>

                <h3>Advertisements</h3>
                </div> 
                <div className='d-flex mb-5 mt-5'>
                    <DashboardButton inside={'+ Create a Advertisement'}></DashboardButton>
                </div>
                <div className='d-flex flex-row justify-content-sm-between mt-5 '>

                <h4>Posted Advertisements</h4>
                </div> 
                <div className="Advertisements mt-5">
                    <Row as={Col} sm>
                        <AdvertisementCard jobrole="SE" company="LSEG" logo={LsegLogo}></AdvertisementCard>
                        <AdvertisementCard jobrole="Network Engineer" company="LSEG" logo={LsegLogo}></AdvertisementCard>
                        <AdvertisementCard jobrole="DevOps Engineer" company="LSEG" logo={LsegLogo}></AdvertisementCard>
                        <AdvertisementCard jobrole="Project Manager" company="LSEG" logo={LsegLogo}></AdvertisementCard>                          
 
                   </Row>
                </div>


            </div>

        );
    }
// 
}

export default CompanyAdvertisements;