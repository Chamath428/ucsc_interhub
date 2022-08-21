import React from "react";
import { PieChart } from "react-minimal-pie-chart";


const myData = [
    { title: "Dogs", value: 100, color: "#FFA600" },
    { title: "Cats", value: 50, color: "#00FF00" },
    { title: "Dragons", value: 15, color: "#4a6cf7" },
];

const App = () => {
    return (
        <div className="PieChart-container">
            <PieChart
                animate
                animationDuration={600}
                data={myData}
                label={(data) => data.dataEntry.title}
                labelPosition={70}
                labelStyle={{
                    fontSize: "6px",
                    fontColor: "FFFFFA",
                    fontWeight: "500",
                    fontFamily: "monospace"
                }}
            />

        </div>
    );
};

export default App;