import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const AllChart = () => {
  // const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  // var allDrivers = [
  //   "sohan",
  //   "ruchit",
  //   "jemin",
  //   "yash",
  //   "vivek",
  //   "devansh",
  //   "jugal",
  //   "sachin",
  //   "jatin",
  //   "malay",
  // ];
  var allMonths = [];
  var allTrips = [];

  useEffect(() => {
    // fetch("http://localhost:5000/totalDrivers", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((i) => {
    //     setData(i.data);
    //   });
    fetch("http://localhost:5000/allMonths", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((i) => {
        setAllData(i.data);
      });
  }, []);

  // for (let x in data) {
  //   allDrivers.push(data[x].name);
  // }

  // console.log("allDrivers", allDrivers);

  for (let x in allData) {
    allMonths.push(allData[x].name);
    allTrips.push(allData[x].sohan.trips);
    allTrips.push(allData[x].ruchit.trips);
    allTrips.push(allData[x].jemin.trips);
    allTrips.push(allData[x].yash.trips);
    allTrips.push(allData[x].vivek.trips);
    allTrips.push(allData[x].devansh.trips);
    allTrips.push(allData[x].jugal.trips);
    allTrips.push(allData[x].sachin.trips);
    allTrips.push(allData[x].jatin.trips);
    allTrips.push(allData[x].malay.trips);
  }
  console.log("allMonths", allTrips);

  return (
    <div>
      <Plot
        data={[
          {
            // x: allMonths,
            y: allTrips,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 1020, height: 640, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default AllChart;
