import React from 'react';
import "./pieChart.css";
import { PieChart } from "react-minimal-pie-chart";


export default class App extends React.Component {

  render() {
    let data = [
      { title: "One", value: 10, color: "#4a6cf7" },
      { title: "Two", value: 2, color: "red" },
      { title: "Three", value: 3, color: "green" },
    ];
    return (
      <div className="PieChart-container">

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
          // labelPosition={70}

          label={({ dataEntry }) => {
            if (dataEntry.title === "One") {
              return "rate\n"+Math.round(dataEntry.value) + "% ";
            }
          }}
          labelPosition={0}






        />
      </div>
    );
  }
}