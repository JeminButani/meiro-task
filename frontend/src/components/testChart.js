import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Plot from "react-plotly.js";

const TestChart = ({ data }) => {
  const [names, setNames] = useState([]);
  const [revenue, setRevenue] = useState([]);
  // const [trips, setTrips] = useState([]);
  var xaxis = [];
  var yaxisRevenue = [];
  // var yaxisTrips = [];

  // useEffect(() => {
  //   fetch("http://localhost:5000/getNames", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((i) => {
  //       setNames(i.data);
  //     });
  //   fetch("http://localhost:5000/getTotRev", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((i) => {
  //       setRevenue(i.data);
  //     });
  //   fetch("http://localhost:5000/getTotTrips", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((i) => {
  //       setTrips(i.data);
  //     });
  // }, []);

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

  revenue.forEach((data) => {
    yaxisRevenue.push(data);
  });
  // trips.forEach((data) => {
  //   yaxisTrips.push(data);
  // });

  names.forEach((name) => xaxis.push(name));

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        display: "flex",
        marginLeft: "10%",
        flexDirection: "column",
        overflowX: "scroll",
        overflowY: "scroll",
      }}
    >
      {/* <Line
        style={{ maxHeight: "80vh", width: "2000px" }}
        title="City Trips Chart"
        data={{
          // Name of the variables on x-axies for each bar
          labels: xaxis,

          datasets: [
            {
              label: "Trips",
              indexAxis: "x",
              data: yaxisTrips,
              backgroundColor: ["red"],
            },
          ],
        }}
      /> */}
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

      <Link to="/">Back</Link>
    </div>
  );
};

export default TestChart;
