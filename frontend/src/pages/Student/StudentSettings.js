import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import CardListItem from '../../component/Cards/CardList';
import FilesUploadComponent from '../../component/FileUpload/fileUpload';

import ProfilePic from '../../component/Media/ProfilePicture/profilePic';
import BodyCard from '../../component/Cards/bodyCard';
import PrimaryBtn from '../../component/Buttons/primaryBtn';
import InfoBtn from '../../component/Buttons/outlineBtn';
import YoutubeEmbed from '../../component/YoutubeEmbed/youtubeEmbed';
import { useEffect } from 'react';
import { useState } from 'react';
import { callServer } from '../authServer';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const StudentEditProfile = () =>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [about_me, setAboutme] = useState("");
    const [github, setGithub] = useState("");
    const [facebook, setFacebook] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [show, setShow] = useState(false);
    const [alertPara, setAlertPara] = useState("Student Added Successfully!");
    const [variant, setVariant] = useState("success");

    const [profilePic,setProfilePic] = useState();
    const [profileVideo,setProfileVideo] = useState();

    const [editProfileView, setEditProfileView] = useState([]);
    const history = useHistory();

    const [jobRoles,setJobRoles]=useState([]);
    const [category1,setCategory1] = useState(0);
    const [category2,setCategory2] = useState(0);
    const [category3,setCategory3] = useState(0);
    const [category4,setCategory4] = useState(0);
    const [category5,setCategory5] = useState(0);


    useEffect(() => {

        const data={};
        const authRequest = {
          "method": "post",
          "url": "organization/getJobRoles",
          "data": data
        }
    
        callServer(authRequest).then((response)=>{
          console.log(response.data);
          setJobRoles(response.data);
        }).catch((error)=>{
          if (error.response) {
            setAlertPara("Something went wrong when getting the job roles!");
            setVariant("danger");
            setShow(true);
          }
        })

        const authAciveRequest = {
          "method": "post",
          "url": "student/editProfileView/"+ parseInt(jwt_decode(sessionStorage.getItem("accessToken")).id),
          "data": {}
        }
    
        callServer(authAciveRequest).then((response) => {
            // setEditProfileView(response.data);
            setName(response.data.name);
            setPassword(response.data.password);
            setEmail(response.data.email);
            setAboutme(response.data.about_me);
            setGithub(response.data.github);
            setFacebook(response.data.facebook);
            setLinkedin(response.data.linkedin);
            setEditProfileView(response.data.profile_picture);
            setProfileVideo(response.data.intro_video);
            setCategory1(response.data.category1);
            setCategory2(response.data.category2);
            setCategory3(response.data.category3);
            setCategory4(response.data.category4);
            setCategory5(response.data.category5);
        
    
        }).catch(function (error) {
          if (error.response) {
            setAlertPara("Something went wrong when viewing details!");
            setVariant("danger");
            setShow(true);
            
          }
        })
      }, []);
  
    const updateStudentProfile = (event) => {
      event.preventDefault();
      const data = new FormData();
     
     
     
        data.append("index_number", parseInt(jwt_decode(sessionStorage.getItem("accessToken")).id))
        data.append("name", name)
        data.append("password", password,)
        data.append("email",  email,)
        data.append("about_me",  about_me,)
        data.append("github",  github,)
        data.append("facebook",  facebook,)
        data.append("linkedin",  linkedin)
        data.append("profilePic",  profilePic)
        data.append("profileVideo",  profileVideo)
        data.append("category1", category1)
        data.append("category2", category2)
        data.append("category3", category3)
        data.append("category4", category4)
        data.append("category5", category5)
     


      const authRequest = {
        "method": "post",
        "url": "student/editProfile",
        "data": data,
        headers:{ 'Content-Type': 'multipart/form-data'}
      }
      callServer(authRequest).then((response) => {
        
        showAlert(response)
        history.push("/Student/Edit-Profile");
    
    }).catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong when editing profile!");
          setVariant("danger");
          setShow(true);
        }
      })
    }
  
    const showAlert = (response) => {
      setAlertPara("Profile Update Successfully!");
      setVariant("success");
      setShow(true);
    }

    return(

        <div className='container pt-5'>
            <div className="container">
            <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>{alertPara}</Alert.Heading>
            </Alert>
                <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="account-settings">
                            <div className="user-profile">
                                <div className="user-avatar">
                                    <div className='align-self-center'>

                                        <ProfilePic url= {"http://localhost:5000/"+editProfileView}/>

                                        <Form.Group controlId="profilePicture" className="mb-3">
                                            <Form.Label>Upload Profile Picture</Form.Label>
                                            <Form.Control type="file" accept="image/*" onChange={(event)=> {
                                                console.log(event.target.files) 
                                                setProfilePic(event.target.files[0])
                                                }} />
                                        </Form.Group>
{/* 
                                        <Form.Group controlId="studentCV" className="mb-3">
                                            <Form.Label>Upload your CV</Form.Label>
                                            <FilesUploadComponent type="file" accept=".pdf"/>
                                        </Form.Group> */}

                                        <Form.Group controlId="profileVideo" className="mb-3">
                                            <Form.Label>Upload your intro video</Form.Label>
                                            <Form.Control type="file" accept="video/*" onChange={(event)=> {
                                                console.log(event.target.files)
                                                setProfileVideo(event.target.files[0])
                                                }} />
                                        </Form.Group>
                                    
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h4 className="mb-2 text-primary">Personal Details</h4>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="fullName">Full Name</label>
                                    <Form.Control type="text" placeholder="name@example.com" value ={name} onChange={(event) => { setName(event.target.value) }} />
                                    {/* <input type="text" className="form-control" id="fullName" placeholder="Enter full name"> */}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="eMail">Email</label>
                                    <Form.Control type="email" placeholder="name@example.com" value ={email} onChange={(event) => { setEmail(event.target.value) }}/>
                                    {/* <input type="email" className="form-control" id="eMail" placeholder="Enter email ID"> */}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                                <div className="form-group">
                                    <label for="phone">InternHub Password</label>
                                    <Form.Control type="password" placeholder='' value={password} onChange={(event) => { setPassword(event.target.value) }}/>
                                    {/* <input type="text" className="form-control" id="phone" placeholder="Enter phone number"> */}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                                <div className="form-group">
                                    <label for="website">Academic Qualifications</label>
                                    <Form.Control type="text" placeholder="Role 1, Role 2,...Role 5" />

                                    {/* <input type="url" className="form-control" id="website" placeholder="Website url"> */}
                                </div>
                            </div>

                        </div>
                        <div className="row gutters mt-2">

                            <div className="about">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Add your About Me</Form.Label>
                                    <Form.Control as="textarea" rows={3} value = {about_me} onChange={(event) => { setAboutme(event.target.value) }}/>
                                </Form.Group>                            
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h4 className="mt-3 mb-2 text-primary">Add your portfolio links</h4>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">

                               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    {/* <Form.Label>Add your Facebook link</Form.Label> */}
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="bi bi-facebook"></i></div>
                                        </div>
                                        <Form.Control type="text" placeholder="facebook link" style={{ borderRadius: 5 }} value = {facebook} onChange={(event) => { setFacebook(event.target.value) }}/>
                                    </div>
                                </Form.Group>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    {/* <Form.Label>Add your LinkedIn link</Form.Label> */}
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="bi bi-linkedin"></i></div>
                                        </div>
                                        <Form.Control type="text" placeholder="LinkedIn link" style={{ borderRadius:5 }} value = {linkedin} onChange={(event) => { setLinkedin(event.target.value) }}/>
                                    </div>
                                </Form.Group>

                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">


                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    {/* <Form.Label>Add your Github link</Form.Label> */}
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="bi bi-github"></i></div>
                                        </div>
                                        <Form.Control type="text" placeholder="Github link" style={{ borderRadius:5 }} value = {github} onChange={(event) => { setGithub(event.target.value) }}/>
                                    </div>
                                </Form.Group>

                            </div>
  
                            <div className="col-12">
                                <h4 className="mt-3 mb-2 text-primary">Add your portfolio links</h4>
                            </div>
                                
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-1 mb-3">

                                <div className="form-group">
                                    <label for="sTate">Job Role 1 (Priority No. 1)</label>
                                    <Form.Select aria-label="Default select example" required onChange={(event) => { setCategory1(event.target.value) }}>
                                        <option>Select Job Category</option>
                                        {jobRoles.map((jobRole)=>(
                                        <option value={jobRole.id}>{jobRole.job_role}</option>
                                    ))}
                                    </Form.Select>      
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-1">

                                <div className="form-group">
                                    <label for="sTate">Job Role 2(Priority No. 2)</label>
                                    <Form.Select aria-label="Default select example" required onChange={(event) => { setCategory2(event.target.value) }}>
                                        <option>Select Job Category</option>
                                        {jobRoles.map((jobRole)=>(
                                        <option value={jobRole.id}>{jobRole.job_role}</option>
                                    ))}
                                    </Form.Select> 
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">

                                <div className="form-group">
                                    <label for="sTate">Job Role 3 (Priority No. 3)</label>
                                    <Form.Select aria-label="Default select example" required onChange={(event) => { setCategory3(event.target.value) }}>
                                        <option>Select Job Category</option>
                                        {jobRoles.map((jobRole)=>(
                                        <option value={jobRole.id}>{jobRole.job_role}</option>
                                ))}
                                </Form.Select> 
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">

                                <div className="form-group">
                                    <label for="sTate">Job Role 4 (Priority No. 4)</label>
                                    <Form.Select aria-label="Default select example" required onChange={(event) => { setCategory4(event.target.value) }}>
                                        <option>Select Job Category</option>
                                        {jobRoles.map((jobRole)=>(
                                        <option value={jobRole.id}>{jobRole.job_role}</option>
                                ))}
                             </Form.Select> 
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mb-3">

                                <div className="form-group">
                                    <label for="sTate">Job Role 5 (Priority No. 5)</label>
                                    <Form.Select aria-label="Default select example" required onChange={(event) => { setCategory5(event.target.value) }}>
                                        <option>Select Job Category</option>
                                        {jobRoles.map((jobRole)=>(
                                        <option value={jobRole.id}>{jobRole.job_role}</option>
                                ))}
                                     </Form.Select> 
                                </div>
                            </div>

                          
                           
                        </div>
                        
                    </div>
                </div>
                </div>
                
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 mb-3">

                    <div className="card h-100 ">
                        <div className="card-body">

                        <Stack direction="horizontal" gap={2}>

                            <div className="ms-auto">
                                <button type="button" id="submit" name="submit" className="btn btn-secondary mr-3">Cancel</button>
                            </div>

                            <div className="vr" />

                            <div className="">
                                <button type="button" id="submit" name="submit" className="btn btn-primary ml-3" onClick = {updateStudentProfile}>Update</button>
                            </div>
                        </Stack>

                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>

        </div>
    );
}

export default StudentEditProfile;


