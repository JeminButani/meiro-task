import React from "react";
import Plot from "react-plotly.js";

const chart = ({ allMonths, allTrips, title, color }) => {
  return (
    <div>
      <Plot
        data={[
          {
            x: allMonths,
            y: allTrips,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: color },
          },
        ]}
        layout={{ width: 900, height: 700, title: title }}
      />
    </div>
  );
};

export default chart;
