import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css';
import '../../styles/CoordinatorCompany.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img from '../../assets/images/profile.jpg'

import { Row } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';






class CoordinatorViewAnnounsments extends Component {

    render() {
        // const barStatus = this.props.barStatus;
        const barStatus = 60;
        return (

            <div className='contain'>

                <div className='d-flex flex-row justify-content-sm-between'>

                    <div className='btn-container'>
                        <Button  > All Announcments </Button>
                        <Button > Add Anouncement </Button>

                    </div>

                    <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                        <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                            <div className='searchico text-center p-2'><i className="bi bi-search"></i></div>
                            <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                    </Form.Group>
                </div>
                <h3>Announcements</h3>

                <div class="table-wrapper-scroll-y table-scrollba ">

                    <TableView headers={['Title', 'Views', 'Visibility']}
                        list={[['Cool Project', '11', 'All'], ['Thing No One Wants to Do', '2', 'Student'], ['Site Revamp', '49', 'Company'], ['New Logo Design', '33 ', 'All'], ['Accessibility Updates', '4', 'Company'] ,['Color Variations', '55', 'Student']]}>

                    </TableView>
                </div>


            </div>


        );
    }


}


export default CoordinatorViewAnnounsments;