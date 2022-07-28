import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css';


class CoordinatorStudent extends Component {

    render() {
        return (
            <div className='contain'>

                <h3>Manage Students</h3>
                <div className='btn-container'>
                    <Button  > View </Button>
                    <Button > Add bulk students </Button>
                    <Button > Evaluation </Button>
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
                            <option value="2">IS</option>
                            <option value="3">CS and IS</option>
                        </Form.Select>
                    </div>
                </div>

                <div class="table-wrapper-scroll-y my-custom-scrollbar">

                    <table class="table">
                        <thead class="thead-light">
                            <tr class="table-primary">
                                <th scope="col">#</th>
                                <th scope="col">Index</th>
                                <th scope="col">Name</th>
                                <th scope="col">CV</th>
                                <th scope="col">Interviews</th>
                                <th scope="col">Employee</th>
                                <th scope="col">Options</th>

                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <th scope="row">1</th>
                                <td>19000877</td>
                                <td>Thilina Madusanka</td>
                                <td>True</td>
                                <td>None</td>
                                <td>LSEG</td>
                                <td>.......</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>19001234</td>
                                <td>Chamath Chinthana</td>
                                <td>True</td>
                                <td>Called</td>
                                <td>Virtusa</td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>19008765</td>
                                <td>Anupama Bandara</td>
                                <td>False</td>
                                <td>None</td>
                                <td>99x</td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>19008765</td>
                                <td>Anupama Bandara</td>
                                <td>False</td>
                                <td>None</td>
                                <td>99x</td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>19008765</td>
                                <td>Anupama Bandara</td>
                                <td>False</td>
                                <td>None</td>
                                <td>99x</td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>19008765</td>
                                <td>Anupama Bandara</td>
                                <td>False</td>
                                <td>None</td>
                                <td>99x</td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>19008765</td>
                                <td>Anupama Bandara</td>
                                <td>False</td>
                                <td>None</td>
                                <td>99x</td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>19008765</td>
                                <td>Anupama Bandara</td>
                                <td>False</td>
                                <td>None</td>
                                <td>99x</td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>19008765</td>
                                <td>Anupama Bandara</td>
                                <td>False</td>
                                <td>None</td>
                                <td>99x</td>
                                <td>.......</td>

                            </tr>
                        </tbody>
                    </table>


                </div>


            </div>

        );
    }

}

export default CoordinatorStudent;