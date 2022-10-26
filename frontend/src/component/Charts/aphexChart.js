import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Row, Card, Col } from 'react-bootstrap';
import "./pieChart.css";

export default class App extends React.Component {

    render() {
        const header = this.props.header;
        const numbers = this.props.Numbers;
        const companyName = this.props.companyName;
        const viewBoxSize= [100, 100];

// console.log(companyName)
        const myData = [
            { title: companyName[0], value: numbers[0], color: "#355CCC" },
            { title: companyName[1], value: numbers[1], color: "#B9D9EB" },
            
        ];
        
        return (
            <Row className="PieChart-container">
                <h5>{header}</h5>

                <PieChart
                    animate
                    radius={30}
                    animationDuration={1000}
                    data={myData}
                    label={(data) => data.dataEntry.title }
                    labelPosition={60}
                    labelStyle={{
                        fontSize: "5px",
                        fontColor: "FFFFFA",
                        fontWeight: "500",
                        fontFamily: "Segoe UI"
                    }}
                   
                    // label={(data) => data.dataEntry.title}
                    // labelPosition={70}
                />


            </Row>

        );
    }
}

