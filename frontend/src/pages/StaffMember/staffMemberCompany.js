import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, FormGroup, Button } from "react-bootstrap";
import TableView from "../../component/Dashboard/Table/tableView";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import DashboardButton from "../../component/Dashboard/DashboardButton/dashboardButton";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { URL } from "../URL";
import { callServer } from "../authServer";
import { InputGroup } from "react-bootstrap";
import "../../styles/sMCompany.css";
// import SMCompanyVisitDetails from './sMCompanyVisitDetails';

const StaffMemberManageCompany = () => {
  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  const [activeRegisteredCompanyList, setActiveRegisteredCompanyList] =
    useState([]);
  const [inactiveRegisteredCompanyList, setInactiveRegisteredCompanyList] =
    useState([]);
  const [pendingCompanyList, setPendingCompanyList] = useState([]);
  const [companyVisitList, setCompanyVisitList] = useState([]);
  const [setSearchActiveCompany, searchActiveCompany] = useState("");
  const [setSearchInactiveCompany, searchInactiveCompany] = useState("");
  const [setSearchPendingCompany, searchPendingCompany] = useState("");
  const [FilteredCompanyVisitByType, FilterByCompanyVisitType] = useState("0");
  const [FilteredCompanyVisitByStatus, FilterByCompanyVisitStatus] =
    useState("0");

  useEffect(() => {
    const authRequestActiveRegistered = {
      method: "post",
      url: "staffMember/ActiveRegisteredCompany",
      data: {},
    };

    callServer(authRequestActiveRegistered)
      .then((response) => {
        // response.data.map((item) => {
        //     setRegisteredCompanyList(prevState => [...prevState, {
        //         name: item.name,
        //         telephone_no: item.company_contacts[0].telephone_no,
        //         registration_number: item.registration_number
        //     }])
        // })
        setActiveRegisteredCompanyList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
    const authRequestInactiveRegistered = {
      method: "post",
      url: "staffMember/InactiveRegisteredCompany",
      data: {},
    };

    callServer(authRequestInactiveRegistered)
      .then((response) => {
        setInactiveRegisteredCompanyList(response.data);
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
      url: "staffMember/PendingCompany",
      data: {},
    };

    callServer(authRequestPending)
      .then((response) => {
        // response.data.map((item) => {
        //     setPendingCompanyList(prevState => [...prevState, {
        //         name: item.name,
        //         telephone_no: item.company_contacts[0].telephone_no,
        //         registration_number: item.registration_number
        //     }])
        // })
        setPendingCompanyList(response.data);
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
      url: "staffMember/CompanyVisit",
      data: {},
    };
    callServer(authRequestCompanyVisit)
      .then((response) => {
        setCompanyVisitList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  }, []);

  const FilterCompanyVisitByType = (typeNumber) => {
    FilterByCompanyVisitType(typeNumber);
    const authRequestCompanyVisitFilterByType = {
      method: "post",
      url: "staffMember/CompanyVisitByType",
      data: {
        company_visit_type: parseInt(typeNumber),
      },
    };

    callServer(authRequestCompanyVisitFilterByType)
      .then((response) => {
        setCompanyVisitList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  };
  const FilterCompanyVisitByStatus = (statusNumber) => {
    FilterByCompanyVisitStatus(statusNumber);
    const authRequestCompanyVisitFilterByStatus = {
      method: "post",
      url: "staffMember/CompanyVisitByStatus",
      data: {
        company_visit_status: parseInt(statusNumber),
      },
    };

    callServer(authRequestCompanyVisitFilterByStatus)
      .then((response) => {
        setCompanyVisitList(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong!");
          setVariant("danger");
          setShow(true);
        }
      });
  };
  return (
    <div className="containcompany mt-0 ms-5" style={{ width: "90%" }}>
      <h2 className="mb-4">Manage Company</h2>

      <Tabs
        defaultActiveKey="ActiveRegisteredCompany"
        className="ManageCompanyTab"
      >
        <Tab
          className="CompanyTab mt-5"
          eventKey="ActiveRegisteredCompany"
          title="Active Registered Comapanies"
        >
          <div className="announcementcontain mx-0 px-0">
              <Row>
                <Col lg="4" >
                  <Form.Group
                    className="my-3"
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
                        placeholder="Search organization"
                        onChange={(event) => {
                          searchActiveCompany(event.target.value);
                        }}
                      />
                      </InputGroup>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                // list={[['WSO2', '0114-222642', '8342132'], ['99x', '0114-432345', '7895421'], ['LSEG', '0112-212321', '6543211'], ['Avonet-Technologies', '0112-123987', '8435232'], ['CiscoLab', '0114-222611', '8222132'], ['Dialog-Axiata', '0113-443245', '8895421'], ['IFS', '0112-542321', '7543211'], ['Virtusa', '0112-663987', '8835132']]}
                                list={registeredCompanyList}
                            >


                            </TableView> */}
              <Table style={{ maxHeight: "60vh" }}>
                <thead className='bg-primary text-white thead-primary'>
                  <tr>
                    <th>Comapny</th>
                    <th>Contact No</th>
                    <th>Company Registration Number</th>
                  </tr>
                </thead>
                <tbody>
                  {activeRegisteredCompanyList
                    .filter((activeRegisteredCompanyList) => {
                      if (setSearchActiveCompany == "") {
                        return activeRegisteredCompanyList;
                      } else if (
                        activeRegisteredCompanyList.name
                          .toLowerCase()
                          .includes(setSearchActiveCompany.toLowerCase())
                      ) {
                        return activeRegisteredCompanyList;
                      }
                    })
                    .map((activeRegisteredCompanyList) => (
                      <tr>
                        <Link
                          to={{
                            pathname: "/Staff/ActiveCompany",
                            state: activeRegisteredCompanyList,
                          }}
                        >
                          <td>{activeRegisteredCompanyList.name}</td>
                        </Link>
                        {activeRegisteredCompanyList.company_contacts.map(
                          (contactActiveCompanies) => (
                            <td>{contactActiveCompanies.telephone_no}</td>
                          )
                        )}
                        <td>
                          {activeRegisteredCompanyList.registration_number}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        <Tab
          className="CompanyTab mt-5"
          eventKey="InactiveRegisteredCompany"
          title="Inactive Registered Comapanies"
        >
         <div className="announcementcontain">
            <Row>
              <Col lg="4">
              <Form.Group
                className="mt-3 mb-3"
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
                    placeholder="Search organization"
                    onChange={(event) => {
                      searchInactiveCompany(event.target.value);
                    }}
                  />
                  </InputGroup>
                </div>
              </Form.Group>
            </Col>
        </Row>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                // list={[['WSO2', '0114-222642', '8342132'], ['99x', '0114-432345', '7895421'], ['LSEG', '0112-212321', '6543211'], ['Avonet-Technologies', '0112-123987', '8435232'], ['CiscoLab', '0114-222611', '8222132'], ['Dialog-Axiata', '0113-443245', '8895421'], ['IFS', '0112-542321', '7543211'], ['Virtusa', '0112-663987', '8835132']]}
                                list={registeredCompanyList}
                            >


                            </TableView> */}
              <Table style={{ maxHeight: "60vh" }}>
                <thead className='bg-primary text-white thead-primary'>
                  <tr>
                    <th>Comapny</th>
                    <th>Contact No</th>
                    <th>Company Registration Number</th>
                  </tr>
                </thead>
                <tbody>
                  {inactiveRegisteredCompanyList
                    .filter((inactiveRegisteredCompanyList) => {
                      if (setSearchInactiveCompany == "") {
                        return inactiveRegisteredCompanyList;
                      } else if (
                        inactiveRegisteredCompanyList.name
                          .toLowerCase()
                          .includes(setSearchInactiveCompany.toLowerCase())
                      ) {
                        return inactiveRegisteredCompanyList;
                      }
                    })
                    .map((inactiveRegisteredCompanyList) => (
                      <tr>
                        <Link
                          to={{
                            pathname: "/Staff/InactiveCompany",
                            state: inactiveRegisteredCompanyList,
                          }}
                        >
                          <td>{inactiveRegisteredCompanyList.name}</td>
                        </Link>
                        {inactiveRegisteredCompanyList.company_contacts.map(
                          (contactInactiveCompanies) => (
                            <td>{contactInactiveCompanies.telephone_no}</td>
                          )
                        )}
                        <td>
                          {inactiveRegisteredCompanyList.registration_number}
                        </td>
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
              <Col lg="4">
              <Form.Group
                className="mt-3 mb-3"
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
                    placeholder="Search organization"
                    onChange={(event) => {
                      searchPendingCompany(event.target.value);
                    }}
                  />
                  </InputGroup>
                </div>
              </Form.Group>
            </Col>
            </Row>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              {/* <TableView headers={['Company', 'Contact No', 'Company Registration Number']}
                                // list={[['Ntrylab', '0114-560642', '8453212'], ['Xempler', '0112-234322', '8433215'], ['JavaLab', '0113-234321', '8223212'], ['KriatWeb', '0112-123987', '2345321']]}
                                list={pendingCompanyList}
                            >


                            </TableView> */}
              <Table style={{ maxHeight: "60vh" }}>
              <thead className='bg-primary text-white thead-primary'>

                  <tr>
                    <th>Comapny</th>
                    <th>Contact No</th>
                    <th>Company Registration Number</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingCompanyList
                    .filter((pendingCompanyList) => {
                      if (setSearchPendingCompany == "") {
                        return pendingCompanyList;
                      } else if (
                        pendingCompanyList.name
                          .toLowerCase()
                          .includes(setSearchPendingCompany.toLowerCase())
                      ) {
                        return pendingCompanyList;
                      }
                    })
                    .map((pendingCompanyList) => (
                      <tr>
                        <Link
                          to={{
                            pathname: "/Staff/PendingCompany",
                            state: pendingCompanyList,
                          }}
                        >
                          <td>{pendingCompanyList.name}</td>
                        </Link>
                        {pendingCompanyList.company_contacts.map(
                          (contactPendingCompanies) => (
                            <td>{contactPendingCompanies.telephone_no}</td>
                          )
                        )}
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
          title="Company Visits"
        >
        <div className="announcementcontain mx-0 px-0">
            {/* <div className='d-flex flex-row justify-content-sm-between '> */}
            <Row className="mb-4">
              <Col lg="6">
                <h4 className="pt-2">Scheduled Company Visits</h4>
                {/* </div> */}
              </Col>
              <Col lg="6">
                <div className="addcompanyvisit d-flex flex-row-reverse">
                  <Nav.Link as={Link} to="/Staff/Schedule-Company-Visit">
                    {" "}
                    <Button variant="primary">+ Schedule Company Visit</Button>
                  </Nav.Link>
                </div>
              </Col>
            </Row>

            <div className="mt-2 mx-0 px-0">
              <Form className="container mx-0 px-0">
                <Row className="mb-1">
                  <Form.Group as={Col} md controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Visit Type
                    </Form.Label>
                    <Form.Select
                      sm={10}
                      defaultValue="Choose..."
                      onChange={(event) => {
                        FilterCompanyVisitByType(event.target.value);
                      }}
                    >
                      <option value="0">All</option>
                      <option value="1">Online</option>
                      <option value="2">Onsite</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} sm controlId="formGridState">
                    <Form.Label className="fw-bold" column sm={5}>
                      Visited
                    </Form.Label>
                    <Form.Select
                      sm={10}
                      defaultValue="Choose..."
                      onChange={(event) => {
                        FilterCompanyVisitByStatus(event.target.value);
                      }}
                    >
                      <option value="0">All</option>
                      <option value="1">Visited</option>
                      <option value="2">Not Visited</option>
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
            </div>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              {/* <TableView headers={['Company', 'Date', 'Time', 'Visit Type', 'Visit Status']}
                                // list={[['LSEG', '2022/07/03', '09.00a.m.', 'Onsite', 'Yes'], ['Avonet Technologies', '2022/07/06', '02.00a.m.', 'Onsite', 'Yes'], ['WSO2', '2022/07/07', '09.00a.m.', 'Online', 'Yes'], ['Dialog Axiata', '2022/07/07', '11.00a.m.', 'Onsine', 'No'], ['99X', '2022/07/07', '11.00a.m.', 'Online', 'No']]}
                                list={companyVisitList}
                            >

                            </TableView> */}
              <Table style={{ maxHeight: "60vh" }}>
              <thead className='bg-primary text-white thead-primary'>
                  <tr>
                    <th>Comapny</th>
                    <th>Organized By</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>Visit Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {companyVisitList.map((companyList) => (
                    <tr>
                      <Link
                        to={{
                          pathname: "/Staff/Visit-Details",
                          state: companyList,
                        }}
                      >
                        <td>{companyList.company.name}</td>
                      </Link>
                      <td>{companyList.pdc.first_name}</td>
                      <td>{companyList.date}</td>
                      <td>{companyList.start_time}</td>
                      <td>{companyList.company_visit_types.type}</td>
                      <td>{companyList.company_visit_status_types.status}</td>
                      <td>{companyList.company_visit_id}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        {/* <Tab className="CompanyTab mt-5" eventKey="VisitDetails" title="Visit Details">                  
                <SMCompanyVisitDetails/>                 
                </Tab> */}
      </Tabs>
    </div>
  );
};

export default StaffMemberManageCompany;
