import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import TableView from '../../component/Dashboard/Table/tableView';

import '../../styles/sMStudent.css';


class SMNewOrganization extends Component {

    render() {
        return (
            <div className='contain'>
                <div className='d-flex flex-row justify-content-sm-between'>

                <h3>New Organization</h3>
                
               <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                 <div className="d-flex flex-row align-item-center justify-content-center text-center" > 
                 <div className='searchicon text-center p-2'><i className="bi bi-search"></i></div> 
                 <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                </Form.Group>
                </div>
                

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                           <TableView headers = {['Company','Contact No','Company Registration Number']}
                            list={[['Ntrylab','0114-560642','8453212'],['Xempler','0112-234322','8433215'],['JavaLab','0113-234321','8223212'],['KriatWeb','0112-123987','2345321']]}>
                              
                                
                            </TableView>
                   
                </div>


            </div>

        );
    }
// 
}

export default SMNewOrganization;