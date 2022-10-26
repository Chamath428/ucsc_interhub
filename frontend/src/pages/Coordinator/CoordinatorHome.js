import React, { Component, useEffect, useState } from "react";
import CoordinatorCard from "../../component/Dashboard/CoordinatorCard/coordinatorCard";
import "../../styles/CoordinatorHome.css";
import { Row, Card, Col } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import PieChart from "../../component/Charts/pieChart";
import ApexCharts from "../../component/Charts/aphexChart";
import { callServer } from "../authServer";
import Table from "react-bootstrap/Table";

import { Chart } from "react-charts";

const CoordinatorHome = () => {
  const [show, setShow] = useState(false);
  const [alertPara, setAlertPara] = useState("User added Successfully!");
  const [variant, setVariant] = useState("success");
  const [CardDetails, setCardDetails] = useState([]);
  const [chartDetails, setChartDetails] = useState([]);
  const [companyWiseDetails, setCompanyWiseDetails] = useState([]);
  // console.log(CardDetails[0])
  // var totalStudent = 0;
  // var totalCompany = 0;
  // var totalCs = 0;
  // var selectCs = 0;
  // var totalIs = 0;
  // var selectIs = 0;

  // console.log(CardDetails[0])
  // var totalStudent = 0;
  // var totalCompany = 0;
  // var totalCs = 0;
  // var selectCs = 0;
  // var totalIs = 0;
  // var selectIs = 0;

  // if (CardDetails.length > 0) {
  //     totalStudent = CardDetails[0].countStudent;
  //     totalCompany = CardDetails[0].countActiveCompany;

  // }
  // if (chartDetails.length > 0) {
  //     totalCs = chartDetails.csTotal;
  //     selectCs = chartDetails.selectTotalCs;
  //     totalIs = chartDetails.isTotal;
  //     selectIs = chartDetails.selectTotalIs;

  // }

  // }

  useEffect(() => {
    const authRequest = {
      method: "post",
      url: "coordinator/homeCardDetails",
      data: {},
    };

    callServer(authRequest)
      .then((response) => {
        response.data.map((item) => {
          setCardDetails((prevState) => [
            ...prevState,
            {
              countAnnousment: item.announcement_id,
              countActiveCompany: item.company_id,
              countStudent: item.index_number,
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

    const getChartData = {
      method: "post",
      url: "coordinator/getChartData",
      data: {},
    };

    callServer(getChartData)
      .then((response) => {
        response.data.map((item) => {
          setChartDetails((prevState) => [
            ...prevState,
            {
              csTotal: item.totalCsStu,
              selectTotalCs: item.totalSelectedCsStu,
              isTotal: item.totalIsStu,
              selectTotalIs: item.totalSelectedIsStu,
              totalStudent: item.totalStudent,
              totalSelectStudent: item.totalSelectedStu,
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

    const CompanyWiseStudent = {
      method: "post",
      url: "coordinator/companyWiseNoStudent",
      data: {},
    };

    callServer(CompanyWiseStudent)
      .then((response) => {
        console.log(response.data);
        response.data.map((item) => {
          setCompanyWiseDetails((prevState) => [
            ...prevState,
            {
              companyNames: item.name,
              CountOfCompany: item.count,
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

  return (
    <Container className="mt-0 ms-4" style={{ width: "99%" }}>
      <Row className="mb-3">
        <h2 className="mb-4">Coordinator Dashboard</h2>
      </Row>
      <Row className="card-contain">
        {CardDetails.map((CardDetails) => (
          <>
            <CoordinatorCard
              title={"Students"}
              count={CardDetails.countStudent}
              icon={"people-fill"}
              cardWidth={3}
            ></CoordinatorCard>
            <CoordinatorCard
              title={"Companies"}
              count={CardDetails.countActiveCompany}
              icon={"building"}
              cardWidth={3}
            ></CoordinatorCard>
            <CoordinatorCard
              title={"Interns "}
              count={"225"}
              icon={"person-check-fill"}
              cardWidth={3}
            ></CoordinatorCard>
            <CoordinatorCard
              title={"Post Announcement"}
              count={CardDetails.countAnnousment}
              icon={"file-earmark-text-fill"}
              cardWidth={3}
            ></CoordinatorCard>
          </>
        ))}
      </Row>

      <Row className="chart-contain ml-1">
        {chartDetails.map((chartDetails) => (
          <>
            <Row>
              <Col>
                {" "}
                <PieChart
                  header={"Selected Students: CS"}
                  valSelected={parseInt(chartDetails.selectTotalCs)}
                  valAll={parseInt(chartDetails.csTotal)}
                />
              </Col>
              <Col>
                {" "}
                <PieChart
                  header={"Selected Students: IS"}
                  valSelected={parseInt(chartDetails.selectTotalIs)}
                  valAll={parseInt(chartDetails.isTotal)}
                />
              </Col>
              <Col>
                {" "}
                <ApexCharts
                  header={"View Overall"}
                  Numbers={[
                    parseInt(chartDetails.totalStudent),
                    parseInt(chartDetails.totalSelectStudent),
                  ]}
                  companyName={["Total", "Selected"]}
                />
              </Col>
            </Row>
          </>
        ))}
      </Row>

      {/* Students table by degree */}
      <Row>
      <h3 className="mb-4 mt-5 ml-0">Selected Status</h3>

        <Table style={{ maxHeight: "60vh" , maxWidth:"135vh"}}>
                  <thead className="bg-primary text-white thead-primary">
            <tr>
              <th>Course</th>
              <th>Completed</th>
              <th>Pending Count</th>
              <th>Completed %</th>
              <th>Pending %</th>
            </tr>
          </thead>
          <tbody>
            {chartDetails.map((chartDetails) => (
              <>
                <tr>
                  <td>Computer Systems</td>
                  <td>{chartDetails.selectTotalCs}</td>
                  <td>{chartDetails.csTotal - chartDetails.selectTotalCs}</td>
                  <td>
                    {parseFloat(
                      (chartDetails.selectTotalCs / chartDetails.csTotal) * 100
                    ).toFixed(2)}
                    %
                  </td>
                  {/* let directly = parseFloat(number.toFixed(2)) */}
                  <td>
                    {parseFloat(
                      ((chartDetails.csTotal - chartDetails.selectTotalCs) /
                        chartDetails.csTotal) *
                        100
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
                <tr>
                  <td>Information Systems</td>
                  <td>{chartDetails.selectTotalIs}</td>
                  <td>{chartDetails.isTotal - chartDetails.selectTotalIs}</td>
                  <td>
                    {parseFloat(
                      (chartDetails.selectTotalIs / chartDetails.isTotal) * 100
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {parseFloat(
                      ((chartDetails.isTotal - chartDetails.selectTotalIs) /
                        chartDetails.isTotal) *
                        100
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
                <tr>
                  <td>All</td>
                  <td>{chartDetails.totalSelectStudent}</td>
                  <td>
                    {chartDetails.totalStudent -
                      chartDetails.totalSelectStudent}
                  </td>
                  <td>
                    {parseFloat(
                      (chartDetails.totalSelectStudent /
                        chartDetails.totalStudent) *
                        100
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {parseFloat(
                      ((chartDetails.totalStudent -
                        chartDetails.totalSelectStudent) /
                        chartDetails.totalStudent) *
                        100
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </Row>

      {/* Company table */}

      <Row>
      <h3 className="mb-4 mt-5 ml-0">Company Selection</h3>

        <Table style={{ maxHeight: "60vh" , maxWidth:"135vh"}}>
          <thead className="bg-primary text-white thead-primary">
            <tr>
              <th>Company/Organization</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {companyWiseDetails.map((companyWiseDetails) => (
              <tr>
                <td>{companyWiseDetails.companyNames}</td>
                <td>{companyWiseDetails.CountOfCompany}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
export default CoordinatorHome;
