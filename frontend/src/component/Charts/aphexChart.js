import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Row, Card, Col } from 'react-bootstrap';
import "./pieChart.css";

export default class App extends React.Component {

    render() {
        const header = this.props.header;
        const numbers = this.props.Numbers;
        const companyName = this.props.companyName;

// console.log(companyName)
        const myData = [
            { title: companyName[0], value: numbers[0], color: "#4a6cf7" },
            { title: companyName[1], value: numbers[1], color: "#0871b1" },
            
        ];
        
        return (
            <Row className="PieChart-container">
                <h5>{header}</h5>

                <PieChart
                    animate
                    animationDuration={600}
                    data={myData}
                    label={(data) => data.dataEntry.title }
                    labelPosition={70}
                    labelStyle={{
                        fontSize: "6px",
                        fontColor: "FFFFFA",
                        fontWeight: "500",
                        fontFamily: "monospace"
                        
                    }}
                   
                    // label={(data) => data.dataEntry.title}
                    // labelPosition={70}
                />


            </Row>

        );
    }
}

