import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, FormLabel } from "react-bootstrap";
import AdvertisementCard from "../../component/Cards/AdvertismentCard/advertisementCard";
import Wso2Logo from "../../assets/images/wso2Logo.jpg";
import LsegLogo from "../../assets/images/lsegLogo.png";
import N99XLogo from "../../assets/images/99xLogo.png";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { callServer } from "../authServer";
import { InputGroup } from "react-bootstrap";
import "../../styles/sMAdvertisments.css";

const StudentAdvertisements = () => {
  const [adds, setAdds] = useState([]);

  // const [jobRoles,setJobRoles]=useState([]);

  // const [category,setCategory] = useState(0);


  // const[selectedCourse,setselectedCourse] = useState("0");
  // const[selectedStatus,setselectedStatus] = useState("0");
  // const [allStudentsList, setAllStudentsList] = useState([]);
  // const [searchSelectedStudent,setSearchSelectedStudent] = useState("");

  // const [show, setShow] = useState(false);
  // const [alertPara, setAlertPara] = useState("Student Added Successfully!");
  // const [variant, setVariant] = useState("success");

  useEffect(() => {

    // const dataJobRoles={};
    // const authRequestJobRoles = {
    //   "method": "post",
    //   "url": "organization/getJobRoles",
    //   "data": dataJobRoles
    // }

    // callServer(authRequestJobRoles).then((response)=>{
    //   console.log(response.data);
    //   setJobRoles(response.data);
    // }).catch((error)=>{
    //   if (error.response) {
    //     setAlertPara("Something went wrong when getting the job roles!");
    //     setVariant("danger");
    //     setShow(true);
    //   }
    // })


    const data = {
      // companyId:jwtDecode(sessionStorage.getItem("accessToken")).id
    };
    const authRequest = {
      method: "post",
      url: "student/getAllAdvertiesmentS",
      data: data,
    };

    callServer(authRequest)
      .then((response) => {
        console.log(response);
        setAdds(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="contain mt-5 ms-5" style={{ width: "90%" }}>
      <div className="container">
        <h2 className="mb-5">Advertisements</h2>
        <div className="announcementcontain">
          <Row>
            <Col lg="4">
              <Form.Group
                className="mb-1"
                controlId="formBasicSearchOrganization"
              >
                <div className="d-flex flex-row align-item-center justify-content-center text-center">
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      id="basic-addon1"
                      className="bg-primary text-white"
                    >
                      <i class="bi bi-search"></i>
                    </InputGroup.Text>
                    <Form.Control className="searchbox" type="searchbox text" placeholder="Search by Technologies"/>
                  </InputGroup>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </div>
        <Container className="mt-2 mx-0 px-0">
              <Form className="container mx-0 px-0 mb-4 mt-3 mr-4">
                <Row className="mb-1 mr-3">
              <Form.Group as={Col} sm controlId="formGridState">
                <Form.Label className="fw-bold" column sm={5}>
                  Company
                </Form.Label>
                <Form.Select sm={10} defaultValue="Choose...">
                  <option>All</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} sm controlId="formGridState">
                <Form.Label className="fw-bold" column sm={5}>
                  Job Role
                </Form.Label>
                <Form.Select aria-label="Default select example" >
                  {/* <option>Select Job Category</option>
                  {jobRoles.map((jobRole)=>(
                    <option value={jobRole.id}>{jobRole.job_role}</option>
                  ))} */}
                </Form.Select>         
              </Form.Group>
              {/* <Form.Group as={Col} sm controlId="formGridState">
                <Form.Label className="fw-bold" column sm={5}>
                  Technologies
                </Form.Label>
                <Form.Select sm={10} defaultValue="Choose...">
                  <option value="1">All</option>
                  <option value="2">...</option>
                </Form.Select>
              </Form.Group> */}
            </Row>
          </Form>
        </Container>

        <div className="Advertisements ">
          <Row as={Col} sm>
            {adds.length == 0 ? (
              <p>You have no Advertisements to show.</p>
            ) : (
              adds.map((add) => (
                <AdvertisementCard
                  title={add.title}
                  jobrole={add.job_role}
                  company={add.name}
                  //  status={add.type}
                  logo={LsegLogo}
                  actor="Student"
                  data={add.advertisement_id}
                ></AdvertisementCard>
              ))
            )}
          </Row>
        </div>
      </div>
    </div>
  );
  //
};

export default StudentAdvertisements;
