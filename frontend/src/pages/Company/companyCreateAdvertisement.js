import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import { callServer } from '../authServer';
import jwt_decode from "jwt-decode";
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';


const CreateAdvertisement = () => {  

  const [value, onChange] = useState(new Date());
  const [title,setTitile] = useState("");
  const [category,setCategory] = useState(0);
  const [vacancies,setVacancies] = useState(0);
  const [description,setDescription] = useState("");
  const [technologies,setTechnologies] = useState("");
  const [videoUrl,setVideoUrl] = useState("");
  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("Advertiesment Added Successfully!");
  const [variant, setVariant] = useState("success");
  const [jobRoles,setJobRoles]=useState([]);
  const history = useHistory();

  useEffect(()=>{
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
  },[])

  const postAdvertiesment = (event)=>{
    event.preventDefault();
    const data ={
      title:title,
      jobCategory:parseInt(category),
      vacancies:parseInt(vacancies),
      description:description,
      technologies:technologies,
      videoUrl:videoUrl,
      companyId:jwt_decode(sessionStorage.getItem("accessToken")).id
    }

    const authRequest = {
      "method": "post",
      "url": "organization/createAdvertiesment",
      "data": data
    }

    callServer(authRequest).then((response)=>{
      history.push("/Company/Advertisement")
      showAlert(response);
    }).catch((error)=>{
      if (error.response) {
        setAlertPara("Something went wrong when adding the advertiesment!");
        setVariant("danger");
        setShow(true);
      }
    })

  }

  const showAlert = (response) => {
    setAlertPara("Advertiesment Added Successfully!");
    setVariant("success");
    setShow(true);
  }


return (
  <Container >

    <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertPara}</Alert.Heading>
    </Alert>

    <Form>
        {/* main cards */}
        <div className="containcompany mt-0 ms-5" style={{ width: "90%" }}>

        <h2 className="mb-4">Create an advertisement</h2>

          <div className='row gutters'>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              {/* <Form> */}
                <Form.Group className="mb-3" controlId="jobTitle">
                  <Form.Label>Job Title</Form.Label>
                  
                  <Form.Control type="text" required placeholder="Job Title" onChange={(event) => { setTitile(event.target.value) }} />
                </Form.Group>
              {/* </Form> */}
              {/* </Form> */}
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              {/* <Form> */}
                <Form.Label>Job Category</Form.Label>
                
                <Form.Select aria-label="Default select example" required onChange={(event) => { setCategory(event.target.value) }}>
                  <option>Select Job Category</option>
                  {jobRoles.map((jobRole)=>(
                    <option value={jobRole.id}>{jobRole.job_role}</option>
                  ))}
                </Form.Select>              
              {/* </Form> */}
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              {/* <Form> */}
                <Form.Group className="mb-3" controlId="vacancyCount">
                  <Form.Label>No. of vacancies available</Form.Label>
                  <Form.Control type="number" placeholder="Insert Number Only" required onChange={(event) => { setVacancies(event.target.value) }}/>
                </Form.Group>
            {/* </Form> */}
            </div>

          </div>


          <div className='row gutters'>
            <div className="col-12 mt-3">
            <Form.Group className="mb-3" controlId="Job Description">
              <Form.Label>Job Description</Form.Label>
              <Form.Control as="textarea" required placeholder='Describe about the job little more' rows={3} onChange={(event) => { setDescription(event.target.value) }} />
            </Form.Group>
            </div>

          </div>

          <div className='row gutters'>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 mb-3">
              {/* <Form> */}
                <Form.Label>Technologies Seeking</Form.Label>
                <Form.Control as="textarea" placeholder='Technology-1, Technology-2' rows={1} onChange={(event) => { setTechnologies(event.target.value) }} />
                {/* <Form.Select aria-label="technologiesRequired">
                  <option>Select Technologies Needed</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>               */}
              {/* </Form> */}
            </div>


          </div>


          <div className='row gutters'>
            
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
              


                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose promotional video</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

            
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">


              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose promotional image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

                <div className='row gutters'>

                  

                </div>


            </div>
          </div>

          <div className='row gutters'>
                
            <div className="col-12 mt-3 mb-5">
              <div className="card h-100">
                    <div className="card-body">

                      <Stack direction="horizontal" gap={2}>

                          <div className="ms-auto">
                              <button type="button" id="submit" name="submit" className="btn btn-secondary mr-3">Cancel</button>
                          </div>

                          <div className="vr" />

                          <div >
                              <button type="submit" id="submit" onClick={postAdvertiesment} name="submit" className="btn btn-primary ml-3">Post Advertisement</button>

                          </div>
                      </Stack>
                
                    </div>
                </div>
              </div>
              
          </div>
        </div>
        </Form>
  </Container>

  );
}

export default CreateAdvertisement;