import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css';
import '../../styles/CoordinatorCompany.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TableView from '../../component/Dashboard/Table/tableView';
import Stack from 'react-bootstrap/Stack';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard';
import LinkCard from '../../component/Cards/linksCard';
import Badge from 'react-bootstrap/Badge';
import AccordionItem from '../../component/Accordion/accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CoordinatorCard from '../../component/Dashboard/CoordinatorCard/coordinatorCard';
import ProgramDeleteModal from '../../component/Modal/modalProgramDelete';
import ProgramCreateModal from '../../component/Modal/modalProgramCreate';

import { useState } from 'react';

class CoordinatorProgram extends Component {
    render() {
        
        // const barStatus = this.props.barStatus;
        // const barStatus = 60;
        return (
            
        <div className='contain ms-5 mt-0' style={{width :'90%'}}>
            <h3>Program Settings</h3>

            {/* <div className='container'> */}
            
            <Tabs 
                defaultActiveKey="CurrentProgram"
                className="AnnouncementsTab"
                fill
            >
                <Tab className="ProgramTab" eventKey="CurrentProgram" title="Current Program">
                    <Container>
                        <br /><br />
                            <Row><Col>
                                <h4>Current Placement Program</h4>{''}</Col><Col>
                                <ProgramCreateModal/>{' '}
                            </Col></Row>

                        {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3"> */}
                        <Row  className='card-contain mt-5'>
                        <CoordinatorCard title={"Total Students"} count={"275"} icon={"people-fill"} cardWidth={4}></CoordinatorCard>
                        <CoordinatorCard title={"Total Companies"} count={"182"} icon={"building"} cardWidth={4}></CoordinatorCard>
                        <CoordinatorCard title={"Currently enrolled"} count={"270"} icon={"people"} cardWidth={4}></CoordinatorCard>
                        </Row>
                        <Row  className='card-contain mt-4'>
                        <CoordinatorCard title={"Start Date"} count={"06.10.2022"} icon={"calendar-plus"} cardWidth={4}></CoordinatorCard>
                        <CoordinatorCard title={"End Date"} count={"06.10.2023"} icon={"calendar-x"} cardWidth={4}></CoordinatorCard>
                        <CoordinatorCard title={"Employed Companies"} count={"270"} icon={"person-check"} cardWidth={4}></CoordinatorCard>
                        </Row>
                        {/* </div> */}
                        <Row className="justify-content-md-center">
                        <Col className='mt-5'>
                           <div className='float-right mr-4'><ProgramDeleteModal /></div>
                            
                            <Button variant="primary" active className='float-right mr-4' >
                                More Details
                            </Button>{' '}
                       
                        </Col>
                        </Row>
                    </Container>

                </Tab>

                <Tab className="ProgramTab" eventKey="AllPrograms" title="All Programs">
                <h4 className='mt-5 mb-4'>Current Placement Program</h4>

                    <div class="table-wrapper-scroll-y table-scrollba ">
                        {/* <TableView>

                        </TableView> */}
                        <TableView headers={['#', 'Start date', 'End date', 'Status']}
                            list={[['1', '06.10.2022', '06.10.2022', 'Active'], ['2', '06.10.2022', '06.10.2022', 'Ended'],['3', '06.10.2022', '06.10.2022', 'Ended']]}>

                        </TableView>

                    </div>
                </Tab>
            </Tabs>
                  
            {/* </div> */}
        </div>




        );
        
    }


}


export default CoordinatorProgram;