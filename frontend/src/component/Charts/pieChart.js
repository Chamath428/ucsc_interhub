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
      { title: "Selected\n"+valRegistered, value: valRegistered, color: "#355CCC" },
      { title: "Not Selected\n"+valNotRegistered, value: valNotRegistered, color: "#B9D9EB" },

    ];

    return (
      <Row className="PieChart-container">

        <h5>{header}</h5>
        <PieChart
          animate
          animationDuration={1000}
          animationEasing="ease-in"
          center={[50, 50]}
          data={data}
          lineWidth={35}
          lengthAngle={360}
          paddingAngle={0}
          radius={30}
          startAngle={270}
          viewBoxSize={[100, 100]}
          labelStyle={{
            fontSize: "6px",
            fontColor: "fff",
            fontWeight: "500",
            fontFamily: "Segoe UI"
          }}
          // label={(data) => data.dataEntry.title}
          // labelPosition={0}


        label={({ dataEntry }) => {
          if (dataEntry.title === "Selected\n"+valRegistered) {
            return dataEntry.value+" / "+valNotRegistered;
          }
        }}
        labelPosition={0}

        />

      </Row>

    );
  }
}