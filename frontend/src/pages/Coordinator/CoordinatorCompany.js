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




class CoordinatorCompany extends Component {

    render() {
        // const barStatus = this.props.barStatus;
        const barStatus = 60;
        return (
            <div className='contain'>

                <div className='d-flex flex-row justify-content-sm-between mb-3'>

                    <div className='btn-container'>
                        <Button  > Registered </Button>
                        <Button > Pending </Button>

                    </div>

                    <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                        <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                            <div className='searchico text-center p-2'><i className="bi bi-search"></i>
                            </div>
                            <Form.Control type="searchbox text" placeholder="Search organization" />
                        </div>
                    </Form.Group>
                </div>
                <h3 >Manage Companies</h3>

                <div class="table-wrapper-scroll-y table-scrollba ">
                    {/* <TableView>

                    </TableView> */}
                    <TableView headers={['Company Name', 'Contact', 'Company Registration Number']}
                        list={[['LSEG', '011-11111111', 'R12C1'], ['Avonet Technologies', '011-11111122', 'R12C4'], ['WSO2', '011-1111133', 'R12C1'], ['Dialog Axiata', '071-1133456', 'R12C16'], ['99X', '011-3243567', 'R12C8'], ['LSEG', '099-1255332', 'R12C9']]}>

                    </TableView>

                </div>


            </div>




        );
        
    }


}


export default CoordinatorCompany;