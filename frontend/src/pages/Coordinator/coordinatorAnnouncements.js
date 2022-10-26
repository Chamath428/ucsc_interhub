import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button, InputGroup } from "react-bootstrap";
import TableView from "../../component/Dashboard/Table/tableView";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DashboardButton from "../../component/Dashboard/DashboardButton/dashboardButton";
import InfoCard from "../../component/Dashboard/InfoCard/infoCard";
import TextEditor from "../../component/TextEditor/textEditor";
import axios from "axios";
import { URL } from "../URL";
import { callServer } from "../authServer";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import "../../styles/coordinatorAnnouncements.css";
// const { SearchBar } = Search;

// const ClearButton = props => {
//     const handleClick = () => {
//         props.onSearch("");
//         props.clearAllFilter();
//     };
//     return (
//         <Button
//             variant="secondary"
//             onClick={handleClick}
//             style={{
//                 fontSize: "16px",
//                 padding: "5px",
//                 margin: "10px",
//                 height: "40px"
//             }}
//         >
//             Clear
//         </Button>
//     );
// };
const CoordinatorAnnouncements = () => {
  const [type, setType] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  const [announcementList, setAnnouncementList] = useState([]);
  // search bar creating
  const [SearchAllAnouncement, setSearchAllAnouncementList] = useState("");
  const [SearchCompanyAnouncement, setSearchCompanyAnouncementList] =
    useState("");

  const companyFilterAnnouncementList = announcementList.filter(
    (announcementList) => {
      return announcementList.type === "Company";
    }
  );

  useEffect(() => {
    const authRequest = {
      method: "post",
      url: "coordinator/Announcements",
      data: {},
    };

    callServer(authRequest)
      .then((response) => {
        response.data.map((item) => {
          setAnnouncementList((prevState) => [
            ...prevState,
            {
              title: item.title,
              type: item.announcement_types.type,
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

  const createNewAnnouncements = (event) => {
    event.preventDefault();

    const data = {
      type: parseInt(type),
      title: title,
      body: body,
      email_address: "coordinator@g.com",
    };

    const authRequest = {
      method: "post",
      url: "coordinator/createAnnouncements",
      data: data,
    };
    callServer(authRequest)
      .then((response) => {
        showAlert(response);
      })
      .catch(function (error) {
        if (error.response) {
          setAlertPara("Something went wrong when creating the announcement!");
          setVariant("danger");
          setShow(true);
        }
      });
  };
  const showAlert = (response) => {
    setAlertPara("Announcement added Successfully!");
    setVariant("success");
    setShow(true);
  };

  return (
    <div className="containAnnouncements mt-0 ms-5" style={{ width: "90%" }}>
      <h2 className="mb-4">Announcements</h2>
      <Tabs defaultActiveKey="AllAnnouncements" className="AnnouncementsTab">
        <Tab
          className="Announcements mt-5"
          eventKey="AllAnnouncements"
          title="All Announcements"
        >
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

                      <Form.Control
                        className="searchbox"
                        type="searchbox text"
                        placeholder="Search By Title"
                        onChange={(event) => {
                          setSearchAllAnouncementList(event.target.value);
                        }}
                      />
                    </InputGroup>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex flex-row-reverse mb-3"></div>
            {/* <ToolkitProvider
                            bootstrap4
                            keyField="prce"
                            data={this.products}
                            columns={this.columns}
                            search
                        > */}
            <div class="table-wrapper-scroll-y myscrollbarannouncement ">
              {/* <SearchBar
                                    // {...props.searchProps}
                                    style={{ width: "400px", height: "40px" }}
                                />
                                <ClearButton
                                    // {...props.searchProps}
                                    clearAllFilter={this.clearAllFilter}
                                /> */}

              <Table style={{ maxHeight: "60vh" }}>
                <thead className="bg-primary text-white thead-primary">
                  <tr>
                    <th>Title</th>
                    <th>Visibility</th>
                  </tr>
                </thead>
                <tbody>
                  {announcementList
                    .filter((announcementList) => {
                      if (SearchAllAnouncement == "") {
                        return announcementList;
                      } else if (
                        announcementList.title
                          .toLowerCase()
                          .includes(SearchAllAnouncement.toLowerCase())
                      ) {
                        return announcementList;
                      }
                    })
                    .map((announcementList) => (
                      <tr>
                        <td>{announcementList.title}</td>
                        <td>{announcementList.type}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            {/* </ToolkitProvider> */}
          </div>
        </Tab>

        <Tab
          className="Announcements mt-5"
          eventKey="CompanyAnnouncements"
          title="Company Announcements"
        >
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

                      <Form.Control
                        className="searchbox"
                        type="searchbox text"
                        placeholder="Search By Title"
                        onChange={(event) => {
                          setSearchCompanyAnouncementList(event.target.value);
                        }}
                      />
                    </InputGroup>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            {/*  */}

            <div class="table-wrapper-scroll-y myscrollbarannouncement ">
              <Table style={{ maxHeight: "60vh" }}>
                <thead className="bg-primary text-white thead-primary">
                  <tr>
                    <th>Title</th>
                    <th>Visibility</th>
                  </tr>
                </thead>
                <tbody>
                  {companyFilterAnnouncementList
                    .filter((companyFilterAnnouncementList) => {
                      if (SearchCompanyAnouncement == "") {
                        return companyFilterAnnouncementList;
                      } else if (
                        companyFilterAnnouncementList.title
                          .toLowerCase()
                          .includes(SearchCompanyAnouncement.toLowerCase())
                      ) {
                        return companyFilterAnnouncementList;
                      }
                    })
                    .map((companyFilterAnnouncementList) => (
                      <tr>
                        <td>{companyFilterAnnouncementList.title}</td>
                        <td>{companyFilterAnnouncementList.type}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>

        <Tab
          className="Announcements mt-5"
          eventKey="AddAnnouncement"
          title="Add Announcements"
        >
          <Row>
            <Col lg="8">
              <Alert
                variant={variant}
                show={show}
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>{alertPara}</Alert.Heading>
              </Alert>
              {/* <h3>Add an announcement</h3> */}

              <Form onSubmit={createNewAnnouncements}>
                <Row className="align-item-center mt-0">
                  <Form.Group
                    className="mb-4  col-sm-8"
                    controlId="formBasicTitle"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title " />
                  </Form.Group>

                  <Form.Group
                    className="mb-4  col-sm-4"
                    controlId="formBasicAudience"
                  >
                    <Form.Label>Audience</Form.Label>
                    <Form.Select
                      onChange={(event) => {
                        setType(event.target.value);
                      }}
                    >
                      <option value="1">All</option>
                      <option value="2">Student</option>
                      <option value="3">Company</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-1"
                    controlId="Textarea"
                    onChange={(event) => {
                      setBody(event.target.value);
                    }}
                  >
                    <Form.Label>Anouncement Body</Form.Label>

                    <div className="editor ">
                      {/* <TextEditor /> */}
                      <Form.Control
                        as="textarea"
                        placeholder="Write your announcement"
                        rows={5}
                        style={{ height: "20vh", borderStyle: "outset" }}
                      />
                    </div>
                  </Form.Group>
                </Row>

                <Row className=" mt-1 justify-content-center mb-5">
                  {/* <Form.Group className="mb-3 col-sm-10" controlId="ClearBtnArea">
                                        <DashboardButton inside={"Clear"}  ></DashboardButton>

                                    </Form.Group> */}
                  <Col className="justify-content-center">
                    <Form.Group className="mx-auto" controlId="PostBtnArea">
                      <Button variant="primary" className="px-4 mt-3" type="submit">
                        Post
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg="3" className="align-items-right ml-5">
              <Row className="mb-5 mt-0">
                <Col>
                  <InfoCard
                    title={"No of Active Students "}
                    count={"45"}
                    icon={"people-fill"}
                    cardWidth={12}
                  ></InfoCard>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col>
                  <InfoCard
                    title={"No of Active Companies "}
                    count={"26"}
                    icon={"people-fill"}
                    cardWidth={12}
                  ></InfoCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );

  //
};

export default CoordinatorAnnouncements;
