import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const TestChart_2 = ({ data }) => {
  const [names, setNames] = useState([]);
  const [revenue, setRevenue] = useState([]);
  var xaxis = [];
  var yaxisRevenue = [];
  useEffect(() => {
    const ans = [];
    data.forEach((e) => {
      ans.push(e.fname);
    });
    setNames(ans);

    const ans2 = [];
    data.forEach((e) => {
      const temp = e.trips;
      var total = 0;
      temp.forEach((element) => {
        total = total + Number(element.revenue);
      });
      ans2.push(total);
    });
    setRevenue(ans2);
  }, [data]);

  names.forEach((name) => xaxis.push(name));
  revenue.forEach((data) => {
    yaxisRevenue.push(data);
  });

  return (
    <div>
      <Plot
        style={{ marginTop: "20%" }}
        data={[
          {
            x: xaxis,
            y: yaxisRevenue,
            type: "bar",
            mode: "none",
            marker: { color: "red,green, blue" },
          },
        ]}
        layout={{ width: 3000, height: 500, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default TestChart_2;
