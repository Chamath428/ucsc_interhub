import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import TableView from '../../component/Dashboard/Table/tableView';

import '../../styles/sMStudent.css';


class StaffMemberStudents extends Component {

    render() {
        return (
            <div className='contain'>
                <div className='top'>

                <h3>Students</h3>
                <Button className='addstudent'>+ Add Student</Button>
                </div>
                <div className='dropdown-container'>
                    <div className='dropdown1'>
                        <label className='btn-label'>Course</label>
                        <Form.Select>
                            <option value="1">CS and IS</option>
                            <option value="2">CS</option>
                            <option value="3">IS </option>
                        </Form.Select>
                    </div>
                    <div className='dropdown2'>
                        <label className='btn-label'>Enrolled</label>
                        <Form.Select>
                            <option value="1">ALL</option>
                            {/* <option value="2">IS</option>
                            <option value="3">CS and IS</option> */}
                        </Form.Select>
                    </div>
                    <div className='dropdown3'>
                        <label className='btn-label'>Sort By</label>
                        <Form.Select>
                            <option value="1">Index Number</option>
                            <option value="2">Name</option>
                            <option value="3">Company</option>
                            <option value="4">GPA</option>
                        </Form.Select>    
                    </div>
                </div>

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <TableView>
                                
                            </TableView>
                   
                </div>


            </div>

        );
    }
// 
}

export default StaffMemberStudents;