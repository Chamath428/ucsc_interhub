import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, FormGroup, Button } from "react-bootstrap";
import TableView from "../../component/Dashboard/Table/tableView";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DashboardButton from "../../component/Dashboard/DashboardButton/dashboardButton";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { URL } from "../URL";
import { callServer } from "../authServer";
import Table from "react-bootstrap/Table";
import { InputGroup } from "react-bootstrap";
import "../../styles/sMCompany.css";

const CoordinatorManageCompany = () => {
  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  const [registeredCompanyList, setRegisteredCompanyList] = useState([]);
  const [pendingCompanyList, setPendingCompanyList] = useState([]);
  const [companyVisitList, setCompanyVisitList] = useState([]);
  const [searchRgisteredCompany, setSearchRgisteredCompany] = useState("");
  const [searchPendingCompany, setSearchPendingCompany] = useState("");

  companyVisitList.map((item, index) => {
    if (item.visited_type == 1) {
      item.visited_type = "Yes";
    } else {
      item.visited_type = "No";
    }
  });
  useEffect(() => {
    const authRequestRegistered = {
      method: "post",
      url: "coordinator/RegisteredCompany",
      data: {},
    };

    callServer(authRequestRegistered)
      .then((response) => {
        response.data.map((item) => {
          setRegisteredCompanyList((prevState) => [
            ...prevState,
            {
              name: item.name,
              telephone_no: item.company_contacts[0].telephone_no,
              registration_number: item.registration_number,
            },
          ]);
        });
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });

    const authRequestPending = {
      method: "post",
      url: "coordinator/PendingCompany",
      data: {},
    };

    callServer(authRequestPending)
      .then((response) => {
        response.data.map((item) => {
          setPendingCompanyList((prevState) => [
            ...prevState,
            {
              name: item.name,
              telephone_no: item.company_contacts[0].telephone_no,
              registration_number: item.registration_number,
            },
          ]);
        });
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });

    const authRequestCompanyVisit = {
      method: "post",
      url: "coordinator/CompanyVisit",
      data: {},
    };
    callServer(authRequestCompanyVisit)
      .then((response) => {
        response.data.map((item) => {
          setCompanyVisitList((prevState) => [
            ...prevState,
            {
              name: item.company.name,
              date: item.date,
              start_time: item.start_time,
              type: item.company_visit_types.type,
              visited_type: item.visited_type,
            },
          ]);
        });
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  }, []);

  // const pendingCompany = (event) => {
  //     event.preventDefault();
  //     axios.post(`${URL}/coordinator/PendingCompany`, {

  //     }).then((response) => {
  //         response.data.map((item) => {
  //             setPendingCompanyList(prevState => [...prevState, {
  //                 name: item.name,
  //                 telephone_no: item.company_contacts[0].telephone_no,
  //                 registration_number: item.registration_number
  //             }])
  //         })

  //     }).catch(function (error) {
  //         if (error.response) {
  //             setAlertPara("Something went wrong!");
  //             setVariant("danger");
  //             setShow(true);
  //         }
  //     })
  // }

  return (
    <div className="containcompany mt-0 ms-5" style={{ width: "90%" }}>
      <h2 className="mb-4">Manage Companies</h2>
      <Tabs defaultActiveKey="RegisteredCompany" className="ManageCompanyTab">
        <Tab
          className="CompanyTab mt-5"
          eventKey="RegisteredCompany"
          title="Registered Comapanies"
        >
          <div className="contain1">
              {/* <h3>Registered Companies</h3> */}
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
                  <Form.Control
                    className="searchbox"
                    type="searchbox text"
                    placeholder="Search Company"
                    onChange={(event) => {
                      setSearchRgisteredCompany(event.target.value);
                    }}
                  />
                  </InputGroup>
                </div>
              </Form.Group>
              </Col>
              </Row>

            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                list={[['WSO2', '0114-222642', '8342132'], ['99x', '0114-432345', '7895421'], ['LSEG', '0112-212321', '6543211'], ['Avonet-Technologies', '0112-123987', '8435232'], ['CiscoLab', '0114-222611', '8222132'], ['Dialog-Axiata', '0113-443245', '8895421'], ['IFS', '0112-542321', '7543211'], ['Virtusa', '0112-663987', '8835132']]}
                                list={registeredCompanyList}
                            >
                            </TableView> */}

              <Table style={{ maxHeight: "60vh" }}>
                <thead className="bg-primary text-white rounded">
                  <tr>
                    <th>Company</th>
                    <th>Contact No</th>
                    <th>Company Registration Number</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredCompanyList
                    .filter((registeredCompanyList) => {
                      if (searchRgisteredCompany == "") {
                        return registeredCompanyList;
                      } else if (
                        registeredCompanyList.name
                          .toLowerCase()
                          .includes(searchRgisteredCompany.toLowerCase())
                      ) {
                        return registeredCompanyList;
                      }
                    })
                    .map((registeredCompanyList) => (
                      <tr>
                        <td>{registeredCompanyList.name}</td>
                        <td>{registeredCompanyList.telephone_no}</td>
                        <td>{registeredCompanyList.registration_number}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        <Tab
          className="CompanyTab mt-5"
          eventKey="Pending Companies"
          title="Pending Companies"
        >
          <div className="announcementcontain">
          <Row>
             
              <Col lg={4}>
                <Form.Group controlId="formBasicSearchOrganization">
                  <div className="d-flex flex-row align-item-center justify-content-center text-center">
                    <InputGroup className="mb-3">
                      <InputGroup.Text
                        id="basic-addon1"
                        className="bg-primary text-white"
                      >
                        <i class="bi bi-search"></i>
                      </InputGroup.Text>
                    <Form.Control
                      className="searchbox"
                      type="searchbox text"
                      placeholder="Search organization"
                      onChange={(event) => {
                        setSearchPendingCompany(event.target.value);
                      }}
                    />
                    </InputGroup>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Link to="/Coordinator/CompanyPending">
              <Button variant='danger'>
                Pending Company Page (Link this to company name in table)
              </Button>
            </Link>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                list={[['Ntrylab', '0114-560642', '8453212'], ['Xempler', '0112-234322', '8433215'], ['JavaLab', '0113-234321', '8223212'], ['KriatWeb', '0112-123987', '2345321']]}
                                list={pendingCompanyList}
                            >
                            </TableView> */}

              <Table style={{ maxHeight: "60vh" }}>
                <thead className="bg-primary text-white rounded">
                  {" "}
                  <tr>
                    <th>Company</th>
                    <th>Contact No</th>
                    <th>Company Registration Number</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingCompanyList
                    .filter((pendingCompanyList) => {
                      if (searchPendingCompany == "") {
                        return pendingCompanyList;
                      } else if (
                        pendingCompanyList.name
                          .toLowerCase()
                          .includes(searchPendingCompany.toLowerCase())
                      ) {
                        return pendingCompanyList;
                      }
                    })
                    .map((pendingCompanyList) => (
                      <tr>
                        <td>{pendingCompanyList.name}</td>
                        <td>{pendingCompanyList.telephone_no}</td>
                        <td>{pendingCompanyList.registration_number}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        <Tab
          className="CompanyTab mt-5"
          eventKey="CompanyVisit"
          title="Company Visit"
        >
          <div className="">
            {/* <div className='d-flex flex-row justify-content-sm-between '> */}

            <Row className="justify-content-between mb-5">
              <Col lg={8}>
                <h4 className="mt-2">Scheduled Company Visits</h4>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/Coordinator/Schedule-Company-Visit">
                  <Button className="ml-5">
                    <i class="bi bi-plus-circle mr-2"></i>Schedule Company
                    Visist
                  </Button>
                </Nav.Link>
              </Col>
            </Row>
            {/* </div> */}

            <Container className="mt-2">
              <Form className="container">
                <Row className="mb-1">
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Visit Type
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>All</option>
                      <option>Online</option>
                      <option>Onsite</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} sm controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Visited
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option>All</option>
                      <option>Visited</option>
                      <option>Not Visited</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} sm controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Sort By
                    </Form.Label>
                    <Form.Select sm={10} defaultValue="Choose...">
                      <option value="1">Date</option>
                      <option value="2">Company</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form>
            </Container>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <TableView
                headers={["Company", "Date", "Time", "Visit Type", "Visited"]}
                // list={[['LSEG', '2022/07/03', '09.00a.m.', 'Onsite', 'Yes'], ['Avonet Technologies', '2022/07/06', '02.00a.m.', 'Onsite', 'Yes'], ['WSO2', '2022/07/07', '09.00a.m.', 'Online', 'Yes'], ['Dialog Axiata', '2022/07/07', '11.00a.m.', 'Onsine', 'No'], ['99X', '2022/07/07', '11.00a.m.', 'Online', 'No']]}
                list={companyVisitList}
              ></TableView>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CoordinatorManageCompany;
