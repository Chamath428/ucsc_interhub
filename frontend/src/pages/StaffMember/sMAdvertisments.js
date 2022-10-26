import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, FormLabel } from "react-bootstrap";
import AdvertisementCard from "../../component/Cards/AdvertismentCard/advertisementCard";
import Wso2Logo from "../../assets/images/wso2Logo.jpg";
import LsegLogo from "../../assets/images/lsegLogo.png";
import N99XLogo from "../../assets/images/99xLogo.png";
import { InputGroup } from "react-bootstrap";
import "../../styles/sMAdvertisments.css";

class StaffMemberAdvertisements extends Component {
  render() {
    return (
      <div className="contain mt-0 ms-5" style={{ width: "90%" }}>
        <div className="d-flex flex-row justify-content-sm-between">
          <h2 className="mb-4">Manage Students</h2>
        </div>
        <Row>
          <Col lg="4">
            <Form.Group
              className="mb-3"
              controlId="formBasicSearchOrganization"
            >
              <div className="d-flex flex-row align-item-center justify-content-center text-center">
                <InputGroup className="mb-1">
                  <InputGroup.Text
                    id="basic-addon1"
                    className="bg-primary text-white"
                  >
                    <i class="bi bi-search"></i>
                  </InputGroup.Text>

                  <Form.Control
                    className="searchbox"
                    type="searchbox text"
                    placeholder="Search Advertisement"
                  />
                </InputGroup>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Container className="mt-2 mx-0 px-0">
          <Form className="container mx-0 px-0">
            <Row className="mb-1 mr-3 mb-5">
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
                <Form.Select sm={10} defaultValue="Choose...">
                  <option value="1">All</option>
                  <option value="2">...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} sm controlId="formGridState">
                <Form.Label className="fw-bold" column sm={5}>
                  Technologies
                </Form.Label>
                <Form.Select sm={10} defaultValue="Choose...">
                  <option value="1">All</option>
                  <option value="2">...</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
        </Container>

        <div className="Advertisements ">
          <Row as={Col} sm>
            <AdvertisementCard
              jobrole="Software Engineer"
              title="LSEG"
              logo={
                "https://media-exp1.licdn.com/dms/image/C4D0BAQGdXLeDAzp0wQ/company-logo_200_200/0/1663662838677?e=1674086400&v=beta&t=JjYvke6yO54by4vRIwHvhRcP3t5forhBEkwaJT_h0-Y"
              }
              actor="Staff"
            ></AdvertisementCard>
            <AdvertisementCard
              jobrole="Business Analyst"
              title="WS02"
              logo={
                "https://media-exp1.licdn.com/dms/image/C4D0BAQFchI_Xw-FFhQ/company-logo_200_200/0/1597299923263?e=1674086400&v=beta&t=oMQPkPhslR6mS12UDEXJPOT4stztPeVd0ZcfUqWh0f4"
              }
              actor="Staff"
            ></AdvertisementCard>
            <AdvertisementCard
              jobrole="Quality Assurance"
              title="Rootcode Labs"
              logo={
                "https://media-exp1.licdn.com/dms/image/C560BAQGHuvWnG93BTA/company-logo_200_200/0/1602658902214?e=1674086400&v=beta&t=9J-q16QC9x56gfmYNTzNsxffpUoshhUnNp-_rbid0i0"
              }
              actor="Staff"
            ></AdvertisementCard>
            <AdvertisementCard
              jobrole="Software Engineer"
              title=" 99X"
              logo={
                "https://media-exp1.licdn.com/dms/image/C560BAQEVg8fDYKXBCw/company-logo_200_200/0/1601228756308?e=1674086400&v=beta&t=HmQvFNB1BWTxS1_NXhFGEroQidebf-pBAaSazQSqKPY"
              }
              actor="Staff"
            ></AdvertisementCard>
          </Row>
        </div>
      </div>
    );
  }
  //
}

export default StaffMemberAdvertisements;
