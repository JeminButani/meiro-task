import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const ChartPage = () => {
  const [data, setData] = useState([]);
  var xaxis = [];
  var yaxisTrips = [];
  var yaxisRevenue = [];

  useEffect(() => {
    fetch("http://localhost:5000/totalDrivers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((i) => {
        setData(i.data);
      });
  }, []);

  for (let x in data) {
    xaxis.push(data[x].name);
    yaxisTrips.push(data[x].trips);
    yaxisRevenue.push(data[x].revenue);
  }

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        marginLeft: "10%",
        flexDirection: "column",
      }}
    >
      <Line
        style={{ maxHeight: "50vh" }}
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
      />

      <Line
        style={{ maxHeight: "50vh" }}
        title="City Revenue Chart"
        data={{
          // Name of the variables on x-axies for each bar
          labels: xaxis,
          datasets: [
            {
              label: "Revenue",
              indexAxis: "x",
              data: yaxisRevenue,
              backgroundColor: ["green"],
            },
          ],
        }}
      />
      <Link to="/">Back</Link>
    </div>
  );
};

export default ChartPage;
