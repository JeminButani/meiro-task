import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import "./testChart.scss";

const TripsChart = ({ data }) => {
  const [names, setNames] = useState([]);
  const [trips, setTrips] = useState([]);
  var xaxis = [];
  var yaxisTrips = [];
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
        total += 1;
      });
      ans2.push(total);
    });
    setTrips(ans2);
  }, [data]);

  trips.forEach((data) => {
    yaxisTrips.push(data);
  });

  names.forEach((name) => xaxis.push(name));

  return (
    <div className="mainWrapper">
      <center>
        <h1>Total Trips per Driver</h1>
      </center>
      <div className="chartWrapper">
        <div className="chartAreaWrapper">
          <Line
            className="chart"
            width="12000"
            height="400"
            title=" Chart"
            data={{
              labels: xaxis,
              datasets: [
                {
                  label: "Trips",
                  indexAxis: "x",
                  data: yaxisTrips,
                  backgroundColor: [
                    "red",
                    "green",
                    "blue",
                    "yellow",
                    "black",
                    "cyan",
                  ],
                  pointHoverBorderWidth: 10,
                  p0: 0,
                  p1: 0,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default TripsChart;
