import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Row, Card, Col } from 'react-bootstrap';
import "./pieChart.css";

export default class App extends React.Component {

    render() {
        const header = this.props.header;

        const myData = [
            { title: "99X", value: 100, color: "#4a6cf7" },
            { title: "Cisco Labs", value: 50, color: "#0871b1" },
            { title: "LSEG", value: 15, color: "#c2e8ff" },
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

