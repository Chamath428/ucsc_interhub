import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/CoordinatorStudent.css';
import '../../styles/CoordinatorCompany.css';
import ProgressBar from 'react-bootstrap/ProgressBar';





class CoordinatorCompany extends Component {

    render() {
        // const barStatus = this.props.barStatus;
        const barStatus = 60;
        return (
            <div className='contain'>

                <h3>Manage Students</h3>
                <div className='btn-container'>
                    <Button  > View </Button>
                    <Button > Pending </Button>

                </div>


                <div class="table-wrapper-scroll-y my-custom-scrollbar">

                    <table class="table">
                        <thead class="thead-light">
                            <tr class="table-primary">
                                <th scope="col">Company</th>
                                <th scope="col">Severity <i class="bi bi-arrow-down-circle"></i></th>
                                <th scope="col">Progress</th>
                                <th scope="col">Owner</th>
                                <th scope="col"><i class="bi bi-gear"></i></th>


                            </tr>
                        </thead>
                        <tbody >
                            <tr>

                                <td>Cool Project</td>
                                <td>High</td>
                                <td >
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Kianna Philips
                                    </Button>
                                </td>
                                <td>.......</td>
                            </tr>
                            <tr>

                                <td>Thing No One Wants to Do</td>
                                <td>High</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Jakob Franci
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>
                                <td>Site Revamp</td>
                                <td>High</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Rayna Dias
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>

                                <td>New Logo Design</td>
                                <td>High</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Rayna Bergson
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>

                                <td>Accessibility Updates</td>
                                <td>Medium</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Owner’s Name
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>

                                <td>Development Timeline</td>
                                <td>Medium</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Haylie Schleifer
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>

                                <td>Color Variations</td>
                                <td>Medium</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Ashlynn Culhane 
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>

                                <td>Paint the Boardroom</td>
                                <td>Low</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Ann Saris
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>

                                <td>Schedule Interviews</td>
                                <td>Low</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>

                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Haylie Dias
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                            <tr>

                                <td>One Last Thing</td>
                                <td>Low</td>
                                <td>
                                    <ProgressBar now={barStatus} label={`${barStatus}%`} />
                                </td>
                                <td>
                                    <Button>
                                        <img src='../../assets/images/profile.jpg'></img>
                                        Chance Herwitz
                                    </Button>
                                </td>
                                <td>.......</td>

                            </tr>
                        </tbody>
                    </table>


                </div>

            </div>




        );
    }

}

export default CoordinatorCompany;