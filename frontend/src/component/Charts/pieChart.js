import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import "./pieChart.css";
import { PieChart } from "react-minimal-pie-chart";


export default class App extends React.Component {

  render() {
    const header = this.props.header;
    const valRegistered = this.props.valSelected;
    const valNotRegistered = this.props.valAll;



    let data = [
      { title: "Selected\n"+valRegistered, value: valRegistered, color: "#4a6cf7" },
      { title: "Not Selected\n"+valNotRegistered, value: valNotRegistered, color: "#c2e8ff" },

    ];

    return (
      <Row className="PieChart-container">

        <h5>{header}</h5>
        <PieChart
          animate
          animationDuration={600}
          animationEasing="ease-in"
          center={[50, 50]}
          data={data}
          lineWidth={15}
          lengthAngle={360}
          paddingAngle={0}
          radius={50}
          rounded
          startAngle={0}
          viewBoxSize={[100, 100]}
          labelStyle={{
            fontSize: "6px",
            fontColor: "FFFFFA",
            fontWeight: "500",
            fontFamily: "monospace"
          }}
          // label={(data) => data.dataEntry.title}
          // labelPosition={0}


        label={({ dataEntry }) => {
          if (dataEntry.title === "Selected\n"+valRegistered) {
            return "Selected\n" + dataEntry.value;
          }
        }}
        labelPosition={0}

        />

      </Row>

    );
  }
}