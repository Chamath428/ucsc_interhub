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






class CoordinatorCompanyPending extends Component {

    render() {
        // const barStatus = this.props.barStatus;
        const barStatus = 60;
        return (
            // <div className='contain'>

            //     <h3>Manage Companies</h3>
            //     <div className='btn-container'>
            //         <Button > View </Button>
            //         <Button > Pending </Button>

            //     </div>


            //     <div class="table-wrapper-scroll-y my-custom-scrollbar">

            //         <table class="table">
            //             <thead class="thead-light">
            //                 <tr class="table-primary">

            //                     <th scope="col"><i class="bi bi-file-minus"></i></th>
            //                     <th scope="col">Title</th>
            //                     <th scope="col">Severity <i class="bi bi-arrow-down-circle"></i></th>
            //                     <th scope="col">Progress</th>
            //                     <th scope="col">Owner</th>
            //                     <th scope="col"><i class="bi bi-gear"></i></th>


            //                 </tr>
            //             </thead>
            //             <tbody >
            //                 <tr>

            //                     <td>Cool Project</td>
            //                     <td>High</td>
            //                     <td >
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Kianna Philips
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>Thing No One Wants to Do</td>
            //                     <td>High</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Jakob Franci
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>
            //                     <td>.......</td>


            //                 </tr>
            //                 <tr>
            //                     <td>Site Revamp</td>
            //                     <td>High</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Rayna Dias
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>New Logo Design</td>
            //                     <td>High</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Rayna Bergson
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>Accessibility Updates</td>
            //                     <td>Medium</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Owner’s Name
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>Development Timeline</td>
            //                     <td>Medium</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Haylie Schleifer
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>Color Variations</td>
            //                     <td>Medium</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Ashlynn Culhane
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>Paint the Boardroom</td>
            //                     <td>Low</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Ann Saris
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>Schedule Interviews</td>
            //                     <td>Low</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>

            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Haylie Dias
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //                 <tr>

            //                     <td>One Last Thing</td>
            //                     <td>Low</td>
            //                     <td>
            //                         <ProgressBar now={barStatus} label={`${barStatus}%`} />
            //                     </td>
            //                     <td>
            //                         <Button>
            //                             <img src={img} alt={this.props.barStatus} className='img-fluid shadow-4' ></img>

            //                             Chance Herwitz
            //                         </Button>
            //                     </td>
            //                     <td>.......</td>

            //                 </tr>
            //             </tbody>
            //         </table>


            //     </div>

            // </div>


            <div className='contain'>
                <h3>Manage Companies</h3>

                <div className='d-flex flex-row justify-content-sm-between'>

                    <div className='btn-container'>
                        <Button  > Registered </Button>
                        <Button > Pending </Button>

                    </div>

                    <Form.Group className="mb-3" controlId="formBasicSearchOrganization">
                        <div className="d-flex flex-row align-item-center justify-content-center text-center" >
                            <div className='searchico text-center p-2'><i className="bi bi-search"></i></div>
                            <Form.Control type="searchbox text" placeholder="Search organization" /></div>
                    </Form.Group>
                </div>

                <div class="table-wrapper-scroll-y table-scrollba ">
                    <TableView headers={['Company Name', 'Contact', 'Company Registration Number']}
                        list={[['LSEG', '011-11111111', 'R12C1'], ['Avonet Technologies', '011-11111122', 'R12C4'], ['WSO2', '011-1111133', 'R12C1'], ['Dialog Axiata', '071-1133456', 'R12C16'], ['99X', '011-3243567', 'R12C8'], ['LSEG', '099-1255332', 'R12C9']]}>

                    </TableView>

                </div>


            </div>


        );
    }


}


export default CoordinatorCompanyPending;