import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import TableView from '../../component/Dashboard/Table/tableView';

import '../../styles/sMStudent.css';


class SMRegisteredOrganization extends Component {

    render() {
        return (
            <div className='contain'>
                <div className='d-flex flex-row justify-content-sm-between'>

                <h3>Registered Organization</h3>
                
                <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                 <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                 <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                 <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                </Form.Group>
                </div>
                

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                    <TableView headers = {['Company','Contact No','Represen']}
                            list={[['WSO2','0114-222642','Suminda Jayakodhi'],['99x','0114-432345','shawn dawood'],['LSEG','0112-212321','Maduka Bodhinayaka'],['Avonet-Technologies','0112-123987','Sanira Ranaweera']]}>
                              
                                
                    </TableView>
                   
                </div>


            </div>

        );
    }
 
}

export default SMRegisteredOrganization;