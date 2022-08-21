import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css';
import '../../styles/CoordinatorCompany.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row } from 'react-bootstrap';
import TableView from '../../component/Dashboard/Table/tableView';
// import img from '../../assets/images/profile.jpg'




class CoordinatorUsersSetting extends Component {

    render() {
        // const barStatus = this.props.barStatus;
        const barStatus = 60;
        return (
            <div className='contain'>
                <h3>System Users</h3>

                <div className='d-flex flex-row justify-content-sm-between'>

                    <div className='btn-container'>
                        <Button  > All Users </Button>
                        <Button > Add Users </Button>

                    </div>

                    <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                        <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                            <div className='searchico text-center p-2'><i className="bi bi-search"></i></div>
                            <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                    </Form.Group>
                </div>

                <div class="table-wrapper-scroll-y table-scrollba ">
                    <TableView headers={['Name', 'Position', 'Is Active']}
                        list={[['Chamath Chinthana', 'Corrdinator', 'Active'], ['Thilina Madusanka', 'Staff Memner', 'Active'], [ 'Prathiksha Jayakodi', 'Staff Memner', 'Active'], [ 'Sameera Kumara', 'Corrdinator', 'Not Active'], [ 'Ayodya Ranasinghe', 'Corrdinator', 'Not Active'], [ 'Binura Jathilake', 'Staff Memner', 'Active']]}>

                    </TableView>

                </div>


            </div>




        );
    }


}


export default CoordinatorUsersSetting;