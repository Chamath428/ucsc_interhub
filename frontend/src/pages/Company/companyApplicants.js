import React, { Component } from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button } from "react-bootstrap";
import TableView from "../../component/Dashboard/Table/tableView";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import DashboardButton from "../../component/Dashboard/DashboardButton/dashboardButton";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { callServer } from "../authServer";
import { InputGroup } from "react-bootstrap";
import "../../styles/companyApplicant.css";

const CompanyApplicants = () => {
  const [applicantList, setApplicantList] = useState([]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [wishlistApplicants, setWishListApplicants] = useState([]);

  useEffect(() => {
    const data = {
      companyId: jwtDecode(sessionStorage.getItem("accessToken")).id,
    };
    const authRequest = {
      method: "post",
      url: "organization/getAllApplicants",
      data: data,
    };

    callServer(authRequest)
      .then((response) => {
        setApplicantList(response.data[0]);
        setWishListApplicants(response.data[1]);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const handleWishList = (index_number, advertisement_id, is_wish_list) => {
    const data = {
      index_number: index_number,
      advertisement_id: advertisement_id,
      is_wish_list: is_wish_list,
    };
    const authRequest = {
      method: "post",
      url: "organization/handleWishlist",
      data: data,
    };
    callServer(authRequest)
      .then((response) => {
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="containcompany mt-0 ms-5" style={{ width: "90%" }}>
      <h2 className="mb-4">Applicants</h2>
      <Tabs defaultActiveKey="AllApplicants" className="ManageApplicantTab">
        <Tab
          className="ApplicantTab"
          eventKey="AllApplicants"
          title="All Applicants"
        >
         
            <Container className="mt-5 mx-0 px-0">
              <Form className="container mx-0 px-0">
                <Row className="mb-1 mr-3 mb-5">
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Course
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>CS and IS</option>
                      <option>CS</option>
                      <option>IS</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Job Role
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>All</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Interview Called
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>All</option>
                      <option>Called</option>
                      <option>Not Called</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </Container>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <Table style={{ maxHeight: "60vh" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Applied Advertiesment</th>
                    <th>Wishlist</th>
                  </tr>
                </thead>
                <tbody>
                  {applicantList.map((applicant) => (
                    <tr>
                    
                        
                        
                        

                        <Link
                        to={{
                          pathname: "/Company/ViewApplicant",
                          state: applicant,
                        }}
                      >
                        <td>{applicant.name}</td>
                      </Link>

                      
                      <td>{applicant.title}</td>
                      <td>
                        {applicant.is_wish_list == 0 ? (
                          <Button
                            type="button"
                            onClick={() => {
                              handleWishList(
                                applicant.index_number,
                                applicant.advertisement_id,
                                1
                              );
                            }}
                            variant="primary"
                          >
                            <i class="bi bi-bookmark-plus mr-2"></i>Add to WishList
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              handleWishList(
                                applicant.index_number,
                                applicant.advertisement_id,
                                0
                              );
                            }}
                            variant="danger"
                          >
                            <i class="bi bi-bookmark-dash mr-2"></i>Remove
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
        </Tab>
        <Tab className="ApplicantTab" eventKey="WishList" title="Wish List">
           
            <Container className="mt-5 mx-0 px-0">
          <Form className="container mx-0 px-0">
            <Row className="mb-1 mr-3 mb-5">
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Course
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>CS and IS</option>
                      <option>CS</option>
                      <option>IS</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Job Role
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>All</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Interview Called
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>All</option>
                      <option>Called</option>
                      <option>Not Called</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </Container>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <Table style={{ maxHeight: "60vh" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Applied Advertiesment</th>
                    <th>Wishlist</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistApplicants.map((wisApplicant) => (
                    <tr>
                      <td>

                      <Link
                        to={{
                          pathname: "/Company/ViewApplicant",
                          state: wisApplicant.index_number,
                        }}
                      >
                        <td>{wisApplicant.name}</td>
                      </Link>

                      </td>
                      <td>{wisApplicant.title}</td>
                      <td>
                        <Button
                          type="button"
                          onClick={() => {
                            handleWishList(
                              wisApplicant.index_number,
                              wisApplicant.advertisement_id,
                              0
                            );
                          }}
                          variant="danger"
                        >
                          Remove from WishList
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
        </Tab>
        <Tab
          className="ApplicantTab"
          eventKey="Selected"
          title="Selected Interns"
        >
           
           
           <Container className="mt-5 mx-0 px-0">
          <Form className="container mx-0 px-0">
            <Row className="mb-1 mr-3 mb-5">
                    <Form.Group as={Col} md controlId="formGridState">
                      <Form.Label className="fw-bold" column sm={5}>
                        Job Role
                      </Form.Label>
                      <Form.Select sm={10} defaultValue="Choose...">
                        <option>All</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicSearchOrganization">
                    <Form.Label className="fw-bold" column sm={5}>
                        Search
                      </Form.Label>
                      <div className="d-flex flex-row align-item-center justify-content-center text-center align-bottom">
                        <InputGroup>
                        <InputGroup.Text
                            id="basic-addon1"
                            className="bg-primary text-white"
                        >
                    <i class="bi bi-search"></i>
                      </InputGroup.Text>
                        <Form.Control
                          className="searchbox"
                          type="searchbox text"
                          placeholder="Search Intern"
                        />
                        </InputGroup>
                      </div>
                    </Form.Group>
                
                </Row>
                </Form>
              </Container>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <TableView
                headers={["Name", "Job Role", "Supervisor"]}
                list={[
                  [
                    "Shanika Jayathunga",
                    "Software Engineering",
                    "W.D.Warnaweera",
                  ],
                  ["Jayani Kulasekara", "UI/UX Designer", "S.E.Nissanka"],
                  ["Sameera Kumara", "Project Manager", "A.Abeweera"],
                  ["Binura Jathilake", "Business Analyst", "W.D.Warnaweera"],
                ]}
              ></TableView>
            </div>
        </Tab>
      </Tabs>
    </div>
  );
};
//

export default CompanyApplicants;
