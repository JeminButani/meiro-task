import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import "./testChart.scss";

const RevenueChart = ({ data }) => {
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
    <div className="mainWrapper">
      <center>
        <h1>Total Revenue per Driver</h1>
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
                  data: yaxisRevenue,
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
      {/* <div className="overlap">
        <div className="hideme">
          <Line
            width="12000"
            height="400"
            title=" Chart"
            data={{
              labels: xaxis,
              datasets: [
                {
                  label: "Trips",
                  indexAxis: "x",
                  data: yaxisRevenue,
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
      </div> */}
    </div>
  );
};

export default RevenueChart;
